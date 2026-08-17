# Client email: fire alarm makes and terminology now live (Wendy AI)

**Status:** FINAL. Reviewed, corrected, and placed in Gmail drafts on 2026-08-17.

**To:** info@jandlsecurity.co.uk (Jag)
**From:** Wendy AI, The AI Consultancy (ai@theaiconsultancy.ai)
**Subject:** J&L Security Website: Fire Alarm Makes Now Live
**Format:** AIC branded HTML. Matching body at `docs/2026-08-17-fire-alarm-makes-client-email.html`.

## Verification notes for the operator

- **"Now live" is verified.** PR #19 merged to main as `eb3db12` and deployed. Checked on production at 2026-08-17: `/services/fire-alarms`, `/about` and `/llms.txt` all return zero occurrences of `C-Tech`, `C-Tek` and `Kentech`, and all carry C-TEC, Gent, Hochiki and Apollo. The draft was deliberately not created until this was true.
- **The misspelling disclosure is deliberate**, owned as our error, and gives Jag the credit for surfacing it.
- **No ranking or traffic promises.** No figures at all.
- **No model names**, because Jag has not confirmed them.

## Corrections applied after review (recorded because they were real defects)

1. **Question on install versus service was rewritten.** The draft previously told Jag we had used "support" rather than "install" so as not to overclaim on Gent. That was false about what shipped: the site says "install, service and take over" across the whole make list in five places (`app/about/page.tsx:282`, the new FAQ title and answer, `llms.txt`, `llms-full.txt`). Telling him we had been careful, while the site says otherwise, would have been the worst line in the email. It now states the actual position and asks him to confirm it.
2. **"the list you sent on Monday" was wrong.** 17 August is a Monday and his email arrived at 16:17 the same day. Changed to "this afternoon", which also makes the same-day turnaround visible.
3. **Hochiki hedge restored.** The draft implied the Apollo rationale (makes detectors, not panels) covered Hochiki too. Hochiki Europe does make control panels, the L@titude range among them. Jag would have spotted it instantly. The grouping is now described as what we mainly use each make for, not as a claim about what each manufacturer produces.
4. **"manufacturer" replaced with "make"**, matching Jag's own word and the site copy, because EDA Zerio Plus and SmartCell are product ranges.
5. **"matches nothing a customer types into Google" softened.** Google fuzzy-matches misspellings, so the absolute was not supportable.
6. **CTEK moved out of the question list.** Wendy already asked it at 16:20 the same day; asking twice in a branded email reads badly. It is now stated as a decision he can overturn.
7. **The BAFE hero tagline added as a question.** This is the highest-value question in the email and was missing. The fire alarms page headline reads "BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments", which read strictly extends BAFE to risk assessments. J&L is BAFE certified for alarm installation and maintenance only.
8. **"None of these are urgent" removed**, because the closing paragraph holds work pending two of the answers. The email now says plainly which two matter.
9. **Amber callout moved** off the "not urgent" line, which inverted the device, onto nothing. It is not used in this email.
10. **Detail table restyled** to the house spec: label cells `#5b6b7b`, value cells `#0A1F3D` bold, `7px 12px` padding, `max-width:560px`.
11. **.md and .html reconciled** word for word.

## Known site issue found during this review, not fixed and not in the email

`/bs5839-compliance/docklands` routes through `getServiceType()` on `s.includes('fire')`, so it falls through to the burglar alarm default and shows Pyronix PIR equipment under a BS 5839-1 heading. BS 5839-1 is the fire alarm standard, so this is a real mismatch on a live page. Small routing fix, logged for the next round.

---

**The AI Consultancy · J&L Security website update**

Dear Jag,

Thank you for the list you sent this afternoon. The fire alarm makes and the terminology are now live across the website.

**What is now on the site**

Every make you listed now appears, grouped by what we mainly use each make for:

- **Control panels:** Kentec, Advanced, C-TEC, Gent, Haes, Fike and Zeta
- **Wireless and hybrid systems:** EMS, EDA Zerio Plus and SmartCell
- **Detection devices:** Apollo and Hochiki

Conventional and addressable were already on the site, and that question has been extended to cover bi-wire as well, in plain English. Bi-wire was not mentioned anywhere on the site before.

There is also a new question answering "which makes of fire alarm panel do you install and service", which tells a customer that the make is usually printed on the front of the panel and asks them to quote it when they call. That is the practical point you were making, and it is now said explicitly rather than left for them to work out.

We have taken "CTEK" to mean C-TEC. Shout if that is not what you meant.

**Two names we had wrong**

Your list caught something. The website had been carrying two of these makes misspelled, and one of them in two different wrong spellings:

- We had **C-Tech** in some places and **C-Tek** in others. Both should have been **C-TEC**.
- We had **Kentech**. It should have been **Kentec**.

That was our error and it has been corrected everywhere. It matters more than it looks: a misspelled make will not reliably match what a customer actually types into Google, so those names were earning you almost nothing.

**Where the makes appear**

The fire alarms service page, the about page, the fire alarm location pages across Essex and London, and the two plain-text summary files we publish at the root of the site for AI assistants such as ChatGPT and Claude to pick up.

**Five things we would like you to confirm**

Numbers two and four are the ones that unlock the next piece of work. The rest can wait until you have a moment.

1. **Fike and Zeta.** Both were already on the site and neither is on your list. We have left them on rather than remove a make you still support. Should they stay?

2. **Installing versus servicing.** The site currently says we install, service and take over every make on the list. Gent is the one we were unsure about. Tell us which you install new and which you service and take over only, and we will split the wording to match.

3. **The three groupings above.** Apollo makes detectors rather than panels, which is why the list is split three ways. Hochiki makes both, and we have put it under detection because that is where most fault calls land. Move anything you would rather see elsewhere.

4. **Panel and model names.** You mentioned that customers describe faults by make **and model**. We have deliberately not put any model names on the site because we did not want to guess. If you send the ones you see most often, we will look at adding them.

5. **One wording point on your fire alarms page.** The headline currently reads "BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments". Read strictly, that puts BAFE across the risk assessments as well, which is not what your certification covers. We would suggest "BAFE-Certified Fire Alarm Installation and Servicing, plus Fire Risk Assessments". Happy to change it if you agree.

**What comes next**

The natural follow-on is a fault-finding guide organised by make, so that somebody searching for something like "Kentec panel fault" lands on your website rather than a manufacturer forum. If that is of interest, we will come back to you with what it would involve once we have your answers on points two and four.

Any questions, just reply here or call us on 020 335 50558.

Kind regards,
Wendy AI
The AI Consultancy

Making AI Accessible · Understandable · Affordable
**The AI Consultancy (London) Ltd** · 70 Horseferry Road, London SW1P 2DU
T: 020 335 50558 · www.theaiconsultancy.ai · ai@theaiconsultancy.ai
Registered in England & Wales No. 16138782 · VAT No. 513 7583 86
