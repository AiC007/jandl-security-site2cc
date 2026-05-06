# J&L Security: Project Memory

**Last updated:** 2026-05-06
**Maintained by:** The AI Consultancy (London) Ltd
**Purpose:** Living reference for all AI sessions working on this project. Update after every substantive session.

---

## 1. Client & Business Context

| Field | Detail |
|---|---|
| Client | J&L Security / J&L Alarms |
| Established | 2011 |
| Address | Jubilee House No3, The Drive, Great Warley, Brentwood CM13 3FR |
| Phone (primary) | 0204 538 5925 |
| Phone (secondary) | 0208 220 4770 |
| Email | info@jandlsecurity.co.uk |
| WhatsApp | 442045385925 |
| Services | Burglar alarms, CCTV, fire alarms, access control, security lighting |
| Service area | Essex and Greater London |
| Accreditations | SSAIB, CHAS, FIA, BAFE |

Both phone numbers must appear on every page and in all contact sections. No exceptions.

---

## 2. Technical Stack

| Field | Detail |
|---|---|
| Framework | Next.js 15 |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| GitHub repo | AiC007/jandl-security-site2cc |
| Vercel team | team_afVMAZNN9jXKLV3BIuRVTky6 |
| Vercel project ID | prj_kjQddN8ApAxbOT3e6zr7zKYiRKJ3 |
| Production domain | jandlsecurity.co.uk (apex canonical, www 308-redirects to apex) |
| Redirect domain | jandlalarms.co.uk (both apex and www 308-redirect to jandlsecurity.co.uk) |
| Email (redirect domain) | Microsoft 365 |

---

## 3. Maturity & Status

**Current maturity:** Pilot (post-launch, active SEO phase)

**Migration:** Replit to GitHub + Vercel. Cutover went live 2026-04-12.

### Phase completion as of 2026-05-06

| Phase | Status | Notes |
|---|---|---|
| Phase 1: Pre-launch fixes | Complete | Titles, robots.txt, llms.txt, FAQs H1, canonical URLs |
| Phase 2: Post-launch SEO | Largely complete | Schema, breadcrumbs, GSC submitted, Maps embed done |
| Phase 3: Content expansion | Active. 9 blog posts live. | hmo-fire-alarm-requirements-bs5839 (strengthened 2026-05-03), burglar-alarm-cost-uk-2026 (rebuilt with confirmed J&L pricing 2026-05-06), bs5839-1-and-bs5839-6-explained-2026 (new 2026-05-06), business-cctv-ico-compliance-uk-2026, plus 5 prior posts. Matrix pages: 5 priority locations enriched 2026-05-03; remaining 45 still thin. |
| Phase 3a: London location expansion | Complete (29 location pages live as of 2026-05-06) | 14 new London boroughs added 2026-05-06: Islington, Hackney, Clapton, Dalston, Camden, Southwark, Woolwich, Westminster, Hammersmith, Battersea, Fulham, Streatham, Finchley, Barnet. Greenwich whyLocal copy lightly enriched. Total location pages: 29 (was 15). |
| Phase 3b: Fire alarm keyword integration | Complete 2026-05-06 | Fire alarms service page rewritten around BAFE-certified maintainer + BS 5839-1/-6 dual-standard coverage, four new service-page FAQs, three new main-FAQs items, two new generic location FAQs (fire alarms + smoke alarms) on every location page, BAFE description updated on about page, homepage Fire Alarms card description updated. Per-slug metaOverrides added to surface BAFE/BS 5839/fire risk assessment keywords on /services/fire-alarms route. |
| Phase 4: Ongoing optimisation | In progress | GSC now monitored; backlinks not started |

---

## 4. GSC Performance Snapshot (as of 2026-05-03)

### Post-migration (last 28 days: 2026-04-05 to 2026-05-03)

| Metric | Value | vs Prior 28 days |
|---|---|---|
| Impressions | 993 | +244% (was 289) |
| Clicks | 7 | -50% (was 14 - see note) |
| CTR | 0.70% | |
| Avg position | ~13 | Was ~36.8 (4-month avg) |

**Note on click drop:** The apparent decline in clicks is caused by the host-variant migration. Branded "j&l security" traffic that formerly hit www.jandlsecurity.co.uk is now on the apex domain and Google's brand SERP has not yet rebuilt around the apex variant. This is expected behaviour for 4-8 weeks post-migration.

### Key pages with impressions (last 28 days)

| Page | Impressions | Avg Position | Notes |
|---|---|---|---|
| /blog/hmo-fire-alarm-requirements-bs5839 | 669 | 12.3 | Dominant SEO asset |
| / (apex homepage) | 212 | 21.1 | Workhorse |
| /blog/business-cctv-ico-compliance-uk-2026 | 45 | 9.4 | Ranking well |
| /about | 33 | 8.9 | Growing |
| /security-lighting-installation/woodford | 19 | 19.8 | First matrix page with traction |

### Top opportunity queries (page 1 within reach)

| Query | Position | Page |
|---|---|---|
| fire alarm requirements for hmo uk | 6.3 | HMO blog |
| hmo fire alarm requirements uk | 7.8 | HMO blog |
| hmo fire alarm regulations | 11.7 | HMO blog |
| hmo fire alarm testing requirements | 11.2 | HMO blog |
| hmo fire alarm requirements | 12.6 | HMO blog |
| hmo smoke alarm requirements | 12.6 | HMO blog |

### High-impression, weak-position local queries (backlog)

Apex homepage is absorbing all of these with no dedicated page:
- fire alarm installer brentwood (82 imp, pos 72)
- fire and security company romford (71 imp, pos 58)
- fire alarm installer upminster (71 imp, pos 76)
- fire alarm systems greater london (50 imp, pos 35)
- fire alarm testing brentwood (49 imp, pos 64)
- fire alarm installer romford (46 imp, pos 64)
- burglar alarms chelmsford (45 imp, pos 87)
- intruder alarm romford (38 imp, pos 61)
- burglar alarm installation greenwich (33 imp, pos 77)
- intruder alarm ilford (26 imp, pos 30)

These require dedicated, query-matched location landing pages to convert impressions into clicks.

---

## 5. Open Issues (as of 2026-05-06)

### Immediate actions required

1. **Diagnose branded SERP CTR drop.** Branded queries ("j&l security", "j&l alarms") have 0 clicks in the post-migration window. Manually check the SERP in a clean browser to see what is ranking and whether the sitelinks/knowledge panel have rebuilt around the apex domain. (Carried from 2026-05-03 - still pending.)

2. **50-page service-location matrix still not generating impressions.** Only 7 pages have any impressions in the last 28 days out of 85 submitted URLs. Either thin content or internal linking is too weak. PARTIAL PROGRESS 2026-05-03: 5 priority locations (Brentwood, Romford, Ilford, Chelmsford, Upminster) enriched with localSecurityContext, propertyTypes, keyIndustries, and 4 location-specific FAQs each; SSAIB/BAFE/FIA/CHAS accreditation strip added to all 50 matrix pages. Remaining 45 locations still thin and pending. (Carried from 2026-05-03 - separate from the 14 new location-hub pages added 2026-05-06.)

3. **Lint warning in app/about/page.tsx.** Pre-existing `@typescript-eslint/no-unused-vars` warning on `CheckCircle` import. Not blocking the build but should be cleaned up in a future session. (Still pending after 2026-05-06 round.)

4. **`serviceLocationMatrix` extension for 14 new London boroughs (NEW).** The 14 new London location pages added 2026-05-06 do not yet have matching entries in the `serviceLocationMatrix` for high-intent service-location combos (e.g. burglar-alarm-installation-islington, cctv-installation-hammersmith, fire-alarm-installation-barnet). Flagged in the original content pack as a deferred follow-up. Should be a focused next round.

5. **Lighthouse SEO audit on a new location page (NEW).** Original pack asked for a Lighthouse SEO score check on one new location page after deploy. Not run in 2026-05-06 session because the local CLI lacked Lighthouse. Run from a desktop browser against `https://jandlsecurity.co.uk/locations/islington` and flag any score below 90.

### Medium-term content priorities

6. **Lift HMO blog post from positions 11-13 to page 1.** DONE 2026-05-03. Comparison table, pricing transparency section, 6-question FAQ block, internal links to Brentwood/Romford and fire alarm service page added; dateModified bumped to 2026-05-03; ranking impact to be reviewed at 8-week GSC checkpoint.

7. **Confirmed J&L pricing across burglar alarm article and llms files.** DONE 2026-05-06. Pyronix Enforcer V11 standard wireless package (from £485 + VAT), 11 accessory line items, Homecontrol 2.0 app (£48/£30 + VAT), 24-hour monitoring (from £105 + VAT/year), maintenance (from £120/£180 + VAT/year for residential/commercial). Replaced previous indicative residential maintenance range (£80-£150/year). Sourced verbatim from Jag's email of 5 May 2026. All prices appear as "from £X + VAT" with the standing free-survey caveat.

8. **BS 5839 explainer article.** DONE 2026-05-06. New post `bs5839-1-and-bs5839-6-explained-2026` (~2,150 words, 5 FAQs) covering scope of each part, categories M/L1-L5/P1/P2, grades A through F, comparison table, BAFE rationale, maintenance obligations. Sits as the broader companion to the existing HMO post. Internal links to /services/fire-alarms, /blog/hmo-fire-alarm-requirements-bs5839, /contact all verified.

9. **14 new London location pages.** DONE 2026-05-06. Total location pages now 29 (15 original + 14 new). Sitemap rose from 86 to 100 URLs after `app/sitemap.ts` was fixed to source the location list from `lib/data.ts`.

10. **Fire alarm keyword set integration.** DONE 2026-05-06. Eight target keywords (Fire Alarm Installations, BAFE fire alarm maintainers, fire risk assessments, smoke alarm installs, smoke alarm repair, fire alarm servicing, BS 5839-1, BS 5839-6) now integrated across services page, homepage card, about page, every location page (via locationFaqs template), main FAQs page, and metadata.

11. **Martyn's Law content cluster.** Terrorism Protection of Premises Act 2025, in force Spring 2027. 12-22 month window for content positioning. Every commercial premises over 200 capacity is running compliance reviews now. Content target: "Martyn's Law commercial security checklist Essex", "standard tier compliance requirements", "venue security audit". (Carried from 2026-05-03 - still pending.)

12. **Backlinks not started.** Register on: Checkatrade, Trustpilot, Yell, Thomson Local, FreeIndex, BSIA member directory, NSI search results, supplier partner pages (Pyronix, Uniview, Advanced, Paxton, Comelit). (Carried from 2026-05-03 - still pending.)

### Scheduled reviews

- **8-week GSC review:** 2026-06-07
- **12-week GSC review:** 2026-07-05
- **Post-amendment ranking review:** 2026-06-06 (4 weeks after the amendment landed; check whether the new locations and BS 5839 article are picking up impressions)

---

## 6. Sector & Competitive Intelligence

### Market tailwinds

- UK fire alarm and detection market forecast to reach £5.6bn by 2030
- UK security market growing at 7.30% CAGR to 2033
- 94% of buyers prioritise proof of competence over price (NSI 2026)
- 79% rate independent certification as the strongest trust signal
- 82% of UK SMB video surveillance users considering system replacement (Security World Market)

### Regulatory drivers

- **HMO fire safety (BS 5839-6):** Already ranked. Grade D1/A is the standard reference for landlords.
- **Martyn's Law (Terrorism Protection of Premises Act 2025):** Royal Assent April 2025, in force Spring 2027. Standard tier: 200-799 capacity. Enhanced tier: 800+ capacity. All commercial clients in hospitality, retail, education, healthcare are affected.
- **ICO CCTV Code of Practice:** Second blog post already ranked at position 9.4.

### Direct competitors (from SERP data)

- Jackson Fire & Security (Romford/Ilford): direct local competitor; J&L appearing in searches for Jackson brand
- idealelectricalsolutions.co.uk: competes on HMO fire content
- firecareandsecurity.co.uk: direct competitor in fire/security installation
- letavo.co.uk: HMO management software; content-led competitor
- powerpillar.co.uk: electrical safety; competes on HMO content

---

## 7. Content in Production

| URL | Status | Topic |
|---|---|---|
| /blog/hmo-fire-alarm-requirements-bs5839 | Live, ranking | HMO fire alarm regulations, BS 5839-6 |
| /blog/business-cctv-ico-compliance-uk-2026 | Live, ranking | ICO CCTV compliance for UK businesses |
| /blog/burglar-alarm-cost-uk-2026 | Live, J&L confirmed pricing as of 2026-05-06 | Burglar alarm installation costs UK 2026 |
| /blog/bs5839-1-and-bs5839-6-explained-2026 | Live as of 2026-05-06 | Plain-English BS 5839-1 and BS 5839-6 explainer |
| /blog/cctv-installation-guide-essex | Live | Essex CCTV install guide |
| /blog/how-to-choose-security-company | Live | 7 questions before hiring a security installer |
| /blog/insurance-approved-burglar-alarms-uk-2026 | Live | What UK insurers actually require |
| /blog/wired-vs-wireless-burglar-alarms-essex | Live | Wired vs wireless decision guide |
| /blog/why-does-my-burglar-alarm-keep-going-off | Live | False alarm diagnostic guide |
| /locations/* | 29 pages live as of 2026-05-06 | Original 15 locations + 14 new London boroughs (Islington, Hackney, Clapton, Dalston, Camden, Southwark, Woolwich, Westminster, Hammersmith, Battersea, Fulham, Streatham, Finchley, Barnet) |
| /services/fire-alarms | Live with BAFE-certified hero + 4 new FAQs as of 2026-05-06 | Fire alarms service hub |
| /faqs | Live with 3 new fire-alarm FAQs as of 2026-05-06 | Main FAQs hub |
| /llms.txt, /llms-full.txt | Refreshed 2026-05-06 | LLM-readable business summary; 14 new boroughs grouped by direction; J&L confirmed pricing; BS 5839 article entry |
| /sitemap.xml | 100 URLs as of 2026-05-06 | Up from 86; sitemap.ts now sources location list from lib/data.ts |

---

## 8. Content Roadmap (Next 12 Weeks)

See `/docs/content-calendar-2026-05.md` for full content calendar with query targets and briefs.

Priority sequence:
1. Strengthen HMO blog post (quick win, positions 11-13)
2. Martyn's Law commercial security cluster (3 posts, Spring 2027 deadline)
3. CCTV ICO compliance follow-ups (Subject Access Request template, DPIA guide)
4. Location landing pages: Brentwood, Romford, Upminster, Ilford, Chelmsford rewrites (service-specific, not generic)
5. Alarm cost guide ("How much does a burglar alarm cost in 2026?")

---

## 9. Key Decisions & Conventions

- UK English throughout. No emojis. No em dashes.
- Both phone numbers on every page.
- Apex domain is canonical. www always 308-redirects.
- Sitemap: https://jandlsecurity.co.uk/sitemap.xml (85 URLs, healthy as of 2026-05-02)
- GSC property: sc-domain:jandlsecurity.co.uk (domain property, covers apex and www)
- Legacy Replit URLs (/tools, /city-security, /faqs on www host) allowed to 404 naturally. No redirects.
- Content maturity: Pilot. No demo shortcuts, no production-grade complexity unless instructed.
- Code standard: Vibe Coding Loop (Frame, Decompose, Start, Review, Test, Refine, Checkpoint)

---

## 10. File Index

| File | Purpose |
|---|---|
| /CLAUDE.md | Project identity, technical stack, standards |
| /memory.md | This file: living project memory |
| /docs/site-audit-2026-04-07.md | Full site audit from pre-launch phase |
| /docs/improvement-roadmap-2026-04.md | Phase 1-4 task roadmap from April 2026 (historical) |
| /docs/gsc-report-2026-05-03.md | First post-migration GSC + sector analysis |
| /docs/content-calendar-2026-05.md | Content calendar (created May 2026) |
| /docs/2026-05-06-client-amendments-content-pack.md | Source-of-truth content pack for the 5 May client amendments |
| /docs/2026-05-06-pr-body.md | PR body for #2 (Client amendments: J&L Security, 5 May 2026) |
| /docs/2026-05-06-implementation-summary.md | Internal record of what was implemented and shipped on 2026-05-06 |
| /docs/2026-05-06-jag-confirmation-email.md | Draft email to Jag confirming the amendments are live (operator sends; do NOT auto-send) |

---

## 11. Last Session Summary

### 2026-05-06: Client amendments from Jag's email of 5 May 2026

**Scope.** Five-phase content and SEO amendments delivered end-to-end: feature branch, PR, Vercel preview verification, operator approval, squash-merge to main, production deployment, live verification, deliverables.

**Phases shipped.**
1. Burglar alarm cost article rebuilt around confirmed J&L 2026 pricing (Pyronix Enforcer V11 from £485 + VAT, full accessory pricing, app/monitoring/maintenance starting prices, two-table summary, two new FAQs).
2. 14 new London location pages (Islington, Hackney, Clapton, Dalston, Camden, Southwark, Woolwich, Westminster, Hammersmith, Battersea, Fulham, Streatham, Finchley, Barnet) plus light Greenwich enrichment. Total location pages: 29 (was 15).
3. Fire alarm keyword set integrated across services page, homepage card, about page accreditations block, every location FAQ block, main FAQs page, and metadata.
4. New BS 5839-1 and BS 5839-6 explainer article (~2,150 words, 5 FAQs, JSON-LD complete).
5. /llms.txt and /llms-full.txt updates: regional London groupings, BAFE-certified phrasing, J&L confirmed pricing, BS 5839 article entry, plus per-location summaries for the 14 new boroughs in /llms-full.txt.

**One verification follow-up.** `app/sitemap.ts` had the location list hardcoded. Fixed to source from `lib/data.ts`. Sitemap URL count rose from 86 to 100.

**Decisions worth remembering.**
- FAQ architecture: kept inline in `app/faqs/page.tsx`. Reason: the page uses a richer category-with-icon structure (Lucide React component icons keyed per category) that does not fit the simple `{id, question, answer, category}` shape exported (and currently unused) from `lib/data.ts`. Migrating would either drop the icons or require an extra grouping layer for marginal benefit. The unused `faqs` export in `lib/data.ts` is left in place; cleanup is out of scope.
- About page BAFE rendering: kept the `name: 'BAFE'` badge label short (the rendering uses it inside a small h-16 logo placeholder that breaks visually if the long phrase is forced into it). Updated the `description` field to lead with "BAFE-certified fire alarm maintainer (SP203-1 scheme). Independent third-party certification covering... BS 5839-1 commercial and BS 5839-6 domestic and HMO fire alarm systems." Same SEO/communication outcome, no layout breakage.
- Per-location summaries in /llms-full.txt: the file did not previously have per-location summaries. Added a new "London Location Summaries (14 new boroughs added May 2026)" section anyway because the pack provided a format and richer LLM context for the new boroughs is the spirit of the request.

**Pre-existing items intentionally left alone (per pack guidance):**
- ESLint `CheckCircle` unused import warning on `app/about/page.tsx:3:32`.
- Five em dashes in `app/locations/[location]/page.tsx` including one inside the `locationFaqs` template ("J&L Security is based in Brentwood, Essex —"). Pack explicitly said not to refactor existing copy.

**Production verification (post-merge live on https://jandlsecurity.co.uk):** all 24 spot-checked URLs return HTTP 200; new content present on all expected pages; sitemap shows 100 URLs with all 14 new locations and the BS 5839 article; both phone numbers visible everywhere expected; JSON-LD types (LocalBusiness/ProfessionalService, FAQPage, BreadcrumbList for locations; BlogPosting + FAQPage + BreadcrumbList for the new article) all parse and emit cleanly.

**Merge:** PR [#2](https://github.com/AiC007/jandl-security-site2cc/pull/2) squash-merged to main as commit `0d6ae32d74cabb7a87992cdbb1796ef52b8bc799` after explicit operator approval.

**Deliverables saved to /docs:**
- `2026-05-06-implementation-summary.md`: full internal record (this work).
- `2026-05-06-jag-confirmation-email.md`: draft confirmation email to Jag, NOT sent. Operator sends from Wendy AI / The AI Consultancy.

**Next actions for whoever opens the next session.**
1. Send the Jag confirmation email (operator action).
2. Run a Lighthouse SEO audit on `https://jandlsecurity.co.uk/locations/islington`; flag anything below 90 on the SEO category.
3. When ready: do the deferred `serviceLocationMatrix` extension for high-intent service-location combos for the 14 new London boroughs (e.g. burglar-alarm-installation-islington, cctv-installation-hammersmith, fire-alarm-installation-barnet).
4. Watch GSC at the 4-week post-amendment review (2026-06-06) for impressions on new locations and the BS 5839 article.
