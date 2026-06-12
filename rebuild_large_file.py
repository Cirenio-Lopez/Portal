#!/usr/bin/env python3
"""Rebuild a large file from chunks created by split_large_file.py."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import sys
from pathlib import Path


BUFFER_SIZE = 4 * 1024 * 1024
MANIFEST_NAME = "manifest.json"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Rebuild a file from chunk parts.")
    parser.add_argument("chunks_dir", type=Path, help="Directory containing manifest.json")
    parser.add_argument(
        "output_file",
        nargs="?",
        type=Path,
        help="Output file; defaults to the manifest source name beside the chunks directory",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite the output file if it already exists",
    )
    return parser.parse_args()


def load_manifest(chunks_dir: Path) -> dict:
    manifest_path = chunks_dir / MANIFEST_NAME
    with manifest_path.open("r", encoding="utf-8") as manifest_file:
        manifest = json.load(manifest_file)

    if manifest.get("version") != 1:
        raise ValueError(f"Unsupported manifest version in {manifest_path}")
    if not manifest.get("chunks"):
        raise ValueError(f"Manifest has no chunks: {manifest_path}")
    return manifest


def rebuild_file(chunks_dir: Path, output_file: Path, force: bool, manifest: dict) -> None:
    if output_file.exists() and not force:
        raise FileExistsError(f"Output already exists: {output_file}. Use --force to overwrite.")

    output_file.parent.mkdir(parents=True, exist_ok=True)
    temp_file = output_file.with_name(f"{output_file.name}.tmp")
    full_hash = hashlib.sha256()
    total_size = 0

    try:
        with temp_file.open("wb") as output:
            for chunk in manifest["chunks"]:
                chunk_path = chunks_dir / chunk["file"]
                with chunk_path.open("rb") as chunk_file:
                    chunk_data_hash = hashlib.sha256()
                    chunk_size = 0
                    while True:
                        data = chunk_file.read(BUFFER_SIZE)
                        if not data:
                            break
                        output.write(data)
                        full_hash.update(data)
                        chunk_data_hash.update(data)
                        chunk_size += len(data)
                        total_size += len(data)

                if chunk_size != chunk["size"]:
                    raise ValueError(f"Chunk size mismatch for {chunk_path}")
                if chunk_data_hash.hexdigest() != chunk["sha256"]:
                    raise ValueError(f"Chunk checksum mismatch for {chunk_path}")

        if total_size != manifest["size"]:
            raise ValueError("Rebuilt file size does not match manifest")
        if full_hash.hexdigest() != manifest["sha256"]:
            raise ValueError("Rebuilt file checksum does not match manifest")

        os.replace(temp_file, output_file)
        if "mode" in manifest:
            os.chmod(output_file, int(manifest["mode"], 8))
    except Exception:
        if temp_file.exists():
            temp_file.unlink()
        raise


def main() -> int:
    args = parse_args()
    chunks_dir = args.chunks_dir

    try:
        manifest = load_manifest(chunks_dir)
        output_file = args.output_file or chunks_dir.parent / manifest["source_name"]
        rebuild_file(chunks_dir, output_file, args.force, manifest)
    except (FileExistsError, FileNotFoundError, OSError, ValueError, KeyError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    print(f"Rebuilt {output_file}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
