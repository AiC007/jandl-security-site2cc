# Session handoff prompt: act on Jag's answers of 23 August 2026

Paste everything below the line into a new Claude Code session opened in
`/Users/jm/jandl-security-site2cc`. It is written to be self-contained.

---

You are working on the J&L Security website for The AI Consultancy (London) Ltd.
Read `CLAUDE.md`, `/Users/jm/CLAUDE.md` and `memory.md` before you start. Maturity is
**Pilot**. UK English, no em dashes, no emojis, both phone numbers on every page.

**Run this end to end**: implement, verify on production, update the project records, and
finish by leaving a Wendy email in Gmail drafts. Do not stop at a plan.

## Where things stand

On 17 August the fire alarm makes Jag asked for went live (PR #19, `eb3db12`), and three
FRA indexing fixes salvaged from an abandoned PR #8 followed (PR #20, `00da5e7`). Wendy
emailed Jag the same evening with five questions. **He answered on 23 August at 20:07.**
Full background is in `memory.md` section 11 and
`docs/2026-08-17-fire-alarm-makes-implementation.md`.

His reply, verbatim:

> 1. Yes we support Fike and Zeta, keep them.
> 2. We install and service all of the makes listed but only service Gent
> 3. Correct Apollo and Hochiki make detectors
> 5. Yes, change the statement as in point 5.
>
> Yes, that would be good if a search for "kentec panel fault" bring the customer to our website.

Settled by that reply: Fike and Zeta stay (no change). The three-way grouping of the makes
is correct (no change). **Question 4 he did not answer**, so there are still no confirmed
panel or model names.

## Task A: Gent is service-only. The site currently overclaims.

Every make except Gent is install **and** service. Gent is **service only**. The site
attaches an unqualified install claim to a list containing Gent in seven places. Fix all of
them. Do not simply delete the word "install", because it is accurate and commercially
valuable for the other eleven makes; split the claim instead.

1. `app/about/page.tsx:282` caption under the 16-tile make grid: "Makes shown are those we
   install, service and take over."
2. `app/services/[service]/page.tsx:155` FAQ question: "Which makes of fire alarm panel do
   you install and service?"
3. `app/services/[service]/page.tsx:156` FAQ answer: "...across installation, servicing,
   fault repair and takeover..."
4. `app/services/[service]/page.tsx` overview paragraph 2: "We install, service and maintain
   conventional, addressable and bi-wire fire alarm systems. The makes we support include..."
5. `app/[service]/[location]/page.tsx:606` `fire.equipmentUsed`.
6. `public/llms.txt:10` "Fire alarm makes supported (installation, servicing, fault repair
   and takeover): ..."
7. `public/llms-full.txt:75` "Support covers installation, servicing, fault repair and
   takeover of existing systems..." and the Supplier Partners block further down the same
   file, which also lists Gent under control panels.

**Also fix the heading, which is the worst instance.** `app/[service]/[location]/page.tsx:1041`
renders `What We Install in {combination.location}` directly above the make list. That H2 is
shared by all six service types, so **make it conditional rather than renaming it globally**:
an `isFireService` flag already exists at line 658. For burglar, CCTV, access control and
lighting pages "What We Install" is accurate and should stay. For fire pages use something
like "Equipment and Makes in {location}". This matters because five of the fire
service-location pages are maintenance pages by subject: `fire-alarm-servicing-chelmsford`,
`fire-alarm-maintenance-harlow`, `fire-alarm-fault-finding-city`,
`fire-alarm-monitoring-greenwich`, `fire-alarm-annual-service-harlow`. Right now they all
say "What We Install" over a list containing a make J&L does not install.

Suggested shape for the FAQ, adapt as you see fit: retitle to "Which makes of fire alarm
panel do you work with?", then say J&L installs, services, repairs and takes over the listed
makes, **except Gent, which J&L services and maintains but does not install new**.

## Task B: the BAFE headline. Jag approved this wording exactly.

`app/services/[service]/page.tsx:126` currently reads:

    heroTagline: 'BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments'

Change it to the wording Jag approved, and no other wording:

    heroTagline: 'BAFE-Certified Fire Alarm Installation and Servicing, plus Fire Risk Assessments'

Read strictly, the old headline put BAFE across the risk assessments. J&L is BAFE certified
for fire alarm **installation and maintenance only**; the fire risk assessor they work with
holds AIFSM, TMIFPO and NEBOSH. Never blur that line anywhere on the site.

**Note the tension and resolve it this way.** The abandoned PR #8 wanted to strip fire risk
assessments off the fire alarms page entirely, to stop it cannibalising
`/services/fire-risk-assessments` (which GSC had as "Discovered, currently not indexed",
position ~47). Jag's approved wording keeps "plus Fire Risk Assessments" in the headline.
**Client-approved wording wins for the headline.** The other change PR #8 wanted, dropping
the fire risk assessment delivery sentence from overview paragraph 1 of the fire alarms page,
is still worth doing and is the better de-overlap lever now that the FRA page has its own
comparator block. Apply that one too. The heroTagline is also reused as the page `<title>`,
so check the rendered title after the change.

## Task C: the fault-finding guide. Jag approved it.

He said: "Yes, that would be good if a search for 'kentec panel fault' bring the customer to
our website." Build it as a new post in `lib/blog.ts` (18 posts there now; match the existing
object shape, including an honest `wordCount` measured from the rendered body, `faqs`, and
JSON-LD via the existing helpers).

Organise it **by make**, covering the twelve: Kentec, Advanced, C-TEC, Gent, Haes, Fike, Zeta,
EMS, EDA Zerio Plus, SmartCell, Apollo, Hochiki. Target the real query pattern, which is
"<make> panel fault", plus generic fire panel fault intent (fault light, buzzing panel,
silencing a sounder, what a fault code means, when to call an engineer). A proven template
for this intent already exists in `why-does-my-burglar-alarm-keep-going-off`.

Wire internal links to `/services/fire-alarms`, `/blog/bs5839-1-and-bs5839-6-explained-2026`
and `/contact`, and add at least two inbound links from sibling fire posts so it indexes.
Add the slug to any place that enumerates posts.

**Hard constraint: no model or panel names.** Jag did not answer question 4. Do not write
Syncro, Taktis, XFP, ZFP, MxPro, FireCell, Zerio Plus panel variants, Elan, Excel, XP95,
Discovery, ESP or any other model. Make level only. Do not invent fault codes, reset
sequences or diagnostic steps for specific panels: describe what a fault indication generally
means and route the reader to a call. Getting this wrong on a life-safety product is the
worst failure available in this project. Where the guide would benefit from model detail, say
plainly that J&L will confirm on the phone.

Reflect Gent's service-only status in the guide too.

## Constraints and known traps

- **Verify what the code does, do not trust the notes.** The last session's email told Jag
  the site avoided per-make install claims; the site asserted them in seven places. That was
  caught only by review. Before you write a word of the client email, grep the code and
  confirm each claim you are about to make.
- **When correcting a brand name, grep phonetically and case-insensitively.** Three spellings
  of C-TEC were in circulation and the first sweep missed one.
- Hochiki does make control panels (L@titude). Apollo does not make panels. Jag has confirmed
  the current grouping is fine, so leave it, but do not write that Hochiki makes only detectors.
- Check `git log` and open PRs before starting. Content has previously been merged while the
  PR record stayed open, and a whole PR was abandoned after its preview built.
- Zero em dashes in anything you add. Check the diff, not just your intent.

## Verification, all required before the email

- `npm run build` exit 0. The only acceptable warning is the pre-existing unused `CheckCircle`
  import in `app/about/page.tsx`.
- Repo-wide grep confirming no remaining unqualified install claim over a list containing Gent.
- The conditional H2 renders "What We Install" on burglar, CCTV, access and lighting
  service-location pages, and the new fire wording on the eight fire ones. Check built HTML,
  not just source.
- JSON-LD on the new post and on `/services/fire-alarms` parses as valid JSON.
- Both phone numbers still present on every page you touched.
- Merge to `main`, wait for the Vercel deploy, then **verify on `https://jandlsecurity.co.uk`
  directly with curl** that the new headline, the Gent wording and the new post are live.
  Note that curl gets a 500 from the local dev server because of middleware; use the built
  output in `.next/server/app` locally and real curl against production after deploy.

## Finish with the client email

Once, and only once, the changes are verified live, draft an email from **Wendy AI** to
`info@jandlsecurity.co.uk` and leave it in Gmail drafts on `ai@theaiconsultancy.ai`.
**Do not send it.**

Follow the standing rule in `/Users/jm/CLAUDE.md`: write the canonical copy into
`docs/` as a matched `.md` and `.html` pair **first**, verify every claim against the code and
the live site, run a review pass, and only then create the draft, **exactly once**. Drafts
cannot be deleted. Creating one before the wording is final is how this client ended up with
three near-identical drafts in a single morning on another project.

Format is brand-locked and must match the previous Wendy emails, which are the reference:
`docs/2026-08-17-fire-alarm-makes-client-email.html` in this repo, and the house spec in
`/Users/jm/Claude_Installs/CLAUDE.md` under "Wendy: the house email voice and format".
Outer wrapper 640px, grey `#8792a2` preamble line reading "The AI Consultancy · [topic]",
navy `#0A1F3D` section headings, detail tables with `#5b6b7b` label cells and `#0A1F3D` bold
value cells, the amber `#FEFCE8` / `#F59E0B` callout only for something that genuinely must be
read, sign-off "Kind regards, / Wendy AI / The AI Consultancy", and the statutory footer with
company number 16138782 and VAT 513 7583 86. Never orange. Never plain text.

The email should tell Jag what changed on the strength of his answers, confirm Gent is now
described as service-only, confirm the headline wording he approved is live, introduce the
fault guide with its URL, and **ask again for the panel and model names**, since that was
question 4 and he did not answer it. Keep it short. He is a busy owner and this is the third
email in the thread. Do not promise ranking outcomes.

## Not in scope, leave alone but do not lose

- **Next.js 15.5.23 security upgrade.** Four vulnerable packages at high severity on
  15.4.10 (`next`, bundled `postcss`, `sharp`, `nanoid`), including middleware bypass and SSRF
  in rewrites. Needs its own session with a regression pass on the middleware redirects and
  the four API routes. Detail in `memory.md`.
- `/bs5839-compliance/docklands` falls through `getServiceType()` to the burglar alarm default
  and shows Pyronix PIR equipment under a BS 5839-1 heading. Small routing fix. If you are
  already editing `getServiceType()` for the H2 work, this is a cheap thing to fix at the same
  time, but flag it rather than expanding scope silently.

## Close the session properly

Update `memory.md` with a dated entry: what shipped, what Jag confirmed, what assumptions
remain, and the draft ID. Add any new docs to the file index. Commit and push, leave no open
PRs or stale branches, and report the draft ID to the operator.
