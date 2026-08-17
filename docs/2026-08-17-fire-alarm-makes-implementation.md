# Fire alarm makes and terminology: implementation record

**Date:** 2026-08-17
**Branch:** `feat/fire-alarm-makes-terminology`
**Trigger:** Jag's email of 17 August 2026, 16:17, in the thread "J&L Security | Claude setup: how are you getting on?"
**Maturity:** Pilot
**Scope agreed with operator:** Phases 0 to 2 and 4. Phase 3 (a fire alarm fault guide by make) deliberately held for a second round.

---

## What the client asked for

> "Within the website, I was hoping we could include key names for the fire alarm products we support. When a customer reports a fault, they will most likely use the make and model for assistance."

Makes listed by Jag, verbatim: Kentec, Advanced, CTEK, EDA - Zerio Plus, EMS, Gent, Hochiki, Apollo, Haes, Smartcell.

Terms listed by Jag, verbatim: Conventional, Addressable, Bi-wire.

Wendy replied the same day at 16:20 agreeing to all of it, reading "CTEK" as C-TEC, and offering panel or model names at a later stage.

---

## Decisions and assumptions this session introduced

These are recorded here because they are inferences from a client email that are now live on the production site.

1. **"CTEK" has been read as C-TEC.** C-TEC (Computionics Ltd, Wigan) is the UK fire alarm panel manufacturer. CTEK is a Swedish battery charger brand with no fire products. The reading is almost certainly right but remains **unconfirmed by the client**. Wendy asked in the 16:20 reply. If Jag corrects it, every occurrence must be changed together.

2. **Fike and Zeta have been retained.** Both were already on the site and neither appears on Jag's list. They have deliberately not been removed, because dropping a supported make on the strength of an omission from one email would be worse than carrying one too many. **Question outstanding with the client.**

3. **The copy says "support", not "install", as the umbrella verb for the make list.** "Support" is Jag's own word. This matters most for Gent, which is a closed-protocol range sold through an approved-installer network; claiming installation of new Gent systems without confirmation would be an overclaim. The install claim in the copy attaches to the system types (conventional, addressable, bi-wire), not to each named brand. **Question outstanding with the client:** which makes does J&L install new, and which does it only service and take over.

4. **Manufacturers versus product ranges.** SmartCell and EDA Zerio Plus are product ranges rather than standalone manufacturers. The about page section heading was therefore changed from "Trusted Supplier Partners" to "Makes and Systems We Support", and `humans.txt` from "Fire alarm manufacturers" to "Fire alarm makes and systems", so the list is accurate as framed.

5. **Panels versus detection devices.** Apollo is a detection device manufacturer and does not make control panels. Hochiki is principally a detection device manufacturer. The copy therefore groups the list three ways (control panels / wireless and hybrid systems / detection devices) rather than calling them all panels. **Worth confirming with the client**, as this grouping is our own trade reading, not something Jag specified.

6. **No model or panel names have been published.** Wendy offered these as a later step. None have been added, because Jag has not confirmed which he supports. Do not add Syncro, Taktis, XFP, ZFP, MxPro, FireCell, Elan, Excel, XP95, Discovery or ESP without his confirmation.

---

## The finding that changed the job

The site was already carrying two of Jag's makes, spelled wrong, and a third variant of one of them:

| On the site before | Correct | Places |
|---|---|---|
| `C-Tech` | **C-TEC** | `app/about/page.tsx` x2, `app/services/[service]/page.tsx`, `app/[service]/[location]/page.tsx` |
| `C-Tek` | **C-TEC** | `app/[service]/[location]/page.tsx:142` (Chelmsford FAQ), `public/llms-full.txt` |
| `Kentech` | **Kentec** | `app/about/page.tsx`, `app/services/[service]/page.tsx`, `app/[service]/[location]/page.tsx` |
| `Smartcell` | **SmartCell** | `app/about/page.tsx` |

Jag's own email spells it "Kentec", which settles that one. Three different spellings of C-TEC were in circulation across the codebase. None of these matched anything a customer would type, so they were earning nothing.

The `C-Tek` variant was found by the adversarial review pass, not by the initial sweep, because the first sweep searched for the two spellings named in the plan rather than for all variants of the brand. **Lesson: when correcting a brand name, grep for the brand phonetically and case-insensitively, not for the specific wrong spelling you already know about.**

---

## Google Search Console evidence

Top 500 queries, `sc-domain:jandlsecurity.co.uk`, 19 May to 17 August 2026, pulled via the mcp-search-console MCP on 2026-08-17:

- 498 queries parsed
- 354 contain "alarm"
- 36 contain "fire alarm"
- **0 contain any fire alarm manufacturer name, "panel", "fault", "addressable", "conventional" or "bi-wire"**

This is the top 500 by clicks rather than a full export, so it does not prove no such query exists. It does prove none is material today. The site currently captures nothing in the brand-led or fault-led space, which is exactly the gap Jag identified from the phone.

---

## What shipped

### `app/about/page.tsx`
- `supplierBrands` corrected and extended from 13 to 16 entries: C-TEC, Kentec, SmartCell, EDA Zerio Plus corrected; Gent, Hochiki, Apollo added.
- Section heading changed to "Makes and Systems We Support"; strapline and caption reworded so the framing is accurate for product ranges as well as manufacturers, and so the strapline tells a customer where to find the make on a faulty panel.
- Prose paragraph regrouped into control panels, wireless systems and detection devices.

### `app/services/[service]/page.tsx`
- Fire alarms overview rewritten around the corrected and extended make list, grouped three ways, with "conventional, addressable and bi-wire" in the opening sentence.
- Existing conventional-versus-addressable FAQ extended to cover bi-wire, and its em dash removed.
- New FAQ added: "Which makes of fire alarm panel do you install and service?"
- `metaOverrides['fire-alarms']` description rewritten and keywords extended from 12 to 26 entries covering the makes, the three wiring types and fault repair.

### `app/[service]/[location]/page.tsx`
- `fire.equipmentUsed` rewritten with the corrected list and terminology. Renders across every fire alarm service-location page.
- Chelmsford FAQ `C-Tek` corrected to `C-TEC`.

### `public/llms.txt`, `public/llms-full.txt`, `public/humans.txt`
- Makes and terminology added to all three.
- `llms-full.txt` Supplier Partners block replaced: the single stale "Advanced, C-Tek, Kentec: Fire alarm panels and devices" line became three accurate lines split by equipment category.
- Bi-wire definition added to `llms-full.txt`.

---

## Verification

- **Build:** `npm run build` exit 0. Pre-existing `CheckCircle` unused-import warning in `app/about/page.tsx` remains; it is tracked in `memory.md` and was not touched.
- **Legacy variants:** repo-wide grep for `C-Tech`, `C-Tek`, `Kentech`, `Smartcell` across `app/`, `lib/`, `public/` returns nothing. A sweep of every built HTML file under `.next/server/app` also returns nothing. The only remaining occurrences are in `docs/2026-05-06-*.md`, which are archival records of what was previously published and were deliberately left alone.
- **JSON-LD:** `/services/fire-alarms` emits Organization, Service, FAQPage (11 questions, both new entries present and correctly escaped) and BreadcrumbList. All parse as valid JSON.
- **Meta description:** 151 characters, within the SERP snippet limit. It was 275 characters on the first pass and was cut; the pre-existing description had been 264.
- **Phone numbers:** both present on every page checked.
- **Em dashes:** zero in the added lines.
- **Layout:** the 16-item brand grid measured in-browser at 375px (2 columns, 164px cells) and 1280px (6 columns, 189px cells). Uniform 56px cell height at both, "EDA Zerio Plus" fits on one line, no horizontal page scroll.
- **Adversarial review:** four-lens review with independent refutation, 12 agents. Three confirmed findings, all the `C-Tek` variant, all fixed. Five findings refuted, three of them because the fix had already landed while the review was running.

---

## Flagged, not actioned

1. **The fire alarms hero tagline may blur the BAFE line.** It reads "BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments" at `app/services/[service]/page.tsx:121`. Read naturally, "BAFE-Certified" governs all three nouns including risk assessments. J&L is BAFE certified for fire alarm installation and maintenance only; the fire risk assessor they work with holds AIFSM, TMIFPO and NEBOSH, and the page body states this correctly further down. This is pre-existing and is an accreditation claim, so it has been left for an operator decision rather than changed unilaterally. Suggested wording if it is to change: "BAFE-Certified Fire Alarm Installation and Servicing, plus Fire Risk Assessments".

2. **Ten pre-existing em dashes remain in `app/services/[service]/page.tsx`** (lines 52, 56, 64, 78, 85, 155, 218, 261, 269, 676), against a house rule of zero. One was removed in this round because it sat in a line being edited anyway. A clean sweep is a small, low-risk follow-up.

3. **Phase 3, the fire alarm fault guide by make**, is the piece that actually captures a query like "Kentec panel fault". Held pending Jag's answers on panels versus detection devices and on model names.

---

## Outstanding questions for the client

1. Does "CTEK" mean C-TEC? (Asked in Wendy's reply of 17 August, not yet answered.)
2. Are Fike and Zeta still supported, or should they come off the site?
3. Which makes does J&L install new, and which does it only service and take over? Gent in particular.
4. Are the three groupings right: Kentec, Advanced, C-TEC, Gent, Haes, Fike and Zeta as control panels; EMS, EDA Zerio Plus and SmartCell as wireless and hybrid; Apollo and Hochiki as detection devices?
5. Which panel or model names should be added, if any.
