# Frontier Ready

The FTE badge, step by step.

Frontier Ready is a free guide for engineers at Microsoft partner companies who want to earn the Microsoft Frontier Transformation Engineer (FTE) badge. It walks you through each step, from setting up your accounts to seeing the badge issued, with one page per milestone and one page per exam.

Live site: https://shashikantdev3.github.io/frontier-ready/

This is an independent guide. It is not affiliated with or endorsed by Microsoft. Every fact about the badge and the exams links to its official source, and each page shows the date it was last checked.

## Run it on your computer

You need Node.js 22 or later.

```sh
npm install
npm start
```

Then open http://localhost:8080/frontier-ready/ in your browser. The page reloads when you save a file.

To build the site once and run the content checks:

```sh
npm run build
npm run check
```

`npm run check` fails if a page has an em dash, a banned hype word, or an internal link that goes nowhere.

## How the content is organised

```
src/
  index.md              Home page
  gh-300/index.md       One folder per page
  _data/checklist.json  Steps in the home page progress checklist
  _data/nav.json        The Contents menu
  _data/site.json       Site title, links, and which pages are live
  _includes/layouts/    Page templates
  assets/css/site.css   All styles, including the print cheat sheet
  assets/js/site.js     Theme toggle and checklist (the only script)
```

Each page is a Markdown file. The front matter at the top holds the "In short" lines, the next step, the sources and the date the facts were last checked.

You can use these shortcodes inside a page:

| Shortcode | What it does |
|---|---|
| `{% stamp "GH-300" %}` | Shows an exam code as a stamp |
| `{% note "Title" %}...{% endnote %}` | A margin note |
| `{% must %}...{% endmust %}` | A "must know" box, marked in red |
| `{% more "Title" %}...{% endmore %}` | An expandable section for extra depth |
| `{% question 1 %}...---answer---...{% endquestion %}` | A practice question with a hidden answer |
| `{% screen %}...{% endscreen %}` | Content that is left out of the printed cheat sheet |
| `{% unofficial %}` | Marks a fact that only an unofficial source has |

## Contribute a fix or a tip

Fixes and tips are welcome. Open a pull request, or open an issue if you are not sure.

Before you send a change, please follow these rules:

1. **Cite an official source.** Facts about the badge or the exams must come from Microsoft Learn, a Microsoft Partner page or the Partner Skilling Hub. If only an unofficial source has the fact, add `{% unofficial %}` next to it. Update `lastChecked` in the page front matter.
2. **Write your own practice questions.** Never copy or reword questions from exam dumps or from Microsoft's official practice assessments. Link to the practice assessment instead. Each question needs an explanation and a link to the doc that proves the answer.
3. **Keep it public-safe.** No company names, customer names, people's names or internal links.
4. **Keep it plain.** Short sentences, second person, no em dashes, no hype words.
5. **Run `npm run build` and `npm run check`** before you open the pull request.

## Deploy

The site deploys to GitHub Pages through the workflow in `.github/workflows/pages.yml` every time `main` changes.
