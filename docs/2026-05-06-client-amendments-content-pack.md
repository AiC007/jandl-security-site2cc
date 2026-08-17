# Client Amendments Content Pack

**Date:** 6 May 2026
**Source:** Email from Jag (J&L Security), 5 May 2026 21:51
**Author:** The AI Consultancy
**Purpose:** Single source of truth for the Claude Code session implementing the May 2026 client amendments.
**Standards:** UK English. No em dashes. No emojis. All pricing presented as "from £X + VAT" with the explicit caveat that final quotes are subject to survey. Both phone numbers (0204 538 5925, 0208 220 4770) must be visible on every new page.

---

## Index

1. Phase 1: Burglar alarm cost article pricing update
2. Phase 2: 14 new London location pages (and Greenwich audit)
3. Phase 3: Fire alarm keyword integration map
4. Phase 4: New blog post on BS 5839-1 and BS 5839-6
5. Phase 5: llms.txt and llms-full.txt additions
6. Verification checklist

---

## Phase 1: Burglar alarm cost article pricing update

**Target file:** `lib/blog.ts`
**Target post:** slug `burglar-alarm-cost-uk-2026`
**Action:** Replace the indicative "Pricing Summary Table (UK, 2026)" section, the "Ongoing Costs" section, and the relevant FAQs with confirmed J&L pricing. Keep the educational content (system types, standards, grading, NSI/SSAIB explanation, property size guidance) intact. Update `dateModified` to `2026-05-06` and append two new keywords.

### 1.1 Field updates

```ts
dateModified: '2026-05-06',
keywords: [
  'burglar alarm cost uk',
  'alarm installation cost',
  'intruder alarm price uk',
  'monitored alarm cost',
  'home alarm system cost uk',
  'pyronix enforcer cost',
  'wireless burglar alarm price essex'
],
wordCount: 2380,
```

### 1.2 New section to INSERT immediately after the "Annual Maintenance Contract" subsection (i.e. between the existing "Annual Maintenance Contract" paragraph and the "NSI and SSAIB Approved Installer..." H2)

Replace nothing here, simply insert this whole block:

```html
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
```

### 1.3 Sections to REPLACE

#### Replace the existing "Annual Maintenance Contracts" sub-block under the "Ongoing Costs" H2

The current article carries an indicative range "£80 to £150 per year" for residential maintenance, which is below our confirmed starting price.

**Find and remove** the H3 "Annual Maintenance Contracts" and the paragraph beneath it that begins "For residential systems, an annual maintenance contract typically costs..." down to the end of that paragraph.

**Replace with:**

```html
<h3>Annual Maintenance Contracts</h3>

<p>Most installers offer an annual maintenance contract that covers a scheduled service visit, priority response on faults, and battery replacements within scope. Most insurance policies require an annual service for the alarm to remain a valid security measure. J&amp;L Security maintenance contracts start at <strong>£120 + VAT per year for residential</strong> and <strong>£180 + VAT per year for commercial</strong> properties; both packages include one routine maintenance and one emergency callout within the contract year.</p>
```

#### Replace the existing "Pricing Summary Table (UK, 2026)" with the J&L-anchored version

**Find and remove** the entire H2 "Pricing Summary Table (UK, 2026)", the table beneath it, and the italicised pricing note paragraph that follows.

**Replace with:**

```html
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
```

### 1.4 FAQ updates

#### Replace the existing first FAQ (How much does a burglar alarm cost...)

Both in the in-body H3 FAQ and in the `faqs` array.

**New question:** keep as is.

**New answer:**

```
A professionally installed domestic burglar alarm in the UK in 2026 typically costs £450 to £2,500 across the market. At J&L Security our standard wireless Grade 2 residential package using the Pyronix Enforcer V11 starts from £485 + VAT, including a control panel with on-board keypad, a wireless door contact, two motion detectors, two proximity tags, and a wireless external siren. Most homes specify additional detectors at the survey: motion detectors from £55 + VAT, door contacts from £45 + VAT, additional sirens from £125 + VAT. Smartphone control via the Homecontrol 2.0 app is a £48 + VAT add-on for the module and first year, then £30 + VAT per year. Optional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year, with police response available where the system is graded and URN-registered. Final price depends on property size, detector count, and the specific options chosen.
```

#### Append a new FAQ to both the in-body FAQ section and the `faqs` array

**Question:** What does the standard J&L Security wireless burglar alarm package include?

**Answer:**

```
The J&L Security standard wireless residential package starts from £485 + VAT and uses the Pyronix Enforcer V11 Grade 2 control panel. It includes the panel with an on-board mains-powered keypad, one wireless door contact for the main entrance, two wireless motion detectors, two proximity tags for arming and disarming, and one wireless external siren. The system is supplied as a "bells only" alarm by default, meaning the siren sounds at the property when triggered. Most customers add the Homecontrol 2.0 app module (£48 + VAT for the module plus the first year) so they can receive push notifications and arm or disarm remotely. Additional detectors, panic buttons, vibration sensors, dummy sirens, keyfobs, and an LCD keypad can be added at fixed accessory prices, with the final specification finalised at the free site survey.
```

#### Append a second new FAQ

**Question:** How much does ongoing burglar alarm monitoring and maintenance cost with J&L Security?

**Answer:**

```
J&L Security offers two ongoing options. The Homecontrol 2.0 app subscription is £30 + VAT per year after the first year (the module and first year are £48 + VAT) and gives the customer push notifications and remote control. Professional 24-hour monitoring through our UK-manned call centre starts at £105 + VAT per year and adds a call handler who contacts you when the alarm activates, with police response available for Grade 2 or higher systems registered for a Unique Reference Number. Annual maintenance starts at £120 + VAT for residential properties and £180 + VAT for commercial properties; both contracts include one routine service visit and one emergency callout within the contract year. All figures are starting prices.
```

### 1.5 Closing CTA paragraph update

In the final "Get a Quote" section, change the closing paragraph to:

```html
<p>To book a free survey, <a href="/contact">contact us</a> or call <a href="tel:02045385925">0204 538 5925</a> or 0208 220 4770. We cover all of Essex and Greater London, with active customers across <a href="/locations/brentwood">Brentwood</a>, <a href="/burglar-alarm-servicing/romford">Romford</a>, Ilford, Chelmsford, Upminster, and across our 14 London target boroughs from Islington and Hackney through to Hammersmith, Battersea, and Barnet. For more on our intruder alarm offer, see our <a href="/services/burglar-alarms">burglar alarm services</a> page or read about <a href="/blog/insurance-approved-burglar-alarms-uk-2026">insurance-approved burglar alarms in 2026</a>.</p>
```

---

## Phase 2: 14 new London location pages

**Target files:**
1. `lib/data.ts` (the `locations` array): add 14 new `Location` objects.
2. `app/locations/[location]/page.tsx` (the `locationExtended` const): add 14 new entries keyed by slug.

Each new location needs both halves: the base record and the extended copy. Schemas exactly match the existing entries.

**Honesty constraint:** J&L is Brentwood-based. We do not have local depots in West or North London. Phrasing for these new pages says "engineers regularly working across...", "we operate routinely in...", "we extend coverage to..." rather than "we are local to...". Same applies to the FAQ "Are you based near...?" answer, which is generated by the existing template and already reads correctly ("J&L Security is based in Brentwood, Essex - giving us excellent coverage across...").

### 2.1 Locations array entries (`lib/data.ts`)

Insert the following 14 objects at the end of the existing `locations: Location[]` array, in alphabetical slug order. Each follows the existing schema.

```ts
{
  id: 'islington',
  name: 'Islington',
  slug: 'islington',
  county: 'Greater London',
  postcode: 'N1, N5, N7, EC1V',
  nearbyAreas: ['Hackney', 'Camden', 'Highbury', 'Finsbury', 'Holloway'],
  landmarks: ['Angel Underground Station', 'Sadler\'s Wells Theatre', 'Emirates Stadium', 'Upper Street']
},
{
  id: 'hackney',
  name: 'Hackney',
  slug: 'hackney',
  county: 'Greater London',
  postcode: 'E2, E5, E8, E9, N16',
  nearbyAreas: ['Islington', 'Clapton', 'Dalston', 'Stoke Newington', 'Shoreditch'],
  landmarks: ['Hackney Empire', 'Victoria Park', 'Hackney Town Hall', 'Hackney Central Station']
},
{
  id: 'clapton',
  name: 'Clapton',
  slug: 'clapton',
  county: 'Greater London',
  postcode: 'E5',
  nearbyAreas: ['Hackney', 'Stoke Newington', 'Stamford Hill', 'Leyton', 'Walthamstow'],
  landmarks: ['Clapton Pond', 'Lea Bridge', 'Millfields Park', 'Clapton Station']
},
{
  id: 'dalston',
  name: 'Dalston',
  slug: 'dalston',
  county: 'Greater London',
  postcode: 'E8',
  nearbyAreas: ['Hackney', 'Stoke Newington', 'Islington', 'Hoxton', 'Shoreditch'],
  landmarks: ['Dalston Junction Station', 'Ridley Road Market', 'Dalston Square', 'Kingsland High Street']
},
{
  id: 'camden',
  name: 'Camden',
  slug: 'camden',
  county: 'Greater London',
  postcode: 'NW1, NW3, NW5',
  nearbyAreas: ['Kentish Town', 'Primrose Hill', 'Belsize Park', 'Hampstead', 'Islington'],
  landmarks: ['Camden Market', 'Camden Town Underground Station', 'Regent\'s Canal', 'Roundhouse']
},
{
  id: 'southwark',
  name: 'Southwark',
  slug: 'southwark',
  county: 'Greater London',
  postcode: 'SE1, SE15, SE16, SE17',
  nearbyAreas: ['Bermondsey', 'Camberwell', 'Peckham', 'Walworth', 'Elephant and Castle'],
  landmarks: ['Tate Modern', 'The Shard', 'Borough Market', 'Southwark Cathedral']
},
{
  id: 'woolwich',
  name: 'Woolwich',
  slug: 'woolwich',
  county: 'Greater London',
  postcode: 'SE18',
  nearbyAreas: ['Greenwich', 'Plumstead', 'Charlton', 'Eltham', 'Thamesmead'],
  landmarks: ['Woolwich Arsenal Station', 'Royal Arsenal Riverside', 'Woolwich Ferry', 'General Gordon Square']
},
{
  id: 'westminster',
  name: 'Westminster',
  slug: 'westminster',
  county: 'Greater London',
  postcode: 'SW1, W1, W2, WC1, WC2',
  nearbyAreas: ['Mayfair', 'Marylebone', 'Pimlico', 'Belgravia', 'Soho'],
  landmarks: ['Houses of Parliament', 'Westminster Abbey', 'Buckingham Palace', 'Trafalgar Square']
},
{
  id: 'hammersmith',
  name: 'Hammersmith',
  slug: 'hammersmith',
  county: 'Greater London',
  postcode: 'W6, W12, W14',
  nearbyAreas: ['Fulham', 'Chiswick', 'Shepherd\'s Bush', 'Kensington', 'Olympia'],
  landmarks: ['Hammersmith Apollo', 'Hammersmith Bridge', 'Westfield London', 'Charing Cross Hospital']
},
{
  id: 'battersea',
  name: 'Battersea',
  slug: 'battersea',
  county: 'Greater London',
  postcode: 'SW8, SW11',
  nearbyAreas: ['Clapham', 'Wandsworth', 'Vauxhall', 'Nine Elms', 'Chelsea'],
  landmarks: ['Battersea Power Station', 'Battersea Park', 'Clapham Junction Station', 'New US Embassy']
},
{
  id: 'fulham',
  name: 'Fulham',
  slug: 'fulham',
  county: 'Greater London',
  postcode: 'SW6, SW10',
  nearbyAreas: ['Hammersmith', 'Chelsea', 'Parsons Green', 'Putney', 'Earls Court'],
  landmarks: ['Fulham Palace', 'Craven Cottage', 'Stamford Bridge', 'Bishops Park']
},
{
  id: 'streatham',
  name: 'Streatham',
  slug: 'streatham',
  county: 'Greater London',
  postcode: 'SW2, SW16',
  nearbyAreas: ['Brixton', 'Tooting', 'Norbury', 'Balham', 'Crystal Palace'],
  landmarks: ['Streatham Common', 'Streatham High Road', 'Streatham Hill Station', 'The Rookery']
},
{
  id: 'finchley',
  name: 'Finchley',
  slug: 'finchley',
  county: 'Greater London',
  postcode: 'N2, N3, N12',
  nearbyAreas: ['Barnet', 'Whetstone', 'Muswell Hill', 'Hampstead Garden Suburb', 'Hendon'],
  landmarks: ['Finchley Central Station', 'Victoria Park Finchley', 'Avenue House', 'North Finchley High Road']
},
{
  id: 'barnet',
  name: 'Barnet',
  slug: 'barnet',
  county: 'Greater London',
  postcode: 'EN4, EN5, N20',
  nearbyAreas: ['Finchley', 'Whetstone', 'Cockfosters', 'Totteridge', 'New Barnet'],
  landmarks: ['High Barnet Station', 'Barnet Hospital', 'Hadley Wood', 'Barnet Market']
},
```

### 2.2 Extended copy entries (`app/locations/[location]/page.tsx` `locationExtended` const)

Insert the following 14 entries into the existing `locationExtended` object. They must use the same slug as the entry in `lib/data.ts`. Schema unchanged: `description`, `population`, `commuting`, `whyLocal`, `residential`.

```ts
islington: {
  description: 'A central inner London borough running from the City fringes at Angel up through Highbury and Holloway. Islington combines high-density Georgian and Victorian terraced housing with a dense commercial base of offices, restaurants, and independent retail along Upper Street and Old Street. Demand is driven by high-value residential properties, owner-managed businesses, and small commercial premises that need straightforward, reliable security without disruption.',
  population: '~245,000 (borough)',
  commuting: 'Northern, Victoria, and Piccadilly Lines; Overground from Highbury & Islington and Caledonian Road & Barnsbury.',
  whyLocal: 'Our engineers operate routinely across Islington N1 and the wider EC1 fringe. Wireless installations are well suited to the borough\'s period properties where minimising visible cabling matters, and we extend the same residential and small-commercial coverage we offer across our Essex base.',
  residential: ['Angel', 'Highbury', 'Canonbury', 'Holloway', 'Barnsbury', 'Finsbury Park'],
},
hackney: {
  description: 'A dynamic East London borough covering an area from Shoreditch in the south up through London Fields, Hackney Central, Clapton, and Stoke Newington. Hackney has experienced sustained regeneration over the past decade and now combines period housing stock, new-build apartments, and one of London\'s most active small business and creative-industry sectors. Property crime patterns make wireless intruder alarms and CCTV a priority for both residential and commercial customers.',
  population: '~285,000 (borough)',
  commuting: 'Overground from Hackney Central, Hackney Wick, and Dalston Junction; rail to Liverpool Street; Central Line at Stratford.',
  whyLocal: 'We extend our coverage across the full Hackney borough including E2, E5, E8, E9, and N16. The mix of period terraces, new-build flats, and converted commercial premises is well suited to wireless Grade 2 systems with app integration, and we work regularly with both residential customers and small commercial clients across the area.',
  residential: ['Hackney Central', 'London Fields', 'Stoke Newington', 'Clapton', 'Dalston', 'Hackney Wick'],
},
clapton: {
  description: 'A residential area in the north of the London Borough of Hackney, covering Upper and Lower Clapton along the western edge of the River Lea. Clapton has a mix of large Victorian houses, converted flats, and a growing new-build sector around Lea Bridge Road. The area\'s period properties make wireless security systems particularly suitable, with no need to disturb existing decoration or run surface cabling.',
  population: '~30,000',
  commuting: 'Overground from Clapton and Hackney Downs to Liverpool Street in around 15 minutes.',
  whyLocal: 'We work regularly across Clapton E5 and the wider Hackney borough. Our wireless Grade 2 packages suit the converted Victorian houses common in the area, and we offer both standalone installations and integration with CCTV for shared-entrance properties.',
  residential: ['Upper Clapton', 'Lower Clapton', 'Lea Bridge', 'Hackney Downs', 'Clapton Pond'],
},
dalston: {
  description: 'A high-density area in the south of the London Borough of Hackney centred on Kingsland High Street and Ridley Road. Dalston has a particularly strong commercial base, with independent retail, restaurants, and night-time venues alongside dense residential blocks and converted period housing. The mix drives steady demand for both commercial CCTV and access control as well as residential intruder alarms.',
  population: '~25,000',
  commuting: 'Overground from Dalston Junction and Dalston Kingsland; under 10 minutes to Liverpool Street and Shoreditch.',
  whyLocal: 'Our engineers regularly cover Dalston E8 for both residential customers and the local commercial base along Kingsland Road. Door entry, access control, and CCTV are common requirements for small commercial premises and converted residential blocks in the area.',
  residential: ['Dalston Junction', 'Dalston Kingsland', 'Kingsland', 'De Beauvoir Town', 'Haggerston'],
},
camden: {
  description: 'A central North London borough covering Camden Town, Kentish Town, Primrose Hill, Belsize Park, and Hampstead. Camden combines major retail, music, and tourism (notably Camden Market) with high-value residential streets and a strong creative-industry commercial sector. Demand spans residential intruder alarms in the period housing stock, commercial CCTV and access control for shops and venues, and fire alarms for HMOs and shared accommodation.',
  population: '~270,000 (borough)',
  commuting: 'Northern Line; Overground from Camden Road; main-line interchanges at King\'s Cross, St Pancras, and Euston.',
  whyLocal: 'We cover Camden NW1, NW3, and NW5 routinely. The area\'s period terraces and converted properties suit our wireless Grade 2 packages, and we install fire alarms to BS 5839 for the borough\'s significant HMO and shared-accommodation stock.',
  residential: ['Camden Town', 'Kentish Town', 'Primrose Hill', 'Belsize Park', 'Chalk Farm', 'Tufnell Park'],
},
southwark: {
  description: 'A South East London borough running along the south bank of the Thames from London Bridge through Bankside, Bermondsey, and down to Peckham, Walworth, and Camberwell. Southwark has one of London\'s largest commercial property bases, including Tate Modern and the Shard, alongside dense residential stock and significant new-build developments around Elephant and Castle. The mix drives demand for commercial fire alarms, access control, CCTV, and residential intruder alarms in roughly equal measure.',
  population: '~310,000 (borough)',
  commuting: 'Jubilee, Northern, and Bakerloo Lines; National Rail from London Bridge, Waterloo East, and Peckham Rye.',
  whyLocal: 'Our engineers extend coverage to Southwark across SE1, SE15, SE16, and SE17. Commercial premises along the South Bank, residential blocks in Bermondsey and Walworth, and HMOs across the borough are all served regularly.',
  residential: ['Bankside', 'Bermondsey', 'Peckham', 'Walworth', 'Camberwell', 'Elephant and Castle'],
},
woolwich: {
  description: 'A historic riverside town in the south of the Royal Borough of Greenwich, with a substantial regeneration pipeline centred on Royal Arsenal Riverside and the new Elizabeth Line connection. Woolwich combines new-build apartments, converted Victorian terraces, and a busy commercial high street, with steady demand for residential intruder alarms, commercial CCTV, and access control for new-build estates.',
  population: '~85,000',
  commuting: 'Elizabeth Line from Woolwich to Canary Wharf in 8 minutes and Bond Street in 25 minutes; DLR; Woolwich Ferry.',
  whyLocal: 'We service the SE18 area as part of our wider South East London coverage, including Royal Arsenal Riverside developments, residential streets across Plumstead and Charlton, and the commercial base along Powis Street and the high street.',
  residential: ['Royal Arsenal', 'Plumstead', 'Charlton', 'Shooters Hill', 'Thamesmead', 'Eltham'],
},
westminster: {
  description: 'A central London borough covering some of the highest-value residential and commercial property in the United Kingdom: Mayfair, Marylebone, Belgravia, Pimlico, Soho, Westminster, and the West End. The security requirements span high-net-worth residential properties, embassies, professional services and financial offices, retail, hospitality, and historic buildings. Wireless and discreet installations are routinely required where listed-building or conservation considerations apply.',
  population: '~210,000 (borough)',
  commuting: 'Multiple Underground lines including Bakerloo, Central, Jubilee, Piccadilly, and Victoria; mainline at Victoria, Charing Cross, and Paddington.',
  whyLocal: 'We extend coverage to Westminster for residential and commercial customers across SW1, W1, W2, and WC1/WC2. Our wireless Grade 2 systems and SSAIB-approved monitored installations are well suited to high-value properties and listed buildings where minimising visible installation work is important.',
  residential: ['Mayfair', 'Marylebone', 'Pimlico', 'Belgravia', 'Soho', 'St James\'s'],
},
hammersmith: {
  description: 'A West London town and the centre of the London Borough of Hammersmith and Fulham. Hammersmith is a major commercial centre with a substantial office base and strong retail and hospitality presence, alongside a large residential population in period terraces, mansion blocks, and modern apartments. Demand is split between commercial CCTV and access control for offices and shopfronts, and residential intruder alarms for the borough\'s mixed housing stock.',
  population: '~75,000',
  commuting: 'Hammersmith and City, District, Piccadilly, and Circle Lines; bus interchange at Hammersmith Broadway.',
  whyLocal: 'Our engineers cover Hammersmith W6, W12, and W14 as part of our extended West London coverage. Wireless Grade 2 systems suit the period properties, and we install commercial fire alarm and CCTV systems for the office and retail sector.',
  residential: ['Hammersmith Broadway', 'Brook Green', 'Ravenscourt Park', 'Shepherd\'s Bush', 'Olympia', 'West Kensington'],
},
battersea: {
  description: 'A South West London area in the London Borough of Wandsworth, covering Battersea, Nine Elms, and the south bank of the Thames opposite Pimlico. Battersea has been substantially redeveloped in the past decade with the Power Station regeneration and the Northern Line extension to Battersea Power Station; the area combines new-build apartments, period mansion blocks, and commercial premises along the riverside. Wireless intruder alarms and access control for new-build blocks are core demand.',
  population: '~75,000',
  commuting: 'Northern Line from Battersea Power Station and Nine Elms; Clapham Junction main-line; Overground.',
  whyLocal: 'We extend our coverage to Battersea SW8 and SW11 for residential customers in the Power Station and Nine Elms developments, period mansion blocks across Battersea Square, and commercial premises along the riverside.',
  residential: ['Battersea Park', 'Nine Elms', 'Clapham Junction', 'Battersea Square', 'Queenstown', 'Wandsworth'],
},
fulham: {
  description: 'A high-value residential area in the south of the London Borough of Hammersmith and Fulham, with a strong period housing stock and an active small-commercial sector along North End Road and Fulham Road. Fulham is a settled residential market with insurance-driven demand for monitored, inspectorate-approved alarms, and a steady commercial requirement for CCTV and access control along the main retail streets.',
  population: '~85,000',
  commuting: 'District Line; Overground from West Brompton; Imperial Wharf and Fulham Broadway National Rail.',
  whyLocal: 'Our engineers cover Fulham SW6 and SW10 routinely. Wireless Grade 2 packages suit the period terraces and converted flats, and our SSAIB approval supports customers with insurance policies that require an inspectorate-approved system.',
  residential: ['Fulham Broadway', 'Parsons Green', 'Sands End', 'Imperial Wharf', 'Bishops Park', 'West Brompton'],
},
streatham: {
  description: 'A South London area straddling the boroughs of Lambeth and Wandsworth, with a long high street running from Streatham Hill through Streatham Common. Streatham combines large Victorian and Edwardian houses, converted flats, and an active commercial high street with strong demand for both residential intruder alarms and commercial CCTV. The high concentration of converted houses and shared accommodation also drives BS 5839-6 fire alarm requirements.',
  population: '~70,000',
  commuting: 'National Rail from Streatham, Streatham Hill, and Streatham Common; Victoria Line via Brixton.',
  whyLocal: 'We work regularly across Streatham SW2 and SW16, with installations covering wireless intruder alarms for residential customers, BS 5839-6 fire alarms for HMOs and shared accommodation, and commercial CCTV and access control along the high street.',
  residential: ['Streatham Hill', 'Streatham Common', 'Streatham Vale', 'Norbury', 'Furzedown', 'Tooting Bec'],
},
finchley: {
  description: 'A North London suburban area in the London Borough of Barnet, covering Finchley Central, North Finchley, East Finchley, and Whetstone. Finchley has a high proportion of family homes, period semi-detached and detached houses, and converted flats, alongside a steady commercial high street. Demand is led by residential intruder alarms for family homes and converted flats, with insurance-driven preference for monitored systems where contents values are higher.',
  population: '~110,000',
  commuting: 'Northern Line from Finchley Central, North Finchley (via Woodside Park), East Finchley, and West Finchley.',
  whyLocal: 'Our engineers cover Finchley N2, N3, and N12 across the full borough span. Wireless Grade 2 packages suit the period semi-detached stock, and our SSAIB approval supports the higher-value residential market where insurance policies require an inspectorate-approved system.',
  residential: ['Finchley Central', 'North Finchley', 'East Finchley', 'West Finchley', 'Whetstone', 'Woodside Park'],
},
barnet: {
  description: 'The northernmost of the London boroughs, covering High Barnet, New Barnet, Cockfosters, Hadley Wood, and Totteridge. The Barnet area includes a high proportion of family homes, large detached and semi-detached properties, and a settled residential market with strong insurance-driven demand for monitored, inspectorate-approved alarms. Commercial demand is concentrated along Barnet High Street and the business areas around Whetstone and New Barnet.',
  population: '~395,000 (borough)',
  commuting: 'Northern Line terminus at High Barnet; Piccadilly Line at Cockfosters; Overground at New Barnet.',
  whyLocal: 'We extend our coverage across the Barnet borough EN4, EN5, and N20. The area\'s family homes and high-value residential stock suit wireless Grade 2 packages with monitored options, and we provide SSAIB-approved installations for customers whose insurance policies require an inspectorate-approved alarm.',
  residential: ['High Barnet', 'New Barnet', 'Cockfosters', 'Hadley Wood', 'Totteridge', 'Whetstone'],
},
```

### 2.3 Greenwich audit and light enrichment

The Greenwich entry exists in both files. Leave the base record in `lib/data.ts` untouched. Lightly enrich the `whyLocal` and `residential` fields in `locationExtended` for consistency with the new South East London tranche (Woolwich, Southwark) and to add fire-alarm and BAFE references.

**Replace the existing `greenwich` object in `locationExtended` with:**

```ts
greenwich: {
  description: 'The Royal Borough of Greenwich in South East London combines a rich maritime heritage with significant commercial development. The area includes Greenwich town centre, the O2 entertainment complex, Royal Arsenal Riverside, and extensive residential areas from Blackheath through Charlton to Woolwich.',
  population: '~290,000 (borough)',
  commuting: 'DLR to Bank in 20 minutes; Elizabeth Line from Woolwich; National Rail from Greenwich to London Bridge.',
  whyLocal: 'Our engineers service customers across SE10 and the wider Greenwich borough, including BAFE-certified fire alarm work for the commercial properties along the riverside, domestic intruder alarms for the residential streets around Blackheath and Charlton, and access control for the new-build developments at Royal Arsenal Riverside and Kidbrooke Village.',
  residential: ['Greenwich', 'Blackheath', 'Charlton', 'Kidbrooke', 'Eltham', 'Woolwich'],
},
```

### 2.4 Implementation note for Claude Code

The `serviceLocationMatrix` in `lib/data.ts` may also need new entries for the service-location combo pages (e.g. `burglar-alarm-installation-islington`). This is optional and the location pages will work without them. Recommend adding combo entries for the highest-intent combinations (burglar alarm + CCTV + fire alarm) for each new location in a follow-up commit, not in this round.

---

## Phase 3: Fire alarm keyword integration map

**Target keywords from Jag's email:**

| # | Keyword | Search intent |
|---|---|---|
| 1 | Fire Alarm Installations | Commercial/HMO/landlord buyer ready to commission |
| 2 | BAFE fire alarm maintainers | Buyer specifically looking for accredited maintenance |
| 3 | Fire risk assessments | FRA service buyer (commercial premises) |
| 4 | Smoke alarm installs | Domestic buyer or HMO landlord |
| 5 | Smoke alarm repair | Domestic or HMO buyer with existing problem |
| 6 | Fire alarm servicing | Existing system owner needing scheduled service |
| 7 | BS 5839-1 | Commercial buyer at compliance research stage |
| 8 | BS 5839-6 | HMO landlord or domestic buyer at compliance research stage |

The integration approach below preserves the existing site structure. New content goes only where it is topically relevant; we do not stuff keywords into unrelated pages. Where Jag's term contains a typo in the original email (`BS5838-6`, `BS 5838`), we use the correct standard reference: `BS 5839-6`.

### 3.1 Page-by-page integration table

| Target file | Action | Keywords to integrate |
|---|---|---|
| `app/services/[service]/page.tsx`, `'fire-alarms'` block | Update `heroTagline`, `overview`, add to `whoFor`, expand `faqs`, add `pricing` text. | Fire Alarm Installations, BAFE fire alarm maintainers, fire risk assessments, smoke alarm installs, smoke alarm repair, fire alarm servicing, BS 5839-1, BS 5839-6 |
| `app/page.tsx` (homepage hero strapline plus service grid card for fire alarms) | Light tweak: ensure the fire alarms card text mentions "BS 5839-1 commercial and BS 5839-6 domestic, BAFE certified". | BAFE, BS 5839-1, BS 5839-6 |
| `app/about/page.tsx` | Confirm the BAFE certification is referenced as "BAFE-certified fire alarm maintainer" in the accreditation block, not just "BAFE". | BAFE fire alarm maintainers |
| `app/faqs/page.tsx` | Add three new FAQ items (see 3.3 below). | Fire risk assessments, smoke alarm installs/repair, BS 5839-1 vs BS 5839-6 |
| `lib/blog.ts` (new BS 5839 article, Phase 4) | New article specifically targets BS 5839-1 and BS 5839-6 search intent. | BS 5839-1, BS 5839-6 |
| `app/locations/[location]/page.tsx` (existing FAQ generator function `locationFaqs`) | Append two new generic FAQs about fire alarms and smoke alarms; these will then appear on every location page including the new 14. | Fire Alarm Installations, smoke alarm installs, BAFE |
| `public/llms.txt` and `public/llms-full.txt` | Add fire-alarm-specific service line and BAFE-as-maintainer phrasing under Services. | All eight keywords |
| Metadata across `app/services/[service]/page.tsx` (`generateMetadata`) | Confirm fire-alarm slug metadata description includes "BAFE-certified", "fire risk assessments", "BS 5839-1 and BS 5839-6", "smoke alarm install and repair". | All eight |

### 3.2 Specific copy changes

#### 3.2.1 `app/services/[service]/page.tsx` `'fire-alarms'` block

**Replace `heroTagline`:**

```ts
heroTagline: 'BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments',
```

**Replace `overview` array with:**

```ts
overview: [
  'J&L Security is a BAFE-certified fire alarm maintainer covering Essex and Greater London. We design, install, commission, and service commercial fire alarm systems to BS 5839-1 and domestic and HMO fire alarm systems to BS 5839-6. We also support clients with fire risk assessments, smoke alarm installs and repair, and 6-monthly fire alarm servicing under contract.',
  'We install both conventional and addressable systems from C-Tech, Fike, Haes, Kentech, Advanced, EDA, EMS, Smartcell, and Zeta. Every installation is documented, certified at commissioning, and supported with a service contract that keeps the system compliant with BS 5839 and the Regulatory Reform (Fire Safety) Order 2005.',
],
```

**Replace `whoFor` with:**

```ts
whoFor: [
  'Commercial premises requiring BS 5839-1 systems',
  'HMOs and residential blocks under BS 5839-6',
  'Landlords needing fire risk assessments and certificates',
  'Schools, care homes, and healthcare facilities',
  'Domestic customers needing smoke alarm installs or smoke alarm repair',
  'Existing system owners switching to a BAFE-certified maintainer',
],
```

**Replace `pricing` string with:**

```ts
pricing: 'Fire alarm servicing contracts from £180 + VAT per year for commercial premises and from £120 + VAT per year for residential and HMO systems. Includes one routine maintenance and one emergency callout. Installation prices and fire risk assessment fees provided after free site survey.',
```

**Append to the `faqs` array:**

```ts
{
  question: 'What is the difference between BS 5839-1 and BS 5839-6?',
  answer: 'BS 5839-1 is the British Standard for fire detection and fire alarm systems in non-domestic premises: offices, retail, schools, care homes, warehouses, factories, and most commercial buildings. BS 5839-6 is the equivalent standard for domestic premises: single-occupancy homes, individual dwellings, and houses in multiple occupation. The two standards cover different system categories and grades. We install and maintain to both standards as a BAFE-certified maintainer.',
},
{
  question: 'Do you carry out fire risk assessments?',
  answer: 'Yes. We carry out fire risk assessments for commercial premises and HMOs as a separate service alongside fire alarm installation and maintenance. The assessment identifies fire hazards, evaluates risk to occupants, and produces an action plan with prioritised recommendations. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person for any non-domestic premises to have a current fire risk assessment in place.',
},
{
  question: 'Do you install and repair smoke alarms?',
  answer: 'Yes. We carry out smoke alarm installs and smoke alarm repair for domestic properties under BS 5839-6, including for HMO landlords meeting licensing conditions. Work covers Grade D mains-powered interlinked alarms with battery backup, Grade F battery-only systems, and panel-controlled Grade A systems for larger HMOs. We can also assess and repair existing smoke alarm systems that have failed user tests.',
},
{
  question: 'What does BAFE certification mean for fire alarm maintainers?',
  answer: 'BAFE is the independent register for fire safety service providers in the United Kingdom. A BAFE-certified fire alarm maintainer has been audited against the BAFE SP203-1 scheme covering design, installation, commissioning, and maintenance of fire detection and fire alarm systems. Insurers, fire risk assessors, and regulators frequently look for BAFE certification when assessing whether the responsible person has appointed competent contractors. J&L Security is BAFE certified.',
},
```

#### 3.2.2 `app/page.tsx` homepage

In the services grid where the Fire Alarms card appears, update the short description to read:

```
BS 5839-1 commercial and BS 5839-6 domestic and HMO fire alarms. BAFE-certified install and service. Fire risk assessments included.
```

#### 3.2.3 `app/about/page.tsx`

In the accreditation block, change any standalone "BAFE" reference to:

```
BAFE-certified fire alarm maintainer (SP203-1 scheme)
```

#### 3.2.4 `app/locations/[location]/page.tsx` `locationFaqs` function

Append two new FAQ items to the array returned by `locationFaqs`:

```ts
{
  question: `Do you install and service fire alarms in ${locationName}?`,
  answer: `Yes. We are a BAFE-certified fire alarm maintainer covering ${locationName} and the surrounding area. We install commercial systems to BS 5839-1, domestic and HMO systems to BS 5839-6, and provide 6-monthly servicing contracts for both. We also carry out fire risk assessments where required.`,
},
{
  question: `Can you install or repair smoke alarms in ${locationName}?`,
  answer: `Yes. We carry out smoke alarm installs and smoke alarm repair for domestic properties and HMOs in ${locationName} under BS 5839-6, including Grade D mains-powered interlinked systems suitable for landlord licensing requirements.`,
},
```

### 3.3 New FAQ items for `app/faqs/page.tsx`

Append the following three FAQ items to the existing FAQs array on the FAQs page (or add to `lib/data.ts` `faqs` if that is the source). Match the existing schema.

```ts
{
  id: 'fa-1',
  question: 'What is the difference between BS 5839-1 and BS 5839-6 fire alarm systems?',
  answer: 'BS 5839-1 is the British Standard for fire detection and fire alarm systems in non-domestic premises (offices, retail, schools, care homes, warehouses, and most commercial buildings). BS 5839-6 covers domestic premises including single-family homes, individual dwellings, and HMOs. The two standards specify different system categories and grades. J&L Security is a BAFE-certified fire alarm maintainer covering both.',
  category: 'fire-alarms',
},
{
  id: 'fa-2',
  question: 'Do you carry out fire risk assessments?',
  answer: 'Yes. We carry out fire risk assessments for commercial premises and HMOs as a separate service alongside fire alarm installation and servicing. The assessment identifies fire hazards, evaluates risk to occupants, and produces an action plan. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person for any non-domestic premises to maintain a current fire risk assessment.',
  category: 'fire-alarms',
},
{
  id: 'fa-3',
  question: 'Can you install or repair smoke alarms in a domestic property or HMO?',
  answer: 'Yes. We install and repair smoke alarms under BS 5839-6, covering Grade D mains-powered interlinked systems (the standard most commonly required for HMO licensing), Grade F battery-only systems where permitted, and panel-controlled Grade A systems for larger HMOs. We also assess and repair existing smoke alarm systems that have failed user tests or trigger false alarms.',
  category: 'fire-alarms',
},
```

---

## Phase 4: New blog post on BS 5839-1 and BS 5839-6

**Target file:** `lib/blog.ts`
**Action:** Insert a new `BlogPost` object into the `blogPosts` array. Position it between the existing `'hmo-fire-alarm-requirements-bs5839'` post and `'how-to-choose-security-company'`. Schema must match the existing posts exactly.

### 4.1 Article object (drop-in)

```ts
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
<li>Detector spacing and positioning meets the standard\'s rules (which depend on ceiling height, room geometry, and detector type).</li>
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
```

### 4.2 Editorial notes for Claude Code

- Do not paraphrase the standards line-by-line; the article describes scope and applicability in our own words. Do not insert quoted passages from BS 5839-1 or BS 5839-6.
- The article references the Regulatory Reform (Fire Safety) Order 2005 several times. Spelling and styling are correct as written.
- The piece intentionally directs readers to the existing HMO article for HMO-specific detail. Do not duplicate that content here.
- On internal links: the article links to `/blog/hmo-fire-alarm-requirements-bs5839`, `/services/fire-alarms`, and `/contact`. Confirm these slugs match the live site before publishing.

---

## Phase 5: llms.txt and llms-full.txt updates

**Target files:** `public/llms.txt` and `public/llms-full.txt`

### 5.1 `public/llms.txt`

#### Replace the "Service Areas" block

**Find:**

```
Essex: Brentwood, Chelmsford, Basildon, Romford, Ilford, Hornchurch, Upminster, Barking, Dagenham, Redbridge, Harlow, Epping, and surrounding areas.

Greater London: Enfield, Stratford, Canary Wharf, Greenwich, and surrounding boroughs.
```

**Replace with:**

```
Essex: Brentwood, Chelmsford, Basildon, Romford, Ilford, Hornchurch, Upminster, Barking, Dagenham, Redbridge, Harlow, Epping, and surrounding areas.

Greater London (East and Central): Enfield, Stratford, Canary Wharf, Islington, Hackney, Clapton, Dalston, Camden, Westminster.

Greater London (South and South East): Greenwich, Woolwich, Southwark, Battersea, Streatham.

Greater London (West and North): Hammersmith, Fulham, Finchley, Barnet.
```

#### Update the "Services" block

**Find the line:**

```
- Fire Alarm Installation and Servicing (BS 5839-1 commercial, BS 5839-6 domestic and HMO)
```

**Replace with:**

```
- Fire Alarm Installation and Servicing: BAFE-certified maintainer (SP203-1). BS 5839-1 commercial systems, BS 5839-6 domestic and HMO systems. Includes fire risk assessments, smoke alarm installs and repair, and 6-monthly servicing contracts.
```

#### Replace the "Indicative Installed Costs (UK, 2026)" block

**Find and replace the entire section "## Indicative Installed Costs (UK, 2026)" through to the end of the GBP 850 CCTV line.**

**Replace with:**

```
## Indicative Installed Costs (UK, 2026)

These are starting prices excluding VAT. Final quotations follow a free site survey.

- Burglar alarm, J&L standard wireless Grade 2 residential package (Pyronix Enforcer V11): from GBP 485 plus VAT, including panel with keypad, one door contact, two motion detectors, two proximity tags, one wireless external siren
- Additional motion detector: from GBP 55 plus VAT
- Additional door contact: from GBP 45 plus VAT
- Additional wireless external siren: from GBP 125 plus VAT
- Vibration detector: from GBP 65 plus VAT; combined vibration plus door/window contact: from GBP 75 plus VAT
- Homecontrol 2.0 app module plus first year subscription: from GBP 48 plus VAT; annual app subscription thereafter: from GBP 30 plus VAT
- 24-hour UK-manned monitoring: from GBP 105 plus VAT per year (police response available for Grade 2+ systems with URN)
- Annual maintenance, residential: from GBP 120 plus VAT per year
- Annual maintenance, commercial: from GBP 180 plus VAT per year
- Sector-wide indicative ranges remain available in the burglar alarm cost article for context: bell-only GBP 350 to 600, speech dialler GBP 500 to 900, monitored Grade 2 or 3 GBP 700 to 1,800 plus monthly monitoring
- Fire alarm (HMO Grade D, BS 5839-6, 5-bedroom): approximately GBP 350 to 600 installed
- Fire alarm (HMO Grade A panel-controlled, larger HMO): approximately GBP 1,200 to 2,500 installed
- Fire alarm servicing: from GBP 120 plus VAT per year (residential and small HMO), from GBP 180 plus VAT per year (commercial under BS 5839-1)
- Domestic CCTV (2-camera basic system): from GBP 850 plus VAT installed
```

#### Update the "Blog" block

**Append to the existing list:**

```
- [BS 5839-1 and BS 5839-6 Explained (UK, 2026)](https://jandlsecurity.co.uk/blog/bs5839-1-and-bs5839-6-explained-2026): Plain-English guide to the two main UK fire alarm British Standards, covering categories, grades, who each applies to, servicing obligations, and BAFE certification.
```

### 5.2 `public/llms-full.txt`

Apply equivalent updates: extend the service areas list to include all 14 new London locations grouped by direction, update the fire alarm service description to reference BAFE-certified maintainer status and the BS 5839 split, replace any indicative pricing with the J&L confirmed starting figures, and add the new BS 5839 article to the article index.

The file is longer than `llms.txt` and may include per-page summaries. Where it does, add new short summaries for:

- Each of the 14 new London location pages (one paragraph each, structured the same way as the existing Brentwood/Romford summaries)
- The new BS 5839 article (one paragraph summarising scope, audience, and key takeaways)

For the 14 new location summaries, the format is:

```
### [Location Name]

[Borough or area context.] J&L Security covers [postcode]. Engineers operate routinely across the area for residential intruder alarms, commercial CCTV and access control, and BS 5839 fire alarm work for HMOs and commercial premises. Both phone numbers operate: 0204 538 5925 and 0208 220 4770.
```

The Claude Code session can extrapolate from the description and whyLocal copy in Phase 2 to produce these.

---

## Verification checklist

The Claude Code session should run through this checklist after Phase 5 and before pushing to main.

### Build and type checks

- [ ] `npm run build` completes without TypeScript errors.
- [ ] No new ESLint warnings introduced (warnings, not errors, are tolerable).
- [ ] Static params for `/locations/[location]` includes all 30 slugs (16 existing plus 14 new).
- [ ] Static params for `/blog/[slug]` includes the new BS 5839 slug.
- [ ] `app/sitemap.ts` regenerates correctly: 100+ entries expected after additions.

### Manual page checks (dev server)

- [ ] `/blog/burglar-alarm-cost-uk-2026` renders the new J&L pricing table and the new FAQs.
- [ ] `/blog/bs5839-1-and-bs5839-6-explained-2026` renders without layout issues.
- [ ] At least 3 of the new location pages render with hero, description, FAQs, and CTA.
- [ ] Greenwich page shows the lightly enriched whyLocal text including the BAFE reference.
- [ ] Both phone numbers visible on every page checked.
- [ ] No em dashes in any newly inserted copy. (Existing copy outside this round may still contain them; do not refactor.)

### Content QA

- [ ] All confirmed J&L prices appear as "from £X + VAT" with no figure presented as fixed.
- [ ] All references to BS 5839 use the correct hyphenation: BS 5839-1 and BS 5839-6 (not BS5839, not BS 5838).
- [ ] BAFE references either say "BAFE certified" or "BAFE-certified fire alarm maintainer", consistently within each page.
- [ ] No emojis introduced.
- [ ] UK English throughout (organisation, optimise, recognise, licence as noun, not authorize/license).

### Schema and SEO

- [ ] Each new location page generates valid `LocalBusiness`, `FAQPage`, and `BreadcrumbList` JSON-LD.
- [ ] The new BS 5839 article generates valid `BlogPosting`, `FAQPage`, and `BreadcrumbList` JSON-LD.
- [ ] `metaTitle`, `description`, and `keywords` populated for the new article.
- [ ] Canonical URLs set on the new pages.

### Deployment

- [ ] Commit message references the client email of 5 May 2026 and the phases completed.
- [ ] Push to `main` triggers a Vercel deployment.
- [ ] Production URLs spot-checked after deployment:
  - `https://jandlsecurity.co.uk/blog/burglar-alarm-cost-uk-2026`
  - `https://jandlsecurity.co.uk/blog/bs5839-1-and-bs5839-6-explained-2026`
  - `https://jandlsecurity.co.uk/locations/islington`
  - `https://jandlsecurity.co.uk/locations/hammersmith`
  - `https://jandlsecurity.co.uk/locations/barnet`
  - `https://jandlsecurity.co.uk/locations/greenwich` (enrichment present)
- [ ] Run a Lighthouse SEO audit on one new location page; flag anything below 90.

### Client confirmation

- [ ] Draft a short summary email to Jag listing what went live and confirming the pricing has been updated to the figures he supplied. Do not send without owner approval.

---

## End of content pack

