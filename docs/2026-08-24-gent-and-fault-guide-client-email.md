# Client email: Gent servicing-only, the approved headline, and the fault guide (Wendy AI)

**Status:** SENT. Reviewed, corrected, drafted once, and sent by the operator on 2026-08-24 at 09:53 BST.

**To:** info@jandlsecurity.co.uk (Jag)
**From:** Wendy AI, The AI Consultancy (ai@theaiconsultancy.ai)
**Subject:** Re: J&L Security Website: Fire Alarm Makes Now Live
**Thread:** `1a010c0d1be48d99`, replying to Jag's message `1a0303c60c949132` of 2026-08-23 20:07
**Draft ID:** `r-4613757720223942802` (draft message `1a032e438c836681`). One draft only, no duplicates.
**Sent:** 2026-08-24 08:53:01 UTC as message `1a032f91ad2b9c64`, in thread `1a010c0d1be48d99`. Sent by the operator, not by the agent. Drafts folder confirmed empty afterwards, so no orphan draft was left behind.
**Format:** AIC branded HTML. Matching body at `docs/2026-08-24-gent-and-fault-guide-client-email.html`.

This is the third email in the thread. Jag is a busy owner, so it is deliberately short: three things shipped, one question still open.

## Verification notes for the operator

Every claim in this email was checked against the code and against production **before** the draft was created. The standing lesson from 17 August applies: the previous draft told Jag the site avoided per-make install claims while the site asserted them in seven places, and only review caught it.

- **"Now live" is verified.** PR [#21](https://github.com/AiC007/jandl-security-site2cc/pull/21) squash-merged to main as `cbadbd9` and deployed. Verified with real curl against `https://jandlsecurity.co.uk`, not against a local build.
- **"Nine places" is verified**, and it is two more than the brief specified. The seven in the brief plus the `about` equipment prose paragraph and the fire-alarms meta description, both found by grepping rather than trusting the notes.
- **"All eight fire alarm location pages"** verified live: 8 of 8 return the Gent qualifier.
- **"The other eleven makes"** verified: twelve supported makes minus Gent.
- **Headline "Was" string** verified against `d103e47`, the commit immediately before this work.
- **"All twelve, each with its own section"** verified live: 12 make sections on the published guide.
- **No panel model names** verified by case-insensitive word-boundary grep of the live page against Syncro, Taktis, XFP, ZFP, MxPro, FireCell, Elan, Excel, XP95, Discovery, ESP, Vigilon and Quantec. Zero hits.
- **No ranking or traffic promises.** No figures at all. The guide is described by what it contains, not by what it will achieve.
- **Format checked against the house spec:** 640px wrapper, grey `#8792a2` preamble, navy `#0A1F3D` section headings, detail tables with `#5b6b7b` label cells and `#0A1F3D` bold value cells, amber `#FEFCE8` / `#F59E0B` callout used once for something that genuinely must be read, "Kind regards, / Wendy AI / The AI Consultancy", statutory footer with 16138782 and 513 7583 86. Zero em dashes, zero en dashes, zero emojis, no orange.

## Corrections applied during review, before the draft was created

1. **"Five of the eight are about servicing, maintenance or fault finding" was not strictly true.** Taken literally, four of the eight are (Chelmsford servicing, Harlow maintenance, City fault finding, Harlow annual service). The brief's count of five included Greenwich monitoring, which is not servicing, maintenance or fault finding. Restated as "most of those pages cover servicing, maintenance, testing, monitoring or fault finding rather than new installation", which is true of six of the eight and cannot be picked apart.
2. **"the title Google shows in the search result" over-claimed.** Google rewrites titles at its own discretion, so we cannot promise what it displays. Changed to "the page title that search engines read", which describes what the page actually does.

## Why the amber callout is used here

It carries the decision most likely to surprise Jag: that his own guide names no panel models and publishes no fault codes or reset procedures. He asked for models in the first place, so the absence needs explaining before he notices it, together with the safety reasoning and an offer to change the line if he disagrees.

## Known site issues named in the PR, deliberately not raised with the client

`/bs5839-compliance/docklands`, plus `smoke-heat-detectors-south-woodford`, `domestic-smoke-alarm-install-basildon` and `interlinked-detectors-chelmsford`, route through `getServiceType()` to the burglar alarm default and show Pyronix PIR equipment. Internal defect, not client-facing news, fix logged for the next round. The Next.js 15.5.23 security upgrade is likewise internal.

---

**The AI Consultancy · J&L Security website update**

Dear Jag,

Thank you for the answers you sent yesterday evening. All three pieces of work are now live on the website.

**Gent is now described as servicing only**

Your answer to point two was the one that needed changes to the site, and it was a good catch on your part. The website had been saying we install, service and take over every make on the list, and that list included Gent. Nine places carried that claim. All nine are corrected.

The site now says we install, service, repair and take over the other eleven makes, and that for Gent we service, maintain, fault find and take over existing systems but do not install new ones. That covers the fire alarms page, the about page, all eight fire alarm location pages, and the two plain-text files we publish at the root of the site for AI assistants such as ChatGPT and Claude.

One related fix went with it. Those fire alarm location pages carried a heading reading **"What We Install in [town]"** directly above the make list. Most of those pages cover servicing, maintenance, testing, monitoring or fault finding rather than new installation, so on fire pages that heading now reads **"Equipment and Makes in [town]"**. Your burglar alarm, CCTV, access control and lighting pages are untouched, because "What We Install" is accurate on those.

**The headline is live, in your wording**

| | |
|---|---|
| Was | BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments |
| Now | BAFE-Certified Fire Alarm Installation and Servicing, plus Fire Risk Assessments |

That is the exact wording you approved, with nothing else changed. It is the page heading and also the page title that search engines read, so both now keep BAFE to the alarm work rather than extending it across the risk assessments.

**The fault guide is live**

| | |
|---|---|
| Address | jandlsecurity.co.uk/blog/fire-alarm-panel-fault-guide-by-make |
| Makes covered | All twelve, each with its own section |
| Also covers | What a fault light means, why silencing the buzzer is not fixing it, the common causes, and what to have ready when somebody calls you |

Each make has its own heading written the way a customer would type it, so the Kentec section is headed "Kentec panel fault". Gent is described there as servicing only, in line with the rest of the site.

> **One deliberate decision you should know about.** There are **no panel model names, no fault codes and no reset procedures** anywhere in the guide, and it says so openly. A fire alarm panel is life safety equipment, what an indication means varies between models and with how the system was set up at commissioning, and a procedure that is right for one panel can be wrong for the next one. We would rather the reader picked up the phone to you than followed something they found online. If you would prefer a different line on that, say so and we will change it.

**One question still open**

**Point four, the panel and model names.** That is the one you did not come back on. You made the point originally that customers describe a fault by make **and model**, and the guide is currently make level only because we did not want to guess at them. Send us the panel or model names you see most often, even as a rough list off the top of your head, and we will build them into the guide. It is the single change that would make it more useful to somebody standing in front of a panel with a fault showing.

Any questions, just reply here or call us on 020 335 50558.

Kind regards,
Wendy AI
The AI Consultancy

---

*Making AI Accessible · Understandable · Affordable*
**The AI Consultancy (London) Ltd** · 70 Horseferry Road, London SW1P 2DU
T: 020 335 50558 · www.theaiconsultancy.ai · ai@theaiconsultancy.ai
Registered in England & Wales No. 16138782 · VAT No. 513 7583 86
