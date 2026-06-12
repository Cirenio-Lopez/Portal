#!/usr/bin/env python3
"""Split a large file into Git-friendly chunks with a verification manifest."""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import stat
import sys
from pathlib import Path


DEFAULT_CHUNK_SIZE_MB = 45
BUFFER_SIZE = 4 * 1024 * 1024
MANIFEST_NAME = "manifest.json"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Split a large file into chunks.")
    parser.add_argument("source_file", type=Path, help="File to split")
    parser.add_argument(
        "chunks_dir",
        nargs="?",
        type=Path,
        help="Output chunk directory; defaults to SOURCE_FILE.chunks",
    )
    parser.add_argument(
        "--chunk-size-mb",
        type=int,
        default=DEFAULT_CHUNK_SIZE_MB,
        help=f"Chunk size in MiB; defaults to {DEFAULT_CHUNK_SIZE_MB}",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Replace an existing chunk directory",
    )
    parser.add_argument(
        "--remove-original",
        action="store_true",
        help="Delete the source file after chunks are written and verified",
    )
    return parser.parse_args()


def prepare_chunks_dir(chunks_dir: Path, force: bool) -> None:
    if chunks_dir.exists():
        if not chunks_dir.is_dir():
            raise NotADirectoryError(f"Chunk output is not a directory: {chunks_dir}")
        if any(chunks_dir.iterdir()):
            if not force:
                raise FileExistsError(
                    f"Chunk directory is not empty: {chunks_dir}. Use --force to replace it."
                )
            shutil.rmtree(chunks_dir)

    chunks_dir.mkdir(parents=True, exist_ok=True)


def split_file(source_file: Path, chunks_dir: Path, chunk_size: int) -> dict:
    source_hash = hashlib.sha256()
    chunks = []
    total_size = 0

    with source_file.open("rb") as source:
        part_number = 1
        while True:
            part_name = f"part-{part_number:04d}.bin"
            part_path = chunks_dir / part_name
            part_hash = hashlib.sha256()
            part_size = 0

            with part_path.open("wb") as part:
                while part_size < chunk_size:
                    remaining = min(BUFFER_SIZE, chunk_size - part_size)
                    data = source.read(remaining)
                    if not data:
                        break
                    part.write(data)
                    part_hash.update(data)
                    source_hash.update(data)
                    part_size += len(data)
                    total_size += len(data)

            if part_size == 0:
                part_path.unlink()
                break

            chunks.append(
                {
                    "file": part_name,
                    "size": part_size,
                    "sha256": part_hash.hexdigest(),
                }
            )
            part_number += 1

    mode = stat.S_IMODE(source_file.stat().st_mode)
    return {
        "version": 1,
        "source_name": source_file.name,
        "size": total_size,
        "sha256": source_hash.hexdigest(),
        "chunk_size": chunk_size,
        "mode": f"{mode:o}",
        "chunks": chunks,
    }


def write_manifest(chunks_dir: Path, manifest: dict) -> None:
    manifest_path = chunks_dir / MANIFEST_NAME
    with manifest_path.open("w", encoding="utf-8") as manifest_file:
        json.dump(manifest, manifest_file, indent=2)
        manifest_file.write("\n")


def main() -> int:
    args = parse_args()
    source_file = args.source_file
    chunks_dir = args.chunks_dir or source_file.with_name(f"{source_file.name}.chunks")

    if args.chunk_size_mb <= 0:
        print("error: --chunk-size-mb must be greater than zero", file=sys.stderr)
        return 1

    if not source_file.is_file():
        print(f"error: source file not found: {source_file}", file=sys.stderr)
        return 1

    try:
        prepare_chunks_dir(chunks_dir, args.force)
        manifest = split_file(source_file, chunks_dir, args.chunk_size_mb * 1024 * 1024)
        write_manifest(chunks_dir, manifest)
        if args.remove_original:
            source_file.unlink()
    except (FileExistsError, NotADirectoryError, OSError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    print(
        f"Split {source_file} into {len(manifest['chunks'])} chunks at {chunks_dir} "
        f"({manifest['size']} bytes)."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
