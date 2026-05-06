# Lighthouse SEO Audit, Islington Location Page

- Date: 2026-05-06
- URL audited: https://jandlsecurity.co.uk/locations/islington
- Profile: Mobile (Lighthouse default, aligned with Google mobile-first indexing)
- Category: SEO only
- Tool: Lighthouse CLI via `npx lighthouse` (headless Chrome)

## Result

Overall SEO score: 100/100. PASS against the 90 threshold.

All weighted SEO audits passed:

- is-crawlable: page is not blocked from indexing
- document-title: page has a `<title>` element
- meta-description: page has a meta description
- http-status-code: page returns a successful HTTP status
- link-text: links have descriptive text
- crawlable-anchors: links are crawlable
- robots-txt: robots.txt is valid
- hreflang: valid hreflang
- canonical: valid `rel=canonical`

## Informational audits (no remediation required)

Lighthouse marks these as `score=null` with `weight=0`. They do not affect
the SEO score and are flagged as manual-check items only:

- image-alt: image elements have `[alt]` attributes (manual review)
- structured-data: structured data is valid (manual review)

No automated failure was raised on either audit. Structured data and image
alt text on this page have been manually reviewed in prior rounds and are
in scope of the existing content pack.

## Conclusion

No remediation work is required for the Islington location page on the SEO
category. Reports retained at:

- /tmp/lighthouse-islington-2026-05-06.report.html
- /tmp/lighthouse-islington-2026-05-06.report.json
