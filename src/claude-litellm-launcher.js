import crypto from "node:crypto";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DEFAULT_PORT = 4444;
const DEFAULT_MODEL = "claude-opus-4-7";
const DEFAULT_SMALL_FAST_MODEL = "claude-sonnet-4-6";
const READY_TIMEOUT_MS = Number(process.env.CLAUDE_LITELLM_READY_TIMEOUT_MS || 300000);

let proxyProcess = null;
let stoppingProxy = false;

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => path.resolve(value)))];
}

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function readJsonIfPresent(filePath) {
  try {
    if (!fileExists(filePath)) return undefined;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return undefined;
  }
}

function findProjectRoot() {
  const exeDir = path.dirname(process.execPath);
  const candidates = unique([
    process.env.CLAUDE_LITELLM_ROOT,
    process.cwd(),
    exeDir,
    path.resolve(exeDir, ".."),
    path.resolve(import.meta.dir, ".."),
  ]);

  for (const candidate of candidates) {
    const configPath = path.join(candidate, "litellm", "copilot-config.yaml");
    const cliPath = path.join(
      candidate,
      "litellm",
      "custom_claude_bun_extracted",
      "files",
      "root",
      "src",
      "entrypoints",
      "cli.js",
    );
    if (fileExists(configPath) && fileExists(cliPath)) return candidate;
  }

  throw new Error(
    "Could not find the litellm sidecar directory. Keep claude.exe beside the litellm folder, or set CLAUDE_LITELLM_ROOT.",
  );
}

function parseEnvFile(envPath) {
  const result = {};
  if (!fileExists(envPath)) return result;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index <= 0) continue;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function getClaudeSettingsPath() {
  const home = process.env.USERPROFILE || process.env.HOME || os.homedir();
  return path.join(home, ".claude", "settings.json");
}

function readClaudeSettingsToken() {
  const settings = readJsonIfPresent(getClaudeSettingsPath());
  const token = settings?.env?.ANTHROPIC_AUTH_TOKEN;
  return typeof token === "string" && token.length > 0 ? token : undefined;
}

function ensureProxyEnv(litellmDir) {
  const envPath = path.join(litellmDir, ".env");
  const envValues = parseEnvFile(envPath);
  const masterKey =
    process.env.CLAUDE_LITELLM_MASTER_KEY ||
    process.env.LITELLM_MASTER_KEY ||
    readClaudeSettingsToken() ||
    envValues.LITELLM_MASTER_KEY ||
    `litellm-${crypto.randomUUID()}`;
  const saltKey =
    process.env.CLAUDE_LITELLM_SALT_KEY ||
    process.env.LITELLM_SALT_KEY ||
    envValues.LITELLM_SALT_KEY ||
    `litellm-${crypto.randomUUID()}`;

  const nextValues = {
    ...envValues,
    LITELLM_MASTER_KEY: masterKey,
    LITELLM_SALT_KEY: saltKey,
    ENABLE_NETWORK_MONITOR: envValues.ENABLE_NETWORK_MONITOR || "true",
    LOG_LEVEL: envValues.LOG_LEVEL || "INFO",
  };

  const preferredOrder = [
    "LITELLM_MASTER_KEY",
    "LITELLM_SALT_KEY",
    "ENABLE_NETWORK_MONITOR",
    "LOG_LEVEL",
  ];
  const keys = [
    ...preferredOrder,
    ...Object.keys(nextValues).filter((key) => !preferredOrder.includes(key)).sort(),
  ];
  const serialized = [...keys.map((key) => `${key}=${nextValues[key]}`), ""].join(os.EOL);
  fs.writeFileSync(envPath, serialized, "utf8");

  return { masterKey, saltKey };
}

function syncClaudeSettings({ masterKey, baseUrl, model, smallFastModel }) {
  if (process.env.CLAUDE_LITELLM_SKIP_SETTINGS_SYNC === "1") return;

  const settingsPath = getClaudeSettingsPath();
  fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
  const settings = readJsonIfPresent(settingsPath) || {};
  settings.env = {
    ...(settings.env && typeof settings.env === "object" ? settings.env : {}),
    ANTHROPIC_AUTH_TOKEN: masterKey,
    ANTHROPIC_BASE_URL: baseUrl,
    ANTHROPIC_MODEL: model,
    ANTHROPIC_SMALL_FAST_MODEL: smallFastModel,
  };
  settings.model = model;
  if (!settings.$schema) {
    settings.$schema = "https://json.schemastore.org/claude-code-settings.json";
  }
  fs.writeFileSync(settingsPath, `${JSON.stringify(settings, null, 2)}${os.EOL}`, "utf8");
}

function configureClaudeEnv({ masterKey, baseUrl, model, smallFastModel }) {
  process.env.ANTHROPIC_AUTH_TOKEN = masterKey;
  process.env.ANTHROPIC_BASE_URL = baseUrl;
  process.env.ANTHROPIC_MODEL = model;
  process.env.ANTHROPIC_SMALL_FAST_MODEL = smallFastModel;
}

function isPortOpen(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const socket = net.createConnection({ port, host });
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => resolve(false));
    socket.setTimeout(500, () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function waitForPort(port, host = "127.0.0.1") {
  const start = Date.now();
  while (Date.now() - start < READY_TIMEOUT_MS) {
    if (await isPortOpen(port, host)) return true;
    await Bun.sleep(500);
  }
  return false;
}

function shouldForwardProxyText(text) {
  return /please visit|authenticate|device code|user_code|verification_uri|traceback|exception|error/i.test(
    text,
  );
}

function pumpProxyOutput(stream, target, logPath, state) {
  const log = fs.createWriteStream(logPath, { flags: "a" });
  const decoder = new TextDecoder();

  (async () => {
    try {
      for await (const chunk of stream) {
        const text = decoder.decode(chunk, { stream: true });
        log.write(text);
        if (state.forwardAll || shouldForwardProxyText(text)) target.write(text);
      }
    } catch (error) {
      target.write(`[claude-litellm] Proxy log stream failed: ${error.message}\n`);
    } finally {
      log.end();
    }
  })();
}

function shouldStartProxy(args) {
  if (process.env.CLAUDE_LITELLM_DISABLE === "1") return false;
  if (args.length === 0) return true;

  const first = args[0];
  if (["--version", "-v", "-V", "--help", "-h", "help"].includes(first)) return false;
  if (first === "update" || first === "upgrade") return false;
  return true;
}

function getProxyEnv({ masterKey, saltKey }) {
  const env = {
    ...process.env,
    LITELLM_MASTER_KEY: masterKey,
    LITELLM_SALT_KEY: saltKey,
    PYTHONUNBUFFERED: "1",
    PYTHONUTF8: "1",
  };

  if (process.env.CLAUDE_LITELLM_FORWARD_DEBUG !== "1") {
    delete env.DEBUG;
  }

  return env;
}

async function startLiteLLM({ litellmDir, port, masterKey, saltKey }) {
  if (await isPortOpen(port)) {
    process.stderr.write(`[claude-litellm] Reusing existing proxy on port ${port}.\n`);
    return;
  }

  const pythonExe = path.join(litellmDir, ".venv", "Scripts", "python.exe");
  const runnerPath = path.join(litellmDir, "scripts", "run_proxy.py");
  const configPath = path.join(litellmDir, "copilot-config.yaml");

  if (!fileExists(pythonExe)) {
    throw new Error(`Python venv not found: ${pythonExe}`);
  }
  if (!fileExists(runnerPath)) {
    throw new Error(`LiteLLM runner not found: ${runnerPath}`);
  }

  const logPath = path.join(litellmDir, "proxy.log");
  const state = { forwardAll: process.env.CLAUDE_LITELLM_SHOW_PROXY_LOGS === "1" };
  process.stderr.write(`[claude-litellm] Starting LiteLLM proxy on http://localhost:${port}.\n`);

  proxyProcess = Bun.spawn({
    cmd: [
      pythonExe,
      runnerPath,
      "--config",
      configPath,
      "--port",
      String(port),
    ],
    cwd: litellmDir,
    env: getProxyEnv({ masterKey, saltKey }),
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
  });

  pumpProxyOutput(proxyProcess.stdout, process.stderr, logPath, state);
  pumpProxyOutput(proxyProcess.stderr, process.stderr, logPath, state);

  proxyProcess.exited.then((code) => {
    if (!stoppingProxy && code !== 0) {
      process.stderr.write(`[claude-litellm] LiteLLM exited with code ${code}. See ${logPath}\n`);
    }
  });

  const ready = await waitForPort(port);
  state.forwardAll = process.env.CLAUDE_LITELLM_SHOW_PROXY_LOGS === "1";
  if (!ready) {
    throw new Error(`Timed out waiting for LiteLLM to listen on port ${port}. See ${logPath}`);
  }
  process.stderr.write(`[claude-litellm] LiteLLM is ready. Proxy logs: ${logPath}\n`);
}

function stopLiteLLM() {
  if (proxyProcess) {
    stoppingProxy = true;
    proxyProcess.kill();
    proxyProcess = null;
  }
}

async function main() {
  const projectRoot = findProjectRoot();
  const litellmDir = path.join(projectRoot, "litellm");
  const claudeCliPath = path.join(
    litellmDir,
    "custom_claude_bun_extracted",
    "files",
    "root",
    "src",
    "entrypoints",
    "cli.js",
  );
  const port = Number(process.env.CLAUDE_LITELLM_PORT || DEFAULT_PORT);
  const baseUrl = process.env.CLAUDE_LITELLM_BASE_URL || `http://localhost:${port}`;
  const model = process.env.CLAUDE_LITELLM_MODEL || process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;
  const smallFastModel =
    process.env.CLAUDE_LITELLM_SMALL_FAST_MODEL ||
    process.env.ANTHROPIC_SMALL_FAST_MODEL ||
    DEFAULT_SMALL_FAST_MODEL;
  const { masterKey, saltKey } = ensureProxyEnv(litellmDir);

  configureClaudeEnv({ masterKey, baseUrl, model, smallFastModel });
  syncClaudeSettings({ masterKey, baseUrl, model, smallFastModel });
  process.on("exit", stopLiteLLM);

  const args = process.argv.slice(2);
  if (process.env.CLAUDE_LITELLM_PROXY_ONLY === "1") {
    await startLiteLLM({ litellmDir, port, masterKey, saltKey });
    stopLiteLLM();
    return;
  }

  if (shouldStartProxy(args)) {
    await startLiteLLM({ litellmDir, port, masterKey, saltKey });
  }

  try {
    await import(pathToFileURL(claudeCliPath).href);
  } finally {
    stopLiteLLM();
  }
}

main().catch((error) => {
  stopLiteLLM();
  process.stderr.write(`[claude-litellm] ${error.stack || error.message}\n`);
  process.exit(1);
});
