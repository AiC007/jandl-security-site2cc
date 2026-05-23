# Claude Code Prompt: Build and Deploy the Fire Risk Assessment Page, Posts and Images

**Prepared by:** The AI Consultancy (London) Ltd
**Client:** J&L Security
**Date:** 23 May 2026
**Use:** Open Claude Code desktop in the `jandl-security-site2cc` project folder, then paste the prompt block below.

---

## The prompt to give Claude Code

```
You are working in the J&L Security website repo (Next.js 15, Tailwind, deployed on Vercel from GitHub AiC007/jandl-security-site2cc). Follow CLAUDE.md and the parent operating standards. UK English, no emojis, no em dashes (use commas or restructure). Use the Vibe Coding Loop: Frame, Decompose, Start, Review, Test, Refine, Checkpoint.

GOAL
Add a new Fire Risk Assessments service page, four supporting blog posts, and five images, wire everything into navigation, schema and the sitemap, reconcile one existing wording inconsistency, then build, push and deploy to production so it is all live.

SOURCE OF TRUTH (already in the repo)
- docs/2026-05-23-fra-service-page-copy.md   (final copy for the service page)
- docs/2026-05-23-fra-supporting-posts.md    (final copy and build-ready front-matter for the four posts)
- docs/2026-05-23-fra-codex-image-prompt.md  (image filenames and paths)
Use the copy from these docs verbatim. Strip every editorial annotation marked [NOTE: ...] and do not carry the "Reviewer checklist", "Build notes" or "Part A/B/C" headings onto the live site. Only the actual page and article copy goes live.

PRE-FLIGHT (do this first)
1. Read CLAUDE.md, including the NODE26-REMEDIATION block. Run `node --version`, then `npm run build`. Watch for native module or ABI errors. If they appear, do a clean reinstall (`rm -rf node_modules package-lock.json && npm install`) and rebuild. Once the build is clean, remove the entire NODE26-REMEDIATION block from CLAUDE.md as that block instructs.
2. Confirm the dev server runs before you start editing.

TASK 1: FIRE RISK ASSESSMENTS SERVICE PAGE
Route must be /services/fire-risk-assessments, following the exact pattern used by the existing services. Make these edits:

a) lib/data.ts: add a new entry to the `services` array:
   - id: 'fire-risk-assessments'
   - name: 'Fire Risk Assessments'
   - slug: 'fire-risk-assessments'
   - description: short one-line summary, e.g. 'Accredited fire risk assessments with in-house remedial works across Essex and Greater London'
   - category: 'fire'
   - features: ['Accredited fire risk assessors', 'Communal areas, escape routes and fire doors assessed', 'Written report with a prioritised action plan', 'Remedial works carried out in-house', 'Essex and Greater London coverage']
   - benefits: ['Meets the Fire Safety Order duty', 'One provider from assessment to completed works', 'Evidence for insurers and licensing', 'Faster route to a compliant building', 'Local, BAFE-certified company']

b) app/services/[service]/page.tsx:
   - Add a `servicePageData['fire-risk-assessments']` entry built from docs/2026-05-23-fra-service-page-copy.md:
     - heroTagline: 'BAFE-Certified Fire Risk Assessments in Essex & London'
     - overview: the paragraphs from Sections 1 and 2 of the copy doc (what an FRA is and who needs one; the J&L delivery model). Use the agreed wording that an accredited assessor carries out the assessment and J&L carries out the remedials. Do not name a specific accreditation scheme.
     - process: a four to six step assessment-to-compliance journey derived from the copy: 1 Free survey and scope, 2 Accredited assessment, 3 Written report and prioritised action plan, 4 Remedial works by J&L (alarms, emergency lighting, electrical testing, fire doors), 5 Certification and records.
     - whoFor: the three audiences from Section 3 (landlords and HMOs; businesses and commercial premises; property sellers and flat owners in conveyancing), plus the supporting examples.
     - pricing: '' (empty string, so no price renders; the client has chosen quote after survey).
     - faqs: the nine FAQs from the copy doc, verbatim.
   - Add a `metaOverrides['fire-risk-assessments']` entry with the meta description and keywords from the copy doc.
   - Icon: the `icons` map is keyed by slug. Add `'fire-risk-assessments'`. Prefer importing `ClipboardCheck` from lucide-react and mapping to it. If you would rather not add an import, map it to the already-imported `Flame`. Do not leave it to the Shield fallback.
   - The process section heading is currently hardcoded as "Our Installation Process". For this service that wording is slightly off. If it is low-risk, make that heading render as "Our Process" for fire-risk-assessments (or generally). If it adds risk, leave it.

c) app/services/page.tsx (the /services landing page): this page has its own hardcoded `serviceDetails` array. Add a Fire Risk Assessments entry consistent with the others (icon, name, slug 'fire-risk-assessments', description, features, process, benefits, priceRange left blank, and a small childPages list pointing to the four new blog posts). This is what makes the service appear in the Services listing.

d) app/sitemap.ts: add 'fire-risk-assessments' to the hardcoded `mainServices` array.

e) Home page: check app/page.tsx. If the homepage services grid is hardcoded, add Fire Risk Assessments alongside the existing five. If it maps over the services data, confirm it now shows automatically.

TASK 2: FOUR BLOG POSTS
In lib/blog.ts, append four new objects to the `blogPosts` array, taking front-matter and HTML body verbatim from docs/2026-05-23-fra-supporting-posts.md (Part B). The four slugs are:
- landlord-fire-risk-assessment-essex-london
- fire-risk-assessment-selling-flat
- business-fire-risk-assessment-guide
- after-fire-risk-assessment-remedial-works
For each: set slug, title, metaTitle, description, datePublished '2026-05-23', dateModified '2026-05-23', keywords, wordCount (use the actual final count), content (the HTML body), and faqs (convert each post's FAQ list into the `faqs` array of {question, answer}). The blog index, [slug] page, sitemap and BlogPosting and FAQ schema all read from this array, so no other file needs editing for the posts to appear, except image wiring in Task 4.

TASK 3: RECONCILE THE FIRE ALARMS WORDING
On app/services/[service]/page.tsx, the existing 'fire-alarms' content states J&L "carries out fire risk assessments" directly and lists it as a feature. The agreed model is that an accredited assessor carries out the assessment and J&L carries out the remedials. Update the fire-alarms overview text and the relevant FAQ so they are consistent with the new FRA page, and link the existing "Do you carry out fire risk assessments?" answer through to /services/fire-risk-assessments. Keep the change minimal and accurate.

TASK 4: WIRE THE FIVE IMAGES
Codex is saving five WebP images (16:9, 1600x900) to public/images/fire-risk-assessments/:
- fra-service-hero.webp        -> service page /services/fire-risk-assessments
- landlord-hmo-fra.webp        -> post landlord-fire-risk-assessment-essex-london
- selling-flat-fra.webp        -> post fire-risk-assessment-selling-flat
- business-fra.webp            -> post business-fire-risk-assessment-guide
- after-fra-remedials.webp     -> post after-fire-risk-assessment-remedial-works
For each page and post:
- Set the Open Graph and Twitter image in generateMetadata to the matching image (absolute URL using COMPANY_INFO.website).
- Render the image as a visible feature image with descriptive, keyword-relevant alt text. For the blog [slug] template, add an optional `image` field to the BlogPost interface and render it in or directly beneath the hero band; populate it for these four posts and leave it optional for existing posts. For the service page, place the feature image cleanly within the hero or directly above the overview without breaking the existing quote-form layout. Use next/image with width 1600 and height 900, or a responsive styled img if next/image complicates the layout. Confirm the images load in the local build before deploying. If any image file is missing at build time, skip rendering it gracefully rather than breaking the build.

TASK 5: INTERNAL LINKS
Confirm the internal links already written into the docs resolve (they point to /services/fire-risk-assessments, /services/fire-alarms, /services/security-lighting, /blog/hmo-fire-alarm-requirements-bs5839, /blog/bs5839-1-and-bs5839-6-explained-2026, /locations/brentwood, /locations/romford, /contact). Add a contextual link to the new FRA page from the two existing fire blog posts and from the relevant location pages if that is low-risk. Do not mass-edit unrelated pages.

TASK 6: VERIFY
- Run `npm run lint` and the TypeScript build (`npm run build`) and fix all errors and type issues you introduce.
- Check every new and changed route renders: /services/fire-risk-assessments, the four /blog/... posts, the updated /services/fire-alarms, /services, and the homepage.
- Confirm FAQ schema, BreadcrumbList schema and Service or BlogPosting schema output on the new pages (these come from the existing helpers in lib/schema.ts).
- Confirm the new URLs appear in the generated sitemap.
- Confirm both phone numbers (0204 538 5925 and 0208 220 4770) appear on the new service page.
- Validate the JSON-LD (no malformed JSON) and that no [NOTE: ...] text leaked into any rendered page.

TASK 7: COMMIT, PUSH, DEPLOY
- Work on a branch, e.g. feature/fire-risk-assessments. Make focused commits (data and service page; blog posts; images and wiring; fire-alarms reconciliation).
- Push the branch and let Vercel build the preview. Confirm the Vercel preview build is green and spot-check the preview URLs.
- Once the preview is verified, merge to the production branch (main) so Vercel deploys to production, or follow the repo's existing release convention if different. Confirm the production deployment succeeds and the new pages are live at https://jandlsecurity.co.uk/services/fire-risk-assessments and the four blog URLs.
- Report the preview URL, the production URLs, the Vercel deployment status, and a short summary of the files changed.

GUARDRAILS
- UK English, no emojis, no em dashes anywhere in code comments or content.
- Both phone numbers must appear on the new service page.
- Use the copy from the docs verbatim; do not invent figures, prices, accreditation claims or statistics. No pricing on the service page.
- Do not name a specific assessor accreditation scheme unless CLAUDE.md or the operator has been updated to confirm it. The current wording ("an accredited assessor") is intentional.
- Do not refactor unrelated code, change the design system, or touch other services beyond the fire-alarms reconciliation.
- Maturity is Pilot: real content and structure, no demo shortcuts and no over-engineering.
- If anything in the docs is ambiguous or a file does not match these instructions, stop and flag it rather than guessing.

ACCEPTANCE CHECKLIST (all must be true before you report done)
[ ] NODE26-REMEDIATION pre-flight done; block removed from CLAUDE.md if build is clean.
[ ] /services/fire-risk-assessments live, with hero, both phone numbers, the agreed delivery-model wording, no price, nine FAQs, feature image, and valid schema.
[ ] Four blog posts live at their slugs, each with feature image, FAQs and schema.
[ ] Fire alarms page wording reconciled and linked to the FRA page.
[ ] FRA service appears on /services and (if applicable) the homepage; added to mainServices in sitemap; all new URLs in the sitemap.
[ ] lint and build pass; all routes render; no [NOTE: ...] leakage.
[ ] Preview deploy verified, then production deploy live and confirmed.
```

---

## Notes for you (not part of the Claude Code prompt)

- The one substantive open item remains the FRA partner's accreditation. The prompt deliberately tells Claude Code to keep the "accredited assessor" wording and not name a scheme. If you confirm the partner holds BAFE SP205 Version 6.0 or NFRAR Tier 3 before this runs, update the two source docs (service page Section 2 and the relevant FAQ, plus the matching FAQ in each post) first, and Claude Code will pick up the stronger wording automatically.
- The service page template generates its structure from the `servicePageData` map, so the copy doc's prose maps onto `overview`, `process`, `whoFor` and `faqs`. The prompt spells out that mapping so Claude Code does not have to guess.
- Deployment assumes Vercel auto-builds from the GitHub repo (team and project IDs are in CLAUDE.md). If your release process pushes straight to main rather than via a preview branch, tell Claude Code that and it will adjust.
- After this is live, the natural follow-ups are: complete Google Search Console verification for the new URLs, request a couple of Google Business Profile reviews that mention fire risk assessments, and pull tool-verified keyword volumes before commissioning any further FRA content.
