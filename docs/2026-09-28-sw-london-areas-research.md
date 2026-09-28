# South-west London areas: research and recommendation

**Date:** 2026-09-28
**Trigger:** Jag's email of 12:02 UTC, message `1a0e7e52f0d16fb0`, thread `1a0e714b643af248`. He asks to add SW2, SW3 and SW10, SW4, SW5, SW6, SW7, SW8, SW9, SW11 and SW12, and asks: "Let me know what you think and if it is beneficial to include?"
**Held in the scratchpad** while another session works in the repository. Move it to `docs/` afterwards.

## Evidence

**1. The existing south-west pages rank on page two and win almost no clicks.** Search Console, 29 June to 26 September 2026:

| Page | Postcodes | Impressions | Clicks | Average position |
|---|---|---|---|---|
| Streatham | SW2, SW16 | 758 | 0 | 20.5 |
| Fulham | SW6, SW10 | 732 | 0 | 17.3 |
| Hammersmith | W6 | 686 | 0 | 17.5 |
| Battersea | SW8, SW11 | 191 | 2 | 15.6 |

For comparison, the older East London and Essex pages that had their content deepened in July draw 4,000 to 8,500 impressions each (Hornchurch 8,577, Barking 7,027).

**2. The site has almost no visibility in the new areas.**

| Area | Search Console queries |
|---|---|
| Brixton | none |
| Clapham | none |
| Chelsea | one query, 3 impressions, position 81 |
| Balham | 55 impressions, positions 63 to 78, all landing on `/services/fire-alarms` |

**3. Search demand per area is below what Google reports.** OpenSEO (DataForSEO, UK) was queried for 76 terms: four services by 19 areas, the existing pages included for comparison.
- Only "burglar alarm clapham" registered, at about 10 searches a month.
- Every other term, including those for Hornchurch (the site's strongest area page), was below the reporting threshold.
- Search Console does show real impressions at this level (for example, "fire detection system streatham" drew 231 in 90 days). Demand exists, but it is small and spread thinly.

**4. Competitors rank in south-west London with area pages that cover several neighbouring areas at once.**
- Angel Security ranks for "burglar alarm clapham" with a page covering Clapham and Stockwell, and for "burglar alarm chelsea" with a South West London page.
- Page Security and SDS Security run area pages too.
- Directories (Checkatrade, TrustATrader, Rated People) fill the rest.
- The map listings in the search results go to London-based firms. J&L's Brentwood business profile will not appear there, so any south-west London traffic has to come from normal search results.

**5. Eight of J&L's existing 29 area pages are not in Google at all.** URL Inspection, 2026-09-28:
- **"Discovered, currently not indexed":** Romford, Brentwood and Dagenham.
- **"URL is unknown to Google":** Ilford, Redbridge, Canary Wharf, Harlow and Epping.

All eight return 200, are self-canonical, carry `index, follow`, and are in the sitemap. Brentwood is J&L's home town. Weak internal linking is not the cause: Romford and Brentwood are linked from the homepage and the locations index, and are still not indexed.

Separately, the 14 London pages added in May, Fulham among them, are not linked from the `/locations` index at all, yet are indexed through the sitemap. The cause of the eight missing pages needs investigating.

**6. Neighbourhood mentions on an existing page do rank.** The Fulham page ranks 9.4 for "burglar alarms sands end", a neighbourhood it names, which is better than its position for "Fulham" itself.

## Recommendation

**Do not add ten new pages.** At current demand, ten more template pages would most likely rank like the existing south-west pages: page two with no clicks. They would also increase the risk of Google treating the location section as near-duplicate, at a time when eight existing pages, the home town among them, are not indexed.

**1. First, get the eight unindexed area pages into Google.** Find out why they were never crawled, fix the cause, request indexing by hand in Search Console, and link the 14 May pages from the `/locations` index. This is likely to be worth more than any new page.

**2. Then cover Jag's areas on the existing pages.** Fold the neighbourhoods he listed into the pages that already cover those postcodes:
- **Fulham** (SW6, SW10): Parsons Green, West Brompton and Chelsea Harbour.
- **Battersea** (SW8, SW11): Nine Elms, Vauxhall and South Lambeth.
- **Streatham** (SW2, SW16): Brixton Hill, Tulse Hill and Clapham Park.

Use the July `locationExtended` treatment (property stock, neighbourhoods, local FAQs) that lifted the East London pages. The Sands End result shows this pattern works.

**3. Add at most two new pages, and only with real local content:**
- **Clapham,** covering SW4 plus Stockwell and Oval (SW9) and Balham (SW12). It is the only area with measurable demand, and competitors rank there with exactly this grouping.
- **Chelsea and Kensington,** covering SW3, SW5, SW7 and SW10: Chelsea, Brompton, Earl's Court, South Kensington and Knightsbridge. This is high-value residential and commercial property where competitors actively target the area.

Each needs the deeper local treatment, not the base template. Measure each for one month before adding anything further.

**Jag's call:** whether J&L is happy to travel regularly from Brentwood to south-west London. His email implies yes. The pages should not promise response times there.
