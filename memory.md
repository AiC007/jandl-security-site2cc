# J&L Security: Project Memory

**Last updated:** 2026-05-03
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

### Phase completion as of 2026-05-03

| Phase | Status | Notes |
|---|---|---|
| Phase 1: Pre-launch fixes | Complete | Titles, robots.txt, llms.txt, FAQs H1, canonical URLs |
| Phase 2: Post-launch SEO | Largely complete | Schema, breadcrumbs, GSC submitted, Maps embed done |
| Phase 3: Content expansion | In progress - 4 blog posts now live | hmo-fire-alarm-requirements-bs5839 (strengthened 2026-05-03), burglar-alarm-cost-uk-2026 (new 2026-05-03), business-cctv-ico-compliance-uk-2026 (existing). Two further posts from the content calendar (see /docs/content-calendar-2026-05.md) are pending. Matrix pages: 5 priority locations enriched 2026-05-03; remaining 45 still thin. |
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

## 5. Open Issues (as of 2026-05-03)

### Immediate actions required

1. **Delete www-host sitemap from GSC.** RESOLVED 2026-05-03 (manual deletion in GSC property settings).

2. **Diagnose branded SERP CTR drop.** Branded queries ("j&l security", "j&l alarms") have 0 clicks in the post-migration window. Manually check the SERP in a clean browser to see what is ranking and whether the sitelinks/knowledge panel have rebuilt around the apex domain.

3. **50-page locations matrix still not generating impressions.** Only 7 pages have any impressions in the last 28 days out of 85 submitted URLs. Either thin content or internal linking is too weak. PARTIAL PROGRESS 2026-05-03: 5 priority locations (Brentwood, Romford, Ilford, Chelmsford, Upminster) enriched with localSecurityContext, propertyTypes, keyIndustries, and 4 location-specific FAQs each; SSAIB/BAFE/FIA/CHAS accreditation strip added to all 50 matrix pages. Remaining 45 locations still thin and pending.

4. **Lint warning in app/about/page.tsx.** Pre-existing `@typescript-eslint/no-unused-vars` warning on `CheckCircle` import (unrelated to today's work). Not blocking the build but should be cleaned up in a future session.

### Medium-term content priorities

5. **Lift HMO blog post from positions 11-13 to page 1.** Add: Grade A/D1/LD1 comparison table, pricing transparency section, FAQ block targeting exact long-tail queries, updated 2026 BS 5839-6 reference. DONE 2026-05-03 (comparison table, pricing transparency section, 6-question FAQ block, internal links to Brentwood/Romford and fire alarm service page added; dateModified bumped to 2026-05-03; ranking impact to be reviewed at 8-week GSC checkpoint).

6. **Martyn's Law content cluster.** Terrorism Protection of Premises Act 2025, in force Spring 2027. 12-22 month window for content positioning. Every commercial premises over 200 capacity is running compliance reviews now. Content target: "Martyn's Law commercial security checklist Essex", "standard tier compliance requirements", "venue security audit".

7. **Backlinks not started.** Register on: Checkatrade, Trustpilot, Yell, Thomson Local, FreeIndex, BSIA member directory, NSI search results, supplier partner pages (Pyronix, Uniview, Advanced, Paxton, Comelit).

### Scheduled reviews

- **8-week GSC review:** 2026-06-07
- **12-week GSC review:** 2026-07-05

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
| /blog/burglar-alarm-cost-uk-2026 | Live - pending client pricing confirmation | Burglar alarm installation costs UK 2026 |

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
| /docs/improvement-roadmap-2026-04.md | Phase 1-4 task roadmap from April 2026 |
| /docs/gsc-report-2026-05-03.md | First post-migration GSC + sector analysis |
| /docs/content-calendar-2026-05.md | Content calendar (created May 2026) |
