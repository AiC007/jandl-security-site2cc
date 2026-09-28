# Session handoff prompt: Next.js security upgrade, BS 5839-6 definitions, fire "Service Includes"

**Prepared:** 2026-09-28, by the review session.
**Model and effort:** Claude Opus 5.5 at **xhigh**, the operator's choice. Anthropic's guidance
for Opus 5.5 is to start at `medium` and keep `xhigh` for work where it measurably helps.
A security upgrade with regression risk on a live client site qualifies, but expect long turns.
Open a new Claude Code session in `/Users/jm/jandl-security-site2cc` and paste everything
below the line.

**Review session:** the session that wrote this prompt reviews the branch, then asks this
session to push, merge and deploy. The build session does not ship on its own.

---

I'm working on the J&L Security website for The AI Consultancy (London) Ltd. It is a live
Next.js site on Vercel for a fire and security installer in Essex and London. Three items have
been carried from session to session. I want them closed in one pass, on one local branch, so
that a separate review session can check the work before it goes live.

Read `CLAUDE.md`, `/Users/jm/CLAUDE.md` and `memory.md` first, especially section 11 and the
"OUTSTANDING SECURITY ACTION" entry. Maturity is Pilot. UK English, no em dashes, no emojis,
and both phone numbers (0204 538 5925 and 0208 220 4770) on every page.

## The three items

**1. Upgrade Next.js to close the open security advisories.**

The site is on `next` 15.4.10. As of this morning, `npm audit --omit=dev` reports four
vulnerable packages: `next` (critical), its bundled `postcss` (high), `sharp` (high) and
`nanoid` (high). npm's fix target is `next@15.5.26`, the latest 15.x. The advisories include
middleware bypass and server-side request forgery issues. Stay on 15.x: moving to 16 is a
major version and not part of this job.

Use the latest patched 15.x at the time you run. Keep `eslint-config-next` in step. Resolve
the audit to zero production vulnerabilities, or explain precisely why one remains.

Once the upgrade builds, prove nothing the site depends on has changed. The surfaces that
matter:
- **`middleware.ts`:** this is markdown content negotiation, not redirects. A GET with
  `Accept: text/markdown` is rewritten to `/api/markdown`, and browsers are untouched.
  `memory.md` describes the middleware as handling the apex/www and jandlalarms.co.uk
  redirects. That is wrong: those redirects live in Vercel domain settings and this change
  cannot affect them. Correct the note.
- **The four API routes:** `/api/quote`, `/api/mcp`, `/api/markdown` and
  `/api/wellknown/api-catalog`.
- **The headers in `next.config.ts`:** security headers and the agent-discovery `Link` header.
- **Image optimisation,** which is where `sharp` comes in.
- **The static discovery files:** `llms.txt`, `.well-known/*` and robots.
- **The sitemap,** at 112 URLs.

Compare the built output before and after the upgrade. Any page whose rendered content
changes, other than framework hashes, needs an explanation.

**Never submit the enquiry form against production.** `/api/quote` emails the client directly
on production. Test it locally, where it routes to ai@theaiconsultancy.ai with [TEST] in the
subject, or test only its validation and error paths.

**2. Correct the BS 5839-6 grade and category definitions everywhere on the site.**

The site describes the BS 5839-6 categories loosely. For example, LD2 is described as
"everything in LD3, plus detectors in rooms that open onto escape routes". As generally
summarised, LD2 is the escape routes plus rooms that present a high fire risk, such as the
kitchen and the principal living room. The loose wording has been copied into the domestic
content block added today (`app/[service]/[location]/page.tsx`).

There are related problems in the same family:
- The HMO guide says that BS 5839-1 defines the LD categories. They belong to BS 5839-6.
- Several places list Grade B. The 2019 edition of BS 5839-6 is generally reported to have
  removed it.
- There are claims about what "Grade D" requires.

Find every statement of BS 5839-6 grades and categories in `app/`, `lib/` and `public/` and
make them accurate and consistent. The places include:
- the HMO guide and the BS 5839 explainer in `lib/blog.ts`;
- the domestic and fire blocks and the HMO FAQs in `app/[service]/[location]/page.tsx`;
- `app/faqs/page.tsx`;
- `public/llms-full.txt`.

The standard itself is paywalled. Base every definition on a published source you can cite:
the manufacturers' BS 5839-6 guides (Aico publishes one), the FIA, or the fire and rescue
services. Record the sources in your implementation note. Where you cannot confirm a point,
leave the existing wording and flag it rather than guess. This is an accreditation-adjacent
claim on a BAFE installer's site, so the owner would notice a wrong definition at once.

**3. Give fire pages the right "Service Includes" list.**

`generateServiceIncludes()` in `app/[service]/[location]/page.tsx` checks for "alarm" before
"fire". Every fire service-and-area page therefore shows the intruder alarm list: "Free
security survey", PIR and so on. A fire-specific list already exists further down the function
and is never reached.

The function now receives `serviceType`. Use it, so each page gets the list for its actual
type. Then check that the fire list itself is accurate for these pages:
- Several are maintenance pages by subject.
- Gent is service-only, so nothing may imply J&L installs new Gent systems.
- BAFE covers alarm installation and maintenance only.

Prove that only the intended pages changed.

## Constraints

- **Branch:** one branch, `fix/next-upgrade-bs5839-service-includes`, cut from an up-to-date
  `main`. Use separate commits per item, in the order above, so the review session can
  assess each on its own.
- **Do not ship:** no pushing, no PR, no merging to `main`, no deploy.
- **No email:** do not create Gmail drafts or send email.
- **Scope:** keep changes to what these three items need. If you notice another defect,
  report it as a follow-up rather than fixing it. Known and deliberately out of scope: the
  Romford location FAQs mentioning Pyronix, generic template text on matrix pages, and
  whether J&L offers lock and safe work (that question is with the client).
- **Local testing:** local curl against the dev server can return 500. Test with `next start`
  and `curl`, including requests with `Accept: text/markdown`.
- **Verification:** `npm run build` must exit 0, and no em dash may appear in any added line.
  Before you finish, have a fresh-context sub-agent review the whole diff adversarially,
  especially the BS 5839-6 definitions against their cited sources and the upgrade against
  the surfaces listed above. Fix what it confirms.

A standing instruction about how your turns end: a message with no tool call ends your turn,
and the work stops until I come back. I am not watching this session. Do not end a turn with
a summary that announces the next step instead of taking it, or with an offer to carry on.
Do not end with a list of decisions when none of them blocks the rest of the work, or because
a milestone feels like a good place to report. Put status notes and recommendations in the
same message as your next tool call, and carry on with whatever does not depend on me. Stop
only when nothing can move without me, or when an action is risky or destructive and needs my
confirmation.

Before you report progress, check each claim against a tool result from this session. If
something is not verified, say so plainly.

## Close

- **Implementation record:** write `docs/2026-09-28-maintenance-round-implementation.md`
  covering, for each item: what changed, the audit before and after, the before-and-after
  comparison of built output, the BS 5839-6 sources, anything flagged rather than changed,
  and the follow-ups.
- **`memory.md`:**
  - Add a dated entry to section 11.
  - Correct the middleware note.
  - Mark the security action resolved on the branch (not yet deployed).
  - Add the new doc to the file index.
- **Commit:** commit everything on the branch.
- **Final summary:** write it for someone who did not watch you work:
  - the outcome first;
  - the branch and each commit in a plain sentence;
  - what the review session should look at hardest;
  - anything left undone and why.
