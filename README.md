# Claude LiteLLM Proxy Launcher

This wraps the extracted Claude Code Bun CLI with a LiteLLM proxy launcher.
When Claude starts, the launcher starts LiteLLM on port `4444`, waits for it to
be ready, syncs Claude's proxy environment, and then runs Claude in the same
terminal.

## Build

```powershell
powershell -ExecutionPolicy Bypass -File .\build_claude.ps1
```

Keep the `litellm` directory beside the generated `claude.exe`.

## Runtime Notes

- `litellm\.env` is generated locally and is intentionally not committed.
- `litellm\proxy.log` is generated locally and is intentionally not committed.
- The LiteLLM Python environment should be recreated with `litellm\requirements.txt`.
