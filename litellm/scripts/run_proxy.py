#!/usr/bin/env python3
"""Run the LiteLLM proxy without relying on the generated litellm.exe shim."""

from __future__ import annotations

import sys

from litellm import run_server


def main() -> int:
    return run_server.main(
        args=sys.argv[1:],
        prog_name="litellm",
        standalone_mode=True,
    )


if __name__ == "__main__":
    raise SystemExit(main())
