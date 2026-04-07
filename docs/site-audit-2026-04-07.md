# J&L Security Website Audit

**Site:** jandl-security-site2cc.vercel.app (staging)
**Production domain:** jandlsecurity.co.uk (not yet live)
**Platform:** Next.js 15 + Tailwind CSS, deployed on Vercel
**Date:** 7 April 2026
**Prepared by:** Claude Code (Senior Builder)
**Maturity:** Pilot (pre-launch)

---

## Site Structure

| Page Type | Count | Example URL |
|-----------|-------|-------------|
| Homepage | 1 | / |
| Core pages | 5 | /services, /locations, /about, /faqs, /contact |
| Service detail pages | 5 | /services/burglar-alarms, /services/cctv-systems, etc. |
| Location pages | 15 | /locations/romford, /locations/ilford, etc. |
| Service-location matrix pages | ~50 | /burglar-alarm-installation/ilford, /cctv-installation/goodmayes, etc. |
| Static files | 4 | /robots.txt, /sitemap.xml, /llms.txt, /humans.txt |
| **Total indexable pages** | **~76** | |

---

## Overall Health Scores

| Dimension | Score | Notes |
|-----------|-------|-------|
| Technical SEO (Google) | 6/10 | Good schema on some pages, but title tag duplication, missing breadcrumbs, placeholder verification code |
| LLM/AI Search Readiness | 4/10 | No AI crawler rules in robots.txt, llms.txt is malformed, no llms-full.txt |
| Content Quality | 5/10 | Thin content on many pages, especially service-location matrix (480 words) |
| Schema/Structured Data | 5/10 | Homepage has good schema, but most pages have none |
| Social/OG Tags | 5/10 | Present but many pages use sitewide defaults instead of page-specific tags |
| Core Web Vitals | 7/10 | Next.js + Vercel is a strong foundation; server-rendered HTML |
| Mobile Readiness | 7/10 | Responsive design, mobile nav, but not independently verified |

---

## Critical Issues (Must Fix Before Launch)

### 1. Google Site Verification Placeholder
**Severity:** Critical
**Location:** All pages, `<meta name="google-site-verification">`
**Problem:** The verification code is set to `"your-google-verification-code"`, a placeholder that was never replaced. Google Search Console will not verify the site.
**Fix:** Replace with the actual verification code from GSC, or remove the tag entirely if verification will be done via DNS.

### 2. Duplicate Brand Name in Title Tags
**Severity:** High
**Location:** Multiple pages
**Problem:** The brand suffix "| J&L Security" is being appended twice on many pages, creating titles like:
- "Security Services - Alarms, CCTV, Fire Protection | J&L Security | J&L Security"
- "Frequently Asked Questions - Security Systems | J&L Security | J&L Security"
- "Professional Burglar Alarm Installation & Maintenance | J&L Security | J&L Security"
- "Security Systems Romford -- Alarms, CCTV & Fire Protection | J&L Security | J&L Security"

This wastes the 60-character title tag budget and looks unprofessional in search results.
**Fix:** Check the Next.js layout metadata template. The brand suffix is likely being added both in individual page metadata and in the root layout template. Remove the duplication at source.

### 3. robots.txt Missing AI Crawler Rules
**Severity:** High
**Location:** /robots.txt
**Problem:** The robots.txt has no rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended). It also does not block known SEO scraper bots (AhrefsBot, SemrushBot, MJ12bot).
**Current content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /data/
Disallow: /_next/
Disallow: /admin/
Sitemap: https://jandlsecurity.co.uk/sitemap.xml
```
**Fix:** Deploy an AI-friendly robots.txt following the pattern used on the AIC Essex site. See the roadmap for the full specification.

### 4. llms.txt is Malformed
**Severity:** High
**Location:** /llms.txt
**Problem:** The llms.txt file is structured as a robots.txt-style file with User-agent/Allow/Disallow directives and comments. This is not the llms.txt specification (llmstxt.org). A proper llms.txt should be a Markdown-formatted context document that helps LLMs understand the business.
**Fix:** Rewrite llms.txt as a proper LLM context file. Create an accompanying llms-full.txt with comprehensive business details.

### 5. Missing Schema on Most Pages
**Severity:** High
**Pages affected:**
- /services (no schema)
- /services/burglar-alarms and all service detail pages (no schema)
- /about (no schema)
- /burglar-alarm-installation/ilford and all service-location matrix pages (no schema detected via crawl)

**Pages with schema (working):**
- Homepage: Organization + LocalBusiness/ProfessionalService (good)
- /contact: LocalBusiness (good)
- /locations/romford: LocalBusiness + Service (good)
- /faqs: FAQPage (good)

**Fix:** Add appropriate JSON-LD schema to all pages. See the roadmap for specifications per page type.

---

## High Priority Issues

### 6. FAQs Page H1 is Wrong
**Severity:** High
**Location:** /faqs
**Problem:** The H1 tag is "24/7 Emergency Callouts Available" which is the emergency banner text, not the actual page heading. The crawler is reading the banner as the H1. The actual page heading ("Frequently Asked Questions") is likely an H2.
**Fix:** Ensure the emergency banner does not use an H1 tag. The page's main heading should be the only H1.

### 7. OG and Twitter Tags Not Page-Specific
**Severity:** Medium
**Pages affected:** /about, /faqs, and potentially others
**Problem:** Many pages use the sitewide default OG title ("J&L Security - Alarms, CCTV & Fire Protection...") and OG description instead of page-specific values. This means shared links on social media all show the same generic title.
**Fix:** Set unique OG title and OG description in the metadata export of each page.tsx file.

### 8. Missing Breadcrumbs
**Severity:** Medium
**Pages affected:** All pages except /faqs
**Problem:** Breadcrumbs improve both user navigation and SEO (BreadcrumbList schema enables breadcrumb display in search results). Only the FAQs page currently has breadcrumbs.
**Fix:** Add a Breadcrumb component to the layout or individual pages. Include BreadcrumbList JSON-LD schema.

### 9. Thin Content on Service-Location Matrix Pages
**Severity:** Medium
**Example:** /burglar-alarm-installation/ilford (480 words)
**Problem:** The 50 service-location matrix pages are the site's primary long-tail SEO asset, but at ~480 words each they are thin. Google may treat these as low-quality doorway pages. Competitors with similar matrix pages typically have 800-1,500 words per page.
**Fix:** Expand each matrix page to at least 800 words with location-specific content, local area context, and unique FAQ answers.

### 10. Thin About Page
**Severity:** Medium
**Location:** /about (681 words)
**Problem:** The About page is a key trust signal for both users and search engines (E-E-A-T). At 681 words it lacks depth. No founder/team credentials, no specific client metrics, no Person schema.
**Fix:** Expand to 1,200-1,500 words. Add founder credentials, years of experience, specific client metrics, and Person schema.

---

## Medium Priority Issues

### 11. No OG Image File
**Severity:** Medium
**Problem:** All OG image tags reference `https://jandlsecurity.co.uk/images/og-image.jpg`. This file needs to exist at that path when the domain goes live. If it does not exist, social shares will have no preview image.
**Fix:** Create a branded OG image (1200x630px) and deploy it to `/public/images/og-image.jpg`.

### 12. No Logo Image File
**Severity:** Medium
**Problem:** Schema markup references `https://jandlsecurity.co.uk/images/jandl-security-logo.jpg` for the logo. This file needs to exist.
**Fix:** Add the logo image to `/public/images/jandl-security-logo.jpg`.

### 13. Map Placeholder on Contact Page
**Severity:** Medium
**Location:** /contact
**Problem:** The contact page shows a placeholder where Google Maps should be, reading "Interactive Google Map" with the address text.
**Fix:** Embed an actual Google Maps iframe or use the Google Maps JavaScript API.

### 14. Missing Privacy Policy and Terms Pages
**Severity:** Medium
**Location:** Footer links to /privacy and /terms
**Problem:** These pages may not exist or may have placeholder content. Required for GDPR compliance (UK GDPR) before launch.
**Fix:** Create proper Privacy Policy and Terms of Service pages with real content.

### 15. Sitemap Domain Mismatch (Expected)
**Severity:** Low (resolves at launch)
**Problem:** The sitemap.xml references `jandlsecurity.co.uk` URLs. This is correct for production but means the sitemap is non-functional on the Vercel staging URL.
**Fix:** No action needed if the domain is being connected at launch. Verify after DNS switch.

### 16. Service-Location Matrix Page Canonical URLs
**Severity:** Medium
**Problem:** Some matrix pages appear to have incorrect canonical URL formats. For example, the Romford location page canonical is `https://jandl-security-site2cc.vercel.app/services/security-systems-romford` which does not match the actual URL pattern.
**Fix:** Audit all canonical URLs across matrix pages and ensure each points to itself at the production domain.

### 17. No 404 Page Verification
**Severity:** Low
**Problem:** Not verified whether a custom 404 page exists with proper navigation back to the site.
**Fix:** Test /nonexistent-page and ensure it returns a branded 404 with navigation.

---

## LLM/AI Search Specific Issues

### 18. llms.txt Does Not Follow Specification
The current llms.txt is formatted as robots.txt directives. The llms.txt specification (llmstxt.org) calls for a Markdown document containing:
- Company name and description
- Key services and capabilities
- Contact information
- Links to important pages
- Structured information that helps LLMs cite the business accurately

### 19. No llms-full.txt
There is no llms-full.txt file. This file should contain comprehensive business details including:
- Full service descriptions
- Pricing information
- Service areas with postcodes
- Case studies or testimonials
- FAQ content
- Technical specifications

### 20. AI Crawler Access Not Configured
The robots.txt does not explicitly allow or address any AI crawlers. While the default `User-agent: *` allows all, explicitly allowing AI crawlers (with separate User-agent rules) is a signal that the site welcomes AI indexing.

---

## Content Quality Assessment

| Page | Word Count | Assessment |
|------|-----------|------------|
| Homepage | ~1,200 | Good length, well-structured |
| /services | 1,232 | Adequate |
| /services/burglar-alarms | 1,101 | Borderline; could use more detail |
| /services/[other] | ~1,000-1,100 | Similar to burglar-alarms |
| /about | 681 | Thin; needs expansion |
| /faqs | 2,436 | Strong; 37 FAQs |
| /contact | 471 | Adequate for a contact page |
| /locations/romford | 975 | Could be stronger |
| /locations/[other] | ~900-1,000 | Similar |
| Matrix pages (50) | ~480 | Too thin; risk of doorway page classification |

---

## Schema Audit Summary

| Page Type | Schema Present | Schema Types | Status |
|-----------|---------------|-------------|--------|
| Homepage | Yes | Organization, LocalBusiness, ProfessionalService | Good |
| /services | No | -- | Needs Service schema |
| /services/[service] | No | -- | Needs Service + FAQPage schema |
| /about | No | -- | Needs AboutPage + Organization + Person schema |
| /faqs | Yes | FAQPage | Good |
| /contact | Yes | LocalBusiness | Good |
| /locations/[location] | Yes | LocalBusiness, Service | Good |
| Matrix pages | No | -- | Needs Service + BreadcrumbList + FAQPage schema |

---

## What is Working Well

1. **Server-side rendering:** All pages are SSR/SSG via Next.js. Schema, meta tags, and content are in the raw HTML source, not JS-injected. This is a major advantage over the old Replit site.
2. **Comprehensive sitemap:** 76 pages properly listed with lastmod dates, priorities, and changefreq.
3. **Homepage schema:** Both Organization and LocalBusiness/ProfessionalService schemas are properly deployed with contactPoint arrays including both phone numbers.
4. **FAQPage schema:** The FAQs page has proper schema with 37 Q&As, eligible for rich results.
5. **Page-level metadata:** Each page has unique title tags, meta descriptions, and keyword tags.
6. **Security headers:** Next.js config includes security headers (verified from codebase).
7. **Mobile responsive:** Responsive design with mobile navigation.
8. **Performance:** Vercel CDN + Next.js SSG means fast TTFB and good Core Web Vitals baseline.
9. **Both phone numbers:** The secondary number (0208 220 4770) is now displayed alongside the primary across all pages.

---

*Audit completed 7 April 2026. All data gathered via Firecrawl scrapes of the live Vercel deployment.*
