# Client email: September 2026 performance report (Wendy AI)

**Status:** CANONICAL COPY, reviewed (independent second pass, 2026-09-30) and corrected before any draft existed. Gmail draft created once: `r1635903352710068737` (new thread, series subject). **Not sent.** Operator sends.

**Review fixes applied:**
1. The opening overclaimed. "The traffic that matters held" and "almost all" were replaced: daily clicks fell from about 7.5 (1 to 15 September) to about 5.8 (16 to 28 September), against 6.4 across August, and the email now says so.
2. The timeline. The 11 September release also repaired the internal links on all 50 service-and-area pages and ten broken sitemap entries, five days before the fall. The email now says this rather than implying nothing of ours came first, and adds it to the September work.
3. The "clicks from those pages 49 against 40" figure depended on a hand-picked list of pages, so it was dropped. "About four in five" holds either way: 80% on the 13-page list, 84% on all pages beyond position 20.
4. The four July pages. Their combined impressions, down 45% from 11,356 to 6,226, are now stated, not just the positive movement.
5. Position wording: "improved from", not "up from". The average-position gain is partly a mix effect; holding August's weights fixed, it is 25.2 to 22.2.
6. Indexing requests. The August report promised them. The operator confirmed on 2026-09-30 that none were made, for either the three guides or the 14 area pages, so the email discloses this.
7. The homepage comparison was added (27 to 23), and "not in Google" was softened to "no activity in Google's data".
8. Page-dimension totals do not reconcile exactly with date totals: August 39,426 impressions and 180 clicks by page, against 38,706 and 179 by date. The email uses the date totals.

**Series:** Automated Website Performance Report. It follows the August report, `docs/2026-08-31-august-performance-report-client-email.md`.

**Tier:** Substantive: figures, a disclosure of what was not delivered against the August plan, and two questions. The answer is in the first paragraph.

**Evidence:** Search Console (`sc-domain:jandlsecurity.co.uk`), pulled on 2026-09-30. Like-for-like periods, 1 to 28 September against 1 to 28 August. 29 September is partial and 30 September is not yet reported, so both are excluded.

- **Totals, summed from daily rows:**

  | | Aug 1-28 | Sep 1-28 |
  |---|---|---|
  | Clicks | 179 | 187 (+4%) |
  | Impressions | 38,706 | 26,631 (-31%) |
  | Blended position (impression-weighted) | 24.5 | 19.9 |
  | CTR | 0.46% | 0.70% |

  August's full month settled at 186 clicks and 42,020 impressions. The August report gave 181 and 39,950 for 1 to 29 August.
- **The fall starts on 16 September.** Daily impressions averaged about 1,170 for 1 to 15 September and about 700 for 16 to 28 September, while daily position improved from about 23 to between 10 and 15. None of the site changes deployed in September went live before 28 September, apart from the enquiry form and WhatsApp fixes on 11 September, which changed no page content.
- **Where the fall came from:**
  - Pages averaging worse than position 20 in August lost 9,629 impressions (25,485 down to 15,856), about 80% of the total 12,075 lost.
  - Those pages are the homepage, the BS 5839 explainer, the Hornchurch, Barking, Basildon, Chelmsford, Enfield, Greenwich and Stratford area pages, and the burglar alarm, fire alarm, fire risk assessment and CCTV service pages.
  - Clicks from that group went from 40 to 49.
  - The cause is not visible in Search Console data, and the email says so.
- **Pages:**

  | Page | August | September |
  |---|---|---|
  | HMO guide | 77 clicks, position 8.4 | 93 clicks, 7,564 impressions, position 6.2 |
  | Selling-a-flat guide | 54 clicks, position 4.7 | 43 clicks, position 4.2 |
  | Homepage | 27 clicks | 23 clicks |
  | BS 5839 explainer | 8 clicks | 16 clicks |

  The query "hmo fire alarm requirements" averaged position 1.2 in September.
- **The four area pages rewritten in July (Barking, Hornchurch, Basildon, Greenwich):** combined impressions went from 11,356 to 6,226, and clicks from 3 to 6.

  | Page | Aug position | Sep position |
  |---|---|---|
  | Barking | 34.3 | 25.1 |
  | Basildon | 32.2 | 26.7 |
  | Greenwich | 27.0 | 22.7 |
  | Hornchurch | 26.7 | 33.5 |
- **Indexing (URL Inspection, 2026-09-30):**
  - Martyn's Law and the commercial fire alarm cost guide: "Discovered - currently not indexed".
  - Panel fault guide and beeping guide: "URL is unknown to Google".
  - Brentwood and Clapham: "unknown".
  - Inspection has proved unreliable for this site: Brentwood read "Discovered" on 28 September and "unknown" today.
- **Delivery against the August plan,** checked in git:
  - No September commit added internal links to the Martyn's Law or commercial cost guides. The fault guide gained one link, from the beeping guide.
  - The fire risk assessment service page was not changed.
  - No directory listings were made.
  - The platform update shipped on 28 September (PR #24).

**To:** info@jandlsecurity.co.uk
**From:** Wendy AI Assistant, The AI Consultancy (ai@theaiconsultancy.ai)
**Subject:** J&L Security Website: September 2026 Performance Report

Format: AIC branded HTML (house rule). Matching body at `docs/2026-09-30-september-performance-report-client-email.html`.

---

Dear Jag,

This is your end-of-month summary for September. Clicks from Google rose slightly, to 187 from 179, while the number of times your pages were shown fell by 31 per cent. About four in five of the lost appearances were on pages sitting beyond position 20, where very few people click, so visits held across the month. The last two weeks were quieter than the first two, at about 6 visits a day against 7 to 8, so we will watch October before calling that settled.

**Headline results**

Comparing 1 to 28 September with the same 28 days of August:

- **Clicks: 187,** up from 179. These are visits to your website from Google search.
- **Impressions: 26,631,** down from 38,706. This is how often your pages appeared in search results.
- **Average position: 19.9,** improved from 24.5 (lower is better). Part of this is because poorly ranked pages were shown far less.
- **Click rate: 0.70 per cent,** up from 0.46 per cent.

For the record, August's full month settled at 186 clicks and 42,020 impressions.

> **Why impressions fell.** The drop began on 16 September. The only changes to your site before then were on 11 September: the enquiry form and WhatsApp fixes, and a repair to broken links and sitemap entries on the area and service pages. Everything else went live on the 28th. Most of the lost appearances came from pages that averaged beyond position 20 in August, chiefly your area pages and the burglar alarm and fire alarm service pages. Google's data does not show why it began showing them less often, so we will watch whether the pattern continues in October.

**Your best-performing pages**

- **HMO fire alarm guide:** 93 clicks, up from 77, at position 6.2, improved from 8.4. For "hmo fire alarm requirements" it now averages position 1.2.
- **Selling-a-flat guide:** 43 clicks at position 4.2, down from 54 clicks.
- **Homepage:** 23 clicks, down from 27.
- **BS 5839 explainer:** 16 clicks, double August's 8.

**The area pages we rewrote in July**

Three of the four moved up: Barking from 34 to 25, Basildon from 32 to 27 and Greenwich from 27 to 23. Hornchurch slipped from 27 to 34. Together they brought 6 clicks, up from 3, but they were shown 45 per cent less often than in August, so the picture is mixed rather than a steady climb.

**What we did in September**

On 11 September we fixed the enquiry form, so enquiries now reach your inbox, and repaired broken links between your area and service pages. We also changed the WhatsApp number and added your domestic makes, carbon monoxide alarms, the beeping guide and the FAQs search. We corrected eight pages that showed the wrong content, and updated Stratford and the lock and safe pages. Fulham, Battersea and Streatham were extended, and the Clapham and Chelsea and Kensington pages added. The eight area pages Google had not picked up were rewritten, and the platform security update went in.

**What we did not get to**

September's time went on the work above, so three items from last month's plan did not happen:

- **The three newest guides** (Martyn's Law, commercial fire alarm costs and the panel fault guide) still show no activity in Google's data. We did not add the extra internal links we promised, and we did not submit the indexing requests we said we would.
- **The fire risk assessment service page** has not been rebuilt, for the third month running.
- **The trade and certification directories** have not been started.

**The plan for October**

1. Submit indexing requests for the three guides, the beeping guide and the rewritten and new area pages, and link the guides from your HMO guide, your busiest page.
2. Rebuild the fire risk assessment service page.
3. Hold Chelmsford and Enfield until we see how the July pages and the eight rewritten ones respond.

**Two questions**

1. **Enquiries:** how many enquiries has the website form brought in since 11 September? This is the first month we can measure it.
2. **Directories:** Checkatrade, Trustpilot and the SSAIB and BAFE listings mostly need you to sign up or log in. Would you like us to send a short list of what each one needs from you?

Kind regards,
Wendy AI
The AI Consultancy

Making AI Accessible · Understandable · Affordable
**The AI Consultancy (London) Ltd** · 20 Wenlock Road, London N1 7GU
T: 020 335 50558 · www.theaiconsultancy.ai · ai@theaiconsultancy.ai
Registered in England & Wales No. 16138782 · VAT No. 513 7583 86
