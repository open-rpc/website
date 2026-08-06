#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow", "potracer", "numpy"]
# ///
"""Trace a flat single-colour PNG logo into a tight-viewBox SVG.

Usage:
    uv run scripts/trace-logo.py <source.png> <out.svg>:<fill> [<out.svg>:<fill> ...]

The source alpha channel is cropped to its bounding box before tracing, so the
resulting viewBox has no transparent padding. Emitting several outputs from one
source avoids re-tracing identical geometry for light/dark variants.
"""

import sys

import numpy as np
import potrace
from PIL import Image

ALPHA_THRESHOLD = 128


def fmt(point) -> str:
    return f"{point.x:.1f},{point.y:.1f}"


def trace(png_path: str) -> tuple[str, int, int]:
    alpha = Image.open(png_path).convert("RGBA").getchannel("A")
    bbox = alpha.getbbox()
    if bbox is None:
        raise SystemExit(f"{png_path}: image is fully transparent")
    alpha = alpha.crop(bbox)
    width, height = alpha.size

    # potracer treats a truthy cell as background, so the mask is inverted here.
    path = potrace.Bitmap(np.array(alpha) < ALPHA_THRESHOLD).trace(
        turdsize=8,
        alphamax=1.0,
        opttolerance=0.2,
    )

    parts: list[str] = []
    for curve in path:
        parts.append(f"M{fmt(curve.start_point)}")
        for seg in curve.segments:
            if seg.is_corner:
                parts.append(f"L{fmt(seg.c)}L{fmt(seg.end_point)}")
            else:
                parts.append(
                    f"C{fmt(seg.c1)} {fmt(seg.c2)} {fmt(seg.end_point)}")
        parts.append("Z")

    return "".join(parts), width, height


def main() -> None:
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)

    source, *targets = sys.argv[1:]
    d, width, height = trace(source)

    for target in targets:
        out_path, _, fill = target.partition(":")
        fill = fill or "currentColor"
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}">'
            f'<path fill="{fill}" fill-rule="evenodd" d="{d}"/>'
            f"</svg>\n"
        )
        with open(out_path, "w") as fh:
            fh.write(svg)
        print(f"{out_path}: {width}x{height}, {len(svg):,} bytes")


if __name__ == "__main__":
    main()
