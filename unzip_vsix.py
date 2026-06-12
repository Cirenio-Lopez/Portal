#!/usr/bin/env python3
"""Extract a VSIX package into a directory."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from zipfile import BadZipFile, ZipFile


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Extract a .vsix package.")
    parser.add_argument("vsix", type=Path, help="Path to the .vsix file")
    parser.add_argument(
        "output_dir",
        nargs="?",
        type=Path,
        help="Directory to extract into; defaults to the VSIX filename without extension",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Allow extracting into a non-empty output directory",
    )
    return parser.parse_args()


def safe_target(base_dir: Path, archive_name: str) -> Path:
    target = (base_dir / archive_name).resolve()
    if base_dir.resolve() not in (target, *target.parents):
        raise ValueError(f"Unsafe archive path: {archive_name}")
    return target


def extract_vsix(vsix_path: Path, output_dir: Path, force: bool) -> None:
    if not vsix_path.is_file():
        raise FileNotFoundError(f"VSIX not found: {vsix_path}")

    if output_dir.exists() and any(output_dir.iterdir()) and not force:
        raise FileExistsError(
            f"Output directory is not empty: {output_dir}. Use --force to extract anyway."
        )

    output_dir.mkdir(parents=True, exist_ok=True)

    with ZipFile(vsix_path, "r") as archive:
        for member in archive.infolist():
            target = safe_target(output_dir, member.filename)

            if member.is_dir():
                target.mkdir(parents=True, exist_ok=True)
                continue

            target.parent.mkdir(parents=True, exist_ok=True)
            with archive.open(member, "r") as source, target.open("wb") as dest:
                dest.write(source.read())


def main() -> int:
    args = parse_args()
    output_dir = args.output_dir or args.vsix.with_suffix("")

    try:
        extract_vsix(args.vsix, output_dir, args.force)
    except (BadZipFile, FileExistsError, FileNotFoundError, ValueError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    print(f"Extracted {args.vsix} -> {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
