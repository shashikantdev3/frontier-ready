---
layout: layouts/page.njk
title: "GH-300: GitHub Copilot"
heading: GitHub Copilot
stamp: GH-300
bodyClass: numbered
description: How to prepare for and pass Exam GH-300, GitHub Copilot, the first certification for the FTE badge.
lede: The GitHub Copilot certification checks that you can use Copilot well, safely and with the right settings. It covers a tool you may already use every day, so it is a good exam to take first.
inShort:
  - 100 minutes. You need 700 out of 1000 to pass.
  - Six topic areas. Copilot features carry the most weight.
  - Microsoft Learn is not available during this exam, unlike AI-103 and AB-100.
next:
  text: "Next exam: AI-103, Developing AI Apps and Agents on Azure"
  href: /ai-103/
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Learn: Study guide for Exam GH-300"
    url: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300
  - title: "Microsoft Learn: GitHub Copilot certification"
    url: https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/
  - title: "Microsoft Learn: Exam duration and exam experience"
    url: https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
  - title: "GitHub Docs: Plans for GitHub Copilot"
    url: https://docs.github.com/en/copilot/get-started/plans
  - title: "GitHub Docs: Excluding content from GitHub Copilot"
    url: https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot
  - title: "GitHub Docs: GitHub Copilot code referencing"
    url: https://docs.github.com/en/copilot/concepts/completions/code-referencing
  - title: "GitHub Docs: Installing GitHub Copilot CLI"
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli
  - title: "GitHub Docs: Using GitHub Copilot CLI"
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
  - title: "GitHub Docs: Adding repository custom instructions"
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions
  - title: "GitHub Docs: About customizing GitHub Copilot responses"
    url: https://docs.github.com/en/copilot/concepts/prompting/response-customization
  - title: "GitHub Docs: Prompt engineering for GitHub Copilot Chat"
    url: https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering
  - title: "GitHub Docs: Responsible use of inline suggestions"
    url: https://docs.github.com/en/copilot/responsible-use/inline-suggestions
  - title: "GitHub Docs: REST API endpoints for Copilot user management"
    url: https://docs.github.com/en/rest/copilot/copilot-user-management
---

## What the exam tests

These are Microsoft's official topic areas and weights, from the skills outline dated 7 August 2026.

{% note "A quirk in the official outline" %}
Microsoft's study guide lists a seventh area, "GitHub Copilot features (25–30%)", with no skills under it. It looks like a duplicate of the second row, so it is left out here.
{% endnote %}

| Topic area | Weight |
|---|---|
| Use GitHub Copilot responsibly | <span class="range" style="--lo:15;--hi:20">15–20%</span> |
| Use GitHub Copilot features | <span class="range" style="--lo:25;--hi:30">25–30%</span> |
| Understand Copilot data and architecture | <span class="range" style="--lo:10;--hi:15">10–15%</span> |
| Apply prompt engineering and context crafting | <span class="range" style="--lo:10;--hi:15">10–15%</span> |
| Improve developer productivity with Copilot | <span class="range" style="--lo:10;--hi:15">10–15%</span> |
| Configure privacy, content exclusions and safeguards | <span class="range" style="--lo:10;--hi:15">10–15%</span> |


{% more "See every skill in the outline" %}
**Use GitHub Copilot responsibly.** Risks and limits of generative AI. Ethical use. Harms and how to reduce them. Why you must check AI output.

**Use GitHub Copilot features.** Turn on Copilot in your IDE. Use inline suggestions, chat, the CLI and agent mode. Install and use Copilot CLI. Use Agent Mode, Copilot Edits, MCP, agent sessions and sub-agents. Use Copilot for code review. Use Spaces, Spark, pull request summaries and instruction files. Know the commands and limits of Copilot Chat, including prompt files. Manage organization policies, audit log events and subscriptions through the REST API.

**Understand Copilot data and architecture.** How data flows and is shared. How a prompt is built from your input. Proxy filtering and post-processing. The life of a code suggestion. Limits of large language models.

**Apply prompt engineering and context crafting.** How a prompt is structured. How Copilot decides what context to use. Zero-shot and few-shot prompting. Good prompting practice, and how chat history is used.

**Improve developer productivity.** Code generation, refactoring and documentation. Learning faster with less context switching. Sample data and legacy code. Unit tests, integration tests, edge cases and assertions. Security and performance suggestions.

**Configure privacy, content exclusions and safeguards.** Content exclusions and editor settings. Who owns the output. The filter for suggestions that match public code. Fixing problems with suggestions and exclusions.
{% endmore %}

## A short study plan

This is a suggested plan for someone who already uses Copilot at work. Spread it over two or three days.

1. Work through [GitHub Copilot Fundamentals, part 1](https://learn.microsoft.com/en-us/training/paths/copilot/) and [part 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) on Microsoft Learn.
2. Do the hands-on labs below. Spend the most time on the CLI and on custom instructions, since they are newer and easy to forget.
3. Read the GitHub Docs pages for plans, content exclusion and code referencing. These three pages answer most of the settings questions.
4. Take Microsoft's [official practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/practice/assessment?assessment-type=practice&assessmentId=218035372&practice-assessment-type=certification). Go back to the docs for every question you get wrong.
5. Read the common traps on this page the night before.

{% slot %}
The author will add how many days he spent on GH-300 and what he studied each day.
{% endslot %}

## Must-know concepts

{% must %}
- **Plans.** Individual plans include Free, Pro and Pro+. Business and Enterprise are for organizations, and add central policies and content exclusion.
- **Content exclusion** is set at repository, organization or enterprise level. It does not apply to Copilot CLI or to agent mode in IDE chat.
- **Suggestions that match public code** can be blocked, or allowed with a code reference that shows the source repository and licence.
- **Custom instructions** live in `.github/copilot-instructions.md`. Path-specific ones use `NAME.instructions.md` files in `.github/instructions/` with an `applyTo` glob.
- **Copilot CLI** starts with the `copilot` command and asks before it runs a tool that changes or runs files.
- **You own the check.** Copilot can be wrong in ways that look right. Review and test everything it writes.
{% endmust %}

{% more "Plans and settings, in more depth" %}
Copilot Free gives individuals limited access at no cost. Pro and Pro+ are paid individual plans, and GitHub lists a few more individual plans, such as one for students. Business and Enterprise are bought per seat by an organization. Enterprise is designed for companies on GitHub Enterprise Cloud. Check the [feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix) for which plan has which feature.

Organization owners manage seats through the REST API. The endpoints live under `/orgs/{org}/copilot/billing/`, for example `GET /orgs/{org}/copilot/billing/seats` to list seat assignments.
{% endmore %}

{% more "Data flow and the life of a suggestion" %}
Copilot builds a prompt from what you type and the code around your cursor, plus other context such as open files. The prompt goes to the model. The response is filtered and post-processed before you see it. If your policy allows suggestions that match public code, matches come with a code reference. GitHub says matches happen in less than one percent of suggestions.

Copilot only sees part of your project at a time, so it can miss larger design problems. Quality also varies by language, depending on how much training data exists for it.
{% endmore %}

{% more "Prompting that works" %}
GitHub's own advice for Copilot Chat:

- Start with the overall goal, then list the specific requirements.
- Give examples of inputs and outputs. Unit tests work well as examples.
- Break a big task into small steps.
- Name the function or file instead of saying "this".
- Open the files that matter and close the ones that don't.
- Start a new thread for a new task, so old history doesn't confuse the answer.

Zero-shot means asking with no examples. Few-shot means giving one or more examples first.
{% endmore %}

{% more "Copilot CLI commands to know" %}
Install with `npm install -g @github/copilot` (needs Node.js 22 or later), `winget install GitHub.Copilot` on Windows, or `brew install --cask copilot-cli` on macOS and Linux.

Run `copilot` in a project folder to start. Use `/login` to sign in. When Copilot wants to run a tool that changes or runs files, you can allow it once, allow it for the session, or reject it. Flags such as `--allow-all` skip approvals, so use them only in a sandbox.

If you get Copilot through your organization, an admin must leave the Copilot CLI policy turned on.
{% endmore %}

{% screen %}
## Hands-on labs

None of these labs create Azure resources, so there is nothing to clean up in Azure.

| Lab | What you need | Clean up |
|---|---|---|
| [Getting started with GitHub Copilot](https://github.com/skills/getting-started-with-github-copilot) (GitHub Skills, under an hour) | A GitHub account and access to Copilot. It runs in a Codespace. Use a public repository, as the exercise suggests, so it does not use your private Actions minutes. | Delete the codespace and the practice repository when you finish. |
| Try Copilot CLI ([install guide](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)) | Any Copilot plan. Node.js 22 or later if you install with npm. Work in a throwaway folder. | Remove it with the same tool you installed it with, if you no longer need it. |
| Write custom instructions ([guide](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions)) | A test repository. Add `.github/copilot-instructions.md`, ask Copilot Chat a question and check that the file appears in the references. | Delete the test repository. |
| Content exclusion ([guide](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)) | An organization on Copilot Business or Enterprise, and owner or repository admin rights. If you don't have that, read the guide closely instead. | Remove the test rule. |

{% slot %}
The author will add any lab he found most useful for GH-300.
{% endslot %}
{% endscreen %}

## Common traps

- **Thinking content exclusion covers everything.** It does not cover Copilot CLI or agent mode in IDE chat.
- **Mixing up individual and organization plans.** Policies and content exclusion come with Business and Enterprise, not with individual plans such as Free, Pro or Pro+.
- **Forgetting `applyTo`.** A path-specific instructions file uses an `applyTo` glob in its front matter to say which files it covers.
- **Trusting the output.** Questions that say Copilot "guarantees" or "verifies" code are usually wrong. You validate the output.
- **Planning to look things up.** GitHub exams do not give you Microsoft Learn during the exam. AI-103 and AB-100 do.

{% screen %}
## Practice questions

These are written for this guide. They are not from the real exam. For questions in the exam's own style, use Microsoft's [official practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/practice/assessment?assessment-type=practice&assessmentId=218035372&practice-assessment-type=certification).

<details class="more practice"><summary>Open the six practice questions</summary><div class="more__body">

{% question 1 %}
Your organization uses Copilot Business. An admin excluded the folder `/payments/keys/**` from Copilot a week ago. A developer tells you that Copilot CLI still read a file in that folder while it fixed a bug. What is the most likely reason?

1. Content exclusion takes up to a week to reach all users.
2. Copilot CLI does not support content exclusion.
3. Content exclusion only works on Copilot Enterprise.
4. The developer needs to add the folder to `.gitignore` too.
---answer---
**Answer: 2.** GitHub states that Copilot CLI and agent mode in IDE chat do not support content exclusion. So exclusion alone will not protect files from the CLI. Option 3 is wrong because Business supports content exclusion. Source: [Excluding content from GitHub Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot).
{% endquestion %}

{% question 2 %}
Your team adds `.github/instructions/tests.instructions.md` with rules for writing tests. Copilot code review on GitHub.com ignores the rules. The file has no front matter. What should you add?

1. An `applyTo` glob in front matter, such as `applyTo: "**/*.test.ts"`.
2. A link to the file from `README.md`.
3. The same rules in `.vscode/settings.json`.
4. A `.copilotignore` file next to it.
---answer---
**Answer: 1.** GitHub's guide says a path-specific instruction file starts with a front matter block containing the `applyTo` keyword, which says which files the rules cover. Source: [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
{% endquestion %}

{% question 3 %}
You run Copilot CLI on your laptop in a repository with real customer config files. Copilot asks to run a command that deletes generated files. You trust this one command but want to keep control of the rest. What do you choose?

1. Restart the session with `--allow-all`.
2. Allow the command once.
3. Allow every tool for the rest of the session.
4. Turn off the Copilot CLI policy.
---answer---
**Answer: 2.** Allowing it once keeps every later request under your control. GitHub warns that allowing a tool for the whole session can be risky for commands like `rm`, and recommends `--allow-all` only in sandboxed environments. Source: [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview).
{% endquestion %}

{% question 4 %}
You ask Copilot Chat to "build the whole invoice module with validation, PDF export and email". The answer is long, misses the validation rules and uses a library you don't use. What is the best next step?

1. Ask the same prompt again until the answer improves.
2. Split the work into smaller requests, name the library you want, and give an example of a valid invoice.
3. Switch to inline suggestions instead of chat.
4. Add "be accurate" to the end of the prompt.
---answer---
**Answer: 2.** GitHub's prompting advice is to break complex tasks into simple ones, avoid ambiguity by naming the library, and give examples. Source: [Prompt engineering for GitHub Copilot Chat](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering).
{% endquestion %}

{% question 5 %}
A repository has an `AGENTS.md` file at its root and another one in the `/api` folder. A Copilot agent works on a file inside `/api`. Which instructions take precedence?

1. The root `AGENTS.md`, because it was created first.
2. The `/api/AGENTS.md`, because the nearest file takes precedence.
3. Neither, because only `.github/copilot-instructions.md` is read.
4. Both are merged, and the root file wins any conflict.
---answer---
**Answer: 2.** GitHub says you can place `AGENTS.md` files anywhere in the repository, and the nearest one in the directory tree takes precedence. Source: [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
{% endquestion %}

{% question 6 %}
A build server runs Windows with Node.js 20. You need Copilot CLI on it. The `npm install -g @github/copilot` command fails. What is the simplest fix?

1. Install with `winget install GitHub.Copilot`, or upgrade Node.js to version 22 or later.
2. Install the Copilot extension for VS Code instead.
3. Run the npm command as administrator.
4. Copilot CLI only runs on macOS and Linux.
---answer---
**Answer: 1.** The npm method needs Node.js 22 or later. On Windows you can install with WinGet instead. On Windows, every method also needs PowerShell 6 or later. Source: [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).
{% endquestion %}

</div></details>
{% endscreen %}

## Exam day

- **Length:** 100 minutes. **Pass mark:** 700. **Languages:** English, Spanish, Portuguese (Brazil), Korean and Japanese.
- **Booking:** through Pearson VUE, online or at a test centre. Microsoft recommends registering with a personal Microsoft account. The price depends on your country and is shown when you book.
- **No Microsoft Learn** during a GitHub exam.
- **Retake:** you can retake 24 hours after a first attempt.
- **Valid for:** 2 years. GitHub is moving to Microsoft's renewal process, and GitHub certifications that expire before it is ready get 6 extra months.
- **Try the exam screen first** in GitHub's [exam sandbox](https://GHCertDemo.starttest.com).

{% slot %}
The author will add his exam-day tip for GH-300.
{% endslot %}
