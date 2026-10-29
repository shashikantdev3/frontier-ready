---
layout: layouts/page.njk
title: "AI-103: Developing AI Apps and Agents on Azure"
heading: Developing AI Apps and Agents on Azure
stamp: AI-103
bodyClass: numbered
description: How to prepare for and pass Exam AI-103, Developing AI Apps and Agents on Azure, the second certification for the FTE badge.
lede: AI-103 checks that you can build, secure and run AI apps and agents with Microsoft Foundry. It is the broadest of the three exams, so give it the most hands-on time.
inShort:
  - 120 minutes, pass mark 700, Microsoft Learn open during the exam.
  - Generative AI and agents carry the most weight, followed by planning and managing.
  - An active AI-102 counts in its place for the badge, but AI-102 retired on 30 June 2026.
next:
  text: "Next exam: AB-100, Agentic AI Business Solutions Architect"
  href: /ab-100/
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Learn: Study guide for Exam AI-103"
    url: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103
  - title: "Microsoft Learn: Azure AI Apps and Agents Developer Associate"
    url: https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/
  - title: "Microsoft Learn: Course AI-103T00, Develop AI apps and agents on Azure"
    url: https://learn.microsoft.com/en-us/training/courses/ai-103t00
  - title: "Microsoft Learn: Retired certification exams"
    url: https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams
  - title: "Microsoft Learn: Exam duration and exam experience"
    url: https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience
  - title: "Foundry: Agent Service overview"
    url: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
  - title: "Foundry: Deployment types"
    url: https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types
  - title: "Foundry: Guardrails overview"
    url: https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview
  - title: "Foundry: Harm categories and severity levels"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-severity-levels
  - title: "Foundry: Prompt Shields"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-prompt-shields
  - title: "Foundry: Built-in evaluators"
    url: https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators
  - title: "Foundry: Agent tracing"
    url: https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept
  - title: "Foundry: Configure keyless authentication with Microsoft Entra ID"
    url: https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-entra-id
  - title: "Azure AI Search: Vector search"
    url: https://learn.microsoft.com/en-us/azure/search/vector-search-overview
  - title: "Azure AI Search: Hybrid search"
    url: https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview
  - title: "Azure Content Understanding overview"
    url: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview
  - title: "Azure: Free account"
    url: https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account
---

## What the exam tests

These are Microsoft's official topic areas and weights, from the skills outline dated 16 April 2026.

| Topic area | Weight |
|---|---|
| Plan and manage an Azure AI solution | <span class="range" style="--lo:25;--hi:30">25–30%</span> |
| Implement generative AI and agentic solutions | <span class="range" style="--lo:30;--hi:35">30–35%</span> |
| Implement computer vision solutions | <span class="range" style="--lo:10;--hi:15">10–15%</span> |
| Implement text analysis solutions | <span class="range" style="--lo:10;--hi:15">10–15%</span> |
| Implement information extraction solutions | <span class="range" style="--lo:10;--hi:15">10–15%</span> |

{% note "Coming from AI-102?" %}
AI-103 is built around Microsoft Foundry and agents. Older services such as Custom Vision are not in the outline, so don't spend time on them.
{% endnote %}

{% more "See every skill in the outline" %}
**Plan and manage.** Choose models (large, small, multimodal) and Foundry services for generation, grounding, vector search, agent workflows and multimodal work. Choose retrieval, memory, tool and knowledge services. Design infrastructure, pick deployment options and connect Foundry projects to CI/CD. Manage quotas, scaling, rate limits and cost. Monitor model performance, drift, safety events, grounding quality and search index health. Secure with managed identity, private networking, keyless credentials and roles. Configure safety filters, guardrails, evaluators, trace logging and agent oversight.

**Generative AI and agents.** Deploy and use models. Build retrieval-augmented generation (RAG). Design tool-augmented and multistep flows. Evaluate for fabrication, relevance, quality and safety. Connect apps to a Foundry project with the SDKs. Define agent roles, goals, conversation tracking and tool schemas. Build agents with retrieval, function calling and memory. Build multi-agent and semi-autonomous solutions with approval controls. Tune prompts and parameters, use reflection and self-critique, set up tracing and token analytics, and orchestrate several models.

**Computer vision.** Generate and edit images and videos, including inpainting and mask edits. Caption images, answer questions about them and write alt text. Use Content Understanding for images and video. Filter unsafe visual content and detect prompt injection hidden in images.

**Text analysis.** Extract entities, topics, summaries and structured JSON. Detect sentiment, tone and sensitive content. Translate text. Speech to text, text to speech, custom speech and speech translation for agents.

**Information extraction.** Ingest and index documents, images, audio and video. Configure semantic, hybrid and vector search. Use enrichment skills and OCR. Connect retrieval to agents. Extract fields and produce clean markdown with Content Understanding.
{% endmore %}

## A short study plan

1. Work through the four learning paths in Microsoft's course [AI-103T00](https://learn.microsoft.com/en-us/training/courses/ai-103t00), about 30 hours in all:
   - [Develop generative AI apps in Azure](https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps/)
   - [Develop AI agents on Azure](https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/)
   - [Develop natural language solutions in Azure](https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/)
   - [Extract insights from visual data on Azure](https://learn.microsoft.com/en-us/training/paths/insight-visual-data/)
2. Do at least four of the labs below, including the agent lab and the RAG lab.
3. Read the Foundry pages on deployment types, guardrails, evaluators and tracing. These come up across several topic areas.
4. Take Microsoft's [official practice assessment](https://aiskillsnavigator.microsoft.com/credentials/cert-3fb198f57997226a824aa5f52a1a22af9a4597941b2288ed39371c7a9e6bd7c9). You need to sign in to AI Skills Navigator.
5. Read the common traps the night before.

{% slot %}
The author will add how many days he spent on AI-103 and what he studied each day.
{% endslot %}

## Must-know concepts

{% must %}
- **Deployment types.** Standard is pay-per-token, provisioned is reserved capacity with guaranteed throughput, and batch is discounted and asynchronous. Microsoft suggests starting with Global Standard. Data Zone keeps processing inside the US, EU or Asia Pacific zone.
- **Agent types in Foundry.** Prompt agents (instructions, a model and tools), voice-based prompt agents through Voice Live, and hosted agents, where you bring your own code and Foundry runs it as a container.
- **RAG with Azure AI Search.** Vector search finds meaning. Hybrid search runs keyword and vector search together and merges the results with Reciprocal Rank Fusion.
- **Guardrails** can act at four points: user input, tool call, tool response and output. Tool call and tool response are for agents and are in preview.
- **Prompt Shields.** Detection of user prompt attacks is on by default. Detection of document attacks is off until you turn it on.
- **Keyless access.** Use Microsoft Entra ID with the Cognitive Services User role at the Foundry resource scope.
{% endmust %}

{% more "Content safety in more depth" %}
Foundry classifies harmful content into four categories, hate, sexual, violence and self-harm, for both text and images. One guardrail can be applied to many models and many agents in a project, so you don't have to configure each one.
{% endmore %}

{% more "Evaluation and tracing" %}
Microsoft suggests evaluator sets by app type. For a RAG app: Retrieval, Groundedness, Relevance and Content Safety. For a translation app: BLEU, METEOR, Fluency and Coherence. For agents, there are evaluators for tool selection, tool input accuracy, tool call success and how well the agent uses tool output.

Tracing uses OpenTelemetry conventions and stores data in Azure Monitor Application Insights, which can cost money. Tracing is generally available for prompt and hosted agents, and in preview for workflow and external agents.
{% endmore %}

{% more "Documents and Content Understanding" %}
Content Understanding processes documents, images, video and audio into an output format you define. You describe the fields in a schema, and it returns values with confidence scores and grounding, without complex prompt engineering.

For Azure AI Search, integrated vectorization needs an indexer, a supported data source and a skillset. You can also create embeddings yourself and push them into vector fields.
{% endmore %}

{% screen %}
## Hands-on labs

Every lab here needs **your own Azure subscription**. Microsoft's free Azure account gives a **$200 credit to use within 30 days**. No official page says the free account has enough model quota for every lab, so if a model won't deploy, try another region.

{% must %}
Delete the resource group when you finish each lab. Foundry, Azure AI Search and Application Insights keep charging while they exist.
{% endmust %}

| Lab | What you need | Clean up |
|---|---|---|
| [Build AI agents with the portal and VS Code](https://microsoftlearning.github.io/mslearn-ai-agents/Instructions/Exercises/01-build-agent-portal-and-vscode.html) (about 45 min) | Azure subscription with model quota, VS Code, Python 3.13, Git | Delete the project in Foundry (Settings, then Delete project), or delete the resource group. |
| [Integrate an AI agent with Foundry IQ](https://microsoftlearning.github.io/mslearn-ai-agents/Instructions/Exercises/04-integrate-agent-with-foundry-iq.html) (about 45 min) | Azure subscription. Azure AI Search on the Free tier if available, otherwise Basic. | Delete the resource group with the Foundry and Search resources. |
| [Create a generative AI app that uses tools](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/04a-use-own-data.html) (about 30 min) | Azure subscription, in one of the Foundry regions the lab recommends | Delete the resource group. |
| [Apply guardrails to prevent harmful output](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/06-Explore-content-filters.html) | Azure subscription | Delete the resource group. |
| [Explore and compare models](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/02-model-catalog-evaluation.html) (about 45 min) | Azure subscription | Delete the resource group. |
| [Extract information from multimodal content](https://microsoftlearning.github.io/mslearn-ai-information-extraction/Instructions/Exercises/01-content-understanding.html) (about 40 min) | Azure subscription, in a region that supports Content Understanding | Delete the resource group. |
| [Recognize and synthesize speech](https://microsoftlearning.github.io/mslearn-ai-language/Instructions/Exercises/04-azure-speech.html) (about 30 min) | Azure subscription. The lab uses audio files, so you don't need a microphone. | Delete the resource group. |
| [Create a knowledge mining solution](https://microsoftlearning.github.io/mslearn-ai-information-extraction/Instructions/Exercises/04-knowledge-mining.html) (about 40 min) | Azure subscription. The free enrichment tier indexes up to 20 documents. | Delete the resource group. |
| [Automated evaluation with cloud evaluators](https://microsoftlearning.github.io/mslearn-genaiops/docs/04-automated-evaluation.html) (about 40 min) | Azure subscription and the Azure Developer CLI | Run `azd down --purge --force`. Without `--purge` the Foundry account is only soft-deleted and its name stays reserved. |

{% more "Applied Skills you can earn along the way" %}
Microsoft Applied Skills are short, lab-based credentials. The lab environment is provided for you during the assessment.

- [Get started developing agents in Microsoft Foundry](https://learn.microsoft.com/en-us/credentials/applied-skills/get-started-developing-agents-in-microsoft-foundry/) (beginner)
- [Develop a generative AI chat app using the Microsoft Foundry SDK](https://learn.microsoft.com/en-us/credentials/applied-skills/build-a-generative-ai-chat-app/) (intermediate, needs Python or C#)

After you launch an assessment lab, you have to wait 72 hours before you can launch it again.
{% endmore %}

{% slot %}
The author will add any lab he found most useful for AI-103.
{% endslot %}
{% endscreen %}

## Common traps

- **Studying the old exam.** Custom Vision and other AI-102 topics are not in the AI-103 outline.
- **Assuming all safety checks are on.** Prompt Shields checks user prompts by default, but you must turn on document attack detection.
- **Leaving lab resources running.** A forgotten Search service or Foundry resource keeps billing.
- **Mixing up standard and provisioned.** Provisioned gives guaranteed throughput. Standard is best effort. Developer deployments have no SLA.
- **Using every lookup.** Microsoft Learn is open during the exam, but the timer doesn't stop.

{% screen %}
## Practice questions

These are written for this guide. They are not from the real exam. For questions in the exam's own style, use Microsoft's [official practice assessment](https://aiskillsnavigator.microsoft.com/credentials/cert-3fb198f57997226a824aa5f52a1a22af9a4597941b2288ed39371c7a9e6bd7c9).

<details class="more practice"><summary>Open the six practice questions</summary><div class="more__body">

{% question 1 %}
A support centre runs a model at a steady, high volume all day. The business needs predictable latency with guaranteed throughput, and is happy to pay for reserved capacity. Which deployment type fits?

1. Global Standard
2. Provisioned
3. Batch
4. Developer
---answer---
**Answer: 2.** Microsoft says provisioned types provide guaranteed throughput, while standard types are best effort and developer deployments have no SLA. Batch is asynchronous, so it does not suit live calls. Source: [Deployment types](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types).
{% endquestion %}

{% question 2 %}
Your team already has an agent written with its own framework and custom code. You want Foundry to run and scale it without rewriting it as a prompt agent. Which option do you use?

1. A prompt agent with the code pasted into its instructions
2. A hosted agent
3. A voice-based prompt agent
4. A batch deployment
---answer---
**Answer: 2.** Hosted agents let you bring your own code and framework, and Foundry runs them as a container. Source: [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview).
{% endquestion %}

{% question 3 %}
You build an app that translates product manuals from English into Japanese. You need to set up an evaluation. Which set of evaluators does Microsoft suggest for this kind of app?

1. Retrieval, Groundedness, Relevance and Content Safety
2. BLEU, METEOR, Fluency and Coherence
3. Tool Call Accuracy and Tool Selection
4. Groundedness only
---answer---
**Answer: 2.** Microsoft lists BLEU, METEOR, Fluency and Coherence for translation apps. Option 1 is the set for RAG apps. Source: [Built-in evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators).
{% endquestion %}

{% question 4 %}
An agent has six tools. Users say it often calls the weather tool when they ask about shipping delays. You want to measure this before you change the tool descriptions. What should you evaluate?

1. The agent's tool selection and tool call accuracy
2. The fluency of the agent's answers
3. The BLEU score of the answers
4. The latency of each tool
---answer---
**Answer: 1.** Foundry has agent evaluators for tool selection, tool call accuracy, tool input accuracy, tool call success and tool output use. Fluency and BLEU measure the text, not the choice of tool. Source: [Built-in evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/built-in-evaluators).
{% endquestion %}

{% question 5 %}
A Foundry project has four agents and two model deployments. The security team wants the same content safety rules on all of them, managed in one place. What should you do?

1. Write the rules into each agent's instructions.
2. Create one guardrail and apply it to all the models and agents.
3. Create a separate Foundry resource for each agent.
4. Turn on tracing for each agent.
---answer---
**Answer: 2.** Microsoft states that one Foundry guardrail can be applied to one or many models and one or many agents in a project. Instructions are not a safety control. Source: [Guardrails overview](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview).
{% endquestion %}

{% question 6 %}
A reviewer asks which harm categories Foundry's content filtering classifies for both text and images. Which list is correct?

1. Hate, sexual, violence and self-harm
2. Hate, spam, violence and fraud
3. Sexual, profanity and personal data
4. Violence and self-harm only
---answer---
**Answer: 1.** Foundry classifies harmful content into four categories, hate, sexual, violence and self-harm, for both text and images. Source: [Harm categories and severity levels](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/content-filter-severity-levels).
{% endquestion %}

</div></details>
{% endscreen %}

## Exam day

- **Length:** 120 minutes. **Pass mark:** 700.
- **Languages:** English, Chinese (Simplified and Traditional), French, German, Japanese, Korean, Italian, Portuguese (Brazil) and Spanish.
- **Microsoft Learn is open** during the exam, except Q&A and practice assessments. The timer keeps running.
- **Preview features** can appear if they are commonly used.
- **Booking:** through Pearson VUE. The price depends on your country.
- **Renewal:** free, once a year, through an online assessment on Microsoft Learn.

{% more "If you hold AI-102" %}
Microsoft retired the Azure AI Engineer Associate certification (AI-102) on 30 June 2026, together with its renewal assessment. Microsoft's partner blog lists "AI-102/AI-103" for the badge, and LevelUp says an active AI-102 is accepted in place of AI-103. You can't renew AI-102, so check its expiry date in your Microsoft Learn transcript. For partner requirements in general, Microsoft says retired certifications keep counting for one year after the retirement date.
{% endmore %}

{% slot %}
The author will add his exam-day tip for AI-103.
{% endslot %}
