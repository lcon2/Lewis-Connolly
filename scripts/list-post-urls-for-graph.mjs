#!/usr/bin/env node
/**
 * Lists built post URLs under _site (same shape as edge ids). Use after `bundle exec jekyll build`.
 * Helps editorial tranches: copy URLs when adding edges to post_thread_edges.json.
 */
import { existsSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(root, "_site");

function collectUrls() {
  if (!existsSync(siteDir)) {
    console.error("list-post-urls-for-graph: _site/ not found. Run: bundle exec jekyll build");
    process.exit(1);
  }
  const urls = [];
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
          const idx = join(slugPath, "index.html");
          if (existsSync(idx)) {
            urls.push(`/${name}/${mo}/${day}/${slug}/`);
          }
        }
      }
    }
  }
  urls.sort();
  return urls;
}

const urls = collectUrls();
for (const u of urls) {
  console.log(u);
}
console.error(`list-post-urls-for-graph: ${urls.length} URLs`);
