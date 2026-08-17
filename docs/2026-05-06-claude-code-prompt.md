# Claude Code Desktop Prompt: J&L Security Client Amendments (5 May 2026)

**Save target:** paste the block below into a fresh Claude Code session opened against `/Users/jm/jandl-security-site2cc`.

---

## Prompt to paste

````
You are working in /Users/jm/jandl-security-site2cc, the J&L Security Next.js
15 site. This task implements client amendments requested by Jag (J&L Security)
in his email of 5 May 2026 and follows the implementation plan I have already
drafted.

# Operating mode

Run in bypass-permissions / accept-edits mode (Shift+Tab to enable). Do not pause
for confirmation on routine edits, file creates, npm installs, local builds,
local dev server runs, ESLint/Prettier auto-fixes, branch creates, or local
commits. Work autonomously through the phases below.

DO pause and ask the operator (Dee) for explicit confirmation BEFORE any of the
following:

1. Pushing to remote `main` directly. Default flow is feature branch + PR; main
   merge happens only after operator approval.
2. Any force-push, history rewrite, branch deletion on remote, or rebase that
   alters published commits.
3. Any DNS, domain, or Vercel project-settings change.
4. Provisioning any new billable resource (new Vercel project, new domain,
   paid add-ons).
5. Sending any real email, message, Slack post, or external notification on
   the user's behalf. Drafts to a file are fine; sending is not.
6. Adding, modifying, or deleting any credential, API key, environment
   variable in Vercel, or anything in `.env*`.
7. Running any `rm -rf`, mass file deletion, or destructive migration.
8. Modifying `CLAUDE.md`, `package.json` major-version bumps, or framework
   upgrades.
9. Merging the PR. The operator merges; you prepare and verify.
10. Running `vercel --prod` or any direct production deploy that bypasses the
    PR-and-merge flow.

If anything is genuinely ambiguous, ask once with a concrete proposal rather
than freezing. If the answer is recoverable, proceed and note it in your
summary.

# Source of truth

Read this document end-to-end before writing any code:

  /Users/jm/jandl-security-site2cc/docs/2026-05-06-client-amendments-content-pack.md

That pack contains the exact copy, schema-shaped objects, replacement blocks,
keyword mapping table, and verification checklist for all five phases. Use it
verbatim where it specifies copy. Do not invent additional content.

Also read these for project conventions:

  /Users/jm/jandl-security-site2cc/CLAUDE.md
  /Users/jm/CLAUDE.md (parent operating standards)

Project standards summary (recap, not a substitute for reading the files):

- UK English. No em dashes anywhere in new copy. No emojis.
- Both phone numbers (0204 538 5925 and 0208 220 4770) must be visible on every
  new page.
- All pricing presented as "from £X + VAT" with a "subject to free site
  survey" caveat where pricing appears.
- Maturity is Pilot. Real content, real structure, no Demo shortcuts and no
  Production-grade complexity unless explicitly requested.
- Follow the Vibe Coding Loop: Frame, Decompose, Start, Review, Test, Refine,
  Checkpoint. Apply it within each phase rather than as a single end-to-end
  cycle.

# Branching and commit strategy

1. From `main`, pull latest, then create a feature branch:

     git checkout main
     git pull --ff-only
     git checkout -b client-amendments-2026-05-06

2. Commit at the end of each phase. One logical commit per phase. Suggested
   subject lines:

   - Phase 1: `content(blog): update burglar alarm cost article with confirmed J&L 2026 pricing`
   - Phase 2: `feat(locations): add 14 new London locations and lightly enrich Greenwich`
   - Phase 3: `feat(seo): integrate fire alarm keyword set across services, FAQs, and locations`
   - Phase 4: `content(blog): add BS 5839-1 and BS 5839-6 explained article`
   - Phase 5: `chore(seo): update llms.txt and llms-full.txt for new locations and BS5839 article`

   Include a one-paragraph body in each commit message referencing the source
   email (Jag, 5 May 2026) and the relevant phase of the content pack.

3. After all five phases commit cleanly and the local build is green, push the
   branch:

     git push -u origin client-amendments-2026-05-06

   Pushing the feature branch is allowed without operator confirmation.
   Pushing or merging to `main` is NOT.

# Phase 1: Burglar alarm cost article pricing update

Target: `lib/blog.ts`, post slug `burglar-alarm-cost-uk-2026`.

Apply Phase 1 of the content pack exactly:

- Update `dateModified` to `2026-05-06`, append the two new keywords listed in
  the pack, and update `wordCount` to the figure given.
- Insert the new "J&L Security 2026 Pricing: Confirmed Installed Rates"
  section in the position specified.
- Replace the indicative maintenance subsection and the existing pricing
  summary table with the J&L-anchored versions in the pack.
- Replace the first FAQ (in both the in-body H3 FAQ and the `faqs` array)
  with the new answer.
- Append the two new FAQs (in both the in-body section and the `faqs`
  array). The two arrays must stay in sync.
- Update the closing CTA paragraph as specified.

Verify:

- The article still renders. Run `npm run dev` briefly and load
  /blog/burglar-alarm-cost-uk-2026.
- All prices display as "from £X + VAT".
- No em dashes introduced. (Existing copy outside this round may still
  contain them. Do not refactor them in this commit.)

Commit Phase 1.

# Phase 2: 14 new London location pages and Greenwich audit

Targets:
  - `lib/data.ts` (the `locations` array)
  - `app/locations/[location]/page.tsx` (the `locationExtended` const)

Add the 14 new `Location` objects from Phase 2.1 of the pack into the
`locations` array. Insert them at the end of the array; alphabetical sort by
slug is fine but not required because static params iterate the whole array.

Add the 14 new `locationExtended` entries from Phase 2.2 into the
`locationExtended` object using matching slugs.

Replace the existing `greenwich` extended entry with the lightly enriched
version from Phase 2.3. Do NOT modify the base `greenwich` entry in
`lib/data.ts`.

Schema integrity checks (do these before committing):

- Every new entry in `locations` has all required fields: `id`, `name`,
  `slug`, `county`, `postcode`, `nearbyAreas`, `landmarks`. Slugs match
  between `locations` and `locationExtended`.
- `generateStaticParams` in `app/locations/[location]/page.tsx` continues to
  iterate the `locations` array and now picks up 14 new slugs (30 total).
- Run `npm run build` and confirm all 30 location pages compile.
- Spot-check 3 new pages on the dev server: islington, hammersmith, barnet.
  Verify hero, description, FAQs, both phone numbers, and CTA all render.

Optional follow-up that you should NOT do in this round: adding new entries
to `serviceLocationMatrix` for the 14 locations. The pack flags this as a
later commit. Note it in your final summary.

Commit Phase 2.

# Phase 3: Fire alarm keyword integration

Targets are listed in the table in Phase 3.1 of the pack. Work through them
in this order:

1. `app/services/[service]/page.tsx` `'fire-alarms'` block:
   - Replace `heroTagline`, `overview`, `whoFor`, and `pricing` with the
     copy from Phase 3.2.1 of the pack.
   - Append the four new FAQs from the same section to the `faqs` array.
   - Confirm `generateMetadata` for the fire-alarms slug surfaces the
     keyword set appropriately. If metadata is generated from the service
     object, no additional change is needed; if it is hard-coded, update
     the `description` and `keywords` to mention BAFE-certified, fire risk
     assessments, BS 5839-1 and BS 5839-6, smoke alarm install and repair.

2. `app/page.tsx`: light tweak to the fire alarms service card description
   per Phase 3.2.2.

3. `app/about/page.tsx`: change any standalone "BAFE" reference to "BAFE-
   certified fire alarm maintainer (SP203-1 scheme)" per Phase 3.2.3.

4. `app/locations/[location]/page.tsx`, the `locationFaqs` function:
   append the two new FAQs from Phase 3.2.4. They will then appear on
   every location page including the 14 new ones.

5. FAQs page architecture investigation. The pack flagged this as the open
   question. Resolve as follows:

   a. Read `app/faqs/page.tsx`. Determine whether it imports an FAQ array
      from `lib/data.ts`, imports from another `lib/*` module, or holds
      the content inline.

   b. Look at the existing `faqs` export in `lib/data.ts`. Is it actually
      used by the FAQs page? Search:

        grep -rn "from '@/lib/data'" app | grep faqs
        grep -rn "import.*faqs" app

   c. Choose the cleaner option for SEO and maintainability:

      - PREFERRED: a single centralised data source. If `lib/data.ts`
        already exports `faqs` and the page reads from it, simply append
        the three new FAQ items from Phase 3.3 to that array.
      - If the FAQs page is currently inline, AND the `faqs` export in
        `lib/data.ts` is unused (or used somewhere harmless), refactor
        the page to read from `lib/data.ts`. Migrate the existing inline
        FAQs into `lib/data.ts` (preserving order and IDs), then add the
        three new items. The page should map over the imported array.
      - If migrating is too disruptive (e.g. the inline FAQs include
        rich HTML or per-item components that don't fit the simple
        `{ id, question, answer, category }` shape), keep them inline
        and add the three new items inline only. Do not split the source
        of truth.

   d. Whichever approach you choose, document your decision in the commit
      message body. Format:

        Chose [centralised | inline] because [one-sentence reason].

   e. If you migrate to centralised, also generate or extend the
      `FAQPage` JSON-LD schema for the FAQs page so the new items are
      reflected in structured data.

6. Update `public/llms.txt` partially in this commit if and only if the
   service-line change affects how fire alarms are described. Otherwise
   defer all llms file updates to Phase 5.

Verify:

- Build is green.
- Fire alarms service page renders with new copy and FAQs.
- A spot-checked location page shows the two new fire/smoke alarm FAQs.
- The FAQs page renders the three new items, regardless of source.
- No em dashes in any new copy.
- BAFE references read consistently as either "BAFE certified" or "BAFE-
  certified fire alarm maintainer" within each page.

Commit Phase 3.

# Phase 4: BS 5839 blog post

Target: `lib/blog.ts`.

Insert the new `BlogPost` object from Phase 4.1 of the pack into the
`blogPosts` array, positioned between `'hmo-fire-alarm-requirements-bs5839'`
and `'how-to-choose-security-company'`.

Schema integrity:

- All required `BlogPost` fields populated: `slug`, `title`, `metaTitle`,
  `description`, `datePublished`, `dateModified`, `keywords`, `wordCount`,
  `content`, `faqs`.
- Internal links inside the article point to slugs that actually exist:
  `/blog/hmo-fire-alarm-requirements-bs5839`, `/services/fire-alarms`,
  `/contact`. Verify with quick file checks.
- `generateStaticParams` for `/blog/[slug]` picks up the new slug
  automatically via `getAllBlogSlugs()`.

Verify:

- `npm run build` compiles `/blog/bs5839-1-and-bs5839-6-explained-2026`.
- The article renders end-to-end on the dev server.
- `BlogPosting`, `FAQPage`, and `BreadcrumbList` JSON-LD generate without
  errors. Inspect via View Source on the dev URL.
- No verbatim quotes from the standards; no em dashes; UK English.

Commit Phase 4.

# Phase 5: llms.txt and llms-full.txt

Targets: `public/llms.txt` and `public/llms-full.txt`.

Apply the replacement blocks in Phase 5.1 of the pack to `llms.txt`:

- Replace the "Service Areas" block with the three regional lists.
- Replace the fire alarm services line with the BAFE-certified expanded
  description.
- Replace the "Indicative Installed Costs (UK, 2026)" block with the
  J&L-anchored starting prices.
- Append the new BS 5839 article entry to the Blog list.

For `public/llms-full.txt`:

- Apply the equivalent extensions: regional groupings of all 30 locations,
  BAFE-certified fire alarm description, J&L confirmed pricing, plus the
  new article entry.
- For each of the 14 new location pages, generate a one-paragraph summary
  using the format in Phase 5.2 of the pack. Source the borough/area
  context and postcode from the entries you added in Phase 2; do not
  invent material outside what the content pack covers.
- For the new BS 5839 article, generate one paragraph summarising scope,
  audience, and key takeaways.

Verify the files are valid plain text and that any URLs use the production
domain `https://jandlsecurity.co.uk`.

Commit Phase 5.

# Verification gate (local)

Before pushing, run the full verification checklist from the content pack
(Phase 5 / "Verification checklist" section). Walk through every item.

In particular:

- `npm run build` clean.
- TypeScript: no errors.
- ESLint: no new errors. Warnings tolerable.
- Static params: 30 location slugs, blog index includes BS 5839 slug.
- Sitemap regenerates and includes the new pages.
- Manual page render checks of the URLs listed in the content pack
  checklist on the dev server.
- All confirmed J&L prices appear as "from £X + VAT".
- BS 5839 references hyphenated correctly throughout.
- No em dashes in new copy.
- UK English consistency.

If any item fails, fix it inside the relevant phase's commit (amend or
add a follow-up commit on the feature branch).

# Push and PR

Push the feature branch:

  git push -u origin client-amendments-2026-05-06

Create a pull request to `main` using the GitHub CLI:

  gh pr create \
    --base main \
    --head client-amendments-2026-05-06 \
    --title "Client amendments: J&L Security, 5 May 2026" \
    --body-file docs/2026-05-06-pr-body.md

Generate `docs/2026-05-06-pr-body.md` first, summarising:

- Source: Jag's email of 5 May 2026
- Phases completed (1 to 5) with one-line each
- Files changed (high-level list)
- FAQ architecture decision and reasoning
- Pricing change call-out (article now reflects confirmed J&L 2026 prices)
- Verification status (build clean, manual spot-checks pass)
- Vercel preview URL placeholder (Vercel will populate this on the PR)
- Open follow-ups (e.g. `serviceLocationMatrix` extension as a separate
  later commit)

# Preview verification (Vercel)

Vercel will create a preview deployment automatically when the PR opens.
Wait for the deployment to complete (poll the GitHub PR or the Vercel
dashboard via the Vercel MCP if connected; otherwise wait a couple of
minutes and retry).

When the preview URL is live, verify the following on the preview domain
(NOT on production):

- /blog/burglar-alarm-cost-uk-2026 displays the new pricing block and
  table, both phone numbers, and a "from £485 + VAT" anchor.
- /blog/bs5839-1-and-bs5839-6-explained-2026 renders, has working
  internal links, and presents both phone numbers.
- /locations/islington, /locations/hammersmith, /locations/barnet,
  /locations/woolwich render with hero, description, FAQs, and CTA.
- /locations/greenwich shows the lightly enriched whyLocal copy.
- /services/fire-alarms displays the BAFE-certified hero tagline,
  updated overview, and the four new FAQs.
- /faqs displays the three new fire-alarm FAQs.
- /llms.txt is reachable and shows the new regional groupings.

Capture the preview URL and a short pass/fail note for each item.

# Operator confirmation gate

Stop here and report to Dee. Provide:

1. PR URL.
2. Preview deploy URL.
3. The verification table (item, pass/fail, note).
4. The FAQ architecture decision and the one-sentence reason.
5. Any deviations from the content pack you had to make and why.
6. Anything that should be flagged before merge.

Wait for explicit operator approval ("approved", "merge", "ship it", or
similar) before merging the PR.

# Merge to main and production deploy

When the operator approves:

  gh pr merge --squash --delete-branch <PR_NUMBER>

Vercel will deploy the merge commit to production automatically. Wait
for the production deployment to complete.

# Live production verification

Once production is live, verify on https://jandlsecurity.co.uk:

- https://jandlsecurity.co.uk/blog/burglar-alarm-cost-uk-2026
  Pricing block visible, both phone numbers present.
- https://jandlsecurity.co.uk/blog/bs5839-1-and-bs5839-6-explained-2026
  Loads, internal links work.
- https://jandlsecurity.co.uk/locations/islington
- https://jandlsecurity.co.uk/locations/hammersmith
- https://jandlsecurity.co.uk/locations/barnet
- https://jandlsecurity.co.uk/locations/greenwich (enrichment present)
- https://jandlsecurity.co.uk/services/fire-alarms (new hero, FAQs)
- https://jandlsecurity.co.uk/faqs (new fire alarm FAQs)
- https://jandlsecurity.co.uk/llms.txt (new content visible)
- https://jandlsecurity.co.uk/sitemap.xml (entries for new pages
  present, total entry count higher than pre-deploy)

Run a Lighthouse SEO audit on one new location page (e.g. islington) and
record the score. Flag anything below 90.

# Final deliverables

Produce two artefacts and save both to /Users/jm/jandl-security-site2cc/docs/:

1. `2026-05-06-implementation-summary.md`: a short internal record of
   what was done, what is live, the FAQ architecture decision, follow-up
   items (notably `serviceLocationMatrix` extension), and the production
   verification table.

2. `2026-05-06-jag-confirmation-email.md`: a draft email to Jag from
   Wendy AI / The AI Consultancy, summarising what is now live in
   plain English, confirming the burglar alarm pricing reflects his
   supplied figures, and noting the BS 5839 article and the 14 new
   London location pages. Tone: professional, brief, UK English, no
   emojis, no em dashes. DO NOT SEND. The operator sends it.

Do not send any email or external message. Do not modify Vercel project
settings, DNS, or environment variables. Do not push to main directly.
Do not run vercel --prod.

Begin with the source-of-truth read, then proceed through the phases.
Report back at the operator confirmation gate.
````

---

## Notes on the prompt design

The preamble explicitly enumerates every action that should pause for operator confirmation. This is more reliable than relying on Claude Code's default permissions model, which varies by project setup. The list is intentionally narrow: routine file edits, builds, and feature-branch pushes are pre-authorised. The destructive or commercially significant actions (production deploy, force push, real email send, env var change) require an explicit "approved" before they happen.

The branching and commit strategy aligns with conventional GitHub flow and gives Vercel a clean preview URL on the PR. This is what gets verified before merge.

The FAQ architecture investigation is structured as a decision tree with a preferred outcome (centralised in `lib/data.ts`), a tolerated alternative (inline if migration is disruptive), and a documentation requirement (the decision goes in the commit message). This avoids the agent thrashing between options or making the decision silently.

The merge gate is human. The agent prepares everything up to the merge and waits. This is the right level of friction for a commercially significant deploy on a production client domain.

Sources:
- [Email thread from Jag, 5 May 2026](https://mail.google.com/mail/u/0/#inbox/19decc3e77da9437)

[View the prompt file](computer:///Users/jm/jandl-security-site2cc/docs/2026-05-06-claude-code-prompt.md)
[View the content pack](computer:///Users/jm/jandl-security-site2cc/docs/2026-05-06-client-amendments-content-pack.md)