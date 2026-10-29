---
layout: layouts/page.njk
title: Getting the badge
heading: Getting the badge
bodyClass: numbered
description: How the FTE badge is issued, how long each step takes, and what to check if your badge or a completion does not show up.
lede: Once your last assessment is done, the badge is issued after everything is checked. This page explains the waiting times and what to do if something is missing.
inShort:
  - The badge is issued after all certifications and assessments are validated.
  - Certifications can take 10 days to reach Partner Center, and LevelUp says up to 2 or 3 weeks to be recognized.
  - If something is missing, check your account links first.
next:
  text: "Back to the start: tick off your progress"
  href: /
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Learn: Associate your Microsoft Learn profile with Partner Center"
    url: https://learn.microsoft.com/en-us/partner-center/membership/ms-learn-associate
  - title: "Microsoft Learn: Manage your Microsoft Learn profile settings"
    url: https://learn.microsoft.com/en-us/training/support/learn-profile-manage
  - title: "Microsoft Learn: Learn FAQ (losing access to a work account)"
    url: https://learn.microsoft.com/en-us/training/support/faq?pivots=general
  - title: "Microsoft Partner: Frontier Partner specialization requirements"
    url: https://partner.microsoft.com/en-us/partnership/specialization/frontier-partner
  - title: "LevelUp: Frontier Transformation Engineer FAQ"
    url: https://skillupwithlevelup.com/frontier
    unofficial: true
  - title: "Microsoft Q&A: GH-300 certification evidence for the FTE badge"
    url: https://learn.microsoft.com/en-in/answers/questions/5914096/gh-300-certification-evidence-how-to-submit-in-fro
    unofficial: true
---

## How the badge is issued

LevelUp says the badge is issued "after all required certifications, assessments, and completion criteria have been successfully validated". {% unofficial %} Badges seen so far are issued on [Credly](https://www.credly.com/badges/b79a5570-feb3-41fd-b8c3-faec9dd1d465), with Microsoft as the issuer. Microsoft has not published a step-by-step account of how the badge reaches you, so watch your work email.

## How long things take

| What | How long | Source |
|---|---|---|
| A new certification appears in Partner Center | Up to 10 days | Microsoft |
| Skilling Hub credentials sync to Partner Center | Once a day | Microsoft |
| A certification is recognized for the badge | Up to 2 or 3 weeks after your enrolment and exam pass date | LevelUp {% unofficial %} |

{% note "Why two different times?" %}
They measure different things. Partner Center's 10 days is about your company's record. LevelUp's 2 to 3 weeks is about the badge course list recognizing your exam.
{% endnote %}

## If something does not show up

Work through this list in order. Most problems are an account mix-up.

1. **Check your Microsoft Learn transcript.** Sign in, go to your profile page and select **Transcript**. If the exam is not there, the problem is with the exam record, not the badge.
2. **Check which account holds the certification.** Partner Center must link the Microsoft Learn account that has the certification on it.
3. **Check that both profiles are linked** in Partner Center: Microsoft Learn and Partner Skilling Hub.
4. **Check how you signed in to LevelUp.** Microsoft says you must use your Partner Skilling Hub account to sign in to LevelUp for completions to count.
5. **Wait out the sync times** in the table above before you raise a ticket.
6. **Ask for help.** Use the "I need Help" button on LevelUp, or Partner Center support for linking problems.

{% must %}
- Don't unlink and relink to "refresh" anything. You can link only **three times a year**, with **30 days** between links.
- If your Microsoft Learn profile has only a **work** account on it and you leave the company, you can lose the profile. Add a personal account to it in your Learn settings.
{% endmust %}

{% more "GH-300 passed before August 2025?" %}
A community answer on Microsoft Q&A says GitHub certifications from before August 2025 were not moved to Microsoft Learn. If your GH-300 is that old, it may not appear in your transcript. There is no official guidance yet on how to submit it for the badge, so ask LevelUp support. {% unofficial %}
{% endmore %}

## What the badge means for your company

Microsoft's Frontier Partner specialization needs **five people** in the company with the FTE badge, plus three people with the Fabric Analytics Engineer certification (DP-600). They can be the same people or different ones.

{% slot %}
The author will add how long his badge took to arrive after his last assessment.
{% endslot %}
