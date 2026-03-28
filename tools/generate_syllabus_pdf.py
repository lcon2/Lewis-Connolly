from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "files" / "meaning-in-a-disenchanted-age-syllabus.pdf"


CONTENT = [
    ("h1", "Course syllabus"),
    (
        "p",
        "Meaning in a Disenchanted Age: Myth, Mind, and Spirituality in the 21st Century - "
        "a seven-session course on myth, psyche, faith, wonder, and moral life in a disenchanted age. "
        "It offers orientation, pressure, and a deeper way of seeing rather than a quick system. "
        "Each session is text-based, designed to take roughly 45 to 75 minutes, and includes a companion PDF.",
    ),
    ("h2", "Course description"),
    (
        "p",
        "This course begins from the modern meaning crisis: the thinning of shared symbolic worlds, "
        "the over-identification of worth with productivity, and the strange weightlessness produced by unlimited choice. "
        "From there it moves into archetype and the collective unconscious, then into inward work, the slow evolution of faith, "
        "the recovery of wonder, the outward pressure of ethics and community, and finally a provisional synthesis adequate to late modern life. "
        "The course assumes that myth, psyche, attention, and moral life cannot be separated without making life thinner than it is.",
    ),
    ("h2", "Who it is for"),
    (
        "p",
        "It is aimed at people navigating a modern meaning crisis, spiritually curious readers who want depth without dogma, "
        "readers drawn to Jung, myth, and symbolic life, reflective readers who prefer depth to quick answers, "
        "and small groups looking for serious conversation.",
    ),
    ("h2", "Suggested pace"),
    (
        "p",
        "Move through the course in order. A weekly pace is probably best, because these pieces are written to settle "
        "rather than be consumed quickly, though the material also supports a more compressed reading if the thread is alive. "
        "A notebook helps, but the course itself explicitly privileges silence and attention over overactive note-taking.",
    ),
    ("h2", "Session 1 - The Modern Crisis of Meaning"),
    (
        "p",
        "Why disenchantment happened and what it left behind. This session names the crisis: the erosion of shared metaphysical worlds, "
        "the substitution of productivity for purpose, the destabilizing effects of technological change, "
        "and the loss of existential stakes in a culture of endless revision. It is diagnostic, not solutionist.",
    ),
    ("h2", "Session 2 - Mythic Archetypes and the Collective Unconscious"),
    (
        "p",
        "How ancient patterns still shape our stories, fears, and hopes. This session restores symbolic depth to a flattened world "
        "by introducing archetypal life: the Hero, Trickster, Shadow, Great Mother, and the collective psyche beneath personal consciousness. "
        "It argues that myth is not behind us but beneath us, still shaping culture, dream, conflict, and longing.",
    ),
    ("h2", "Session 3 - Journey to the Inner Self"),
    (
        "p",
        "Practices for meeting the deeper layers of the psyche with honesty. This session turns inward after crisis and archetype, "
        "exploring the layered psyche, dreams, symbol, active imagination, non-striving attention, and the slow work of shadow integration. "
        "Its central claim is that inner work is not self-manufacture but responsibility at depth.",
    ),
    ("h2", "Session 4 - Evolving Faith"),
    (
        "p",
        "What spiritual maturity looks like when certainty fades. This session takes up the question of faith after the collapse of coercive certainty. "
        "It argues for a quieter, tougher faith: less triumphalist, less transactional, more participatory, more corrigible, "
        "and more willing to live with unansweredness without becoming either dogmatic or vague.",
    ),
    ("h2", "Session 5 - Rediscovering Wonder"),
    (
        "p",
        "Reclaiming awe, beauty, and reverence in everyday life. This session shifts from belief to perception, arguing that wonder is disciplined receptivity "
        "rather than emotional spectacle. It treats attention, repetition, beauty, embodiment, and contemplative practices as ways of restoring contour "
        "and seriousness to the everyday, while also showing how wonder naturally begins to create ethical pressure.",
    ),
    ("h2", "Session 6 - Ethics and Society"),
    (
        "p",
        "How personal meaning becomes shared responsibility. This session insists that inward depth must cross into relation, speech, community, and institutions. "
        "It explores the moral complexity of pluralism, the fragility of communal memory, the difficulty of ethical language, "
        "and the need to hold principle, context, and discernment together without collapsing into slogans or tribalism.",
    ),
    ("h2", "Session 7 - A Synthesis"),
    (
        "p",
        "Drawing the threads together into a coherent way of life. The final session gathers the course into a way of standing rather than a final doctrine: "
        "a life shaped by interior depth, relational responsibility, discernment of forms, chosen constraints, and technological seriousness. "
        "It aims not at closure, but at durable, revisable coherence in an age of drift and infinite revision.",
    ),
    ("h2", "Course outcomes"),
    (
        "p",
        "By the end, the reader should not feel as though they have been handed a simple framework. They should feel more oriented inside the actual pressures of modern life: "
        "more able to name the meaning crisis, more able to recognize mythic patterning, more honest about the inner life, more mature in faith, "
        "more receptive to wonder, more serious about ethical and communal life, and more capable of holding these dimensions together without forcing premature closure. "
        "That is what the course, in its current form, now largely achieves.",
    ),
]


def wrap_line(text: str, font_name: str, font_size: int, max_width: float) -> list[str]:
    words = text.split()
    if not words:
        return []
    lines = []
    current = words[0]
    for word in words[1:]:
        trial = f"{current} {word}"
        if pdfmetrics.stringWidth(trial, font_name, font_size) <= max_width:
            current = trial
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def ensure_page(c: canvas.Canvas, y: float, margin: int) -> float:
    if y >= margin:
        return y
    c.showPage()
    return LETTER[1] - margin


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=LETTER)
    margin = 72
    width = LETTER[0] - (margin * 2)
    y = LETTER[1] - margin

    for block_type, text in CONTENT:
        if block_type == "h1":
            y = ensure_page(c, y, margin)
            c.setFont("Times-Bold", 20)
            for line in wrap_line(text, "Times-Bold", 20, width):
                y = ensure_page(c, y, margin)
                c.drawString(margin, y, line)
                y -= 26
            y -= 4
            continue

        if block_type == "h2":
            y -= 4
            y = ensure_page(c, y, margin)
            c.setFont("Times-Bold", 13)
            for line in wrap_line(text, "Times-Bold", 13, width):
                y = ensure_page(c, y, margin)
                c.drawString(margin, y, line)
                y -= 18
            y -= 2
            continue

        c.setFont("Times-Roman", 11)
        for line in wrap_line(text, "Times-Roman", 11, width):
            y = ensure_page(c, y, margin)
            c.drawString(margin, y, line)
            y -= 16
        y -= 8

    c.save()
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
