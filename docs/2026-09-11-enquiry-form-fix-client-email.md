# Client email: Enquiry form fixed, and three other repairs (Wendy AI)

**Status:** FINAL. Fix merged to main as `98887be` (PR #22), redeployed to production 2026-09-11, live test submitted 12:21 BST and accepted (HTTP 200, reference `quote_1789125715497_x26khtnhn`), delivery confirmed in the Resend log. Canonical `.md` and `.html` written before the single Gmail draft was created.

**Tier:** Substantive (a defect disclosure). The answer sits in the first three lines; the detail goes underneath. Body is about 330 words; the carve-out applies because the email corrects an error and discloses something the client would rather know.

**Figures:** Verified 2026-09-11 against Vercel runtime error logs for project `prj_kjQddN8ApAxbOT3e6zr7zKYiRKJ3`: one error group on `/api/quote`, `ENOENT: no such file or directory, mkdir '/var/task/data'`, count 5, users 3, first seen 2026-06-23 07:01 UTC, last seen 2026-09-11 09:44 UTC. The last of the five is The AI Consultancy's own diagnostic test this morning, so the genuine figure is up to four failed attempts from two visitors. The site moved to Vercel on 2026-04-12 and the fault is structural (read-only filesystem), so no form submission could have reached the client at any point since then. Sitemap figure: 10 of 111 URLs returned 404 on production, verified by curl on 2026-09-11 before the fix and 111 of 111 returning 200 after it.

**Delivery mechanism:** Resend HTTP API, key "J&L Website" (sending access, restricted to theaiconsultancy.ai), sender "J&L Security Website <enquiries@theaiconsultancy.ai>", recipient info@jandlsecurity.co.uk on production. Preview and development deployments send to ai@theaiconsultancy.ai with [TEST] in the subject.

**To:** info@jandlsecurity.co.uk
**From:** Wendy AI Assistant, The AI Consultancy (ai@theaiconsultancy.ai)
**Subject:** J&L Security Website: Enquiry Form Fixed

Format: AIC branded HTML (house rule).

---

Dear Jag,

Thank you for flagging the enquiry form on yesterday's call. You were right: it was not working, it is now fixed, and a test enquiry sent through the live form at 12:21 today should be in your inbox, from "J&L Security Website".

**What was wrong**

The form was saving each enquiry to a folder on the web server and was never set up to email it to you. Since the site moved to its current hosting in April, the server has not allowed that folder to be written, so every submission failed. The visitor saw nothing happen; the enquiry went nowhere. The hosting logs show two visitors hit this since late June. We cannot see further back than that, so please treat any enquiry you expected through the website since April as not having arrived. We are sorry this was not caught sooner.

**What is now in place**

Each enquiry is emailed to info@jandlsecurity.co.uk within seconds of the customer pressing the button. The email carries their name, phone number (as a tap-to-call link), the service they asked about, their postcode and the time. If delivery ever fails, the customer now sees a clear message asking them to call you on 0204 538 5925 or 0208 220 4770, rather than a silent nothing.

**Three other repairs made in the same session**

- Ten of the site's pages were listed in the sitemap we send to Google under addresses that did not exist. Google was told about 111 pages and found 10 of them missing. All 111 now resolve.
- The "Related services" and "Nearby areas" links at the bottom of your 50 service-and-area pages (for example, Fire Alarm Installation in Brentwood) all led to a page-not-found error. They now work.
- The WhatsApp buttons across the site have been tidied so the pre-filled message opens cleanly on every phone. The number behind them is unchanged, 0204 538 5925. If you would like a different number on WhatsApp, reply with it and we will change it the same day.

**One thing to expect**

Enquiry emails come from enquiries@theaiconsultancy.ai, our sending address, so please add it to your safe senders if the test has landed in junk. Please also reply to this email to confirm the test enquiry reached you.

Any questions, just reply here or call us on 020 335 50558.

Kind regards,
Wendy AI
The AI Consultancy
