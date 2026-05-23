# Fire Risk Assessments: Four Supporting Blog Posts (Plan and Full Drafts)

**Prepared by:** The AI Consultancy (London) Ltd
**Client:** J&L Security
**Date:** 23 May 2026
**Status:** Drafts for review before being built into `lib/blog.ts`

Standards applied: UK English, no emojis, no em dashes, both phone numbers where a call to action appears, verified legal facts (see the content plan, Section 11), internal links to real site routes only. Each draft is supplied with build-ready front-matter and HTML body matching the existing `BlogPost` format in `lib/blog.ts`.

---

## Part A: Selection and plan

### Which four, and why

The content plan listed six candidate posts. The four selected map one-to-one onto the three customer segments named in Jag's brief (landlords, flat-sale conveyancing, commercial compliance), plus the single differentiator every research report identified as J&L's strongest and least-contested angle (post-assessment remedials).

| # | Post | Brief segment served | Why it is in the first four |
|---|---|---|---|
| 1 | Landlord and HMO fire risk assessments | Landlords and HMOs | Highest-volume audience cluster; complements, without duplicating, the two fire-alarm posts already published |
| 2 | Selling a flat: why your solicitor wants a fire risk assessment | Flat-sale conveyancing | Clearest open gap in the market; owned by solicitors, not service providers; high urgency |
| 3 | Does my business need a fire risk assessment? | Commercial compliance | Completes segment coverage; strong Section 156 hook (all businesses now in scope) |
| 4 | What happens after your fire risk assessment? | Cross-segment differentiator | J&L's revenue model; almost no competitor writes for the step after the report |

Deferred to a later phase: the dedicated pricing post and the blocks-of-flats regulations deep-dive. The pricing post is held back because Jag has chosen quote-after-survey, so a standalone cost article is lower priority for now. The blocks-of-flats regulatory content is folded, in summary form, into posts 2 and 3.

### Per-post plan

**Post 1: Landlord and HMO fire risk assessments**
Target keywords: fire risk assessment landlord, fire risk assessment HMO, landlord fire safety obligations, fire risk assessment rented property.
Intent: informational moving to commercial.
Angle: what the FRA itself requires of landlords (distinct from the alarm system), HMO licensing, what to have ready, what happens when actions are found.
Internal links: FRA service page, HMO fire alarm post, BS 5839 post, fire alarms service page, Brentwood and Romford locations, contact.
Length: ~2,200 words. FAQs: 4.

**Post 2: Selling a flat: why your solicitor wants a fire risk assessment**
Target keywords: fire risk assessment for flat sale, fire risk assessment converted house, FRA to sell flat, EWS1 vs fire risk assessment.
Intent: transactional, high urgency.
Angle: why the request appears in conveyancing, communal FRA versus the individual flat, EWS1 versus FRA, who is responsible, how to avoid a stalled chain.
Internal links: FRA service page, fire alarms page, contact.
Length: ~1,900 words. FAQs: 4.

**Post 3: Does my business need a fire risk assessment?**
Target keywords: fire risk assessment for business, fire risk assessment office, fire risk assessment care home, fire risk assessment required by law.
Intent: commercial.
Angle: the responsible person duty, the Section 156 change removing the five-employee threshold, what is assessed, enforcement and insurance consequences, the single-provider advantage.
Internal links: FRA service page, fire alarms page, security and emergency lighting page, contact.
Length: ~1,900 words. FAQs: 4.

**Post 4: What happens after your fire risk assessment?**
Target keywords: fire safety remedial works, fire alarm upgrade after FRA, FRA action plan, what happens after a fire risk assessment.
Intent: informational moving to transactional.
Angle: how to read an action plan, the common remedials (alarms, emergency lighting, electrical testing, fire doors), prioritisation, certification and records, why one provider is simpler.
Internal links: FRA service page, fire alarms page, security and emergency lighting page, BS 5839 post, contact.
Length: ~1,900 words. FAQs: 4.

---

## Part B: Full drafts

Each post below is build-ready. The front-matter block matches the `BlogPost` interface in `lib/blog.ts`. The body is HTML, consistent with the existing posts (paragraphs, `h2`/`h3`, lists, internal links, no inline images; the hero image is handled separately, see the Codex prompt).

---

### POST 1

```
slug: 'landlord-fire-risk-assessment-essex-london'
title: 'Landlord and HMO Fire Risk Assessments: What You Must Have in Place in 2026'
metaTitle: 'Landlord Fire Risk Assessment Guide (Essex & London 2026)'
description: 'A clear guide to fire risk assessment duties for landlords and HMO operators in Essex and London. Who needs one, what it covers, HMO licensing, and what to do when actions are found.'
datePublished: '2026-05-23'
dateModified: '2026-05-23'
keywords: ['fire risk assessment landlord', 'fire risk assessment HMO', 'landlord fire safety obligations', 'fire risk assessment rented property', 'HMO fire risk assessment Essex']
wordCount: 2200
```

<p>If you let property, fire safety is one of the duties you cannot delegate away by simply hiring a managing agent or an installer. As a landlord you are very often the responsible person in law, and that means making sure a suitable and sufficient fire risk assessment is in place and kept up to date. This guide explains when you need one, what it covers, how it relates to HMO licensing, and what to do when the assessment identifies work that needs doing.</p>

<p>It is written for landlords and HMO operators in Essex and Greater London. It does not replace legal advice, but it will tell you what good practice looks like and where the common compliance gaps are.</p>

<h2>When a landlord needs a fire risk assessment</h2>

<p>The Regulatory Reform (Fire Safety) Order 2005 places a duty on the responsible person to carry out and maintain a fire risk assessment. For a let property, the responsible person is usually the landlord, the freeholder, or the managing agent, depending on who controls the relevant part of the building.</p>

<p>The key distinction is between the dwelling itself and any shared or communal space:</p>

<ul>
<li><strong>A single property let to one household</strong> (one family or one group on a single tenancy) sits outside the Fire Safety Order for the interior of the home itself. Even so, you still have separate duties, for example to provide working smoke alarms, and many landlord insurance policies expect a fire risk assessment in any case.</li>
<li><strong>Any building with communal areas</strong>, such as a shared hallway, staircase or entrance serving more than one dwelling, is firmly within scope. The communal areas must be assessed.</li>
<li><strong>Houses in multiple occupation</strong> have the clearest and strictest obligations, covered below.</li>
</ul>

<p>If you are not sure which category your property falls into, treat the presence of any shared space as the trigger. As soon as two households share a route in or out of the building, an assessment of those shared parts is expected.</p>

<h2>Houses in multiple occupation: the strictest obligations</h2>

<p>A house in multiple occupation, or HMO, is a property rented to three or more tenants who form more than one household and share facilities such as a kitchen or bathroom. Larger HMOs, generally those with five or more occupants, usually require a mandatory licence from the local authority.</p>

<p>For HMOs, a fire risk assessment is not optional. Local authority licensing teams will expect to see one, and the assessment commonly drives specific conditions on your licence, including the grade and category of fire alarm system, the protection of escape routes, and the standard of fire doors. The Housing Act 2004 sits alongside the Fire Safety Order here, and councils use it to enforce fire safety standards in rented housing.</p>

<p>The fire risk assessment and the fire alarm system are related but separate things. The assessment decides what level of detection the building needs; the alarm system then has to be installed and maintained to that level. We cover the alarm side in detail in our guide to <a href="/blog/hmo-fire-alarm-requirements-bs5839">fire alarm requirements for HMO landlords</a> and the difference between the relevant standards in <a href="/blog/bs5839-1-and-bs5839-6-explained-2026">BS 5839-1 and BS 5839-6 explained</a>.</p>

<h2>What changed for landlords since 2023</h2>

<p>Several reforms since the Grenfell Tower fire have tightened the duties on landlords and building owners. The most important for everyday landlords are:</p>

<ul>
<li><strong>Section 156 of the Building Safety Act 2022</strong>, effective 1 October 2023, removed the old threshold that only required a written assessment where there were five or more employees. The assessment must now be recorded in full, whatever the size of the operation. For a single-property landlord with a communal area, that means the assessment has to be written down and kept.</li>
<li><strong>The Fire Safety (England) Regulations 2022</strong>, in force since 23 January 2023, added duties for multi-occupied residential buildings, with extra requirements for buildings over 11 metres and over 18 metres in height, including checks on communal and flat entrance fire doors.</li>
<li><strong>The Fire Safety Act 2021</strong> confirmed that the structure, external walls and individual flat entrance doors of multi-occupied residential buildings fall within the scope of the assessment.</li>
</ul>

<p>The practical effect is that more landlords need a written assessment, and the assessment has to cover more of the building than many older documents did. If your assessment predates these changes, it is likely to be out of date.</p>

<h2>What a landlord fire risk assessment covers</h2>

<p>A competent assessment of a let building looks at far more than the smoke alarms. Expect it to consider:</p>

<ul>
<li>Sources of ignition and fuel: electrical installations and consumer units, heating, cooking, and stored materials in communal areas.</li>
<li>Means of escape: the route from each dwelling to a place of safety, including the width and protection of stairs and corridors, exit doors, and the removal of obstructions.</li>
<li>Fire detection and alarm provision, judged against the relevant British Standard for the building.</li>
<li>Emergency lighting on escape routes where natural light cannot be relied on.</li>
<li>Fire doors and compartmentation: the doors and walls that hold a fire back long enough for people to get out.</li>
<li>Signage, records, and the management of fire safety, including who is responsible and how often the assessment is reviewed.</li>
</ul>

<p>The output is a written report listing the hazards found, the people at risk, and a prioritised action plan. The action plan is the part that matters most, because it tells you what to fix and in what order.</p>

<h2>How often to review it</h2>

<p>There is no single fixed interval in law, but the assessment must be kept up to date. Good practice is to review it at least annually, and to review it sooner whenever something changes: a new tenant profile, a change of use, building work, a near miss, or a change in the law. A document written three years ago that has never been revisited will not stand up to scrutiny from a licensing officer or an insurer.</p>

<h2>What to do when the assessment finds actions</h2>

<p>Most assessments identify at least some remedial work. This is normal and is the point of the exercise. The risk for landlords is treating the report as the finish line rather than the start of the work.</p>

<p>This is where dealing with a single provider helps. J&L Security arranges the assessment through an accredited assessor, and then carries out the remedial work directly: fire alarm installation and upgrades to <a href="/blog/bs5839-1-and-bs5839-6-explained-2026">the relevant BS 5839 standard</a>, emergency lighting, electrical testing, and fire door works. You get one point of contact from the assessment through to a building that meets its action plan, rather than a report that leaves you chasing separate trades. You can see the full service on our <a href="/services/fire-risk-assessments">fire risk assessments page</a> and our <a href="/services/fire-alarms">fire alarms page</a>.</p>

<p>We work across Essex and Greater London, with local teams covering <a href="/locations/brentwood">Brentwood</a>, <a href="/locations/romford">Romford</a>, Chelmsford, Basildon and the surrounding areas.</p>

<h2>A short checklist for landlords</h2>

<ul>
<li>Identify whether your property has any communal area, which brings it into scope.</li>
<li>Make sure a written fire risk assessment exists and is dated within the last year.</li>
<li>Check it reflects the post-2023 changes, including Section 156.</li>
<li>For HMOs, check the assessment against your licence conditions, especially the alarm grade and category.</li>
<li>Action the report: complete the remedial works and keep the certificates.</li>
<li>Diarise the next review.</li>
</ul>

<p>If you would like an assessment arranged and any resulting work carried out by one team, call J&L Security on 0204 538 5925 or 0208 220 4770, or <a href="/contact">request a call back</a>.</p>

**FAQs**

1. **Do landlords legally need a fire risk assessment?** Where a let building has communal areas, or is an HMO, the responsible person, usually the landlord or managing agent, must have a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005. A single property let to one household sits outside the Order for the home itself, but other duties such as working smoke alarms still apply, and insurers often expect an assessment.

2. **How often should a landlord review the fire risk assessment?** Keep it current and review it at least annually, and sooner if the building, its use, or its occupants change. An assessment that has never been revisited is unlikely to be accepted as suitable and sufficient.

3. **Is the fire risk assessment the same as the fire alarm certificate?** No. The assessment decides what level of fire detection the building needs. The alarm system is then installed and certified to meet that level. They are separate documents and you need both.

4. **Can one company do the assessment and the work?** Yes. J&L Security arranges the assessment through an accredited assessor and carries out the resulting fire alarm, emergency lighting and electrical remedial work directly across Essex and Greater London.

---

### POST 2

```
slug: 'fire-risk-assessment-selling-flat'
title: 'Selling a Flat? Why Your Buyer\'s Solicitor Wants a Fire Risk Assessment'
metaTitle: 'Fire Risk Assessment When Selling a Flat (2026 Guide)'
description: 'Selling a flat in a converted house or a block? Here is why the buyer\'s solicitor or lender asks for a fire risk assessment, how it differs from an EWS1 form, who is responsible, and how to avoid a stalled sale.'
datePublished: '2026-05-23'
dateModified: '2026-05-23'
keywords: ['fire risk assessment for flat sale', 'fire risk assessment converted house', 'fire risk assessment to sell flat', 'EWS1 vs fire risk assessment', 'communal fire risk assessment']
wordCount: 1900
```

<p>If you are selling a flat in a converted house or a purpose-built block, there is a good chance the buyer's solicitor or mortgage lender will ask to see a current fire risk assessment for the building before they will let the sale complete. For many sellers this comes as a surprise, often late in the process, and it is a common reason for a sale to stall. This guide explains what is being asked for, why, and how to keep the chain moving.</p>

<p>It is general information rather than legal or conveyancing advice. Treat the fire risk assessment request as a common transaction requirement, not as an automatic legal duty that falls on you as an individual seller. The duty to hold the assessment usually sits with whoever controls the communal parts of the building.</p>

<h2>What is actually being requested</h2>

<p>The document in question is a fire risk assessment of the building's communal areas: the shared entrance, hallways, staircases and any shared plant. It is required under the Regulatory Reform (Fire Safety) Order 2005, and the responsible person for those communal parts, typically the freeholder, the management company, or the managing agent, is the one who should hold it.</p>

<p>The buyer's side asks for it because they want assurance that the building is safe and that the lender's security, the flat, is not exposed to an unmanaged fire risk. A missing, expired, or clearly inadequate assessment is treated as a red flag.</p>

<h2>Why this has become so common</h2>

<p>Two things have driven this. First, fire safety law tightened significantly after the Grenfell Tower fire, and the scope of what an assessment must cover in multi-occupied residential buildings has widened. The Fire Safety Act 2021 confirmed that the structure, external walls and flat entrance doors are within scope, and the Fire Safety (England) Regulations 2022, in force since 23 January 2023, added duties for these buildings.</p>

<p>Second, lenders and conveyancers have become much more cautious about fire safety in flats. Where they once may not have asked, they now routinely require evidence that a current assessment is in place before releasing funds.</p>

<h2>The communal assessment versus your individual flat</h2>

<p>This is the point that confuses most sellers. You generally do not commission a fire risk assessment for the inside of your own flat. What is needed is the assessment of the communal parts of the building, which is the responsibility of the freeholder or management company.</p>

<p>In practice that means, if you are asked for the assessment, your first step is usually to contact your freeholder or managing agent and request the current document. If they have one and it is in date, the request is quickly satisfied. The problems start when the responsible person has not had an assessment done, or it is years out of date.</p>

<h2>Fire risk assessment versus EWS1 form</h2>

<p>These two are frequently confused, and they are not the same.</p>

<ul>
<li>A <strong>fire risk assessment</strong> is a life-safety review of the building required under the Fire Safety Order. It looks at the whole picture of fire risk and management for the communal parts.</li>
<li>An <strong>EWS1 form</strong> is a separate document used by mortgage lenders to assess the external wall system of certain buildings for valuation purposes. It is administered through the valuation process and is not a life-safety assessment in the same sense.</li>
</ul>

<p>One does not replace the other. Depending on the building, you may be asked for both. Knowing the difference helps you respond accurately when a solicitor's enquiry lands, rather than supplying the wrong document and losing more time.</p>

<h2>Who pays for it</h2>

<p>Because the assessment is a duty of the responsible person for the communal areas, the cost normally falls to the freeholder or management company, often recovered through the service charge, rather than to an individual seller. In a converted house where the leaseholders jointly own the freehold, the leaseholders may share the cost between them. If a sale is being held up and the responsible party is slow to act, sellers sometimes arrange and fund an assessment themselves to keep the chain together, but that is a commercial decision rather than a legal obligation.</p>

<h2>How to avoid a stalled sale</h2>

<p>The single biggest cause of delay is leaving the question until a buyer's solicitor raises it. By then you may be weeks from exchange with no document and a slow freeholder. To get ahead of it:</p>

<ul>
<li>Ask your freeholder or managing agent now whether a current communal fire risk assessment exists, and request a copy.</li>
<li>Check the date. If it is more than a year or two old, or predates the 2021 and 2022 changes, expect the buyer's side to question it.</li>
<li>If there is no assessment, raise it with the responsible person early so it can be commissioned before it becomes a chain-breaker.</li>
<li>Keep the assessment and any remedial certificates together so they can be handed over quickly.</li>
</ul>

<h2>How J&L Security can help</h2>

<p>If you are a freeholder, a management company, or a group of leaseholders who need a communal fire risk assessment arranged quickly, J&L Security can help. We arrange the assessment through an accredited assessor and, where it identifies work, we carry out the remedials directly: fire alarm, emergency lighting, electrical testing and fire door works. That single-provider route is usually the fastest way to get from a request on a conveyancing enquiry to a building that is demonstrably compliant.</p>

<p>We cover Essex and Greater London. See our <a href="/services/fire-risk-assessments">fire risk assessments page</a>, or call 0204 538 5925 or 0208 220 4770. You can also <a href="/contact">request a call back</a>.</p>

**FAQs**

1. **Do I need a fire risk assessment to sell my flat?** Usually it is the building's communal fire risk assessment that the buyer's solicitor or lender wants to see, and that is the responsibility of the freeholder or management company, not the individual seller. It is best treated as a common transaction requirement rather than a personal legal duty.

2. **What is the difference between an EWS1 form and a fire risk assessment?** A fire risk assessment is a life-safety review of the building required under the Fire Safety Order. An EWS1 form is a separate lender document about the external wall system for valuation. One does not replace the other, and a building may need both.

3. **Who pays for the fire risk assessment when selling a flat?** The cost normally falls to the responsible person for the communal areas, the freeholder or management company, often through the service charge. Sellers sometimes fund one to keep a sale moving, but that is a commercial choice.

4. **How quickly can an assessment be arranged?** It depends on the building and access, but arranging the assessment and any remedial work through a single provider is usually the fastest route. Contact J&L Security to discuss timescales for your building.

---

### POST 3

```
slug: 'business-fire-risk-assessment-guide'
title: 'Does My Business Need a Fire Risk Assessment? A 2026 Guide for Essex and London Employers'
metaTitle: 'Does My Business Need a Fire Risk Assessment? (2026)'
description: 'A practical guide to fire risk assessment duties for businesses in Essex and London. Who is the responsible person, what the 2023 law change means for small firms, what is assessed, and the consequences of getting it wrong.'
datePublished: '2026-05-23'
dateModified: '2026-05-23'
keywords: ['fire risk assessment for business', 'fire risk assessment office', 'fire risk assessment care home', 'fire risk assessment required by law', 'commercial fire risk assessment Essex']
wordCount: 1900
```

<p>If you run a business from any kind of premises, an office, a shop, a restaurant, a workshop, a warehouse, or a care setting, you almost certainly need a fire risk assessment, and since October 2023 you almost certainly need it in writing. This guide sets out who is responsible, what changed in the law, what the assessment covers, and what happens if you do not have one.</p>

<h2>Who is responsible</h2>

<p>The Regulatory Reform (Fire Safety) Order 2005 places the duty on the responsible person. In a business that is usually the employer, the owner, or whoever has control of the premises. If you occupy the building, that responsibility is generally yours, even if you rent rather than own. Where more than one business shares a building, the responsible persons must cooperate and share relevant fire safety information.</p>

<p>You cannot fully contract this duty away. You can appoint a competent person to carry out the assessment, and a competent contractor to do the resulting work, but the legal responsibility for making sure it happens stays with you.</p>

<h2>What changed in 2023, and why it matters for small firms</h2>

<p>The most important recent change is Section 156 of the Building Safety Act 2022, which took effect on 1 October 2023. Before that date, a written fire risk assessment was only mandatory where a business had five or more employees. Section 156 removed that threshold.</p>

<p>The result is that every responsible person must now record the fire risk assessment in full, regardless of the number of staff or the size of the premises. A sole trader running a small shop, a two-person office, a single-unit takeaway: all are now expected to have a written assessment. The same change increased the maximum fine for relevant offences to an unlimited amount.</p>

<p>If your business has fewer than five staff and has been relying on the old exemption, that exemption no longer exists. This is the single most common compliance gap we see among smaller Essex and London businesses.</p>

<h2>What a commercial fire risk assessment covers</h2>

<p>A competent assessment of business premises looks at the whole building and how it is used. Expect it to consider:</p>

<ul>
<li><strong>Ignition and fuel sources:</strong> electrical installations and equipment, heating, commercial kitchens, and stored stock or materials.</li>
<li><strong>People at risk:</strong> staff, visitors, customers, and anyone who may need extra help to evacuate.</li>
<li><strong>Means of escape:</strong> escape routes, final exit doors, travel distances, and whether routes stay clear and usable.</li>
<li><strong>Fire detection and warning:</strong> the alarm system, assessed against the relevant British Standard, and whether it is adequate for the building.</li>
<li><strong>Emergency lighting:</strong> on escape routes, assessed against BS 5266.</li>
<li><strong>Fire-fighting equipment and signage:</strong> extinguishers, notices, and evacuation information.</li>
<li><strong>Management:</strong> training, testing, record keeping, and how often the assessment is reviewed.</li>
</ul>

<p>The output is a written report with a prioritised action plan. Higher-risk settings such as care homes, where occupants may not be able to evacuate unaided, are assessed to a correspondingly higher standard.</p>

<h2>What happens if you do not have one</h2>

<p>The consequences fall into three areas:</p>

<ul>
<li><strong>Enforcement.</strong> Local fire and rescue authorities can inspect premises and take enforcement action. Since the 2023 change, penalties for serious breaches can be substantial, with unlimited fines available for the most serious offences.</li>
<li><strong>Insurance.</strong> A commercial insurer may decline a claim, or challenge cover, if a required fire risk assessment was not in place. The cost of a refused claim after a fire dwarfs the cost of the assessment.</li>
<li><strong>People.</strong> The underlying point of the duty is that an unassessed building is a building where a foreseeable risk to staff and customers has not been managed.</li>
</ul>

<h2>The single-provider advantage</h2>

<p>A fire risk assessment that simply produces a report is only half the job. The value comes from acting on the action plan. J&L Security arranges the assessment through an accredited assessor, then carries out the resulting work directly: fire alarm installation and servicing to <a href="/blog/bs5839-1-and-bs5839-6-explained-2026">BS 5839</a>, <a href="/services/security-lighting">emergency lighting</a>, electrical testing, and fire door works. For a busy business owner, dealing with one company from assessment to compliant premises removes the burden of coordinating several trades.</p>

<p>We work with offices, retail, hospitality, warehousing and care settings across Essex and Greater London. See our <a href="/services/fire-risk-assessments">fire risk assessments page</a> and our <a href="/services/fire-alarms">fire alarms page</a>, or call 0204 538 5925 or 0208 220 4770 to discuss your premises. You can also <a href="/contact">request a call back</a>.</p>

**FAQs**

1. **Is a fire risk assessment a legal requirement for businesses?** Yes. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person for non-domestic premises to have a suitable and sufficient fire risk assessment. Since 1 October 2023 it must be recorded in writing whatever the size of the business.

2. **Does a small business with fewer than five staff need a written assessment?** Yes. Section 156 of the Building Safety Act 2022 removed the old five-employee threshold. All businesses must now record the assessment in full.

3. **How often should a business fire risk assessment be reviewed?** Keep it current and review it at least annually, and sooner if the premises, the work carried out, or the people using the building change.

4. **Can J&L Security do both the assessment and the remedial work?** Yes. We arrange the assessment through an accredited assessor and carry out the resulting alarm, emergency lighting and electrical work directly across Essex and Greater London.

---

### POST 4

```
slug: 'after-fire-risk-assessment-remedial-works'
title: 'What Happens After Your Fire Risk Assessment? Remedial Works Explained'
metaTitle: 'After a Fire Risk Assessment: Remedial Works Explained (2026)'
description: 'Your fire risk assessment is done and the report lists actions. Here is how to read the action plan, the remedial works that commonly follow, how they are prioritised, and why using one provider is simpler.'
datePublished: '2026-05-23'
dateModified: '2026-05-23'
keywords: ['fire safety remedial works', 'fire alarm upgrade after FRA', 'fire risk assessment action plan', 'what happens after a fire risk assessment', 'fire risk assessment remedial works Essex']
wordCount: 1900
```

<p>Getting the fire risk assessment done can feel like the finish line. It is not. The assessment is a diagnosis; the remedial works are the treatment. A report that sits in a drawer with its actions uncompleted leaves you exactly as exposed as if you had never had the assessment at all, and arguably more so, because you now have a written record of risks you knew about and did not address. This guide explains what to do once the report lands.</p>

<h2>How to read your action plan</h2>

<p>A competent fire risk assessment ends with an action plan: a list of the issues found and what needs to be done about each. A good action plan prioritises the actions, usually by risk, so you know what to tackle first. You will typically see something like:</p>

<ul>
<li><strong>High priority or intolerable:</strong> issues that should be addressed urgently, for example a blocked escape route, a non-working alarm, or a failed fire door on an escape route.</li>
<li><strong>Medium priority:</strong> issues that need attention but are not immediately dangerous, for example missing signage or emergency lighting that does not cover the full route.</li>
<li><strong>Low priority or good practice:</strong> improvements that strengthen safety without being strictly required.</li>
</ul>

<p>Work through the plan in priority order, record what you do, and keep the certificates. If anything in the plan is unclear, ask the assessor or your contractor to explain it before you commission work, so you are fixing the right thing.</p>

<h2>The remedial works that commonly follow</h2>

<p>Most action plans draw on a fairly consistent set of remedial works. The most common are below.</p>

<h3>Fire alarm installation or upgrade</h3>

<p>One of the most frequent findings is that the detection is inadequate for the building: too few detectors, the wrong category, or an ageing system that is no longer reliable. The fix is to install or upgrade the alarm to the right category and grade for the building under the relevant British Standard. Our guide to <a href="/blog/bs5839-1-and-bs5839-6-explained-2026">BS 5839-1 and BS 5839-6</a> explains how the standards differ between commercial and domestic settings, and the <a href="/blog/hmo-fire-alarm-requirements-bs5839">HMO fire alarm guide</a> covers the grades for shared housing.</p>

<h3>Emergency lighting</h3>

<p>Assessments often find that escape routes would be unusable in a power cut. Emergency lighting, installed and tested to BS 5266, keeps the route to the exit lit if the mains fails. This is a common requirement in commercial premises and communal residential areas. See our <a href="/services/security-lighting">security and emergency lighting page</a>.</p>

<h3>Electrical testing and certification</h3>

<p>Electrical faults are a leading cause of fire. An assessment may flag that the fixed electrical installation needs testing, or that portable appliances need checking. The remedial work here is testing and certification, and any repairs that follow.</p>

<h3>Fire doors and compartmentation</h3>

<p>Fire doors that do not close properly, are damaged, or have gaps that are too large, will be flagged because they are the passive measure that holds a fire back. Remedial work ranges from adjusting and repairing doors to replacing them, and sealing gaps in walls and floors where services pass through.</p>

<h2>Prioritising and budgeting</h2>

<p>You do not have to do everything at once, but you do have to do the urgent items promptly and have a credible plan for the rest. A sensible approach is to complete all high-priority actions immediately, schedule the medium-priority items over the following weeks, and record target dates for the rest. Keeping a documented schedule of works, with dates and certificates, demonstrates that you are managing the risk, which is exactly what an enforcing authority or insurer wants to see.</p>

<h2>The records that prove compliance</h2>

<p>Modern fire safety expects a clear record. For each remedial action you should be able to show what was done, by whom, when, and to what standard. That means keeping commissioning and test certificates for alarm and lighting work, electrical certificates, and records of fire door works. Together with the assessment and its action plan, these form the evidence trail that shows the building is being managed safely.</p>

<h2>Why one provider is simpler</h2>

<p>The awkward part of the post-assessment phase is coordination. A typical action plan can touch the alarm system, the emergency lighting, the electrics and the fire doors, which can mean four different trades, four quotes, and four sets of paperwork to chase.</p>

<p>J&L Security removes that. We arrange the assessment through an accredited assessor and then carry out the remedial works directly, across alarms, emergency lighting, electrical testing and fire doors, with the certification handled in one place. You deal with one company from the report through to a building that meets its action plan. See our <a href="/services/fire-risk-assessments">fire risk assessments page</a> and <a href="/services/fire-alarms">fire alarms page</a>.</p>

<p>We cover Essex and Greater London. To turn an action plan into completed, certified work, call 0204 538 5925 or 0208 220 4770, or <a href="/contact">request a call back</a>.</p>

**FAQs**

1. **What are remedial works after a fire risk assessment?** They are the actions the assessment recommends to reduce fire risk: typically fire alarm upgrades, emergency lighting, electrical testing, and fire door repairs or replacement. The action plan lists them, usually in priority order.

2. **Do I have to complete every action immediately?** Urgent, high-priority actions should be addressed promptly. Lower-priority items can be scheduled, but you should have a documented plan with target dates and keep the certificates as you go.

3. **What records should I keep?** Keep the assessment and its action plan, plus commissioning and test certificates for alarm and emergency lighting work, electrical certificates, and records of any fire door works. Together these prove the risk is being managed.

4. **Can J&L Security carry out all the remedial works?** Yes. We handle fire alarms, emergency lighting, electrical testing and fire door works directly across Essex and Greater London, with certification in one place, after arranging the assessment through an accredited assessor.

---

## Part C: Build notes

When these are approved, each post drops into the `blogPosts` array in `lib/blog.ts` using the front-matter shown and the HTML body (the FAQ lists convert to the `faqs` array on each post object, which the existing blog template renders and feeds into FAQ schema). Word counts are approximate and should be set to the final figure. All internal links point to routes that either exist now or will exist once the FRA service page is built; the FRA service page must be live before these posts go live so the links resolve.
