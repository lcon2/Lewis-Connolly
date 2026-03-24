"""
Generate homepage hero assets from source PNG:
- LQIP: 600px wide JPEG (heavily compressed, light blur)
- Full: WebP + JPEG, max long edge 3200px (sufficient for any display; source may be much larger)

Run from repo root: python scripts/build_home_hero_images.py
"""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageFilter

REPO = Path(__file__).resolve().parent.parent
OUT_DIR = REPO / "assets" / "images"
SRC_CANDIDATES = (
    OUT_DIR / "home-hero-background-source.png",
    OUT_DIR / "home-hero-background.png",
)
LQIP_W = 600
FULL_MAX = 3200


def resolve_source() -> Path:
    for candidate in SRC_CANDIDATES:
        if candidate.exists():
            return candidate
    raise SystemExit(
        "Missing source PNG. Copy your master to one of:\n"
        f"  - {SRC_CANDIDATES[0]}\n"
        f"  - {SRC_CANDIDATES[1]}"
    )


def main() -> None:
    src = resolve_source()

    img = Image.open(src)
    img = img.convert("RGB")
    w, h = img.size

    # LQIP
    lqip_h = max(1, int(h * (LQIP_W / w)))
    lqip = img.resize((LQIP_W, lqip_h), Image.Resampling.LANCZOS)
    lqip = lqip.filter(ImageFilter.GaussianBlur(radius=3))
    lqip_path = OUT_DIR / "home-hero-background-lqip.jpg"
    lqip.save(lqip_path, quality=38, optimize=True, progressive=True)
    print(f"Wrote {lqip_path.name} ({lqip_path.stat().st_size // 1024} KB)")

    # Full (downscale if huge)
    scale = min(1.0, FULL_MAX / max(w, h))
    if scale < 1.0:
        nw, nh = int(w * scale), int(h * scale)
        full = img.resize((nw, nh), Image.Resampling.LANCZOS)
    else:
        full = img

    webp_path = OUT_DIR / "home-hero-background-full.webp"
    full.save(webp_path, "WEBP", quality=82, method=6)
    print(f"Wrote {webp_path.name} ({webp_path.stat().st_size // 1024} KB)")

    jpg_path = OUT_DIR / "home-hero-background-full.jpg"
    full.save(jpg_path, quality=84, optimize=True, progressive=True)
    print(f"Wrote {jpg_path.name} ({jpg_path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    os.chdir(REPO)
    main()
