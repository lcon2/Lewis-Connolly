#!/usr/bin/env node
/**
 * Validates _data/post_thread_edges.json against built post URLs in _site.
 * Run: bundle exec jekyll build && npm run validate:thread-edges
 */
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(root, "_site");
const dataPath = process.argv[2]
  ? join(root, process.argv[2])
  : join(root, "_data", "post_thread_edges.json");

const ALLOWED_KINDS = new Set(["thread", "precursor", "conceptual_bridge", "related"]);

function collectPostUrlsFromSite() {
  if (!existsSync(siteDir)) return null;
  const urls = new Set();
  const top = readdirSync(siteDir);
  for (const name of top) {
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

function main() {
  const validUrls = collectPostUrlsFromSite();
  if (!validUrls) {
    console.error("validate-post-thread-edges: _site/ not found. Run: bundle exec jekyll build");
    process.exit(1);
  }

  let data;
  try {
    data = JSON.parse(readFileSync(dataPath, "utf8"));
  } catch (e) {
    console.error("validate-post-thread-edges: could not read JSON", e.message);
    process.exit(1);
  }

  const edges = Array.isArray(data.edges) ? data.edges : [];
  const seen = new Set();
  let errors = 0;

  for (let i = 0; i < edges.length; i++) {
    const e = edges[i];
    const label = `edges[${i}]`;
    if (!e || typeof e.source !== "string" || typeof e.target !== "string") {
      console.error(`${label}: missing source or target`);
      errors++;
      continue;
    }
    if (e.source === e.target) {
      console.error(`${label}: self-loop ${e.source}`);
      errors++;
    }
    const kind = e.kind || "related";
    if (!ALLOWED_KINDS.has(kind)) {
      console.error(`${label}: unknown kind "${kind}"`);
      errors++;
    }
    const key = `${e.source}\0${e.target}`;
    if (seen.has(key)) {
      console.error(`${label}: duplicate edge ${e.source} -> ${e.target}`);
      errors++;
    }
    seen.add(key);

    if (!validUrls.has(e.source)) {
      console.error(`${label}: unknown source URL (not in _site): ${e.source}`);
      errors++;
    }
    if (!validUrls.has(e.target)) {
      console.error(`${label}: unknown target URL (not in _site): ${e.target}`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`validate-post-thread-edges: ${errors} issue(s)`);
    process.exit(1);
  }
  console.log(
    `validate-post-thread-edges: OK (${edges.length} edges, ${validUrls.size} post URLs in _site)`,
  );
}

main();
