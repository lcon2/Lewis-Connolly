import html
import re
from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
COURSE_DIR = ROOT / "studies" / "meaning-in-a-disenchanted-age"
PDF_DIR = ROOT / "assets" / "PDF"


def strip_front_matter(text: str) -> str:
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) == 3:
            return parts[2]
    return text


def clean_text(value: str) -> str:
    value = re.sub(r"\{\{.*?\}\}", "", value, flags=re.DOTALL)
    value = re.sub(r"<.*?>", "", value, flags=re.DOTALL)
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def extract_blocks(markdown: str):
    body = strip_front_matter(markdown)
    blocks = []
    for match in re.finditer(r"<(h1|h2|p|li)[^>]*>(.*?)</\1>", body, flags=re.DOTALL | re.IGNORECASE):
        tag = match.group(1).lower()
        text = clean_text(match.group(2))
        if not text:
            continue
        # Skip utility nav labels.
        if text in {"Prev", "Next", "Back to syllabus", "Back to course", "Download session PDF"}:
            continue
        blocks.append((tag, text))
    return blocks


def wrap_line(text: str, font_name: str, font_size: int, max_width: float):
    words = text.split()
    if not words:
        return []
    lines = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        if pdfmetrics.stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def draw_text_block(c, x, y, width, text, font_name, font_size, leading):
    for line in wrap_line(text, font_name, font_size, width):
        if y < 72:
            c.showPage()
            y = LETTER[1] - 72
        c.setFont(font_name, font_size)
        c.drawString(x, y, line)
        y -= leading
    return y


def write_pdf(session_number: int, source_file: Path):
    blocks = extract_blocks(source_file.read_text(encoding="utf-8"))
    if not blocks:
        raise ValueError(f"No renderable blocks found in {source_file}")

    output = PDF_DIR / f"Session_{session_number}.pdf"
    c = canvas.Canvas(str(output), pagesize=LETTER)
    width, height = LETTER
    margin = 72
    text_width = width - margin * 2
    y = height - margin

    h1_used = False
    for tag, text in blocks:
        if tag == "h1" and not h1_used:
            c.setFont("Times-Bold", 21)
            y = draw_text_block(c, margin, y, text_width, text, "Times-Bold", 21, 25)
            y -= 10
            h1_used = True
            continue

        if tag == "h2":
            y -= 8
            c.setFont("Times-Bold", 13)
            y = draw_text_block(c, margin, y, text_width, text, "Times-Bold", 13, 18)
            # Quiet extra space after Reflection heading.
            if text.lower() == "reflection":
                y -= 8
            else:
                y -= 4
            continue

        if tag == "li":
            y = draw_text_block(c, margin, y, text_width, f"• {text}", "Times-Roman", 11, 16)
            y -= 4
            continue

        y = draw_text_block(c, margin, y, text_width, text, "Times-Roman", 11, 16)
        y -= 10

    c.save()


def main():
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    for n in range(1, 8):
        session_file = COURSE_DIR / f"session-{n}" / "index.markdown"
        write_pdf(n, session_file)
    print("Generated Session_1.pdf through Session_7.pdf")


if __name__ == "__main__":
    main()
