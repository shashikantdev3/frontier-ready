---
layout: layouts/page.njk
title: "Milestone 2: Project Ready courses"
heading: "Milestone 2: Project Ready courses"
bodyClass: numbered
description: The five Project Ready courses and assessments for the FTE badge, how long each takes and how to pass.
lede: Milestone 2 is five assessments on LevelUp, each with a self-paced course to prepare you. You need 80% on every assessment.
inShort:
  - Five one-hour assessments. Pass each one with 80% or more. The courses are optional preparation.
  - You can retake each assessment up to 10 times.
  - Open LevelUp through your Partner Skilling Hub account, or your completions may not count.
next:
  text: "Milestone 3: the Hypervelocity Engineering assessment"
  href: /milestone-3/
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Learn: Associate your Microsoft Learn profile with Partner Center (Skilling Hub and LevelUp rules)"
    url: https://learn.microsoft.com/en-us/partner-center/membership/ms-learn-associate
  - title: "Microsoft Partner blog: Frontier Transformation Engineer badge (May 2026)"
    url: https://partner.microsoft.com/en-us/blog/article/skilling-updates-2026-issue-5
  - title: "Partner Skilling Hub: Frontier Transformation Engineer listing"
    url: https://skilling-hub.com/en-US/listing/lj::frontier-transformation-engineer
  - title: "Microsoft Learn: Work IQ overview"
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq
  - title: "Microsoft Learn: Work IQ API overview (preview)"
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq-api-overview
  - title: "Microsoft Learn: What is Fabric IQ?"
    url: https://learn.microsoft.com/en-us/fabric/iq/overview
  - title: "Microsoft Learn: What is Foundry IQ?"
    url: https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq
  - title: "Microsoft Learn: Foundry IQ FAQ"
    url: https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq
  - title: "Microsoft Learn: Microsoft Agent 365 overview"
    url: https://learn.microsoft.com/en-us/microsoft-agent-365/overview
  - title: "Microsoft Tech Community: Microsoft Agent Framework 1.0 (April 2026)"
    url: https://techcommunity.microsoft.com/blog/azuredevcommunityblog/the-future-of-agentic-ai-inside-microsoft-agent-framework-1-0/4510698
  - title: "Futurum Group: Build 2026 summary (Microsoft IQ status)"
    url: https://futurumgroup.com/insights/microsoft-build-2026-the-platform-integration-plane-and-developer-surface/
    unofficial: true
  - title: "LevelUp: Frontier Transformation Engineer course list and FAQ"
    url: https://skillupwithlevelup.com/frontier
    unofficial: true
---

## What this milestone is

Microsoft describes this part of the badge as "project-ready learning and assessments across key solution areas". The courses run on LevelUp, Microsoft's partner training site. The course names, hours and pass mark below come from LevelUp. {% unofficial %}

{% must %}
- Pass **each** assessment with **80%** or more. You get up to **10 attempts** per assessment. {% unofficial %}
- Microsoft says you must keep an active **Partner Skilling Hub** account and use it to sign in to LevelUp. Otherwise your completions are not counted for your company.
{% endmust %}

## The five courses

| Course | Course length | Labs |
|---|---|---|
| [Activate organizational intelligence with Microsoft IQ](https://skillupwithlevelup.com/course-detail/2435386) | 1 hour | No |
| [Build Frontier Firm productivity with Work IQ, Copilot and agents](https://skillupwithlevelup.com/course-detail/2437897) | 16 hours | Yes |
| [Accelerate Agentic AI](https://skillupwithlevelup.com/course-detail/2307124) | 20 hours | Yes |
| [Microsoft Fabric IQ and Data Agents](https://skillupwithlevelup.com/course-detail/2430362) | 8 hours | Listed both ways on LevelUp |
| [Implement Agent 365 to observe, govern and secure AI apps, Copilot and agents](https://skillupwithlevelup.com/course-detail/2261257) | 12 hours | Yes |

Each course is self-paced and optional. Each has a separate assessment of about one hour, and the assessment is what counts.

{% note "Take the short one first" %}
The Microsoft IQ course is one hour. It is a good way to learn how LevelUp assessments work before you start the long courses.
{% endnote %}

{% more "Links to the five assessments" %}
- [Microsoft IQ assessment](https://skillupwithlevelup.com/course-detail/2421493)
- [Work IQ assessment](https://skillupwithlevelup.com/course-detail/2431760)
- [Accelerate Agentic AI assessment](https://skillupwithlevelup.com/course-detail/2431478)
- [Fabric IQ and Data Agents assessment](https://skillupwithlevelup.com/course-detail/2431757)
- [Agent 365 assessment](https://skillupwithlevelup.com/course-detail/2431791)

You need to be signed in to LevelUp to enrol.
{% endmore %}

## What each assessment is about

The course pages need a sign-in, so this section is not a copy of the courses. It explains the Microsoft products each assessment is named after, from Microsoft's public docs. Read it before a course, and the course will make sense faster.

{% note "One picture to keep in mind" %}
**Microsoft IQ** gives agents context. **Agent frameworks** build them. **Agent 365** watches and controls them. Every assessment sits in one of those three.
{% endnote %}

### Microsoft IQ: the context layer

Microsoft IQ is the name for four layers that give Copilot and agents the right context. It became generally available at Microsoft Build in June 2026, but some features inside each layer are still in preview.

{% must %}
- **Work IQ** knows how work happens: people, meetings, mail, files and chats in Microsoft 365.
- **Fabric IQ** knows what business data means: customers, orders, products and the rules between them.
- **Foundry IQ** finds knowledge across many sources through one endpoint, built on Azure AI Search.
- **Web IQ** grounds agents in live web results. It was added at Build 2026 and started in limited access.
- It works across GitHub Copilot, Microsoft Foundry and Copilot Studio.
{% endmust %}

{% more "Foundry IQ in more depth" %}
A Foundry IQ **knowledge base** holds one or more **knowledge sources**, such as an Azure AI Search index, Blob Storage, SharePoint or OneLake. It uses **agentic retrieval**: it plans several queries, searches the sources and merges the results, instead of one query against one index.

- You need an **Azure AI Search** resource. You don't need Foundry Agent Service, so any app can call it.
- An agent in Foundry connects to a knowledge base through an MCP tool.
- Azure AI Search has a free tier and a free token allowance for agentic retrieval, so you can try it cheaply.

Read: [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)
{% endmore %}

### Work IQ: Copilot's understanding of work

Work IQ is the layer that makes Microsoft 365 Copilot personal to each user and organization. Microsoft describes it in three layers.

{% must %}
- **Data:** Microsoft 365 content such as mail, meetings, files and chats.
- **Memory:** what Copilot remembers, such as custom instructions, saved memories and patterns of activity.
- **Inference:** models, skills and tools that reason over the data and memory and take action.
- Developers reach it through the **Work IQ API**, which offers A2A, a remote MCP server and a REST API.
- It **never widens access**. It works on behalf of the signed-in user, and Microsoft 365 permissions and sensitivity labels still apply.
- Adding the Work IQ MCP servers to a Copilot Studio agent needs a **Microsoft 365 Copilot licence**. The API itself is billed by usage.
{% endmust %}

Read: [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq)

### Accelerate Agentic AI: building agents

This is the longest course. The building blocks below are the ones Microsoft's docs keep coming back to.

{% must %}
- **Copilot Studio** is the low-code way to build agents. **Microsoft Foundry** with Foundry Agent Service is the pro-code way.
- **Microsoft Agent Framework** is Microsoft's open-source SDK for agents in Python and .NET. Version 1.0 shipped in April 2026, and it replaces **Semantic Kernel** and **AutoGen**.
- **MCP** (Model Context Protocol) connects an agent to **tools**. **A2A** (Agent2Agent) connects an agent to **other agents**. Don't mix them up.
- Multi-agent work follows a few patterns: one after another (sequential), at the same time (concurrent), passing the task on (handoff), and group chat.
{% endmust %}

{% more "Low code or pro code?" %}
Pick Copilot Studio when the agent lives in Microsoft 365, the logic is mostly conversation and connectors, and makers outside engineering need to change it. Pick Foundry and Agent Framework when you need your own code, your own models, complex multi-agent workflows or full control over hosting. AB-100 asks the same question, so this helps there too.
{% endmore %}

### Fabric IQ and data agents

Fabric IQ is a workload in Microsoft Fabric that gives data its business meaning, so people and agents can ask questions in business terms instead of table names.

{% must %}
- The **ontology** is the core item. It defines business things, like Customer or Shipment, with their properties, relationships and rules, and binds them to real data in OneLake. It is still in **preview**.
- A **data agent** answers plain-language questions over your data. It can use the ontology or a Power BI semantic model as its source.
- An **operations agent** watches real-time data and recommends actions.
- **Graph in Microsoft Fabric** stores the connections, for questions like "which shipments are exposed to this delay?"
- **Power BI semantic models** stay the place for trusted KPIs.
{% endmust %}

Read: [What is Fabric IQ?](https://learn.microsoft.com/en-us/fabric/iq/overview)

### Agent 365: observe, govern and secure

Agent 365 is the control plane for agents. It does not build or run agents. It keeps track of them and controls them, wherever they were built.

{% must %}
- Three jobs: **observe** (see every agent and how it is used), **govern** (lifecycle, access and policy) and **secure** (protect data and stop threats).
- The **registry** in the Microsoft 365 admin center is the one list of all agents. **Agent Map** shows how agents connect.
- It builds on **Microsoft Entra** for identity and access, **Microsoft Purview** for data protection, and **Microsoft Defender** for threat detection.
- Admins choose which **MCP servers**, including Work IQ, agents are allowed to use.
- Generally available since **1 May 2026**, licensed **per user**.
{% endmust %}

{% more "A common mix-up" %}
Agent 365 is not where you build an agent. You build in Copilot Studio, Foundry or your own code. Agent 365 is where IT sees, controls and protects what was built. If a question asks where to block an agent or review its permissions, the answer is usually Agent 365, Entra or Purview, not the tool that built it.
{% endmore %}

Read: [Microsoft Agent 365 overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)

## How to work through them

1. Sign in to LevelUp through the Partner Skilling Hub with your work account.
2. Enrol in the [Frontier Transformation Engineer course list](https://skillupwithlevelup.com/enroll-journey/35).
3. Start with Microsoft IQ, then do the four long courses in any order.
4. Take each assessment soon after its course, while it is fresh.
5. If you score under 80%, review the module you were weakest on and try again.

{% more "What about the labs?" %}
LevelUp says labs are "recommended as part of the learning experience and may be required for specific modules". It does not say publicly whether a lab environment is provided or whether you need your own tenant, licences or Azure subscription. Check the first lab in each course before you plan your time. If a lab asks you to create Azure resources, delete the resource group when you finish. {% unofficial %}
{% endmore %}

{% more "Live help sessions" %}
LevelUp lists a "Fastrack Support Series" from 16 November to 2 December 2026. It has live exam prep for the three certifications and two sessions for the Project Ready and Hypervelocity Engineering assessments, at 9 AM IST with recorded repeats for other time zones. {% unofficial %}
{% endmore %}

{% mine "What I did" %}
I spread the assessments from day 9 to day 23, about one a day: around two hours of course work, then the one-hour assessment. In total my log shows about 14 hours of course work, far less than LevelUp's 57. The courses are optional, so how much you need depends on what you already know.
{% endmine %}

## Common traps

- **Signing in to LevelUp directly with a new email and password.** Use your Partner Skilling Hub account, so the course record lands on your company.
- **Skipping the course to save time.** The courses are optional, but the assessments follow their content. Ten attempts go quickly if you guess.
- **Leaving long courses to the end.** The Work IQ and Agentic AI courses together are about 36 hours. Plan for them first.
