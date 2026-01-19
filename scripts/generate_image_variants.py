from pathlib import Path
from PIL import Image
import json

SRC_DIR = Path("assets/images")
PLACEHOLDER_DIR = SRC_DIR / "placeholders"
PLACEHOLDER_DIR.mkdir(parents=True, exist_ok=True)

EXCLUDE_NAMES = {
    "logo.png",
    "logo2.png",
    "bullet.png",
    "bullet2.png",
    "buybeer.png",
    "beer.png",
    "asterism1.png",
    "asterism2.png",
}
EXCLUDE_DIRS = {"footnote", "placeholders"}
MIN_BYTES = 25 * 1024


def save_resized(img, path, width, fmt, quality=None):
    w, h = img.size
    if w <= width:
        return None
    new_h = max(1, int(h * (width / w)))
    resized = img.resize((width, new_h), Image.LANCZOS)
    save_kwargs = {}
    if fmt.lower() in ("jpg", "jpeg"):
        save_kwargs.update(
            {"quality": quality or 82, "optimize": True, "progressive": True}
        )
    elif fmt.lower() == "png":
        save_kwargs.update({"optimize": True})
    elif fmt.lower() == "webp":
        save_kwargs.update({"quality": quality or 80, "method": 6})
    resized.save(path, **save_kwargs)
    return (width, new_h)


manifest = {}

for path in SRC_DIR.rglob("*"):
    if not path.is_file():
        continue
    if path.parent.name in EXCLUDE_DIRS:
        continue
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        continue
    if path.name.lower() in EXCLUDE_NAMES:
        continue
    if path.stat().st_size < MIN_BYTES:
        continue

    rel_path = "/" + str(path.as_posix())
    name = path.stem
    ext = path.suffix.lower().lstrip(".")

    img = Image.open(path)
    has_alpha = img.mode in ("RGBA", "LA") or (
        img.mode == "P" and "transparency" in img.info
    )

    placeholder_path = PLACEHOLDER_DIR / f"{name}-placeholder.jpg"
    tiny = img.copy()
    tiny.thumbnail((48, 48 * 10000), Image.LANCZOS)
    if has_alpha:
        bg = Image.new("RGB", tiny.size, (21, 21, 21))
        bg.paste(tiny.convert("RGBA"), mask=tiny.convert("RGBA").split()[-1])
        tiny = bg
    else:
        tiny = tiny.convert("RGB")
    tiny.save(placeholder_path, quality=45, optimize=True, progressive=True)

    webp_path = path.with_suffix(".webp")
    if has_alpha:
        img.save(webp_path, quality=80, method=6)
    else:
        img.convert("RGB").save(webp_path, quality=80, method=6)

    fallback_srcset = []
    webp_srcset = []

    w, _ = img.size
    if w > 800:
        resized_path = path.with_name(f"{name}-800.{ext}")
        save_resized(img, resized_path, 800, ext)
        fallback_srcset.append(f"{resized_path.as_posix()} 800w")

        resized_webp_path = path.with_name(f"{name}-800.webp")
        save_resized(img, resized_webp_path, 800, "webp", quality=80)
        webp_srcset.append(f"{resized_webp_path.as_posix()} 800w")

    fallback_srcset.append(f"{path.as_posix()} {w}w")
    webp_srcset.append(f"{webp_path.as_posix()} {w}w")

    manifest[rel_path] = {
        "placeholder": "/" + str(placeholder_path.as_posix()),
        "srcset": ", ".join(fallback_srcset),
        "webp_srcset": ", ".join(webp_srcset),
    }

manifest_path = Path("assets/js/image-manifest.js")
manifest_path.write_text(
    "window.IMAGE_MANIFEST = " + json.dumps(manifest, indent=2) + ";\n",
    encoding="utf-8",
)
print(f"Updated {manifest_path} with {len(manifest)} images.")
