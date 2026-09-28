# Maintenance round: Next.js security upgrade, BS 5839-6 definitions, fire "Service Includes"

**Date:** 2026-09-28
**Session:** Claude Code (Opus 5.5), build session. Brief: `docs/2026-09-28-maintenance-round-handoff-prompt.md`.
**Branch:** `fix/next-upgrade-bs5839-service-includes`, cut from `main` at `6578118` (up to date with `origin/main`, no open PRs at start).
**Status:** committed locally. **Not pushed, no PR, not merged, not deployed, no email.** A separate review session checks it before anything ships.
**Maturity:** Pilot.

## Commits, in order

| Commit | Item | What it does |
|---|---|---|
| `6190c1c` | 1 | Upgrades `next` 15.4.10 to 15.5.26 and `eslint-config-next` to ^15.5.26; moves `sharp` to 0.35.5 and `nanoid` to 3.3.19 inside their declared ranges. |
| `ae09cb2` | 1 | Adds a scoped npm override so Next's pinned `postcss` 8.4.31 becomes 8.5.23. Independent of the upgrade; can be dropped on its own. |
| `d657a4b` | 2 | Corrects BS 5839-6 grade and category wording across the site. |
| `7f709ff` | 3 | Fire pages get a fire "Service Includes" list, chosen by page type. |
| `63dd99e` | 3 | The remaining lists follow page type too (four non-fire pages change). Separate so it can be dropped on its own. |
| `69517d0` | close | This record and the `memory.md` updates. |
| `67f3e9d` | 2 | The review session's two decisions on the flagged BS 5839-6 claims (see "Operator decisions" below). |

Verification common to every commit: `npm run build` exits 0, and no added line on the branch contains an em dash (a count of U+2014 in the added lines of `git diff main..HEAD` returns 0). All 115 built pages still carry both 0204 538 5925 and 0208 220 4770.

---

## Item 1: Next.js security upgrade

### What changed

- `next` 15.4.10 to **15.5.26**, the latest 15.x (npm dist-tag `backport`; `latest` is 16.3.6, deliberately not taken). Exact pin kept.
- `eslint-config-next` ^15.4.10 to **^15.5.26**.
- `sharp` 0.34.3 to **0.35.5**, inside Next's declared `^0.34.3 || ^0.35.4`. Needs Node 20.9 or later; the Vercel project runs **Node 22.x** (read from the project settings).
- `nanoid` 3.3.11 to **3.3.19**, inside postcss's declared range.
- `package.json` gains `"overrides": { "next": { "postcss": "8.5.23" } }`.

Lockfile delta, checked package by package: only `next`, `@next/*`, `eslint-config-next`, `sharp` with its `@img/*` platform binaries and helpers (`detect-libc`, `semver`, `@emnapi/runtime`, `@img/colour` replacing `color`), `nanoid`, and `node_modules/next/node_modules/postcss`.

### Audit before and after (`npm audit --omit=dev`)

| Stage | Result |
|---|---|
| `main` (15.4.10) | 4 vulnerabilities: `next` critical (about 27 advisories, including middleware bypass via segment-prefetch routes and route parameter injection, SSRF in rewrites and Server Actions, image optimiser RCE and DoS, cache poisoning), `postcss` high (Next's bundled 8.4.31), `sharp` high (libvips and libheif CVEs), `nanoid` high. |
| After `6190c1c` | 2: `postcss` high (Next's pinned 8.4.31) and `next` moderate, flagged only for depending on it. npm's only suggested fix was `next@16.3.6`, a major version. |
| After `ae09cb2` | **0 vulnerabilities.** |

**The brief's premise needed one correction.** It said the four findings resolve at `next@15.5.26`. They do not on their own. 15.5.26 clears Next's own advisories, but it pins `postcss` to exactly 8.4.31 (vulnerable, fixed from 8.5.23). `sharp` and `nanoid` also stayed on their old versions until they were bumped explicitly within range. Next 16.3.x pins `postcss` to exactly 8.5.23, so the override mirrors the version the Next.js team ships rather than one chosen here. Next loads `postcss` only in build tooling (the webpack CSS blocks, the CSS minimiser and the font loader), over this site's own CSS, so the practical exposure was already negligible. The override exists to take the production audit to zero. **If the review session prefers not to override a framework pin, drop `ae09cb2`:** 15.5.26 stays in place with one build-time `postcss` finding.

The full audit including dev dependencies still reports 9 findings: `tar` critical; `brace-expansion`, `flatted`, `js-yaml`, `minimatch`, `picomatch` and the top-level `postcss` (Tailwind's) high; `ajv` and `@humanfs/node` moderate. All are in the ESLint, TypeScript and Tailwind toolchain, and all are fixable within range. They are out of this item's scope, which was production vulnerabilities, and are listed under follow-ups.

### Before and after comparison of the built output

Method: `.next/server/app` snapshotted after a clean build on 15.4.10, again after each commit, and compared by a normaliser that keeps the visible markup, head tags and JSON-LD. It drops Next's inline flight scripts, hashed `/_next/static/` references and comments. Scripts are in the session scratchpad; the method is reproducible from this description.

- **All 115 prerendered pages are identical** between 15.4.10 and 15.5.26 once framework hashes are stripped (raw HTML differs on all 115, so the comparison is not vacuous). The route table and per-route sizes are identical. The `.meta` files (status and headers) are identical.
- **The sitemap** differs only in `lastmod`, which `app/sitemap.ts` stamps at build time. It is still **112 URLs**.
- **CSS is byte-identical:** the single stylesheet keeps the content hash `4ec827107fcab58c` before the upgrade, after it and after the `postcss` override.
- `routes-manifest.json` headers, rewrites and redirects are identical.
- **The compiled middleware matcher changed, and this is the security fix.** The source matcher in `middleware.ts` is unchanged. The compiled regex now also matches `.rsc` and `.segments/…segment.rsc` suffixes, so middleware runs on segment-prefetch requests; that is the fix for the segment-prefetch bypass advisory. Checked against the running server: `/services/fire-alarms.rsc` and `/index.rsc` return 404 with either `Accept` header, so the markdown rewrite does not fire on them. Page URLs still negotiate markdown as before.
- The three build warnings (two `DEP0205` and one `MODULE_TYPELESS_PACKAGE_JSON` for `tailwind.config.ts`) were already present on 15.4.10. They come from local Node 26.

### Runtime checks with `next start` and `curl` (49 probes, run before and after)

No `.env` file exists locally and `RESEND_API_KEY` was unset, so `/api/quote` could not send email. A valid payload stops at the 503 missing-key branch after validation. **Nothing was submitted to production.**

| Surface | Result on 15.5.26 |
|---|---|
| `middleware.ts` markdown negotiation | `GET` with `Accept: text/markdown` on `/`, `/services/fire-alarms`, `/blog/hmo-…`, `/locations/romford`, `/faqs` returns `text/markdown` with identical bodies. `Accept: text/markdown, text/html` returns HTML. `HEAD` and `POST` are not rewritten, as before. `/robots.txt` and `/api/*` are excluded by the matcher, as before. |
| `/api/quote` | `GET` 405; invalid JSON 400; honeypot 400; submitted too fast 400; missing fields 400; unknown service 400; bad phone 400; valid payload 503 (no key). Bodies identical. |
| `/api/mcp` and `/mcp` | `GET` 405, `OPTIONS` 204, `initialize`, `tools/list` and two `tools/call` requests 200 with identical bodies; malformed JSON 400. |
| `/api/markdown` direct | 200, identical body. |
| `/.well-known/api-catalog` and `/api/wellknown/api-catalog` | 200, identical `application/linkset+json` body. |
| Security headers and the agent-discovery `Link` header | Identical on every page response. |
| Static discovery files | `llms.txt`, `llms-full.txt`, `robots.txt`, `humans.txt`, `manifest.json`, `/.well-known/agent-card.json`, `/.well-known/mcp/server-card.json`, `/.well-known/agent-skills/index.json`: identical bodies and headers. |
| Image optimisation (`sharp`) | `/_next/image` returns AVIF, WebP and JPEG by `Accept` as before, with the same dimensions (640x360, 1080x608). WebP and JPEG output is byte-identical. The AVIF is smaller (8,818 to 7,201 bytes) from the newer libvips encoder. A non-configured width and a remote URL are still rejected with 400. No page uses `next/image`; the endpoint was probed directly. |

Differences, all explained:
1. **`Vary` header names are lower-case** (`rsc, next-router-state-tree, …`). Header field names are case-insensitive (RFC 9110), so caches treat them the same.
2. **The 404 response is now the prerendered not-found page.** It has a fixed `Content-Length`, `x-nextjs-cache: HIT`, and the font preload as a `<link>` in the HTML rather than a `Link` header. 15.4.10 streamed a dynamic render. Visible text, title, meta tags and JSON-LD are identical, and it matches the built `_not-found.html` exactly.
3. **The HTML is one byte shorter per page** and hashes differ, from framework hashes and the build ID. The built-output comparison above shows no content change.
4. **The AVIF re-encode** is described in the table above.

`npm run lint` passes ("No ESLint warnings or errors"). Next 15.5 prints that `next lint` is deprecated and will be removed in Next 16 (follow-up).

### Corrected note: what `middleware.ts` does

`memory.md` said the apex/www and jandlalarms.co.uk redirects run through `middleware.ts`. They do not. `middleware.ts` does markdown content negotiation only: a `GET` with `Accept: text/markdown` (and not `text/html`) is rewritten to `/api/markdown`, and browsers are untouched. The apex/www canonical redirect and the jandlalarms.co.uk redirects are Vercel domain settings, so this upgrade cannot affect them. Corrected in `memory.md`.

---

## Item 2: BS 5839-6 grades and categories

### Sources

BS 5839-6:2019+A1:2020 is paywalled. Every changed definition rests on these published sources, all fetched on 2026-09-28:

1. **Aico (manufacturer)**, "British Standard BS 5839-6:2019 Fire Alarm System Requirements": https://www.aico.co.uk/technical-support/standards-regulations/fire-british-standard-bs-5839-62019/. Grade definitions A, C, D1, D2, F1 and F2. LD1 ("all areas where a fire could start"), LD2 ("escape routes and high risk areas" such as the kitchen and living room), LD3 ("escape routes"), and no alarms in toilets, bathrooms or shower rooms. Table 1: rented homes Grade D1 LD2; existing one- and two-storey HMO Grade D1 LD2; owner-occupied new build Grade D2 LD2; Note D, "Heat detectors should be installed in every kitchen" and a smoke detector in the principal habitable room. Testing: all systems other than Grade A tested at least monthly.
2. **FireAngel (manufacturer)**, "Fire: British Standard BS 5839-6:2019 Latest Revision", last updated 8 April 2026: https://www.fireangel.co.uk/trade/knowledge-hub/british-standard-bs-5839-6-2019/. The 2019 update removed Grades B and E and split D and F into D1/D2 and F1/F2. Grade A equipment conforms to BS EN 54. Full LD1, LD2 and LD3 definitions: LD2 is "all circulation areas that form part of the escape routes … and … all specified rooms or areas that present a high fire risk to occupants, including any kitchen and the principal habitable room". LD3 as a minimum now applies only to owner-occupied single-storey dwellings, flats and maisonettes, and owner-occupied two-storey houses. "Interconnected alarms should also be installed throughout a property, dependent on the specific grade."
3. **Safelincs (fire safety supplier)**, "BS 5839-6 Fire Detection in Domestic Premises", last updated 2026-02-24: https://www.safelincs.co.uk/category/bs-5839-6-fire-detection-in-domestic-premises. Corroborates the removal of B and E in the 2019 revision, the Grade A to C definitions, and Grade D alarms interlinked by wire or radio. Systems installed to earlier editions "do not automatically need to replace or amend their systems". Battery alarms can have wireless interlink.
4. **Scottish Government**, Building Standards Technical Handbook 2022: Domestic, 2.11: https://www.gov.scot/publications/building-standards-technical-handbook-2022-domestic/2-fire/2-11-communication/. Smoke and heat alarms "should be interconnected in accordance with BS 5839: Part 6: 2019".
5. **Building Control NI**, BS 5839-1 and BS 5839-6 training slides: https://www.buildingcontrol-ni.com/assets/pdf/09-03-20_BCNI_Training_BS5839pt1_and_BS5839pt6.pdf. Confirms the five BS 5839-6 categories LD1, LD2, LD3, PD1 and PD2, so the existing "PD1 and PD2" wording stays.

6. **Corroboration only: a third-party repost of BSI's own text**, "BS 5839-6:2019+A1:2020 … copyright: BSI", reproducing Table 1, clause 26 and Table 3: https://pdpla.com/images/easyblog_articles/1776/BS5839-6_extracts.pdf. The adversarial review found it, and it was re-read in this session. It agrees with sources 1 to 3 on every point they cover, and adds the detail behind two review fixes (the 200 square metre condition, and LD1 for new or materially altered small HMOs, both also in Safelincs). **It is not one of the source types the brief allows, and it is a repost of a paywalled standard, so no site wording rests on it alone.** Where it is the only evidence (servicing by grade, Table 3), the wording is flagged, not changed.

Aggregator pages that contradicted these (one lists an "LD4", another lists Grade B as current) were not used.

### What changed (commit `d657a4b`)

**HMO guide (`lib/blog.ts`, `hmo-fire-alarm-requirements-bs5839`)**
- H2 "BS 5839-1: System Categories" becomes **"BS 5839-6: System Categories"**, and "BS 5839-1 defines several categories" becomes BS 5839-6.
- H2 "BS 5839-1: System Grades" becomes **"BS 5839-6: System Grades"**, now stating that the grades are A, C, D1, D2, F1 and F2 and that B and E were removed.
- The opening paragraph said HMOs must meet "BS 5839-6 for domestic-scale HMOs, or BS 5839-1 for larger or higher-risk HMOs". It now says BS 5839-6 covers HMOs, with Grade D1 alarms in smaller HMOs and a panel-controlled Grade A system designed to BS 5839-1 in the communal areas of larger ones (Aico and Safelincs; Table 1 in the extract). The FAQ "What is BS 5839-6 and does it apply to my HMO?" said larger HMOs "fall outside the scope of BS 5839-6" and fall under BS 5839-1. It now gives the same Grade A communal arrangement with separate D1 alarms in each letting, and keeps BS 5839-1 for premises actually outside the scope, such as hostels and boarding houses (Safelincs).
- The intro: "This guide explains what BS 5839-1 requires" becomes BS 5839-6. "HMOs require a system designed to BS 5839-1 rather than BS 5839-6" contradicted the sources and the page's own category section. It now says BS 5839-6, the standard that covers HMOs, recommends a higher level of protection for an HMO than for an owner-occupied home (Table 1: D1 LD2 against D2 LD2 or LD3), and that larger HMOs may need Grade A.
- **LD2** was "everything in LD3, plus detectors in rooms that open onto escape routes". That wording is BS 5839-1's L3 concept. It is now escape routes plus rooms presenting a high fire risk: any kitchen (heat) and the principal habitable room (smoke), plus any room the risk assessment adds. The table row no longer lists bedrooms.
- **LD3** now notes that the current edition accepts it as a minimum only in existing owner-occupied homes of up to two storeys (FireAngel's list, with Aico's LD2 for owner-occupied new builds). For one- and two-storey HMOs with no floor larger than 200 square metres, the standard recommends LD2 in existing premises and LD1 where the HMO is new or materially altered (Aico and Safelincs). The existing sentence about councils accepting LD3 is kept. The wording avoids claiming the 2019 edition *changed* this, because no source shows the 2013 table.
- **Grade A** equipment conforms to BS EN 54. **Grade D** is mains power with a standby battery (sealed in D1, replaceable in D2). Interlinking, by wire or radio, is described as applying where more than one alarm is fitted, not as part of the grade.
- The table's D1 row said "the current default for new installations". It now says BS 5839-6 recommends D1 for most rented homes and for one- and two-storey HMOs (owner-occupied new builds are D2).
- The "mains-wired alarm" FAQ explained Grade F's unsuitability as "not interlinked across the building". Battery alarms can be radio-interlinked, so it now says they have no mains supply and fall below the D1 that BS 5839-6 recommends for HMOs.
- "Grades (A through F)" in the FAQ becomes A, C, D1, D2, F1 and F2.
- "What We Provide" named only BS 5839-1 for HMO design. It now names BS 5839-6 or BS 5839-1 as the property requires.
- The FAQ changes are made in both the article HTML and the `faqs` array that feeds the JSON-LD.

**BS 5839 explainer (`bs5839-1-and-bs5839-6-explained-2026`)**
- "Grades (A, B, C, D, F)" and the table's "Grades A, B, C, D, F (with subgrades …)" become A, C, D1, D2, F1 and F2, with B and E removed in 2019.
- The Grade B bullet ("rarely specified") becomes "Grades B and E: removed in the 2019 edition", noting that older systems need not be replaced automatically.
- Grade A was "using BS 5839-1 components". It is now BS EN 54 equipment, installed largely to BS 5839-1.
- Grade C said it "may include a backup battery" and listed call points. It now has the standby supply as part of the grade, and detectors and sounders with central control equipment. Its closing claim, "Suitable for medium-sized HMOs", is removed: none of the HMO recommendations (Aico, Safelincs, the extract) gives Grade C for an HMO.
- Grade D said "Typically subdivided into D1 and D2". It is now **Grades D1 and D2**, with the difference stated. Grades F1 and F2 likewise.
- LD1 was "all rooms used for sleeping and main circulation areas". It is now escape routes plus all rooms and areas where a fire might start, except bathrooms, shower rooms and toilets.
- LD2 and LD3 now use the standard's escape-route wording, and LD3 notes the limit to existing owner-occupied homes of up to two storeys.

**Beeping guide (`smoke-alarm-beeping-guide-by-make`)**: one sentence. "BS 5839-6 Grade D calls for … interlinking" now says Grades D1 and D2 are mains-powered with a battery backup and the standard recommends interlinking.

**Matrix template (`app/[service]/[location]/page.tsx`)**
- The domestic block's compliance note now gives the full 2019 grade set and the standard's LD1, LD2 and LD3 definitions. It previously said LD2 "adds rooms that open onto escape routes".
- The domestic FAQ said "Grade D systems are interlinked by definition". It now says Grades D1 and D2 describe how the alarms are powered, not whether they are linked, and the standard recommends interconnecting them. The claim is limited to D1 and D2, because Grades A and C are defined by their control equipment.
- The domestic FAQ "usual specification is Grade D" now states D1 sealed and D2 replaceable.
- The fire FAQ "What fire alarm do I need for an HMO?" listed LD2 as including "smoke detectors in bedrooms". It now gives escape routes, a heat detector in every kitchen and a smoke detector in the principal living room.
- The fire block compliance note said "All installations comply with BS 5839-1" and then cited LD2. It now says commercial installations are BS 5839-1, and HMOs normally fall under BS 5839-6 with Categories LD1 to LD3.
- The fire pages' "BS 5839-1 Compliance Notice" (`fireCompliance`) said all installations "comply with BS 5839-1 … include the mandatory 6-monthly servicing … particularly important for HMOs". It sat directly under the corrected note and contradicted it (review finding 1). It now says commercial installations comply with BS 5839-1 and include the 6-monthly servicing it recommends, and that HMOs are designed to BS 5839-6 with the grade and category set by the fire risk assessment and the licensing schedule.
- The Romford HMO FAQ said "BS 5839-1 Grade A panel-controlled systems"; this is now **BS 5839-6 Grade A**.
- The code comment on the domestic block now points at these sources instead of at the blog posts.

**`app/faqs/page.tsx` and `app/services/[service]/page.tsx`**: the same question is answered on `/faqs` and on the fire-alarms service page. Both said the two standards "specify" or "cover different system categories and grades", which reads as if BS 5839-1 had grades. Both now say BS 5839-1 describes a system by category (M, L1 to L5, P1 or P2), and BS 5839-6 by grade (A, C, D1, D2, F1 or F2) and category (LD1 to LD3 for life safety, PD1 or PD2 for property).

**`public/llms-full.txt`**: "HMO Grade A … (BS 5839-1 panel-controlled …)" is now BS 5839-6 Grade A with BS EN 54 equipment. The HMO guide summary no longer calls D1 and D2 "interlinked" by grade. The explainer summary's "grades A, B, C, D, F" is corrected.

**Metadata**: `dateModified` moves to 2026-09-28 on the HMO guide and the explainer. `wordCount` is adjusted by each edit's word delta, measured with tags stripped: HMO guide 3,407 to 3,694, explainer 3,032 to 3,144, beeping guide 3,186 to 3,189. The stored counts use mixed methods, so the delta was applied rather than a fresh count. Reading time is `ceil(wordCount / 250)`, so **the HMO guide's card moves from 14 to 15 min read** wherever it appears.

### Built output comparison (commit `d657a4b` against `ae09cb2`)

38 pages change, and every change was read:
- 3 edited posts;
- `/faqs` and `/services/fire-alarms`;
- 9 fire-block matrix pages: the compliance note, the compliance notice and the HMO FAQ, in the HTML and the FAQ JSON-LD;
- 4 domestic-block matrix pages: the compliance note and two FAQs;
- 2 Romford matrix pages (`burglar-alarm-servicing/romford`, `emergency-locksmith/romford`), which carry the Romford HMO FAQ;
- 18 blog pages (17 posts plus the index), whose **only** change is the HMO guide card's "14 min read" becoming "15 min read" (checked page by page).

### Operator decisions (review session, 2026-09-28), commit `67f3e9d`

The review session approved the branch subject to decisions on flagged items 1 and 2 below. Both are applied:

1. **"Most fire risk assessors will recommend LD2 Grade A as the minimum" is removed.** The paragraph now reads: the grade and category are set by the fire risk assessment and, for a licensable HMO, the council's licensing schedule.
2. **Testing and Grade D servicing are no longer credited to BS 5839-6.** Test-button testing is presented as the manufacturers' advice, telling readers to follow their alarms' instructions. An annual inspection is presented as good practice that HMO licences often require. No test frequency is stated as a BS 5839-6 requirement. Weekly call-point tests and 6-monthly servicing remain, attributed to BS 5839-1 and scoped to panel-controlled Grade A systems.

   Changed in:
   - the HMO guide: Annual Servicing; Servicing Requirements, now scoped to Grade A with one Grade D testing sentence added; the testing FAQ in its HTML and JSON-LD copies;
   - the explainer: the "What BS 5839-6 Requires" maintenance bullet and the servicing paragraph;
   - the domestic block's maintenance note;
   - `llms-full.txt`: the fire alarms bullet and the HMO guide summary.

Rebuilt and diffed against the previous tip. **Exactly 6 pages change:** the two BS 5839 posts and the 4 domestic-block matrix pages, plus `llms-full.txt`. Reading times are unchanged: `wordCount` goes from 3,694 to 3,728 (15 min) and from 3,144 to 3,155 (13 min). No em dash is added.

Still open from item 2 of the flag list: the explainer's "Grade A … typically annually for domestic". It was not part of the decision, and it conflicts with the six-monthly Grade A servicing stated elsewhere on the site.

### Flagged, not changed

These are licensing-practice or servicing claims rather than definitions. No permitted source settles them, so they were left as written for an operator decision. **Items 1 and 2 have since been decided; see above.**

1. **HMO guide, Fire Safety Order section: "most fire risk assessors will recommend LD2 Grade A as the minimum for licensable HMOs".** It contradicts the same page's Grade D1 guidance and Table 1 (D1 LD2 for existing small HMOs). The contradiction predates this branch: the FAQ already said councils accept D1 for smaller HMOs. The corrected LD2 bullet makes it sharper. It is a claim about assessors' practice, which no source here can confirm or refute. **Recommended:** delete it, or narrow it to HMOs outside the small-HMO row.
2. **Servicing and testing by grade (BS 5839-6 Table 3).** The BSI extract says Grade A is tested weekly and serviced at intervals not exceeding six months. Grades C, D and F are tested monthly by the user, and the standard "does not specifically recommend" competent-person servicing for them except in sheltered housing, telecare-enabled systems or where the manufacturer says so. Aico, a permitted source, confirms only the monthly testing. Four live sentences conflict with this:
   - HMO guide FAQ: HMO alarms "must be tested … weekly" and serviced "6-monthly" by an engineer, and for Grade D an annual service "is the practical minimum";
   - HMO guide: "BS 5839-1 (and the maintenance recommendations in BS 5839-6) require regular professional servicing … For Grade D systems, one visit per year";
   - domestic block: "the BS 5839-6 maintenance recommendations and the council licence normally mean an annual inspection";
   - explainer: Grade A "typically annually for domestic";
   - also `llms-full.txt`: "annual minimum for Grade D HMO systems".

   Council licence conditions may well require more than the standard does. **Recommended:** attribute any annual Grade D inspection to the licence rather than to BS 5839-6, and give Grade A as six-monthly, once the operator accepts the extract or checks a licensed copy of the standard.
3. **HMO guide, Grade A "Required for … mandatory licensing HMOs with five or more tenants"**, and the FAQ "with 5 or more occupants under mandatory licensing, councils typically require a Grade A system". Table 1 has no occupant threshold for small HMOs; council practice may differ.
4. **HMO guide: "installed to Category LD2 or LD3 coverage"** (FAQ) and the pricing heading **"Typical 5-Bedroom HMO (Grade D1, Category LD2 or LD3)"**. LD3 is below the standard's HMO recommendation. The heading carries a price range that may rest on LD3 detector counts, so it is not edited.
5. **HMO guide table, D2: "Permitted in some HMOs where the council schedule does not insist on D1".** Table 1 gives D1 for HMOs.
6. **Explainer: "Many home insurance policies reference compliance with BS 5839-6 Grade D Category LD2 or similar."** An unsourced insurance claim.
7. **Fire block typical project: "Category L2 fire alarm for a 6-bedroom HMO … smoke detectors in hallways and bedrooms".** This is a BS 5839-1 category applied to an HMO. Table 1 puts larger HMOs' communal areas at Grade A, LD2, with detectors sited to BS 5839-1 Category L2, so it is not clearly wrong.
8. **HMO guide opening: "Under UK law, HMO landlords must install and maintain a fire alarm system that meets the relevant British Standard."** BS 5839-6 is a code of practice. FireAngel notes it "should not be quoted as if it were a specification". The standard attribution in this sentence was corrected; the legal framing was not, because it is a legal claim, not a definition.

---

## Item 3: fire pages' "Service Includes" list

### The defect

`generateServiceIncludes()` tested the service name for "alarm" before "fire". Every fire page name contains "alarm", so all eight fire pages showed the intruder list (free security survey, PIR detectors, smartphone app control). `/bs5839-compliance/docklands` has neither word, so it showed the generic list. The fire list further down was unreachable.

### What changed

**Commit `7f709ff` (fire).** Fire pages are chosen by `serviceType === 'fire'`. The list renders under **"{service} Service Includes:"**, and seven of the nine fire pages are not installation work by subject, so one list cannot be accurate for all of them:
- **Installation and commissioning pages** (Fire Alarm Installation (Commercial) Brentwood; Fire Alarm Commissioning Canary Wharf) get the **existing fire list unchanged**. It names no makes, so it implies nothing about installing Gent, and it makes no BAFE claim.
- **Servicing, maintenance, annual service, fault finding and HMO testing pages** (Chelmsford, Harlow x2, City of London, Basildon) get a service-visit list. Each item restates copy already on those pages:
  - "Testing of every detector, manual call point and sounder" (servicing FAQs);
  - "Backup battery and power supply checks" (servicing FAQ, fire maintenance note);
  - "Fault finding and repair on conventional, addressable and bi-wire panels" (fire equipment block: "install, service, repair and take over"; "conventional, addressable and bi-wire panels");
  - "Service certificate issued and fire alarm log book updated" (servicing FAQ);
  - "Takeover of systems installed by other contractors" (takeover FAQ);
  - "6-monthly service contracts for panel systems under BS 5839-1". This is limited to panel systems because six-monthly servicing is right for BS 5839-1 and BS 5839-6 Grade A, but not for Grade D, which matters on the HMO testing page.
  - "Emergency lighting checked where it is part of the system" (servicing FAQ);
  - "24/7 monitoring for commercial properties through an approved Alarm Receiving Centre". The monitoring FAQ limits monitoring to commercial properties.
  - "Cabling inspected for damage" (servicing FAQ).
- **The monitoring page** (Fire Alarm Monitoring, Greenwich) gets a list from the monitoring FAQ and the fire pricing note:
  - 24/7 monitoring for commercial properties through an approved Alarm Receiving Centre;
  - nominated keyholders contacted when the system activates;
  - fire brigade attendance requested where needed;
  - particularly suited to unoccupied commercial premises;
  - 6-monthly service contracts available for the monitored system.
- **The audit page** (BS 5839-1 Compliance Audits, Docklands) gets an inspection list: inspection of the existing system and its condition, testing of every device, battery and power checks, cabling inspection, log book updated. There are no repairs, takeover or monitoring. **Nothing on that page defines what an audit involves**, so this is the conservative reading of the site's inspection copy. The operator should confirm what J&L's audit covers.
- No list names a make or mentions BAFE. A draft item, "Free survey of your existing system", was dropped before commit because nothing on the fire pages states it.
- The unreachable fire branch is removed.

**Commit `63dd99e` (remaining types).** The intruder, CCTV and access lists are chosen by `serviceType` too, as the brief asked ("each page gets the list for its actual type"). This moves four non-fire pages, and is kept separate so the review session can take or drop it:
- Video Intercom Installation (Buckhurst Hill), Keypad/Fob Systems (Barnet) and Maglock Installation (Harrow): from the generic list to the access control list.
- Police Response Eligibility (Redbridge): from the generic list to the intruder alarm list.

Lighting pages have no list of their own and keep the generic one. A mapping of all 50 matrix entries was checked before the change, and these were the only differences it predicted.

### Proof that only the intended pages changed

- `7f709ff` against `d657a4b`: **exactly the 9 fire pages change**. Each is identical to the previous build once the Service Includes block is set aside.
- `63dd99e` against `7f709ff`: **exactly the 4 predicted pages change**, identical outside the Service Includes block.
- Every other matrix page, including all burglar, CCTV, access, lighting, domestic and lock pages, is unchanged.

### Across the whole branch

Against the original 15.4.10 build, 42 pages change in total, all from items 2 and 3: 21 blog pages, `/faqs`, `/services/fire-alarms`, 13 fire and domestic matrix pages, 2 Romford pages and the 4 pages above. The upgrade itself changes no rendered content. The final build was probed again with `next start`: every status and header matches the post-upgrade build, except `X-Markdown-Tokens` on the HMO guide's markdown, which follows from its new content. The sitemap is still 112 URLs.

---

## Adversarial review

A fresh-context general-purpose sub-agent reviewed the whole diff. It re-fetched the cited sources, rendered all 50 matrix pages, ran `npm ci` from the committed lockfile under npm 11 and npm 10 (the override is honoured: `postcss` 8.5.23 under `next`), and built and started the site locally. It sent nothing to `/api/quote`. It found no Next.js regression and no misrouted page. Its findings, and what was done:

| # | Finding | Severity | Disposition |
|---|---|---|---|
| 1 | The fire pages' "BS 5839-1 Compliance Notice" still said all installations, HMOs included, are BS 5839-1, directly under the corrected note. | Medium, confirmed | **Fixed** in item 2. |
| 2 | The service-visit list overclaimed on the Monitoring and Audit pages; monitoring was unqualified on the HMO page, and "6-monthly" is right only for panel systems. | Medium, confirmed | **Fixed** in item 3: separate monitoring and audit lists, and both qualifiers. |
| 3 | The HMO guide's opener and scope FAQ still sent larger HMOs to BS 5839-1. | Medium, confirmed | **Fixed** in item 2 (Grade A communal, designed to BS 5839-1, still BS 5839-6). |
| 4 | "Most fire risk assessors will recommend LD2 Grade A" contradicts the corrected LD2 bullet. | Medium, confirmed | **Flagged** (item 1 above): a practice claim needing an operator decision. |
| 5 | The small-HMO recommendation dropped the 200 square metre condition, and LD1 for new or materially altered HMOs. | Low, confirmed | **Fixed** (Safelincs and Aico). |
| 6 | "LD3 only for owner-occupied homes" was broader than Table 1. | Low, confirmed | **Fixed**: existing owner-occupied homes of up to two storeys. |
| 7 | Grade C "Suitable for medium-sized HMOs" survived in a rewritten bullet. | Low, confirmed | **Fixed**: removed. |
| 8 | "The BS 5839-6 grades describe how alarms are powered" over-generalised (A and C are defined by control equipment). | Low, confirmed | **Fixed**: limited to D1 and D2. |
| 9 | The code comment and commit message cite this record, which was not yet committed. | Low, confirmed | **Resolved** by committing this record on the branch. |
| 10 | The `postcss` override clears only the production audit; Tailwind's top-level `postcss` 8.5.6 runs at build with the same advisories. | Low, confirmed | **Recorded.** It was already listed under dev-dependency follow-ups; the build-time exposure is unchanged by this branch. |
| 11 | `next lint` deprecated. | Low, confirmed | **Follow-up** (already listed). |
| P | `/faqs` omitted PD1 and PD2, and the fire-alarms service page still answered the same question with the old wording. | Low, plausible | **Fixed** on both pages (PD confirmed by Building Control NI). |
| P | The override will keep forcing 8.5.23 after future Next bumps. | Low, plausible | **Follow-up**: remove it when Next ships a fixed pin. |
| P | "Since the 2019 edition" rests on FireAngel's word "now". | Low, plausible | **Fixed**: the LD3 wording now says "the current edition" and makes no claim about the change. |

The fixes were folded into the item 2 and item 3 commits, so each item remains one reviewable unit. Each amended commit was rebuilt and re-diffed. Item 2 now changes 38 pages (adding `/services/fire-alarms`); `7f709ff` still changes exactly the 9 fire pages and `63dd99e` exactly the 4 others, each only in its Service Includes block.

## Follow-ups (not changed in this round)

1. **Dev-dependency audit:** 9 findings in the toolchain (`tar` critical; `brace-expansion`, `flatted`, `js-yaml`, `minimatch`, `picomatch`, Tailwind's `postcss` high; `ajv`, `@humanfs/node` moderate), all fixable within range with `npm audit fix`. A small separate chore.
2. **`next lint` is deprecated** in 15.5 and removed in 16. Migrate to the ESLint CLI (`npx @next/codemod@canary next-lint-to-eslint-cli .`) before any move to Next 16.
3. **Next 16:** 15.5.26 is a backport line. The major upgrade needs its own session.
4. **The fire matrix pages' compliance notice** (`fireCompliance`) still reads "All our fire alarm installations in {location} comply with BS 5839-1 … particularly important for HMOs". HMOs normally fall under BS 5839-6, and "mandatory 6-monthly servicing" overstates a code of practice. It carries no grade or category, so it was left out of item 2.
5. **Romford HMO FAQ:** "BAFE certified and an FIA member, which is the standard required by most local authority HMO licence schedules", and "All installations include the BAFE handover certificate … and 6-monthly servicing", including for Grade D1 systems. Both are unsourced.
6. **An em dash in user-facing output:** the site's default title and tagline has one between "Alarms, CCTV & Fire Protection" and "Installed & Maintained Across Essex & Greater London". It shows in the 404 page title and in the markdown and MCP company responses; `app/api/mcp/route.ts` also joins the company name and tagline with an em dash. It predates this round.
7. The eight flagged BS 5839-6 practice and servicing claims above, for an operator decision (items 1 and 2 before shipping).
8. **The override will keep forcing `postcss` 8.5.23** under `next` after future 15.x bumps. Remove it when Next ships a fixed pin, or it could become a downgrade.
9. **The "BAFE Certified (Fire Alarms)" badge** appears on the Monitoring and Compliance Audits pages, which could suggest BAFE covers those services. (Seen by the review; predates this round.)
10. **The Canary Wharf matrix page renders empty location data:** "throughout Canary Wharf () and nearby areas including ." (Seen by the review; predates this round.)
11. Still outstanding from earlier rounds and untouched here: the Romford location FAQs mentioning Pyronix; generic template text on matrix pages; whether J&L offers lock and safe work (with the client); llms files not listing every post; blog FAQs emitting schema without rendering; Resend and Zapier housekeeping.

## Deployment notes for the review session

- `main` is untouched. Nothing is pushed.
- The Vercel project uses Node 22.x, which `sharp` 0.35.5 supports.
- The committed lockfile already reflects the `postcss` override, so `npm ci` on Vercel installs `postcss` 8.5.23 under `next`.
- After deploying, re-run the same surface checks on the preview URL: markdown negotiation, the four API routes (**validation paths only on production**), headers, `/_next/image`, the discovery files, and the sitemap at 112 URLs.
