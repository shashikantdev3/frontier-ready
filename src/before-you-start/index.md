---
layout: layouts/page.njk
title: Before you start
heading: Before you start
bodyClass: numbered
description: Set up and link your Partner Skilling Hub, Microsoft Learn and Partner Center accounts so every completion counts toward your FTE badge.
lede: Your badge depends on three accounts that talk to each other. If one is not linked, your work does not count. Set them up once, in this order.
inShort:
  - "You need three accounts: Partner Skilling Hub, Microsoft Learn and Partner Center."
  - Use your work email for the Partner Skilling Hub.
  - Link your Microsoft Learn profile in Partner Center after your first exam, not before.
next:
  text: "Milestone 1: the three certifications"
  href: /milestone-1/
lastChecked: "2026-10-29"
sources:
  - title: "Microsoft Learn: Associate your Microsoft Learn profile with Partner Center"
    url: https://learn.microsoft.com/en-us/partner-center/membership/ms-learn-associate
  - title: "Microsoft Learn: Manage your Microsoft Learn profile settings"
    url: https://learn.microsoft.com/en-us/training/support/learn-profile-manage
  - title: "Microsoft Learn: Learn FAQ (profile merges and transcript)"
    url: https://learn.microsoft.com/en-us/training/support/faq?pivots=general
  - title: "Microsoft Learn: GitHub Copilot certification (registration advice)"
    url: https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/
  - title: "Microsoft Partner Skilling Hub"
    url: https://www.skilling-hub.com/
  - title: "LevelUp: Frontier Transformation Engineer setup steps"
    url: https://skillupwithlevelup.com/frontier
    unofficial: true
---

## Create a Partner Skilling Hub account

The [Partner Skilling Hub](https://www.skilling-hub.com/) is Microsoft's training site for partners. Microsoft says you must use your Skilling Hub account to sign in to LevelUp, where the FTE courses run, or your course completions won't count.

Register with your **work email**. LevelUp says personal addresses such as Gmail or Outlook.com are not supported. {% unofficial %}

{% note "Why this matters" %}
Partner Center collects credentials from Microsoft's partner training sites through your Skilling Hub account. Your FTE courses and the badge itself reach your company that way.
{% endnote %}

## Get your Microsoft Learn profile ready

Your exams and certifications live in your Microsoft Learn profile. Microsoft recommends a **personal Microsoft account** as the main sign-in, because it keeps your progress and credentials if you change jobs. You can then add up to five work or school accounts to the same profile.

1. Sign in to [Microsoft Learn](https://learn.microsoft.com/en-us/users/me/settings) with your personal account and open **Settings**.
2. Under **Account Management**, select **Add Login account**.
3. Sign in with your work account.

{% must %}
If your work account already has its own Learn profile, adding it **merges the two profiles**, and a merge can't be undone. Microsoft allows the merge only if just one of the profiles has a personal account on it.
{% endmust %}

{% more "How to check what is in your profile" %}
Sign in to Microsoft Learn, go to your profile page and select **Transcript** in the left column. Every exam and certification you have passed is listed there.
{% endmore %}

## Check that you can sign in to Partner Center

You link your profiles in Partner Center, so you need a Partner Center user. If you don't have one, ask your company's Partner Center admin to create one with your work email.

Your company must also be enrolled in the Microsoft AI Cloud Partner Program. You don't need any special role to link your own profiles, and nobody can link them for you.

## Link your Microsoft Learn profile, after your first exam

Do this once you have passed your first exam, such as GH-300. Partner Center will not link a profile with no completed exam or certification.

1. Sign in to the [Partner Center Learn linking page](https://partner.microsoft.com/dashboard/v2/membership/workspace).
2. Select the **Microsoft Learn** tab if it is not already selected.
3. Select **Link Microsoft Learn Profile**.
4. Sign in with the same account you use for Microsoft Learn.

Your certifications appear in Partner Center **within 10 days**. New ones take up to 10 days too.

{% must %}
- You can link or unlink **only three times a year**, with **30 days** between links. Link the right account the first time.
- Use the **same Microsoft account** in Microsoft Learn and in the Partner Center sign-in prompt.
{% endmust %}

## Link your Partner Skilling Hub profile

In the same area of Partner Center, select **Link Skilling Hub Profile**, read the privacy notice and select **Accept**.

Partner Center syncs Skilling Hub credentials **once a day**. Keep your Microsoft Learn profile linked as well, because your exams don't come through the Skilling Hub.

{% slot %}
The author will add anything that tripped him up during account setup.
{% endslot %}

## Common traps

- **Signing up to the Skilling Hub with a personal email.** Your completions then don't count for your company.
- **Linking before your first exam.** Partner Center needs at least one completed exam or certification first.
- **Two different Microsoft accounts.** If your exam is on one account and you link another, your certification won't appear.
- **Unlinking to "try again".** Every link counts toward your three a year.
