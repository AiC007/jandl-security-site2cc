export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  wordCount: number;
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export const blogPosts: BlogPost[] = [
  // PRICING NOTE: Ranges confirmed as indicative. Client to verify before publication if specific figures are used in marketing.
  {
    slug: 'burglar-alarm-cost-uk-2026',
    title: 'How Much Does a Burglar Alarm Cost in the UK? (2026 Prices)',
    metaTitle: 'Burglar Alarm Cost UK 2026: Installation Prices Explained',
    description: 'A practical guide to burglar alarm installation costs in the UK for 2026. Covers bell-only, speech dialler, and monitored systems, plus what affects the price and what to expect from an NSI-approved installer.',
    datePublished: '2026-05-03',
    dateModified: '2026-05-06',
    keywords: ['burglar alarm cost uk', 'alarm installation cost', 'intruder alarm price uk', 'monitored alarm cost', 'home alarm system cost uk', 'pyronix enforcer cost', 'wireless burglar alarm price essex'],
    wordCount: 2380,
    content: `
<p>A professionally installed burglar alarm in the UK typically costs <strong>£450 to £2,500 for a domestic property in 2026</strong>, depending on the system type, the number of detectors, and whether monitoring is included. The figures in this guide are based on our experience installing intruder alarm systems across Essex and Greater London since 2011, including hundreds of installations across Brentwood, Romford, Ilford, Chelmsford, Upminster, and the wider M25 corridor.</p>

<p>The aim of this guide is straightforward: to give you a realistic picture of what a burglar alarm costs to install in the UK in 2026, what affects the price, and what to expect from a properly accredited installer. All figures here are indicative ranges; the only reliable way to get an exact price is to <a href="/contact">book a free site survey</a>.</p>

<h2>Types of Alarm and What They Cost</h2>

<p>UK burglar alarms fall broadly into three system types. The right choice depends on the property, the threat profile, the insurance requirement, and whether police response is needed.</p>

<h3>Bell-Only Systems: £350 to £600 installed</h3>

<p>A bell-only system sounds an external siren when triggered and relies on the noise deterring the intruder and alerting neighbours. There is no monitoring and no automatic notification: if no one hears the siren, no one responds.</p>

<ul>
<li><strong>Typical cost:</strong> £350 to £600 installed</li>
<li><strong>Best for:</strong> low-risk properties, lower-value homes, or as a visible deterrent</li>
<li><strong>Limitations:</strong> no remote notification, no monitoring, not eligible for police response</li>
</ul>

<h3>Speech Dialler / Self-Monitored Systems: £500 to £900 installed</h3>

<p>A speech dialler system has all the features of bell-only plus an automatic notification to your phone. When the alarm triggers, the system either places a pre-recorded voice call to a list of numbers, or sends an SMS, or pushes a notification through a smartphone app. You then decide whether to respond yourself or send a keyholder.</p>

<ul>
<li><strong>Typical cost:</strong> £500 to £900 installed</li>
<li><strong>Best for:</strong> homeowners who want personal notification without committing to monthly monitoring fees</li>
<li><strong>Limitations:</strong> no professional monitoring, no police response eligibility, you must act on the alert yourself</li>
</ul>

<p>Modern speech dialler systems use a SIM card rather than a landline. This matters because BT's PSTN switch-off (the move from copper phone lines to digital, currently scheduled to complete by January 2027) makes traditional dialler-over-landline systems unreliable.</p>

<h3>Professionally Monitored (Grade 2 or 3, ARC): £700 to £1,800 installed plus £15 to £35/month</h3>

<p>A monitored alarm is connected to a 24/7 Alarm Receiving Centre (ARC). When the alarm activates, the ARC verifies the signal, follows the agreed response procedure, and where the system is graded and registered, can request a police response. Police response under the URN (Unique Reference Number) scheme requires the system to be installed and maintained by an inspectorate-approved company (NSI or SSAIB) and to meet at least Grade 2 of the European EN 50131 standard.</p>

<ul>
<li><strong>Typical install cost:</strong> £700 to £1,800 installed for most domestic properties</li>
<li><strong>Monitoring fees:</strong> £15 to £35 per month depending on level of service (key-holder only vs police response)</li>
<li><strong>Best for:</strong> higher-value properties, properties left unoccupied for extended periods, properties where insurance specifies a monitored alarm, and any client who wants police response eligibility</li>
<li><strong>Key advantage:</strong> the only system type eligible for police response and the only system that satisfies stricter insurance requirements</li>
</ul>

<h2>What Affects the Price?</h2>

<p>Beyond the system type, several factors push the price up or down. A free survey lets the installer see them all in context; the ranges below are typical contributions.</p>

<h3>Wired vs Wireless</h3>

<p>Wireless systems use no cabling between the panel and the detectors, so they install faster and with less disruption. The equipment is more expensive, so a wireless installation typically costs 15 to 25 per cent more than a wired equivalent. Wireless is the right choice for listed buildings, finished properties, rented homes, or any property where running cable is impractical. Wired remains the default for new-builds, refurbishments, and any property where the cabling can be installed first-fix.</p>

<h3>Number of Sensors and Detectors</h3>

<p>A typical domestic installation has 4 to 8 detectors: a mix of PIR motion sensors, door contacts, and sometimes vibration sensors. Adding sensors costs £30 to £60 per device installed. Larger properties, properties with outbuildings, or properties with multiple entry points add cost in proportion.</p>

<h3>Property Size and Layout</h3>

<p>A 1-bedroom flat needs fewer detectors and less cable than a 5-bedroom detached. Multi-storey properties take longer to install. As a rough guide for the install component:</p>

<ul>
<li>1 to 2 bedroom flat: £450 to £700</li>
<li>3 bedroom semi-detached: £550 to £1,000</li>
<li>4 to 5 bedroom detached: £800 to £1,800</li>
<li>Larger or complex properties: £1,500 to £2,500+</li>
</ul>

<h3>System Grade (NSI/SSAIB Grade 2 or 3)</h3>

<p>A graded system meets specific resilience and tamper-resistance standards under EN 50131. Grade 2 is appropriate for most domestic properties; Grade 3 is required for higher-risk premises (jewellers, pharmacies, properties with high-value contents). A graded installation uses certified equipment, certified installation procedures, and certified monitoring, and is the prerequisite for police response. Expect a graded installation to add £100 to £400 over an equivalent ungraded system, depending on the components specified.</p>

<h3>Smart App Integration</h3>

<p>Modern panels from Pyronix, Texecom, and Risco support smartphone control: arm and disarm remotely, receive push notifications, view system status, check the event log. Smart integration adds £50 to £150 to the installed cost, plus an optional small annual cloud-connectivity subscription on some manufacturers.</p>

<h3>Annual Maintenance Contract</h3>

<p>Most installers offer a maintenance contract that bundles servicing visits, priority callout, and (for monitored systems) the monitoring contract. The cost of the contract is sometimes baked into a slightly higher install price; sometimes it is an annual fee on top.</p>

<h2>J&amp;L Security 2026 Pricing: Confirmed Installed Rates</h2>

<p>The ranges above are sector-wide indicative figures. The pricing in this section is our own confirmed 2026 starting pricing for installations in Essex and Greater London. Final quotations follow a free site survey because the property layout determines the detector count and cable routes; the figures below are the published starting points.</p>

<h3>Standard Wireless Grade 2 Residential Package: from £485 + VAT</h3>

<p>Our standard residential package uses the Pyronix Enforcer V11 wireless Grade 2 control panel and includes everything most homes need for the main entry points and ground floor:</p>

<ul>
<li>Pyronix Enforcer V11 control panel with on-board keypad (mains powered)</li>
<li>Wireless door contact, fitted to the main entrance door</li>
<li>Two wireless motion detectors</li>
<li>Two proximity tags</li>
<li>Wireless external siren</li>
</ul>

<p>The package starts at <strong>£485 + VAT</strong>, installed and commissioned. Most properties require additional detectors to cover side and rear access, internal high-traffic rooms, and any outbuildings. The exact specification is finalised at the survey based on the layout.</p>

<h3>Additional Detectors and Accessories</h3>

<p>The following items can be added to the standard package or specified up front:</p>

<table>
<thead>
<tr><th>Component</th><th>Price (excl. VAT)</th></tr>
</thead>
<tbody>
<tr><td>Wireless motion detector</td><td>from £55</td></tr>
<tr><td>Door contact (additional)</td><td>from £45</td></tr>
<tr><td>Vibration detector</td><td>from £65</td></tr>
<tr><td>Combined vibration and door/window contact</td><td>from £75</td></tr>
<tr><td>Dummy siren (typically rear or side elevation)</td><td>from £25</td></tr>
<tr><td>Wireless external siren (additional)</td><td>from £125</td></tr>
<tr><td>Proximity tag (additional)</td><td>from £12</td></tr>
<tr><td>Keyfob</td><td>from £45</td></tr>
<tr><td>Panic button</td><td>from £65</td></tr>
<tr><td>LCD keypad</td><td>from £115</td></tr>
</tbody>
</table>

<h3>Smartphone Control: Homecontrol 2.0 App</h3>

<p>The Pyronix Enforcer V11 connects to your home internet router and pairs with the Homecontrol 2.0 app. The app gives you live status, push notifications for activations and faults, and remote arm/disarm. The pricing structure is straightforward:</p>

<ul>
<li>Communication module plus first year of app subscription: <strong>from £48 + VAT</strong></li>
<li>Annual app subscription thereafter: <strong>from £30 + VAT</strong></li>
<li>SIM card option for properties without reliable broadband: priced on survey</li>
</ul>

<p>The system without the module is a "bells only" alarm: it sounds at the property when triggered but does not notify anyone remotely. For most residential customers, the app integration is the recommended option because it converts a passive deterrent into a system you can interact with from anywhere.</p>

<h3>24-Hour Monitoring and Police Response</h3>

<p>For customers who want professional monitoring on top of the app, our 24-hour UK-manned call centre option starts at <strong>£105 + VAT per year</strong>. When the alarm activates, you receive the app notification and a call handler also contacts you to confirm the situation and follow the agreed escalation path. Police response can be incorporated where the system is graded and registered for a Unique Reference Number under the police response scheme.</p>

<h3>Maintenance Contracts</h3>

<p>Annual servicing keeps the system reliable and is required by most home insurance policies for the alarm to remain a valid security measure. Our maintenance starts at:</p>

<ul>
<li>Residential properties: <strong>from £120 + VAT per year</strong></li>
<li>Commercial properties: <strong>from £180 + VAT per year</strong></li>
</ul>

<p>Both packages include one routine annual maintenance visit and one emergency callout within the contract year.</p>

<p><em>Note on pricing: all figures above are starting prices excluding VAT. The final quotation is provided in writing after a free site survey, because the detector count, mounting requirements, and cable routes vary by property. Pricing is current as at May 2026 and may be reviewed periodically.</em></p>

<h2>NSI and SSAIB Approved Installer vs Unaccredited: Why It Matters</h2>

<p>The two recognised inspectorates for the UK security industry are <strong>NSI</strong> (National Security Inspectorate) and <strong>SSAIB</strong> (Security Systems and Alarms Inspection Board). An installer that is not approved by one of these is not eligible to install systems for police response and is unlikely to satisfy stricter insurance policies.</p>

<p>Why this matters in practice:</p>

<ul>
<li><strong>Insurance:</strong> many home insurers require an inspectorate-approved system as a condition of cover, particularly for higher-value contents or for properties in higher-risk postcodes. An unaccredited installation may invalidate cover.</li>
<li><strong>Police response:</strong> the URN scheme that allows police to be dispatched on alarm activation is only available for systems installed and maintained by NSI or SSAIB approved companies, and only for Grade 2+ systems with confirmed-activation criteria.</li>
<li><strong>Quality of installation:</strong> inspectorate approval requires periodic audit of installations, documentation, technical capability, and ongoing professional development. It is a meaningful quality signal.</li>
</ul>

<p>J&L Security is <strong>SSAIB approved</strong>. Our installations are eligible for police response under the URN scheme and meet the standards required by major UK insurers.</p>

<h2>Ongoing Costs</h2>

<p>The install fee is one-off; the ongoing costs are recurring and worth budgeting for from the outset.</p>

<h3>Annual Maintenance Contracts</h3>

<p>Most installers offer an annual maintenance contract that covers a scheduled service visit, priority response on faults, and battery replacements within scope. Most insurance policies require an annual service for the alarm to remain a valid security measure. J&amp;L Security maintenance contracts start at <strong>£120 + VAT per year for residential</strong> and <strong>£180 + VAT per year for commercial</strong> properties; both packages include one routine maintenance and one emergency callout within the contract year.</p>

<h3>Monitoring Fees</h3>

<p>Where the system is monitored, monthly fees typically run £15 to £35. Lower end is keyholder-response monitoring; upper end is full police response under the URN scheme.</p>

<h3>Battery Replacements</h3>

<p>Panel backup batteries last 3 to 5 years and cost £15 to £30 each to replace. Wireless detector batteries last 2 to 5 years; the cost varies by manufacturer.</p>

<h3>False Alarm Callout Charges</h3>

<p>Repeated false activations on a monitored system can incur ARC callout charges, typically £30 to £80 per callout after a free allowance. The URN scheme also has rules: too many confirmed false activations can lead to police response being suspended for the property.</p>

<h2>Essex and Greater London Context</h2>

<p>Local labour rates and property mix matter. Across our service area:</p>

<ul>
<li><strong>Brentwood, Shenfield, Hutton, and the wider CM13 to CM15 belt:</strong> a high proportion of detached and semi-detached family homes; insurance-driven demand for monitored systems with police response is common.</li>
<li><strong>Romford, Hornchurch, Upminster, and the RM1 to RM14 area:</strong> mixed housing stock from terraced through to detached, plus active commercial premises in Romford town centre.</li>
<li><strong>Ilford, Goodmayes, Seven Kings (IG1 to IG3):</strong> high-density residential and active commercial; demand is split roughly evenly between domestic and small commercial.</li>
<li><strong>Chelmsford and the surrounding CM postcodes:</strong> growing commuter belt with new-build estates and a healthy mix of older terraced and Victorian properties.</li>
<li><strong>Greater London (E14, SE10, IG, RM, EN postcodes):</strong> labour rates are at the higher end of our quoted ranges; commercial premises and HMOs are well represented.</li>
</ul>

<p>J&L Security covers all of Essex and Greater London. Our base in Brentwood gives us efficient coverage of the M25 north and east corridors, and we work with both domestic and commercial clients across the region.</p>

<h2>Pricing Summary Table (UK, 2026)</h2>

<p>The first table below shows the indicative UK market ranges for context. The second is our own published starting pricing.</p>

<h3>UK market ranges (sector-wide indicative)</h3>

<table>
<thead>
<tr>
<th>System type</th>
<th>Supply cost</th>
<th>Installation</th>
<th>Annual monitoring</th>
<th>Total year 1 cost</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bell-only</td>
<td>£200 to £350</td>
<td>£150 to £250</td>
<td>None</td>
<td>£350 to £600 plus optional ~£100 servicing</td>
</tr>
<tr>
<td>Speech dialler / self-monitored</td>
<td>£300 to £550</td>
<td>£200 to £350</td>
<td>None (you respond)</td>
<td>£500 to £900 plus optional ~£100 servicing</td>
</tr>
<tr>
<td>Monitored (Grade 2 or 3, ARC, police response eligible)</td>
<td>£400 to £1,200</td>
<td>£300 to £600</td>
<td>£180 to £420</td>
<td>£880 to £2,220 plus ~£100 to £150 servicing</td>
</tr>
</tbody>
</table>

<h3>J&amp;L Security confirmed starting prices (May 2026)</h3>

<table>
<thead>
<tr>
<th>Option</th>
<th>From (excl. VAT)</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Standard wireless Grade 2 residential package (Pyronix Enforcer V11)</td>
<td>£485</td>
<td>Panel with keypad, one door contact, two motion detectors, two proximity tags, one wireless external siren</td>
</tr>
<tr>
<td>Homecontrol 2.0 app module plus first year subscription</td>
<td>£48</td>
<td>Push notifications, remote arm/disarm, fault alerts</td>
</tr>
<tr>
<td>Annual Homecontrol 2.0 app subscription thereafter</td>
<td>£30</td>
<td>Per year</td>
</tr>
<tr>
<td>24-hour UK-manned monitoring</td>
<td>£105 / year</td>
<td>Police response can be incorporated for Grade 2+ systems with URN</td>
</tr>
<tr>
<td>Annual maintenance, residential</td>
<td>£120 / year</td>
<td>One routine maintenance plus one emergency callout</td>
</tr>
<tr>
<td>Annual maintenance, commercial</td>
<td>£180 / year</td>
<td>One routine maintenance plus one emergency callout</td>
</tr>
</tbody>
</table>

<p><em>Pricing note: all figures are starting prices excluding VAT. Final quotations follow a free site survey because the detector count, mounting requirements, and cable routes vary by property. Pricing current as at May 2026.</em></p>

<h2>FAQs</h2>

<h3>How much does a burglar alarm cost to install in the UK?</h3>

<p>A professionally installed domestic burglar alarm in the UK in 2026 typically costs £450 to £2,500 across the market. At J&amp;L Security our standard wireless Grade 2 residential package using the Pyronix Enforcer V11 starts from £485 + VAT, including a control panel with on-board keypad, a wireless door contact, two motion detectors, two proximity tags, and a wireless external siren. Most homes specify additional detectors at the survey: motion detectors from £55 + VAT, door contacts from £45 + VAT, additional sirens from £125 + VAT. Smartphone control via the Homecontrol 2.0 app is a £48 + VAT add-on for the module and first year, then £30 + VAT per year. Optional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year, with police response available where the system is graded and URN-registered. Final price depends on property size, detector count, and the specific options chosen.</p>

<h3>Is a monitored alarm worth the monthly fee?</h3>

<p>For most homeowners with average-value contents, a self-monitored system with smartphone notifications is sufficient. Monitoring is worth the monthly fee in three specific circumstances: (1) your insurer requires a monitored system as a condition of cover; (2) you want police-response eligibility under the URN scheme, which is only available for Grade 2+ systems monitored by an inspectorate-approved installer; (3) the property is left unoccupied for extended periods and there is no nearby keyholder. For higher-value properties (typically £100,000+ contents) the monitoring fee is often offset by an insurance premium reduction.</p>

<h3>Do I need an NSI or SSAIB approved installer?</h3>

<p>Yes, in two specific cases. (1) If you want police response eligibility, the system must be installed and maintained by an NSI or SSAIB approved company. (2) If your home insurance requires an "inspectorate-approved" system, the installer must hold one of the two accreditations. Beyond those cases, an inspectorate-approved installer is also a strong general quality signal, because the audits cover installation standards, technical competence, and ongoing training. J&L Security is SSAIB approved.</p>

<h3>Will a burglar alarm reduce my home insurance premium?</h3>

<p>Often, yes. Most major UK home insurers offer a discount of around 5 to 15 per cent on the contents premium for a professionally installed alarm. A monitored, inspectorate-approved system with police-response eligibility typically attracts the largest discount. The discount varies by insurer, by postcode, and by the contents value. Check with your insurer for the specific reduction available for the system you are considering, and ask whether the policy <em>requires</em> any particular standard before installation.</p>

<h3>How long does a burglar alarm installation take?</h3>

<p>A standard domestic installation takes 4 to 8 hours for a wireless system, or up to a full day for a wired installation in a finished property where cable runs need careful routing. Larger or commercial installations may take two days or more. We typically complete domestic surveys, design, and installation within 3 to 5 working days of the initial enquiry.</p>

<h3>What does the standard J&amp;L Security wireless burglar alarm package include?</h3>

<p>The J&amp;L Security standard wireless residential package starts from £485 + VAT and uses the Pyronix Enforcer V11 Grade 2 control panel. It includes the panel with an on-board mains-powered keypad, one wireless door contact for the main entrance, two wireless motion detectors, two proximity tags for arming and disarming, and one wireless external siren. The system is supplied as a "bells only" alarm by default, meaning the siren sounds at the property when triggered. Most customers add the Homecontrol 2.0 app module (£48 + VAT for the module plus the first year) so they can receive push notifications and arm or disarm remotely. Additional detectors, panic buttons, vibration sensors, dummy sirens, keyfobs, and an LCD keypad can be added at fixed accessory prices, with the final specification finalised at the free site survey.</p>

<h3>How much does ongoing burglar alarm monitoring and maintenance cost with J&amp;L Security?</h3>

<p>J&amp;L Security offers two ongoing options. The Homecontrol 2.0 app subscription is £30 + VAT per year after the first year (the module and first year are £48 + VAT) and gives the customer push notifications and remote control. Professional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year and adds a call handler who contacts you when the alarm activates, with police response available for Grade 2 or higher systems registered for a Unique Reference Number. Annual maintenance starts at £120 + VAT for residential properties and £180 + VAT for commercial properties; both contracts include one routine service visit and one emergency callout within the contract year. All figures are starting prices.</p>

<h2>Get a Quote</h2>

<p>Burglar alarm pricing depends on too many factors to accurately quote without seeing the property. Every J&L Security installation starts with a free site survey: we visit the property, agree the system specification, and provide a fixed-price written quotation before any work starts. There is no obligation, and the survey itself is genuinely free.</p>

<p>To book a free survey, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a> or 0208 220 4770. We cover all of Essex and Greater London, with active customers across <a href="/locations/brentwood">Brentwood</a>, <a href="/burglar-alarm-servicing/romford">Romford</a>, Ilford, Chelmsford, Upminster, and across our 14 London target boroughs from Islington and Hackney through to Hammersmith, Battersea, and Barnet. For more on our intruder alarm offer, see our <a href="/services/burglar-alarms">burglar alarm services</a> page or read about <a href="/blog/insurance-approved-burglar-alarms-uk-2026">insurance-approved burglar alarms in 2026</a>.</p>
`,
    faqs: [
      {
        question: 'How much does a burglar alarm cost to install in the UK?',
        answer: 'A professionally installed domestic burglar alarm in the UK in 2026 typically costs £450 to £2,500 across the market. At J&L Security our standard wireless Grade 2 residential package using the Pyronix Enforcer V11 starts from £485 + VAT, including a control panel with on-board keypad, a wireless door contact, two motion detectors, two proximity tags, and a wireless external siren. Most homes specify additional detectors at the survey: motion detectors from £55 + VAT, door contacts from £45 + VAT, additional sirens from £125 + VAT. Smartphone control via the Homecontrol 2.0 app is a £48 + VAT add-on for the module and first year, then £30 + VAT per year. Optional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year, with police response available where the system is graded and URN-registered. Final price depends on property size, detector count, and the specific options chosen.'
      },
      {
        question: 'Is a monitored alarm worth the monthly fee?',
        answer: 'For most homeowners with average-value contents, a self-monitored system with smartphone notifications is sufficient. Monitoring is worth the monthly fee in three specific circumstances: (1) your insurer requires a monitored system as a condition of cover; (2) you want police-response eligibility under the URN scheme, which is only available for Grade 2+ systems monitored by an inspectorate-approved installer; (3) the property is left unoccupied for extended periods and there is no nearby keyholder. For higher-value properties (typically £100,000+ contents) the monitoring fee is often offset by an insurance premium reduction.'
      },
      {
        question: 'Do I need an NSI or SSAIB approved installer?',
        answer: 'Yes, in two specific cases. (1) If you want police response eligibility, the system must be installed and maintained by an NSI or SSAIB approved company. (2) If your home insurance requires an "inspectorate-approved" system, the installer must hold one of the two accreditations. Beyond those cases, an inspectorate-approved installer is also a strong general quality signal, because the audits cover installation standards, technical competence, and ongoing training. J&L Security is SSAIB approved.'
      },
      {
        question: 'Will a burglar alarm reduce my home insurance premium?',
        answer: 'Often, yes. Most major UK home insurers offer a discount of around 5 to 15 per cent on the contents premium for a professionally installed alarm. A monitored, inspectorate-approved system with police-response eligibility typically attracts the largest discount. The discount varies by insurer, by postcode, and by the contents value. Check with your insurer for the specific reduction available for the system you are considering, and ask whether the policy requires any particular standard before installation.'
      },
      {
        question: 'How long does a burglar alarm installation take?',
        answer: 'A standard domestic installation takes 4 to 8 hours for a wireless system, or up to a full day for a wired installation in a finished property where cable runs need careful routing. Larger or commercial installations may take two days or more. We typically complete domestic surveys, design, and installation within 3 to 5 working days of the initial enquiry.'
      },
      {
        question: 'What does the standard J&L Security wireless burglar alarm package include?',
        answer: 'The J&L Security standard wireless residential package starts from £485 + VAT and uses the Pyronix Enforcer V11 Grade 2 control panel. It includes the panel with an on-board mains-powered keypad, one wireless door contact for the main entrance, two wireless motion detectors, two proximity tags for arming and disarming, and one wireless external siren. The system is supplied as a "bells only" alarm by default, meaning the siren sounds at the property when triggered. Most customers add the Homecontrol 2.0 app module (£48 + VAT for the module plus the first year) so they can receive push notifications and arm or disarm remotely. Additional detectors, panic buttons, vibration sensors, dummy sirens, keyfobs, and an LCD keypad can be added at fixed accessory prices, with the final specification finalised at the free site survey.'
      },
      {
        question: 'How much does ongoing burglar alarm monitoring and maintenance cost with J&L Security?',
        answer: 'J&L Security offers two ongoing options. The Homecontrol 2.0 app subscription is £30 + VAT per year after the first year (the module and first year are £48 + VAT) and gives the customer push notifications and remote control. Professional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year and adds a call handler who contacts you when the alarm activates, with police response available for Grade 2 or higher systems registered for a Unique Reference Number. Annual maintenance starts at £120 + VAT for residential properties and £180 + VAT for commercial properties; both contracts include one routine service visit and one emergency callout within the contract year. All figures are starting prices.'
      }
    ]
  },
  {
    slug: 'cctv-installation-guide-essex',
    title: 'CCTV Installation Guide for Essex Homeowners',
    metaTitle: 'CCTV Installation Guide for Essex Homeowners',
    description: 'A practical guide to home CCTV installation in Essex. Covers camera types, resolution, storage options, remote viewing, planning rules, and ICO guidance for 2026.',
    datePublished: '2026-04-07',
    dateModified: '2026-04-07',
    keywords: ['CCTV installation Essex', 'home CCTV system', 'security cameras Essex', 'CCTV planning permission'],
    wordCount: 1900,
    content: `
<p>CCTV (closed-circuit television) is a video surveillance system that records footage from cameras mounted at fixed positions around a property. For Essex homeowners, a professionally installed CCTV system typically includes 2 to 8 cameras, a network video recorder (NVR), and remote viewing via a smartphone app. Systems start from around £850 plus VAT for a basic domestic installation.</p>

<p>This guide covers what you need to know before installing CCTV at your home, from camera types and resolution to legal requirements and ongoing maintenance.</p>

<h2>Why Essex Homeowners Are Installing CCTV</h2>

<p>Essex has seen a steady increase in domestic CCTV installations over the past five years. The reasons are practical: visible cameras act as a deterrent, recorded footage provides evidence in the event of a break-in or anti-social behaviour, and modern systems allow homeowners to check on their property remotely.</p>

<p>Common scenarios where homeowners choose to install CCTV include monitoring driveways and front doors (particularly for parcel theft), covering rear gardens and side passages, keeping an eye on vehicles parked on a driveway, and providing evidence for insurance claims.</p>

<h2>Camera Types</h2>

<p>There are several types of CCTV camera, each suited to different situations:</p>

<h3>Bullet Cameras</h3>

<p>Bullet cameras are cylindrical and typically mounted on walls or soffits. They are the most common type for domestic installations because they are visually obvious (acting as a deterrent), weatherproof, and available with built-in infrared for night vision. Most bullet cameras have a fixed lens with a viewing angle of 90 to 110 degrees.</p>

<h3>Turret (Dome) Cameras</h3>

<p>Turret cameras sit in a dome housing and are less conspicuous than bullet cameras. They are a good choice where aesthetics matter, such as the front of a period property. Modern turret cameras offer the same image quality and night vision as bullet cameras, and they are more resistant to tampering because the lens direction is harder to see from the ground.</p>

<h3>PTZ Cameras</h3>

<p>Pan-tilt-zoom (PTZ) cameras can be controlled remotely to pan across a wide area, tilt up and down, and zoom in on specific details. They are more expensive (£300 to £800 per camera) and are generally used for larger properties or commercial sites rather than standard domestic installations.</p>

<h3>Varifocal Cameras</h3>

<p>Varifocal cameras have an adjustable lens, allowing the installer to set the field of view during installation. This makes them versatile for situations where a precise viewing angle is needed, such as covering a long driveway or a narrow side passage.</p>

<h2>Resolution: How Much Do You Need?</h2>

<p>Camera resolution determines how much detail is captured in the footage. The main options available in 2026 are:</p>

<ul>
<li><strong>2MP (1080p Full HD):</strong> the minimum standard for a useful domestic system. Sufficient for identifying people at close range (up to about 10 metres) and reading vehicle number plates at short distances.</li>
<li><strong>4MP (2K):</strong> a good mid-range option that provides noticeably more detail than 1080p. Suitable for most domestic installations where you need clear identification at moderate distances.</li>
<li><strong>4K (8MP):</strong> the highest resolution commonly available for domestic systems. Provides excellent detail for identification at longer distances and allows digital zoom without significant quality loss. Requires more storage space.</li>
</ul>

<p>We install Uniview cameras, which offer 4K resolution with intelligent features such as smart motion detection that can distinguish between people, vehicles, and other movement. This reduces false alerts from animals, trees, or passing headlights.</p>

<h2>Storage Options</h2>

<p>CCTV footage needs to be stored somewhere. The two main options are:</p>

<h3>Local NVR Recording</h3>

<p>A network video recorder (NVR) is a dedicated box that stores footage on internal hard drives. A standard NVR with a 2TB hard drive will store approximately 14 to 30 days of footage from 4 cameras at 4MP resolution, depending on recording settings.</p>

<p>NVRs are reliable, have no ongoing subscription costs, and keep your data on your own premises. The NVR should be installed in a secure location (such as a locked cupboard) to prevent an intruder removing it.</p>

<h3>Cloud Storage</h3>

<p>Some systems offer cloud backup, where footage is uploaded to a remote server via your internet connection. This provides an off-site copy in case the NVR is stolen or damaged. Cloud storage typically involves a monthly subscription of £5 to £15 per camera.</p>

<p>Most domestic installations use local NVR recording as the primary storage method, with cloud backup as an optional extra for critical cameras such as the front door.</p>

<h2>Remote Viewing</h2>

<p>All modern CCTV systems include remote viewing via a smartphone app. This allows you to view live footage, play back recordings, receive motion alerts, and in some cases speak through the camera using built-in audio.</p>

<p>Remote viewing requires a stable broadband connection. For reliable performance with a 4-camera system at 4MP resolution, you should have a minimum upload speed of 5 Mbps. Most Essex properties on fibre broadband will exceed this comfortably.</p>

<p>Uniview's EZView app, which we use for our installations, provides live viewing, playback, push notifications, and two-way audio on both iOS and Android devices.</p>

<h2>Planning Permission and Legal Requirements</h2>

<p>Installing CCTV at your home in Essex does not normally require planning permission, provided the cameras are within your property boundary and the installation does not involve significant structural changes. However, there are some exceptions:</p>

<ul>
<li><strong>Listed buildings:</strong> you may need listed building consent before mounting cameras or running external cables.</li>
<li><strong>Conservation areas:</strong> external cameras visible from the street may require planning approval in some conservation areas. Check with your local authority (Brentwood Borough Council, Chelmsford City Council, Basildon Borough Council, or the relevant London borough).</li>
<li><strong>Flats and shared properties:</strong> you may need permission from the freeholder or management company before installing external cameras.</li>
</ul>

<h3>ICO Guidance for Domestic CCTV</h3>

<p>The Information Commissioner's Office (ICO) provides specific guidance for domestic CCTV systems. The key points are:</p>

<ul>
<li>If your cameras capture footage <strong>only within your own property boundary</strong>, data protection law (the UK GDPR and the Data Protection Act 2018) does not apply to you as a domestic user.</li>
<li>If your cameras capture images <strong>beyond your property boundary</strong> (a neighbour's garden, the pavement, a shared driveway), you become a data controller and must comply with data protection law. This means you should have a lawful basis for recording, use clear signage indicating CCTV is in operation, respond to subject access requests (people asking for footage of themselves), and not store footage for longer than necessary.</li>
<li>Regardless of data protection law, you have a <strong>duty not to cause harassment</strong>. Cameras should not be positioned to look directly into a neighbour's windows or private spaces.</li>
</ul>

<p>In practice, most domestic CCTV cameras will capture some footage beyond the property boundary (a pavement, a road). The ICO's guidance is pragmatic: use signage, be transparent with neighbours, and do not record more than is necessary for your security purposes.</p>

<h2>Installation Process</h2>

<p>A professional CCTV installation for a typical domestic property takes 4 to 8 hours. The process includes:</p>

<ol>
<li><strong>Site survey:</strong> an engineer visits your property to assess camera positions, cable routes, NVR location, and network connectivity. This is free and without obligation at J&L Security.</li>
<li><strong>System design:</strong> based on the survey, we recommend camera types, positions, and a recording configuration that meets your requirements.</li>
<li><strong>Installation:</strong> cameras are mounted, cables are run (internally where possible to protect against tampering), and the NVR is installed in a secure location.</li>
<li><strong>Configuration:</strong> each camera is adjusted for optimal viewing angle, recording schedules are set, and motion detection zones are configured to reduce false alerts.</li>
<li><strong>Remote access setup:</strong> the system is connected to your network and the smartphone app is configured on your devices.</li>
<li><strong>Handover:</strong> you receive training on how to use the system, including live viewing, playback, and alert settings.</li>
</ol>

<h2>What Does CCTV Cost in Essex?</h2>

<p>Domestic CCTV installation costs in Essex depend on the number of cameras, resolution, and cable runs required. As a guide:</p>

<ul>
<li><strong>2-camera system (1080p):</strong> £850 to £1,200</li>
<li><strong>4-camera system (4MP):</strong> £1,200 to £2,000</li>
<li><strong>4-camera system (4K):</strong> £1,800 to £2,800</li>
<li><strong>6-8 camera system (4K):</strong> £2,500 to £4,500</li>
</ul>

<p>These prices include equipment, installation, NVR, and configuration. Additional cameras can typically be added later if you want to expand the system.</p>

<h2>Maintenance</h2>

<p>CCTV systems require minimal ongoing maintenance, but an annual service visit is recommended to clean camera lenses (dirt and cobwebs degrade image quality, particularly at night), check cable connections and weatherproofing, verify recording is functioning correctly, update firmware, and test remote access.</p>

<p>A standard domestic CCTV service visit costs £80 to £120. Hard drives in the NVR should be replaced every 3 to 5 years (£50 to £100 depending on capacity).</p>

<h2>Choosing an Installer</h2>

<p>When choosing a CCTV installer in Essex, look for SSAIB or NSI registration (this ensures the company meets national quality standards), a proper site survey before quoting, transparent pricing with no hidden costs, a clear warranty on both equipment and labour, and ongoing support and maintenance options.</p>

<p>Avoid installers who offer to quote over the phone without seeing the property, who use consumer-grade cameras (the type sold in retail stores), or who cannot provide evidence of their accreditations.</p>

<p>At J&L Security, we are SSAIB approved and have been installing CCTV systems across Essex since 2011. All our installations use Uniview commercial-grade equipment. To discuss your requirements, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a> for a free survey.</p>

<p>Read more about our <a href="/services/cctv-systems">CCTV installation services</a> or explore our <a href="/services">full range of security services</a>.</p>
`
  },
  {
    slug: 'hmo-fire-alarm-requirements-bs5839',
    title: 'Fire Alarm Requirements for HMO Landlords: BS 5839 Explained',
    metaTitle: 'HMO Fire Alarm Requirements: BS 5839 Guide (2026)',
    description: 'A guide to fire alarm requirements for HMO landlords in the UK. Covers BS 5839-6 grades, system categories, costs, servicing obligations, and licensing conditions.',
    datePublished: '2026-04-07',
    dateModified: '2026-05-03',
    keywords: ['HMO fire alarm requirements', 'BS 5839-6', 'BS 5839-1', 'fire alarm HMO landlord', 'fire alarm servicing requirements', 'HMO fire alarm cost', 'Grade D1 HMO', 'Grade A HMO fire alarm'],
    wordCount: 3450,
    content: `
<p>A House in Multiple Occupation (HMO) is a property rented to three or more tenants forming two or more separate households who share facilities such as a kitchen or bathroom. Under UK law, HMO landlords must install and maintain a fire alarm system that meets the relevant British Standard: BS 5839-6 for domestic-scale HMOs, or BS 5839-1 for larger or higher-risk HMOs. The specific system category and grade required depends on the property layout, the number of storeys, the number of occupants, and the conditions set by your local authority's licensing team.</p>

<p>This guide explains what BS 5839-1 requires, what the different system categories and grades mean, and what landlords must do to stay compliant.</p>

<h2>Why Fire Alarms in HMOs Are Different</h2>

<p>A standard domestic smoke alarm (the type you buy from a hardware shop and screw to the ceiling) is designed for a single household where everyone knows each other and can alert one another. In an HMO, the situation is fundamentally different: tenants may sleep with their doors closed, may not know each other, and may not hear an alarm sounding in another part of the building.</p>

<p>This is why HMOs require a system designed to BS 5839-1 rather than BS 5839-6 (the domestic standard). The system must detect a fire wherever it starts, sound an alarm loud enough to wake everyone in the building, and be professionally installed and maintained.</p>

<h2>BS 5839-1: System Categories</h2>

<p>BS 5839-1 defines several categories of fire detection system. The category determines where detectors are placed and what they are designed to protect. For HMOs, the three relevant categories are LD1, LD2, and LD3.</p>

<h3>Category LD3: Escape Route Protection</h3>

<p>LD3 is the minimum level of protection. Detectors are installed only on escape routes: hallways, landings, and stairwells. The purpose is to detect a fire that could block the escape route and give occupants enough warning to evacuate.</p>

<ul>
<li><strong>Where detectors go:</strong> entrance hallways, landings, stairwells</li>
<li><strong>When it is acceptable:</strong> some local authorities accept LD3 for smaller, lower-risk HMOs (typically two-storey properties with fewer than five tenants), though this is becoming less common</li>
<li><strong>Limitations:</strong> does not detect fires that start in rooms, only on escape routes</li>
</ul>

<h3>Category LD2: Escape Route Plus High-Risk Rooms</h3>

<p>LD2 includes everything in LD3, plus detectors in rooms that open onto escape routes and rooms that pose a higher fire risk. In practice, this means detectors in kitchens (heat detectors rather than smoke detectors to avoid false alarms from cooking), living rooms, and any room where a fire could start and spread to the escape route before being detected.</p>

<ul>
<li><strong>Where detectors go:</strong> escape routes plus kitchens, living rooms, and rooms opening onto escape routes</li>
<li><strong>When it is required:</strong> this is the most commonly specified category for HMOs. Most local authority licensing conditions require LD2 as a minimum.</li>
</ul>

<h3>Category LD1: Full Coverage</h3>

<p>LD1 provides the highest level of protection. Detectors are installed in every room except bathrooms, shower rooms, and WCs. This means coverage of all bedrooms, kitchens, living rooms, storage areas, and escape routes.</p>

<ul>
<li><strong>Where detectors go:</strong> every habitable room, every escape route, and every storage area</li>
<li><strong>When it is required:</strong> larger HMOs (typically three or more storeys, or those with five or more tenants), properties where the fire risk assessment identifies higher risk, and any HMO where the local authority specifically requires it</li>
</ul>

<p>When in doubt, LD1 is the safest option. The additional cost of full coverage compared to LD2 is relatively modest, and it provides substantially better protection for your tenants.</p>

<h2>BS 5839-1: System Grades</h2>

<p>As well as the category (where detectors go), BS 5839-1 specifies the grade (what type of equipment is used). The main grades relevant to HMOs are:</p>

<h3>Grade A</h3>

<p>A Grade A system uses a fire alarm panel, dedicated wiring, and commercial-grade detectors and sounders. This is a full conventional or addressable fire alarm system, the same type used in commercial buildings. The panel provides zone information, fault monitoring, and a fire log.</p>

<ul>
<li><strong>Required for:</strong> larger HMOs (typically three or more storeys), mandatory licensing HMOs with five or more tenants, and any property where the local authority specifies it</li>
<li><strong>Cost:</strong> typically £1,500 to £4,000 depending on property size</li>
<li><strong>Advantages:</strong> full fault monitoring, zone identification, meets all licensing conditions, can be connected to an ARC for remote monitoring</li>
</ul>

<h3>Grade D</h3>

<p>A Grade D system uses mains-powered, interlinked detectors. There is no fire alarm panel. Each detector is wired to the mains supply and connected to the other detectors so that when one triggers, they all sound. Grade D detectors include a battery backup in case of power failure.</p>

<ul>
<li><strong>Required for:</strong> smaller HMOs (typically two-storey, fewer than five tenants) where the local authority accepts this grade</li>
<li><strong>Cost:</strong> typically £400 to £1,200 depending on the number of detectors</li>
<li><strong>Limitations:</strong> no central panel, no fault monitoring, no zone information, may not meet the licensing conditions for larger HMOs</li>
</ul>

<p>Many landlords install Grade D systems to save money, only to find that their local authority requires a Grade A system for licensing. Always check your licensing conditions before choosing a system grade. If you are letting in Essex or East London, our local teams in <a href="/fire-alarm-installation/brentwood">Brentwood</a> and the wider <a href="/locations/romford">Romford</a> area regularly survey HMOs and confirm the correct grade against the relevant council's licence schedule before installation.</p>

<h2>BS 5839-6 Grades and Categories: Comparison Table</h2>

<p>BS 5839-6 is the British Standard for fire detection and fire alarm systems in domestic premises, including most HMOs. It defines a system using two attributes: a <strong>grade</strong> (the type of equipment, A through F) and a <strong>category</strong> (the scope of coverage, LD1 to LD3 for life safety, or PD for property protection). The table below summarises the grades and categories most commonly specified for HMOs.</p>

<table>
<thead>
<tr>
<th>Grade or Category</th>
<th>System type</th>
<th>Where required</th>
<th>Typical install cost range<sup>1</sup></th>
<th>Monitoring required</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Grade A</strong></td>
<td>Full BS 5839-1 style fire alarm panel with dedicated wiring, commercial-grade detectors, sounders, manual call points, and standby power supply</td>
<td>Larger HMOs (typically 3+ storeys, 5+ occupants), licensed HMOs where the council schedule specifies Grade A, or any property identified as higher-risk by the fire risk assessment</td>
<td>From ~£800 (small system) to £2,500+ installed for a typical HMO; up to £4,000+ for larger properties</td>
<td>Optional, can connect to an Alarm Receiving Centre (ARC) for remote monitoring</td>
</tr>
<tr>
<td><strong>Grade D1</strong></td>
<td>Mains-powered interlinked detectors, each with a tamper-proof, sealed-in standby battery (typically a 10-year sealed lithium cell)</td>
<td>Most modern HMOs that the council accepts for Grade D rather than Grade A; this is the current default for new installations under BS 5839-6</td>
<td>From ~£150 supply-only for detectors; typical installed cost £350 to £900 for a 5-bedroom HMO depending on detector count and cable runs</td>
<td>No (standalone)</td>
</tr>
<tr>
<td><strong>Grade D2</strong></td>
<td>Mains-powered interlinked detectors with a user-replaceable standby battery</td>
<td>Permitted in some HMOs where the council schedule does not insist on D1; less common in new installations because the replaceable battery introduces a maintenance liability</td>
<td>Similar to Grade D1, slightly lower equipment cost; typically £300 to £800 installed</td>
<td>No (standalone)</td>
</tr>
<tr>
<td><strong>Category LD1</strong></td>
<td>Detection in <em>all</em> rooms and circulation areas (excluding bathrooms, shower rooms, and WCs). Combine with a grade (typically D1 or A).</td>
<td>Highest-risk HMOs and any property where the fire risk assessment identifies LD1 as appropriate. Often required for larger or shared-cooking HMOs.</td>
<td>Reflected in detector count: a 5-bed HMO under LD1 needs 7 to 10 detectors, adding £30 to £60 per detector to the base install</td>
<td>Determined by grade</td>
</tr>
<tr>
<td><strong>Category LD2</strong></td>
<td>Detection on escape routes plus rooms presenting a high fire risk (kitchens, living rooms, bedrooms in some cases). Combine with a grade.</td>
<td>The most commonly specified category for licensable HMOs across England</td>
<td>Mid-range: typically 5 to 8 detectors for a 5-bed HMO</td>
<td>Determined by grade</td>
</tr>
<tr>
<td><strong>Category LD3</strong></td>
<td>Detection on escape routes only (hallways, landings, stairwells). Combine with a grade.</td>
<td>Smaller, lower-risk HMOs where the council schedule accepts it. Becoming less common.</td>
<td>Lowest detector count, smallest install cost</td>
<td>Determined by grade</td>
</tr>
</tbody>
</table>

<p><sup>1</sup> Cost ranges are indicative, based on typical Essex and Greater London installations carried out by J&L Security from 2024 to 2026, supply and installed inclusive of VAT. They assume a standard property layout, accessible cable routes, and no significant making-good or remedial electrical work. Final costs depend on detector count, number of floors, cable runs, and the condition of any existing wiring. <a href="/contact">Book a free site survey</a> for a fixed-price quotation against your specific property.</p>

<h2>What Does an HMO Fire Alarm System Cost?</h2>

<p>Pricing for HMO fire alarm systems is one of the most common questions landlords ask. The honest answer is that it depends on the grade, the category, the property layout, and the number of detectors required. The figures below are indicative ranges drawn from typical installations across Essex and Greater London. Use them for budgeting only; your actual quote will be based on a free site survey.</p>

<h3>Typical 5-Bedroom HMO (Grade D1, Category LD2 or LD3)</h3>

<p>For a standard 5-bedroom HMO that the council accepts under Grade D1 with a Category LD2 or LD3 layout (interlinked mains-powered detectors with sealed lithium batteries on escape routes and in higher-risk rooms), you should budget approximately <strong>£350 to £600 installed</strong>. This typically includes:</p>

<ul>
<li>5 to 8 interlinked detectors (smoke, heat, and CO as appropriate)</li>
<li>First-fix and second-fix wiring</li>
<li>Commissioning, testing, and a handover certificate suitable for the council licence file</li>
<li>VAT</li>
</ul>

<h3>Larger HMO Requiring Grade A (3+ storeys, 5+ occupants, or licence-specified)</h3>

<p>For a larger HMO where the council schedule or fire risk assessment requires a Grade A panel-controlled system, expect a typical installed cost of <strong>£1,200 to £2,500 installed</strong> for most properties, rising above £4,000 for larger or more complex sites. This includes:</p>

<ul>
<li>A conventional or addressable fire alarm control panel with standby battery</li>
<li>Optical smoke detectors, heat detectors, and manual call points</li>
<li>Sounders or sounder-beacons sized to the property</li>
<li>Dedicated fire-alarm cable (FP200 or equivalent)</li>
<li>Commissioning, testing, log book, and a BAFE-compliant handover certificate</li>
</ul>

<h3>Annual Servicing</h3>

<p>BS 5839-1 (and the maintenance recommendations in BS 5839-6) require regular professional servicing. For HMO Grade A systems, this is two visits per year. For Grade D systems, one visit per year is the practical minimum to maintain the council's expectation of "good working order". <strong>Annual servicing typically starts from around £120 per year</strong> for a small Grade D HMO, rising to £180 to £300 per year for a Grade A system, depending on detector count and travel.</p>

<p><em>Pricing note: these are indicative ranges based on representative Essex and Greater London installations. Exact costs depend on property layout, number of floors, number of detectors, cable accessibility, and any remedial electrical work. J&L Security provides <a href="/contact">free site surveys</a> with fixed-price quotations before any work is committed.</em></p>

<h2>Servicing Requirements</h2>

<p>BS 5839-1 requires that fire alarm systems are serviced at regular intervals. For HMOs, the key requirements are:</p>

<h3>6-Monthly Professional Servicing</h3>

<p>A qualified fire alarm engineer must service the system at least every six months. The 2025 update to BS 5839-1 introduced a degree of flexibility, allowing a window of 5 to 7 months between visits, but the principle remains: two professional services per year.</p>

<p>During a service visit, the engineer will test every detector and sounder, check battery condition and replace if necessary, inspect all wiring and connections, test the fire alarm panel (Grade A systems), clean detectors, and record all findings in the fire alarm log book.</p>

<h3>Weekly Testing</h3>

<p>The responsible person (usually the landlord or their managing agent) must conduct a weekly test of the fire alarm system. This involves activating a manual call point (or test button on a detector) and confirming that the alarm sounds throughout the building. The test should be recorded in the log book with the date, time, and result.</p>

<h3>Record Keeping</h3>

<p>A fire alarm log book must be maintained for every HMO. It should record all service visits and their findings, weekly test results, any faults and the actions taken to resolve them, and any false alarms and their cause. Local authority inspectors will ask to see this log book during licensing inspections.</p>

<h2>The Regulatory Reform (Fire Safety) Order 2005</h2>

<p>The Regulatory Reform (Fire Safety) Order 2005 (commonly called the Fire Safety Order or FSO) applies to the common parts of HMOs: hallways, landings, stairwells, and shared kitchens and living areas. Under the FSO, the responsible person (the landlord) must carry out a fire risk assessment of the common parts, implement the findings of the risk assessment (which typically includes the fire alarm system), keep the risk assessment under review and update it if circumstances change, and maintain all fire safety measures in good working order.</p>

<p>The fire risk assessment determines what category and grade of fire alarm system is needed. In practice, most fire risk assessors will recommend LD2 Grade A as the minimum for licensable HMOs.</p>

<h2>Local Authority Licensing Conditions</h2>

<p>If your HMO requires a licence (mandatory for properties with five or more tenants forming two or more households in England), the licence conditions will specify the fire alarm requirements. These vary by local authority, but common conditions include:</p>

<ul>
<li>A fire alarm system designed to BS 5839-1, to a category and grade specified in the fire risk assessment</li>
<li>Installation by a competent person (many local authorities require an SSAIB or BAFE registered installer)</li>
<li>6-monthly servicing by a competent fire alarm engineer, with service certificates retained</li>
<li>A fire alarm log book maintained on the premises</li>
<li>Emergency lighting on escape routes</li>
</ul>

<p>Failure to comply with licence conditions is a criminal offence and can result in prosecution, unlimited fines, or a banning order preventing you from letting property.</p>

<h2>Common Mistakes Landlords Make</h2>

<p>Based on our experience installing and servicing fire alarm systems in HMOs across Essex and London, the most common mistakes are:</p>

<ul>
<li><strong>Installing the wrong grade:</strong> fitting Grade D interlinked detectors when the licensing conditions require Grade A. This often means the entire system needs replacing.</li>
<li><strong>Missing servicing deadlines:</strong> letting the 6-monthly service lapse. Local authorities can and do check service records during inspections.</li>
<li><strong>No log book:</strong> failing to maintain weekly test records and service documentation.</li>
<li><strong>Using domestic detectors:</strong> fitting consumer-grade battery-only detectors that do not meet BS 5839-1.</li>
<li><strong>Forgetting emergency lighting:</strong> fire alarm compliance and emergency lighting are usually both required as part of the licensing conditions.</li>
</ul>

<h2>HMO Fire Alarm FAQs</h2>

<h3>What fire alarm grade do I need for an HMO?</h3>

<p>The grade required depends on the size of the HMO, the number of storeys, and your local authority's licence schedule. For most modern HMOs of 2 storeys with up to 5 occupants, councils accept a <strong>Grade D1</strong> system: mains-powered interlinked detectors with sealed 10-year lithium batteries, installed to Category LD2 or LD3 coverage. For HMOs of 3 or more storeys, or with 5 or more occupants under mandatory licensing, councils typically require a <strong>Grade A</strong> system: a panel-controlled fire alarm with dedicated wiring and commercial-grade detectors. Always check the licence schedule for your specific property before installation, because the wrong grade is one of the most expensive mistakes a landlord can make.</p>

<h3>Is Grade D1 sufficient for an HMO?</h3>

<p>Grade D1 is sufficient for many smaller HMOs. The key tests are: (1) does your council's HMO licence schedule accept a Grade D system, and (2) does the fire risk assessment for the property identify Grade D as appropriate? In Essex and Greater London, councils such as Brentwood, Havering, and Redbridge typically accept Grade D1 for 2-storey HMOs with up to 4 or 5 occupants. They do not generally accept Grade D for HMOs of 3 or more storeys, or for properties identified as higher-risk. If your fire risk assessor has specified a Grade D system in writing, and your council schedule accepts it, Grade D1 is sufficient. If either is in doubt, a Grade A system is the safe choice.</p>

<h3>How often should HMO fire alarms be tested?</h3>

<p>HMO fire alarms must be tested at three different intervals. <strong>Weekly:</strong> the responsible person (the landlord or managing agent) must activate one manual call point or detector test button each week and confirm the system sounds throughout the building, recording the result in the log book. <strong>6-monthly:</strong> a competent fire alarm engineer must carry out a service visit, testing every detector, sounder, and call point, checking battery condition, and inspecting cabling. The 2025 update to BS 5839-1 introduced a 5-to-7-month flexibility window for scheduling. <strong>Annually:</strong> for Grade D systems where 6-monthly servicing is not specified, an annual professional service is the practical minimum.</p>

<h3>Do I need a mains-wired alarm in an HMO?</h3>

<p>Yes, in almost all cases. BS 5839-6 Grade D systems are by definition mains-powered with battery backup. Battery-only domestic smoke alarms (BS 5839-6 Grade F) are not normally acceptable for licensable HMOs because they are not interlinked across the building and cannot reliably wake all occupants. If your council schedule accepts Grade D, this means Grade D1 (sealed lithium battery) or Grade D2 (replaceable battery), both of which are mains-wired. Battery-only Grade F1 or F2 detectors are only ever acceptable in the smallest, lowest-risk HMOs and even then only where the council schedule explicitly permits them; in practice most councils require mains-wired interlinked detectors as a minimum.</p>

<h3>What is the difference between Grade A and Grade D fire alarms?</h3>

<p>The principal differences are the architecture, the components, and the level of monitoring. A <strong>Grade A</strong> system uses a dedicated fire alarm control panel, fire-rated cabling (FP200 or equivalent), commercial-grade optical smoke and heat detectors, manual call points at each exit, and sounders or sounder-beacons. The panel monitors the system continuously for faults, logs alarm events, and can be connected to an Alarm Receiving Centre. A <strong>Grade D</strong> system has no central panel: each detector is mains-powered with a battery backup, and the detectors are interlinked so that when one triggers, all sound. Grade A provides more comprehensive coverage, fault monitoring, and zone identification; Grade D is significantly cheaper to install and is appropriate for smaller HMOs that the council accepts.</p>

<h3>What is BS 5839-6 and does it apply to my HMO?</h3>

<p>BS 5839-6 is the British Standard <em>Fire detection and fire alarm systems for buildings: Part 6: Code of practice for the design, installation, commissioning and maintenance of fire detection and fire alarm systems in domestic premises</em>. It is the standard that applies to most HMOs. BS 5839-6 defines the grades (A through F) and the categories (LD1 to LD3 for life safety, PD1 and PD2 for property protection). For larger HMOs that fall outside the scope of BS 5839-6, BS 5839-1 (the standard for non-domestic premises) applies instead. In practice, a fire risk assessment will identify which standard applies to your specific HMO. Most HMOs in England fall under BS 5839-6 with a council-specified grade and category, while HMOs that are very large, of unusual layout, or commercially run typically fall under BS 5839-1.</p>

<h2>What We Provide for HMO Landlords</h2>

<p>At J&L Security, we are BAFE certified and FIA members, and we have been installing BS 5839-1 compliant fire alarm systems for HMO landlords across Essex and Greater London since 2011. Our service includes:</p>

<ul>
<li>Free initial survey and fire alarm system design to BS 5839-1</li>
<li>Installation of Grade A and Grade D systems to the category specified in your fire risk assessment</li>
<li>Full commissioning, testing, and handover documentation</li>
<li>6-monthly servicing contracts with reminder notifications</li>
<li>Emergency lighting installation and testing</li>
<li>Fire alarm log books provided at handover</li>
<li>Certificates suitable for submission to your local authority licensing team</li>
</ul>

<p>If you are unsure what system your HMO needs, <a href="/contact">contact us for a free survey</a> or call <a href="tel:02045385925">0204 538 5925</a>. We can advise on the requirements for your specific property and local authority area.</p>

<p>Read more about our <a href="/services/fire-alarms">fire alarm installation and servicing</a>, or see how we work with HMO landlords in <a href="/fire-alarm-installation/brentwood">Brentwood</a>, <a href="/locations/romford">Romford</a>, and across <a href="/services">our full service area</a>.</p>
`,
    faqs: [
      {
        question: 'What fire alarm grade do I need for an HMO?',
        answer: 'The grade required depends on the size of the HMO, the number of storeys, and your local authority\'s licence schedule. For most modern HMOs of 2 storeys with up to 5 occupants, councils accept a Grade D1 system: mains-powered interlinked detectors with sealed 10-year lithium batteries, installed to Category LD2 or LD3 coverage. For HMOs of 3 or more storeys, or with 5 or more occupants under mandatory licensing, councils typically require a Grade A system: a panel-controlled fire alarm with dedicated wiring and commercial-grade detectors. Always check the licence schedule for your specific property before installation, because the wrong grade is one of the most expensive mistakes a landlord can make.'
      },
      {
        question: 'Is Grade D1 sufficient for an HMO?',
        answer: 'Grade D1 is sufficient for many smaller HMOs. The key tests are: (1) does your council\'s HMO licence schedule accept a Grade D system, and (2) does the fire risk assessment for the property identify Grade D as appropriate? In Essex and Greater London, councils such as Brentwood, Havering, and Redbridge typically accept Grade D1 for 2-storey HMOs with up to 4 or 5 occupants. They do not generally accept Grade D for HMOs of 3 or more storeys, or for properties identified as higher-risk. If your fire risk assessor has specified a Grade D system in writing, and your council schedule accepts it, Grade D1 is sufficient. If either is in doubt, a Grade A system is the safe choice.'
      },
      {
        question: 'How often should HMO fire alarms be tested?',
        answer: 'HMO fire alarms must be tested at three different intervals. Weekly: the responsible person (the landlord or managing agent) must activate one manual call point or detector test button each week and confirm the system sounds throughout the building, recording the result in the log book. 6-monthly: a competent fire alarm engineer must carry out a service visit, testing every detector, sounder, and call point, checking battery condition, and inspecting cabling. The 2025 update to BS 5839-1 introduced a 5-to-7-month flexibility window for scheduling. Annually: for Grade D systems where 6-monthly servicing is not specified, an annual professional service is the practical minimum.'
      },
      {
        question: 'Do I need a mains-wired alarm in an HMO?',
        answer: 'Yes, in almost all cases. BS 5839-6 Grade D systems are by definition mains-powered with battery backup. Battery-only domestic smoke alarms (BS 5839-6 Grade F) are not normally acceptable for licensable HMOs because they are not interlinked across the building and cannot reliably wake all occupants. If your council schedule accepts Grade D, this means Grade D1 (sealed lithium battery) or Grade D2 (replaceable battery), both of which are mains-wired. Battery-only Grade F1 or F2 detectors are only ever acceptable in the smallest, lowest-risk HMOs and even then only where the council schedule explicitly permits them; in practice most councils require mains-wired interlinked detectors as a minimum.'
      },
      {
        question: 'What is the difference between Grade A and Grade D fire alarms?',
        answer: 'The principal differences are the architecture, the components, and the level of monitoring. A Grade A system uses a dedicated fire alarm control panel, fire-rated cabling (FP200 or equivalent), commercial-grade optical smoke and heat detectors, manual call points at each exit, and sounders or sounder-beacons. The panel monitors the system continuously for faults, logs alarm events, and can be connected to an Alarm Receiving Centre. A Grade D system has no central panel: each detector is mains-powered with a battery backup, and the detectors are interlinked so that when one triggers, all sound. Grade A provides more comprehensive coverage, fault monitoring, and zone identification; Grade D is significantly cheaper to install and is appropriate for smaller HMOs that the council accepts.'
      },
      {
        question: 'What is BS 5839-6 and does it apply to my HMO?',
        answer: 'BS 5839-6 is the British Standard "Fire detection and fire alarm systems for buildings: Part 6: Code of practice for the design, installation, commissioning and maintenance of fire detection and fire alarm systems in domestic premises". It is the standard that applies to most HMOs. BS 5839-6 defines the grades (A through F) and the categories (LD1 to LD3 for life safety, PD1 and PD2 for property protection). For larger HMOs that fall outside the scope of BS 5839-6, BS 5839-1 (the standard for non-domestic premises) applies instead. In practice, a fire risk assessment will identify which standard applies to your specific HMO. Most HMOs in England fall under BS 5839-6 with a council-specified grade and category, while HMOs that are very large, of unusual layout, or commercially run typically fall under BS 5839-1.'
      }
    ]
  },
  {
    slug: 'bs5839-1-and-bs5839-6-explained-2026',
    title: 'BS 5839-1 and BS 5839-6: A Plain-English Guide for UK Buyers in 2026',
    metaTitle: 'BS 5839-1 vs BS 5839-6: UK Fire Alarm Standards Explained 2026',
    description: 'A practical guide to BS 5839-1 and BS 5839-6, the two British Standards for fire detection and fire alarm systems. Covers scope, categories, grades, who each applies to, servicing obligations, and how to specify the right system.',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    keywords: [
      'BS 5839-1',
      'BS 5839-6',
      'BS 5839 explained',
      'fire alarm british standard',
      'fire alarm categories',
      'fire alarm grades',
      'BAFE fire alarm maintainers',
      'fire risk assessment uk',
      'fire alarm servicing uk',
      'commercial fire alarm uk',
      'HMO fire alarm uk',
    ],
    wordCount: 2150,
    content: `
<p>BS 5839 is the British Standard for fire detection and fire alarm systems. It is split into two parts that cover different building types: <strong>BS 5839-1 for non-domestic premises</strong> (offices, retail, schools, warehouses, care homes, and most commercial buildings) and <strong>BS 5839-6 for domestic premises</strong> (single dwellings, flats, and houses in multiple occupation). The standards set out how a system should be designed, installed, commissioned, and maintained, and they are the reference points used by insurers, fire risk assessors, and licensing authorities when judging whether a building has appropriate fire detection in place.</p>

<p>This guide explains what each standard covers, the categories and grades they define, who each one applies to in practice, and what the standards mean for your obligations once a system is installed. It is written for property owners, managers, landlords, and responsible persons who need to specify or oversee a fire alarm system without having to read the full standards documents themselves.</p>

<p>If you are an HMO landlord specifically, our companion article on <a href="/blog/hmo-fire-alarm-requirements-bs5839">HMO fire alarm requirements</a> goes into the licensing detail in more depth. The article you are reading now is the broader overview covering both BS 5839-1 and BS 5839-6.</p>

<h2>The Quick Summary</h2>

<p>If you only have time to read one section, this is it.</p>

<ul>
<li><strong>BS 5839-1</strong> applies to non-domestic premises. It uses two main category families: M (manual call points only), L (automatic detection for life safety), and P (automatic detection for property protection). Within those families, you specify the exact category (L1 to L5, P1 or P2) based on the level of cover required.</li>
<li><strong>BS 5839-6</strong> applies to domestic premises. It uses Grades (A, B, C, D, F) and Categories (LD1, LD2, LD3). The Grade describes the type of system and how reliably it operates. The Category describes which parts of the building are protected.</li>
<li>For both standards, the responsible person must keep the system in working order. For BS 5839-1 systems this means professional servicing approximately every six months. For BS 5839-6 systems the maintenance regime depends on the Grade.</li>
<li>Use a <a href="/services/fire-alarms">BAFE-certified fire alarm maintainer</a> for design, installation, commissioning, and maintenance. BAFE certification is the recognised competency benchmark in the UK fire safety industry and is regularly required by insurers and fire risk assessors.</li>
</ul>

<h2>BS 5839-1: Non-Domestic Premises</h2>

<p>BS 5839-1 is the standard for fire detection and fire alarm systems in non-domestic buildings. It applies to:</p>

<ul>
<li>Offices, retail premises, restaurants, hotels, and licensed venues</li>
<li>Schools, colleges, and other educational premises</li>
<li>Care homes, hospitals, and healthcare facilities</li>
<li>Warehouses, factories, and industrial premises</li>
<li>Communal areas of blocks of flats and HMOs above a certain size</li>
<li>Any other building used for business or community purposes that is not a single private dwelling</li>
</ul>

<p>The legal driver behind BS 5839-1 is the Regulatory Reform (Fire Safety) Order 2005, which places responsibility on a "responsible person" (typically the employer, owner, or person in control of the premises) to ensure the building has appropriate fire safety measures. The fire risk assessment determines what those measures are; BS 5839-1 then sets out how to implement the fire detection and alarm element competently.</p>

<h3>BS 5839-1 Categories</h3>

<p>BS 5839-1 categories describe the level of automatic detection in the building. The category is chosen during fire risk assessment.</p>

<ul>
<li><strong>Category M (manual):</strong> manual call points only, no automatic detection. Fire is raised by occupants pressing a call point. Suitable only for small, simple, low-risk premises where occupants are awake, alert, and able to detect a fire themselves.</li>
<li><strong>Category L1 (life, full coverage):</strong> automatic detectors throughout all areas of the building, including ceiling voids and roof spaces where appropriate. The most comprehensive life-safety category and typically required for sleeping risk premises such as hotels and care homes.</li>
<li><strong>Category L2 (life, escape routes plus high-risk areas):</strong> detectors in escape routes, high-risk rooms, and rooms opening onto escape routes.</li>
<li><strong>Category L3 (life, escape routes plus rooms opening onto them):</strong> detectors in escape routes plus rooms that open onto them, but not necessarily in every room.</li>
<li><strong>Category L4 (life, escape routes only):</strong> detectors in escape routes only. The minimum life-safety category in BS 5839-1.</li>
<li><strong>Category L5 (life, specific risk):</strong> a custom category covering a specific identified risk, such as a kitchen or plant room.</li>
<li><strong>Category P1 (property, full coverage):</strong> detectors throughout the building for property protection. Often required by insurers for high-value contents or critical-process buildings.</li>
<li><strong>Category P2 (property, defined areas only):</strong> detectors in specifically identified high-risk areas only.</li>
</ul>

<p>Categories can be combined: an L2/P1 system, for example, would protect the escape routes and high-risk rooms for life safety and the rest of the building for property protection.</p>

<h3>What BS 5839-1 Requires of the Installation</h3>

<p>The standard sets out detailed requirements covering detector placement, sounder coverage, panel performance, cabling, power supply, and documentation. The points that matter most to a non-specialist responsible person are:</p>

<ul>
<li>The system is professionally designed against a specific category derived from the fire risk assessment.</li>
<li>Detector spacing and positioning meets the standard's rules (which depend on ceiling height, room geometry, and detector type).</li>
<li>The sounder coverage achieves a minimum sound level throughout the building (typically 65 dB(A), or 75 dB(A) where occupants may be sleeping).</li>
<li>The system is commissioned with every device tested and a commissioning certificate issued.</li>
<li>A logbook is provided and kept on site for routine and corrective records.</li>
<li>Servicing is carried out by a competent contractor at intervals no greater than six months. Practical guidance allows scheduling within a 5 to 7 month window.</li>
</ul>

<h2>BS 5839-6: Domestic Premises</h2>

<p>BS 5839-6 is the British Standard for fire detection and fire alarm systems in domestic premises. It applies to:</p>

<ul>
<li>Single-occupancy private dwellings (houses, bungalows, flats)</li>
<li>Houses in multiple occupation (HMOs) up to a certain size and risk profile</li>
<li>Sheltered housing and supported housing</li>
<li>The dwelling units within a block of flats (the communal areas of the same block typically fall under BS 5839-1)</li>
</ul>

<p>BS 5839-6 is referenced in HMO licensing conditions across most local authorities in England and Wales. It is also referenced by insurers, mortgage lenders, and fire risk assessors when determining whether a domestic property has appropriate fire detection.</p>

<h3>BS 5839-6 Grades</h3>

<p>BS 5839-6 uses Grades to describe the type of system, ranging from a simple battery-only smoke alarm at one end (Grade F) up to a fully panel-controlled commercial-style system at the other (Grade A). The Grade is chosen based on the property type, occupancy risk, and any licensing conditions that apply.</p>

<ul>
<li><strong>Grade A:</strong> a panel-controlled system using BS 5839-1 components. Required for larger HMOs and higher-risk domestic properties. The system has its own power supply with battery backup, dedicated sounders, and a control panel that displays system status.</li>
<li><strong>Grade B:</strong> rarely specified in current practice; not commonly used.</li>
<li><strong>Grade C:</strong> a system of mains-powered detectors and call points connected to a common control unit that may include a backup battery. Suitable for medium-sized HMOs.</li>
<li><strong>Grade D:</strong> mains-powered, interlinked smoke and heat alarms with integral battery backup, no separate panel. The standard specification for most domestic and small HMO installations. Typically subdivided into Grade D1 (with sealed long-life battery backup) and Grade D2 (with replaceable battery backup).</li>
<li><strong>Grade F:</strong> battery-only smoke alarms. Permitted only in lower-risk properties; typically not acceptable for HMO licensing purposes. Subdivided into Grade F1 and F2 by battery type.</li>
</ul>

<h3>BS 5839-6 Categories</h3>

<p>The Category describes which parts of the property are protected. For domestic premises BS 5839-6 uses three categories:</p>

<ul>
<li><strong>LD1:</strong> detectors throughout the property including in all rooms used for sleeping and main circulation areas. The highest level of cover.</li>
<li><strong>LD2:</strong> detectors in circulation areas and in any rooms that present a particularly high fire risk (for example, the kitchen and the principal habitable room).</li>
<li><strong>LD3:</strong> detectors in circulation areas only (hallways, landings, stairwells). The minimum coverage for life safety.</li>
</ul>

<p>A typical HMO licensing requirement is for a Grade D Category LD2 system, with mains-powered interlinked detectors in circulation areas plus the kitchen and any high-risk rooms. Larger HMOs and properties with more complex layouts may require Grade A or Grade A with LD1.</p>

<h3>What BS 5839-6 Requires of the Installation</h3>

<ul>
<li>The system is designed against a specific Grade and Category appropriate for the property type, occupancy, and any licensing conditions.</li>
<li>Detectors are correctly positioned for the room type (for example, optical smoke detectors in living rooms, heat alarms in kitchens, multi-sensor units in some configurations).</li>
<li>For Grade D and above, detectors are interlinked so that one activation triggers all sounders in the property.</li>
<li>The system is tested and commissioned, with a certificate issued.</li>
<li>The maintenance regime is agreed and recorded. For Grade A systems this means professional servicing under contract, similar to BS 5839-1. For Grade D systems the routine includes regular user tests by the occupant and periodic professional inspections, particularly for HMOs where licensing typically requires annual or twice-yearly servicing.</li>
</ul>

<h2>Comparison Table</h2>

<table>
<thead>
<tr>
<th>Aspect</th>
<th>BS 5839-1</th>
<th>BS 5839-6</th>
</tr>
</thead>
<tbody>
<tr>
<td>Building type</td>
<td>Non-domestic (commercial, retail, schools, care, warehouses, communal areas)</td>
<td>Domestic (private dwellings, flats, HMOs)</td>
</tr>
<tr>
<td>Categories</td>
<td>M, L1 to L5, P1, P2</td>
<td>LD1, LD2, LD3</td>
</tr>
<tr>
<td>Grades / system types</td>
<td>One panel-controlled system architecture</td>
<td>Grades A, B, C, D, F (with subgrades D1, D2, F1, F2)</td>
</tr>
<tr>
<td>Typical specifier</td>
<td>Fire risk assessor, building control</td>
<td>HMO licensing officer, fire risk assessor, insurer</td>
</tr>
<tr>
<td>Servicing interval</td>
<td>Approximately every 6 months by a competent contractor</td>
<td>User tests routinely; professional inspections per Grade and licensing conditions</td>
</tr>
<tr>
<td>Typical contractor accreditation</td>
<td>BAFE SP203-1</td>
<td>BAFE SP203-1 (also covers domestic systems where the contractor is registered for them)</td>
</tr>
</tbody>
</table>

<h2>Who Decides Which Standard Applies?</h2>

<p>The starting point is the fire risk assessment. For commercial premises this is a legal requirement under the Regulatory Reform (Fire Safety) Order 2005 and the assessment will identify the appropriate BS 5839-1 category. For HMOs, the local authority licensing team typically specifies a minimum standard that the property must meet, and that specification is usually expressed in BS 5839-6 terms (for example, "Grade D Category LD2 throughout, mains powered interlinked, with battery backup, professionally installed").</p>

<p>For ordinary owner-occupied private homes, BS 5839-6 is the relevant standard but there is no licensing requirement; the standard sets out best practice. Many home insurance policies reference compliance with BS 5839-6 Grade D Category LD2 or similar.</p>

<h2>Why BAFE Certification Matters</h2>

<p>BAFE is the independent third-party certification body for fire safety service providers in the United Kingdom. The relevant BAFE scheme for fire alarm systems is SP203-1, which audits contractors against:</p>

<ul>
<li>Design competence, including ability to specify the correct category and grade against a fire risk assessment</li>
<li>Installation competence to BS 5839-1 and BS 5839-6 requirements</li>
<li>Commissioning processes, certification, and documentation</li>
<li>Maintenance procedures, technician training, and record keeping</li>
</ul>

<p>Insurers, fire risk assessors, building managers, and licensing authorities frequently look for BAFE certification when assessing whether the responsible person has appointed competent contractors. Using a non-BAFE contractor is not unlawful, but it places more of the competence-evidencing burden on the responsible person and is harder to defend if the system is later found to be deficient.</p>

<p><strong>J&amp;L Security is BAFE-certified under SP203-1</strong>, covering design, installation, commissioning, and maintenance of fire alarm systems for both BS 5839-1 and BS 5839-6 installations.</p>

<h2>Maintenance Obligations Explained</h2>

<h3>BS 5839-1 commercial servicing</h3>

<p>Servicing is required at intervals no greater than six months by a competent contractor. In practice, contracts run on a 6-monthly schedule with each visit covering test of every detector and call point, sounder verification, panel checks, battery tests, and a written service report. The responsible person also records weekly user tests of one call point on a rotating basis.</p>

<h3>BS 5839-6 domestic and HMO servicing</h3>

<p>For Grade A systems the regime is similar to BS 5839-1: professional servicing under contract, typically annually for domestic and twice-yearly for larger HMOs. For Grade D systems the routine combines user-side testing (a periodic test from the test button on each unit) with periodic professional inspection, often annually for HMOs as a licensing condition. Battery replacement intervals depend on whether the system is Grade D1 (sealed long-life battery, typically 10 years) or Grade D2 (replaceable battery).</p>

<h2>How J&amp;L Security Helps</h2>

<p>We are a BAFE-certified fire alarm maintainer covering Essex and Greater London. Our work spans the full lifecycle of fire alarm systems under both BS 5839-1 and BS 5839-6:</p>

<ul>
<li>Fire risk assessments for commercial premises and HMOs</li>
<li>Design, installation, and commissioning of new BS 5839-1 systems for commercial buildings</li>
<li>Design, installation, and commissioning of BS 5839-6 systems for domestic properties and HMOs (Grades A, C, and D, Categories LD1 to LD3 as appropriate)</li>
<li>6-monthly servicing contracts for BS 5839-1 systems and annual or 6-monthly servicing for BS 5839-6 systems by Grade</li>
<li>Smoke alarm installs and smoke alarm repair for domestic and HMO landlords</li>
<li>Take-over of existing systems where the previous maintainer is no longer suitable</li>
</ul>

<p>Annual servicing contracts start at £180 + VAT for commercial premises and £120 + VAT for residential and small HMO systems. Both packages include one routine service and one emergency callout within the contract year. New installations and fire risk assessments are quoted after a free site survey.</p>

<h2>FAQs</h2>

<h3>Is BS 5839 a legal requirement?</h3>

<p>BS 5839 itself is a British Standard, not a law. The legal requirement is for the responsible person (under the Regulatory Reform (Fire Safety) Order 2005 for commercial premises, and under HMO licensing or housing legislation for HMOs) to ensure the building has appropriate fire detection. BS 5839 is the recognised method of demonstrating that a system meets that requirement. Insurers, fire risk assessors, and licensing authorities use it as the reference point.</p>

<h3>Can a Grade D system ever be acceptable for an HMO?</h3>

<p>Yes, in many cases. A Grade D Category LD2 system (mains-powered interlinked detectors in circulation areas plus the kitchen and any high-risk rooms, with battery backup) is the most common HMO licensing specification for properties up to a certain size and number of storeys. Larger HMOs, multi-storey properties, and those with bedsit-style accommodation typically require Grade A or Grade A with LD1. The local authority licensing team is the source of truth for any specific property.</p>

<h3>How often does a commercial fire alarm need servicing?</h3>

<p>BS 5839-1 requires professional servicing at intervals no greater than six months. In practice this means a 6-monthly contract with each visit covering full test of every detector and call point, sounder verification, panel checks, and battery tests. The responsible person should also carry out weekly user tests of one call point on a rotating basis and record these in the system logbook.</p>

<h3>Do I need a fire risk assessment if I have a fire alarm fitted?</h3>

<p>Yes. A fire risk assessment is a separate legal requirement under the Regulatory Reform (Fire Safety) Order 2005 for any non-domestic premises and for the common parts of HMOs and blocks of flats. The fire risk assessment is what determines the appropriate fire alarm category in the first place, so it sits ahead of the fire alarm specification rather than being replaced by it. We can carry out fire risk assessments alongside our fire alarm work.</p>

<h3>What is the difference between BAFE and SSAIB?</h3>

<p>BAFE (British Approvals for Fire Equipment) is the certification body for fire safety services in the United Kingdom; its SP203-1 scheme covers fire detection and fire alarm systems. SSAIB (Security Systems and Alarms Inspection Board) is one of the two main inspectorate bodies for the UK security industry, covering intruder alarms, CCTV, and access control. Most established security and fire contractors hold both: SSAIB for intruder alarm work and BAFE for fire alarm work. J&amp;L Security holds both.</p>

<h2>Get a Survey</h2>

<p>For a free survey covering fire alarm specification, fire risk assessment, or service contract takeover, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a> or 0208 220 4770. We cover all of Essex and Greater London. For more on fire alarms see our <a href="/services/fire-alarms">fire alarm services</a> page or read our <a href="/blog/hmo-fire-alarm-requirements-bs5839">HMO fire alarm requirements guide</a>.</p>
`,
    faqs: [
      {
        question: 'Is BS 5839 a legal requirement?',
        answer: 'BS 5839 itself is a British Standard, not a law. The legal requirement is for the responsible person (under the Regulatory Reform (Fire Safety) Order 2005 for commercial premises, and under HMO licensing or housing legislation for HMOs) to ensure the building has appropriate fire detection. BS 5839 is the recognised method of demonstrating that a system meets that requirement. Insurers, fire risk assessors, and licensing authorities use it as the reference point.'
      },
      {
        question: 'Can a Grade D system ever be acceptable for an HMO?',
        answer: 'Yes, in many cases. A Grade D Category LD2 system (mains-powered interlinked detectors in circulation areas plus the kitchen and any high-risk rooms, with battery backup) is the most common HMO licensing specification for properties up to a certain size and number of storeys. Larger HMOs, multi-storey properties, and those with bedsit-style accommodation typically require Grade A or Grade A with LD1. The local authority licensing team is the source of truth for any specific property.'
      },
      {
        question: 'How often does a commercial fire alarm need servicing?',
        answer: 'BS 5839-1 requires professional servicing at intervals no greater than six months. In practice this means a 6-monthly contract with each visit covering full test of every detector and call point, sounder verification, panel checks, and battery tests. The responsible person should also carry out weekly user tests of one call point on a rotating basis and record these in the system logbook.'
      },
      {
        question: 'Do I need a fire risk assessment if I have a fire alarm fitted?',
        answer: 'Yes. A fire risk assessment is a separate legal requirement under the Regulatory Reform (Fire Safety) Order 2005 for any non-domestic premises and for the common parts of HMOs and blocks of flats. The fire risk assessment is what determines the appropriate fire alarm category in the first place, so it sits ahead of the fire alarm specification rather than being replaced by it.'
      },
      {
        question: 'What is the difference between BAFE and SSAIB?',
        answer: 'BAFE (British Approvals for Fire Equipment) is the certification body for fire safety services in the United Kingdom; its SP203-1 scheme covers fire detection and fire alarm systems. SSAIB is one of the two main inspectorate bodies for the UK security industry, covering intruder alarms, CCTV, and access control. Most established security and fire contractors hold both. J&L Security holds both.'
      }
    ]
  },
  {
    slug: 'how-to-choose-security-company',
    title: 'How to Choose a Security Company: 7 Questions to Ask Before You Hire',
    metaTitle: 'How to Choose a Security Company: 7 Questions',
    description: 'Seven practical questions to ask before hiring a security installer in the UK. Covers accreditations, insurance, pricing, aftercare, and equipment quality.',
    datePublished: '2026-04-07',
    dateModified: '2026-04-07',
    keywords: ['how to choose security company', 'security installer UK', 'SSAIB approved installer', 'security company checklist'],
    wordCount: 1800,
    content: `
<p>A security company is a business that designs, installs, and maintains electronic security systems such as burglar alarms, CCTV, fire alarms, and access control. In the UK, security installers range from sole traders to large national firms, and the quality of work varies significantly. Choosing the wrong company can mean poorly installed equipment, inadequate aftercare, voided insurance, and wasted money.</p>

<p>This guide sets out seven questions to ask any security company before you commit. These are the questions that separate competent, professional installers from the rest.</p>

<h2>1. Are You Registered with an Inspectorate Body?</h2>

<p>The first question to ask any security company is whether they hold current registration with a UKAS-accredited inspectorate body. In the UK, the two main inspectorate bodies for security installers are:</p>

<ul>
<li><strong>SSAIB</strong> (Security Systems and Alarms Inspection Board): inspects and certifies companies that install intruder alarms, CCTV, access control, and fire detection systems</li>
<li><strong>NSI</strong> (National Security Inspectorate): provides a similar certification scheme with Gold and Silver tiers</li>
</ul>

<p>Registration with SSAIB or NSI means the company is regularly audited against national standards, including BS 8418 (CCTV), BS 6799 (intruder alarms), and BS 5839-1 (fire detection). The audits cover installation quality, documentation, complaint handling, and engineer competence.</p>

<p>Why this matters: if you want a monitored alarm that qualifies for police response, it must be installed by an SSAIB or NSI approved company. Many insurance policies also require installation by an inspectorate-registered firm. If the company is not registered, ask why.</p>

<h2>2. What Insurance Do You Carry?</h2>

<p>Any security company working at your property should carry, at minimum:</p>

<ul>
<li><strong>Public Liability Insurance:</strong> covers damage to your property or injury to third parties caused by the company's work. Look for a minimum of £2 million cover.</li>
<li><strong>Employers' Liability Insurance:</strong> a legal requirement for any company with employees. Minimum cover is £5 million.</li>
<li><strong>Professional Indemnity Insurance:</strong> covers the company against claims arising from their professional advice or system design. Not all installers carry this, but it is a mark of a professional operation.</li>
</ul>

<p>Ask to see certificates, not just verbal confirmation. A reputable company will provide these without hesitation.</p>

<h2>3. Will You Survey the Property Before Quoting?</h2>

<p>A security system should be designed for your specific property. This means an engineer needs to visit, walk the site, understand the layout, identify vulnerable points, and then design a system that addresses your actual security needs.</p>

<p>Be cautious of any company that quotes over the phone or by email without visiting. A phone quote means they are guessing: guessing the number of detectors, guessing the cable routes, guessing the equipment needed. This leads to systems that are over-specified (costing you more than necessary), under-specified (leaving gaps in coverage), or require additional work on installation day at extra cost.</p>

<p>A proper survey should be free and without obligation. During the survey, the engineer should ask about your security concerns, explain their recommendations and why, and discuss the different system options available within your budget.</p>

<h2>4. What Is Included in the Price?</h2>

<p>A transparent quote should clearly itemise what you are getting. Look for:</p>

<ul>
<li><strong>Equipment:</strong> the specific make and model of the panel, detectors, cameras, or other devices</li>
<li><strong>Installation labour:</strong> the cost of fitting, wiring, and configuring the system</li>
<li><strong>Commissioning:</strong> testing and verifying that the system works correctly after installation</li>
<li><strong>User training:</strong> showing you how to operate the system, set codes, arm and disarm, and use any app features</li>
<li><strong>Documentation:</strong> compliance certificates, user manuals, and warranty information</li>
<li><strong>VAT:</strong> all prices should state clearly whether VAT is included or additional</li>
</ul>

<p>If a quote is a single line that says "alarm system: £X", ask for a breakdown. You need to understand what you are paying for so you can compare quotes on a like-for-like basis.</p>

<p>Also ask about any costs not included in the quote: monitoring subscriptions, annual servicing, callout charges for faults, and future battery replacements.</p>

<h2>5. What Happens After Installation?</h2>

<p>The installation is only the beginning. A good security company provides ongoing support throughout the life of the system. Questions to ask about aftercare:</p>

<ul>
<li><strong>Warranty:</strong> what is covered and for how long? A professional installer should offer at least 12 months on labour and 24 months on equipment.</li>
<li><strong>Servicing:</strong> do they offer annual service contracts? What does a service visit include? What is the cost?</li>
<li><strong>Fault response:</strong> what happens if the system develops a fault? Is there a dedicated support line? What are the response times?</li>
<li><strong>Emergency callout:</strong> do they offer out-of-hours emergency support? What are the callout charges?</li>
<li><strong>System expansion:</strong> can the system be expanded later (additional cameras, detectors, or zones)? Will the company support this?</li>
</ul>

<p>Some companies focus on winning new installations and neglect existing customers. Ask for references from customers who have had their system for more than a year, as this will tell you more about the company's aftercare than any sales pitch.</p>

<h2>6. What Equipment Do You Use?</h2>

<p>The quality of the equipment determines how reliable and long-lasting your security system will be. Ask the company which manufacturers they use and why.</p>

<p>For intruder alarms, reputable manufacturers include Texecom, Pyronix, and RISCO. For CCTV, look for commercial-grade brands such as Uniview, Hikvision, or Dahua. For fire alarms, established names include Advanced, Fike, and Haes. For access control, Paxton and Comelit are widely used and well-supported.</p>

<p>Be cautious of companies that use own-brand or rebranded equipment. This is usually cheaper consumer-grade hardware with limited support, shorter lifespans, and no independent servicing options. If the company ceases trading, finding replacement parts or compatible expansions can be difficult or impossible.</p>

<p>Also ask about the grade of cabling used. Professional installations use fire-rated or enhanced cable where required, and all external cabling should be UV-resistant and properly secured. Poor cabling is one of the most common shortcuts taken by less scrupulous installers.</p>

<h2>7. Do You Cover My Area, and Can You Respond Locally?</h2>

<p>A local or regional installer will typically provide better ongoing support than a national company. Response times for faults and emergencies are shorter, the engineers know the area, and you are dealing with people who have a reputation to maintain in the community.</p>

<p>Questions to ask:</p>

<ul>
<li>Where is your base or nearest office?</li>
<li>What is your typical response time for emergency callouts in my area?</li>
<li>Are the engineers who install the system the same ones who service it?</li>
<li>How many engineers do you have covering my area?</li>
</ul>

<p>A company based 100 miles away may offer a competitive installation price, but if the system develops a fault, you could be waiting days for an engineer. A local company with engineers who know your area and your system will resolve issues faster.</p>

<h2>Red Flags to Watch For</h2>

<p>Beyond these seven questions, there are several warning signs that should make you cautious:</p>

<ul>
<li><strong>High-pressure sales tactics:</strong> "this price is only available today" or "we have a special offer if you sign now". Professional companies do not pressure you into decisions.</li>
<li><strong>No written quote:</strong> if they will not put it in writing, do not proceed.</li>
<li><strong>Cash-only payment:</strong> legitimate businesses accept bank transfers and card payments, and provide VAT invoices.</li>
<li><strong>No accreditations:</strong> if they cannot provide evidence of SSAIB, NSI, or other relevant accreditations, this is a significant risk.</li>
<li><strong>Subcontracting without disclosure:</strong> some companies sell the job and then subcontract the installation to a third party. Ask who will actually be doing the work.</li>
<li><strong>No aftercare provision:</strong> if they cannot clearly explain what happens after installation, they are probably a fit-and-forget operation.</li>
</ul>

<h2>Making Your Decision</h2>

<p>The best security company for your needs will answer all seven questions clearly, provide a written quote after surveying your property, use recognised equipment from established manufacturers, and demonstrate a genuine commitment to aftercare and ongoing support.</p>

<p>Getting two or three quotes from inspectorate-registered companies gives you a fair comparison. The cheapest quote is not always the best value: factor in equipment quality, warranty terms, and ongoing support costs over the life of the system.</p>

<p>At J&L Security, we are SSAIB approved, BAFE certified, and have been serving Essex and Greater London since 2011. We provide free, no-obligation surveys, transparent fixed-price quotes, and ongoing maintenance and support. If you would like to discuss your security requirements, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a>.</p>

<p>Learn more about our <a href="/services">security services</a> or read our other <a href="/blog">blog articles</a> for more guidance on choosing and maintaining security systems.</p>
`
  },
  {
    slug: 'insurance-approved-burglar-alarms-uk-2026',
    title: 'Insurance-Approved Burglar Alarms: What UK Home Insurers Actually Require in 2026',
    metaTitle: 'Insurance-Approved Burglar Alarms UK 2026: Full Guide',
    description: 'What UK home and business insurers actually mean by an insurance-approved alarm in 2026. Covers grading, inspectorate bodies, monitoring requirements, and the paperwork insurers ask for.',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    keywords: ['insurance approved alarm UK', 'insurance approved burglar alarm', 'SSAIB alarm insurance', 'NSI alarm requirements', 'alarm grading insurance'],
    wordCount: 1720,
    content: `
<p>If your home or business insurer has told you that you need an "insurance-approved" alarm, you may have been left wondering what that actually means in practice. It is not a single certificate you can buy, and it is not a make or model of alarm. It is a combination of four things: who installed it, what standard it was installed to, what grade of system it is, and whether the installing company belongs to a recognised inspectorate body.</p>

<p>This guide explains what UK insurers mean by an insurance-approved burglar alarm in 2026, which bodies insurers actually recognise, what Grade 1, 2, and 3 systems are, and the paperwork you will typically need to provide. It is aimed at homeowners, landlords, and small business owners in Essex and Greater London who are trying to meet an insurance condition without overspending on a system they do not need.</p>

<h2>Why Insurers Ask for Approved Alarms</h2>

<p>Insurers ask for an approved alarm because they want two things: a reduced claim frequency, and a credible audit trail when a claim is made. An alarm installed by an unknown installer with no inspectorate oversight offers neither. If the policyholder claims for a burglary and the alarm was not set, or was faulty, or was never commissioned to a recognised standard, the insurer has limited ways to verify what was installed and whether it met its own underwriting requirements.</p>

<p>A professionally installed alarm from an SSAIB or NSI approved company, certified to a recognised grade, gives the insurer a paper trail: an installation certificate, commissioning records, a maintenance history, and in the case of monitored systems, Alarm Receiving Centre (ARC) logs. This is what they actually mean when they say "insurance-approved".</p>

<h2>The Inspectorate Bodies Insurers Recognise</h2>

<p>Two inspectorate bodies dominate the UK security industry and are the ones almost every insurer will accept:</p>

<ul>
<li><strong>SSAIB</strong> (Security Systems and Alarms Inspection Board): a UKAS-accredited certification body that audits intruder alarm installers against European and British standards.</li>
<li><strong>NSI</strong> (National Security Inspectorate): a similar UKAS-accredited body with two tiers, NSI Gold and NSI Silver.</li>
</ul>

<p>Both bodies inspect their members on installation standards, documentation, staff vetting, and ongoing competence. An installer that is not registered with one of these bodies is not, in insurance terms, an approved installer. Some insurers will also accept BSIA membership as an additional indicator, but inspectorate registration is the core requirement.</p>

<p>At <a href="/">J&L Security</a>, we are SSAIB approved, which means any alarm we install is covered by a recognised inspectorate body and comes with the paperwork insurers require.</p>

<h2>Alarm Grades Explained</h2>

<p>British and European standard BS EN 50131 grades intruder alarm systems from Grade 1 to Grade 4, based on the level of risk the system is designed to resist. Grade 4 is reserved for very high-risk sites such as banks and is rarely relevant to domestic or SME properties. The three grades you will see most often in UK insurance conditions are:</p>

<table>
<thead>
<tr><th>Grade</th><th>Intended Risk Level</th><th>Typical Use Case</th></tr>
</thead>
<tbody>
<tr><td>Grade 1</td><td>Low risk, limited knowledge intruder</td><td>Small dwellings, sheds, outbuildings. Rarely specified by insurers today.</td></tr>
<tr><td>Grade 2</td><td>Low to medium risk, opportunistic intruder with some knowledge</td><td>Most domestic properties and small commercial premises. The most common grade specified by UK home insurers.</td></tr>
<tr><td>Grade 3</td><td>Medium to high risk, intruder with detailed knowledge and tools</td><td>High-value domestic, retail, offices holding stock or cash, properties in higher crime areas. Specified by insurers for properties with above-average theft risk.</td></tr>
</tbody>
</table>

<p>Most UK home insurers will ask for a Grade 2 system. Some specialist and high-value insurers, and most commercial policies, will ask for Grade 3. Your policy schedule will state the grade required. If it is not stated, call your insurer and ask them to confirm in writing before you commission an installation.</p>

<h2>Bell-Only, Speech Dialler, or Monitored?</h2>

<p>In addition to the grade, your policy will usually specify the type of alarm response required:</p>

<ul>
<li><strong>Bell-only:</strong> the alarm sounds a siren locally. No one is notified automatically. Accepted by some insurers for lower-value properties but increasingly rare as a policy requirement.</li>
<li><strong>Speech dialler:</strong> the alarm calls a list of nominated key holders when activated. Accepted by many insurers as an intermediate option.</li>
<li><strong>Monitored (ARC connected):</strong> the alarm signals to an Alarm Receiving Centre, which verifies the activation and, where appropriate, notifies the police or a key holder service. This is the level most insurers prefer for higher-value homes and for almost all commercial policies.</li>
</ul>

<p>Police response in the UK is governed by the ACPO (now NPCC) Security Systems Policy, which means a monitored alarm needs to be installed by an inspectorate-approved company and must have a Unique Reference Number (URN) from the relevant police force to receive a Level 1 (immediate) response. A bell-only alarm does not get a police response at all.</p>

<h2>The Paperwork Your Insurer Will Ask For</h2>

<p>When you take out or renew a policy that requires an approved alarm, the insurer will typically ask for one or more of the following documents:</p>

<ul>
<li><strong>Installation certificate</strong> from an SSAIB or NSI approved installer, stating the grade (usually Grade 2 or 3) and the standard it was installed to (BS EN 50131 and associated parts).</li>
<li><strong>Commissioning certificate</strong> showing the date of handover and the specification of the system installed.</li>
<li><strong>Maintenance contract</strong> or most recent service certificate, showing the system is under an active maintenance agreement. Most insurers require at least one service visit per year for bell-only and two per year for monitored systems.</li>
<li><strong>Monitoring agreement and URN</strong>, if the policy specifies a monitored alarm with police response.</li>
</ul>

<p>Keep these documents together in one folder, digital or paper, along with your policy schedule. If you need to claim, the insurer will ask for proof that the alarm was installed, maintained, and set at the time of the incident.</p>

<h2>Common Mistakes That Invalidate Cover</h2>

<p>The most common reasons an insurer refuses or reduces a burglary claim on a property with an "approved" alarm are straightforward and avoidable:</p>

<ol>
<li><strong>The alarm was not set.</strong> Almost every policy that requires an alarm also requires that it is set when the property is unoccupied. If it was off at the time of the burglary, cover can be refused.</li>
<li><strong>The alarm was not maintained.</strong> If the most recent service was more than 12 months ago, or there is no service history at all, the insurer can argue the system was not in a serviceable condition.</li>
<li><strong>The installer was not inspectorate approved.</strong> If the system was installed by a local handyman or an unregistered installer, it does not meet the policy condition even if the equipment itself is the same.</li>
<li><strong>The grade is wrong.</strong> A Grade 1 alarm will not satisfy a policy that specifies Grade 2, even if it is technically certified. Always check the grade on the installation certificate matches the policy requirement.</li>
<li><strong>No URN on a monitored system.</strong> A monitored alarm without a URN cannot receive police response, which may breach the policy condition if that response is specified.</li>
</ol>

<h2>What to Ask Your Installer Before You Commit</h2>

<p>Before you commission a new alarm installation to meet an insurance requirement, ask the installer these five questions:</p>

<ol>
<li>Are you SSAIB or NSI approved? Ask for the membership number.</li>
<li>What grade will the installed system be certified to, and will you issue a certificate stating this?</li>
<li>Is a maintenance contract included, and how often will the system be serviced?</li>
<li>If the system is monitored, which ARC will it be connected to, and will you apply for a URN on my behalf?</li>
<li>Will you provide a written specification before installation that I can send to my insurer for pre-approval?</li>
</ol>

<p>Sending the specification to your insurer before installation is a small step that avoids the worst outcome: paying for a system that does not meet the policy condition. Most insurers are happy to confirm in writing that a proposed specification is acceptable.</p>

<h2>Getting the Right System for Your Property</h2>

<p>The right insurance-approved alarm is the one that meets your policy condition without going beyond what you actually need. For most domestic properties in Essex and Greater London, that is a Grade 2 system installed by an SSAIB-approved company, with either a speech dialler or ARC monitoring depending on the policy. For commercial properties, it is more commonly a Grade 3 monitored system with police response.</p>

<p>At J&L Security, every alarm we install is certified, documented, and delivered with the paperwork your insurer will expect. We have been serving homes and businesses across Essex and Greater London since 2011, and we handle URN applications, monitoring contracts, and annual servicing as part of our standard installation package.</p>

<p>If you have an insurance condition you need to meet, or you are comparing quotes for an approved alarm, <a href="/contact">contact us</a> for a free survey or call <a href="tel:02045385925">0204 538 5925</a>. Read more about our <a href="/services/burglar-alarms">burglar alarm installation services</a> or explore our <a href="/services">full range of security services</a>.</p>
`
  },
  {
    slug: 'wired-vs-wireless-burglar-alarms-essex',
    title: 'Wired vs Wireless Burglar Alarms: Which Is Right for Your Essex Home?',
    metaTitle: 'Wired vs Wireless Burglar Alarms: Essex Homeowner Guide',
    description: 'A detailed comparison of wired and wireless burglar alarm systems for UK homes. Covers installation, reliability, battery life, cost, and which works best in different Essex properties.',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    keywords: ['wired vs wireless alarm', 'wireless burglar alarm UK', 'hardwired alarm system', 'wireless alarm reliability', 'burglar alarm installation Essex'],
    wordCount: 1680,
    content: `
<p>One of the first decisions you face when installing a new burglar alarm is whether to choose a wired or wireless system. Twenty years ago the answer was almost always wired, because wireless systems were unreliable and expensive. Today, both technologies are mature, and the right choice depends more on the property and how much disruption you are willing to accept during installation than on the technology itself.</p>

<p>This guide explains how each type works, where each one performs best, and what we typically recommend for different kinds of homes across Essex and Greater London.</p>

<h2>How a Wired Alarm System Works</h2>

<p>A wired, or hardwired, alarm system connects every sensor, keypad, and sounder back to the control panel using cabling run through walls, ceilings, and floors. Power and signal travel down the same cables. Detection is instantaneous and there are no batteries to change in individual devices.</p>

<p>Wired systems have been the professional standard in the UK for decades. They are still the first choice for new builds, major refurbishments, and commercial installations where cable runs can be planned in advance and hidden neatly within construction.</p>

<h2>How a Wireless Alarm System Works</h2>

<p>A wireless system uses radio-frequency signals, typically in the licence-free 868 MHz band in the UK, to communicate between sensors and the control panel. Each sensor has its own battery, usually a long-life lithium cell that lasts three to five years under normal use. The panel is mains-powered with a backup battery.</p>

<p>Modern wireless systems use supervised, encrypted, two-way communication. The panel regularly checks in with each sensor. If a sensor fails to respond, the panel reports a fault. This supervision addresses the reliability concerns that dogged early wireless systems.</p>

<h2>Installation: Disruption and Time</h2>

<p>Installation is the single biggest practical difference between the two technologies.</p>

<ul>
<li><strong>Wired systems</strong> involve lifting carpets, drilling into walls and joists, and running cables through loft spaces and under floorboards. In an occupied home this is messy. A typical domestic installation takes one to two days, longer for larger properties, and some redecoration may be needed after the work is complete.</li>
<li><strong>Wireless systems</strong> need only a mains power supply for the control panel. Sensors mount to walls with screws or adhesive and are paired with the panel in software. A full installation in an average three-bedroom house can usually be completed in half a day with minimal disruption and no decoration damage.</li>
</ul>

<p>For an occupied home where the owners want a new alarm installed without lifting floors and redecorating afterwards, wireless is almost always the better choice. For a property undergoing renovation or new construction, wired makes sense because the cable runs can be planned into the build.</p>

<h2>Reliability and False Alarms</h2>

<p>Reliability used to be the strongest argument for wired systems. A physical cable cannot be jammed, cannot run out of battery, and cannot drop out of range. Modern wireless systems have closed much of that gap, but not all of it.</p>

<p>In practice:</p>

<ul>
<li>Wired systems have a slight edge in pure signal reliability, with no battery or radio dependencies in the sensors themselves.</li>
<li>Wireless systems can be affected by heavy radio interference in rare cases, and they depend on the sensors' batteries being replaced on schedule.</li>
<li>Both technologies produce similar numbers of false alarms in practice, because most false alarms are caused by pet movement, insects, air currents, and poor detector placement rather than by signal failure.</li>
</ul>

<p>For standard domestic and SME use, both technologies easily meet the reliability requirements of BS EN 50131 Grade 2 and Grade 3 systems. The British and European standards now explicitly recognise wireless as equivalent to wired when supervised communication and appropriate battery monitoring are in place.</p>

<h2>Battery Life and Ongoing Maintenance</h2>

<p>Wireless sensor batteries typically last three to five years. The control panel monitors battery voltage and reports a low-battery warning well before any sensor actually fails. During annual servicing, the installer can check reported voltages and replace any cells that are approaching end of life.</p>

<p>Wired systems do not need battery changes at the sensor level, but the control panel still has a backup battery that needs replacing every three to five years. Both types of system require the same annual service to meet insurance and inspectorate requirements.</p>

<p>Running costs are therefore similar. A wireless system may need more battery changes over a 10-year period, but the cost of the cells themselves is small and replacement takes minutes rather than hours.</p>

<h2>Cost Comparison</h2>

<p>There is no universal answer to which technology is cheaper, because the cost of a wired installation depends heavily on the property. In a new build or empty property, wired is often slightly cheaper than wireless because the equipment itself is lower cost. In an occupied, carpeted, and decorated home, wired becomes more expensive because of the labour involved in running cables without damaging the property.</p>

<table>
<thead>
<tr><th>Property Type</th><th>Wired Installed Cost</th><th>Wireless Installed Cost</th></tr>
</thead>
<tbody>
<tr><td>Three-bed detached, occupied, carpeted</td><td>£900 to £1,400</td><td>£650 to £1,000</td></tr>
<tr><td>Four-bed new build, pre-decoration</td><td>£700 to £1,100</td><td>£800 to £1,200</td></tr>
<tr><td>Small commercial unit (200 sqm)</td><td>£1,200 to £2,000</td><td>£1,100 to £1,800</td></tr>
</tbody>
</table>

<p>These are typical ranges for the Essex and Greater London market in 2026 and assume a Grade 2 system. Grade 3 adds roughly 15 to 25 per cent. Monitoring and maintenance contracts are charged separately.</p>

<h2>Which Type Fits Which Property</h2>

<p>Based on our experience installing alarms across Essex and Greater London, here is how we typically advise clients:</p>

<ul>
<li><strong>Occupied Victorian and Edwardian homes</strong> in areas like <a href="/locations/brentwood">Brentwood</a>, Woodford, and South Woodford tend to favour wireless, because lifting parquet floors and running cables through solid walls is disruptive and expensive.</li>
<li><strong>New build and modern estate homes</strong> in places like Chelmsford and Basildon can go either way. If the wiring is being done at first fix during construction, wired is cost-effective. After handover, wireless is usually less intrusive.</li>
<li><strong>Flats and apartments</strong> almost always use wireless, because running cables between rooms in a flat without damage is difficult and in some leaseholds it is not allowed at all.</li>
<li><strong>Commercial units</strong> and offices vary: large warehouses with long cable runs often prefer wired for cost, while smaller offices and retail units usually prefer wireless for speed of install.</li>
<li><strong>Listed buildings</strong> almost always require wireless because drilling into historic fabric is restricted by listed building consent.</li>
</ul>

<h2>A Note on Hybrid Systems</h2>

<p>In many real installations, the answer is not wired or wireless but both. Hybrid systems use wireless sensors where cabling is impractical and wired sensors where cables can be run cleanly. The control panel supports both types simultaneously. Hybrid is increasingly our default approach in older homes with awkward layouts.</p>

<h2>Making the Decision</h2>

<p>If you are choosing between wired and wireless for an Essex home, the practical questions are straightforward:</p>

<ol>
<li>Is the property occupied and decorated? If yes, wireless is usually the better choice.</li>
<li>Is there an insurance condition that specifies a particular grade? Both technologies can meet Grade 2 and Grade 3, so the grade itself does not force your hand.</li>
<li>Is there any constraint on drilling, such as a listed building designation or a strict leasehold? If yes, wireless is essentially the only option.</li>
<li>Is this a new build or refurbishment? If yes, wired may offer a small cost saving, assuming the cables can go in before plaster and decoration.</li>
</ol>

<p>At J&L Security, we install both wired and wireless systems across Essex and Greater London, and we regularly fit hybrid systems where it is the best fit for the property. Every installation is SSAIB approved, certified to BS EN 50131, and supported by our ongoing maintenance service.</p>

<p>If you would like a free survey and a written recommendation for your property, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a>. You can also read more about our <a href="/services/burglar-alarms">burglar alarm services</a> or explore our <a href="/blog">other guides</a>.</p>
`
  },
  {
    slug: 'business-cctv-ico-compliance-uk-2026',
    title: 'Business CCTV and the ICO: A 2026 Compliance Guide for UK Businesses',
    metaTitle: 'Business CCTV ICO Compliance Guide UK 2026',
    description: 'What UK businesses need to know about CCTV and data protection law in 2026. Covers ICO expectations, signage, DPIAs, retention, subject access requests, and common compliance mistakes.',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    keywords: ['business CCTV ICO', 'CCTV data protection UK', 'CCTV compliance 2026', 'CCTV DPIA', 'workplace CCTV rules'],
    wordCount: 1740,
    content: `
<p>CCTV is one of the most widely used security technologies in UK business, and also one of the most frequently misunderstood in compliance terms. Many small businesses install cameras without a clear view of what the Information Commissioner's Office (ICO) actually expects, and only discover the gaps when a subject access request lands or a complaint is made.</p>

<p>This guide sets out what the ICO expects from UK business CCTV operators in 2026, what the UK GDPR and Data Protection Act 2018 require in practice, and the most common compliance mistakes we see when we survey businesses across Essex and Greater London.</p>

<h2>When CCTV Becomes a Data Protection Issue</h2>

<p>CCTV footage that captures identifiable people is personal data under the UK GDPR. That applies whether the camera is on a high street shop, a warehouse loading bay, an office reception, or a private car park used by staff and visitors. As soon as you are capturing images of identifiable individuals, your business becomes a data controller for that footage and the full body of UK data protection law applies.</p>

<p>There is a narrow household exemption for purely domestic use, but it does not apply to businesses, landlords of rental property, or the commercial areas of mixed-use premises. For any SME installing CCTV for security, stock protection, or workplace monitoring, compliance is not optional.</p>

<h2>The Five Things the ICO Expects You to Have</h2>

<p>Based on current ICO guidance, any business operating CCTV should be able to produce the following on request:</p>

<ol>
<li><strong>A documented lawful basis</strong> for the processing, usually "legitimate interests" for security purposes, with a written legitimate interests assessment explaining why the business need outweighs the privacy impact on individuals captured.</li>
<li><strong>A Data Protection Impact Assessment (DPIA)</strong> where the CCTV is large-scale, monitors a publicly accessible area, or captures areas where people have a higher expectation of privacy (staff-only areas, welfare facilities, and so on).</li>
<li><strong>Signage</strong> that tells people they are being recorded, who the operator is, and how to contact the operator. The signage must be clearly visible before a person enters the monitored area, not after.</li>
<li><strong>A retention policy</strong> with a defined maximum retention period. Footage should be held only as long as necessary for the stated purpose and then deleted. For most retail and office applications, 30 days is a common ceiling.</li>
<li><strong>A documented process for handling subject access requests</strong>, so that when a member of the public or an employee asks for footage of themselves, the business can respond within the statutory one-month deadline.</li>
</ol>

<p>None of this is exotic. It is standard operational documentation that any business can produce with a small amount of preparation.</p>

<h2>CCTV Signage: What It Must Say</h2>

<p>The ICO is specific about signage. At minimum, every sign should state:</p>

<ul>
<li>That CCTV is in operation.</li>
<li>The purpose of the CCTV (for example, "for crime prevention and the safety of staff and customers").</li>
<li>The name of the operator (the business name).</li>
<li>Contact details for enquiries, typically an email address or phone number.</li>
</ul>

<p>Signs should be placed at every entrance to a monitored area and be legible from a normal approach distance. A single small sticker by the front door is not sufficient for a shop with multiple entrances, a yard, and a back office. In practice, we recommend a dedicated CCTV notice at each pedestrian entry point and at any staff-only door where internal cameras begin.</p>

<h2>Retention: How Long Can You Keep Footage?</h2>

<p>There is no statutory maximum retention period for CCTV in UK law. The UK GDPR principle of storage limitation requires that footage is kept for no longer than necessary for the purposes it was collected. In practice, the ICO expects controllers to set a retention ceiling and justify it.</p>

<p>Common benchmarks:</p>

<ul>
<li><strong>7 days</strong> for low-risk sites where the purpose is purely live deterrence.</li>
<li><strong>28 to 31 days</strong> for general retail, hospitality, and office environments. This is by far the most common figure we see.</li>
<li><strong>60 to 90 days</strong> for higher-risk sites or where incident investigation timelines justify a longer period.</li>
</ul>

<p>Retention longer than 90 days needs a specific documented justification. "We might need it one day" is not enough. A modern digital recorder will automatically overwrite old footage on a rolling basis, so setting retention is usually a matter of configuring the recorder correctly at commissioning.</p>

<h2>Covert CCTV, Audio, and Workplace Monitoring</h2>

<p>Three high-risk areas trip up small businesses more than any others:</p>

<ol>
<li><strong>Covert cameras.</strong> Hidden cameras aimed at staff or customers without their knowledge are almost never lawful and require a very specific, documented basis. If you are considering covert CCTV for a suspected theft investigation, take legal advice first. Do not install covert cameras as a default measure.</li>
<li><strong>Audio recording.</strong> CCTV that also records audio is significantly more intrusive than video alone and is very rarely justified in a business context. Most commercial CCTV systems should have audio recording disabled unless there is a very specific, documented reason to enable it on a particular camera.</li>
<li><strong>Staff monitoring.</strong> Cameras pointed at workstations, break rooms, or welfare facilities require a DPIA, clear employee communication, and usually a consultation with affected staff. The ICO has been increasingly active on workplace monitoring complaints, and employment tribunals have awarded damages in cases where monitoring was excessive or poorly disclosed.</li>
</ol>

<h2>Responding to a Subject Access Request</h2>

<p>Any individual captured on your CCTV has the right to request a copy of the footage that contains them. Once you receive a valid request, you have one calendar month to respond. In most cases you will need to:</p>

<ul>
<li>Verify the requester's identity.</li>
<li>Ask for enough information to locate the footage: approximate date, time, and location.</li>
<li>Retrieve the relevant footage from the recorder.</li>
<li>Redact or blur any third parties visible in the footage who have not consented to disclosure.</li>
<li>Provide the footage in a commonly used format, usually MP4 on a USB stick or via secure download.</li>
</ul>

<p>The redaction step is the most technically difficult and is where many businesses trip up. If your CCTV system or software does not support masking of third parties, you may need to use a separate redaction tool or engage a specialist. A good installer can advise on this at the design stage.</p>

<h2>Common Compliance Mistakes</h2>

<p>When we survey business CCTV across Essex and Greater London, these are the issues we see most often:</p>

<ol>
<li>No signage, or signage that does not name the operator.</li>
<li>Cameras covering the public pavement or neighbouring property when they do not need to.</li>
<li>Recording audio by default on every channel without any business justification.</li>
<li>Retention set to "indefinite" on the recorder because no one configured it at commissioning.</li>
<li>No written policy and no named person responsible for CCTV data.</li>
<li>Staff unaware of what to do if someone requests their own footage.</li>
<li>Old systems still in service where the operator has no way to extract footage without the original installer, who is no longer trading.</li>
</ol>

<p>Most of these are fixable in a single visit. A CCTV compliance review takes a couple of hours and produces a short action list covering signage, configuration changes, and policy documents. For most SMEs this is a far smaller exercise than they expect.</p>

<h2>How J&L Security Helps Businesses Stay Compliant</h2>

<p>At J&L Security, every commercial CCTV installation we carry out includes compliance considerations as part of the design. We recommend camera positioning that avoids unnecessary capture of neighbouring property and public areas, set appropriate retention periods on commissioning, disable audio by default, supply initial ICO-compliant signage, and provide a written commissioning pack that forms the basis of your internal policy.</p>

<p>We also review existing systems for businesses that inherited their CCTV from a previous installer or tenant. If you are unsure whether your system meets ICO expectations in 2026, a review is the cheapest way to find out.</p>

<p>To arrange a free CCTV survey or compliance review for your business, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a>. Read more about our <a href="/services/cctv-systems">CCTV installation services</a> or explore our <a href="/services">full range of business security services</a>.</p>

<p><em>This article is general guidance based on ICO publications and is not a substitute for legal advice. For specific compliance questions, consult a qualified data protection professional or the ICO directly.</em></p>
`
  },
  {
    slug: 'why-does-my-burglar-alarm-keep-going-off',
    title: 'Why Does My Burglar Alarm Keep Going Off? Common Causes and Fixes',
    metaTitle: 'Why Does My Burglar Alarm Keep Going Off? UK Guide',
    description: 'A practical troubleshooting guide for false alarms. Covers the most common causes, how to diagnose them, and when to call a professional installer.',
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    keywords: ['false alarm causes', 'burglar alarm keeps going off', 'alarm false activation', 'alarm troubleshooting UK', 'alarm maintenance'],
    wordCount: 1620,
    content: `
<p>A burglar alarm that keeps going off for no obvious reason is one of the most frustrating problems a homeowner or business can deal with. It disturbs neighbours, erodes confidence in the system, and, if it happens often enough, risks a withdrawal of police response for monitored sites. The good news is that almost every false alarm has a knowable cause, and the majority can be diagnosed and fixed without replacing the system.</p>

<p>This guide walks through the most common causes of false activations, what you can check yourself, and when it is time to call a professional installer.</p>

<h2>Why False Alarms Matter</h2>

<p>UK police forces operate a three-strike rule, formalised under the NPCC Security Systems Policy. A monitored alarm with a URN (Unique Reference Number) that generates three false activations within a rolling 12-month window can have its police response level downgraded or withdrawn. Rebuilding that response requires the installer to investigate, fix the underlying problem, and apply for reinstatement.</p>

<p>Even for bell-only systems with no monitoring, repeated false alarms are a problem. Neighbours stop paying attention, the property stops being properly protected, and in some cases local authorities can take action under anti-social behaviour legislation.</p>

<h2>The Five Most Common Causes of False Alarms</h2>

<h3>1. Insects and Spiders</h3>

<p>The single most common cause of unexplained false alarms is a spider or insect crawling directly across the lens of a PIR (passive infrared) sensor. PIRs detect changes in infrared radiation, and a warm-bodied insect right on the lens looks exactly like a person walking through the beam from the sensor's perspective.</p>

<p>You will see this most often in lofts, garages, and outbuildings in warmer months, and in detectors mounted near ceilings where spiders spin webs. The fix is straightforward: vacuum or brush the sensor housing, clear any cobwebs from the surrounding area, and consider repositioning the detector away from known insect routes. Some detectors have "pet-immune" or anti-insect screens built in, and upgrading to these in problem areas is worth the small extra cost.</p>

<h3>2. Pets</h3>

<p>Standard PIR detectors cannot reliably distinguish between a cat, a small dog, and a person. If a pet is allowed into a protected area while the alarm is set, an activation is almost guaranteed. Two fixes exist:</p>

<ul>
<li>Confine pets to unprotected zones when setting the alarm. This works for quieter pets and single-room arrangements but is impractical for many households.</li>
<li>Fit pet-tolerant PIRs that use a combination of two sensing elements and geometry to ignore animals below a given weight. Modern pet-tolerant detectors are effective up to 25 or 35 kilograms depending on the model and are the right choice in any household with a free-roaming cat or medium dog.</li>
</ul>

<p>Retrofitting pet-tolerant detectors to an existing system is usually a quick and inexpensive job.</p>

<h3>3. Draughts, Curtains, and Moving Objects</h3>

<p>PIRs respond to fast changes in infrared. A warm radiator blowing air onto a curtain, sunlight moving across a sofa, or a loose draught from an open window can all produce false positives. Common culprits:</p>

<ul>
<li>Detectors mounted facing a window with direct sunlight.</li>
<li>Curtains or blinds hanging directly in front of a detector's field of view.</li>
<li>Radiators, heaters, or boilers within the detector's field.</li>
<li>Ceiling fans, moving decorations, or helium balloons inside a protected area.</li>
</ul>

<p>The fix is a combination of repositioning the detector, adjusting its sensitivity during commissioning, or moving the offending heat source. A good installer will have spotted most of these at the original survey, but homes change over time and what was a clean room five years ago may now have a radiator in the wrong place.</p>

<h3>4. Low Batteries in Wireless Sensors</h3>

<p>Wireless sensors run on long-life lithium cells that typically last three to five years. As a battery approaches end of life, the sensor's behaviour can become erratic. You may see random activations, supervision faults, or a sensor that reports fine during the day and then triggers at night when voltages dip.</p>

<p>Most modern wireless panels will flag low batteries before they cause false alarms, but this only works if someone is checking the panel's event log. If your system keeps reporting faults or activations from a single device, ask your installer to check the battery voltage at the next service. If a single sensor has started misbehaving after several years of reliable service, batteries are the first thing to suspect.</p>

<h3>5. Mains Power and Environmental Issues</h3>

<p>Less commonly, false alarms can be triggered by:</p>

<ul>
<li><strong>Brief mains power dips</strong> that cause the panel to switch to battery backup. A failing backup battery in the panel itself can cause the system to behave unpredictably during a dip.</li>
<li><strong>Mobile phone signal loss</strong> on monitored systems using GSM signalling, which can cause the panel to report a loss-of-communication fault that some users mistake for a full activation.</li>
<li><strong>Water ingress</strong> in external sensors, sirens, or cable joints. This is particularly common on outdoor sirens more than a few years old.</li>
<li><strong>Insect nests inside external bell boxes</strong>, which can short-circuit the tamper switch and generate apparent activations.</li>
</ul>

<h2>What You Can Check Yourself</h2>

<p>Before calling an engineer, there are a handful of checks worth doing. Most take less than ten minutes:</p>

<ol>
<li><strong>Check the event log</strong> on the alarm panel or app. Every activation logs the device that triggered it. If the same device appears repeatedly, you know where to focus.</li>
<li><strong>Inspect that device</strong>. Look for cobwebs, insects, dust, or physical damage. Clean the sensor housing gently with a dry cloth.</li>
<li><strong>Check the surrounding area</strong>. Has a new radiator been installed nearby? Has a curtain been moved? Is a new pet using the room?</li>
<li><strong>Check the control panel display</strong> for any fault messages: low battery, supervision loss, mains loss, tamper, and so on. Most panels will tell you if a sensor is unhappy before it generates a full activation.</li>
<li><strong>Check the backup battery date</strong>. If your panel has not been serviced in the last 12 months and the main backup battery is more than three or four years old, it is overdue for replacement.</li>
</ol>

<p>If the activations are coming from different devices at different times, or if you cannot pinpoint a single source, stop and call an engineer. Randomly adjusting settings on a commissioned alarm can create more problems than it solves.</p>

<h2>When to Call a Professional</h2>

<p>Call your installer if any of the following applies:</p>

<ul>
<li>The alarm has activated three times in the last 12 months and is monitored, because you are close to losing police response.</li>
<li>Multiple devices are triggering and there is no obvious pattern.</li>
<li>The panel is showing faults you do not recognise.</li>
<li>The system has not been serviced in the last 12 months.</li>
<li>You have recently changed the layout of the property, added pets, or had other building work done.</li>
</ul>

<p>A diagnostic visit from a qualified engineer will usually identify the cause within an hour and either fix it on the spot or produce a clear recommendation. Most faults cost less to resolve than one callout charge from an emergency locksmith after a genuine burglary, so it is worth acting early.</p>

<h2>Prevention: Regular Servicing Is Not Optional</h2>

<p>The single biggest preventative measure is the annual service that insurance and inspectorate bodies already require. At a typical service visit, the engineer will test every sensor, check battery voltages, clean sensor housings, inspect external sirens, verify panel functionality, and update the event log. Around 80 per cent of the problems described in this guide will be caught at a standard annual service before they cause a false alarm.</p>

<p>If your system is out of service contract, or the installer is no longer trading, you can move the service to a different SSAIB or NSI approved company. The new installer will take over the system, issue a fresh maintenance certificate, and from then on the system will be covered under their agreement.</p>

<h2>Getting It Sorted</h2>

<p>At J&L Security, we diagnose and resolve false alarm problems on systems installed by us and by other companies, across Essex and Greater London. We are SSAIB approved, fully insured, and our engineers carry the common parts needed to fix most issues on the first visit.</p>

<p>If your alarm keeps going off and you want to get to the bottom of it, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a>. Read more about our <a href="/services/burglar-alarms">burglar alarm services</a> and <a href="/blog">other guides</a> on alarm installation and maintenance.</p>
`
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
