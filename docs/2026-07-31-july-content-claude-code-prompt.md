# Claude Code Prompt: July 2026 Content Delivery (J&L Security)

**Prepared by:** The AI Consultancy (London) Ltd
**Date:** 31 July 2026
**Target:** Claude Code Desktop, Opus 5, extra-high reasoning, pointed at `/Users/jm/jandl-security-site2cc`
**Companion prompt:** `docs/2026-07-31-july-images-codex-prompt.md` (Codex Desktop, images)

**Sizing note for the operator:** this is four PRs of work. Opus 5 on xhigh should complete PR 1 and PR 2 comfortably in one session. PR 3 and PR 4 may need a second session. The prompt is written so it can be stopped cleanly after any PR.

---

## The prompt

Copy everything below this line into a new Claude Code Desktop session.

---

You are working on the J&L Security website, a live client site built and managed by The AI Consultancy (London) Ltd. Read `CLAUDE.md` at the project root and `/Users/jm/CLAUDE.md` before you start. Both apply in full.

### Why this work exists

J&L's monthly client report for June committed to a specific July content programme. That work did not happen. July has now closed and the client is expecting it. You are delivering it.

This is not speculative work. Every item below is tied to a measured opportunity in Google Search Console, and the client has already been told it is coming.

### What the search data says

July 2026 figures, 1 to 30 July, pulled from Google Search Console on 31 July. Use these numbers rather than re-pulling them, unless you specifically need detail they do not contain.

Site totals: 144 clicks, 28,290 impressions, blended average position 23.1. Impressions doubled from June, clicks up 53 per cent.

The problem, and the whole reason for this work: six location pages generated roughly 10,000 impressions in July and converted them into nine clicks between them.

| Page | Impressions (Jul) | Clicks (Jul) | Avg position |
|---|---|---|---|
| `/locations/barking` | 2,050 | 0 | 33.8 |
| `/locations/hornchurch` | 1,893 | 4 | 18.6 |
| `/locations/basildon` | 1,865 | 0 | 32.2 |
| `/locations/greenwich` | 1,720 | 0 | 24.7 |
| `/locations/chelmsford` | 1,552 | 0 | 35.8 |
| `/locations/enfield` | 1,223 | 1 | 35.6 |
| `/services/burglar-alarms` | 1,110 | 1 | 41.5 |
| `/services/fire-risk-assessments` | 440 | 2 | 47.1 |
| `/blog/bs5839-1-and-bs5839-6-explained-2026` | 564 | 4 | 11.1 |
| `/blog/hmo-fire-alarm-requirements-bs5839` | 7,216 | 62 | 8.8 |

Google is already showing these location pages to a large audience. They are not being clicked because they sit on results pages three and four. Hornchurch is the exception at position 18.6, which makes it the quickest win.

### Scope

Four PRs, in this order. Each is independently shippable. Stop after any PR if context is getting tight, and say clearly which PRs remain.

**PR 1: Location page depth for the four highest-opportunity towns**

Barking, Hornchurch, Basildon, Greenwich.

Diagnose before you write. All 29 location pages are generated from one template at `app/locations/[location]/page.tsx`, which holds a `locationExtended` record (starting around line 10) with `description`, `population`, `commuting`, `whyLocal` and `residential` fields per town, plus `lib/data.ts` `locations[]` for `postcode`, `nearbyAreas` and `landmarks`. Every town already has an entry, so the pages are not empty. They are thin and near-identical: the unique prose per town is roughly one paragraph against a large volume of shared boilerplate.

Your first job is to measure that. Render or read the output for two of these towns, work out roughly how many words are genuinely unique to each page against how many are shared template, and tell me the ratio before you start writing. That number is what needs to change.

Then raise the genuinely local content substantially for those four towns. What "substantially" means is your judgement, informed by what the page needs to compete at position 10 rather than 33, but the unique-to-template ratio should improve by a large multiple, not a few per cent.

You may extend the `locationExtended` type with new fields if that is the cleanest way to carry richer content. If you do, every one of the 29 towns must still render correctly, so make new fields optional and handle their absence. Do not break the other 25 pages.

Local specificity is the entire point. Property stock, building age and type, the mix of residential and commercial demand, transport, postcode districts, named neighbourhoods, the kinds of security problem that actually come up in that town. A paragraph that would read identically with the town name swapped is worthless here and will not fix the ranking.

**PR 2: Martyn's Law article**

A new blog post, the first on this topic for the site.

Martyn's Law is the Terrorism (Protection of Premises) Act 2025. Before writing, verify the current implementation position with a web search: commencement date, the capacity thresholds for the standard and enhanced tiers, and what duty holders must actually do. Do not rely on figures embedded in this prompt or on your training data, because the implementation timetable has been moving. The June client report told J&L the deadline is Spring 2027 and the threshold is a capacity over 200. Check both, and if either is wrong, use the correct figure and tell me it was wrong.

Angle it at what J&L can actually help with. J&L installs and maintains alarms, CCTV, access control and fire systems. It is not a security consultancy and must not be presented as one. The article should help a premises operator understand their obligation and see where physical security measures fit, without implying J&L delivers compliance services it does not offer.

**PR 3: Commercial cost guide**

The June report promised cost guides aimed at buyers who are comparing and ready to quote. `/services/burglar-alarms` draws 1,110 impressions at position 41.5, and the existing `/blog/burglar-alarm-cost-uk-2026` post is the model to follow for structure and tone.

Pick the commercial cost topic with the clearest search demand that the site does not already cover, and say why you picked it. Do not duplicate the existing domestic burglar alarm cost guide.

Follow the established pricing convention: indicative ranges only, framed so the reader is directed to a free site survey rather than treating any figure as a quote. `lib/blog.ts` carries a pricing note at the top of the array. Read it and comply with it.

**PR 4: Lift the BS 5839 explainer onto page one**

`/blog/bs5839-1-and-bs5839-6-explained-2026` sits at position 11.1, having climbed from 35.4 in June. It needs a modest, targeted improvement to break the top ten, not a rewrite. Work out what is actually holding it at 11 rather than making generic improvements.

Leave `/blog/hmo-fire-alarm-requirements-bs5839` alone unless you find a specific defect. It is the site's strongest asset at 62 clicks and position 8.8, and the risk of degrading it outweighs the upside.

### Out of scope

Directory listings on Checkatrade, Trustpilot, SSAIB and BAFE were also promised for July. They are off-site and cannot be done from this repository. Do not attempt them. Mention them in your final summary so they are not forgotten.

Do not create or place any client email. That is handled separately.

### Accuracy constraints, non-negotiable

These are compliance matters on a live client site, not style preferences.

Accreditation wording must stay exactly as already used in the fire risk assessment posts: the assessment is arranged through an assessor holding **AIFSM, TMIFPO and NEBOSH**, and **J&L Security is BAFE-accredited for the installation and maintenance of fire alarms**. J&L's BAFE accreditation does not cover fire risk assessment itself. Do not blur that line anywhere.

J&L's own accreditations are SSAIB, CHAS, FIA and BAFE. J&L is **not** NSI approved. Existing content refers to "NSI or SSAIB approved" as generic industry context, which is fine, but `/blog/burglar-alarm-cost-uk-2026` contains a bare reference to "an NSI-approved installer". Check whether that reads as a claim about J&L. If it does, fix it. If it is clearly generic, leave it and say so.

Invent nothing. No statistics, no prices, no regulatory detail, no case studies, no testimonials, no claimed capabilities. If a fact matters and you cannot verify it, either leave it out or flag it to me as needing client confirmation. Fabricated detail on a live client site is the worst possible outcome here, worse than delivering less.

### House standards

UK English throughout. No em dashes anywhere, in content, comments or commit messages: use commas, colons, or restructure. No emojis. No AI hype language, no motivational filler, no speculative claims.

Business facts: established 2011; Jubilee House No3, The Drive, Great Warley, Brentwood CM13 3FR; phones 0204 538 5925 and 0208 220 4770; email info@jandlsecurity.co.uk; WhatsApp 442045385925; service area Essex and Greater London. Both phone numbers appear on every page.

Note that `app/locations/[location]/page.tsx` currently contains five em dashes in its own markup. Fixing those is optional and, if you do it, belongs in its own commit so it does not muddy the content diff.

### Where things live

Blog posts are objects in the `blogPosts` array in `lib/blog.ts`, typed by `BlogPost` in `lib/types.ts`: `slug`, `title`, `metaTitle`, `description`, `datePublished`, `dateModified`, `keywords`, `wordCount`, `content` (an HTML string), optional `faqs`, optional `image`. Match the structure and depth of the existing fire risk assessment posts, which are the best work on the site.

Set `wordCount` to the true count. Set `datePublished` to the date you publish. Wire inbound internal links from related existing posts to anything new, the way PR #13 did for the fire risk assessment cluster, because orphaned posts do not rank.

Leave the `image` field off new posts for now. Images are being produced separately in Codex and will be wired in afterwards. Tell me in your summary which new posts need images and what each should depict.

### Working method

Feature branch per PR, never commit to main. Follow the Vibe Coding Loop in `CLAUDE.md`.

Before you write anything, tell me your plan: which PR you are starting, what you found in the diagnosis, and what you intend to change. Wait for my response on PR 1 specifically, because the approach there sets the pattern for the rest.

After each PR: run the build and lint, confirm all 29 location pages and all blog routes still render, and confirm no TypeScript errors. Show me the actual output. Do not tell me a build passed without showing it.

This site's maturity level is Pilot. Real content and real structure, pre-launch hardening in progress. Do not apply demo shortcuts, and do not gold-plate.

### Definition of done

- The four location pages carry substantially more genuinely local content, and you have shown me the before and after unique-word ratio.
- A Martyn's Law post is live, with the legal position verified against a current source this session, and sources cited to me.
- A commercial cost guide is live, following the existing pricing convention, and you have justified the topic choice.
- The BS 5839 explainer has a specific, reasoned improvement targeting the top ten.
- All 29 location pages and all blog routes build and render. Build output shown.
- Internal links wired both ways for all new posts.
- A summary listing: what shipped, which posts need images and what they should depict, the directory listings still outstanding, and anything you found that needs client confirmation.

If you disagree with any priority here based on what you find in the code or the data, say so before building rather than after.
