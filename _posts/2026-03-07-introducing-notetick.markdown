---
layout: post
title: "Introducing NoteTick"
date: 2026-03-07
author: "Lewis Connolly"
author_url: "/about/"
categories:
  - Technology
og_image: /assets/images/notetick-hero.svg
description: "A short introduction to NoteTick, a quiet desktop sticky-note app built for quick notes, checklists, and offline use."
ai_summary: "NoteTick is a lightweight desktop notes app built for quick tasks and simple checklists without accounts, syncing, subscriptions, or feature overload. Lewis created it after finding existing sticky-note tools cluttered, dated, or overbuilt. The app focuses on movable desktop notes, checkboxes, bullet lists, text formatting, links, images, color themes, fast startup, and fully offline operation."
---

<style>
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
  margin: 0 0 14px;
  font-size: 0.95em;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #e9ddd0;
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
  padding-left: 18px;
  color: #e4ddd7;
}

.notetick-list li::before {
  content: "+";
  position: absolute;
  left: 0;
  top: 0;
  color: #ff9933;
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

@media (max-width: 768px) {
  .notetick-intro {
    padding: 20px;
  }

  .notetick-panel {
    padding: 20px;
  }
}
</style>

<img src="{{ '/assets/images/notetick-hero.svg' | relative_url }}" alt="Introducing NoteTick" style="display: block; margin: 24px auto 28px; max-width: 760px; width: 100%; height: auto;">

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
      <li>Fast startup and fully offline operation</li>
    </ul>
  </section>
  <section class="notetick-panel notetick-panel-muted">
    <h3>What I intentionally left out</h3>
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
