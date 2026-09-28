# Domestic makes, eight-page fix, FAQ search and beeping guide: implementation record

**Date:** 2026-09-28
**Branch:** `feat/domestic-makes-and-page-fixes`, cut from local `main` at `9ddb3be` (two docs commits ahead of `origin/main` at the time; nothing else differed).
**Built by:** Claude Code (Fable 5.1) build session, from `docs/2026-09-28-domestic-makes-handoff-prompt.md`.
**Status:** SHIPPED. Approved by the review session (including the beeping guide), PR [AiC007/jandl-security-site2cc#23](https://github.com/AiC007/jandl-security-site2cc/pull/23) squash-merged to `main` as `bbccb59` on 2026-09-28, production deployment `dpl_8iKrr2QMpW17P9UeGhxB4i86rAuM` READY at 10:45 UTC, verified live with curl (see "Live verification" below). Branch deleted, no open PRs.
**Maturity:** Pilot.
**What this delivers:** every commitment in the client email sent 2026-09-28 08:45 UTC (`docs/2026-09-28-domestic-makes-client-email.md`), except the parts that depend on Jag's answers, which are built to the defaults below.

## Jag's reply

Checked at the start of the session and again before closing (thread `1a0e714b643af248`): the thread still holds only Jag's message of 08:13 UTC and our reply of 08:45 UTC. **Jag has not answered.** Every default in the next section is therefore live in the branch and must be revisited when he does. No Gmail drafts were created and nothing was sent.

## Defaults and assumptions relied on

| # | Default | Where it lands | What changes when Jag answers |
|---|---|---|---|
| 1 | Kidde, FireAngel and Hispec are described with the site's neutral verb "work with" (like-for-like replacement, assessment and servicing of existing alarms). | Fire-alarms overview and makes FAQ, about page caption, domestic matrix block, llms.txt, llms-full.txt | If he fits them new, change "work with" to "fit" in those places. |
| 2 | Aico is described as fitted, because Jag wrote that J&L is an Aico Expert Installer. | Same places | None unless he says otherwise. |
| 3 | Smoke and heat alarms only. No carbon monoxide alarm fitting claim anywhere. The beeping guide discusses CO alarms only as safety advice and says "we do not attend a suspected carbon monoxide leak". | Everywhere the makes appear; beeping guide | If he confirms CO alarms, add them to the makes lines and the domestic block. |
| 4 | Aico Expert Installer is stated as Aico's training scheme, not an accreditation. No directory level, badge, logo or directory link. | Fire-alarms page (overview, new FAQ "Are you an Aico Expert Installer?", one keyword), about page prose, llms.txt, llms-full.txt | When he names the level and confirms the listing, add the level wording and, if he supplies it, the badge. |
| 5 | HMO Alarm Packages in Stratford is a fire-domain page. It is routed to the **domestic BS 5839-6 block**, not the commercial BS 5839-1 block: the review found the commercial block made the page assert "All our fire alarm installations comply with BS 5839-1" for an HMO package, which contradicts the fire-alarms page ("HMO fire alarm systems to BS 5839-6") and the HMO guide. The brief said "treated as fire", which was written before the domestic block existed; the domestic block covers HMO packages and Grade A explicitly. This is the one place the branch departs from the brief's literal wording, in its own commit, so the review session can revert it. | Unit A routing, fixed in the review-fixes commit | If he says it was meant to be intruder alarms, remove the `hmo` clause from the domestic rule in `getServiceType()`. |
| 6 | The beeping guide is built and committed last, self-contained. | Unit D commit `4f0482c`, plus the guide's source links and image in the review-fixes commit | If he says no, the review session drops the unit D commit and the guide, image and llms lines from the review-fixes commit. |
| 7 | The three lock and safe pages get a conservative block and stay live. | Unit A | If he does not offer lock or safe work at all, the operator decides on removal with redirects. Not done here. |
| 8 | The Expert Installer statement is mirrored in `llms.txt` and `llms-full.txt` as well as the two pages the brief named, because those files describe the site to AI assistants. | Unit C | Review session may hold this back if it reads the brief more narrowly. |
| 9 | Test frequency in the beeping guide: manufacturers say at least monthly, Essex County Fire and Rescue Service (news page) and other UK fire services say weekly. Both are stated with attribution. | Unit D | None. |

## What shipped, per unit and commit

### `053dc84` docs: Codex image prompt

`docs/2026-09-28-beeping-guide-codex-image-prompt.md`. One image, `public/images/2026-09/smoke-alarm-beeping-guide.webp`, same style rules, palette, never-include list, format and self-check as the July 2026 prompt. Pasted into the chat for the operator to hand to Codex. **Codex produced the file during the session** (the operator confirmed, and the file was checked: RIFF WebP, VP8, 1600 x 900, 41 KB; viewed: a homeowner on a landing looking up at a ceiling smoke alarm with an orange indicator light and sound marks, no text, no flames, matches the July set). It is wired into the post's `image` field in the review-fixes commit, so the slug page emits the Open Graph image and the BlogPosting `image` automatically.

### `edd6c55` Unit A: eight matrix pages routed to the right block

`app/[service]/[location]/page.tsx`.

- `getServiceType()` gains two rules ahead of the existing ones and one widened rule: `locksmith`, `bs3621` or `safe fitting` route to a new `locks` type; `smoke` or `interlinked` route to a new `domestic` type; `bs 5839` and `hmo` join `fire`. "Maglock Installation" stays with access control because the lock rule matches explicit terms rather than the bare word "lock".
- New `domestic` detail block (BS 5839-6): grades and categories described as the HMO guide and the BS 5839 explainer describe them (Grade A panel, Grade D mains interlinked with battery backup, Grade F battery-only; LD3 escape routes, LD2 adds rooms opening onto them and higher-risk rooms, LD1 every room except bathrooms and toilets); the domestic makes with the defaults above; the only price is the existing "from GBP 120 plus VAT per year" residential and small HMO servicing figure. Installation is "quoted after a free survey". Five domestic FAQs. The compliance notice on these pages is titled "BS 5839-6 Compliance Notice" (new `fireComplianceTitle` field; fire pages keep "BS 5839-1 Compliance Notice" verbatim). The equipment H2 is "Equipment and Makes in {location}", shared with the fire pages.
- New `locks` detail block: restates only what `app/services/page.tsx` already lists (emergency lockouts, lock replacements, BS3621 security locks, home and commercial safe installation and maintenance) as things "discussed and quoted as part of a wider security survey", plus "tell us what you need and we will confirm whether it is work we carry out". No prices, no response times, no procedures. Four FAQs in the same register. These pages also get an honest meta description instead of the "Expert emergency locksmith services" template.
- `generateServiceIncludes()` now takes the service type and returns a domestic list and a locks list for the new types. Fire pages keep hitting the pre-existing "alarm" rule first, deliberately, so their output does not change (see follow-ups).
- Docklands (BS 5839-1 Compliance Audits) renders the existing commercial `fire` block. Stratford (HMO Alarm Packages) renders the domestic block after the review (default 5).

### `1893d67` Unit A2: FAQ search

`components/FAQSearch.tsx` (new, 118 lines, client component) and `app/faqs/page.tsx`. The dead hero input is removed. The component renders a labelled `type="search"` input above the categories, filters on question and answer text as you type, shows "Showing N of 28 questions" in an `aria-live` status, keeps the category structure, and shows a no-results panel with both phone numbers and a clear button. The category data is passed as plain JSON; the page still builds the FAQPage JSON-LD from the same array on the server. Built HTML verified: all 28 schema questions present in the HTML, label present, old input gone.

### `e377e08` Unit B: the four makes

Domestic group added to: fire-alarms overview (new paragraph) and makes FAQ (`app/services/[service]/page.tsx`); fire-alarms `metaOverrides` description (now 152 characters) and five new keywords; about page grid (four new tiles), prose and caption (Gent's sentence untouched, a new sentence after it); `public/llms.txt`, `public/llms-full.txt` (makes paragraph and Supplier Partners list) and `public/humans.txt`. Spellings: Aico, Kidde, FireAngel, Hispec. Word-bounded case-insensitive grep for `aico|kidde|fire ?-?angel|hi ?-?spec` over `app`, `lib`, `public` and `components` finds only those four spellings, lowercase keyword strings (the site's existing keyword convention) and manufacturer URLs. No two-word or hyphenated variant exists anywhere, including in the beeping guide's keywords, by design.

### `f085615` Unit C: Aico Expert Installer

Stated on the fire-alarms page (overview sentence, new FAQ, keyword) and the about page prose, mirrored in the two llms files. Described as "Aico's own training scheme for installers", "a training scheme rather than an accreditation", and explicitly "alongside our SSAIB, BAFE, FIA and CHAS accreditations rather than among them". Grep confirms no "approved", "accredited", "certified", tier name, badge or directory link near it.

### `4f0482c` Unit D: the beeping guide

`lib/blog.ts`, slug `smoke-alarm-beeping-guide-by-make`, title "Why Is My Smoke Alarm Beeping? A Guide by Make". 3,186 words measured from the rendered body (3,145 before the review added source links), six FAQs, same object shape as the other posts, `image` set to the Codex file (see above). Sections: beep versus alarm versus CO alarm; what the common patterns generally mean; the householder checks the manufacturers themselves suggest; when to call J&L (mains-wired, interlinked, HMO, unknown make); make-by-make for Aico, Kidde, FireAngel and Hispec, each summarising and linking the manufacturer's own support page; mains smoke alarm beeping; carbon monoxide alarms as an emergency (NHS and London Fire Brigade advice, 0800 111 999); why no model-specific instructions; testing and replacement. Links to `/services/fire-alarms` and `/contact`. Inbound links added from the HMO guide, the BS 5839 explainer and the panel fault guide. Listed in `llms.txt` and `llms-full.txt`; the blog index, sitemap and MCP route read the posts array.

**Sources for every safety statement** (fetched by a research sub-agent on 2026-09-28 and quoted with attribution in the post): Aico homeowner FAQs and product FAQs; Kidde UK smoke alarm and CO alarm FAQs and its maintaining-smoke-alarms article; FireAngel's two smoke alarm beeping pages and its CO alarm page; Hispec's homeowner FAQs and troubleshooting guide; NHS carbon monoxide poisoning page; London Fire Brigade carbon monoxide safety page; Essex County Fire and Rescue Service smoke alarm pages. Nothing in the post is from memory. Aico's series-specific chirp counts (one, two, three, four chirps with yellow flashes) are reported as Aico's description of "its current series", not as an instruction.

## Verification evidence (all from this session)

| Check | Result |
|---|---|
| `npm run build` | Exit 0, three times: baseline on `main`, after unit A, after all units. |
| Eight pages carry the right content | Built HTML after unit A: Basildon, Chelmsford and South Woodford contain 0 "Pyronix", 30 "BS 5839-6", the "BS 5839-6 Compliance Notice" and the domestic makes; Docklands and Stratford contain 0 "Pyronix" and the commercial fire block (Stratford moved to the domestic block after review, re-verified in the final build); Ilford and Brentwood lock pages contain 0 "Pyronix" and the locks block. Romford still contains 8 "Pyronix": these are in the pre-existing Romford location FAQs, which every Romford page carries and which are about Romford, not the locksmith block. |
| Unaffected matrix pages byte-identical | Built HTML of all 114 pages compared before and after unit A with build id, chunk paths, RSC flight payload and the Service schema `validFrom` date stripped: **exactly the eight pages differ**, the other 106 are identical. After all units the changed set is the eight pages plus about, blog index, faqs, fire-alarms, the three sibling posts, and the new post. |
| JSON-LD parses | Every touched page's `application/ld+json` blocks parse; FAQPage question counts as expected (domestic 5, Chelmsford 9 with location FAQs, locks 4 plus location FAQs). |
| Em dashes | Zero U+2014 in added lines of `git diff main...HEAD`. The 10 pre-existing em dashes in `app/services/[service]/page.tsx` remain (known since August). |
| Both phone numbers | Present on every touched page in the built HTML (counts 13 to 29 per page). |
| Brand spelling grep | Clean, as described under unit B. |
| Sitemap | 111 URLs before, 112 after; the one addition is the new post. |
| Fire-alarms meta description | 152 characters. |
| TypeScript | `npx tsc --noEmit` clean after every unit. |
| Interactive FAQ filter | **Not verified in a browser.** A `next start` server was started on port 3210 for the built-in browser, but navigation to it was refused by the session's permission classifier, so the filter was not clicked. Static evidence only: the component compiles, the server HTML carries all 28 questions and the label. The review session should try it on the Vercel preview. |
| Adversarial review | See the next section. |

## Adversarial review (fresh-context sub-agent, whole diff versus the email, the brief and production)

The reviewer read the email, the research, the brief and the full diff, curled production for all eight pages (all still wrong live: 8 "Pyronix" each, Romford 77 "lighting"), rebuilt `main` in the scratchpad and diffed every built page, and fetched every URL the guide cites. It **confirmed both build-session claims**: exactly the eight matrix pages differ after unit A (99 of 115 built pages identical, the other 16 are the expected touched pages plus the new post), and the sitemap went from 111 to 112 with the new post as the only addition. Findings and what was done:

1. **Guide safety statements attributed but not linked (CONFIRMED, fixed).** FireAngel's CO page, Kidde's CO end-of-life FAQ and maintenance article, and the two Essex Fire pages were cited without URLs. The reviewer also doubted two statements (Aico's four-chirp dust signal, FireAngel's three-monthly cleaning). All six were re-fetched directly by the build session and are verbatim on the sources; links were added for every one, and the two Essex Fire pages are now linked. One attribution was corrected: Essex Fire's own smoke alarm page says test monthly, so "weekly" is now attributed to "some UK fire and rescue services", not to Essex.
2. **Stratford asserting BS 5839-1 for an HMO page (CONFIRMED, fixed).** See default 5 above: routed to the domestic block. The now-unreachable fire-includes branch in `generateServiceIncludes()` was removed.
3. **Lock pages asserting and hedging on the same page (CONFIRMED, fixed).** The template H1 (now just "{service} {location}", so the title reads "Emergency Locksmith Romford | J&L Security"), hero, coverage paragraph, equipment heading ("Lock and Safe Requirements in {location}") and "work we carry out" line on the three lock pages now say J&L is a security systems installer and invite the caller to ask, consistent with the block. Their meta description is 149 characters at the longest. The `Service` JSON-LD is still named after the page (for example "Emergency Locksmith"), as on every matrix page.
4. **"our engineers have completed" Aico's scheme (SUSPECTED, fixed):** now "J&L Security has completed", which is what Jag wrote.
5. **Domestic includes bullet flattened fit versus work-with (SUSPECTED, fixed):** now "Aico alarms fitted; Kidde, FireAngel and Hispec alarms replaced and assessed".
6. **Grade A servicing wording (SUSPECTED, fixed):** now "Panel-controlled Grade A systems in HMOs are typically serviced every 6 months", matching the HMO guide.
7. **`llms-full.txt` "Last updated" (housekeeping, fixed):** 28 September 2026.

Everything else the reviewer checked was clean: FAQ search markup and hydration, brand spellings, Expert Installer wording, Gent wording, meta length, no CO fitting claim, guide word count and shape, no de-powering advice, no model procedures, the NHS and London Fire Brigade CO advice, em dashes, phones, JSON-LD, Next.js version, no removed pages.

## Waiting on Jag

1. Question 1: Aico directory level and listing. Until then: no level, no badge, no directory link.
2. Question 2: install versus service for Kidde, FireAngel and Hispec; heat and CO alarms. Until then: "work with", smoke and heat only.
3. Whether HMO Alarm Packages (Stratford) was meant to be intruder alarms.
4. Whether he wants the beeping guide (commit `4f0482c`).
5. Not asked in the email, raised by this build: **does J&L offer emergency locksmith, BS3621 lock fitting and safe fitting at all?** The three pages now say only what the services page already says, and invite the caller to ask. If the answer is no, the operator decides on removal with redirects.

## Follow-ups noticed, not changed

1. **Fire pages' "Service Includes" list is the intruder list.** `generateServiceIncludes()` tests `alarm` before `fire`, so all eight pre-existing fire pages (Brentwood, Chelmsford, Harlow x2, Basildon HMO testing, Canary Wharf, City, Greenwich) show "PIR detectors, door/window contacts, keypads" and "Insurance-approved systems". Left as-is so their output did not change in this round. One-line fix: test the service type first.
2. **Romford location FAQs on the locksmith page** mention Pyronix and BS 5839-6; they are the location enrichment shared by all Romford pages. Fine for a burglar or fire page, odd on a locksmith page. Only matters if the page stays.
3. **Template text on every matrix page** ("Every installation is carried out to SSAIB standards", "All installations to SSAIB standards", the H1 "Professional Installation & Maintenance") is generic and pre-existing; on the lock and domestic pages it reads loosely. Not touched.
4. The `Service` JSON-LD on the three lock pages is still named after the page ("Emergency Locksmith" and so on), as it is on every matrix page; if Jag does not offer the work, the pages go rather than the schema.
5. The FAQs page hero no longer has a search box; the search moved to the top of the questions section so that one component owns both the input and the list. If the operator wants it back in the hero, the component would need to be split with shared state.
6. Aico's "Why is my alarm beeping" video page and Essex Fire's main smoke alarm page carry `noindex`; the post links Aico's FAQ pages and Essex Fire's news pages instead, but those could move.
7. Kidde UK's pages are sparse; the post says so ("brief and general") rather than borrowing from the US site.

## Commits on the branch

1. `053dc84` docs: Codex image prompt for the smoke alarm beeping guide hero
2. `edd6c55` Route eight matrix pages to the right content block (unit A)
3. `1893d67` Make the FAQs search box filter the questions as you type (unit A2)
4. `e377e08` Add the four domestic smoke alarm makes: Aico, Kidde, FireAngel, Hispec (unit B)
5. `f085615` State that J&L Security is an Aico Expert Installer (unit C)
6. `4f0482c` Add the smoke alarm beeping guide by make (unit D)
7. Review fixes: guide source links, Stratford to the domestic block, neutral lock-page template text, Expert Installer wording, domestic includes bullet, Grade A wording, llms-full date, and the Codex image wired into the guide
8. Docs: this record and the memory.md entry

## Shipping (2026-09-28, after the review session's approval)

1. Local `main` (two docs commits ahead) pushed to `origin/main` first, then the branch.
2. PR #23 opened with `gh`: unit summaries, the defaults in use, and what is waiting on Jag. Vercel preview `dpl_2RTaSRKGs4FFi7d75niG4FXJxL6k` built READY in 46 seconds; PR checks passing. The preview URL is behind Vercel deployment protection (302 to sign-in), so it could not be curled. The review session had already exercised the FAQ search interactively on a local production build.
3. Squash-merged as `bbccb59` ("Domestic makes, eight-page fix, FAQ search and beeping guide (#23)"), remote and local branches deleted, stale `origin/fix/enquiry-form-delivery` ref pruned. No open PRs.
4. Production deployment `dpl_8iKrr2QMpW17P9UeGhxB4i86rAuM` (commit `bbccb59`) READY at 10:45:40 UTC, aliased to jandlsecurity.co.uk, www, and both jandlalarms.co.uk hosts.

## Live verification (curl against https://jandlsecurity.co.uk, 2026-09-28 after deploy)

| Check | Result |
|---|---|
| Eight corrected pages | All HTTP 200. Basildon, Chelmsford, South Woodford and Stratford: 0 "Pyronix", 30 "BS 5839-6", "BS 5839-6 Compliance Notice" present. Docklands: 0 "Pyronix", commercial fire block. Romford: "emergency lighting" 2 (nav and footer only; 77 before the fix), "Lock and Safe Requirements" heading present; the 8 "Pyronix" are the Romford location FAQs shared by every Romford page. Ilford and Brentwood: 0 "Pyronix", lock block present. |
| /faqs | 200. Labelled `type="search"` input present. 28 questions in the FAQPage JSON-LD and all 28 in the HTML. |
| /blog/smoke-alarm-beeping-guide-by-make | 200. Hero `<img>` present; the image itself returns 200, `image/webp`, 41,530 bytes. 0800 111 999 present 10 times. |
| /sitemap.xml | 112 `<loc>` entries; the new guide is listed once. |
| /services/fire-alarms and /about | 200. "Kidde, FireAngel and Hispec" (10 and 4 occurrences), "Aico Expert Installer" (12 and 2), Gent's "do not install new Gent" wording intact on the fire-alarms page. |
| /llms.txt | Domestic makes line and the guide entry present. |
| Both phone numbers | Present on every page checked (0204 538 5925: 15 to 29 per page; 0208 220 4770: 13 to 25). |

## Search Console (2026-09-28 10:46 UTC, sc-domain:jandlsecurity.co.uk)

- Sitemap `https://jandlsecurity.co.uk/sitemap.xml` resubmitted via the API: "Pending processing". Before resubmission GSC showed it last downloaded 2026-09-23 15:16, Valid, 111 URLs, 0 errors, 0 warnings.
- URL Inspection of the new guide: verdict NEUTRAL, coverage "URL is unknown to Google", never crawled. Expected for a page minutes old. **Requesting indexing cannot be done through the API; the operator requests it by hand in the Search Console interface** (URL Inspection, "Request indexing"). The same applies to the three posts that were unindexed at the August review.

## Client email

Canonical copy for the "it is live" update: `docs/2026-09-28-domestic-makes-live-client-email.md` and `.html` (AIC branded format, 20 Wenlock Road footer). It states what is live, the defaults in use, and asks only the five open questions (Aico level, Kidde/FireAngel/Hispec new or maintained, CO alarms, Stratford, lock and safe work). **No Gmail draft exists.** The review session reviews the copy and creates the draft once.

## Boundaries respected

No Gmail drafts, nothing sent. Next.js left at 15.4.10. No page deleted or redirected. `.claude/launch.json` was temporarily given a `next start` entry for the browser check and reverted.
