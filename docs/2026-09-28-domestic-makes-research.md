# Domestic fire alarm makes: research record

**Date:** 2026-09-28
**Trigger:** Jag's email of 28 September 2026, 08:13 UTC, thread `1a0e714b643af248`, subject "Adding more fire alarm makes to the website".
**Loop / step:** Middle loop. Step 1 (Frame) and Step 2 (Decompose). Nothing built yet.
**Maturity:** Pilot.

## What the client asked

Verbatim makes: "Aico, Kidde, Fireangel, HiSpec". Also "BS5839 PT 6". Also: "We are also an Aico Expert Installer." Asked: "How do you think we can add this information to the website?"

"Search functions" is read as Google and AI assistants. The only on-site search is a "Search FAQs..." input on `/faqs` (`app/faqs/page.tsx:224`) with no handler, so it filters nothing. Dead control, found by the review pass; the email asks whether that is what Jag meant.

## Spellings to use

- **Aico** (brand's own styling in running text).
- **Kidde.**
- **FireAngel** (one word, capital A). Searchers type both "fireangel" and "fire angel".
- **Hispec** (manufacturer site `hispec.co.uk`; retailers mostly use "Hispec", occasionally "HiSPEC"). Searchers type both "hispec" and "hi spec".

## What the site already carries

- **BS 5839-6 is already well covered:** 19 occurrences on `/services/fire-alarms`, 8 on every location page (template FAQ), plus the FAQs page, homepage, about page, the HMO guide and the BS 5839 explainer. No new BS 5839-6 work is needed.
- **None of the four makes appears anywhere** in `app/`, `lib/` or `public/` (grep, case-insensitive, including "fire angel" and "hi-spec").
- **Aico Expert Installer is not mentioned anywhere.**

## Live defect, confirmed on production 2026-09-28

`getServiceType()` in `app/[service]/[location]/page.tsx:637` matches on `s.includes('fire')` and falls through to `burglar`. Four live fire-domain matrix pages show Pyronix burglar alarm equipment, burglar projects and burglar FAQs (curl of production, all HTTP 200, all contain "Pyronix Euro and Enforcer"):

- `/domestic-smoke-alarm-install/basildon`
- `/interlinked-detectors/chelmsford`
- `/smoke-heat-detectors/south-woodford`
- `/bs5839-compliance/docklands`

Known since 2026-08-24 (memory.md, item 2 in that session's priority list) and not yet fixed. The three domestic pages are exactly where the four domestic makes belong, so the fix and the makes work are one job.

**The review pass found four more, all confirmed live 2026-09-28:**
- `/hmo-alarm-packages/stratford`: Pyronix burglar content. Almost certainly meant to be fire (the site's own fire copy offers "HMO alarm packages"); the email asks Jag to confirm.
- `/emergency-locksmith/romford`: lighting content, because "emergency" matches the lighting rule.
- `/bs3621-locks/ilford` and `/safe-fitting/brentwood`: Pyronix burglar content.

**Eight pages in total.** The fix must also not simply re-point the domestic pages at the existing `fire` detail block: that block is BS 5839-1 commercial (6-monthly servicing, weekly call point test, "All installations comply with BS 5839-1"), which is wrong for domestic smoke alarm pages. The domestic pages need a BS 5839-6 block of their own. BS 5839-6 appears on no matrix page today.

## Google Search Console (sc-domain:jandlsecurity.co.uk, 30 June to 27 September 2026)

- `query contains "aico"`: **no rows.**
- `query contains "smoke"`: 45 rows. Largest: "hmo smoke alarm requirements" 167 impressions, position 7.0; "hmo smoke alarms" 69, 11.5; "smoke alarm regulations for hmo" 58, 9.2. All landlord and regulation intent. Nothing brand-led, nothing installer-led of any size.
- The top-500 query export is alphabetical among zero-click rows and stops in the "b"s, so the filtered pulls above are the reliable ones.

## OpenSEO keyword metrics (DataForSEO, UK, location 2826, pulled 2026-09-28)

Pulled via the "Default" OpenSEO project with `locationCode: 2826`, because no J&L project exists in OpenSEO. Volumes are monthly UK estimates; close variants may share a grouped figure (for example "hispec" and "hi spec" both show 1,900), so **do not sum them**.

| Keyword | Volume | Intent | Note |
|---|---|---|---|
| aico smoke alarm | 9,900 | transactional | Retail SERP |
| smoke alarm beeping | 9,900 | informational | |
| fire angel smoke alarm | 6,600 | transactional | |
| fireangel smoke alarm | 4,400 | transactional | |
| kidde carbon monoxide alarm | 4,400 | transactional | |
| interlinked smoke alarms | 2,400 | transactional | |
| kidde smoke alarm | 2,400 | transactional | |
| hispec smoke alarm | 1,900 | transactional | Grouped with "hi spec" |
| aico heat alarm | 1,900 | transactional | |
| aico carbon monoxide alarm | 1,600 | transactional | |
| bs 5839-6 | 1,000 | informational | Already covered on site |
| smoke alarm installation | 880 | commercial | CPC £7.75 |
| fireangel smoke alarm beeping | 720 | informational | Forum SERP |
| mains smoke alarm beeping | 720 | informational | |
| fire angel smoke alarm beeping | 590 | informational | |
| smoke alarm replacement | 590 | transactional | |
| hispec smoke alarm beeping | 320 | informational | Forum SERP, no brand page in top 10 |
| kidde smoke alarm beeping | 260 | transactional | |
| smoke alarm installer near me | 90 | commercial | CPC £5.50 |
| aico smoke alarm beeping | 50 | informational | |
| aico expert installer | 30 | navigational | |
| aico installer | 20 | transactional | |
| domestic fire alarm installation | 20 | commercial | |

## SERPs (UK, top 10, pulled 2026-09-28)

- **"aico smoke alarm":** product carousel, Screwfix, Amazon, product carousel, People Also Ask, eBay, Fire Trade Supplies, John Cribb, B&Q, Aico. **Retail only. Not winnable for an installer site, and the email says so.**
- **"fireangel smoke alarm beeping":** AI Overview, then motorhomefun forum, Reddit, JustAnswer, DIYnot, Out&About forum, Facebook group, manuals.plus. **Weak, forum-led results.**
- **"hispec smoke alarm beeping":** AI Overview, video, then Facebook group, JustAnswer, Reddit, Quora x2, Midland Heart. **No Hispec page in the top 10.**
- **"mains smoke alarm beeping":** Reddit, Safelincs, Aico, T M Hughes Electrical (a local electrician), FireAngel. A local electrician's page ranks, so a trade page can compete here.
- **"aico installer essex":** Aico Find an Installer #1, Aico sign-up page, then Leigh Electrical (an Aico install page for Loughton), e-facilities, Scloud Electrical, Checkatrade, Instagram. **Local trade pages with an Aico page rank on page one.** Low volume, high intent.
- "smoke alarm installation brentwood": the SERP call failed (provider error). Not retried.

## Aico Expert Installer: what it is

From `aico.co.uk/homeowner/find-an-expert-installer/` (fetched 2026-09-28):

- Expert Installer is Aico's free, CPD-certified training scheme for installers.
- The homeowner-facing **Find an Installer** directory lists three levels:
  - **City & Guilds Assured:** completed both Expert Installer and City & Guilds training.
  - **Aico Gold Standard:** as above, plus membership of NAPIT, NICEIC, Select or FIA. J&L is an FIA member, so it would qualify if the City & Guilds course is done.
  - **Platinum Partner:** Gold Standard plus ISO 9001.
- The directory search runs through a reCAPTCHA-protected AJAX call, so whether J&L is listed could not be checked from here. **Asked in the email.**
- No public page states rules for using the Expert Installer name or badge. **Do not publish a badge or a tier claim until Jag confirms which applies.** "Expert Installer" on its own is the training; the listing tiers are separate.

## Conclusions that shape the proposal

1. **Listing the four makes is right but will not rank for the bare brand names.** Those searches are product purchases and retailers own them. The value is recognition (customers, AI assistants), the domestic matrix pages, and the long tail.
2. **The real search opening is "[make] alarm beeping".** Forum-led results, repeat intent, and it mirrors the fire alarm panel fault guide already live. Same constraint applies: no step-by-step repair procedures, route the reader to call.
3. **The Aico directory listing is a lead source in its own right** and ranks first for "aico installer essex". Worth confirming J&L is on it.
4. **The four-page `getServiceType()` defect must be fixed with this work**, and disclosed.

## Proposed decomposition (for operator approval)

| Unit | Work | Depends on |
|---|---|---|
| A | Fix `getServiceType()` for all eight pages: fire-domain (smoke, heat, detector, interlinked, BS 5839, HMO) to fire, and locksmith/lock/safe pages to an appropriate block rather than burglar or lighting. Add a domestic BS 5839-6 detail block for the three domestic pages. | Commercial pages can go now; domestic block needs Jag's answers for the makes line. |
| A2 | FAQs search box: make it filter, or remove it. | Operator decision. |
| B | Add a fourth group, "domestic smoke, heat and carbon monoxide alarms: Aico, Kidde, FireAngel and Hispec", everywhere the existing makes list appears: fire-alarms overview, makes FAQ, `metaOverrides`, about page grid and prose, `fire.equipmentUsed`, `llms.txt`, `llms-full.txt`, `humans.txt`. | Jag's answer on install versus service, and on heat and CO alarms. |
| C | Aico Expert Installer statement on the fire alarms page and about page, worded to the confirmed tier. | Jag's answer on tier and listing. |
| D | Optional: "Why is my smoke alarm beeping? A guide by make" blog post. Brand-level only, no model procedures, calls routed to J&L. | Jag says yes. |
