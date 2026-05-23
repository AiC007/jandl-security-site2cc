# Codex Image Generation Prompt: Fire Risk Assessment Page and Posts

**Prepared by:** The AI Consultancy (London) Ltd
**Client:** J&L Security
**Date:** 23 May 2026
**Purpose:** A single, self-contained prompt to give Codex to generate one feature image for the new fire risk assessment service page and one for each of the four supporting blog posts, in a style consistent with the existing site.

---

## Before you run it: where the images go

The J&L Security site serves static images from the `public/` directory, so a file at `public/images/...` is reachable on the web at `/images/...`. Create a dedicated subfolder for this work:

```
public/images/fire-risk-assessments/
```

If you point Codex at the project root, the paths below are correct as written. If you point Codex at a different folder, treat everything after `public/` as the path relative to that folder, and keep the filenames identical so they can be wired into the code without changes.

All five images use the same filename convention (lowercase, hyphenated) and the same format and dimensions.

---

## Style brief (applies to all five images)

The site is clean, modern and flat. It uses a brand orange, slate greys, a sky-blue accent, the Inter typeface, and gradient panels with simple line icons. There is currently no photography on the site. To sit naturally alongside that, the images should be **flat modern editorial vector illustrations**, not photographs and not 3D renders.

Palette (use these exact values):
- Primary brand orange: `#e9550b` and `#f97015`
- Lighter orange tints for fills: `#fde8d2`, `#fbc9a0`
- Sky-blue accent: `#0ea5e9`
- Slate neutrals: `#0f172a`, `#334155`, `#64748b`, `#cbd5e1`
- Backgrounds: white `#ffffff` to very light slate `#f8fafc`

Consistency rules across all five images:
- Same illustration style, line weight, level of detail and palette in every image, so they read as one set.
- Light, uncluttered background. Clean composition with clear focal subject.
- Professional and calm in tone. This is fire safety, so do not depict fire, flames, smoke, alarm in progress, injury, or people in danger. Show the safety equipment and the professional activity, not the emergency.
- UK setting and UK building styles.
- Subtle orange accent in every image to tie back to the brand.

Hard constraints (negative prompt):
- No text, letters, numbers, captions or labels anywhere in the image.
- No brand logos or accreditation marks (SSAIB, CHAS, FIA, BAFE or any other).
- No identifiable faces; keep any people stylised and generic.
- No flames, fire, smoke, burning, or distress.
- No watermarks, no borders, no UI frames.

Technical output (every image):
- Aspect ratio 16:9, dimensions 1600 x 900 pixels.
- Format WebP, sRGB colour. If WebP is not available, output JPG at the same path and dimensions with quality 85.
- Flat colour, no heavy gradients except subtle ones consistent with the brand panels.

---

## The prompt to give Codex

Copy everything in the block below to Codex. Generate all five images in one consistent style.

```
You are generating a set of five flat modern editorial vector illustrations for a UK fire and security company's website (J&L Security, Essex and Greater London). All five must share one consistent illustration style, line weight and palette so they look like a single set.

PALETTE (use exactly): brand orange #e9550b and #f97015; light orange fills #fde8d2 and #fbc9a0; sky-blue accent #0ea5e9; slate neutrals #0f172a, #334155, #64748b, #cbd5e1; backgrounds white #ffffff to very light slate #f8fafc. Put a subtle orange accent in every image.

STYLE: clean flat vector illustration, not photographic, not 3D. Light uncluttered background, clear single focal subject, professional and calm. UK building styles. Any people are stylised and generic with no identifiable faces.

DO NOT INCLUDE: any text, letters, numbers or labels; any logos or accreditation marks; identifiable faces; flames, fire, smoke, burning or any depiction of an emergency or distress; watermarks, borders or UI frames.

OUTPUT: each image 16:9 at 1600x900 pixels, WebP (or JPG quality 85 if WebP unavailable), sRGB. Save each to the exact path given.

Generate these five images:

1) SERVICE PAGE FEATURE. Subject: a stylised fire safety professional with a clipboard or tablet inspecting the communal hallway of a UK building, with a clearly drawn fire door, a wall-mounted fire alarm panel and an escape-route sign as calm background elements. Conveys a careful, professional assessment of a building. Save to: public/images/fire-risk-assessments/fra-service-hero.webp

2) LANDLORD AND HMO POST. Subject: the exterior and cutaway of a UK converted house or small residential block showing two or three front doors and a shared entrance, with small calm fire-safety details such as a ceiling detector and a fire door, and a subtle set of keys motif to signal letting. Save to: public/images/fire-risk-assessments/landlord-hmo-fra.webp

3) SELLING A FLAT POST. Subject: a UK flat in a small block with a communal entrance, paired with a calm document and checklist motif and a subtle house-with-tick or sold-style cue (no text), signalling a property transaction that depends on safety paperwork. Save to: public/images/fire-risk-assessments/selling-flat-fra.webp

4) BUSINESS POST. Subject: the interior of a small UK commercial premises such as a shop or office, with calm background fire-safety elements: a ceiling smoke detector, an emergency light, an exit sign drawn without readable text (use a generic running-figure-and-arrow shape only), and a fire extinguisher. Save to: public/images/fire-risk-assessments/business-fra.webp

5) AFTER THE ASSESSMENT (REMEDIALS) POST. Subject: a stylised engineer carrying out installation work on a wall-mounted fire alarm or emergency light, with neat tools and a fire door nearby, signalling completed and certified remedial work in progress (no sparks, no danger). Save to: public/images/fire-risk-assessments/after-fra-remedials.webp

Keep all five visually consistent.
```

---

## Image-to-page mapping (for whoever wires them in)

| Image file (web path) | Used on | Suggested role |
|---|---|---|
| `/images/fire-risk-assessments/fra-service-hero.webp` | `/services/fire-risk-assessments` | Page feature image and Open Graph image |
| `/images/fire-risk-assessments/landlord-hmo-fra.webp` | `/blog/landlord-fire-risk-assessment-essex-london` | Post hero and OG image |
| `/images/fire-risk-assessments/selling-flat-fra.webp` | `/blog/fire-risk-assessment-selling-flat` | Post hero and OG image |
| `/images/fire-risk-assessments/business-fra.webp` | `/blog/business-fire-risk-assessment-guide` | Post hero and OG image |
| `/images/fire-risk-assessments/after-fra-remedials.webp` | `/blog/after-fire-risk-assessment-remedial-works` | Post hero and OG image |

Notes for the build step (not for Codex):
- The current blog template renders a gradient hero bar rather than a hero photo, and the service template puts the quote form in the hero. Using these images as the feature and Open Graph image is the lowest-friction integration; placing them inline at the top of the body is the alternative. Either way, set descriptive `alt` text per image when wired in.
- Open Graph images are usually 1200 x 630. A 1600 x 900 source crops cleanly to that ratio, or ask Codex for a second export at 1200 x 630 if you want a dedicated OG crop.
- If Jag prefers photography over illustration, keep the same palette, the same calm and professional tone, the same UK context, and the same do-not-include list, and apply one consistent treatment across all five so they still read as a set.
