# Client email: reply to Jag on domestic fire alarm makes (Wendy AI)

**Status:** CANONICAL COPY, REVIEWED, APPROVED by the operator 2026-09-28. Gmail draft created once, 2026-09-28, as a reply in thread `1a0e714b643af248`: draft `r-4524881033299591077`, message `1a0e72f750409250`. **Not sent.** Operator sends.

**Reply to:** Jag's message `1a0e714b643af248` of 2026-09-28 08:13 UTC, thread `1a0e714b643af248`.

**Tier:** Substantive (a proposal plus a defect disclosure). The answer sits in the first paragraph. Body is about 540 words; the carve-out applies because the email discloses live defects and carries figures.

**Evidence:** `docs/2026-09-28-domestic-makes-research.md`. Every figure and claim below is traced there:
- "Aico smoke alarm" about 9,900 a month and "Aico installer" about 20: DataForSEO UK via OpenSEO, 2026-09-28. Estimates.
- "led by shops such as Screwfix, Amazon and B&Q": UK SERP for "aico smoke alarm", 2026-09-28 (organic 2, 3 and 9; the rest eBay, trade suppliers, Aico).
- "forums and question sites such as Reddit": UK SERPs for "fireangel smoke alarm beeping" and "hispec smoke alarm beeping", 2026-09-28. No manufacturer page in either top 10 organic.
- BS 5839-6 coverage: live curl 2026-09-28. `/services/fire-alarms` 19 mentions, `/faqs` 12, every `/locations/*` page, the HMO guide and the BS 5839 explainer. **Not** on any fire matrix page, hence the commitment to write the domestic pages to BS 5839-6.
- Eight pages on the wrong content: live curl 2026-09-28, all HTTP 200. Five fire-domain pages contain "Pyronix Euro and Enforcer"; `/emergency-locksmith/romford` shows lighting content ("emergency" matches the lighting rule); `/bs3621-locks/ilford` and `/safe-fitting/brentwood` show Pyronix. Root cause `getServiceType()` at `app/[service]/[location]/page.tsx:637`. Stratford as fire is an inference, so the email asks.
- FAQ search box: `app/faqs/page.tsx:224`, an input with no handler; the live page renders it.
- Aico directory name and levels: `aico.co.uk/homeowner/find-an-expert-installer/`, fetched 2026-09-28.

**Review (independent second pass, 2026-09-28), applied before any draft existed:**
1. Footer address was 70 Horseferry Road, copied from the 11 September email. The firm moved to 20 Wenlock Road, London N1 7GU on 9 September. Corrected. (The 11 September email went out with the old address; not material, no correction email.)
2. Defect disclosure named four pages; eight are affected. Now complete.
3. "BS 5839-6: nothing further is needed" contradicted the fix: re-pointing the domestic pages at the existing fire block would put BS 5839-1 commercial text (6-monthly servicing, call points) on domestic smoke alarm pages. Now commits to writing them to BS 5839-6.
4. Jag's "search functions" was not answered, and the FAQs search box is dead. Now addressed.
5. "motion sensors" changed to PIR detectors; Aico directory given its real name and room for "none of these"; search findings softened ("led by", "could compete"); question 2 reworded, because self-contained alarms are replaced rather than serviced; beeping guide may point to manufacturer guidance for simple checks.

**Operator decisions (2026-09-28):**
1. **Beeping guide offered with no price.** Kept as written.
2. **FAQs search box: make it work.** Chosen over removal: a client-side filter over the server-rendered questions keeps every answer in the HTML for Google, and it may be what Jag meant by "search functions". Email line changed from "either make it work or remove it" to "make it narrow the questions as you type" after review; not a material change.
3. **Send first, fix after.** The eight-page fix and the makes follow once Jag answers.

**To:** info@jandlsecurity.co.uk
**From:** Wendy AI Assistant, The AI Consultancy (ai@theaiconsultancy.ai)
**Subject:** Re: Adding more fire alarm makes to the website

Format: AIC branded HTML (house rule). Matching body at `docs/2026-09-28-domestic-makes-client-email.html`.

---

Dear Jag,

Yes, we can add all four. We suggest three things: add the makes across the fire alarm pages with a line on your Aico Expert Installer status; correct eight pages that are showing the wrong content; and, if you would like it, a short guide for customers whose alarm keeps beeping. Two quick answers from you, at the bottom, let us finish the first.

**Why the makes alone will not bring many searches**

Most people who search these names are buying an alarm, not looking for an installer. "Aico smoke alarm" is searched about 9,900 times a month in the UK, and the results are led by shops such as Screwfix, Amazon and B&Q; "Aico installer" is searched about 20 times. Adding the makes helps customers and AI assistants see what you work on, but it will not put you among the shops.

The opening is when an alarm starts beeping. People type the make and "beeping", and for FireAngel and Hispec the top results are currently forums and question sites such as Reddit. A guide by make could compete there. It would explain what the beeping usually means, point to the manufacturer's own guidance for simple checks, and say when to call you, particularly for mains-wired and interlinked alarms.

**BS 5839-6 and search**

BS 5839-6 is already covered on the fire alarms page, the FAQs, every location page and two guides. When we correct the three domestic pages below, we will write them to BS 5839-6 so the standard sits alongside your domestic makes.

We have read "search functions" as Google and AI assistants such as ChatGPT. If you meant the search box on your FAQs page: it does not currently filter anything, and we will make it narrow the questions as you type.

> **Pages we need to correct.** Five of your fire alarm service-and-area pages are showing burglar alarm content (Pyronix panels, PIR detectors, burglar alarm questions and prices) instead of fire content: Domestic Smoke Alarm Install in Basildon, Interlinked Detectors in Chelmsford, Smoke and Heat Detectors in South Woodford, BS 5839-1 Compliance Audits in Docklands, and HMO Alarm Packages in Stratford. The same fault affects three other pages: Emergency Locksmith in Romford shows lighting content, and BS3621 Locks in Ilford and Safe Fitting in Brentwood show burglar alarm content. This is our error, in how those pages are put together, and we will correct all eight. Tell us if HMO Alarm Packages was meant to be about intruder alarms.

**Two questions**

1. **Aico:** Aico's Find an Expert Installer directory lists installers at three levels: City & Guilds Assured, Aico Gold Standard and Platinum Partner. Which of these, if any, applies to J&L, and is the company listed? If you can send the certificate or badge Aico gave you, we will word the claim to match it exactly.
2. **The other makes:** Do you fit Kidde, FireAngel and Hispec alarms new, or mainly replace and maintain existing ones? And across all four makes, do you fit heat and carbon monoxide alarms as well as smoke alarms?

Once we have those, we will add the makes and let you know when they are live. For the beeping guide, just say yes or no.

Any questions, just reply here or call us on 020 335 50558.

Kind regards,
Wendy AI
The AI Consultancy

Making AI Accessible · Understandable · Affordable
**The AI Consultancy (London) Ltd** · 20 Wenlock Road, London N1 7GU
T: 020 335 50558 · www.theaiconsultancy.ai · ai@theaiconsultancy.ai
Registered in England & Wales No. 16138782 · VAT No. 513 7583 86
