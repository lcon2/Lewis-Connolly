# Threads graph: editorial workflow

## Edge kinds

- **thread** — One essay continues or develops the same line of thought as another. Rendered as a red arrow; direction is meaningful (`source` → `target`).
- **conceptual_bridge** — One essay helps conceptually frame or illuminate another without being part of the same unfolding thread. Rendered as a blue line.

Do not add edges to “fill” the graph. If no genuine relation exists, omit both.

## Where data lives

- **Canonical:** `_data/post_thread_edges.json` — loaded by `_layouts/threads.html` for `/threads/`. Edit this file directly for all new or revised edges.

Legacy `kind: "precursor"` is still accepted in JSON and behaves like `thread`.

## Review checkpoints (before committing edge changes)

1. **Inventory** — URLs match live permalinks (`/:year/:month/:day/:title/`).
2. **Direction** — Each arrow reads the way you intend (earlier/framing → later/developed, per your convention).
3. **Sparsity** — Remove weak or purely thematic “cosmetic” links.
4. **Validation** — After `bundle exec jekyll build`, run `npm run validate:thread-edges` (requires `_site/`).
5. **Visual check (Phase 5)** — Open `/threads/` on the built site or after deploy (`https://lewisconnolly.com/threads/`); confirm density, legibility, and that new edges read as intended.
6. **Ship (Phase 6)** — Commit and push (or open a PR). After deploy, spot-check `/threads/` once more so production matches what you validated locally.

## Suggested pace

Work **by article** (outgoing edges only) or **by time tranche** (e.g. one year per PR). Small PRs are easier to review than one huge diff.

### Tranche checklist (repeat per batch)

1. Run `bundle exec jekyll build`.
2. Run `npm run inventory:thread-posts > scratch-urls.txt` (optional) to list every post URL that exists in `_site/`—use exact strings for `source` / `target`.
3. Edit `_data/post_thread_edges.json` (add or revise `edges`; each edge is `source`, `target`, `kind` only).
4. Run `npm run validate:thread-edges`.
5. **Phase 5:** Open `/threads/` locally or on the live site; skim density, layout, arrow clarity, hover labels, and legibility.
6. **Phase 6:** Commit and push; after deploy, quick confirm on the live `/threads/` page.

### Commands

| Command | Purpose |
|---------|--------|
| `npm run inventory:thread-posts` | Print all post URLs (stderr shows count) |
| `npm run validate:thread-edges` | Validate production JSON vs `_site/` |

## Automation vs manual

| Task | Owner |
|------|--------|
| Decide thread vs bridge vs none | You |
| Lint JSON, unknown URLs, duplicates | `npm run validate:thread-edges` |
| Optional drafting aids (LLM, notes) | You; never auto-merge without review |
