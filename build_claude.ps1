param(
  [string]$OutFile = "claude.exe"
)

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Entry = Join-Path $Root "src\claude-litellm-launcher.js"
$Output = if ([System.IO.Path]::IsPathRooted($OutFile)) {
  $OutFile
} else {
  Join-Path $Root $OutFile
}

if (-not (Get-Command bun -ErrorAction SilentlyContinue)) {
  throw "bun was not found on PATH"
}

& bun build --compile --target=bun --outfile "$Output" "$Entry"
if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

Write-Host "Built $Output"
Write-Host "Keep the litellm directory beside this executable."
