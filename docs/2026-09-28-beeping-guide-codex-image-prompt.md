# Codex Prompt: Smoke Alarm Beeping Guide Hero Image (J&L Security)

**Prepared by:** The AI Consultancy (London) Ltd
**Date:** 28 September 2026
**Target:** Codex Desktop, GPT-5.6, pointed at `/Users/jm/jandl-security-site2cc`
**Companion work:** the Claude Code build session on branch `feat/domestic-makes-and-page-fixes` (the beeping guide post in `lib/blog.ts`). That session wires the image only if the file exists when it finishes; otherwise the review session wires it.

---

## Operator notes before you run it

**Model and effort.** Any of `gpt-5.6-sol`, `gpt-5.6-terra` or `gpt-5.6-luna` will do this. Start at **medium** reasoning effort. This is a clear specification, not a reasoning problem.

**Prompt style.** Same lean contract as the July 2026 prompt (`docs/2026-07-31-july-images-codex-prompt.md`). Each constraint is stated once.

**Precedent.** The May and July 2026 batches used this approach and produced files at the specified paths. They are in `public/images/fire-risk-assessments/` and `public/images/2026-07/`. The new image must sit alongside the July set as one visual family.

---

## The prompt

Copy everything below this line into Codex.

---

You are producing one illustration for the website of J&L Security, a UK fire and security installer covering Essex and Greater London. The site is live and this image is the hero for a client-facing guide about domestic smoke alarms that beep or chirp.

**Goal.** One image file on disk, at the exact path given below, visually indistinguishable in style from the five existing images in `public/images/2026-07/`. Look at those files first. They define the target: flat modern editorial vector illustration, not photography, not 3D.

**How you get there is yours to choose.** Use whichever image generation route is available to you. If that means writing and running a script against an image API, do that.

**Palette.** Brand orange `#e9550b` and `#f97015`; light orange fills `#fde8d2` and `#fbc9a0`; sky-blue accent `#0ea5e9`; slate neutrals `#0f172a`, `#334155`, `#64748b`, `#cbd5e1`; backgrounds white `#ffffff` through very light slate `#f8fafc`. The image carries a visible orange accent.

**Composition.** Light uncluttered background, one clear focal subject, calm and professional in tone. UK building style throughout. People, where present, are stylised and generic.

**Never include.** Text, letters, numbers or labels of any kind. Logos, brand marks or accreditation marks, including anything that could read as a manufacturer's badge on the alarm. Identifiable faces. Flames, fire, smoke, or any depiction of an emergency, injury or distress: this is fire safety, so show the equipment and the calm householder or professional activity, never the incident. Watermarks, borders or UI frames.

**Output format.** 1600 x 900 pixels, 16:9, WebP, sRGB. If WebP is unavailable, write JPG at quality 85 to the same path with a `.jpg` extension and tell me.

**The image.**

1. **Smoke alarm beeping guide.** The hallway or upstairs landing of a calm, ordinary UK home: painted walls, a banister or a door frame, soft daylight. The focal subject is a plain white round domestic smoke alarm mounted on the ceiling, drawn generically with no brand styling. One subtle cue that it wants attention: a small indicator light on the alarm in the brand orange, or a few short sound-wave arcs in the orange, nothing more. Below or beside it, one stylised generic figure, either a homeowner looking up at the alarm with a neutral, unalarmed posture, or an engineer on a small step ladder inspecting it. Conveys a routine check, not an emergency. No smoke, no flames, no hands over ears, no distress.
   `public/images/2026-09/smoke-alarm-beeping-guide.webp`

**Before you finish.** Open the file. Confirm it is 1600 x 900, is the right format, contains no text or digits anywhere, shows no brand mark on the alarm, and reads as part of the same set as the five images in `public/images/2026-07/`. If it fails on style consistency, regenerate it rather than accepting it.

**Stop when** the file exists, passes those checks, and you have given me a one-line description of it plus suggested alt text. Do not wire the image into the site code: another session handles that. Do not modify any file outside `public/images/2026-09/`.
