# Jag's answers of 28 September: carbon monoxide alarms, Stratford rename, locks and safes

**Date:** 2026-09-28
**Session:** Claude Code (Opus 5.5), build session, after the maintenance round shipped (`005fb37`).
**Branch:** `content/jag-answers-0928`, cut from `main` at `6ef46c5`.
**Status:** committed locally. **Not pushed, no PR, not merged, not deployed, no email.** The review session checks it before anything ships.
**Maturity:** Pilot.

## Trigger

Jag replied at 2026-09-28 11:47 UTC (thread `1a0e714b643af248`, message `1a0e7d7f1c7c37b2`) to Wendy's "it is live" email and its five questions. Verbatim:

> I will check on the Aico expert installer status and confirm.
> We work on Kidde, Hispec and Fireangel alarms
> Yes we work on CO alarms
> Stratford in London, should be a HMO fire alarm packages.
> Can you confirm all the london areas we target please?
> Let's keep the locks and safes too, but they can be more generic.

Wendy's reply (canonical copy `docs/2026-09-28-jag-answers-reply-client-email.md`) was **sent at 11:52 UTC** (message `1a0e7dc108df097e`, checked in Gmail this session). It commits to three changes and lists the London areas targeted. This branch builds them. Two points are deliberately left alone:
- the Aico Expert Installer wording, until Jag checks his status;
- the Kidde, FireAngel and Hispec "work with" wording, which his "We work on" matches.

## Commits, in order

| Commit | Change |
|---|---|
| `22879dd` | (a) Carbon monoxide alarms named alongside smoke and heat alarms wherever domestic alarm work is described. |
| `2f95305` | (b) Stratford renamed "HMO Fire Alarm Packages", URL unchanged, kept on the domestic BS 5839-6 block. |
| `7ef6f09` | (c) The three lock and safe pages say plainly that J&L offers the work, in general terms. |
| `356984c` | Fixes from the adversarial review (see below): lock-page agent markdown, "same-day" and attendance wording, insurer and quotation wording, the About CO sentence, the llms makes list. |
| (this commit) | This record and the `memory.md` entry. |

Each commit was built on its own and diffed against the previous one. Comparison method: `.next/server/app` HTML with Next's inline scripts, hashed `/_next/static` references and comments stripped, keeping visible markup, head tags and JSON-LD. It is the same method as the maintenance round.

## (a) Carbon monoxide alarms (`22879dd`)

Jag answered "Carbon monoxide alarms: Do you fit them?" with "Yes we work on CO alarms". **The copy uses his verb, "work on"**, and never "fit", "install" or "supply". CO alarms are always a separate sentence or bullet from the Aico, Kidde, FireAngel and Hispec list, so **no make is tied to CO alarms**.

Where it was added:
- **Matrix domestic block** (`app/[service]/[location]/page.tsx`): the equipment paragraph, the first domestic FAQ ("What smoke alarms do you fit …"), and a Service Includes line, "Carbon monoxide alarms, alongside smoke and heat alarms".
- **Fire alarms service page** (`app/services/[service]/page.tsx`): the overview paragraph, the domestic paragraph (which also now says "HMO fire alarm packages", to match (b)), the "who we help" list, and the smoke alarm FAQ.
- **About page**: the equipment paragraph.
- **`llms.txt`**: a new CO bullet. The makes bullet's "Smoke and heat alarms only." now reads "These makes are listed for smoke and heat alarms."
- **`llms-full.txt`**: a CO line under services and under supplier partners. The domestic makes paragraph's "Smoke and heat alarms only" now scopes the makes to smoke and heat alarms and adds that J&L also works on CO alarms, with no make stated.

Not changed:
- **BS 5839-6 wording**, because CO alarms fall under their own standards, not BS 5839-6.
- **The beeping guide's CO safety content**, as instructed.
- **The location pages and `/faqs`.** They mention smoke alarms but are outside the brief's list.

**Pages changed:** exactly 6. They are About, `/services/fire-alarms`, and the 4 domestic-block matrix pages: Basildon, Chelmsford, South Woodford and Stratford.

## (b) Stratford: "HMO Fire Alarm Packages" (`2f95305`)

- `lib/data.ts`: the service name changes from "HMO Alarm Packages" to "HMO Fire Alarm Packages". **The slug `hmo-alarm-packages-stratford` is unchanged**, and `serviceLocationPath()` derives the URL from the slug, so **`/hmo-alarm-packages/stratford` is unchanged**.
- `getServiceType()`: the old rule sent "hmo" names without "fire" to the domestic block. The new name contains "fire" and would have gone to the commercial BS 5839-1 block. HMO names containing "package" now go to the domestic block explicitly. "HMO Fire Alarm Testing" (Basildon) has no "package" and stays on the fire block.
- The name renders through the service field everywhere, so every place that shows it updated together:
  - the H1 and `<title>`, "HMO Fire Alarm Packages Stratford - Professional Installation & Maintenance";
  - the meta description;
  - the breadcrumb and its JSON-LD, "HMO Fire Alarm Packages in Stratford";
  - the section headings, the FAQ heading and the Service Includes heading.
- Verified in the built page: it keeps the **"BS 5839-6 Compliance Notice"**, the domestic FAQs and the domestic Service Includes list.

**Pages changed:** 5.
- Stratford itself.
- Four pages whose **link text shows the name**, as the brief asked to check:
  - `/cctv-upgrades-4k/stratford` (related link);
  - `/locations/stratford` (service list);
  - `/services/burglar-alarms` and `/services/fire-alarms` (area lists). The fire alarms page now lists Stratford because its related-page filter matches "fire"; the burglar alarms page already listed it (see follow-ups).

## (c) Locks and safes (`7ef6f09`)

Jag confirmed J&L offers the work, "but they can be more generic". The three pages are Emergency Locksmith (Romford), BS3621 Locks Fitted (Ilford) and Safe Fitting (Brentwood). They no longer hedge ("we will confirm whether it is work we carry out"); they say plainly that J&L offers locksmith work, BS3621 lock fitting and safe fitting.

**Every service named is one the site already lists** on `/services`: "Emergency lockouts, lock replacements, BS3621 security locks" and "Home and commercial safe installation and maintenance". **There are no prices, response times, brands or procedures.**

Rewritten:
- **Lock content block:**
  - typical projects: lockouts and damaged locks, lock replacements, BS3621 locks to meet an insurer's conditions, and safe fitting alongside an alarm and CCTV;
  - equipment paragraph;
  - insurer note;
  - maintenance note;
  - pricing note: "we do not publish prices … we will give you a quotation before any work starts".
- **Four lock FAQs**, each now opening "Yes". After review, the Emergency Locksmith FAQ reads: "Our locksmith work in {location} includes lockouts and lock replacements. We do not publish response times or call-out charges: call us and describe what has happened."
- **Meta description**, e.g. "Emergency Locksmith in Romford: J&L Security offers locksmith work, BS3621 lock fitting and safe fitting. Call 0204 538 5925 or 0208 220 4770." (141 characters)
- **Hero and coverage paragraph.**
- **Section headings:** "Locks and Safes in {location}", and "The types of lock and safe work we carry out for customers in {location}".
- **Service Includes:** locksmith work including lockouts and lock replacements; BS3621 security locks on external doors; safe fitting for homes and businesses; advice on how locks and safes sit alongside the alarm, CCTV and access control; a written quotation.
- **The H1 is unchanged**, e.g. "Emergency Locksmith Romford". The "Emergency Locksmith" page name stays.

**No response-time claims on lock pages.** Rendering the pages showed three sources of them in the shared template, each now suppressed on lock pages only:
1. **The location FAQs.** Romford's set asks "How quickly can J&L Security respond to a callout in Romford?" and answers 2 to 4 hours; Brentwood's answers 1 to 2 hours. Both are for maintenance-contract customers, but on the Emergency Locksmith and Safe Fitting pages they read as locksmith response times. All three location sets are about alarms (Pyronix, burglar alarm grades, URN), so lock pages now leave them out. This also removes the Pyronix mentions from the Romford locksmith page, an earlier known issue, as a side effect.
2. **The intro's "rapid response times"**, together with its "Every installation is carried out to SSAIB standards" sentence.
3. **Why Choose.** "All installations to SSAIB standards" (SSAIB covers the security systems, not lock work) and "24/7 emergency response for existing customers" are dropped.

Checked in the built HTML of all three pages: no "within N to N hours", no "rapid response", no Pyronix, no "SSAIB standards". Both phone numbers are present.

**Still on the lock pages, and flagged rather than changed:** the site-wide header shows "24/7 Emergency Callouts Available" and a "24/7 Emergency" label on every page, and the root metadata says "24/7 emergency support". This is global layout. It carries no response time, but on the Emergency Locksmith page it could be read as a 24/7 locksmith offer. **An operator decision.**

**Pages changed:** exactly the 3 lock pages.

## Whole branch

Against `main` (the build of the shipped maintenance round), **12 pages change**:
- the 4 domestic-block pages (Stratford among them);
- the 3 lock pages;
- `/about` and `/services/fire-alarms`;
- 3 pages whose only change is link text showing the Stratford name: `/cctv-upgrades-4k/stratford`, `/locations/stratford` and `/services/burglar-alarms`.

`public/llms.txt` and `public/llms-full.txt` also change. No other page changes. `npm run build` exits 0. No added line contains an em dash, and every changed page carries both 0204 538 5925 and 0208 220 4770.

## Adversarial review

A fresh-context general-purpose sub-agent reviewed the three commits. It rebuilt main and each commit, ran `getServiceType()` from main and from the branch over all 50 matrix entries, rendered the pages with `next start`, and checked the agent markdown. **Confirmed correct:**
- routing is unchanged for all 50 entries except Stratford, which stays domestic (the old function would have moved it to fire), and HMO Fire Alarm Testing stays fire;
- exactly 12 pages change (6, 5 and 3 per commit);
- Stratford's H1, title, meta, og, breadcrumb and Service schema are updated, and its URL returns 200;
- no location FAQs, "rapid response", "within N hours", SSAIB, Pyronix, prices or brands remain on the lock pages;
- no "HMO Alarm Packages" or "Smoke and heat alarms only" remains;
- `lib/blog.ts` is untouched;
- both numbers are on every changed page, and no dashes were added.

Findings and dispositions (fixes in `356984c`, rebuilt and re-diffed: only the 3 lock pages and About change against `7ef6f09`, and the branch total stays at 12 pages):

| # | Finding | Disposition |
|---|---|---|
| 1 | **Medium, confirmed.** The markdown served to AI agents for the lock pages (`lib/agent-content.ts`) still said "SSAIB, CHAS, FIA, BAFE accredited" and "24/7 emergency support". I had checked only the HTML. | **Fixed.** Lock pages get their own markdown mirroring the HTML. The shared contact block's "Hours: … plus 24/7 emergency callouts" is site-wide company data and is flagged. |
| 2 | **Medium, confirmed.** "Same-day availability" (Why Choose) and "same-day appointments available" (call to action) on lock pages read as same-day attendance. | **Fixed** on lock pages. The site-wide `twitter:description` ("same-day service, 24/7 emergency support") is flagged. |
| 3 | **Medium, plausible.** The emergency FAQ promised "we will tell you when we can attend" and claimed damaged-lock work. | **Fixed:** it names lockouts and lock replacements only, with no attendance promise. |
| 4 | **Medium, plausible.** The insurer wording promised outcomes and implied rated safes and insurer documentation for lock work. | **Fixed:** "tell us … so that we can take them into account"; documentation is limited to alarm, CCTV and access control systems. |
| 5 | Low. "Comprehensive … solutions" and a remote-monitoring sentence in the generic intro and local paragraph. | **Flagged:** generic template text, known and out of scope. |
| 6 | Low. Quotation commitments ("before any work starts", "Written quotation") read as procedure. | **Fixed:** both removed. Why Choose's generic "Transparent, fixed-price quotes" stays. |
| 7 | Low. Lock repair claimed but not a listed service. | **Fixed** (see 3 and the first typical project). The "Example Projects" heading is generic template text, flagged. |
| 8 | Low. Brentwood's local context says "engineer travel times in this area are minimal". | **Flagged:** location context, not a response time. |
| 9 | Low. A stale comment calls lock pages unconfirmed; the fire block says "HMO alarm packages". | **The comment is fixed.** The fire block phrase describes a product, not the Stratford page name, and changing it would touch 9 fire pages outside this brief, so it is flagged. |
| 10 | Low. The About CO clause shared a sentence with the Kidde, FireAngel and Hispec clause, contrary to commit `22879dd`'s message. | **Fixed:** its own sentence. |
| 11 | Low. `llms-full.txt` listed CO under supplier makes; the llms files do not mention locksmith work. | **The CO line is removed** from the makes list. Locksmith work in the llms files is outside the brief and is flagged. |
| 12 | Low. The Aico Expert Installer claim still stands while Jag checks. | **Left deliberately**, as agreed in Wendy's reply. |
| 13 | Low. Site-wide items: the header and footer "24/7 Emergency"; the quote form's "will call you within 2 hours during business hours" and its lack of a lock or safe option; breadcrumb JSON-LD URLs. | **Flagged.** The breadcrumb issue was verified locally: the JSON-LD `item` is `/emergency-locksmith-romford` (hyphenated), which returns 404, on all 50 matrix pages. |

## Follow-ups (not changed)

1. **Site-wide 24/7 and same-day wording on the lock pages:**
   - the header banner "24/7 Emergency Callouts Available";
   - the footer "24/7 Emergency";
   - the root `twitter:description` "same-day service, 24/7 emergency support";
   - the agent-markdown contact block's "plus 24/7 emergency callouts";
   - the quote form's "we will call you within 2 hours during business hours".

   All are global layout or company data. On the Emergency Locksmith page they can read as a 24/7 or same-day locksmith offer. **An operator decision.**
2. **Breadcrumb JSON-LD on all 50 matrix pages points at hyphenated URLs** (e.g. `/emergency-locksmith-romford`) that return 404; the canonical path is `/emergency-locksmith/romford`. A structured-data defect, predating this branch, worth its own small fix.
3. **The quote form's service dropdown has no lock or safe option**, now that the site says J&L offers the work.
4. **The burglar alarms service page's area list** (`app/services/[service]/page.tsx:506`) matches any matrix service containing "alarm", "smoke", "detector" or "lock". So it lists fire alarm, smoke alarm, HMO Fire Alarm Packages and lock pages under burglar alarms. This predates the branch.
5. **Matrix meta descriptions and generic copy lower-case the service name**, giving "Expert hmo fire alarm packages services in Stratford". The same happens to "cctv" and others. This is generic template text, known and out of scope.
6. **The llms files do not mention locksmith, lock fitting or safe fitting**, although the pages now state them.
7. **Still open with Jag:** the Aico Expert Installer level (he will check). Wendy's reply of 11:52 UTC says "we will make these three changes and confirm when they are live", so a "now live" note is owed once this ships.
8. **New request, not on this branch.** Jag replied at 12:02 UTC (`1a0e7e52f0d16fb0`) asking to add south-west London areas: SW2 Brixton, SW3 and SW10 Chelsea, SW4 Clapham, SW5 Earl's Court, SW6 Fulham, SW7 South Kensington, SW8 Vauxhall and Nine Elms, SW9 Stockwell, SW11 Battersea and SW12 Balham. He asked whether it would be beneficial. Wendy's reply at 12:06 UTC (`1a0e7e88935f1528`) said Fulham covers SW6 and SW10, Battersea covers SW8 and SW11, and Streatham covers SW2. For the rest, it **promised a recommendation** after checking search demand and whether each area merits its own page. That recommendation is owed and needs its own research round.
