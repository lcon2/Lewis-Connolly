---
layout: post
title: "Introducing NoteTick"
date: 2026-03-07
permalink: /notetick/
author: "Lewis Connolly"
author_url: "/about/"
categories:
  - Technology
og_image: /assets/images/notetick-screenshot-1.png
og_image_width: 2559
og_image_height: 1388
image_alt: "NoteTick running on a desktop with several notes open at once."
description: "Introducing NoteTick, a lightweight desktop sticky-note app for quick notes, checklists, offline use, adjustable UI scale, and an optional dyslexia-friendly font."
ai_summary: "NoteTick is a lightweight desktop notes app built for quick tasks and simple checklists without accounts, syncing, subscriptions, or feature overload. Lewis created it after finding existing sticky-note tools cluttered, dated, or overbuilt. The app focuses on movable desktop notes, checkboxes, bullet lists, text formatting, links, images, color themes, adjustable UI scale, an optional dyslexia-friendly font, fast startup, and fully offline operation."
---

<style>
.notetick-carousel {
  margin: 24px auto 30px;
  padding: 14px 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(28, 28, 28, 0.96), rgba(15, 15, 15, 0.96));
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.32);
}

.notetick-carousel:focus-visible {
  outline: 2px solid rgba(209, 174, 122, 0.7);
  outline-offset: 4px;
}

.notetick-carousel-viewport {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  min-height: 420px;
  background: rgba(10, 10, 10, 0.92);
  cursor: pointer;
  touch-action: pan-y;
}

.notetick-carousel-track {
  display: flex;
  transform: translateX(0);
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.notetick-slide {
  margin: 0;
  min-height: 420px;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.notetick-slide img {
  width: 100%;
  max-height: 560px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
}

.notetick-carousel-controls {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  pointer-events: none;
}

.notetick-carousel-btn {
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(17, 17, 17, 0.78);
  color: #f4ede5;
  font-size: 1.15em;
  line-height: 1;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.notetick-carousel-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(209, 174, 122, 0.45);
  background: rgba(31, 24, 18, 0.92);
  color: #ffbf7a;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
}

.notetick-carousel-btn:focus-visible {
  outline: 2px solid rgba(209, 174, 122, 0.75);
  outline-offset: 2px;
}

.notetick-carousel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.notetick-carousel-caption {
  margin: 0;
  color: #d2c6b9;
  font-size: 0.92em;
  letter-spacing: 0.02em;
}

.notetick-carousel-dots {
  display: flex;
  gap: 8px;
}

.notetick-carousel-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: width 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.notetick-carousel-dot.is-active {
  width: 28px;
  background: #d1ae7a;
}

.notetick-carousel-dot:hover {
  transform: scale(1.05);
}

.notetick-carousel-dot:focus-visible {
  outline: 2px solid rgba(209, 174, 122, 0.75);
  outline-offset: 2px;
}

.notetick-intro {
  margin: 8px auto 32px;
  padding: 24px 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(42, 33, 24, 0.96), rgba(24, 24, 24, 0.96));
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
}

.notetick-kicker {
  margin: 0 0 8px;
  font-size: 0.78em;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: #d7c5ae;
}

.notetick-tagline {
  margin: 0;
  font-size: 1.18em;
  line-height: 1.65;
  color: #f4ede5;
}

.notetick-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin: 34px 0 26px;
}

.notetick-panel {
  padding: 22px 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  background: rgba(24, 24, 24, 0.84);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24);
}

.notetick-panel-muted {
  background: linear-gradient(180deg, rgba(28, 28, 28, 0.94), rgba(21, 21, 21, 0.92));
}

.notetick-panel h3 {
  margin: 0 0 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.08em;
  line-height: 1.35;
  letter-spacing: 0.03em;
  text-transform: none;
  color: #f2ebe4;
  font-weight: 600;
}

.notetick-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.notetick-list li {
  position: relative;
  padding-left: 20px;
  color: #e4ddd7;
}

.notetick-list li::before {
  content: "+";
  position: absolute;
  left: 0;
  top: 0;
  color: #d1ae7a;
  font-weight: 700;
}

.notetick-panel-muted .notetick-list li::before {
  content: "-";
}

.notetick-signoff {
  margin-top: 8px;
  font-size: 1.08em;
  color: #f2ebe3;
}

.notetick-download {
  margin: 40px auto 18px;
  padding: 30px 28px 24px;
  max-width: 620px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(26, 26, 26, 0.94), rgba(16, 16, 16, 0.97));
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.3);
}

.notetick-download p {
  margin: 0 auto 20px;
  max-width: 44ch;
  color: #ddd2c5;
  font-size: 0.99em;
  line-height: 1.75;
}

.notetick-download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 290px;
  max-width: 100%;
  padding: 14px 22px 14px 18px;
  border: 1px solid rgba(255, 185, 104, 0.38);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(86, 63, 29, 0.98), rgba(49, 34, 21, 0.98));
  color: #f6ede4 !important;
  text-decoration: none;
  border-bottom: none !important;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
  transition: transform 0.2s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.notetick-download-link img {
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  border-radius: 6px;
  display: block;
}

.notetick-download-link:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 205, 139, 0.6);
  background: linear-gradient(180deg, rgba(100, 74, 34, 0.98), rgba(56, 39, 24, 0.98));
  color: #ffcc93 !important;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.32);
}

.notetick-download-link:focus-visible {
  outline: 2px solid rgba(209, 174, 122, 0.82);
  outline-offset: 4px;
}

.notetick-download-meta {
  margin-top: 14px;
  color: #c5b7a4;
  font-size: 0.86em;
  letter-spacing: 0.04em;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .notetick-carousel {
    padding: 12px 12px 14px;
  }

  .notetick-carousel-viewport,
  .notetick-slide {
    min-height: 280px;
  }

  .notetick-carousel-btn {
    width: 40px;
    height: 40px;
  }

  .notetick-intro {
    padding: 20px;
  }

  .notetick-panel {
    padding: 20px;
  }

  .notetick-download {
    padding: 24px 18px 22px;
  }

  .notetick-download-link {
    width: 100%;
    min-width: 0;
    padding-right: 18px;
    padding-left: 16px;
  }

  .notetick-download-meta {
    font-size: 0.82em;
    letter-spacing: 0.02em;
  }
}
</style>

<div class="notetick-carousel" data-notetick-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="NoteTick screenshots">
  <div class="notetick-carousel-viewport">
    <div class="notetick-carousel-track" data-carousel-track>
      <figure class="notetick-slide" data-caption="Desktop overview" aria-hidden="false">
        <img src="{{ '/assets/images/notetick-screenshot-1.png' | relative_url }}" alt="NoteTick running on a desktop with several notes open at once." loading="eager">
      </figure>
      <figure class="notetick-slide" data-caption="Checklist note" aria-hidden="true">
        <img src="{{ '/assets/images/notetick-screenshot-2.png' | relative_url }}" alt="A NoteTick to-do note with checkboxes and a clickable link." loading="lazy">
      </figure>
      <figure class="notetick-slide" data-caption="Notes overview" aria-hidden="true">
        <img src="{{ '/assets/images/notetick-screenshot-3.png' | relative_url }}" alt="The main NoteTick window showing multiple notes and search." loading="lazy">
      </figure>
    </div>
    <div class="notetick-carousel-controls">
      <button class="notetick-carousel-btn" type="button" data-carousel-prev aria-label="Previous screenshot">&larr;</button>
      <button class="notetick-carousel-btn" type="button" data-carousel-next aria-label="Next screenshot">&rarr;</button>
    </div>
  </div>
  <div class="notetick-carousel-footer">
    <p class="notetick-carousel-caption" data-carousel-caption>Desktop overview</p>
    <div class="notetick-carousel-dots" aria-label="Choose screenshot">
      <button class="notetick-carousel-dot is-active" type="button" data-carousel-dot="0" aria-label="Show screenshot 1" aria-current="true"></button>
      <button class="notetick-carousel-dot" type="button" data-carousel-dot="1" aria-label="Show screenshot 2" aria-current="false"></button>
      <button class="notetick-carousel-dot" type="button" data-carousel-dot="2" aria-label="Show screenshot 3" aria-current="false"></button>
    </div>
  </div>
</div>

<div class="notetick-intro">
  <p class="notetick-kicker">Desktop notes without the noise</p>
  <p class="notetick-tagline">No accounts. No distractions. Just simple notes and checkboxes.</p>
</div>

I wanted some sticky notes on my desktop.

I looked through the various options available, and none of them worked for me. Some were cluttered with features I did not need. Others looked dated, or required accounts and syncing for something that should be simple.

So I made my own.

NoteTick is my personal productivity tool for managing small tasks and quick notes. It lives quietly on the desktop, ready whenever I need to jot something down or tick something off, without adding clutter to my real desk.

I like having to-do lists that I can tick off, and that is really the heart of the app.

But I also wanted something that felt native to the desktop. Not a web app pretending to be one. Real windows that you can move around, resize, and keep open while you work, like sticky notes scattered across a desk.

Each note can hold quick thoughts, small lists, links, or tasks. You can mix checkboxes and simple bullet points, format text when you need to emphasise something, and keep several notes open at once while you work.

The goal is not to replace a full task manager.

It is simply to make the small things easier to keep track of. Something quick, quiet, and always there when you need it.

<div class="notetick-grid">
  <section class="notetick-panel">
    <h3>What NoteTick focuses on</h3>
    <ul class="notetick-list">
      <li>Multiple sticky notes that can stay open on your desktop</li>
      <li>Checkboxes and bullet lists in the same note</li>
      <li>Basic text formatting: bold, italic, underline, and strikethrough</li>
      <li>Clickable links and local file paths</li>
      <li>Inline images when needed</li>
      <li>Color themes for organising notes visually</li>
      <li>Adjustable UI scale</li>
      <li>Optional dyslexia-friendly font</li>
      <li>Fast startup and fully offline operation</li>
    </ul>
  </section>
  <section class="notetick-panel notetick-panel-muted">
    <h3>What I left out on purpose</h3>
    <ul class="notetick-list">
      <li>No accounts</li>
      <li>No syncing</li>
      <li>No subscriptions</li>
      <li>No feature overload</li>
      <li>Just notes</li>
    </ul>
  </section>
</div>

<p class="notetick-signoff">I built NoteTick because I wanted it on my own desktop. If it ends up being useful to other people too, that is a nice bonus.</p>

<section class="notetick-download" aria-label="Download NoteTick">
  <p>If you'd like to try NoteTick on your own desktop, you can download the installer below.</p>
  <a class="notetick-download-link" href="https://buymeacoffee.com/lewisconnolly/e/517926" target="_blank" rel="noopener noreferrer" aria-label="Download NoteTick for 5 dollars, opens in a new tab">
    <img src="{{ '/assets/images/ticknote-icon.png' | relative_url }}" alt="" aria-hidden="true">
    <span>Download NoteTick &ndash; $5</span>
  </a>
  <div class="notetick-download-meta">Windows installer &bull; runs fully offline &bull; no account required</div>
</section>

<script>
(function () {
  var carousel = document.querySelector('[data-notetick-carousel]');
  if (!carousel) return;

  var viewport = carousel.querySelector('.notetick-carousel-viewport');
  var track = carousel.querySelector('[data-carousel-track]');
  var slides = Array.prototype.slice.call(carousel.querySelectorAll('.notetick-slide'));
  var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-dot]'));
  var caption = carousel.querySelector('[data-carousel-caption]');
  var prev = carousel.querySelector('[data-carousel-prev]');
  var next = carousel.querySelector('[data-carousel-next]');
  var activeIndex = 0;

  function setActive(index) {
    activeIndex = (index + slides.length) % slides.length;

    if (track) {
      track.style.transform = 'translateX(' + (-activeIndex * 100) + '%)';
    }

    slides.forEach(function (slide, slideIndex) {
      slide.setAttribute('aria-hidden', slideIndex === activeIndex ? 'false' : 'true');
    });

    dots.forEach(function (dot, dotIndex) {
      var isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    if (caption) {
      caption.textContent = slides[activeIndex].getAttribute('data-caption') || '';
    }
  }

  if (prev) {
    prev.addEventListener('click', function () {
      setActive(activeIndex - 1);
    });
  }

  if (next) {
    next.addEventListener('click', function () {
      setActive(activeIndex + 1);
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      setActive(Number(dot.getAttribute('data-carousel-dot')));
    });
  });

  if (viewport) {
    viewport.addEventListener('click', function (event) {
      if (event.target.closest('button')) return;
      setActive(activeIndex + 1);
    });
  }

  carousel.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActive(activeIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActive(activeIndex + 1);
    }
  });

  setActive(0);
})();
</script>
