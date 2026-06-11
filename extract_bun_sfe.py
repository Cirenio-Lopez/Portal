#!/usr/bin/env python3
"""Extract files embedded in a Bun standalone executable.

This handles Windows PE executables that contain Bun's dedicated `.bun`
section. The section layout is:

    u64 payload_len
    payload bytes:
      embedded strings / bytecode / files
      CompiledModuleGraphFile[]
      Offsets
      "\n---- Bun! ----\n"

The struct shapes here mirror Bun's src/StandaloneModuleGraph.zig for x64
standalone executables.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import struct
from pathlib import Path, PurePosixPath


TRAILER = b"\n---- Bun! ----\n"
OFFSETS_SIZE = 32
MODULE_RECORD_SIZE = 52

ENCODINGS = {
    0: "binary",
    1: "latin1",
    2: "utf8",
}

MODULE_FORMATS = {
    0: "none",
    1: "esm",
    2: "cjs",
}

SIDES = {
    0: "server",
    1: "client",
}

LOADERS = {
    0: "jsx",
    1: "js",
    2: "ts",
    3: "tsx",
    4: "css",
    5: "file",
    6: "json",
    7: "jsonc",
    8: "toml",
    9: "wasm",
    10: "napi",
    11: "base64",
    12: "dataurl",
    13: "text",
    14: "bunsh",
    15: "sqlite",
    16: "sqlite_embedded",
    17: "html",
}


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def read_cstringish(raw: bytes, offset: int, length: int) -> bytes:
    if length == 0:
        return b""
    if offset < 0 or length < 0 or offset + length > len(raw):
        raise ValueError(f"string pointer out of range: offset={offset:#x}, length={length:#x}")
    return raw[offset : offset + length]


def find_pe_section(exe: bytes, wanted_name: bytes) -> tuple[int, int, dict]:
    if exe[:2] != b"MZ":
        raise ValueError("not a PE executable: missing MZ header")

    pe_offset = struct.unpack_from("<I", exe, 0x3C)[0]
    if exe[pe_offset : pe_offset + 4] != b"PE\0\0":
        raise ValueError("not a PE executable: missing PE signature")

    (
        machine,
        section_count,
        _timestamp,
        _symbol_ptr,
        _symbol_count,
        optional_header_size,
        characteristics,
    ) = struct.unpack_from("<HHIIIHH", exe, pe_offset + 4)

    section_table = pe_offset + 4 + 20 + optional_header_size
    sections = []
    for index in range(section_count):
        section_offset = section_table + index * 40
        header = exe[section_offset : section_offset + 40]
        name = header[:8].rstrip(b"\0")
        virtual_size, virtual_address, raw_size, raw_offset = struct.unpack_from("<IIII", header, 8)
        section = {
            "index": index,
            "name": name.decode("latin1", "replace"),
            "virtual_size": virtual_size,
            "virtual_address": virtual_address,
            "raw_size": raw_size,
            "raw_offset": raw_offset,
        }
        sections.append(section)
        if name == wanted_name:
            return raw_offset, raw_size, {
                "machine": machine,
                "section_count": section_count,
                "characteristics": characteristics,
                "sections": sections,
                "bun_section": section,
            }

    names = ", ".join(section["name"] for section in sections)
    raise ValueError(f"PE section {wanted_name!r} not found; sections: {names}")


def parse_bun_payload(section: bytes) -> tuple[bytes, dict, list[dict]]:
    if len(section) < 8:
        raise ValueError(".bun section is too small")

    payload_len = struct.unpack_from("<Q", section, 0)[0]
    if payload_len > len(section) - 8:
        raise ValueError(
            f"payload length {payload_len:#x} exceeds available .bun data {len(section) - 8:#x}"
        )

    raw = section[8 : 8 + payload_len]
    trailer_offset = raw.rfind(TRAILER)
    if trailer_offset < 0:
        raise ValueError("Bun trailer not found in payload")

    offsets_offset = trailer_offset - OFFSETS_SIZE
    if offsets_offset < 0:
        raise ValueError("payload too small for Bun offsets struct")

    byte_count = struct.unpack_from("<Q", raw, offsets_offset)[0]
    modules_offset, modules_len = struct.unpack_from("<II", raw, offsets_offset + 8)
    entry_point_id = struct.unpack_from("<I", raw, offsets_offset + 16)[0]
    argv_offset, argv_len = struct.unpack_from("<II", raw, offsets_offset + 20)
    flags = struct.unpack_from("<I", raw, offsets_offset + 28)[0]

    if byte_count != offsets_offset:
        raise ValueError(f"unexpected byte_count: {byte_count:#x} != {offsets_offset:#x}")
    if modules_len % MODULE_RECORD_SIZE:
        raise ValueError(f"module table length is not a multiple of {MODULE_RECORD_SIZE}: {modules_len}")
    if modules_offset + modules_len > len(raw):
        raise ValueError("module table points outside payload")

    modules = []
    module_count = modules_len // MODULE_RECORD_SIZE
    if entry_point_id >= module_count:
        raise ValueError(f"entry point id {entry_point_id} is outside module count {module_count}")

    for index in range(module_count):
        base = modules_offset + index * MODULE_RECORD_SIZE
        ptrs = [struct.unpack_from("<II", raw, base + n * 8) for n in range(6)]
        encoding_id = raw[base + 48]
        loader_id = raw[base + 49]
        module_format_id = raw[base + 50]
        side_id = raw[base + 51]

        name = read_cstringish(raw, *ptrs[0]).decode("utf-8", "replace")
        origin = read_cstringish(raw, *ptrs[5]).decode("utf-8", "replace")
        modules.append(
            {
                "index": index,
                "entry_point": index == entry_point_id,
                "name": name,
                "contents_ptr": {"offset": ptrs[1][0], "length": ptrs[1][1]},
                "sourcemap_ptr": {"offset": ptrs[2][0], "length": ptrs[2][1]},
                "bytecode_ptr": {"offset": ptrs[3][0], "length": ptrs[3][1]},
                "module_info_ptr": {"offset": ptrs[4][0], "length": ptrs[4][1]},
                "bytecode_origin_path": origin,
                "encoding": ENCODINGS.get(encoding_id, f"unknown:{encoding_id}"),
                "loader": LOADERS.get(loader_id, f"unknown:{loader_id}"),
                "module_format": MODULE_FORMATS.get(module_format_id, f"unknown:{module_format_id}"),
                "side": SIDES.get(side_id, f"unknown:{side_id}"),
            }
        )

    compile_exec_argv = read_cstringish(raw, argv_offset, argv_len).decode("utf-8", "replace")
    metadata = {
        "payload_length": payload_len,
        "trailer_offset": trailer_offset,
        "offsets_offset": offsets_offset,
        "byte_count": byte_count,
        "modules_offset": modules_offset,
        "modules_length": modules_len,
        "module_count": module_count,
        "entry_point_id": entry_point_id,
        "compile_exec_argv": compile_exec_argv,
        "flags": {
            "raw": flags,
            "disable_default_env_files": bool(flags & 1),
            "disable_autoload_bunfig": bool(flags & 2),
            "disable_autoload_tsconfig": bool(flags & 4),
            "disable_autoload_package_json": bool(flags & 8),
        },
    }
    return raw, metadata, modules


def safe_relative_path(name: str) -> Path:
    normalized = name.replace("\\", "/")
    normalized = re.sub(r"^[A-Za-z]:/~BUN/", "", normalized)
    normalized = re.sub(r"^\$bunfs/", "", normalized)
    normalized = normalized.lstrip("/")

    parts = []
    for part in PurePosixPath(normalized).parts:
        if part in ("", ".", ".."):
            continue
        cleaned = re.sub(r'[<>:"|?*\x00-\x1f]', "_", part)
        parts.append(cleaned)

    if not parts:
        parts = ["unnamed"]
    return Path(*parts)


def write_blob(base: Path, rel: Path, data: bytes) -> str:
    out = base / rel
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(data)
    return str(out)


def extract(exe_path: Path, out_dir: Path, write_raw_section: bool) -> dict:
    exe = exe_path.read_bytes()
    bun_offset, bun_size, pe_metadata = find_pe_section(exe, b".bun")
    bun_section = exe[bun_offset : bun_offset + bun_size]
    raw, bun_metadata, modules = parse_bun_payload(bun_section)

    out_dir.mkdir(parents=True, exist_ok=True)
    if write_raw_section:
        write_blob(out_dir, Path("raw") / "bun_section.bin", bun_section)
        write_blob(out_dir, Path("raw") / "bun_payload.bin", raw)

    extracted_modules = []
    for module in modules:
        rel = safe_relative_path(module["name"])

        content_ptr = module["contents_ptr"]
        contents = read_cstringish(raw, content_ptr["offset"], content_ptr["length"])
        content_path = write_blob(out_dir, Path("files") / rel, contents)

        extracted = {
            **module,
            "contents_path": content_path,
            "contents_sha256": sha256(contents),
        }

        for label, suffix in (
            ("sourcemap", ".sourcemap.bin"),
            ("bytecode", ".bytecode.bin"),
            ("module_info", ".module-info.bin"),
        ):
            ptr = module[f"{label}_ptr"]
            if ptr["length"] == 0:
                continue
            data = read_cstringish(raw, ptr["offset"], ptr["length"])
            artifact_rel = Path("artifacts") / rel.with_name(rel.name + suffix)
            extracted[f"{label}_path"] = write_blob(out_dir, artifact_rel, data)
            extracted[f"{label}_sha256"] = sha256(data)

        extracted_modules.append(extracted)

    result = {
        "input": str(exe_path),
        "input_size": len(exe),
        "input_sha256": sha256(exe),
        "pe": pe_metadata,
        "bun": bun_metadata,
        "modules": extracted_modules,
    }

    metadata_path = out_dir / "metadata.json"
    metadata_path.write_text(json.dumps(result, indent=2), encoding="utf-8")
    result["metadata_path"] = str(metadata_path)
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("exe", type=Path, help="Bun standalone executable to extract")
    parser.add_argument(
        "-o",
        "--out-dir",
        type=Path,
        default=Path("claude_extracted"),
        help="output directory (default: claude_extracted)",
    )
    parser.add_argument(
        "--write-raw-section",
        action="store_true",
        help="also write raw .bun section and payload blobs",
    )
    args = parser.parse_args()

    result = extract(args.exe, args.out_dir, args.write_raw_section)
    print(f"wrote metadata: {result['metadata_path']}")
    print(f"modules: {result['bun']['module_count']}")
    for module in result["modules"]:
        marker = " entry" if module["entry_point"] else ""
        print(
            f"- {module['name']}{marker} -> {module['contents_path']} "
            f"({module['contents_ptr']['length']} bytes)"
        )
        for label in ("sourcemap", "bytecode", "module_info"):
            path_key = f"{label}_path"
            if path_key in module:
                print(f"  {label}: {module[path_key]} ({module[label + '_ptr']['length']} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
