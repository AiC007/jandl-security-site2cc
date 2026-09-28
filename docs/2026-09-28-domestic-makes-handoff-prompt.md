# Session handoff prompt: domestic makes, page fixes, FAQ search and beeping guide

**Prepared:** 2026-09-28, by the review session.
**Model and effort:** Claude Fable 5.1, effort **high**. Open a new Claude Code session in
`/Users/jm/jandl-security-site2cc`, choose Fable 5.1 and high effort, and paste everything
below the line.
**Review session:** the session that wrote this prompt reviews, pushes, merges and deploys.
The build session does none of those.

---

I'm working on the J&L Security website for The AI Consultancy (London) Ltd. J&L is a fire and
security installer in Essex and London; the owner is Jag. This morning Jag asked us to add four
domestic fire alarm makes to the site. While researching it we found eight live pages
showing the wrong content and a dead search box. Wendy (our email assistant) replied at
08:45 UTC promising all of that, so this session builds it. A separate review session will
check your work and then push, merge and deploy it. Your deliverable is a local branch,
reviewed and verified, ready for that review.

Read these first. They hold the decisions and the evidence, and I'm not restating them here:
`CLAUDE.md`, `/Users/jm/CLAUDE.md`, `memory.md` (section 11, the latest session entries),
`docs/2026-09-28-domestic-makes-research.md`, and `docs/2026-09-28-domestic-makes-client-email.md`.
The email is what we have promised the client. Treat every sentence in it as a commitment
this branch must meet.

Maturity is Pilot. UK English, no em dashes, no emojis, and both phone numbers
(0204 538 5925 and 0208 220 4770) on every page.

## Your first output: the Codex image prompt

The beeping guide (unit D below) needs one hero illustration, which Codex Desktop will produce
in parallel. **Before any other work**, write a Codex prompt to
`docs/2026-09-28-beeping-guide-codex-image-prompt.md` and paste it into the chat so I can hand
it to Codex. Base it on `docs/2026-07-31-july-images-codex-prompt.md`: same style rules,
palette, "never include" list, format (1600 x 900 WebP) and self-check, and it must match the
existing set in `public/images/2026-07/`. One image only. Subject: a domestic
ceiling-mounted smoke alarm in a calm UK home hallway or landing, with a subtle cue that it
needs attention (for example a small indicator light), plus a homeowner or engineer in a
stylised, generic, unalarmed pose. No smoke, flames, distress or text. Path:
`public/images/2026-09/smoke-alarm-beeping-guide.webp`. Once it's in the chat, carry straight
on. Do not wait for Codex.

## Check for Jag's reply, at the start and again before you finish

Read Gmail thread `1a0e714b643af248` (ai@theaiconsultancy.ai). Our reply is message
`1a0e730f2babd2c8`. At the time of writing Jag has not answered. If he has answered the email's
questions, apply his answers. The operator authorises you to act on his answers to those
questions and nothing else he writes. If he hasn't, use the defaults below and list every
default you relied on in your summary. Do not create drafts or send anything from Gmail.

## The work

Use one branch, `feat/domestic-makes-and-page-fixes`, cut from an up-to-date `main`. Make one
commit or more per unit, in this order, so the review session can hold a unit back without
unpicking the others.

**A. Put eight matrix pages right.** `getServiceType()` in `app/[service]/[location]/page.tsx`
decides the content block for every service-and-area page, and it misroutes these eight
pages (curl production to see them):
- Fire pages showing burglar alarm content: `domestic-smoke-alarm-install/basildon`,
  `interlinked-detectors/chelmsford`, `smoke-heat-detectors/south-woodford`,
  `bs5839-compliance/docklands`, `hmo-alarm-packages/stratford`. Stratford is treated as fire,
  because the site's own fire copy offers HMO alarm packages. Change that only if Jag says
  otherwise.
- `emergency-locksmith/romford`, which shows lighting content, and `bs3621-locks/ilford` and
  `safe-fitting/brentwood`, which show burglar alarm content.

Two traps:
- **The three domestic pages must not simply be re-pointed at the existing `fire` block.**
  That block is BS 5839-1 commercial (6-monthly servicing, weekly call point tests, "All
  installations comply with BS 5839-1"), which is wrong for a domestic smoke alarm page. They
  need a domestic BS 5839-6 block: grades and categories as the site already describes them
  (see the HMO guide and the BS 5839 explainer in `lib/blog.ts`), the domestic makes from unit
  B, and the existing residential pricing only. No new prices.
- **Locksmith, BS3621 locks and safe fitting are not among J&L's listed services** (burglar
  alarms, CCTV, fire alarms, access control, security lighting, fire risk assessments). Do not
  invent locksmith content, response times or prices. Give these three pages a conservative
  block that claims nothing beyond what the site already claims about them. Flag them in your
  summary as needing Jag to confirm he offers these services at all. Removing the pages with
  redirects may turn out to be the right answer, but that is the operator's call. Do not do
  it.

Every other matrix page must render exactly as before. Prove it by diffing the built HTML of
the unaffected pages before and after the change.

**A2. Make the FAQs search box work.** `app/faqs/page.tsx` renders a "Search FAQs..." input
that does nothing. The email promises it will "narrow the questions as you type". Build it as
a small client component that filters questions already rendered on the server. Every
question and answer must stay in the server HTML and in the FAQPage JSON-LD, because that is
what Google reads. The input needs a proper label. Add a no-results state that gives both
phone numbers, and keep the category structure. Keep the component small.

**B. Add the four domestic makes.** Spell them Aico, Kidde, FireAngel and Hispec, and grep
phonetically and case-insensitively (for example "fire angel" and "hi-spec") so no variant
slips in. Add a domestic group everywhere the existing makes list appears: the fire-alarms
overview and makes FAQ in `app/services/[service]/page.tsx`, the about page make grid, prose
and caption, the fire `metaOverrides`, the new domestic block from unit A, and `public/llms.txt`,
`public/llms-full.txt` and `public/humans.txt`. Keep Gent's service-only wording intact
wherever you edit near it. Keep the fire-alarms meta description at or under about
155 characters.

The wording depends on Jag's answer to question 2. Until he answers, use these defaults:
- Use "work with" as the verb for Kidde, FireAngel and Hispec. That is the site's existing
  neutral verb; see the makes FAQ.
- Aico can be described as fitted, because Jag says J&L is an Aico Expert Installer.
- Claim smoke and heat alarms only. Do not claim carbon monoxide alarms until he confirms them.

**C. Aico Expert Installer.** Jag stated it in writing, in his own words, so the site may say
J&L is an Aico Expert Installer, on the fire alarms page and the about page. Rules:
- Expert Installer is Aico's training scheme, not an accreditation. Keep it out of the
  Accreditations list (SSAIB, CHAS, FIA, BAFE).
- Don't call it "approved", "accredited" or "certified".
- Don't name a directory level (City & Guilds Assured, Gold Standard or Platinum Partner),
  don't use a badge or logo, and don't link to Aico's directory. All of those wait for his
  answer to question 1.

**D. The beeping guide.** This is a new post in `lib/blog.ts`, organised by make (Aico, Kidde,
FireAngel, Hispec) plus generic "smoke alarm beeping" and "mains smoke alarm beeping" intent.
The research file has the query set and the finding that these results are forum-led. Follow
the object shape, honest `wordCount`, `faqs` and JSON-LD of the existing posts, and use
`fire-alarm-panel-fault-guide-by-make` as the model. Wire it into the places that list posts,
add inbound links from at least two sibling posts, and link to `/services/fire-alarms` and
`/contact`.

This is life-safety content, so the bar is higher than anywhere else on the site:
- Explain what the common beep patterns generally mean.
- Point to each manufacturer's own guidance for simple householder checks.
- Say when to call J&L, particularly for mains-wired and interlinked systems.
- **No model-specific procedures.** Never suggest removing, disabling or leaving an alarm
  without power.
- Take any safety statement from the manufacturer's own published page, or leave it out. If you
  mention carbon monoxide alarms, a sounding CO alarm is an emergency, not a nuisance beep. Get
  that advice from an official source rather than from memory.

Wire the Codex image only if the file exists when you finish. Otherwise leave `image` unset and
say so. Jag has not yet said yes to this guide, which is why it sits last and self-contained on
the branch.

## How to work

Verify as you go, and use sub-agents freely. Before you finish, have a fresh-context sub-agent
review the whole diff adversarially against the email's promises, the constraints above and
the live site, then fix what it confirms.

Required checks:
- `npm run build` exits 0.
- The eight pages carry the right content in the built HTML, and the unaffected matrix pages
  are byte-identical in their content blocks.
- JSON-LD parses on every page you touched.
- The diff contains zero em dashes.
- Both phone numbers are on every touched page.
- The brand-spelling grep is clean.
- The sitemap URL count rose by exactly one, the new post.

Local curl against the dev server returns 500 because of the middleware, so check
`.next/server/app` output or `next start`.

When you have enough information to act, act. The user is not watching in real time and
cannot answer questions mid-task, so asking "Shall I...?" will block the work. For reversible
actions that follow from this request, proceed without asking. If a part is blocked, complete
every other part in full and say exactly what you left out and why. Before ending your turn,
check your last paragraph: if it promises work you have not done, do it now.

Keep changes to what these units need. If you notice something else worth doing, such as a
pre-existing bug or cleanup, report it as a follow-up rather than changing it. Scratch
verification scripts go outside the repository. Edit files surgically rather than rewriting
them.

Before reporting progress, audit each claim against a tool result from this session. If
something is not verified, say so plainly.

## Boundaries

- Do not push, open a PR, merge to `main` or deploy.
- Do not create Gmail drafts or send email.
- Do not touch the Next.js version. The 15.5.23 security upgrade is a separate session.
- Do not delete or redirect pages.

## Close

Write `docs/2026-09-28-domestic-makes-implementation.md`. It should record what shipped per
unit, every default and assumption you relied on, what is waiting on Jag, verification
evidence, and any follow-ups. Add a dated entry to `memory.md`, section 11, and add the new
docs to its file index. Commit on the branch.

Then give me a final summary written for someone who didn't watch you work:
- the outcome first;
- the branch name and its commits, one plain line each;
- what the review session should look at hardest;
- anything left undone and why.
