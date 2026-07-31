# Codex Prompt: July 2026 Content Images (J&L Security)

**Prepared by:** The AI Consultancy (London) Ltd
**Date:** 31 July 2026
**Target:** Codex Desktop, GPT-5.6, pointed at `/Users/jm/jandl-security-site2cc`
**Companion prompt:** `docs/2026-07-31-july-content-claude-code-prompt.md` (Claude Code, content)

---

## Operator notes before you run it

**Model and effort.** The GPT-5.6 family is `gpt-5.6-sol` (frontier), `gpt-5.6-terra` (balanced) and `gpt-5.6-luna` (high volume). Any of the three will do this. Start at **medium** reasoning effort: OpenAI's own guidance is to establish a baseline and only raise effort where it demonstrably improves results, and this task is a clear specification rather than a hard reasoning problem. Do not reach for xhigh or max here.

**Prompt style.** This prompt is deliberately leaner than the May 2026 version. GPT-5.6 follows prompt contracts closely and trends concise by default, so repeated or restated rules create instability rather than reinforcement. Each constraint below is stated exactly once. Resist the urge to pad it.

**Sequencing.** Images 1 to 3 can be generated now. Images 4 and 5 accompany posts the Claude Code session is writing, so either run the content prompt first, or run this and answer Codex's question about the cost guide topic when it asks.

**Precedent.** The May 2026 batch used this same approach and produced all five files correctly at the specified paths. They are in `public/images/fire-risk-assessments/`. The new set must sit alongside them as one visual family.

---

## The prompt

Copy everything below this line into Codex.

---

You are producing five illustrations for the website of J&L Security, a UK fire and security installer covering Essex and Greater London. The site is live and these images go into client-facing pages.

**Goal.** Five image files on disk, at the exact paths given below, visually indistinguishable in style from the five existing images in `public/images/fire-risk-assessments/`. Look at those files first. They define the target: flat modern editorial vector illustration, not photography, not 3D.

**How you get there is yours to choose.** Use whichever image generation route is available to you. If that means writing and running a script against an image API, do that.

**Palette.** Brand orange `#e9550b` and `#f97015`; light orange fills `#fde8d2` and `#fbc9a0`; sky-blue accent `#0ea5e9`; slate neutrals `#0f172a`, `#334155`, `#64748b`, `#cbd5e1`; backgrounds white `#ffffff` through very light slate `#f8fafc`. Every image carries a visible orange accent.

**Composition.** Light uncluttered background, one clear focal subject, calm and professional in tone. UK building styles throughout. People, where present, are stylised and generic.

**Never include.** Text, letters, numbers or labels of any kind. Logos or accreditation marks. Identifiable faces. Flames, fire, smoke, or any depiction of an emergency, injury or distress: this is fire and security, so show the equipment and the professional activity, never the incident. Watermarks, borders or UI frames.

**Output format.** 1600 x 900 pixels, 16:9, WebP, sRGB. If WebP is unavailable, write JPG at quality 85 to the same path with a `.jpg` extension and tell me.

**The five images.**

1. **Martyn's Law / publicly accessible premises.** A stylised UK venue entrance, such as a small theatre, community hall or shopping parade frontage, with calm security infrastructure visible: a wall-mounted camera, an access control reader by the door, and an orderly flow of generic stylised people entering. Conveys prepared, well-run public premises. No security theatre, no barriers, no guards, no threat cues.
   `public/images/2026-07/martyns-law-premises.webp`

2. **EWS1 form versus fire risk assessment.** Two document motifs side by side, clearly distinct from one another, set against a simplified UK apartment block elevation. Conveys two different pieces of paperwork that people confuse. Documents are drawn as blank forms with rule lines only, never readable text.
   `public/images/2026-07/ews1-vs-fra.webp`

3. **Fire risk assessment cost.** A UK residential block paired with a calm cost-estimation motif: a clipboard or tablet with a simple bar or tier shape suggesting a range rather than a single figure, and a subtle calculator or scale cue. Conveys a considered quote, not a price tag. No currency symbols, no digits.
   `public/images/2026-07/fra-cost.webp`

4. **Fire safety law for blocks of flats.** A cutaway or partial elevation of a UK residential block showing communal areas: a stairwell, a fire door, a ceiling detector and an escape route indicated by a generic running-figure-and-arrow shape only. Conveys regulated communal fire safety.
   `public/images/2026-07/blocks-of-flats-fire-safety.webp`

5. **Commercial security cost guide.** The subject depends on the article topic, which is being decided in a parallel session. Ask me for the topic before generating this one. If I am unavailable, fall back to: the interior of a small UK commercial premises, such as a shop or office, with a stylised engineer installing a wall-mounted alarm panel, alongside a calm quote or survey clipboard motif. Same no-digits rule as image 3.
   `public/images/2026-07/commercial-security-cost.webp`

**Before you finish.** Open all five files. Confirm each is 1600 x 900, is the right format, contains no text or digits anywhere, and reads as part of the same set as the existing five in `public/images/fire-risk-assessments/`. If any image fails on style consistency, regenerate that one rather than accepting it.

**Stop when** the five files exist, pass those checks, and you have given me a one-line description of each plus suggested alt text for each. Do not wire the images into the site code: another session handles that. Do not modify any file outside `public/images/2026-07/`.
