---
layout: layouts/page.njk
title: "Milestone 3: Hypervelocity Engineering"
heading: "Milestone 3: Hypervelocity Engineering"
bodyClass: numbered
description: The Hypervelocity Engineering Framework assessment for the FTE badge, what the framework is, and the optional Center of Excellence and industry modules.
lede: Milestone 3 checks that you know how Microsoft wants partner teams to deliver AI projects. One assessment is required. Two more modules are optional.
inShort:
  - Pass the Hypervelocity Engineering Framework assessment with 80% or more.
  - The AI Center of Excellence and industry modules are optional.
  - Microsoft publishes its Hypervelocity Engineering tools and docs for free as HVE Core.
next:
  text: "Getting the badge: what happens after the last assessment"
  href: /badge/
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Partner blog: Frontier Transformation Engineer badge (May 2026)"
    url: https://partner.microsoft.com/en-us/blog/article/skilling-updates-2026-issue-5
  - title: "Microsoft: HVE Core (Hyper Velocity Engineering)"
    url: https://microsoft.github.io/hve-core/
  - title: "Microsoft: Understanding the RPI workflow"
    url: https://microsoft.github.io/hve-core/docs/rpi/
  - title: "Microsoft: Why RPI works"
    url: https://microsoft.github.io/hve-core/docs/rpi/why-rpi
  - title: "Microsoft: HVE project lifecycle"
    url: https://microsoft.github.io/hve-core/docs/hve-guide/lifecycle
  - title: "Microsoft: HVE Core on GitHub"
    url: https://github.com/microsoft/hve-core
  - title: "Cloud Adoption Framework: Establish an AI Center of Excellence"
    url: https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/center-of-excellence
  - title: "Microsoft Learn: AI Center of Excellence learning path"
    url: https://learn.microsoft.com/en-us/training/paths/ai-center-excellence/
  - title: "LevelUp: Frontier Transformation Engineer course list"
    url: https://skillupwithlevelup.com/frontier
    unofficial: true
---

## What you need to do

| Item | Time | Required? |
|---|---|---|
| [Hypervelocity Engineering Framework assessment](https://skillupwithlevelup.com/course-detail/2435369) | 45 min | **Yes** |
| [Hypervelocity Engineering Framework course](https://skillupwithlevelup.com/course-detail/2460949) | 1.5 hours | No, but it prepares you for the assessment |
| [Create AI Center of Excellence](https://skillupwithlevelup.com/course-detail/2488415) | 2 hours | No |
| [Industry Expertise for building AI agents](https://skillupwithlevelup.com/course-detail/2488416) | 1 hour | No |

The course list, times and the 80% pass mark come from LevelUp. {% unofficial %} Microsoft's own blog confirms that the badge includes "fluency in delivery patterns such as the Center of Excellence model and Hypervelocity Engineering model".

## What Hypervelocity Engineering is

Microsoft's open-source [HVE Core](https://github.com/microsoft/hve-core) describes itself as "a highly opinionated agentic software development lifecycle (SDLC) framework". In plain terms, it is a set of agents, instructions and skills for GitHub Copilot that take a team from an idea to shipped code in a disciplined way.

{% note "Free to try" %}
HVE Core is MIT-licensed. You can install it as a VS Code extension or as a Copilot CLI plugin and try it on a side project.
{% endnote %}

### The RPI workflow

The core of HVE is the RPI workflow (Research, Plan, Implement, Review) for any coding task that is bigger than a quick fix:

1. **Research.** Read the code and the problem. Research is read-only, so nothing changes yet.
2. **Plan.** Write down the dependencies, acceptance criteria, boundaries and work items, each with a stable ID.
3. **Implement.** Carry out only the approved plan items.
4. **Review.** Check the result against the plan. Review does not change the code it reviews.

Each step saves its notes as files, so the next step, or the next person, can pick up the task without starting again. Microsoft's reason for the method is blunt: without it, "AI writes first and thinks never".

{% must %}
- The HVE docs define RPI as **Research, Plan, Implement, Review**. Research is done when the task needs it, and follow-up work is recorded at the end.
- Research and Review **don't change** the code. Only Implement does.
- Each step leaves **written artifacts** behind, so work can continue after a context reset.
{% endmust %}

{% more "The HVE project lifecycle" %}
Beyond single tasks, HVE Core describes a nine-stage project lifecycle: Setup, Discovery, Product Definition, Decomposition, Sprint Planning, Implementation, Review, Delivery and Operations. Design thinking feeds into it at three points.
{% endmore %}

## The AI Center of Excellence, in brief

This module is optional, but the idea also shows up in AB-100. Microsoft's Cloud Adoption Framework says an AI Center of Excellence is "an internal team of experts who drive successful and valuable AI outcomes", and that it "prevents fragmented or ungoverned AI adoption".

- Start with an executive sponsor.
- Early on, run it as a central team. As adoption matures, move it to an advisory role.
- For a free deeper look, take Microsoft Learn's [AI Center of Excellence](https://learn.microsoft.com/en-us/training/paths/ai-center-excellence/) learning path.

## How to prepare

1. Take the 1.5-hour Hypervelocity Engineering course on LevelUp, even though it is optional.
2. Read Microsoft's [RPI workflow](https://microsoft.github.io/hve-core/docs/rpi/) page and [Why RPI works](https://microsoft.github.io/hve-core/docs/rpi/why-rpi).
3. If you have an hour, install HVE Core and run one small task through Research, Plan, Implement and Review.
4. Take the assessment. You can retake it if you score under 80%. {% unofficial %}

{% slot %}
The author will add his tip for the Hypervelocity Engineering assessment.
{% endslot %}
