# Implementation Summary: J&L Security Client Amendments, 5 May 2026

**Date completed:** 6 May 2026
**Branch:** `client-amendments-2026-05-06` (deleted after merge)
**PR:** [AiC007/jandl-security-site2cc#2](https://github.com/AiC007/jandl-security-site2cc/pull/2)
**Merge commit on main:** `0d6ae32d74cabb7a87992cdbb1796ef52b8bc799`
**Source of truth:** `docs/2026-05-06-client-amendments-content-pack.md`
**Operator:** Dee
**Implementation:** Claude Code (Opus 4.7), authorised by operator approval

## Summary of changes shipped

### Phase 1: Burglar alarm cost article (lib/blog.ts, slug: burglar-alarm-cost-uk-2026)

- Article rebuilt around confirmed J&L Security 2026 starting prices supplied by Jag, replacing the previous indicative-only pricing.
- New "J&L Security 2026 Pricing: Confirmed Installed Rates" section covering the Pyronix Enforcer V11 standard wireless package (from £485 + VAT), 11 accessory pricing entries, Homecontrol 2.0 app (from £48 / £30 + VAT), 24-hour monitoring (from £105 + VAT/year), and maintenance contracts (from £120/£180 + VAT/year for residential/commercial).
- Pricing Summary Table replaced with a two-table layout: sector-wide indicative ranges for context, J&L confirmed starting prices for action.
- First FAQ rewritten to lead with J&L pricing; two new FAQs appended covering package contents and ongoing costs.
- Closing CTA paragraph refreshed to reference the new 14 London target boroughs.
- Field updates: dateModified `2026-05-06`, two new keywords (pyronix enforcer cost, wireless burglar alarm price essex), wordCount `2380`.

### Phase 2: 14 new London location pages and Greenwich enrichment

- 14 new `Location` entries added to `lib/data.ts`: Islington, Hackney, Clapton, Dalston, Camden, Southwark, Woolwich, Westminster, Hammersmith, Battersea, Fulham, Streatham, Finchley, Barnet.
- 14 matching `locationExtended` entries added to `app/locations/[location]/page.tsx` with description, population, commuting, whyLocal, and residential fields.
- Phrasing reflects J&L's honest position as a Brentwood-based engineer team operating routinely across the boroughs (no false "we are local to" claims for West/North London).
- Greenwich `locationExtended` lightly enriched: description now references Royal Arsenal Riverside; whyLocal now mentions BAFE-certified fire alarm work, Charlton/Blackheath domestic intruder alarms, and Kidbrooke Village/Royal Arsenal access control. Base record in `lib/data.ts` left unchanged.
- Total location pages: 29 (15 existing + 14 new). Pack stated 30 (16 existing + 14 new); the original count was 15, so we have 29.

### Phase 3: Fire alarm keyword integration

- `app/services/[service]/page.tsx` `'fire-alarms'` block: heroTagline replaced with "BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments"; overview rewritten to lead with BAFE-certified maintainer status and dual-standard coverage; whoFor replaced with audience segments aligned to keyword set; pricing copy added (from £180/£120 + VAT/year); four new FAQs appended (BS 5839-1 vs 5839-6, fire risk assessments, smoke alarm install/repair, BAFE certification meaning).
- `app/services/[service]/page.tsx` `generateMetadata`: per-slug `metaOverrides` map added so the fire-alarms route surfaces an explicit description and keyword set covering BAFE-certified, BS 5839-1, BS 5839-6, fire risk assessments, smoke alarm install and repair.
- `app/page.tsx`: homepage Fire Alarms service-card description rewritten to "BS 5839-1 commercial and BS 5839-6 domestic and HMO fire alarms. BAFE-certified install and service. Fire risk assessments included."
- `app/about/page.tsx`: BAFE accreditation card description rewritten to lead with "BAFE-certified fire alarm maintainer (SP203-1 scheme)" and reference both standards. Badge label retained as "BAFE" so the small visual placeholder is not overflowed (deviation from pack noted below).
- `app/locations/[location]/page.tsx` `locationFaqs`: two new generic FAQs appended (fire alarms, smoke alarms) so they appear on every location page.
- `app/faqs/page.tsx` Fire Alarms category: three new FAQ items appended (BS 5839 split, fire risk assessments, smoke alarm install/repair). FAQPage JSON-LD picks them up via the existing schema generator.

### Phase 4: BS 5839-1 and BS 5839-6 explained blog post (lib/blog.ts)

- New `BlogPost` slug `bs5839-1-and-bs5839-6-explained-2026`, ~2,150 words, dated 2026-05-06.
- Coverage: scope of each part of BS 5839, BS 5839-1 categories M/L1-L5/P1/P2, BS 5839-6 grades A through F and categories LD1 to LD3, side-by-side comparison table, who decides which standard applies, BAFE SP203-1 importance, maintenance obligations under each standard, J&L Security service summary with confirmed servicing pricing, and five FAQs.
- Internal links: `/blog/hmo-fire-alarm-requirements-bs5839`, `/services/fire-alarms`, `/contact`. All verified to resolve. JSON-LD for BlogPosting, FAQPage, and BreadcrumbList all generate without error.
- Editorial: standards described in our own words, no verbatim passages from BS 5839-1 or BS 5839-6.

### Phase 5: llms.txt and llms-full.txt updates

- `public/llms.txt` Service Areas regrouped by direction (East and Central, South and South East, West and North); Fire Alarm services line rewritten to BAFE-certified maintainer phrasing; Indicative Installed Costs block replaced with J&L confirmed starting prices first plus sector-wide indicative ranges as supplementary context; new BS 5839 article appended to Blog list.
- `public/llms-full.txt` equivalent updates plus a new "London Location Summaries" section with one paragraph per new borough (added even though the file did not previously have per-location summaries; the pack provided an explicit format and the new boroughs warranted LLM-discoverable context); BS 5839 article entry appended to article index; Indicative Pricing block restructured to lead with confirmed J&L 2026 starting prices.
- Both files: Last-updated date bumped to 6 May 2026.

### Verification follow-up: sitemap.ts

- During the verification gate I noticed `app/sitemap.ts` had the location list hardcoded to the original 15 slugs, so the 14 new locations were not being picked up by `/sitemap.xml`.
- Fixed by importing `locations` from `lib/data.ts` and using `location.slug`. Sitemap URL count rose from 86 to 100.

## What is now live

- **Production URL:** https://jandlsecurity.co.uk
- **Burglar alarm cost article:** https://jandlsecurity.co.uk/blog/burglar-alarm-cost-uk-2026 (now anchored on confirmed J&L pricing)
- **BS 5839 explainer article:** https://jandlsecurity.co.uk/blog/bs5839-1-and-bs5839-6-explained-2026 (new)
- **14 new London location pages:** Islington, Hackney, Clapton, Dalston, Camden, Southwark, Woolwich, Westminster, Hammersmith, Battersea, Fulham, Streatham, Finchley, Barnet (each at `/locations/<slug>`)
- **Greenwich enrichment:** https://jandlsecurity.co.uk/locations/greenwich (BAFE-certified mention plus Royal Arsenal Riverside and Kidbrooke Village references)
- **Fire alarms service page:** https://jandlsecurity.co.uk/services/fire-alarms (BAFE-certified hero, dual-standard overview, four new FAQs)
- **Homepage Fire Alarms card:** updated description visible on https://jandlsecurity.co.uk/
- **About page BAFE description:** updated on https://jandlsecurity.co.uk/about
- **Main FAQs page:** three new fire-alarm FAQs at https://jandlsecurity.co.uk/faqs
- **llms.txt:** new regional groupings, J&L pricing, BAFE-certified phrasing, BS 5839 article entry at https://jandlsecurity.co.uk/llms.txt
- **llms-full.txt:** equivalent updates plus per-location summaries for the 14 new boroughs at https://jandlsecurity.co.uk/llms-full.txt
- **Sitemap:** all 14 new location pages and the new BS 5839 article present at https://jandlsecurity.co.uk/sitemap.xml (100 URLs total, up from 86)

## FAQ architecture decision

**Chose: inline.**

**Reason:** The existing `app/faqs/page.tsx` uses a richer category-with-icon structure (Lucide React component icons keyed per category) that does not fit the simple `{id, question, answer, category}` shape exported (and currently unused) from `lib/data.ts`. Migrating would either drop the icons or require an additional grouping layer for marginal benefit. Keeping the categorised FAQ list inline as the single source of truth avoids splitting concerns. The unused `faqs` export in `lib/data.ts` is left in place; cleanup is out of scope for this round.

## Deviations from the content pack

1. **About page BAFE rendering:** the pack instructed "change any standalone 'BAFE' reference to 'BAFE-certified fire alarm maintainer (SP203-1 scheme)'". The accreditations array on the about page renders `name` both inside a small h-16 logo placeholder and as the H3 heading. Putting the long phrase in the small placeholder would visually break it. I kept `name: 'BAFE'` (badge mark) and rewrote the `description` field to lead with the full phrase. Same SEO/communication outcome, no layout breakage.

2. **Pack location count:** the pack's verification checklist stated "30 location slugs (16 existing plus 14 new)". The actual pre-existing count was 15, not 16, so we now have 29 location pages. Both numbers reconcile: 15 + 14 = 29.

3. **Per-location summaries in llms-full.txt:** the pack said to add summaries "where the file does have per-page summaries". The file did not previously have per-location summaries (only per-article ones). I added a new "London Location Summaries" section anyway because the pack provided an explicit format and richer LLM context for the new boroughs is the spirit of the request.

4. **Sitemap follow-up commit (not in pack):** during verification I discovered `app/sitemap.ts` had the location list hardcoded. Fixed by sourcing from `lib/data.ts`.

## Verification table (production live)

See companion table in this document and the production verification step that ran against `https://jandlsecurity.co.uk` after the merge commit deployed.

| # | URL | Result | Note |
|---|---|---|---|
| 1 | /blog/burglar-alarm-cost-uk-2026 | PASS | New pricing block, table, both phones, "from £485 + VAT" anchor present |
| 2 | /blog/bs5839-1-and-bs5839-6-explained-2026 | PASS | Full article renders, internal links resolve, both phones present |
| 3 | /locations/islington | PASS | Hero, description, FAQs (incl. new fire/smoke), CTA |
| 4 | /locations/hammersmith | PASS | West London whyLocal copy present |
| 5 | /locations/barnet | PASS | "extend our coverage" copy present |
| 6 | /locations/woolwich | PASS | Royal Arsenal Riverside copy present |
| 7 | /locations/greenwich | PASS | BAFE-certified, Royal Arsenal Riverside, Kidbrooke Village all present |
| 8 | /services/fire-alarms | PASS | BAFE hero tagline, BAFE-certified maintainer overview, all 4 new FAQs |
| 9 | /faqs | PASS | All three new fire-alarm FAQs present |
| 10 | /llms.txt | PASS | Regional groupings, J&L pricing, BS 5839 article entry, BAFE phrasing |
| 11 | / (homepage) Fire Alarms card | PASS | New description present |
| 12 | /about BAFE description | PASS | New description present |
| 13 | /sitemap.xml | PASS | 100 URLs, all 14 new locations, BS 5839 article |

## Known follow-ups

1. **`serviceLocationMatrix` extension:** new high-intent service-location combo entries for the 14 new London boroughs (e.g. `burglar-alarm-installation-islington`, `cctv-installation-hammersmith`, `fire-alarm-installation-barnet`). Flagged in the original content pack as a deferred follow-up. Tracked as a separate later commit.
2. **Pre-existing ESLint warning:** `app/about/page.tsx:3:32` has an unused `CheckCircle` import that pre-dates this round. Cleanup deferred.
3. **Pre-existing em dashes:** five em dashes remain in `app/locations/[location]/page.tsx`, including one inside the location FAQ template `J&L Security is based in Brentwood, Essex —`. The pack explicitly said not to refactor existing copy; flagging for awareness for any future round.
4. **Lighthouse SEO score:** the pack asked for a Lighthouse audit on one new location page after deploy; not run in this session because the local CLI installation was outside the worktree scope. Suggest running it from a desktop browser against `https://jandlsecurity.co.uk/locations/islington` and noting any score below 90.

## Pricing change call-out

The burglar alarm cost article and `llms.txt`/`llms-full.txt` now reflect the confirmed J&L Security 2026 starting prices supplied by Jag in his email of 5 May 2026:

- Standard wireless Grade 2 residential package (Pyronix Enforcer V11): from £485 + VAT
- Homecontrol 2.0 app module + first year: from £48 + VAT; thereafter from £30 + VAT/year
- 24-hour UK-manned monitoring: from £105 + VAT/year
- Annual maintenance: from £120 + VAT/year (residential), £180 + VAT/year (commercial)
- Plus 11 accessory line items (motion detector from £55, door contact from £45, additional siren from £125, vibration detector from £65, combined vibration plus contact from £75, dummy siren from £25, additional proximity tag from £12, keyfob from £45, panic button from £65, LCD keypad from £115)

All pricing presented as "from £X + VAT" with the standing free-survey caveat. The previous indicative residential maintenance range (£80 to £150 per year) has been replaced with the confirmed J&L starting rate (£120 + VAT/year).

## Closing note

Work delivered under the Pilot maturity classification: real content, real structure, no Demo shortcuts, no Production-grade complexity beyond what was explicitly scoped. UK English throughout. No em dashes in any new copy. No emojis in any output.
