---
layout: private-archive
title: Connolly Archives
permalink: /connolly-archives/
---

{% assign overview_images = site.data.connolly_archives.overview.images %}
{% assign overview_documents = site.data.connolly_archives.overview.documents %}
{% assign blueprint_related = site.data.connolly_archives.blueprint_related %}
{% assign writing_collections = site.data.connolly_archives.writing_collections %}
{% assign bottom_carousels = site.data.connolly_archives.bottom_carousels %}

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
          <button class="connolly-archives-gate__submit" type="submit">Enter</button>
          <a class="connolly-archives-gate__cancel" href="{{ '/archive/' | relative_url }}">Back</a>
        </div>
      </form>
    </div>
  </div>

  <header class="connolly-archives-hero">
    <p class="connolly-archives-kicker">Private Collection</p>
    <h1>Connolly Archives</h1>
    <p class="connolly-archives-intro">A structured family archive of photographs, papers, memorial materials, personal effects, and recovered writings, arranged around the original folder groupings.</p>
  </header>

  {% if overview_images.size > 0 or overview_documents.size > 0 %}
  <section class="connolly-archives-section" id="section-overview">
    <div class="connolly-archives-section__header">
      <p class="connolly-archives-section__eyebrow">Overview</p>
      <h2>Documents and Loose Items</h2>
      <p>Standalone items recovered at the top level of the archive, including documents and images not filed into a specific subfolder.</p>
    </div>

    {% if overview_images.size > 0 %}
    <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="Documents and loose images">
      <div class="connolly-archives-carousel__viewport">
        <div class="connolly-archives-carousel__track" data-carousel-track>
          {% for image in overview_images %}
          <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | escape }}">
            <button class="connolly-archives-carousel__image" type="button" data-connolly-lightbox-trigger data-lightbox-src="{{ image.path | relative_url }}" data-lightbox-alt="{{ image.title | escape }}" data-lightbox-caption="{{ image.title | escape }}">
              <img src="{{ image.path | relative_url }}" alt="{{ image.title | escape }}">
            </button>
          </figure>
          {% endfor %}
        </div>
      </div>
      <div class="connolly-archives-carousel__footer">
        <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
        <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ overview_images.first.title }}</p>
        <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
      </div>
    </div>
    {% endif %}

    {% if overview_documents.size > 0 %}
    <div class="connolly-archives-documents">
      {% for document in overview_documents %}
      <article class="connolly-archives-document">
        <p class="connolly-archives-document__type">PDF</p>
        <h3>{{ document.title }}</h3>
        {% if document.description and document.description != "" %}
        <p class="connolly-archives-document__description">{{ document.description }}</p>
        {% endif %}
        <a href="{{ document.path | relative_url }}" target="_blank" rel="noopener noreferrer">Open document</a>
      </article>
      {% endfor %}
    </div>
    {% endif %}
  </section>
  {% endif %}

  {% for section in blueprint_related %}
  <section class="connolly-archives-section" id="section-{{ section.slug }}">
    <div class="connolly-archives-section__header">
      <p class="connolly-archives-section__eyebrow">Under Blueprint</p>
      <h2>{{ section.title }}</h2>
      {% if section.description and section.description != "" %}
      <p>{{ section.description }}</p>
      {% endif %}
    </div>

    <div class="connolly-archives-section__body">
      {% if section.images.size > 0 %}
      <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="{{ section.title | escape }}">
        <div class="connolly-archives-carousel__viewport">
          <div class="connolly-archives-carousel__track" data-carousel-track>
            {% for image in section.images %}
            <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | escape }}">
              <button class="connolly-archives-carousel__image" type="button" data-connolly-lightbox-trigger data-lightbox-src="{{ image.path | relative_url }}" data-lightbox-alt="{{ image.title | escape }}" data-lightbox-caption="{{ image.title | escape }}">
                <img src="{{ image.path | relative_url }}" alt="{{ image.title | escape }}">
              </button>
            </figure>
            {% endfor %}
          </div>
        </div>
        <div class="connolly-archives-carousel__footer">
          <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
          <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ section.images.first.title }}</p>
          <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
        </div>
      </div>
      {% endif %}
    </div>
  </section>
  {% endfor %}

  {% for section in site.data.connolly_archives.sections %}
  <section class="connolly-archives-section" id="section-{{ section.slug }}">
    <div class="connolly-archives-section__header">
      <p class="connolly-archives-section__eyebrow">Folder {{ forloop.index }}</p>
      <h2>{{ section.title }}</h2>
      {% if section.description and section.description != "" %}
      <p>{{ section.description }}</p>
      {% endif %}
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
      <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="{{ section.title | escape }}">
        <div class="connolly-archives-carousel__viewport">
          <div class="connolly-archives-carousel__track" data-carousel-track>
            {% for image in section.images %}
            <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | escape }}">
              <button class="connolly-archives-carousel__image" type="button" data-connolly-lightbox-trigger data-lightbox-src="{{ image.path | relative_url }}" data-lightbox-alt="{{ image.title | escape }}" data-lightbox-caption="{{ image.title | escape }}">
                <img src="{{ image.path | relative_url }}" alt="{{ image.title | escape }}">
              </button>
            </figure>
            {% endfor %}
          </div>
        </div>
        <div class="connolly-archives-carousel__footer">
          <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
          <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ section.images.first.title }}</p>
          <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
        </div>
      </div>
      {% endif %}

      {% if section.documents.size > 0 %}
      <div class="connolly-archives-documents">
        {% for document in section.documents %}
        <article class="connolly-archives-document">
          <p class="connolly-archives-document__type">PDF</p>
          <h3>{{ document.title }}</h3>
          {% if document.description and document.description != "" %}
          <p class="connolly-archives-document__description">{{ document.description }}</p>
          {% endif %}
          <a href="{{ document.path | relative_url }}" target="_blank" rel="noopener noreferrer">Open document</a>
        </article>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>
  {% endfor %}

  {% for collection in writing_collections %}
  <section class="connolly-archives-section" id="section-{{ collection.slug }}">
    <div class="connolly-archives-section__header">
      <h2>{{ collection.title }}</h2>
      {% if collection.description and collection.description != "" %}
      <p>{{ collection.description }}</p>
      {% endif %}
    </div>

    <div class="connolly-archives-writing-grid">
      {% for entry in collection.entries %}
      <article class="connolly-archives-writing">
        <header class="connolly-archives-writing__header">
          <h3>{{ entry.title }}</h3>
          {% if entry.subtitle and entry.subtitle != "" %}
          <p class="connolly-archives-writing__subtitle">{{ entry.subtitle }}</p>
          {% endif %}
          {% if entry.meta and entry.meta != "" %}
          <p class="connolly-archives-writing__meta">{{ entry.meta }}</p>
          {% endif %}
        </header>

        {% if entry.body.size > 0 %}
        <div class="connolly-archives-writing__body">
          {% for paragraph in entry.body %}
          <p>{{ paragraph }}</p>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>

    {% if collection.show_source_link and collection.source_path and collection.source_path != "" %}
    <p class="connolly-archives-source-link">
      <a href="{{ collection.source_path | relative_url }}" target="_blank" rel="noopener noreferrer">Open original Word document</a>
    </p>
    {% endif %}
  </section>
  {% endfor %}

  {% for section in bottom_carousels %}
  <section class="connolly-archives-section" id="section-{{ section.slug }}">
    <div class="connolly-archives-section__header">
      <h2>{{ section.title }}</h2>
      {% if section.description and section.description != "" %}
      <p>{{ section.description }}</p>
      {% endif %}
    </div>

    <div class="connolly-archives-section__body">
      {% if section.images.size > 0 %}
      <div class="connolly-archives-carousel" data-connolly-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="{{ section.title | escape }}">
        <div class="connolly-archives-carousel__viewport">
          <div class="connolly-archives-carousel__track" data-carousel-track>
            {% for image in section.images %}
            <figure class="connolly-archives-carousel__slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide{% unless forloop.first %} hidden{% endunless %} data-caption="{{ image.title | escape }}">
              <button class="connolly-archives-carousel__image" type="button" data-connolly-lightbox-trigger data-lightbox-src="{{ image.path | relative_url }}" data-lightbox-alt="{{ image.title | escape }}" data-lightbox-caption="{{ image.title | escape }}">
                <img src="{{ image.path | relative_url }}" alt="{{ image.title | escape }}">
              </button>
            </figure>
            {% endfor %}
          </div>
        </div>
        <div class="connolly-archives-carousel__footer">
          <button class="connolly-archives-carousel__button" type="button" data-carousel-prev aria-label="Previous image">Previous</button>
          <p class="connolly-archives-carousel__caption" data-carousel-caption>{{ section.images.first.title }}</p>
          <button class="connolly-archives-carousel__button" type="button" data-carousel-next aria-label="Next image">Next</button>
        </div>
      </div>
      {% endif %}
    </div>
  </section>
  {% endfor %}
</div>

<div class="connolly-archives-lightbox" data-connolly-lightbox hidden>
  <div class="connolly-archives-lightbox__backdrop" data-connolly-lightbox-close></div>
  <div class="connolly-archives-lightbox__panel" role="dialog" aria-modal="true" aria-labelledby="connolly-archives-lightbox-title">
    <button class="connolly-archives-lightbox__close" type="button" aria-label="Close enlarged image" data-connolly-lightbox-close>&times;</button>
    <h2 id="connolly-archives-lightbox-title" class="connolly-archives-lightbox__title">Archive Image</h2>
    <figure class="connolly-archives-lightbox__figure">
      <img src="" alt="" data-connolly-lightbox-image>
      <figcaption class="connolly-archives-lightbox__caption" data-connolly-lightbox-caption></figcaption>
    </figure>
  </div>
</div>

<script src="{{ '/assets/js/connolly-archives-page.js?v=20260315e' | relative_url }}"></script>
