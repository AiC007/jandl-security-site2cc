# J&L Security: Google Search Console & Sector Report

**Date:** 2026-05-03
**Property:** sc-domain:jandlsecurity.co.uk
**Migration milestone:** Replit → GitHub + Vercel cutover live 2026-04-12
**Maturity classification:** Pilot (post-launch SEO phase)
**Source data:** Google Search Console MCP (web search, all-data state) + sector research (NSI/BAFE, government, industry analyst sources)

---

## 1. Executive Summary

The Vercel cutover has had a clear and measurable positive impact on indexability and impression volume, but click conversion has not yet caught up. Net read:

- **Impressions in the four weeks post-migration: ~993** vs ~289 in the prior four weeks. A 3.4x uplift.
- **Average position improved from ~36.8 (4-month) to ~13 (last 4 weeks)**, driven mostly by a single blog post entering Google's evaluation window for HMO fire alarm queries.
- **Clicks dropped from 14 to 7 over the same comparison.** The drop is concentrated on branded "j&l security" searches (homepage CTR 14.8% → 0%), and the cause is almost certainly the host-variant migration: traffic that used to hit `www.jandlsecurity.co.uk` is now hitting the apex `jandlsecurity.co.uk`, and Google's brand SERP/sitelinks are still being rebuilt.
- **One blog post is now the dominant SEO asset:** `/blog/hmo-fire-alarm-requirements-bs5839` produced 669 impressions and 4 clicks in the last 28 days from zero pre-migration. It is ranking position 12.3 for HMO fire alarm queries. This is the single most important insight in this report.
- **Local service pages are not yet performing.** The sitemap has 85 URLs but only 7 distinct pages have generated any impressions in the last 28 days. The 50-page locations matrix is indexed but not yet ranking on any meaningful local-intent query.
- **Two cleanup actions are blocking clean GSC data:** (a) the `www.jandlsecurity.co.uk/sitemap.xml` from the Replit era is still submitted, has 1 error, and has not been refreshed since 2025-11-04; (b) old www-host URLs (`/tools`, `/tools/cctv-storage-calculator`, `/city-security`, `/faqs` on www) are still being shown impressions.

---

## 2. Period Definitions

| Window | Range | Days |
|---|---|---|
| Last 4 months | 2026-01-03 → 2026-05-03 | 122 |
| Last 4 weeks (post-migration) | 2026-04-05 → 2026-05-03 | 29 |
| Prior 4 weeks (pre-migration baseline) | 2026-03-08 → 2026-04-04 | 28 |

Note: the Vercel cutover went live on 2026-04-12, so the "last 4 weeks" window includes 7 days of pre-cutover data. The impression curve confirms this: daily impressions sat at ~5–15 from 2026-04-05 to 2026-04-13, then climbed to ~50–100/day from 2026-04-14 onwards. The migration effect is therefore more pronounced than the headline 4-week comparison shows.

GSC has a 2–3 day data lag. 2026-05-02 and 2026-05-03 figures will firm up over the next few days.

---

## 3. 4-Month Overview (2026-01-03 → 2026-05-03)

| Metric | Value |
|---|---|
| Clicks | 24 |
| Impressions | 3,208 |
| CTR | 0.75% |
| Avg position | 36.8 |

**Daily trend characteristics:**
- January and February: ~25–40 impressions/day, average position consistently in the 50–65 range. This is the Replit-era baseline. Site was indexed, but not ranking on commercially useful positions.
- Early March (4–11 March): a sharp drop in impressions (3–17/day) but improvement in average position to ~6–35. This is consistent with Google reducing crawl/visibility ahead of the migration window, and a few queries appearing in top positions for low-volume long-tail terms.
- 12–25 March: gradual recovery, with a notable spike on 2026-03-25 (7 clicks, 26 impressions, position 4.6). This is a single commercially valuable day.
- 12 April onwards (post-cutover): sustained climb. 14 April hit 89 impressions, peak so far is 2026-05-01 with 104 impressions.

---

## 4. Last 4 Weeks Performance (Post-Migration)

| Metric | Value |
|---|---|
| Clicks | 7 |
| Impressions | 993 |
| CTR | 0.70% |
| Avg position | ~13 (vs 36.8 over 4 months) |

### 4.1 Device Split

| Device | Clicks | Impressions | CTR | Avg Pos |
|---|---|---|---|---|
| Desktop | 4 | 755 | 0.53% | 15.8 |
| Mobile | 3 | 236 | 1.27% | 8.6 |
| Tablet | 0 | 2 | 0% | 10 |

Mobile users are 2.4x more likely to click despite seeing 3.2x fewer impressions. Mobile is also the higher-intent surface for local installer searches. This is consistent with the wider sector and reinforces that the mobile UX (CTAs, click-to-call, page speed) deserves attention.

### 4.2 Geographic Split

| Country | Clicks | Impressions | CTR | Avg Pos |
|---|---|---|---|---|
| United Kingdom | 7 | 664 | 1.05% | 17.1 |
| Brazil | 0 | 22 | 0% | 6.8 |
| Canada | 0 | 8 | 0% | 5.9 |
| Argentina | 0 | 4 | 0% | 4.5 |
| Other (12 countries) | 0 | ~30 | 0% | 1–10 |

100% of clicks are UK. The international impressions are almost entirely the HMO fire alarm blog post being shown for technical/regulatory queries internationally. This is benign noise. Real commercial signal is the 664 UK impressions.

### 4.3 Pages Generating Impressions

| Page | Clicks | Imp | CTR | Pos |
|---|---|---|---|---|
| `/blog/hmo-fire-alarm-requirements-bs5839` | 4 | 669 | 0.60% | 12.3 |
| `/` (apex homepage) | 3 | 212 | 1.42% | 21.1 |
| `/about` (apex) | 0 | 33 | 0% | 8.9 |
| `/blog/business-cctv-ico-compliance-uk-2026` | 0 | 45 | 0% | 9.4 |
| `/security-lighting-installation/woodford` | 0 | 19 | 0% | 19.8 |
| `www.jandlsecurity.co.uk/` (legacy) | 0 | 44 | 0% | 8.3 |
| `www.jandlsecurity.co.uk/tools` (legacy) | 0 | 3 | 0% | 4.0 |

**Critical observation:** only the apex homepage, two blog posts, the about page, and one Woodford location page have generated any impressions in 28 days. The 50-page locations matrix and the service detail pages built during the Phase 3 expansion are not yet indexed-and-served. Either Google has not finished re-evaluating them post-migration, or internal linking and on-page signals are not strong enough yet.

---

## 5. Top Queries Analysis (Last 4 Weeks)

### 5.1 Branded queries

| Query | Clicks | Imp | Pos |
|---|---|---|---|
| j&l alarms | 0 | 12 | 7.3 |
| j & l security integrators company | 0 | 5 | 6.4 |
| j&l security | 0 | 4 | 5.5 |
| jl security | 0 | 1 | 7.0 |
| jla fire and security | 0 | 1 | 56 |

**Branded impressions (~23) but zero clicks in the post-migration window.** Pre-migration branded query "j&l security" delivered 2 clicks at position 3.8. After the migration, the brand search now shows the apex result at position 5.5 with a 0% CTR. Two diagnostic possibilities:

1. The SERP has changed: a competitor or directory listing is outranking the apex domain, or sitelinks/knowledge panel haven't rebuilt around the apex variant yet.
2. The page title or meta description change has cost CTR.

This is the highest-priority diagnostic to run manually. Open Google in a clean browser and search "j&l security" / "j&l alarms" to see what's in the SERP and where J&L ranks visually.

### 5.2 HMO fire alarm cluster (the breakout opportunity)

All ranking on `/blog/hmo-fire-alarm-requirements-bs5839`:

| Query | Imp | Pos | Notes |
|---|---|---|---|
| l1 fire alarm requirements | 46 | 30.8 | High-volume regulatory query |
| hmo fire alarms epsom | 14 | 53.5 | Geographic mismatch - Surrey not Essex |
| hmo fire alarm requirements | 12 | 12.6 | **Page 1 within reach** |
| hmo fire alarm regulations | 6 | 11.7 | **Page 1 within reach** |
| fire alarm requirements for hmo uk | 6 | 6.3 | Already on page 1 |
| hmo fire alarm system requirements | 5 | 16.6 | |
| hmo fire alarm testing requirements | 5 | 11.2 | **Page 1 within reach** |
| hmo smoke alarm requirements | 5 | 12.6 | **Page 1 within reach** |
| hmo fire detection requirements | 4 | 24.8 | |
| hmo fire alarm requirements uk | 4 | 7.8 | Already on page 1 |

**Read:** the HMO blog post is competing directly with `idealelectricalsolutions.co.uk`, `letavo.co.uk`, `powerpillar.co.uk`, `firecareandsecurity.co.uk` and `thehmomortgagebroker.co.uk`. J&L is at the door of page 1 on six commercially valuable HMO regulatory queries. Lifting any of these from position 11–13 to 5–7 would meaningfully change click volume.

### 5.3 Local service queries (highest-impression long-tail)

These are the queries pulling impressions from the apex homepage at weak positions. They are the optimisation backlog:

| Query | 4-month Imp | Pos | Status |
|---|---|---|---|
| fire alarm installer brentwood | 82 | 72.2 | Apex homepage, weak match |
| fire and security company romford | 71 | 58.4 | Apex homepage |
| fire alarm installer upminster | 71 | 76.0 | Apex homepage |
| fire alarm systems greater london | 50 | 35.4 | Apex homepage |
| fire alarm testing brentwood | 49 | 64.3 | Apex homepage |
| fire alarm installer romford | 46 | 64.0 | Apex homepage |
| burglar alarms chelmsford | 45 | 87.4 | Apex homepage |
| fire alarm company romford | 45 | 59.2 | Apex homepage |
| fire alarm installation romford | 43 | 61.2 | Apex homepage |
| fire alarms upminster | 41 | 64.3 | Apex homepage |
| fire alarm systems essex | 41 | 65.7 | Apex homepage |
| intruder alarm romford | 38 | 60.7 | Apex homepage |
| fire alarms chelmsford | 34 | 42.3 | Apex homepage |
| burglar alarm installation greenwich | 33 | 76.5 | Apex homepage |
| fire alarm maintenance greenwich | 31 | 44.5 | Apex homepage |
| burglar alarm installation brentwood | 31 | 42.7 | Apex homepage |
| burglar alarms in romford | 27 | 30.9 | Apex homepage |
| alarms ilford | 27 | 78.1 | Apex homepage |
| intruder alarm ilford | 26 | 29.8 | Apex homepage |

**Read:** these are textbook "high impressions, weak position" queries. Google is showing the homepage because it doesn't have a stronger destination page for "fire alarm installer brentwood" specifically. The 50-page locations matrix should be capturing these, but it isn't yet. Possible reasons: thin content per location page, weak internal linking, late indexing post-migration, or service-page content not aligned with the query intent (the queries are specific - "fire alarm installer", "burglar alarm installation" - the matrix pages may be too generic).

### 5.4 Competitor brand searches

| Query | Imp | Notes |
|---|---|---|
| jackson fire & security romford | 35 | Direct competitor |
| jackson fire & security ilford | 16 | Direct competitor |

J&L is appearing in SERPs for searches about Jackson Fire & Security, a direct competitor. Useful for reputation/competitive positioning, but not a click driver right now.

---

## 6. Pre vs Post Migration Comparison (Pages)

| Page | Pre clicks | Post clicks | Pre imp | Post imp | Pos change |
|---|---|---|---|---|---|
| `/` apex | 8 | 3 | 242 | 212 | 24.9 → 21.1 (improved) |
| `www./` | 4 | 0 | 27 | 44 | 3.6 → 8.3 (degraded, expected) |
| `/blog/hmo-fire-alarm-requirements-bs5839` | 0 | 4 | 0 | 669 | new entrant |
| `/about` apex | 0 | 0 | 3 | 33 | 6.3 → 8.9 |
| `/blog/business-cctv-ico-compliance-uk-2026` | 0 | 0 | 0 | 45 | new entrant |
| `/security-lighting-installation/woodford` | 0 | 0 | 0 | 19 | new entrant |

**Read:**
- The HMO blog post is the entire upside in this window.
- The apex homepage is the workhorse: it lost click volume but improved average position. The lost clicks are the branded "j&l security" cohort, which moved off the www variant but hasn't fully recovered on apex yet.
- The www variant is still in Google's index and still receiving impressions. Vercel is 308-redirecting to apex, so this should resolve naturally over the next 4–8 weeks as Google consolidates signals.

---

## 7. Indexing & Sitemap Issues

### 7.1 Sitemap state

| Sitemap | Submitted | Last fetched | URLs | Errors | Warnings |
|---|---|---|---|---|---|
| `https://jandlsecurity.co.uk/sitemap.xml` | 2026-04-12 | 2026-05-02 | 85 | 0 | 1 |
| `https://www.jandlsecurity.co.uk/sitemap.xml` | 2025-11-04 | 2025-11-20 | (null) | 1 | 0 |

**Action required:** delete the `www.jandlsecurity.co.uk/sitemap.xml` entry from GSC. It's a Replit-era artifact that's now dead, throwing an error, and will not refresh because the www host now 308-redirects to apex. Leaving it in place pollutes the GSC error count.

The apex sitemap is healthy: 85 URLs submitted, refreshed by Google two days ago, zero errors. The 1 warning is worth checking in the GSC UI but is not blocking.

### 7.2 Legacy URLs still receiving impressions

These are www-host pages from the Replit era that have not been deleted:

- `www.jandlsecurity.co.uk/tools` (3 imp, pos 4)
- `www.jandlsecurity.co.uk/tools/cctv-storage-calculator` (0 imp last 4 weeks, 7 over 4 months)
- `www.jandlsecurity.co.uk/city-security` (0 imp last 4 weeks)
- `www.jandlsecurity.co.uk/faqs` (0 imp last 4 weeks)
- `www.jandlsecurity.co.uk/about` (25 imp over 4 months, 0 last 4 weeks)

The 7 April 2026 site audit decided these would be allowed to 404 with no redirects. That decision is consistent with the data: traffic to these URLs is negligible and has been declining. The www-host index entries will fall out of Google over the next 2–6 months.

### 7.3 Indexing coverage gap

Sitemap has 85 URLs. Only 7 distinct pages have generated impressions in the last 28 days. There is no way to know from MCP data alone whether the remaining 78 are indexed-but-not-ranked or not-indexed. Run the GSC Pages report manually to confirm. The 50-page locations matrix is the most likely source of the gap and the highest-leverage area to investigate.

---

## 8. Sector & Competitive Context (External Research)

### 8.1 UK fire and security market - macro

- **NSI/BAFE Fire Safety Buyers Report 2026** (released April 2026): 94% of decision-makers prioritise proof of competence over price; 77% expect to increase fire safety spending over the next 5 years; 79% rate independent certification as the strongest trust signal.
- **UK security market:** projected to grow from ~USD 7.7bn (2026) to ~USD 13.5bn by 2033 at a 7.30% CAGR (Transpire Insight).
- **UK fire alarm and detection market:** forecast to reach £5.6bn by 2030.
- **European monitored alarms (home + small business):** projected to grow at 4.6% CAGR to 24.5m systems (Berg Insight, Feb 2026).

### 8.2 Regulatory drivers J&L can ride

- **Martyn's Law (Terrorism Protection of Premises Act 2025):** Royal Assent April 2025, comes into force Spring 2027. Standard tier (200–799 capacity venues): public protection procedures required. Enhanced tier (800+): physical security measures, monitoring, information security required. Affects bars, pubs, restaurants, retail, shopping centres, places of worship, education sites, healthcare. **Strategic implication:** every commercial premises J&L serves with capacity over 200 will be running a compliance review between now and Spring 2027. This is a 12-to-22-month window for content and outreach.
- **HMO fire safety:** BS 5839-6 Grade D1 / Grade A is now the standard reference for HMO landlords. The HMO blog post is already ranking. This is the existing content advantage.
- **ICO CCTV Code of Practice:** the second blog post (`/blog/business-cctv-ico-compliance-uk-2026`) is already ranking position 9.4 with 45 impressions in 4 weeks. Compliance-themed CCTV content is a working format.

### 8.3 Competitive landscape for HMO fire alarm content

J&L's HMO post competes against:
- `idealelectricalsolutions.co.uk` (electrician-led, broad reach)
- `letavo.co.uk` (HMO management software, content-marketing-led)
- `powerpillar.co.uk` (electrical safety company)
- `firecareandsecurity.co.uk` (direct competitor in fire/security installation)
- `thehmomortgagebroker.co.uk` (HMO finance, content depth)

This is a winnable cluster. None of these are NSI-approved fire installers with hands-on installation evidence. J&L can differentiate with: actual install case studies, certification badges, and BS 5839 system selection guidance.

### 8.4 Industry trends to factor into roadmap

- **Cloud and open-platform security systems** (Proforce Security): standard expectation now, no longer a differentiator.
- **AI-powered video analytics**: mainstream in commercial procurement (Business Watch Group).
- **Integrated fire + security + access control** as a single offer: 82% of UK SMB video surveillance users are considering replacement (Security World Market). Replacement window = sales window.
- **Skills shortage** (Skills for Security at TSE 2026): industry workforce constraints mean small certified installers can win on availability and responsiveness.

---

## 9. Opportunity Targets

Three buckets, ordered by effort-to-value ratio.

### 9.1 Quick wins (low effort, near-term)

1. **Recover branded SERP.** Diagnose why "j&l security" / "j&l alarms" CTR is now 0%. Check the SERP visually, fix homepage title/meta if needed, request Google Business Profile review.
2. **Delete the www-host sitemap from GSC.** One click, removes the persistent error.
3. **Push the HMO post from page 2 to page 1 for the 6 queries currently at position 11–13.** Add: a comparison table of Grade A / D1 / LD1, a pricing transparency section ("£X–£Y per detection point"), updated 2026 reference to BS 5839-6 amendments, an FAQ block targeting the exact long-tail queries listed in §5.2.

### 9.2 Medium-term content build

1. **Service-by-location landing pages that match query intent.** "Fire alarm installer Brentwood" wants a page titled exactly that with: service description, installation process, certification badges, postcode coverage, before/after install photos, BS 5839 grade selection guidance, click-to-call. Same template for Romford, Upminster, Ilford, Chelmsford, Greenwich. Today's matrix pages are too generic to compete.
2. **Martyn's Law content cluster.** "Martyn's Law commercial security checklist", "Standard tier compliance for pubs/restaurants", "Enhanced tier requirements for venues 800+ capacity". Spring 2027 deadline = 12-to-22-month content runway.
3. **CCTV ICO compliance follow-ups.** The existing post is ranking at position 9.4. Add: Subject Access Request response template, DPIA for CCTV template, signage compliance guide.

### 9.3 Longer-term plays

1. **NSI/SSAIB certification badge prominence.** 94% of buyers prioritise certification per the NSI 2026 report. Audit current site for visible certification proof on every service page, not just /about.
2. **Vertical case studies.** HMO landlords, retail, hospitality (Martyn's Law tier 1), schools, healthcare. Each case study targets a distinct query cluster.
3. **Backlinks from local trade and directory sites.** Phase 4 of the April roadmap flagged this as not started. Checkatrade, Trustpilot, Essex Chamber of Commerce, BSIA member directory, NSI search results.

---

## 10. Risks & Data Quality Notes

- **4 weeks is a short window.** The post-migration uplift in impressions is real, but Google's reranking after a migration takes 8–12 weeks to fully settle. Position averages will continue to move. Re-run this analysis at 8 weeks (2026-06-07) and 12 weeks (2026-07-05).
- **GSC underreports clicks for low-volume sites** because of privacy thresholds. With 7 clicks in 28 days, every individual click matters and the absolute numbers should be treated as directional.
- **The www-host data drag** is dragging the comparison numbers. The "click drop" pre vs post is heavily influenced by the host migration, not by genuine demand decline.
- **Position averages are weighted by impressions**, so the 4-month average position of 36.8 is dominated by the high-impression weak-position local queries (positions 60–80). When local pages start ranking, the headline number will actually move *up* for a while as more results enter the dataset.
- **Memory is 20 days old.** The site-audit and improvement-roadmap docs in `/docs/` reflect early April thinking. Some Phase 4 items (GSC verified, sitemap submitted) are now done; others (backlinks, content cadence) still open. Re-confirm with operator before acting on memory-derived assumptions.

---

## 11. Suggested Next Steps for Operator Review

These are flagged for the Head Chef to decide on, not actioned unilaterally.

1. Decide whether to commission location landing-page rewrites for the top 5 query clusters (Brentwood, Romford, Upminster, Ilford, Chelmsford). Estimated effort: 1.5–2 days of content + dev work.
2. Decide whether to extend the HMO post into a 5-page HMO content hub. Estimated effort: 1 day per page.
3. Confirm whether Martyn's Law content is in-scope for J&L's commercial offer. If yes, plan a 3-post sequence aligned to the Spring 2027 deadline.
4. Confirm priority on diagnosing the branded SERP CTR drop. This is the single highest-conversion-impact item in this report.
5. Confirm whether to run the same MCP report at the 8-week mark (2026-06-07) for migration-effect verification.

---

## Appendix A: Raw Data Sources

- GSC MCP: `mcp-search-console` server (read-only access, siteOwner permission)
- Sitemap: `https://jandlsecurity.co.uk/sitemap.xml` (85 URLs, last fetched 2026-05-02)
- Sector data: NSI Fire Safety Buyers Report 2026, Berg Insight European Home & Small Business Security Market 2026, Transpire Insight UK Security Market 2026–2033, ProtectUK / Home Office Martyn's Law guidance (April 2025), Security World Market UK SMB survey 2026.
- Site project notes: `/Users/jm/.claude/projects/-Users-jm/memory/project_jandl_security.md`
- Existing project docs: `docs/site-audit-2026-04-07.md`, `docs/improvement-roadmap-2026-04.md`

## Appendix B: GSC Property Details

- Permission: siteOwner
- Property type: domain (covers both apex and www subdomains)
- Sitemaps submitted: 2 (1 active, 1 legacy with error - recommend deletion)
- Verified via DNS TXT (Replit-era token still active)
