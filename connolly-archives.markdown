---
layout: private-archive
title: Connolly Archives
permalink: /connolly-archives/
---

{% assign root_images = site.data.connolly_archives.root_items | where: "type", "image" %}
{% assign root_documents = site.data.connolly_archives.root_items | where: "type", "document" %}

<div class="connolly-archives-shell connolly-archives-page" data-connolly-archives-page data-archive-url="{{ '/archive/' | relative_url }}" hidden>
  <div class="connolly-archives-gate" data-connolly-archives-gate hidden>
    <div class="connolly-archives-gate__backdrop" data-connolly-archives-close></div>
    <div class="connolly-archives-gate__panel" role="dialog" aria-modal="true" aria-labelledby="connolly-archives-gate-title">
      <button class="connolly-archives-gate__close" type="button" aria-label="Close archives access prompt" data-connolly-archives-close>&times;</button>
      <p class="connolly-archives-gate__eyebrow">Private Family Materials</p>
      <h2 id="connolly-archives-gate-title">Connolly Archives</h2>
      <p class="connolly-archives-gate__copy">Enter the password to view the archive.</p>
      <form class="connolly-archives-gate__form" data-connolly-archives-form>
        <label class="connolly-archives-gate__label" for="connolly-archives-password">Password</label>
        <input class="connolly-archives-gate__input" id="connolly-archives-password" name="password" type="password" autocomplete="current-password" required>
        <p class="connolly-archives-gate__error" data-connolly-archives-error hidden>Incorrect password.</p>
        <div class="connolly-archives-gate__actions">
          <button class="connolly-archives-gate__submit" type="submit">Enter Archive</button>
          <a class="connolly-archives-gate__cancel" href="{{ '/archive/' | relative_url }}">Back to Archive</a>
        </div>
      </form>
    </div>
  </div>

  <header class="connolly-archives-hero">
    <p class="connolly-archives-kicker">Private Collection</p>
    <h1>Connolly Archives</h1>
    <p class="connolly-archives-intro">A structured family archive of photographs, papers, memorial materials, and personal effects, arranged by the original recovered folders.</p>
  </header>

  {% if root_images.size > 0 or root_documents.size > 0 %}
  <section class="connolly-archives-section" id="section-overview">
    <div class="connolly-archives-section__header">
      <p class="connolly-archives-section__eyebrow">Overview</p>
      <h2>Documents and Loose Items</h2>
      <p>Standalone items recovered at the top level of the archive, including documents and images not filed into a specific subfolder.</p>
    </div>

    {% if root_images.size > 0 %}
    <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="Documents and loose images">
      <div class="connolly-archives-carousel__viewport">
        <div class="connolly-archives-carousel__track" data-carousel-track>
          {% for image in root_images %}
          <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | replace: '-', ' ' | escape }}">
            <img src="{{ image.path | relative_url }}" alt="{{ image.title | replace: '-', ' ' | escape }}">
          </figure>
          {% endfor %}
        </div>
      </div>
      <div class="connolly-archives-carousel__footer">
        <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
        <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ root_images.first.title | replace: '-', ' ' }}</p>
        <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
      </div>
    </div>
    {% endif %}

    {% if root_documents.size > 0 %}
    <div class="connolly-archives-documents">
      {% for document in root_documents %}
      <article class="connolly-archives-document">
        <p class="connolly-archives-document__type">PDF</p>
        <h3>{{ document.title | replace: '-', ' ' }}</h3>
        <a href="{{ document.path | relative_url }}" target="_blank" rel="noopener noreferrer">Open document</a>
      </article>
      {% endfor %}
    </div>
    {% endif %}
  </section>
  {% endif %}

  {% for section in site.data.connolly_archives.sections %}
  <section class="connolly-archives-section" id="section-{{ section.slug }}">
    <div class="connolly-archives-section__header">
      <p class="connolly-archives-section__eyebrow">Folder {{ forloop.index }}</p>
      {% case section.slug %}
      {% when "camp-cayote-summer-1998" %}
      <h2>Camp Cayote, Summer 1998</h2>
      <p>Recovered photographs and a CV grouped with the Camp Cayote material.</p>
      {% when "doris-connolly-art-other" %}
      <h2>Doris Connolly Art &amp; Other</h2>
      <p>A large image set documenting artwork and other related visual materials.</p>
      {% when "doris-connolly-painted-table" %}
      <h2>Doris Connolly Painted Table</h2>
      <p>Photographs of the painted side table, alongside the surviving note about it.</p>
      {% when "dorris-connolly-personal-effects" %}
      <h2>Doris Connolly Personal Effects</h2>
      <p>Personal photographs and related family materials grouped with Doris Connolly’s effects.</p>
      {% when "funeral-aetifacts" %}
      <h2>Funeral Artefacts</h2>
      <p>A small set of recovered funeral images and memorial objects.</p>
      {% when "lewis-connolly-restrospective" %}
      <h2>Lewis Connolly Retrospective</h2>
      <p>The recovered retrospective document associated with Lewis Connolly.</p>
      {% else %}
      <h2>{{ section.title | replace: '-', ' ' }}</h2>
      {% endcase %}
    </div>

    <div class="connolly-archives-section__body">
      {% if section.notes.size > 0 %}
      <div class="connolly-archives-note">
        {% for note in section.notes %}
        <p>{{ note.content }}</p>
        {% endfor %}
      </div>
      {% endif %}

      {% if section.images.size > 0 %}
      <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="{{ section.title | replace: '-', ' ' | escape }}">
        <div class="connolly-archives-carousel__viewport">
          <div class="connolly-archives-carousel__track" data-carousel-track>
            {% for image in section.images %}
            <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | replace: '-', ' ' | escape }}">
              <img src="{{ image.path | relative_url }}" alt="{{ image.title | replace: '-', ' ' | escape }}">
            </figure>
            {% endfor %}
          </div>
        </div>
        <div class="connolly-archives-carousel__footer">
          <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
          <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ section.images.first.title | replace: '-', ' ' }}</p>
          <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
        </div>
      </div>
      {% endif %}

      {% if section.documents.size > 0 %}
      <div class="connolly-archives-documents">
        {% for document in section.documents %}
        <article class="connolly-archives-document">
          <p class="connolly-archives-document__type">PDF</p>
          <h3>{{ document.title | replace: '-', ' ' }}</h3>
          <a href="{{ document.path | relative_url }}" target="_blank" rel="noopener noreferrer">Open document</a>
        </article>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>
  {% endfor %}
</div>

<script src="{{ '/assets/js/connolly-archives-page.js?v=20260315c' | relative_url }}"></script>
