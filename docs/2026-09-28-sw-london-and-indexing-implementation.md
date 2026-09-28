# South-west London and the unindexed area pages

**Date:** 2026-09-28
**Session:** Claude Code (Opus 5.5), build session, after Jag's answers shipped (`1cd2134`).
**Branch:** `content/sw-london-and-indexing`, cut from `main` at `3f5baf1`.
**Status:** **SHIPPED and verified live** (section 9). [PR #26](https://github.com/AiC007/jandl-security-site2cc/pull/26) squash-merged as **`ac4be54`**. No email sent; the review session drafts the note to Jag. Commit hashes in sections 2 to 8 are the branch's, before the squash.
**Maturity:** Pilot.
**Research used:** the review session's `docs/2026-09-28-sw-london-areas-research.md`, copied onto this branch. Its claims were checked again this session; the differences are noted below.

## Basis for the work

Jag asked on 2026-09-28 at 12:02 UTC (`1a0e7e52f0d16fb0`) for ten south-west London postcode areas, and asked whether they were worth adding. Wendy's reply at 12:15 UTC (`1a0e7f0dffacd627`) recommended:
- extending Fulham, Battersea and Streatham rather than adding ten pages;
- adding two new pages, Clapham, and Chelsea and Kensington;
- fixing the eight unindexed area pages first.

It closed: "We will go ahead on this basis and confirm when the changes are live." **At the time of writing there is no reply from Jag after that message in the mailbox** (checked this session). The operator's brief says Jag agreed; this record relies on that and on Wendy's stated basis.

## 1. The unindexed area pages: diagnosis

### What Search Console says (URL Inspection, all 29 area pages, 2026-09-28)

- **21 of 29 area pages are indexed.** They include all 14 London pages added in May, and Hornchurch, Barking, Basildon, Chelmsford, Enfield, Stratford and Greenwich.
- **8 are not:** Romford, Brentwood, Dagenham, Ilford, Redbridge, Canary Wharf, Harlow and Epping. Every one shows "Last crawled: Never".
  - This session saw "URL is unknown to Google" for all except Ilford, which was "Discovered, currently not indexed".
  - The research, run earlier the same day, had Romford, Brentwood and Dagenham as "Discovered" and Ilford as "unknown".
  - **The label moves between inspections; the substance does not.** Google has never crawled these URLs.
- **All 8 are among the original 15 towns.** The other 7 original towns are indexed.
- **None of the 8 has had a single impression in 2026** (Search Console pages report, 1 January to 27 September). They were never shown; they were not shown and then dropped.
- **The `/locations` hub also reports "URL is unknown to Google"**, although it logged 10 impressions this year.
- **The same towns' service-and-area pages are also out of the index:**
  - `/burglar-alarm-servicing/romford` and `/burglar-alarm-installation/ilford`: "Crawled, currently not indexed".
  - `/fire-alarm-installation/brentwood` and `/cctv-maintenance/dagenham`: "Discovered, currently not indexed".
  - `/fire-alarm-maintenance/harlow` is indexed.

### What was ruled out

| Possible cause | Finding |
|---|---|
| Blocked or not served | All 8 return 200 to both a browser and a Googlebot user agent, with identical bodies, served from the Vercel cache. |
| Canonical or robots | Every area page is self-canonical with `index, follow`, indexed and unindexed alike. |
| Not in the sitemap | All 15 original towns have been in the sitemap since before the April migration: the hardcoded list in `app/sitemap.ts` at `90fb7d2` names all 15. Search Console downloaded the sitemap at 11:16 UTC today: valid, 112 URLs, no errors. |
| Weak internal linking | Not the discriminator. Ilford, Romford and Brentwood are linked from the site-wide footer on all 115 pages, exactly like the indexed Chelmsford and Basildon. The 14 May pages are indexed although most had no link from `/locations`. |
| Duplicated by the same town's service-and-area pages | Low overlap: only 6 to 8% of each unindexed area page's six-word phrases also appear on that town's service-and-area pages. The figure is 2 to 7% for indexed towns. |
| Local intent already met elsewhere | **Partly, for Brentwood.** "Brentwood" searches currently land on the homepage, About, `/services/fire-risk-assessments` and even `/safe-fitting/brentwood`, because the business is based there. For Romford, "burglar alarms romford" (215 impressions in 90 days) lands on `/services/burglar-alarms` at position 18, so the demand exists and has no local page to go to. Chelmsford searches go to `/locations/chelmsford` (4,551 impressions). |

### Two further checks after review

- **Before the migration, Google knew no area pages at all.** Search Console's page report for 1 June 2025 to 11 April 2026 lists only 9 URLs for the whole site (the homepage, About, Contact, FAQs, `/city-security` and the tools pages, on both www and apex). So all 15 original area pages started from nothing when the site moved to Vercel on 12 April. The Wayback Machine has no capture of any location URL before 10 May 2026, so what the Replit site returned for them cannot be established. Nothing suggests the eight inherited a bad history, but it cannot be ruled out.
- **The `/locations` anomaly is not a URL-form mismatch.** Its 10 impressions (average position 2.8) were recorded on exactly `https://jandlsecurity.co.uk/locations`, all after the migration, yet URL Inspection reports that URL, its `www` form and its trailing-slash form as "unknown to Google". The same inspection reports `/locations/chelmsford` correctly as indexed (last crawled 2026-08-22). The inconsistency is unexplained. It means "unknown" and "Last crawled: Never" in URL Inspection should not be treated as exact for this site, although the eight pages' zero impressions since October 2025 agree with them.

### What the evidence points to

**A hypothesis, not a finding: near-template content, which Google may have deprioritised crawling.**

Measured on the built HTML (the page's `<main>`, with its own place name normalised out; a phrase is "unique" if its six words appear on no other area page):
- **All 25 area pages without the July treatment** are 729 to 789 words, with only **19 to 26% unique phrases**. About three quarters of each page is the shared template.
- **The 8 unindexed pages are the least distinctive of the 29** (19 to 21%).
- Chelmsford, Enfield, Stratford, Dalston and Fulham sit in the same 19 to 21% band and are indexed. So thinness does not explain every case on its own; crawl order is not visible to us.
- **The 4 July pages** (Barking, Hornchurch, Basildon, Greenwich) are 1,670 to 1,876 words with **60 to 64% unique phrases**. They draw 6,000 to 9,000 impressions each, the highest of any area page.

The case for it: Google schedules crawling of a URL it has not yet fetched partly on what it expects to find, and near-identical pages that differ mainly in the town name are a common reason for it to hold back. The same towns' thin service-and-area pages were crawled and then rejected ("Crawled, currently not indexed" for Romford and Ilford).

**The case against it, raised by the review and accepted:**
- Google has never fetched the eight, so it has not judged their content directly.
- 21 sibling pages in the same folder, several just as thin, were crawled and indexed, so there is no sign Google wrote the folder off.
- The same test that rules out internal linking (indexed pages share it) also weakens thinness: five indexed pages sit in the same 19 to 21% band.

No other explanation fits better. The rewrite is worth doing on its own merits: the four July pages, the only long-form area pages, draw the most impressions of any area page.

**Two site defects make the discovery path weaker, and are fixed on this branch** (commit `cd3a5c1`):
- **The `/locations` hub linked 19 slugs with no page**, all returning 404: Billericay, Colchester, Southend-on-Sea, Havering, Docklands, City of London and others. It also omitted 11 of the 14 May pages. It now links exactly the 29 area pages, generated from `lib/data.ts`.
- **The breadcrumb JSON-LD on all 50 service-and-area pages pointed at hyphenated URLs that return 404** (e.g. `/emergency-locksmith-romford`). It now uses each page's real path.

### Confidence

- **Low** that thin, near-template content is the cause. It is the best available hypothesis, not a finding.
- **High** that the pages are served correctly: 200 to Googlebot, self-canonical, `index, follow`, and in the sitemap. That was tested directly.
- **Low** that any single change guarantees indexing. Google does not report why it declines to crawl.

**What the manual requests can and cannot show.** A manual indexing request forces a crawl, so a crawl afterwards proves nothing about why Google held back. What it does show is the indexing decision once Google reads the new content: if the rewritten pages are indexed, they clear the quality bar that the same towns' thin service-and-area pages failed. It cannot confirm the thinness hypothesis, because the untouched thin pages are already indexed and there is no control group. A cleaner test would request four of the eight by hand and leave four to be found naturally; that delays four commercially useful pages, including Brentwood, for the sake of the experiment. Section 5 recommends requesting all eight.

### What was done

**The July `locationExtended` treatment for all 8 unindexed pages:**
- property stock;
- security context;
- commercial base;
- named neighbourhoods with notes;
- local FAQs;
- a place-specific meta title and description.

Every place fact comes from the sourced fact sheets described in section 4. The `/locations` hub and breadcrumb fixes are above.

### Where this differs from the research

- **Coverage labels.** The research had Romford, Brentwood and Dagenham as "Discovered" and Ilford as "unknown"; this session saw the reverse for most of them. As above, the label moves; "never crawled" is the constant.
- **`/locations` links.** The research said the 14 May pages were not linked from `/locations` at all. Three of them were; the other 11 were not. It also did not record that the hub linked 19 slugs with no page.

## 2. What was built

Branch `content/sw-london-and-indexing`, eight commits on `main` at `3f5baf1` (seven code and content, one docs):

1. `cd3a5c1` fix(seo): real breadcrumb URLs on the 50 service-and-area pages; `/locations` links every area page.
2. `a76836f` feat(locations): no response or travel-time promises on south-west London pages.
3. `2d707fa` content(locations): rewrite the eight unindexed area pages.
4. `a96ad79` content(locations): extend Fulham, Battersea and Streatham.
5. `53f36fd` feat(locations): add Clapham and Chelsea and Kensington area pages.
6. `eeea837` fix(locations): review findings on place facts and south-west wording (section 7).
7. `800a1cb` docs: this record, the research, memory.md.
8. `28bee9a` fix(locations): the `/locations` page's own copy (section 8), added after the review session approved the branch.

### The `noTimePromises` switch

The brief says: "Do not promise response or travel times in south-west London." The area-page template promised both to every town. An optional `noTimePromises` flag on `Location` (`lib/types.ts`), set in `lib/data.ts` on Battersea, Fulham, Streatham, Clapham, and Chelsea and Kensington, changes only those five pages:
- the same-day survey FAQ and the "within 2 to 4 hours" FAQ are dropped;
- "Are you based near…" says the engineers travel from Brentwood and agree an appointment time, instead of "excellent coverage … daily";
- the "Same-Day Surveys" and "24/7 Emergency Cover" cards become "Free Surveys" and "Maintenance Contracts";
- the call to action drops "with same-day appointments available";
- after review (`eeea837`): the "cover {name} daily" card becomes "Based in Brentwood: our engineers travel from our Brentwood base to {name}"; the maintenance FAQ drops "priority emergency response"; "local engineers" becomes "our engineers"; and the headings "What We Are Usually Asked to Do" and "the parts of {name} we work in most often" become "Typical Requirements" and "the parts of {name} this page covers", because J&L has not stated a track record in these areas;
- the agent markdown (`Accept: text/markdown`) drops "free surveys and 24/7 emergency support".

The flag lives on `Location` rather than in the page file so that `lib/agent-content.ts` can read it too. Every other area page is unchanged by it.

### The content, page by page

Each page now has property stock, security context, commercial context, five or six neighbourhoods with notes, three local FAQs, and its own meta title, description and keywords. The south-west pages also carry a meta description override, because the template fallback says "same-day service".

Measured on the built HTML after the review fixes, with the section 1 method (`<main>`, own place name normalised, six-word phrases):

| Page | Words before | Unique before | Words after | Unique after | Base facts corrected |
|---|---|---|---|---|---|
| Romford | 750 | 21% | 1,696 | 51% | Postcode RM1-RM3 to "RM1-RM3, RM5, RM7"; unsupported population removed; journey times removed. |
| Dagenham | 730 | 19% | 1,635 | 52% | Postcode RM9-RM10 to RM8-RM10; "Heathway" and "Gale Street" no longer listed as residential areas; population removed. |
| Ilford | 742 | 19% | 1,671 | 52% | Population (~168,000) removed; "TfL Rail" and journey times removed; landmark renamed "Exchange Ilford". |
| Redbridge | 743 | 20% | 1,579 | 49% | Postcode IG4-IG6 to "IG1-IG8, E11, E12, E18"; population about 310,300 (Census 2021); "response times are excellent" removed. |
| Brentwood | 733 | 20% | 1,568 | 53% | Population around 77,000 (borough, Census 2021); journey times removed. |
| Harlow | 739 | 20% | 1,568 | 52% | Population around 93,300 (Census 2021); The Pinnacles no longer listed as residential (it is an employment area); journey time removed. |
| Epping | 743 | 20% | 1,552 | 52% | At the northern end of Epping Forest (not the southern edge), the eastern end of the Central line; Toot Hill (CM5) dropped; journey time removed. |
| Canary Wharf | 745 | 21% | 1,560 | 53% | E14 population 108,214 (Census 2021), not ~25,000; "secondary financial district" replaced with the London Plan's description; Crossrail replaced with the Elizabeth line; journey times removed. |
| Fulham | 754 | 21% | 1,512 | 52% | "Fulham Broadway National Rail" removed (District line only); Chelsea Harbour placed in Hammersmith and Fulham; West Brompton described as straddling the boundary; population removed. |
| Battersea | 763 | 23% | 1,570 | 56% | Vauxhall and South Lambeth placed in Lambeth; "Wandsworth" dropped as a Battersea neighbourhood; population replaced with SW8 38,648 and SW11 81,336 (Census 2021); "New US Embassy" renamed. |
| Streatham | 757 | 23% | 1,542 | 56% | "Straddling Lambeth and Wandsworth" replaced with "mostly Lambeth, with the Streatham Park and Furzedown side in Wandsworth"; population removed; conservation areas named as the councils name them. |
| Clapham (new) | | | 1,583 | 55% | Covers SW4, plus Stockwell and Oval (SW9) and Balham (SW12). |
| Chelsea and Kensington (new) | | | 1,603 | 59% | Covers SW3, SW5, SW7 and SW10: Chelsea, Brompton, Earl's Court, South Kensington, Knightsbridge. |

For comparison, the four July pages measure 62 to 63% after this change (Barking 56%, because the new pages share some of its phrasing, such as the BAFE and SSAIB lines). **The new pages are twice the length of the template pages and more than twice as distinctive, but slightly below the July pages.** Some phrasing is deliberately shared across them: the BAFE sentence, the consent advice for conservation areas, and "we survey before quoting".

Jag's neighbourhoods are all present: Parsons Green, West Brompton and Chelsea Harbour on Fulham; Nine Elms, Vauxhall and South Lambeth on Battersea; Brixton Hill, Tulse Hill and Clapham Park on Streatham; Stockwell, Oval and Balham on Clapham; Brompton, Earl's Court, South Kensington and Knightsbridge on Chelsea and Kensington. West Brompton gets a passing mention on Fulham and its own entry on Chelsea and Kensington, because its landmarks (Brompton Cemetery, The Boltons, the station) are on the Kensington and Chelsea side.

### Wiring

- `lib/data.ts`: the two new locations (Greater London), so the sitemap, `generateStaticParams`, the `/locations` index and the agent markdown pick them up.
- Nearby-area links: Battersea and Fulham now link "Chelsea and Kensington"; Streatham links "Clapham"; the new pages link back to Battersea, Streatham, Fulham and Hammersmith. "Chelsea" and "Earls Court" were dropped as nearby names because they now belong to a page.
- `public/llms.txt` and `public/llms-full.txt`: both new areas in the service-area lists; a new "South-west London Location Summaries (added September 2026)" section; the Battersea, Fulham and Streatham summaries rewritten to match the pages (borough corrections, no "engineers operate routinely").
- No service-and-area pages for the new areas, and no other area pages, as the brief required.

## 3. Verification (this session)

| Check | Result |
|---|---|
| `npm run build` | Exit 0, before and after the review fixes. `tsc --noEmit` also clean at every intermediate commit. |
| Review fixes change only intended pages | Built HTML after `eeea837` compared with the build before it: only the 13 rewritten, extended or new area pages and the sitemap's `lastmod` differ. The four July pages and every other page are unchanged, so the template changes affect only the five SW pages. |
| Meta titles | 44 to 50 characters before the " \| J&L Security" suffix; 59 to 64 in full. |
| Sitemap | 112 to 114 URLs. Added exactly `/locations/clapham` and `/locations/chelsea-and-kensington`; nothing removed. The only other sitemap change is `lastmod`. |
| Only intended pages change | Built HTML compared with the `cd3a5c1` build, scripts and hashed asset references stripped: 13 of 236 shared files differ, namely the 11 rewritten or extended area pages, `/locations` and the sitemap. Plus the two new pages. `/locations` gains the two tiles and the three corrected postcodes. |
| Breadcrumb URLs resolve | Every `BreadcrumbList` item URL across the whole built site (114 distinct URLs) returns 200 from `next start`. |
| JSON-LD | Parses on all 14 touched pages: the site-wide `Organization` object, and on area pages a list of `LocalBusiness`, `FAQPage` and `BreadcrumbList`. |
| Both phone numbers | Present on all 14 touched pages and in the markdown for the SW pages. |
| Time and frequency claims on the five SW pages | The first pass missed three template lines ("cover {name} daily", "priority emergency response" and the "usually asked" and "most often" wording); the review caught them and `eeea837` gates them. After that, a scan of each page's `<main>` text and FAQ schema finds no same-day, 2 to 4 hour, "within N", daily, "regularly", "most often" or "priority emergency" wording. What remains is "24/7 monitoring" on the burglar alarm service card (alarm monitoring, not engineer response), a customer review saying "arrived within 2 hours" in the site-wide `Organization` schema, the site header and footer, and the markdown contact block's hours line ("plus 24/7 emergency callouts"). See follow-ups. |
| Agent markdown | `/locations/clapham`, `/locations/chelsea-and-kensington` and the three extended SW pages return 200 `text/markdown` with the new survey line and both phone numbers. `/locations` markdown lists both new pages. `llms.txt` and `llms-full.txt` serve both new areas. |
| Em dashes | None in any added line. One added line contains an en dash: the existing "within 2–4 hours" FAQ, re-indented by the switch, unchanged in wording. The site-wide `Organization` description has a pre-existing em dash. |

## 4. Sources

Every place fact was taken from six fact sheets written this session by research sub-agents from published sources, each fact with its URL, and each sheet with a section listing what it could not confirm. Firecrawl was not used after the operator's credit warning; the sub-agents used web search and page fetches. The sheets and their supporting extracts are in the session scratchpad (`facts/g1-romford-dagenham.md` to `facts/g6-streatham-clapham.md`), not in the repository.

The main source types:
- **Councils:** conservation area appraisals and lists (Havering, Barking and Dagenham, Redbridge, Brentwood, Harlow, Epping Forest, Tower Hamlets, Wandsworth, Lambeth, Hammersmith and Fulham, Kensington and Chelsea, Westminster); Local Plans and their evidence bases.
- **Greater London Authority:** the London Plan town centre network and Opportunity Areas; planning reports.
- **Office for National Statistics:** Census 2021 populations.
- **Victoria County History** (British History Online) for Essex and Harlow building history.
- **Wikipedia** for postcode districts, stations and some local history, used only where a primary source was not found, and never for anything the fact sheets flagged.

Facts the sheets flagged as unconfirmed were left out. Examples: the size of Clapham Common (sources disagree), the Earls Court scheme's status (resolved to grant, not granted, so not mentioned), the completion year of Chelsea Harbour (only the 1986 planning permission is stated), and the locations of ten Hammersmith and Fulham conservation areas that were not checked.

## 5. Manual indexing requests (after deploy)

Request indexing in Search Console URL Inspection, in this order:

1. https://jandlsecurity.co.uk/locations
2. https://jandlsecurity.co.uk/locations/romford
3. https://jandlsecurity.co.uk/locations/brentwood
4. https://jandlsecurity.co.uk/locations/ilford
5. https://jandlsecurity.co.uk/locations/dagenham
6. https://jandlsecurity.co.uk/locations/redbridge
7. https://jandlsecurity.co.uk/locations/canary-wharf
8. https://jandlsecurity.co.uk/locations/harlow
9. https://jandlsecurity.co.uk/locations/epping
10. https://jandlsecurity.co.uk/locations/clapham
11. https://jandlsecurity.co.uk/locations/chelsea-and-kensington
12. https://jandlsecurity.co.uk/locations/fulham
13. https://jandlsecurity.co.uk/locations/battersea
14. https://jandlsecurity.co.uk/locations/streatham

Search Console limits manual requests per day; if it refuses partway, continue the next day from where it stopped. Items 12 to 14 are already indexed, so they matter least. Resubmitting the sitemap is not needed; Google read it today.

**How to read the result:** check URL Inspection for items 2 to 9 weekly for four weeks. If they are crawled and indexed while the 14 untouched thin pages stay as they are, the section 1 diagnosis holds. If they are crawled and still not indexed, the cause is something else and the next step is a closer look at what Google does index for those towns.

## 6. Flagged items and follow-ups

Not done on this branch, for the operator to decide:

1. **Done (section 8).** The `/locations` page's own copy (hardcoded in `app/locations/page.tsx`) contradicted the corrected area pages:
   - the six featured cards give populations (Ilford 168,000, Romford 122,000, Brentwood 76,000, Chelmsford, Basildon, Hornchurch), and the Romford card says "Elizabeth Line and TfL Rail to Central London (35 mins to Bond Street)";
   - the page says "Same-day surveys available", "Emergency callouts within 2-4 hours" and that engineers are "based across Essex and Greater London", although J&L is based in Brentwood.
   A small follow-up: remove the populations, the rail name and the journey time, and reword the base claim.
2. **Site-wide 24/7 and same-day wording.** The header, footer, the `Organization` schema's review and the agent markdown's hours line all say 24/7 or give a response time, including on the south-west pages. Whether that stays is a business decision for Jag: it is company-wide, not an area promise.
3. **Westminster, Hammersmith and the other May London pages** still carry the template's same-day and "2 to 4 hours" promises, although J&L travels to them from Brentwood just as it does to south-west London. Setting `noTimePromises` on them is a one-line change each; it was not in this brief.
4. **The other 14 thin area pages** (Enfield, Chelmsford, Stratford and the May London pages, 19 to 26% unique) are indexed today. The research recommends measuring the rewritten pages for a month before doing more; that still applies.
5. **The burglar alarms service page's area list** matches "alarm", "smoke", "detector" and "lock", so it lists fire, smoke and lock pages (carried over from the Jag's answers round).
6. **Dev-dependency audit:** 9 toolchain findings, fixable within range with `npm audit fix` (carried over from the maintenance round).
7. **Pre-existing base sentences on the Essex and East London pages** (Romford, Dagenham, Harlow, Canary Wharf descriptions) were kept where they make no unsupported claim; Brentwood's and Epping's were replaced after review (section 7). Dagenham's description still says "strong demand", a marketing phrase with no source; low priority.
8. **URL Inspection is inconsistent for this site** (section 1). Watch impressions in the performance report alongside URL Inspection when judging whether the eight are indexed.

## 7. Fresh-context review

A sub-agent with no access to this conversation reviewed the five commits against the fact sheets and the draft of section 1. It ran two web checks and did not use Firecrawl. Every finding was checked against the fact sheets before acting.

**Fixed in `eeea837` (all eleven "must fix" items):**
1. Battersea: the description said the four areas "make up" the Opportunity Area; the source only says it covers parts of Lambeth and Wandsworth, and it is the riverside strip. Reworded, including in `llms-full.txt`.
2. to 4. South-west template lines claiming daily cover, "priority emergency response", and how often J&L works there. Gated on `noTimePromises`.
5. Canary Wharf: "Most security work in E14 now involves managed buildings" and "as common as new installation" were unsourced. Reworded.
6. Brentwood and Epping: kept sentences saying J&L "regularly" works there, "fast same-day survey availability", "Many of our customers…" and "known for excellent schools". Replaced with sourced statements.
7. Chelsea and Kensington: "built out between the late 18th century and the late 19th" contradicted the Chelsea appraisal ("up until the 1950s"). Fixed.
8. Clapham: "some of the oldest in south London" had no source, and 113 North Side (Wandsworth side) is not "near" Holy Trinity. Both removed.
9. Canary Wharf: Coldharbour is "the sole remaining fragment of the old hamlet of Blackwall", not Cubitt Town. Removed.
10. Epping: "south of the High Street" was not in the source; now "around the edges of the old town", as the appraisal says.
11. Fulham: King's Road Park's 1,800 homes are the scheme's size, not homes built; now "planned for".

**Also fixed from "should consider":** Battersea's market superlative (the market authority's own claim) dropped; Nine Elms no longer placed wholly in Wandsworth; Chelsea's whole-borough population removed, Holland credited with Hans Town only, "luxury" removed, and only Knightsbridge called international; Clapham's Du Cane Court and Heaver Estate placed in SW17, and the social housing sentence attributed as the sources do; Lansbury "includes the permanent buildings of" the Festival of Britain; Harlow's Mark Hall note separates North and South; Dagenham's Chadwell Heath labelled RM6, Marks Gate and "Apartment blocks" removed (and "Dagenham Heathway", which the fact sheet says is a town centre, not a neighbourhood, kept out of the residential list); Fulham's description matched to `llms-full.txt`; Ilford's schemes stated as planned or started; meta titles shortened.

**Diagnosis:** the review argued that "moderate" confidence was too high, that the `/locations` anomaly needed resolving, that the proposed test could not confirm the diagnosis, and that pre-migration history had not been considered. All four are accepted: section 1 now carries low confidence, records the two further checks, and says what the manual requests can and cannot show.

**Not changed:** "The Royal Borough's largest town centre is Knightsbridge" stays; it is the council's own wording in its Local Plan (para 2.80). The `/locations` page copy stays out of scope (follow-up 1).

## 8. The `/locations` page's own copy

The review session approved the branch and asked for one more fix: the `/locations` page's own text, to the same standard as the area pages.

**Changed in `app/locations/page.tsx`:**
- **Populations removed** from the six featured cards (Ilford 168,000, Romford 122,000, Chelmsford 180,000, Brentwood 76,000, Basildon 185,000, Hornchurch 43,000), with the field and its "Population:" line.
- **Transport lines** now name stations and lines only: no "TfL Rail", no journey times, no "35 mins to Bond Street". Ilford, Romford and Brentwood follow their rewritten area pages. Chelmsford (Greater Anglia to Liverpool Street), Basildon (c2c from Basildon, Laindon and Pitsea to Fenchurch Street) and Hornchurch (District line at Hornchurch, Upminster Bridge and Elm Park; London Overground at Emerson Park) were checked against Wikipedia this session.
- **Descriptions** rewritten from sourced facts: for example Chelmsford is "the county town of Essex, granted city status in 2012" (letters patent received 6 June 2012) and Basildon a "new town … designated in 1949" (4 January 1949). Gone: "excellent transport links", "thriving", "known for excellent schools", and the US spelling "center".
- **Postcodes and names** corrected to match the area pages: Romford "RM1-RM3, RM5, RM7"; "Exchange Ilford"; the rewritten residential lists for Ilford, Romford and Brentwood.
- **Hornchurch landmarks:** "Queen Elizabeth II Country Park" and "The Bull pub" dropped; no source was found for the first. "Queen's Theatre" added (Wikipedia: a 500-seat producing theatre in the town centre).
- **Time promises and the base claim:** the hero's "Same-day surveys available, with local engineers covering all major towns", the "Local Engineers … based across Essex and Greater London, ensuring quick response times" card, the "Same-Day Service … Emergency callouts within 2-4 hours" card, "emergency support across all areas" and the closing "Same-day appointments available across all our service areas" are replaced. The cards now read "Based in Brentwood", "Free Surveys" and "Full Service", and the hero and closing text say the engineers work from Brentwood and surveys are free and booked at a time that suits you.
- "Detailed local knowledge and established presence in key locations" becomes "Six of the towns we cover, each with its own area page".

**Verified:** `npm run build` exits 0. Compared with the build before this change, only `/locations` differs (plus the sitemap's `lastmod`). Its `<main>` text has no same-day, 2 to 4 hour, "within N", 24/7, population, minutes, "based across" or "quick response" wording; its JSON-LD parses; both phone numbers are present.

**Left as found, flagged:**
- The "Coverage Map" box shows developer placeholder text to the public: "(Map integration available - Google Maps embed or custom solution)". Remove the box or embed a map.
- "Our engineers cover a 30-mile radius from our Brentwood base" is J&L's own claim with no source; confirm with Jag or remove.
- The July area pages for Chelmsford, Basildon and Hornchurch still carry unsourced populations and journey times in their own base fields ("~180,000", "in 35 minutes" and so on), and Hornchurch's `lib/data.ts` landmarks still list "Queen Elizabeth II Country Park". Same fix as the eight rewritten pages; small.

## 9. Shipped and verified live

- **Branch:** already current with `origin/main` (`3f5baf1`), so the rebase was a no-op. Pushed and opened as [PR #26](https://github.com/AiC007/jandl-security-site2cc/pull/26).
- **Preview:** `dpl_JCbTNQQKZbM8ft5ctC4inFwUB3N7` READY at `28bee9a`; both PR checks (Vercel, Vercel Preview Comments) passed.
- **Merge:** squash-merged as **`ac4be54`**; branch deleted locally and on GitHub, remote ref pruned. No open PRs remain.
- **Production:** `dpl_8CS8inLesFcNnWf6fcunUQJ1i8kw` READY, aliased to `jandlsecurity.co.uk` and the `www` and `jandlalarms.co.uk` domains.

**Verified on https://jandlsecurity.co.uk (GET requests only; `/api/quote` not touched):**

| Check | Result |
|---|---|
| The 13 changed area pages and `/locations` | All 14 return 200 (curl and a Python check). Each contains a phrase that exists only in the new content, for example "known locally as banjos" (Dagenham), "Du Cane Court" (Clapham), "Thurloe Square" (Chelsea and Kensington), "Six of the towns we cover, each with its own area page" (`/locations`). |
| `/locations` stale copy | No "TfL Rail", "Population", "35 mins" or "based across" in its `<main>` text. |
| Sitemap | 200, **114** `<loc>` entries, including `/locations/clapham` and `/locations/chelsea-and-kensington`. |
| Breadcrumbs on service-and-area pages | A seeded random sample of 8 (`/alarm-repairs/upminster`, `/emergency-lighting-installation/billericay`, `/emergency-locksmith/romford`, `/fire-alarm-fault-finding/city`, `/fire-alarm-maintenance/harlow`, `/hmo-alarm-packages/stratford`, `/hmo-fire-alarm-testing/basildon`, `/police-response-eligibility/redbridge`): every breadcrumb item (`/`, `/services`, the page's own path) returns 200. |
| No time promises on the SW pages | Fulham, Battersea, Streatham, Clapham and Chelsea and Kensington: no same-day, 2 to 4 hour, "within N", "24/7 emergency" or "24/7 cover", round-the-clock, daily or "priority emergency" wording in their `<main>` text or FAQ schema. `/locations` passes the same scan. Clapham shows "Our engineers travel from our Brentwood base to Clapham". |
| Agent markdown | `/locations/clapham` and `/locations/chelsea-and-kensington` return 200 `text/markdown` without the 24/7 line. |
| Both phone numbers | 0204 538 5925 and 0208 220 4770 on all 22 pages checked (14 area and index pages, 8 service-and-area pages). |

**Search Console:** sitemap `https://jandlsecurity.co.uk/sitemap.xml` resubmitted at 14:09 on 2026-09-28; status "Pending processing". The listing still shows the 11:16 download (112 URLs) until Google fetches it again.

**For the operator: request indexing by hand** in URL Inspection, in the order in section 5 (`/locations`, the eight rewritten pages, the two new pages, then Fulham, Battersea and Streatham).

**The note to Jag** is drafted by the review session; none was sent from this session. The two earlier Wendy emails of the round are now in `docs/` (`2026-09-28-sw-london-ack-client-email.md`, `2026-09-28-sw-london-recommendation-client-email.md`), copied from the review session's scratchpad.
