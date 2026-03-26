# Lewis Connolly

Source for [lewisconnolly.com](https://lewisconnolly.com), a personal Jekyll website for essays, reflections, archives, studies pages, and private family materials.

The site is intentionally lightweight and hand-authored. It favors simple Liquid layouts, custom CSS, and small, local changes over heavy framework abstractions.

## Live Site

- [lewisconnolly.com](https://lewisconnolly.com)

## Stack

- Jekyll 4
- Liquid templates
- Markdown posts and standalone pages
- Custom layouts in `_layouts/`
- Site data in `_data/`
- Hand-rolled CSS and small JavaScript files in `assets/`

## Repository Layout

- `_posts/` dated essays, articles, and reviews
- `_layouts/` page templates for posts, archives, studies, redirects, and private archive pages
- `_includes/` shared fragments, including SEO metadata
- `_data/` structured data for archives and supporting content
- `assets/` site CSS, JavaScript, images, documents, and private media
- `connolly-archives/` private archive subpages
- `studies/` studies-related pages and materials
- root `.md` and `.markdown` files for primary routes such as home, about, archive, and contact

## Local Development

Install dependencies:

```bash
bundle install
```

Build the site:

```bash
bundle exec jekyll build
```

When layout or data changes may be cached, run:

```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Deployment

GitHub Actions builds and deploys the site from `main` to GitHub Pages.

## Notes

- `_site/` is generated output and should not be edited as source.
- This repository reflects an authored personal website, not a general-purpose app or starter template.
- Unless stated otherwise, site content remains copyright Lewis Connolly.
