#!/usr/bin/env node
/**
 * Proposes conceptual_bridge edges from read_next front matter.
 * Uses ONLY URLs that exist in the built site (same walker as validate-post-thread-edges).
 * Skips any read_next URL not exactly in that set; reports skips in unmatched_read_next.
 *
 * Run: bundle exec jekyll build && node scripts/extract-read-next-bridges.mjs
 * Optional: --out _data/post_thread_edges.read_next_proposed.json
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(root, "_site");
const postsDir = join(root, "_posts");

function collectPostUrlsFromSite() {
  if (!existsSync(siteDir)) return null;
  const urls = new Set();
  for (const name of readdirSync(siteDir)) {
    if (!/^\d{4}$/.test(name)) continue;
    const yearPath = join(siteDir, name);
    if (!statSync(yearPath).isDirectory()) continue;
    for (const mo of readdirSync(yearPath)) {
      const monthPath = join(yearPath, mo);
      if (!statSync(monthPath).isDirectory()) continue;
      for (const day of readdirSync(monthPath)) {
        const dayPath = join(monthPath, day);
        if (!statSync(dayPath).isDirectory()) continue;
        for (const slug of readdirSync(dayPath)) {
          const slugPath = join(dayPath, slug);
          if (!statSync(slugPath).isDirectory()) continue;
          if (existsSync(join(slugPath, "index.html"))) {
            urls.add(`/${name}/${mo}/${day}/${slug}/`);
          }
        }
      }
    }
  }
  return urls;
}

function normalizeUrlPath(s) {
  if (typeof s !== "string") return null;
  let u = s.trim();
  if (!u.startsWith("/")) u = `/${u}`;
  if (!u.endsWith("/")) u = `${u}/`;
  return u;
}

/** @returns {string|null} YYYY-MM-DD */
function parseDateLine(fm) {
  const m = fm.match(/^date:\s*(.+)$/m);
  if (!m) return null;
  const raw = m[1].trim().replace(/^["']|["']$/g, "");
  const iso = raw.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  return iso;
}

/** Slug segment from Jekyll post filename (after date prefix). */
function slugFromFilename(file) {
  const base = basename(file).replace(/\.markdown?$/i, "");
  const m = base.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  return m ? m[1] : null;
}

function hostUrlFromFile(file, fm) {
  const dateStr = parseDateLine(fm);
  const slug = slugFromFilename(file);
  if (!dateStr || !slug) return null;
  const [y, mo, d] = dateStr.split("-");
  return `/${y}/${mo}/${d}/${slug}/`;
}

/** Optional explicit permalink (must still be in graph set to be used). */
function parsePermalink(fm) {
  const m = fm.match(/^permalink:\s*(.+)$/m);
  if (!m) return null;
  let v = m[1].trim().replace(/^["']|["']$/g, "");
  return normalizeUrlPath(v);
}

/**
 * Resolve host post URL for the dated-post graph: prefer date+filename slug when
 * it exists in _site; else use permalink only if it exactly matches a graph node.
 */
function resolveHostUrl(file, fm, validUrls) {
  const computed = hostUrlFromFile(file, fm);
  if (computed && validUrls.has(computed)) return computed;
  const perm = parsePermalink(fm);
  if (perm && validUrls.has(perm)) return perm;
  return computed;
}

function parseDateFromDatedUrl(url) {
  const m = url.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\/[^/]+\/$/);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

function compareIsoDates(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * Extract url: values that appear under read_next in front matter (before closing --- or next top-level key).
 */
function extractReadNextUrls(fm) {
  const idx = fm.indexOf("read_next:");
  if (idx === -1) return [];
  const rest = fm.slice(idx + "read_next:".length);
  const lines = rest.split("\n");
  const urls = [];
  let inBlock = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (inBlock) {
      const um = line.match(/^\s+url:\s*(.+?)\s*$/);
      if (um) {
        let v = um[1].trim();
        v = v.replace(/^["']|["']$/g, "");
        urls.push(v);
        continue;
      }
      // Top-level key after read_next list ended (no indent or key at column 0 that's not empty)
      if (
        line.match(/^[a-zA-Z_][a-zA-Z0-9_]*:/) &&
        !line.startsWith(" ")
      ) {
        inBlock = false;
      }
    }
  }
  return urls;
}

function splitFrontMatter(content) {
  if (!content.startsWith("---")) return null;
  const end = content.indexOf("\n---", 3);
  if (end === -1) return null;
  return content.slice(3, end).replace(/^\r?\n/, "");
}

function main() {
  const outIdx = process.argv.indexOf("--out");
  const outPath =
    outIdx !== -1 && process.argv[outIdx + 1]
      ? join(root, process.argv[outIdx + 1].replace(/^\//, ""))
      : null;

  const validUrls = collectPostUrlsFromSite();
  if (!validUrls) {
    console.error(
      "extract-read-next-bridges: _site/ not found. Run: bundle exec jekyll build",
    );
    process.exit(1);
  }

  if (!existsSync(postsDir)) {
    console.error("extract-read-next-bridges: _posts/ not found");
    process.exit(1);
  }

  const files = readdirSync(postsDir).filter(
    (f) => f.endsWith(".markdown") || f.endsWith(".md"),
  );

  const proposed = [];
  const unmatched = [];
  const hostNotInSite = [];
  const sameDaySkips = [];
  const seen = new Set();

  for (const f of files) {
    const filePath = join(postsDir, f);
    let content;
    try {
      content = readFileSync(filePath, "utf8");
    } catch {
      continue;
    }
    const fm = splitFrontMatter(content);
    if (!fm) continue;

    const hostUrl = resolveHostUrl(filePath, fm, validUrls);
    if (!hostUrl) {
      continue;
    }
    if (!validUrls.has(hostUrl)) {
      hostNotInSite.push({
        file: `_posts/${f}`,
        computedHostUrl: hostUrlFromFile(filePath, fm),
        permalinkIfPresent: parsePermalink(fm),
        reason:
          "host_url_not_in_dated_post_graph (post URL is not an exact match in _site YYYY/MM/DD/slug/ index pages)",
      });
      continue;
    }

    const hostDate = parseDateLine(fm);
    if (!hostDate) continue;

    const rawUrls = extractReadNextUrls(fm);
    for (const raw of rawUrls) {
      const U = normalizeUrlPath(raw);
      if (!U) {
        unmatched.push({
          hostUrl,
          file: `_posts/${f}`,
          readNextUrl: raw,
          reason: "could_not_normalize",
        });
        continue;
      }

      if (!validUrls.has(U)) {
        unmatched.push({
          hostUrl,
          file: `_posts/${f}`,
          readNextUrl: U,
          reason: "not_in_site_graph",
        });
        continue;
      }

      if (U === hostUrl) continue;

      const readDate = parseDateFromDatedUrl(U);
      if (!readDate) {
        unmatched.push({
          hostUrl,
          file: `_posts/${f}`,
          readNextUrl: U,
          reason: "not_a_dated_post_url",
        });
        continue;
      }

      let source;
      let target;
      const cmp = compareIsoDates(readDate, hostDate);
      if (cmp < 0) {
        source = U;
        target = hostUrl;
      } else if (cmp > 0) {
        source = hostUrl;
        target = U;
      } else {
        sameDaySkips.push({
          hostUrl,
          file: `_posts/${f}`,
          readNextUrl: U,
          reason: "same_calendar_day",
        });
        continue;
      }

      const key = `${source}\0${target}`;
      if (seen.has(key)) continue;
      seen.add(key);

      proposed.push({
        source,
        target,
        kind: "conceptual_bridge",
      });
    }
  }

  const payload = {
    about:
      "Proposed conceptual_bridge edges from read_next. Only endpoints present in _site dated-post graph. Merge manually into post_thread_edges.json after review. unmatched_read_next: skipped targets.",
    edges: proposed.sort((a, b) => {
      const c = a.source.localeCompare(b.source);
      return c !== 0 ? c : a.target.localeCompare(b.target);
    }),
    unmatched_read_next: unmatched,
    host_post_not_in_site_graph: hostNotInSite,
    same_day_skipped: sameDaySkips,
  };

  const json = `${JSON.stringify(payload, null, 2)}\n`;

  if (outPath) {
    writeFileSync(outPath, json, "utf8");
    console.error(`extract-read-next-bridges: wrote ${outPath}`);
  } else {
    process.stdout.write(json);
  }

  console.error(
    `extract-read-next-bridges: proposed ${proposed.length} edges, ${unmatched.length} unmatched read_next, ${hostNotInSite.length} host not in site graph, ${sameDaySkips.length} same-day skips (${validUrls.size} site nodes)`,
  );
}

main();
