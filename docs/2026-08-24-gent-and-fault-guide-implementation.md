# Gent servicing-only, the approved BAFE headline, and the fault guide: implementation record

**Date:** 2026-08-24
**Branch:** `feat/gent-service-only-and-fault-guide` (deleted after merge)
**PR:** [#21](https://github.com/AiC007/jandl-security-site2cc/pull/21), squash-merged to main as `cbadbd9`
**Trigger:** Jag's reply of 23 August 2026, 20:07, in the thread "J&L Security Website: Fire Alarm Makes Now Live"
**Maturity:** Pilot
**Scope:** Tasks A, B and C of `docs/2026-08-24-gent-and-fault-guide-handoff-prompt.md`, in full.

---

## What Jag settled

His reply, verbatim:

> 1. Yes we support Fike and Zeta, keep them.
> 2. We install and service all of the makes listed but only service Gent
> 3. Correct Apollo and Hochiki make detectors
> 4. Yes, change the statement as in point 5.
>
> Yes, that would be good if a search for "kentec panel fault" bring the customer to our website.

| Question | Outcome |
|---|---|
| 1. Fike and Zeta | Stay. No change needed. |
| 2. Install versus service | **Gent is service-only.** Nine code changes. |
| 3. Three-way grouping | Confirmed correct. No change. |
| 4. Panel and model names | **Not answered.** No models published. Asked again in this round's email. |
| 5. BAFE headline | Approved verbatim. Applied. |
| Fault guide | Approved. Built. |

---

## Task A: Gent is service-only

**The brief named seven places. There were nine.** The two extra were found by grepping the code rather than working from the brief, which is the standing lesson from 17 August restated: verify what the code does, do not trust the notes.

| # | Location | What it said | Found by |
|---|---|---|---|
| 1 | `app/about/page.tsx` make-grid caption | "Makes shown are those we install, service and take over." | Brief |
| 2 | `app/about/page.tsx` equipment prose | "equipment we trust and have tested over thousands of installations", then the make list, then "We do not install cheap or unbranded equipment." | **Grep** |
| 3 | `app/services/[service]/page.tsx` overview para 2 | "We install, service and maintain ... The makes we support include ..." | Brief |
| 4 | Same file, makes FAQ | Question: "Which makes of fire alarm panel do you install and service?" Answer: "...across installation, servicing, fault repair and takeover..." | Brief |
| 5 | Same file, `metaOverrides` description | "installation, servicing and fault repair ... Kentec, Advanced, C-TEC, Gent and Haes panels." | **Grep** |
| 6 | `app/[service]/[location]/page.tsx` `fire.equipmentUsed` | Make list under an install framing | Brief |
| 7 | `public/llms.txt` | "Fire alarm makes supported (installation, servicing, fault repair and takeover)" | Brief |
| 8 | `public/llms-full.txt` makes paragraph | "Support covers installation, servicing, fault repair and takeover..." | Brief |
| 9 | `public/llms-full.txt` Supplier Partners | "Kentec, Advanced, C-TEC, Gent, Haes, Fike, Zeta: Fire alarm control panels" | Brief |

**Every one was split, not weakened.** The install claim is accurate and commercially valuable for the other eleven makes, so it is kept for them and Gent is stated separately as service, maintenance, fault finding and takeover only. Deleting the word "install" would have thrown away a true claim about eleven makes to fix a false one about one.

The makes FAQ was retitled to **"Which makes of fire alarm panel do you work with?"** because the overclaim sat in the question itself, where a rewritten answer could not reach it.

`public/humans.txt` carries the make list under `# THANKS` with no verb attached, so it needed no change. `metaOverrides` keeps the `Gent fire alarm` keyword, which is a search term rather than a claim.

### The conditional H2

`app/[service]/[location]/page.tsx:1041` rendered `What We Install in {combination.location}` directly above the make list, and that H2 is shared by all 50 matrix pages. It is accurate for burglar, CCTV, access control and lighting. It was wrong for fire on two counts: the list contained a make J&L does not install, and six of the eight fire pages are about servicing, maintenance, testing, monitoring or fault finding rather than new installation.

The heading was made conditional rather than renamed globally. `generateContent()` already computed `isFireService` at line 658; that flag is now returned on the content object and consumed at the render site.

**`getServiceType()` was deliberately not touched**, which is why the `/bs5839-compliance/docklands` routing bug was left alone. See "Flagged, not actioned".

---

## Task B: the BAFE headline

`heroTagline` now reads, verbatim as approved:

> BAFE-Certified Fire Alarm Installation and Servicing, plus Fire Risk Assessments

`heroTagline` is both the `<h1>` and the page `<title>` (line 455 and line 537). Both confirmed in the built HTML and on production.

**The PR #8 tension, resolved as the brief directed.** PR #8 wanted to strip fire risk assessments off the fire alarms page entirely, to stop it cannibalising `/services/fire-risk-assessments`. Jag's approved wording keeps "plus Fire Risk Assessments" in the headline, and client-approved wording wins there. PR #8's *other* change was applied: the fire risk assessment delivery sentence is dropped from overview paragraph 1. That is the better de-overlap lever now the FRA page has its own comparator block, and it is the last outstanding piece of the abandoned PR #8. **PR #8 is now fully reconciled: three changes relanded in PR #20, this one in PR #21, and the heroTagline rename superseded by the client's own wording.**

---

## Task C: the fault guide

`/blog/fire-alarm-panel-fault-guide-by-make`, 2,561 words measured from the rendered body by stripping tags and counting, not estimated. The method was calibrated first against two existing posts and agreed with their declared counts to within 4 words.

Twelve H3 sections headed on the query pattern: "Kentec panel fault", "Advanced panel fault", "C-TEC panel fault", "Gent panel fault", "Haes panel fault", "Fike panel fault", "Zeta panel fault", "EMS wireless fire alarm fault", "EDA Zerio Plus fault", "SmartCell fault", "Apollo detector fault", "Hochiki detector fault". Around them: fault versus fire, the internal buzzer, the five common fault categories, what to gather before calling, why no fault codes are published, the responsible person's position, and reducing callouts.

### The hard constraint, and how it was held

**No panel or model names, no fault codes, no reset sequences, no panel-specific diagnostics.** Jag did not answer question 4, so there were none to publish, and on life-safety equipment a published procedure that is right for one panel can be wrong for the panel in front of the reader.

The article states the policy openly under "Why We Do Not Publish Fault Codes" rather than leaving the gap unexplained, and reframes the reader's role from fixing to reporting: it tells them not to open the panel, attempt a repair, isolate sounders or disconnect devices, and lists what to gather before calling instead. Verified by case-insensitive word-boundary grep of the live page against Syncro, Taktis, XFP, ZFP, MxPro, FireCell, Elan, Excel, XP95, Discovery, ESP, Vigilon and Quantec. Zero hits.

### Manufacturer claims held to what is verifiable

Each make paragraph states only what J&L does with it, what category it sits in, and what to have ready when calling. Two specific traps from `memory.md` were respected:

- **Apollo** is described as making detection devices rather than control panels, which is correct.
- **Hochiki** is described as making detection devices *without the word "only"*, because Hochiki does make control panels.

Manufacturer head offices, founding dates and product ranges were left out entirely rather than asserted from memory.

**One self-caught defect.** The first draft of the C-TEC paragraph read "If you have previously seen this make written as C-Tec or CTEK, it is the same manufacturer." That reintroduced the exact misspellings PR #19 spent a session purging, and would have produced a false positive for any future session auditing that cleanup. It was replaced, then the replacement was cut too, because it asserted how the brand is printed on a panel fascia, which is not something we can verify.

### Wiring

Links out to `/services/fire-alarms` (x2), `/blog/bs5839-1-and-bs5839-6-explained-2026` and `/contact` (x4). Inbound links from three sibling fire posts: the BS 5839 explainer, the HMO requirements guide and the commercial cost guide. Slug added to `public/llms.txt` and `public/llms-full.txt`. The blog index and `sitemap.xml` derive from `blogPosts`, so both picked it up automatically.

---

## Verification

All of the following were run, and the production checks used real curl against `https://jandlsecurity.co.uk` after the deploy, not a local build.

| Check | Result |
|---|---|
| `npm run build` | Exit 0. Only the pre-existing unused `CheckCircle` import warning in `app/about/page.tsx`. |
| `tsc --noEmit` | Clean. |
| Gent sweep, source | Every remaining occurrence qualified, or a bare tile label / keyword / thanks-list entry with no claim attached. |
| Gent sweep, built HTML | Same, across every generated page. |
| Conditional H2, built HTML | 42 pages keep "What We Install", the 8 fire pages carry "Equipment and Makes". Sum equals the 50 matrix pages. |
| Conditional H2, production | 8 of 8 fire pages and 6 of 6 sampled non-fire pages correct. |
| Headline, production | Correct in both `<title>` and `<h1>`. |
| FRA sentence, production | Zero occurrences on `/services/fire-alarms`. |
| JSON-LD | Valid JSON on the new post (Organization, BlogPosting, BreadcrumbList, FAQPage), `/services/fire-alarms` and `/about`. Confirmed again on production. |
| Both phone numbers | Present on all nine touched pages. |
| Banned model names | Zero, in source and on the live page. |
| Purged spellings | `C-Tech`, `C-Tek`, `Kentech` still absent. |
| Em and en dashes | Zero in the entire diff. |
| Inbound links | Live on all three sibling posts. |
| Sitemap | New post present. |
| HTTP status | 200 on all seven touched or created URLs. |

---

## Flagged, not actioned

1. **`getServiceType()` routing.** `/bs5839-compliance/docklands` falls through to the burglar alarm default and shows Pyronix PIR equipment under a BS 5839-1 heading. **Three more pages have the same defect and were not previously recorded:** `smoke-heat-detectors-south-woodford`, `domestic-smoke-alarm-install-basildon` and `interlinked-detectors-chelmsford`, all fire-domain subjects served burglar alarm equipment. The handoff prompt made this conditional on already editing `getServiceType()` for the H2 work; that was not necessary, so it was left alone rather than expanding scope silently. A one-line fix, but it changes what four live pages say, so it wants its own checkpoint.
2. **`llms.txt` and `llms-full.txt` list 10 of 19 blog posts.** The new post was added to both. The nine older gaps predate this branch and were not closed here.
3. **Blog FAQs are schema-only.** `app/blog/[slug]/page.tsx` passes `post.faqs` to `generateFAQPageSchema` but never renders them. FAQPage markup without visible content is against Google's structured data guidance. Pre-existing across all 19 posts, so a template change, not a content one. The new post carries the same substance in visible prose regardless.
4. **Ten pre-existing em dashes remain in `app/services/[service]/page.tsx`.** Unchanged from the 17 August note. Still a small, low-risk sweep.
5. **The new post has no feature image.** Several existing posts have none either. A Codex image round would fit it.
6. **Next.js 15.5.23 security upgrade.** Untouched, as instructed. Still the largest open item.
