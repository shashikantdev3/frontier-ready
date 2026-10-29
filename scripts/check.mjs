// Content checks for the built site. Run `npm run build` first, then `npm run check`.
// Fails on: em dashes, banned hype words, internal links that point to missing files.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const SITE = "_site";
const PREFIX = "/frontier-ready/";
const BANNED = ["unlock", "supercharge", "seamless", "leverage", "dive in", "game-changer", "game changer", "journey"];

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(SITE);

let problems = 0;
const report = (file, msg) => { problems++; console.log(`${file}: ${msg}`); };

for (const file of files) {
  const html = readFileSync(file, "utf8");
  if (html.includes("\u2014") || html.includes("&mdash;")) report(file, "contains an em dash");

  const prose = html.split('<section class="sources"')[0].replace(/<[^>]+>/g, " ").toLowerCase();
  for (const w of BANNED) if (new RegExp(`\\b${w}`).test(prose)) report(file, `uses banned word "${w}"`);

  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (!href.startsWith(PREFIX)) continue;
    let path = href.slice(PREFIX.length).split("#")[0];
    let target = join(SITE, path);
    if (path === "" || path.endsWith("/")) target = join(target, "index.html");
    if (!existsSync(target)) report(file, `broken internal link ${href}`);
  }
}

console.log(problems ? `\n${problems} problem(s) found.` : `Checked ${files.length} pages. No problems found.`);
process.exit(problems ? 1 : 0);
