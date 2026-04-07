# J&L Security Website: Improvement Roadmap

**Site:** jandlsecurity.co.uk
**Start date:** 7 April 2026
**Target launch:** 8-9 April 2026 (domain connection)
**Objective:** Fix all critical and high-priority issues before launch, then address medium-priority improvements in the following week.

---

## Pre-Launch Notes

- **Google Business Profile:** Already set up by The AI Consultancy. No action needed.
- **Google Search Console:** Verify via DNS TXT record after the production domain (jandlsecurity.co.uk) is connected to Vercel. Do not use the HTML meta tag method; the placeholder has been removed from the codebase.
- **Domain connection:** Connect jandlsecurity.co.uk to Vercel via the Vercel dashboard (Domains settings). Add both the apex domain and www subdomain, with www redirecting to the apex.

---

## Phase 1: Pre-Launch Fixes (7-8 April 2026)

These must be completed before connecting the jandlsecurity.co.uk domain.

### 1.1 Fix Duplicate Title Tag Suffix
**Owner:** Claude Code
**Duration:** 30 minutes
**Priority:** Critical

The root layout.tsx is likely appending "| J&L Security" to all titles, and individual pages are also including it. Check `app/layout.tsx` for a `title.template` in the metadata export. It should be:
```typescript
title: {
  template: '%s | J&L Security',
  default: 'J&L Security - Alarms, CCTV & Fire Protection...',
}
```
Then remove the "| J&L Security" suffix from individual page title strings in:
- app/services/page.tsx
- app/services/[service]/page.tsx
- app/faqs/page.tsx
- app/locations/[location]/page.tsx
- app/about/page.tsx
- app/contact/page.tsx

**Verification:** Check 5 page titles in the browser. Each should show "| J&L Security" exactly once.

### 1.2 Remove Google Verification Placeholder
**Owner:** Claude Code
**Duration:** 5 minutes
**Priority:** Critical

Remove or replace the placeholder `your-google-verification-code` in the metadata. This is likely in `app/layout.tsx` or a shared metadata config.

If the actual GSC verification code is available, insert it. If not, remove the meta tag entirely (DNS verification is preferred anyway).

### 1.3 Fix FAQs Page H1
**Owner:** Claude Code
**Duration:** 15 minutes
**Priority:** High

The emergency banner is being read as the H1. Either:
- Change the banner element from using an implicit/explicit H1 to a `<div>` or `<p>`
- Or ensure the banner text is inside a non-heading element in the Header component

The actual H1 on the FAQs page should be "Frequently Asked Questions" or similar.

### 1.4 Deploy AI-Friendly robots.txt
**Owner:** Claude Code
**Duration:** 15 minutes
**Priority:** High

Replace the current robots.txt (in `app/robots.ts` or `public/robots.txt`) with:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /data/
Disallow: /_next/
Disallow: /admin/

User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: AhrefsBot
Disallow: /
User-agent: SemrushBot
Disallow: /
User-agent: MJ12bot
Disallow: /
User-agent: DotBot
Disallow: /

Crawl-delay: 1

Sitemap: https://jandlsecurity.co.uk/sitemap.xml

# LLM context files
# LLM-Summary: https://jandlsecurity.co.uk/llms.txt
# LLM-Full: https://jandlsecurity.co.uk/llms-full.txt
```

### 1.5 Rewrite llms.txt and Create llms-full.txt
**Owner:** Claude Code
**Duration:** 1 hour
**Priority:** High

**llms.txt** should follow the llmstxt.org specification as a Markdown document:
```markdown
# J&L Security

> Professional security system installation and maintenance across Essex and Greater London. Established 2011.

## Services
- Burglar Alarm Installation and Maintenance
- CCTV System Installation (Uniview)
- Fire Alarm Installation and Servicing (BS 5839-1)
- Access Control and Door Entry Systems
- Security and Emergency Lighting

## Service Areas
Essex (Brentwood, Chelmsford, Basildon, Romford, Ilford, Hornchurch, Barking, Dagenham, Redbridge, Harlow, Epping) and Greater London (Enfield, Stratford, Canary Wharf, Greenwich)

## Contact
- Phone: 0204 538 5925
- Phone (secondary): 0208 220 4770
- Email: info@jandlsecurity.co.uk
- Address: Jubilee House No3, The Drive, Great Warley, Brentwood CM13 3FR
- Emergency: 24/7 available

## Accreditations
SSAIB Approved, CHAS Accredited, FIA Member, BAFE Certified

## Links
- [Services](https://jandlsecurity.co.uk/services)
- [Locations](https://jandlsecurity.co.uk/locations)
- [FAQs](https://jandlsecurity.co.uk/faqs)
- [Contact](https://jandlsecurity.co.uk/contact)
- [Full details](https://jandlsecurity.co.uk/llms-full.txt)
```

**llms-full.txt** should include:
- Full descriptions of each service with pricing indicators
- Detailed service area coverage with postcodes
- All FAQ content
- Supplier partners (Pyronix, Uniview, Advanced, Paxton, Comelit)
- Business history and credentials
- Typical engagement models and timelines

### 1.6 Create OG Image and Logo Files
**Owner:** Manual (requires actual branded images)
**Duration:** 15 minutes
**Priority:** Medium
**Status:** PENDING (requires image files from client or designer)

The `/public/images/` directory has been created but is empty. Two files are needed:
- `og-image.jpg`: 1200x630px branded image for social sharing previews
- `jandl-security-logo.jpg`: Business logo

These are referenced in schema markup and OG meta tags. Without them, social shares and Google knowledge panel will show no image. The client should provide their logo, and a branded OG image should be created (e.g., logo on brand orange background with tagline).

### 1.7 Verify Privacy Policy and Terms Pages
**Owner:** Claude Code
**Duration:** 30 minutes
**Priority:** Medium

Check /privacy and /terms routes exist. If they are placeholder or missing, create basic pages. These are required for UK GDPR compliance before launch.

---

## Phase 2: Post-Launch SEO Improvements (9-14 April 2026)

These should be done in the first week after the domain is connected.

### 2.1 Add Schema to All Pages Missing It
**Owner:** Claude Code
**Duration:** 2-3 hours
**Priority:** High

| Page Type | Schema to Add |
|-----------|--------------|
| /services | Service (one per service listed) + BreadcrumbList |
| /services/[service] | Service + FAQPage + BreadcrumbList |
| /about | AboutPage + Organization + Person (founders) + BreadcrumbList |
| Matrix pages (50) | Service + FAQPage + BreadcrumbList |

Use the same pattern as the existing homepage schema. All schema must be server-rendered JSON-LD (which it will be, since Next.js handles this natively).

### 2.2 Add Breadcrumbs Sitewide
**Owner:** Claude Code
**Duration:** 1-2 hours
**Priority:** High

Create a reusable Breadcrumb component and add it to:
- Service pages: Home > Services > [Service Name]
- Location pages: Home > Locations > [Location Name]
- Service-location matrix pages: Home > Services > [Service] in [Location]
- About: Home > About
- Contact: Home > Contact
- FAQs: Home > FAQs (already has breadcrumbs)

Include BreadcrumbList JSON-LD schema alongside the visual breadcrumbs.

### 2.3 Fix OG and Twitter Tags Per Page
**Owner:** Claude Code
**Duration:** 1 hour
**Priority:** Medium

Audit each page's metadata export and ensure:
- `openGraph.title` is set to the page-specific title (not the sitewide default)
- `openGraph.description` is page-specific
- `twitter.title` and `twitter.description` match or complement the OG tags
- `openGraph.url` is set to the correct canonical URL at jandlsecurity.co.uk

### 2.4 Fix Canonical URLs on Matrix Pages
**Owner:** Claude Code
**Duration:** 1 hour
**Priority:** Medium

Audit the `alternates.canonical` value in the metadata of:
- app/[service]/[location]/page.tsx
- app/locations/[location]/page.tsx

Ensure each canonical URL:
- Uses the jandlsecurity.co.uk domain
- Matches the actual URL path of the page
- Is self-referencing

### 2.5 Embed Google Maps on Contact Page
**Owner:** Claude Code
**Duration:** 30 minutes
**Priority:** Medium

Replace the map placeholder with an actual Google Maps embed iframe for the business address (Jubilee House No3, The Drive, Great Warley, Brentwood CM13 3FR).

### 2.6 Submit to Google Search Console
**Owner:** Manual
**Duration:** 30 minutes
**Priority:** High

After DNS is connected:
1. Verify the site in GSC (DNS or HTML tag method)
2. Submit the sitemap: https://jandlsecurity.co.uk/sitemap.xml
3. Request indexing of the homepage and key service pages

---

## Phase 3: Content Expansion (14-21 April 2026)

### 3.1 Expand Service-Location Matrix Pages
**Owner:** Claude Code
**Duration:** 2-3 days
**Priority:** High

Expand each of the 50 matrix pages from ~480 words to 800-1,000 words. Add:
- Location-specific context (local crime stats, property types, relevant regulations)
- Unique FAQ answers (not duplicated across pages)
- Specific service details relevant to that location
- Internal links to related matrix pages and the parent service/location pages

This is the highest-impact content task. These pages target the most specific, highest-intent search queries (e.g., "burglar alarm installation Ilford").

### 3.2 Expand About Page
**Owner:** Claude Code
**Duration:** 1 hour
**Priority:** Medium

Expand from 681 to 1,200-1,500 words:
- Add founder/key team credentials and experience
- Add specific metrics: number of installations, years in business, response times
- Add "By the Numbers" section
- Add Person schema for founders with LinkedIn sameAs
- Strengthen the company story with specific milestones

### 3.3 Expand Service Detail Pages
**Owner:** Claude Code
**Duration:** 2-3 hours
**Priority:** Medium

Each service page (~1,100 words) should be expanded to 1,500-2,000 words:
- Add "What is included" with specific deliverables
- Add pricing indicators (e.g., "Intruder alarm systems from GBP 450 plus VAT")
- Add case study references or example installations
- Add comparison tables (e.g., wired vs wireless alarms)
- Add FAQPage schema with the existing FAQ content

### 3.4 Create 2-3 Blog Posts
**Owner:** Claude Code
**Duration:** 1-2 days
**Priority:** Medium

Suggested topics (high search volume, long-tail):
1. "How Much Does a Burglar Alarm Cost in 2026? A UK Guide" (target: alarm cost queries)
2. "CCTV Installation Guide for Essex Homeowners" (target: local CCTV queries)
3. "Fire Alarm Requirements for HMO Landlords: BS 5839-1 Explained" (target: compliance queries)

Each post: 1,500-2,000 words, BlogPosting schema, UK-specific content, internal links to service pages.

**Note:** Blog functionality needs to be built into the Next.js site first (new /blog route with MDX or similar).

---

## Phase 4: Ongoing Optimisation (April-May 2026)

### 4.1 Monitor GSC Performance
- Track impressions, clicks, and average position weekly
- Monitor for crawl errors after domain switch
- Check indexing status of all 76 pages

### 4.2 Build Backlinks
- Register on Google Business Profile (essential for local SEO)
- Register on Checkatrade, Trustpilot, or similar trade review platforms
- Seek links from supplier partner pages (Pyronix, Uniview)
- Local business directory listings (Yell, Thomson Local, FreeIndex)

### 4.3 Performance Monitoring
- Run Lighthouse audits monthly
- Monitor Core Web Vitals via GSC
- Optimise images (ensure WebP format, proper sizing, lazy loading)

### 4.4 Content Cadence
- Publish 1-2 blog posts per month
- Update llms.txt and llms-full.txt after any new content
- Refresh service page content quarterly

---

## Task Dependencies

```
Phase 1: Pre-Launch (7-8 April)
  1.1 Fix duplicate titles ───────┐
  1.2 Remove verification placeholder ┤
  1.3 Fix FAQs H1 ───────────────┤
  1.4 Deploy AI-friendly robots.txt ──┤ (all independent)
  1.5 Rewrite llms.txt ──────────┤
  1.6 Verify OG/logo images ─────┤
  1.7 Privacy/Terms pages ────────┘
        │
        ▼
  [Connect domain to Vercel]
        │
        ▼
Phase 2: Post-Launch SEO (9-14 April)
  2.1 Add schema to all pages ────┐
  2.2 Add breadcrumbs sitewide ───┤
  2.3 Fix OG/Twitter tags ────────┤ (all independent)
  2.4 Fix canonical URLs ─────────┤
  2.5 Embed Google Maps ──────────┤
  2.6 Submit to GSC ──────────────┘ (after domain is live)
        │
        ▼
Phase 3: Content Expansion (14-21 April)
  3.1 Expand matrix pages (50) ───┐
  3.2 Expand About page ──────────┤ (all independent)
  3.3 Expand service pages ────────┤
  3.4 Create blog posts ──────────┘ (requires blog route)
        │
        ▼
Phase 4: Ongoing (April-May onwards)
```

---

## Priority Summary

| Priority | Task | Phase | Effort |
|----------|------|-------|--------|
| Critical | Fix duplicate title tags | 1 | 30 min |
| Critical | Remove GSC verification placeholder | 1 | 5 min |
| High | Fix FAQs page H1 | 1 | 15 min |
| High | Deploy AI-friendly robots.txt | 1 | 15 min |
| High | Rewrite llms.txt + create llms-full.txt | 1 | 1 hour |
| High | Add schema to all pages | 2 | 2-3 hours |
| High | Add breadcrumbs sitewide | 2 | 1-2 hours |
| High | Submit to GSC | 2 | 30 min |
| High | Expand matrix page content (50 pages) | 3 | 2-3 days |
| Medium | Fix OG/Twitter tags per page | 2 | 1 hour |
| Medium | Fix canonical URLs | 2 | 1 hour |
| Medium | Verify/create OG image and logo | 1 | 15 min |
| Medium | Privacy Policy and Terms pages | 1 | 30 min |
| Medium | Embed Google Maps | 2 | 30 min |
| Medium | Expand About page | 3 | 1 hour |
| Medium | Expand service detail pages | 3 | 2-3 hours |
| Medium | Create blog posts | 3 | 1-2 days |

---

*Roadmap created 7 April 2026. Review and adjust based on client priorities and launch timeline.*
