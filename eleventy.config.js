import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  const md = markdownIt({ html: true, linkify: false, typographer: false }).use(
    markdownItAnchor,
    { level: [2, 3], slugify: (s) => s.toLowerCase().trim().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "") }
  );
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  const fonts = {
    "node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2": "assets/fonts/plex-sans-400.woff2",
    "node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-italic.woff2": "assets/fonts/plex-sans-400-italic.woff2",
    "node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-700-normal.woff2": "assets/fonts/plex-sans-700.woff2",
    "node_modules/@fontsource/vollkorn/files/vollkorn-latin-500-normal.woff2": "assets/fonts/vollkorn-500.woff2",
    "node_modules/@fontsource/vollkorn/files/vollkorn-latin-700-normal.woff2": "assets/fonts/vollkorn-700.woff2",
    "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2": "assets/fonts/plex-mono-500.woff2",
  };
  eleventyConfig.addPassthroughCopy(fonts);

  const render = (s) => md.render(s.trim());
  const renderInline = (s) => md.renderInline(s.trim());

  // Exam code set like a stamp.
  eleventyConfig.addShortcode("stamp", (code) => `<span class="stamp">${code}</span>`);

  // Label for a fact that only an unofficial source has.
  eleventyConfig.addShortcode(
    "unofficial",
    () => `<span class="tag-unofficial" title="Only an unofficial source has this fact">unofficial</span>`
  );

  // Margin note. Sits in the right margin on wide screens, inline on phones.
  eleventyConfig.addPairedShortcode(
    "note",
    (content, title = "Note") =>
      `<div class="margin-note" role="note"><p class="margin-note__title">${title}</p>${render(content)}</div>`
  );

  // Must-know block, marked in red pen.
  eleventyConfig.addPairedShortcode(
    "must",
    (content) => `<div class="must"><p class="must__mark" aria-hidden="true">Must know</p><span class="visually-hidden">Must know: </span>${render(content)}</div>`
  );

  // Expandable depth.
  eleventyConfig.addPairedShortcode(
    "more",
    (content, title) => `<details class="more"><summary>${renderInline(title)}</summary><div class="more__body">${render(content)}</div></details>`
  );

  // Practice question. Split the body from the answer with a line that reads "---answer---".
  eleventyConfig.addPairedShortcode("question", (content, num) => {
    const [body, answer = ""] = content.split("---answer---");
    return `<section class="question" aria-labelledby="q${num}"><h3 id="q${num}" class="question__num">Question ${num}</h3>${render(body)}<details class="question__answer"><summary>Show the answer</summary><div class="more__body">${render(answer)}</div></details></section>`;
  });

  // Content that should not print on the cheat sheet.
  eleventyConfig.addPairedShortcode("screen", (content) => `<div class="screen-only">${render(content)}</div>`);

  // Slot for the author's own experience. Visible on purpose until filled in.
  eleventyConfig.addPairedShortcode(
    "slot",
    (content) => `<div class="slot" role="note"><p class="slot__title">To be filled in by the author</p>${render(content)}</div>`
  );

  eleventyConfig.addFilter("readableDate", (iso) => {
    const d = new Date(iso + "T00:00:00Z");
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  });

  return {
    pathPrefix: "/frontier-ready/",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
