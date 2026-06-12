#!/usr/bin/env python3
"""Create a VSIX package from a directory."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create a .vsix package from a directory.")
    parser.add_argument("source_dir", type=Path, help="Directory to package")
    parser.add_argument(
        "output_vsix",
        nargs="?",
        type=Path,
        help="Output .vsix path; defaults to SOURCE_DIR.vsix",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite the output file if it already exists",
    )
    parser.add_argument(
        "--store",
        action="store_true",
        help="Store files without compression instead of using deflate compression",
    )
    return parser.parse_args()


def archive_name(source_dir: Path, path: Path) -> str:
    return path.relative_to(source_dir).as_posix()


def zip_vsix(source_dir: Path, output_vsix: Path, force: bool, compress: bool) -> None:
    if not source_dir.is_dir():
        raise NotADirectoryError(f"Source directory not found: {source_dir}")

    output_vsix = output_vsix.with_suffix(".vsix")

    if output_vsix.exists() and not force:
        raise FileExistsError(f"Output already exists: {output_vsix}. Use --force to overwrite.")

    output_abs = output_vsix.resolve()
    compression = ZIP_DEFLATED if compress else 0

    files = sorted(path for path in source_dir.rglob("*") if path.is_file())
    output_vsix.parent.mkdir(parents=True, exist_ok=True)

    with ZipFile(output_vsix, "w", compression=compression) as archive:
        for path in files:
            if path.resolve() == output_abs:
                continue
            archive.write(path, archive_name(source_dir, path))


def main() -> int:
    args = parse_args()
    output_vsix = args.output_vsix or args.source_dir.with_suffix(".vsix")

    try:
        zip_vsix(args.source_dir, output_vsix, args.force, compress=not args.store)
    except (FileExistsError, NotADirectoryError, OSError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    print(f"Created {output_vsix.with_suffix('.vsix')}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
