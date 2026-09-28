import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, MessageSquare, MapPin, Shield, Camera, Flame, Lock, Lightbulb, Clock, ArrowRight } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { COMPANY_INFO, whatsappLink } from '@/lib/utils';
import { locations, services, serviceLocationMatrix, serviceLocationPath } from '@/lib/data';
import { generateLocalBusinessSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

// ─── Extended per-location content ──────────────────────────────────────────

// The five original fields are present for every town. The optional fields below
// carry the deeper local content and are currently populated only for the towns
// with the highest measured search demand. Every section that renders them is
// guarded, so towns without them keep the original layout unchanged.
type LocationExtended = {
  description: string;
  /** Omitted where no published figure fits the area (for example areas spanning boroughs). */
  population?: string;
  commuting: string;
  whyLocal: string;
  residential: string[];
  /** Local building stock: age, type and tenure, and what that means for an installation. */
  propertyStock?: string;
  /** The commercial and industrial base of the town. */
  commercial?: string;
  /** The security requirements that this town's property stock actually creates. */
  securityContext?: string;
  /** Named neighbourhoods with a real note each, replacing the bare chip list. */
  neighbourhoods?: Array<{ name: string; note: string }>;
  /** Town-specific FAQs, appended to the generic set and included in FAQPage schema. */
  localFaqs?: Array<{ question: string; answer: string }>;
  /** Overrides for the templated title and description where search demand justifies it. */
  metaTitle?: string;
  metaDescription?: string;
  /** Additional keywords reflecting the queries this page actually receives. */
  extraKeywords?: string[];
};

const locationExtended: Record<string, LocationExtended> = {
  ilford: {
    description:
      'Ilford is the largest town centre in the London Borough of Redbridge and one of London\'s Metropolitan town centres, on the Elizabeth line to Stratford and Liverpool Street. Its housing is dominated by late Victorian and Edwardian terraces, with interwar suburbs to the north and new flats in the town centre, so demand runs from domestic alarms to commercial CCTV.',
    commuting: 'Elizabeth line from Ilford, Seven Kings and Goodmayes to Stratford and Liverpool Street; Central line from Redbridge, Gants Hill, Newbury Park, Barkingside and Fairlop.',
    whyLocal:
      'Our engineers work across Ilford IG1 to IG6, from the town centre and the Victorian terraces around it to the interwar suburbs of Gants Hill, Newbury Park and Redbridge.',
    residential: ['Cranbrook', 'Valentines', 'Seven Kings', 'Goodmayes', 'Gants Hill', 'Newbury Park'],
    propertyStock:
      'Most of Ilford was built in one burst. The town had 10,913 people in 1891 and 78,188 in 1911, and the estates of that boom still make up much of its housing: the Grange estate north of the station from 1894, the Cranbrook estate from 1897, and the Downshall estate in Seven Kings and the Mayfield estate in Goodmayes from 1898. They are long streets of two-storey terraced houses on narrow frontages, with few larger detached or semi-detached houses. The Ilford Garden Suburb, south of Valentines Mansion around Emerson Road and The Square, was built to fund the extension of Valentines Park. Between the wars private building spread north through Gants Hill and Newbury Park, and Redbridge filled with suburban houses and bungalows. The town centre is now a London Plan Opportunity Area and the focus of new building, and apartments outnumber houses in Ilford. A narrow-fronted terrace in Seven Kings and a flat in a new town-centre block need very different systems, so we survey before quoting.',
    securityContext:
      'In Ilford\'s Victorian and Edwardian terraces, the rear of the house is usually the less overlooked side, so intruder alarms need the rear door and ground-floor windows covered as well as the front. Where a house has been converted into flats, door entry and fire detection for the shared hallway come into the specification. The interwar houses and bungalows of Gants Hill, Newbury Park and Redbridge are simpler to wire and suit either wired or wireless systems. In the town centre, shops on the High Road and Ilford Lane need cameras positioned for identification at the doors, and the newer apartment blocks need access control and communal fire detection.',
    commercial:
      'Ilford is one of London\'s Metropolitan town centres and the only one in Redbridge. Its main shopping streets in and around the High Road were largely built between 1890 and 1914, and the Exchange Ilford shopping centre opened in 1991. Ilford Lane is a local centre with a high proportion of independent businesses, and Goodmayes Retail Park lies to the east. Ilford is also a London Plan Opportunity Area, with potential for 6,000 new homes by 2041, the Ilford Western Gateway is planned for around 1,000 new homes, and work has started on 326 homes for social rent on the former Harrison Gibson site. Retail units need shopfront CCTV and intruder alarms, and mixed-use blocks need access control and fire detection. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Ilford Town Centre',
        note: 'Metropolitan town centre on the High Road, with Exchange Ilford and a growing number of apartment blocks. Shopfront CCTV, access control and commercial fire alarm work.',
      },
      {
        name: 'Cranbrook',
        note: 'Late Victorian estates north of the station, the Grange from 1894 and Cranbrook from 1897, of two-storey terraces on narrow frontages. Rear doors and ground-floor windows need covering as well as the front.',
      },
      {
        name: 'Valentines',
        note: 'Around Valentines Park and the late 17th-century Valentines Mansion, including the Ilford Garden Suburb built to fund the park\'s extension. The council has recommended assessing the area for conservation area status.',
      },
      {
        name: 'Seven Kings and Goodmayes',
        note: 'Estates begun in 1898, with Edwardian terraces near the stations and interwar houses further out, plus the 1920s and 1930s bungalows of The Bungalow Estate conservation area.',
      },
      {
        name: 'Gants Hill',
        note: 'A town centre that grew around Eastern Avenue and its roundabout in the 1920s, with a Charles Holden Central line station and surrounding interwar suburbs. Straightforward domestic alarm and CCTV work.',
      },
      {
        name: 'Newbury Park',
        note: 'Interwar suburban housing around the Central line station, whose 1947 to 1949 bus shelter by Oliver Hill is Grade II listed, and an older grid of terraces begun in the 1870s.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you fit a burglar alarm to a Victorian terrace in Ilford?',
        answer:
          'Yes. Much of Ilford is late Victorian and Edwardian terraced housing from the estates built between 1894 and 1914. We cover the front door, the rear door and the ground-floor windows, and wireless systems avoid chasing cables into decorated walls. Where a house has been converted into flats, we can also fit door entry and fire detection for the shared hallway.',
      },
      {
        question: 'Do you work on properties in the Valentines area and The Bungalow Estate?',
        answer:
          'Yes. Both have historic character: The Bungalow Estate in Seven Kings is a conservation area of 1920s and 1930s bungalows, and the council has recommended assessing the Valentines area for conservation area status. We site external sounders and cameras as discreetly as the property allows. If you are unsure whether a change to the outside of the property needs consent, check with Redbridge Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you install CCTV and fire alarms for shops and flats in Ilford town centre?',
        answer:
          'Yes. We install shopfront CCTV positioned for identification at the doors, intruder alarms for retail premises, access control for apartment blocks, and commercial fire alarm systems to BS 5839-1 with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. We are also SSAIB approved.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Ilford',
    metaDescription:
      'Security installers covering Ilford, Cranbrook, Valentines, Seven Kings, Goodmayes, Gants Hill and Newbury Park. Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms ilford',
      'burglar alarm installation ilford',
      'intruder alarm ilford',
      'cctv installation ilford',
      'fire alarms ilford',
      'alarm installers seven kings',
      'burglar alarms gants hill',
      'security company ilford',
    ],
  },
  romford: {
    description:
      'Historic market town and major retail centre in East London, now part of the London Borough of Havering. Romford is home to a large residential population alongside a busy commercial and hospitality sector, creating demand for everything from domestic alarm systems to commercial CCTV.',
    commuting: 'Elizabeth line from Romford, Gidea Park and Harold Wood; London Overground (Liberty line) from Romford to Upminster.',
    whyLocal:
      'J&L Security is based in Brentwood, next to the London Borough of Havering, and our engineers work across Romford, from the town centre to Gidea Park, Harold Hill, Harold Wood and Collier Row.',
    residential: ['Gidea Park', 'Heath Park', 'Harold Hill', 'Harold Wood', 'Collier Row', 'Rise Park'],
    propertyStock:
      'Romford was built in distinct waves, and the wave usually decides what an installation involves. Close to the town centre are Victorian streets laid out from the 1850s, such as the Stewards estate east of South Street and the Mawneys estate north-west of the High Street, which was sold for building in 1883. Heath Park was being developed by 1908, and Gidea Park was built as a garden suburb for the 1910 to 1911 exhibition, which produced 159 homes; a second exhibition in 1934 added 35 more, most of them with flat roofs. Collier Row was built up rapidly between 1929 and 1939. After the war the London County Council built the Harold Hill estate between 1948 and 1958, mostly two-storey houses in pairs and short terraces, while the borough council built estates at Collier Row, Chase Cross and Rise Park. A detached Edwardian house in Gidea Park and a post-war terrace in Harold Hill need quite different systems, which is why we survey before quoting.',
    securityContext:
      'Three requirements come up across Romford. In the Edwardian and interwar houses of Gidea Park, Heath Park and Collier Row, wireless intruder alarms are usually the better choice because they avoid chasing cables into finished walls, and detached and semi-detached houses need the side and rear approaches covered as well as the front door. Gidea Park is a conservation area, so external sounders and cameras should be sited as discreetly as the house allows. In and around the town centre, flats above shops and newer apartment blocks need door entry and communal fire detection, and the shops below need cameras positioned to identify people at the doors. On the industrial estates, larger premises need yard and perimeter CCTV, intruder detection graded to the contents, and commercial fire alarms to BS 5839-1 with a servicing contract.',
    commercial:
      'Romford grew from its market, first granted by royal order in 1247 and still held on Wednesdays, Fridays and Saturdays in the Market Place. Around it are The Liberty, completed in 1972, The Mercury Mall, and The Brewery, built on the site of the Ind Coope brewery, which closed in 1993. Havering Council adopted the Romford Masterplan in March 2025 to guide the next phase of change in the town centre. Beyond the centre, Harold Hill Industrial Estate and the King George Close Estate are Strategic Industrial Locations in the London Plan. Retail and hospitality premises usually need shopfront CCTV, intruder alarms and fire detection sized against the fire risk assessment, and industrial units need yard coverage and BS 5839-1 fire alarm systems. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Romford Town Centre',
        note: 'The historic market crossroads of Market Place, High Street, North Street and South Street, inside the ring road built in 1970 and at the heart of the Romford Conservation Area. Shops, flats above shops and newer apartment blocks, so shopfront CCTV, door entry and commercial fire alarm work.',
      },
      {
        name: 'Gidea Park',
        note: 'Garden suburb built for the 1910 to 1911 exhibition, with modernist houses from the 1934 exhibition, and a conservation area since 1970. Mostly detached and semi-detached houses, where wireless alarms and discreetly sited external equipment suit the setting.',
      },
      {
        name: 'Heath Park',
        note: 'An Edwardian estate beyond the railway, being developed by 1908. Family houses with side access and rear gardens, where the side and rear approaches need covering as well as the front door.',
      },
      {
        name: 'Harold Hill',
        note: 'Built by the London County Council between 1948 and 1958, mostly two-storey houses in pairs and short terraces. Straightforward domestic alarm and CCTV work, with commercial security on the Harold Hill Industrial Estate.',
      },
      {
        name: 'Harold Wood',
        note: 'A Victorian railway suburb on the Elizabeth line, with the Kings Park estate on the former hospital site, completed in 2023. A mix of period and new-build houses.',
      },
      {
        name: 'Collier Row',
        note: 'Built up rapidly between 1929 and 1939, with large post-war council estates at Collier Row and neighbouring Chase Cross and Rise Park. Interwar semis and terraces suit either wired or wireless systems.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you fit a burglar alarm to a house in the Gidea Park conservation area?',
        answer:
          'Yes. Gidea Park has been a conservation area since 1970, and many of its houses date from the 1910 to 1911 and 1934 exhibitions. Wireless intruder alarms avoid disturbing original interiors, and we site external sounders and cameras as discreetly as the house allows. If you are unsure whether a change to the outside of the property needs consent, check with Havering Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you cover Harold Hill and Harold Wood?',
        answer:
          'Yes. Harold Hill and Harold Wood (RM3) are part of our Romford coverage, from the post-war London County Council houses in Harold Hill to the newer Kings Park estate in Harold Wood. We install and maintain burglar alarms, CCTV, fire alarms and access control, and we can take over systems installed by another company.',
      },
      {
        question: 'Do you work with shops and businesses in Romford town centre?',
        answer:
          'Yes. We install shopfront CCTV positioned for identification at the doors, intruder alarms for retail and hospitality premises, and commercial fire alarm systems to BS 5839-1 with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. We are also SSAIB approved.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Romford',
    metaDescription:
      'Security installers covering Romford, Gidea Park, Heath Park, Harold Hill, Harold Wood and Collier Row. Burglar alarms, CCTV and fire alarms. SSAIB and BAFE.',
    extraKeywords: [
      'burglar alarms romford',
      'burglar alarm installation romford',
      'burglar alarm installers romford',
      'intruder alarms romford',
      'cctv installation romford',
      'fire alarms romford',
      'alarm installer gidea park',
      'burglar alarms harold hill',
    ],
  },
  chelmsford: {
    description: 'The county town of Essex and one of the fastest-growing cities in the East of England. Chelmsford has a thriving business district, university, and a large and expanding residential population, all of which drive strong demand for professional security systems.',
    population: '~180,000',
    commuting: 'Direct rail to London Liverpool Street in 35 minutes.',
    whyLocal: 'We have an established customer base across Chelmsford CM1–CM3, including a large number of commercial clients in the business park areas and residential customers throughout the expanding new-build estates.',
    residential: ['Great Baddow', 'Galleywood', 'Springfield', 'Writtle', 'Broomfield', 'Moulsham'],
  },
  brentwood: {
    description:
      'A market town and borough in south-west Essex, on the Elizabeth line at Brentwood and Shenfield, and the home of J&L Security. Almost two thirds of its homes are detached or semi-detached, against just over half nationally, so most domestic systems protect family houses with side and rear access.',
    population: 'around 77,000 (borough, Census 2021)',
    commuting: 'Elizabeth line from Brentwood and Shenfield; Greater Anglia services from Shenfield to London Liverpool Street.',
    whyLocal:
      'J&L Security is based in Great Warley, Brentwood, and our engineers work across Brentwood CM13 to CM15, from the town centre to Shenfield, Hutton, Warley and the surrounding villages.',
    residential: ['Shenfield', 'Hutton', 'Warley', 'Great Warley', 'Ingrave', 'Herongate'],
    propertyStock:
      'Brentwood is a borough of just over 32,000 homes, almost 63% of them detached or semi-detached, against a national average of 53%. The town grew along the High Street, a Roman road where a market was licensed in 1227 and where the White Hart dates from the late 15th century. Warley grew as a Victorian suburb after the Great Warley and Little Warley commons were sold, and Christ Church parish was created in 1855 for its new residents. In 1934 the town absorbed the surrounding parishes, including Shenfield, Hutton, Ingrave and South Weald. After the war, housing estates spread west of the old village of Hutton, while Hutton Mount remained largely affluent. The result is a town of family houses, from period properties near the High Street to post-war estates and large detached homes, and the right specification depends on which of those you live in.',
    securityContext:
      'Brentwood\'s housing is dominated by detached and semi-detached family homes, so most domestic systems need to cover more than a front door: side gates, rear doors, garages and outbuildings are all entry points to consider, and larger plots call for external detection and cameras covering the driveway. Wireless intruder alarms suit period and extended houses where cabling would disturb finished interiors. In the borough\'s 13 conservation areas, including Brentwood Town Centre, Great Warley and Hutton Village, sounders and cameras should be sited discreetly. The town centre and the shopping parades at Shenfield and Warley Hill have shops and flats that need CCTV, intruder alarms and fire detection, and the business areas around Warley and the M25 need commercial systems.',
    commercial:
      'Brentwood\'s town centre is centred on the High Street, with district shopping centres at Shenfield on Hutton Road, at Ingatestone High Street, and on Warley Hill by Brentwood station. Most office employment is in the town centre, around the station and at Warley Business Park, and the Local Plan allocates Brentwood Enterprise Park at M25 junction 29 as a strategic employment site, alongside Childerditch Industrial Estate. The council bought the Baytree Shopping Centre in 2021 and plans to redevelop it. Offices, shops and industrial units need CCTV, intruder alarms and access control, and commercial fire alarm systems to BS 5839-1. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. Brentwood is our home town.',
    neighbourhoods: [
      {
        name: 'Brentwood Town Centre',
        note: 'The High Street and surrounding streets, a conservation area formed from the former Wilson\'s Corner, Chapel and Hart Street areas, with shops, offices and flats. Shopfront CCTV and commercial fire alarm work.',
      },
      {
        name: 'Shenfield',
        note: 'A former village absorbed into Brentwood in 1934, with its own Elizabeth line station, Shenfield Common and a district shopping centre on Hutton Road. Family houses where side and rear protection matters.',
      },
      {
        name: 'Hutton',
        note: 'Post-war estates west of the old village and the largely affluent Hutton Mount, with the Hutton Village conservation area at the historic core.',
      },
      {
        name: 'Warley',
        note: 'A Victorian suburb that grew after the commons were sold, home to Warley Barracks until 1958 and now to Warley Business Park. A mix of period houses and business premises.',
      },
      {
        name: 'Great Warley',
        note: 'A village south-west of the town centre, where J&L Security is based, with a conservation area and the church of St Mary the Virgin, consecrated in 1904.',
      },
      {
        name: 'Ingrave and Herongate',
        note: 'Villages absorbed into Brentwood in 1934, with the Herongate conservation area. Village properties where wireless systems avoid disturbing older fabric.',
      },
    ],
    localFaqs: [
      {
        question: 'Where is J&L Security based in Brentwood?',
        answer:
          'Our office is at Jubilee House, The Drive, Great Warley, Brentwood CM13 3FR. Brentwood is our home town, and we install and maintain burglar alarms, CCTV, fire alarms, access control and security lighting across the town, Shenfield, Hutton, Warley and the surrounding villages.',
      },
      {
        question: 'Can you fit an alarm in a Brentwood conservation area?',
        answer:
          'Yes. Brentwood has 13 conservation areas, including Brentwood Town Centre, Great Warley, Hutton Village and Herongate. Wireless systems avoid disturbing older interiors, and we site sounders and cameras as discreetly as the property allows. If you are unsure whether a change to the outside of the property needs consent, check with Brentwood Borough Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you install security systems for businesses in Brentwood?',
        answer:
          'Yes. We install CCTV, intruder alarms and access control for shops, offices and industrial units, including premises at Warley Business Park, and commercial fire alarm systems to BS 5839-1 with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. We are also SSAIB approved.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Brentwood',
    metaDescription:
      'Brentwood security installers based in Great Warley, covering Shenfield, Hutton, Warley, Ingrave and Herongate. Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms brentwood',
      'fire alarm installer brentwood',
      'fire alarm testing brentwood',
      'cctv installation brentwood',
      'security company brentwood',
      'burglar alarms shenfield',
      'alarm installers hutton',
    ],
  },
  basildon: {
    description: 'One of Essex\'s largest towns with a major retail and business centre. Basildon encompasses a wide area including Laindon, Pitsea, Vange, and Wickford outskirts, with a mix of residential estates and substantial industrial and retail parks.',
    population: '~185,000',
    commuting: 'C2C line to London Fenchurch Street in 45 minutes.',
    whyLocal: 'We cover the whole Basildon SS13–SS16 district including the major retail parks and industrial estates, as well as the residential areas. Fire alarm systems for commercial clients and HMOs are a particular strength in this area.',
    residential: ['Laindon', 'Pitsea', 'Vange', 'Kingswood', 'Langdon Hills', 'Noak Bridge'],
    propertyStock:
      'Basildon is a planned new town, and that shapes the security work more than anything else about the area. It was designated in January 1949 under the New Towns Act 1946, the eighth new town to be created, absorbing the existing settlements of Laindon, Pitsea and Vange into a single designated area of roughly 8,000 acres. The Development Corporation began building in 1951, with the first homes going up at Vange and Fryerns. The consequence is a housing stock dominated by planned estates built between the 1950s and the 1970s, using a limited number of standardised house types laid out in neighbourhood units. Alongside that sit the older properties in the absorbed villages, particularly around Laindon and Pitsea, and a substantial amount of later private development including Noak Bridge and Kingswood. Much of the new town housing was laid out with footpath networks running separately from the road system, so a significant number of properties are approached from a pedestrian route rather than directly from a road.',
    securityContext:
      'That footpath layout is the single most useful thing to understand about securing a Basildon property. Where houses are reached from a shared pedestrian route, the rear boundary often backs onto that route rather than onto another garden, which gives an approach to the back of the property that is not overlooked from any road and is not covered by a camera positioned at the front. Detection and camera positions need to reflect that, and a survey that only looks at the front elevation will miss it. In the older Laindon and Pitsea stock the pattern is different again, with more varied plot shapes and older boundary treatments. Across the residential areas generally, wireless Grade 2 systems are the usual choice, and external CCTV covering the rear boundary is requested more often here than in areas with conventional street layouts. Rented and multi-occupied property is also a real part of the local market, which brings BS 5839-6 fire detection requirements with it, typically Grade D interlinked systems in circulation areas and the kitchen.',
    commercial:
      'Basildon carries a heavier commercial and industrial base than most Essex towns of its size, and this is where a large part of our local work sits. The Pipps Hill industrial area lies off the A127 at the West Mayne junction with direct access towards the M25 at junction 29, and the Cranes industrial area runs east of it along Cranes Farm Road. Further east, land at Burnt Mills has been approved for a substantial employment-led development. Festival Leisure Park and the Eastgate Shopping Centre carry the leisure and retail demand. These premises need a different specification from domestic work: intruder detection graded against the contents and the insurance requirement, external CCTV covering yards, service areas and car parks rather than just entrances, access control on staff and delivery doors, and commercial fire alarm systems designed to BS 5839-1 against the category set by the fire risk assessment. J&L Security is BAFE accredited for the installation and maintenance of fire alarms, and we provide the 6-monthly servicing contracts that BS 5839-1 systems require.',
    neighbourhoods: [
      {
        name: 'Laindon',
        note: 'One of the villages absorbed into the new town in 1949, so the stock is more mixed than the planned estates: older property alongside 1950s to 1970s new town housing. Both domestic alarm work and small commercial requirements are common.',
      },
      {
        name: 'Pitsea',
        note: 'Also absorbed in 1949, with a similar mix of older property and new town development, plus a local retail centre. Domestic intruder alarms, CCTV and rented-property fire detection.',
      },
      {
        name: 'Vange',
        note: 'Where the Development Corporation built its first homes from 1951, alongside Fryerns. Predominantly planned estate housing with the footpath-and-road separation typical of the new town layout.',
      },
      {
        name: 'Langdon Hills',
        note: 'Higher ground to the south west with a more varied and generally higher-value housing stock. Monitored, SSAIB-approved systems are requested more often here where insurance conditions apply.',
      },
      {
        name: 'Noak Bridge',
        note: 'Later private development on the northern edge, built to a more traditional village layout than the new town estates. Standard domestic wireless alarm and external CCTV work.',
      },
      {
        name: 'Pipps Hill and Cranes',
        note: 'The main industrial and distribution area, off the A127 at West Mayne and running east along Cranes Farm Road. Yard and perimeter CCTV, graded intruder detection, access control and BS 5839-1 commercial fire alarms.',
      },
    ],
    localFaqs: [
      {
        question: 'Why does the layout of Basildon estates matter for a burglar alarm?',
        answer:
          'Much of Basildon was laid out as a new town with footpath networks running separately from the roads, so many houses are approached from a shared pedestrian route and back onto one. That gives an approach to the rear of the property which is not overlooked from a road and which a camera at the front will not cover. Detector and camera positions need to account for the rear boundary, not just the front elevation. It is one of the specific things our engineers check during the free survey.',
      },
      {
        question: 'Do you install commercial fire alarms on the Basildon industrial estates?',
        answer:
          'Yes. The Pipps Hill and Cranes industrial areas and the wider SS13 to SS16 commercial base are part of our regular coverage. We design, install and commission BS 5839-1 commercial fire alarm systems to the category identified by the fire risk assessment, and provide the 6-monthly servicing contracts the standard requires. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
      {
        question: 'Can you fit fire detection for a rented or multi-occupied property in Basildon?',
        answer:
          'Yes. Rented and multi-occupied property is a real part of the Basildon market and it usually falls under BS 5839-6. The most common specification is a Grade D system with mains-powered interlinked detectors and battery backup, covering circulation areas plus the kitchen and any high-risk rooms, but the local authority licensing team sets the requirement for any specific property. We will confirm the grade and category at survey.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Basildon SS13-SS16',
    metaDescription:
      'Security installers covering Basildon, Laindon, Pitsea, Vange and Langdon Hills. Burglar alarms, CCTV and commercial fire alarms. SSAIB and BAFE accredited.',
    extraKeywords: [
      'security basildon',
      'burglar alarms basildon',
      'cctv installation basildon',
      'intruder alarms basildon',
      'fire alarm company basildon',
      'alarm installers basildon',
      'burglar alarms laindon',
      'access control installers basildon',
      'security systems basildon',
    ],
  },
  hornchurch: {
    description: 'A popular suburban town in the London Borough of Havering, known for its historic high street, excellent country parks, and strong community. Hornchurch has a mix of period properties and modern new builds that benefit from discreet wireless alarm systems.',
    population: '~43,000',
    commuting: 'District Line to Westminster in 50 minutes; Elizabeth Line interchange at Romford.',
    whyLocal: 'Being part of the Havering borough, Hornchurch is well within our core coverage area. Our engineers regularly cover RM11–RM12 and can usually offer next-day surveys.',
    residential: ['Emerson Park', 'Ardleigh Green', 'Elm Park', 'Hacton', 'St Andrews', 'South Hornchurch'],
    propertyStock:
      'Hornchurch is overwhelmingly a product of the interwar suburban boom. The parish held around 28,000 people in 1931 and the enlarged district was estimated at roughly 90,800 by 1938, and almost all of that growth arrived as private speculative housing built to a small number of repeated patterns. The result today is street after street of 1930s bay-fronted semi-detached houses, with a smaller stock of Edwardian property, some post-war infill, and a modest amount of recent apartment development near the station and along the high street. Elm Park was laid out in the 1930s as a planned garden-city style development and has been served by the electrified District Line since 1935. Emerson Park sits at the other end of the range, with wider avenues and larger detached and semi-detached houses on generous plots. For a security installer this consistency is useful: the 1930s semi has a predictable layout, and the vulnerable points are nearly always the same three.',
    securityContext:
      'The standard Hornchurch semi presents a repeatable pattern. There is a flank path down one side of the house, usually behind a side gate, which gives a route to the rear that cannot be seen from the street. There is a rear kitchen or dining door at the end of that path, out of sight of neighbours. There is often a detached or semi-detached garage set back from the building line, and in many cases a rear garden that backs onto another garden rather than onto a road. A properly specified system covers the side access and the rear aspect rather than concentrating detection at the front door. Wireless Grade 2 systems are the usual answer in this stock, because the properties are decorated and owners do not want cabling chased into finished walls, and because the detached garage and outbuildings can be brought onto the same system without trenching a cable run. Emerson Park properties more often need a monitored system, since higher contents values bring insurance conditions that specify an inspectorate-approved installation, and J&L Security is SSAIB approved for exactly that purpose.',
    commercial:
      'Hornchurch has a genuine independent commercial base rather than a purely residential profile. The high street and Station Lane carry independent retail, restaurants and professional offices, and the Queen\'s Theatre sits at the northern end of the town. Elm Park has its own parade of shops serving the surrounding estate. Commercial work here is generally small to medium premises rather than large industrial units: shopfront and interior CCTV positioned for identification, intruder alarms for retail and offices, door entry for premises with flats above, and fire detection specified against a fire risk assessment. Several of the older buildings on the high street have residential accommodation above commercial ground floors, which is the arrangement that most often triggers a BS 5839 fire alarm requirement, and J&L Security is BAFE accredited for the installation and maintenance of those systems.',
    neighbourhoods: [
      {
        name: 'Emerson Park',
        note: 'Wide avenues with larger detached and semi-detached houses on generous plots, dating mainly from the Edwardian period and the 1930s. Higher contents values mean monitored, SSAIB-approved systems are more common here than elsewhere in the town.',
      },
      {
        name: 'Ardleigh Green',
        note: 'Classic 1930s bay-fronted semi-detached stock on the northern side of Hornchurch. Wireless intruder alarms and external CCTV covering the side access and rear elevation are the standard specification.',
      },
      {
        name: 'Elm Park',
        note: 'Laid out in the 1930s as a planned garden-city style development, served by the District Line since 1935. Consistent house types with side access and rear gardens, plus a local shopping parade with its own small-commercial requirements.',
      },
      {
        name: 'Hacton',
        note: 'Residential streets towards the Hacton Lane and Upminster side of the town, with a mix of interwar and post-war housing. Straightforward domestic alarm and CCTV work.',
      },
      {
        name: 'South Hornchurch',
        note: 'The southern part of the area towards Rainham, with a more mixed profile of housing and small commercial and light industrial premises. Both domestic and commercial requirements are common.',
      },
      {
        name: 'Hornchurch Town Centre',
        note: 'Independent retail, restaurants and offices along the high street and Station Lane, with residential accommodation above many commercial ground floors. Shopfront CCTV, door entry and BS 5839 fire detection.',
      },
    ],
    localFaqs: [
      {
        question: 'Which alarm system suits a 1930s semi-detached house in Hornchurch?',
        answer:
          'For most 1930s semis in Hornchurch, Ardleigh Green and Elm Park, a wireless Grade 2 system is the practical choice. The properties are decorated and wireless avoids chasing cable into finished walls, and detectors can be added to a detached garage or outbuilding without a trenched cable run. The specification should cover the side access and the rear kitchen or dining door rather than concentrating on the front of the house, because the flank path behind a side gate is the route that cannot be seen from the street. We confirm the detector positions during the free survey.',
      },
      {
        question: 'Do you install security systems in Emerson Park?',
        answer:
          'Yes. Emerson Park is within our regular Hornchurch coverage. The larger detached properties there more often carry insurance conditions requiring an inspectorate-approved monitored alarm, and J&L Security is SSAIB approved, which is one of the two UK inspectorates recognised for that purpose. We provide the installation certification insurers ask for.',
      },
      {
        question: 'Can you fit a fire detection system to a flat above a shop in Hornchurch?',
        answer:
          'Yes. Residential accommodation above a commercial ground floor is a common arrangement on Hornchurch high street and Station Lane, and it is the situation that most often triggers a BS 5839 fire alarm requirement. The right grade and category depends on the layout and on the fire risk assessment for the building. J&L Security is BAFE accredited for the installation and maintenance of fire alarms and we will confirm the specification at survey.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Hornchurch RM11',
    metaDescription:
      'Security installers covering Hornchurch, Emerson Park, Elm Park and Ardleigh Green. Burglar alarms, CCTV and fire alarms. SSAIB and BAFE accredited. Free survey.',
    extraKeywords: [
      'burglar alarms hornchurch',
      'cctv installer hornchurch',
      'cctv installation hornchurch',
      'access control hornchurch',
      'fire alarm installer hornchurch',
      'fire detection system hornchurch',
      'burglar alarms ardleigh green',
      'burglar alarms elm park',
      'burglar alarms emerson park',
      'fire detection system ardleigh green',
    ],
  },
  barking: {
    description: 'A busy East London town in the London Borough of Barking and Dagenham. Barking is undergoing significant regeneration and has a rapidly growing residential and commercial property base, with a particular demand for commercial CCTV and access control.',
    population: '~90,000',
    commuting: 'District and Hammersmith & City Line to Central London; Overground to Stratford.',
    whyLocal: 'Our engineers cover IG11 and the surrounding area regularly. The ongoing regeneration around Barking Riverside has brought a number of new commercial and residential clients to our customer base.',
    residential: ['Barking Riverside', 'Longbridge', 'River Road', 'Gascoigne', 'Creekmouth'],
    propertyStock:
      'Barking\'s housing splits into four clear periods, and the period usually decides what an installation involves. The Victorian and Edwardian terraces around Longbridge Road and the streets near Barking Abbey have solid masonry walls, original window openings, and side returns that give a concealed route to the rear. Interwar and post-war semi-detached and terraced housing makes up much of the rest of IG11, generally with easier cable routes and more open frontages. The Gascoigne estate has been progressively rebuilt over the past decade into higher-density blocks with shared entrances and communal corridors. Barking Riverside, built out on the former power station land to the south and served by its own Overground station since 2022, is planned at around 10,800 homes and is almost entirely apartment stock with controlled entry and managed communal space. A specification for a Victorian terrace off Longbridge Road and a specification for a managed block at Barking Riverside have very little in common, which is why we survey before quoting rather than working from a package price.',
    securityContext:
      'Three requirements come up repeatedly across IG11. The first is intruder alarm work in the older terraced and semi-detached stock, where wireless systems are usually preferred because owners do not want cabling chased through finished plasterwork, and where the side return and the rear kitchen door are the points that need covering rather than the front elevation. The second is door entry and access control for blocks with a shared street door, which is the standard arrangement across the rebuilt Gascoigne phases and the Barking Riverside apartments. Communal entrance systems fail differently from domestic ones: the usual call is a failed maglock, a dead handset, or a trade button that has been left permanently released, and the fix is a maintenance visit rather than a new installation. The third is commercial CCTV and fire detection along the industrial river frontage, where premises are large, poorly overlooked after dark, and often need external camera coverage of yards and loading areas as well as internal detection.',
    commercial:
      'Barking has a working industrial base as well as a town centre. The land along River Road and down towards Creekmouth is in industrial and distribution use, with the A13 running east to west across the top of it. Premises there tend to need yard and perimeter CCTV, intruder detection graded against the contents, and commercial fire alarm systems to BS 5839-1 with a servicing contract behind them. Barking town centre carries the retail and hospitality demand, which is a different specification again: shopfront cameras positioned for identification rather than general area coverage, and fire detection sized against a fire risk assessment rather than against floor area. J&L Security is BAFE accredited for the installation and maintenance of fire alarms, which is the accreditation most commercial landlords and insurers in the area ask to see.',
    neighbourhoods: [
      {
        name: 'Barking Town Centre',
        note: 'Mixed use, with flats above retail and a growing number of new apartment blocks. Door entry, communal CCTV and commercial fire alarm work in the retail units are the common requirements.',
      },
      {
        name: 'Barking Riverside',
        note: 'Large new-build development on the former power station land, with its own Overground station since July 2022. Almost entirely apartment stock, so access control, door entry and communal fire detection dominate.',
      },
      {
        name: 'Gascoigne',
        note: 'Substantially rebuilt over the past decade into higher-density blocks. Shared entrances and managed access mean takeover and maintenance of existing door entry systems is as common here as new installation.',
      },
      {
        name: 'Longbridge',
        note: 'Victorian and Edwardian terraces along and around Longbridge Road, with side returns and rear access. Wireless intruder alarms suit this stock because there is no need to disturb existing decoration.',
      },
      {
        name: 'Upney',
        note: 'Interwar and post-war residential streets between the town centre and Upney station. Straightforward domestic intruder alarm and CCTV work, with easier cable routes in the semi-detached stock.',
      },
      {
        name: 'Creekmouth',
        note: 'Industrial and distribution premises on the river frontage. Yard CCTV, perimeter detection and commercial fire alarm systems to BS 5839-1 are the usual specification.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you install door entry systems for blocks of flats in Barking?',
        answer:
          'Yes. Door entry and access control for shared-entrance blocks is one of the most common jobs we take in IG11, across both the rebuilt Gascoigne phases and the newer Barking Riverside apartments. We install new systems and we take over existing ones where a managing agent wants to move the maintenance, including audio and video handsets, maglocks, fobs and trade buttons.',
      },
      {
        question: 'Can you take over an alarm or door entry system installed by the developer at Barking Riverside?',
        answer:
          'Yes. Takeover of developer-installed systems is routine work for us. We survey the existing equipment, confirm what can be retained, issue a fresh maintenance certificate, and from that point the system is covered under our agreement. This is usually cheaper than replacing a system that is only a few years old.',
      },
      {
        question: 'Do you cover commercial premises along River Road and the A13 corridor?',
        answer:
          'Yes. Industrial and distribution premises on the Barking river frontage are part of our regular coverage. Typical work is external CCTV covering yards and loading areas, intruder detection graded against the contents, and BS 5839-1 commercial fire alarm systems with a 6-monthly servicing contract. J&L Security is BAFE accredited for fire alarm installation and maintenance.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Barking IG11',
    metaDescription:
      'Security installers covering Barking, Barking Riverside, Gascoigne, Longbridge and Creekmouth. Burglar alarms, CCTV and fire alarms. SSAIB and BAFE accredited.',
    extraKeywords: [
      'burglar alarms barking',
      'cctv installation barking',
      'cctv installer barking',
      'fire detection system barking',
      'fire detection system barking riverside',
      'door entry systems barking',
      'access control barking',
      'alarm installers ig11',
    ],
  },
  dagenham: {
    description:
      'A large town in the London Borough of Barking and Dagenham. Dagenham has a significant industrial heritage and a large residential population, with strong demand for both domestic alarm systems and commercial security across its industrial estates.',
    commuting: 'District line from Becontree, Dagenham Heathway and Dagenham East; c2c from Dagenham Dock; Elizabeth line from Chadwell Heath.',
    whyLocal:
      'J&L Security works across Dagenham RM8 to RM10, covering both the Becontree estate and the industrial areas around Dagenham Dock.',
    residential: ['Becontree', 'Becontree Heath', 'Dagenham Village', 'Dagenham East', 'Beam Park'],
    propertyStock:
      'Most of Dagenham\'s housing belongs to the Becontree estate, built by the London County Council between 1921 and 1935 on garden city principles. Its houses are mostly two storeys, some three, set along streets and cul-de-sacs known locally as banjos, and around a quarter were built with shared porches. The LCC added further houses after 1945 in the Heath Park extension, and the borough council later built more for the next generation of tenants. Older fabric survives in Dagenham Village, around the church of St Peter and St Paul, with Victorian shops and houses on Church Street and 1930s terraces nearby, while Chadwell Heath grew as a suburb from 1900. The newest housing is at Beam Park, a new neighbourhood on former factory land, approved in 2018 across the Barking and Dagenham and Havering boundary. The council treats the Becontree estate as a non-designated heritage asset, and its Local Plan steers the least new development there, to protect its character.',
    securityContext:
      'The Becontree house type shapes most domestic work in Dagenham. Terraced and semi-detached houses need the front door, the rear door and any side access covered, and where a porch is shared with the house next door, detectors and door contacts have to protect one home without reacting to the other. Wireless intruder alarms suit owners who have redecorated and do not want cables chased into walls. New housing at Beam Park, and the homes planned around Dagenham Heathway, bring the requirements of any managed development: door entry and access control on shared entrances, and fire detection in communal areas. On the industrial land at Dagenham Dock, premises are large and exposed after dark, and usually need yard and perimeter CCTV, intruder detection graded to the contents, and commercial fire alarm systems to BS 5839-1.',
    commercial:
      'Dagenham Dock is a Strategic Industrial Location in the London Plan, together with the neighbouring Rainham employment area, and the council\'s Local Plan describes it as the borough\'s economic heart, home to the Thames Freeport. Ford\'s Dagenham plant opened in 1931 and built vehicles there until 2002. Dagenham Heathway is the district centre for the Becontree area, with a shopping centre and a District line station, and the Chadwell Heath Industrial Estate is identified for redevelopment with homes and intensified industrial space. Industrial and distribution sites typically need external CCTV covering yards and loading areas, perimeter intruder detection, and BS 5839-1 fire alarm systems with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Becontree',
        note: 'Built by the London County Council between 1921 and 1935, mostly two-storey houses, some with shared porches, along streets and cul-de-sacs known locally as banjos. Front and rear door protection and wireless intruder alarms are the usual specification.',
      },
      {
        name: 'Becontree Heath',
        note: 'Home to Dagenham Civic Centre, opened in 1937 and Grade II listed, now a Coventry University centre, backing on to Central Park.',
      },
      {
        name: 'Dagenham Village',
        note: 'The historic core around the church of St Peter and St Paul, a conservation area since 1995, with Victorian shops and houses on Church Street and 1930s terraces nearby. Discreet external equipment suits the setting.',
      },
      {
        name: 'Dagenham Heathway',
        note: 'The district centre for the Becontree area, with a shopping centre and District line station, and new homes planned on the Heathway Mall site. Shopfront CCTV and commercial fire alarm work in the retail units.',
      },
      {
        name: 'Chadwell Heath',
        note: 'A suburb in RM6 that grew from 1900, split between Barking and Dagenham and Redbridge, with an Elizabeth line station and an industrial estate identified for redevelopment. A mix of domestic alarm work and commercial security.',
      },
      {
        name: 'Beam Park',
        note: 'A new neighbourhood on former factory land, approved in 2018 and spanning the Barking and Dagenham and Havering boundary. Where new homes share entrances, door entry, access control and communal fire detection lead.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you fit a burglar alarm to a Becontree estate house?',
        answer:
          'Yes. The Becontree estate, built by the London County Council between 1921 and 1935, is mostly two-storey terraced and semi-detached houses, and some share a porch with the house next door. We cover the front and rear doors and any side access, and where a porch is shared we position contacts and detectors so the system protects your house without reacting to your neighbour\'s. Wireless systems avoid chasing cables into decorated walls.',
      },
      {
        question: 'Do you install door entry and fire detection in new developments such as Beam Park?',
        answer:
          'Yes. We install and maintain door entry, access control and communal fire detection for managed blocks, and we can take over systems installed by the developer where the managing agent wants to move the maintenance. We survey the existing equipment first and confirm what can be kept.',
      },
      {
        question: 'Do you cover industrial premises at Dagenham Dock?',
        answer:
          'Yes. Dagenham Dock is one of London\'s Strategic Industrial Locations, and premises there typically need external CCTV covering yards and loading areas, perimeter intruder detection and BS 5839-1 commercial fire alarm systems with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Dagenham',
    metaDescription:
      'Security installers covering Becontree, Dagenham Village, Dagenham Heathway, Chadwell Heath and Beam Park. Burglar alarms, CCTV and fire alarms. SSAIB and BAFE.',
    extraKeywords: [
      'burglar alarms dagenham',
      'burglar alarm installation dagenham',
      'cctv installation dagenham',
      'cctv dagenham',
      'fire alarms dagenham',
      'alarm installers becontree',
      'door entry systems dagenham',
      'security company dagenham',
    ],
  },
  redbridge: {
    description:
      'The London Borough of Redbridge, formed in 1965 from Ilford and from Wanstead and Woodford, covers a large area of north-east London including Ilford, Wanstead, Woodford, Gants Hill and Barkingside. Over a third of the borough is Green Belt, and its housing is largely late Victorian, Edwardian and interwar suburb, with a diverse mix of residential and commercial property.',
    population: 'about 310,300 (borough, Census 2021)',
    commuting: 'Elizabeth line from Ilford, Seven Kings and Goodmayes; Central line across the north of the borough, including Redbridge, Gants Hill, Newbury Park, Barkingside and Fairlop.',
    whyLocal:
      'Our engineers work across the London Borough of Redbridge, from Ilford and Gants Hill to Wanstead, South Woodford, Woodford Green and Barkingside.',
    residential: ['Ilford', 'Wanstead', 'South Woodford', 'Woodford Green', 'Barkingside', 'Gants Hill'],
    propertyStock:
      'Redbridge was formed in 1965 from the boroughs of Ilford and of Wanstead and Woodford, and its housing reflects both. Between 1880 and 1939 much of the borough was built up in a long phase of late Victorian, Edwardian and interwar suburbs, which is why most residential streets are relatively low density. Wanstead and South Woodford are older: middle-class housing began at South Woodford after Woodford Hall was sold in 1869, and much of Wanstead was built in the second half of the 19th century before planned estates such as the Counties Estate were added. Aldersbrook, south of Wanstead Park, is an Edwardian suburb whose Lake House Estate was built between 1907 and 1911. After the war the London County Council built the large Hainault estate. More recently, flats have been built at higher density, and they now outnumber houses in Ilford and around South Woodford and Snaresbrook. Over a third of the borough is Green Belt.',
    securityContext:
      'Across Redbridge the property decides the system more than the postcode. Victorian and Edwardian terraces in Ilford, Seven Kings and Goodmayes need the rear door and ground-floor windows covered as well as the front. The larger period houses of Wanstead and Woodford Green need the side approach covered where there is side access, and in the borough\'s 16 conservation areas external equipment should be sited discreetly. Interwar suburbs and bungalows in Gants Hill, Clayhall and Redbridge are straightforward to wire. Flats in Ilford and South Woodford need door entry and communal fire detection, and business units at Hainault Business Park need yard CCTV and commercial fire alarms to BS 5839-1.',
    commercial:
      'Ilford is the borough\'s Metropolitan town centre, and Barkingside, Gants Hill, South Woodford and Wanstead are district centres, with local centres such as Ilford Lane and Woodford Broadway. Redbridge has relatively few industrial areas, but Hainault Business Park and the Southend Road Business Area are designated as strategic employment land, and Hainault Business Park alone has more than 150 companies, according to its business improvement district. Shops and offices in the town centres need CCTV, intruder alarms and fire detection sized against the fire risk assessment, and industrial units need yard coverage and BS 5839-1 fire alarm systems. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Ilford',
        note: 'The borough\'s Metropolitan town centre, surrounded by late Victorian and Edwardian terraces. Shopfront CCTV in the centre and rear-door protection in the terraces.',
      },
      {
        name: 'Wanstead',
        note: 'A village centre with a conservation area designated in 1970, one of the borough\'s first, and 19th and early 20th-century housing, including the Counties Estate. Discreet external equipment suits the setting.',
      },
      {
        name: 'Aldersbrook',
        note: 'An Edwardian suburb south of Wanstead Park, whose Lake House Estate was built between 1907 and 1911, now a conservation area.',
      },
      {
        name: 'South Woodford',
        note: 'Suburban housing that began after Woodford Hall was sold in 1869, with George Lane as its centre and a high share of flats. Door entry and communal fire detection for the blocks.',
      },
      {
        name: 'Woodford Green',
        note: 'Georgian, Victorian, Edwardian and interwar houses around the green, protected as conservation areas since 1970, with the Churchill statue of 1959. Part of Woodford Green is in Waltham Forest.',
      },
      {
        name: 'Barkingside',
        note: 'A district centre next to the Barnardo\'s Village Homes conservation area, with Fairlop Waters Country Park on Forest Road.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you cover the whole of the London Borough of Redbridge?',
        answer:
          'Yes. We work across Redbridge, including Ilford, Seven Kings, Goodmayes, Gants Hill, Barkingside, Wanstead, South Woodford and Woodford Green. The borough uses E, IG and RM postcodes, so tell us your postcode when you call and we will arrange a survey.',
      },
      {
        question: 'Can you fit alarms to period houses in the Wanstead and Woodford conservation areas?',
        answer:
          'Yes. Redbridge has 16 conservation areas, including Wanstead Village, Woodford Green and Woodford Wells, and Aldersbrook and Lake House Estate. Wireless intruder alarms avoid disturbing period interiors, and we site sounders and cameras as discreetly as the house allows. If you are unsure whether a change to the outside of the property needs consent, check with Redbridge Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you work with businesses on Hainault Business Park?',
        answer:
          'Yes. Hainault Business Park is one of the borough\'s two strategic employment areas. Typical work is external CCTV for yards and loading areas, intruder detection graded to the contents, and BS 5839-1 fire alarm systems with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Redbridge',
    metaDescription:
      'Security installers covering Redbridge: Ilford, Gants Hill, Barkingside, Wanstead, South Woodford and Woodford Green. Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms redbridge',
      'cctv installation redbridge',
      'fire alarms redbridge',
      'burglar alarms wanstead',
      'burglar alarms woodford green',
      'alarm installers south woodford',
      'security company redbridge',
    ],
  },
  enfield: {
    description: 'A large North London borough with a mix of urban and semi-rural areas. The London Borough of Enfield includes Enfield Town, Palmers Green, Southgate, and Edmonton, with a substantial commercial sector and large residential population.',
    population: '~330,000 (borough)',
    commuting: 'Piccadilly and Victoria lines; Overground from Enfield Chase and Enfield Lock.',
    whyLocal: 'We serve the Enfield borough across EN1–EN3, covering both the residential areas and the commercial districts including the industrial estates around Brimsdown.',
    residential: ['Enfield Town', 'Palmers Green', 'Southgate', 'Edmonton', 'Winchmore Hill', 'Cockfosters'],
  },
  stratford: {
    description: 'One of East London\'s fastest-growing areas, Stratford E15 has been transformed by Olympic regeneration and is now home to Westfield Stratford City, the Queen Elizabeth Olympic Park, and thousands of new residential units. The area has significant demand for commercial CCTV and access control.',
    population: '~50,000 (ward)',
    commuting: 'Stratford International: Javelin service to St Pancras in 7 minutes. Underground, DLR, and Overground connections.',
    whyLocal: 'The ongoing development in Stratford provides regular commercial security work including construction site CCTV, new-build access control, and commercial fire alarms.',
    residential: ['Stratford New Town', 'Maryland', 'Forest Gate', 'West Ham', 'Leyton', 'Bow'],
  },
  'canary-wharf': {
    description:
      'Canary Wharf, on the Isle of Dogs in the London Borough of Tower Hamlets, is a Metropolitan town centre and, with the City, one of the locations the London Plan names as nationally important for globally-oriented financial and business services. Around it, the E14 postcode is under intense development pressure for very high density housing, from riverside towers to post-war council estates, and its buildings have demanding requirements for access control, CCTV and fire alarm systems.',
    population: '108,214 (E14, Census 2021)',
    commuting: 'Elizabeth line, Jubilee line and DLR at Canary Wharf; DLR across the Isle of Dogs to Island Gardens.',
    whyLocal:
      'We install and maintain commercial security systems across E14 and the wider Docklands area, including fire alarm servicing, access control maintenance, and CCTV for commercial developments.',
    residential: ['Canary Wharf', 'Wood Wharf', 'South Quay', 'Millwall', 'Cubitt Town', 'Poplar'],
    propertyStock:
      'E14 had 108,214 residents at the 2021 Census, and its housing spans two centuries. Cubitt Town\'s first Victorian houses were built from 1862, though almost all of them were lost in the Second World War. Millwall keeps terraces of 1902 to 1904 and the Chapel House Street Estate of 1920 to 1921, now part of a conservation area. After the war came large council estates: Lansbury in Poplar, which includes the permanent buildings of the 1951 Festival of Britain, the Samuda Estate from 1965, the Barkantine Estate in the late 1960s, and Erno Goldfinger\'s Balfron Tower and Carradale House. The London Docklands Development Corporation, created in 1981, began the era of private development, and since 2000 residential towers have risen around Marsh Wall and South Quay, while Wood Wharf is planned for more than 3,600 homes. A flat in a managed tower and a house on a 1960s estate need very different systems, which is why we survey before quoting.',
    securityContext:
      'Much of E14\'s newer housing is in managed buildings. Residential towers and build-to-rent blocks have controlled entrances and communal areas, so access control, door entry and communal fire detection lead, and we maintain and take over systems installed at completion as well as fitting new ones. Offices and shops on the Canary Wharf estate and around it need access control integrated with CCTV, and commercial fire alarm systems to BS 5839-1 with a servicing contract. In the older estates and the terraces of Millwall and Cubitt Town, domestic intruder alarms and door entry for low-rise blocks are the usual requirement.',
    commercial:
      'The London Plan treats the northern Isle of Dogs, with the City, as one of London\'s nationally important locations for financial and business services, and Canary Wharf as a Metropolitan town centre. Its shopping centre links five malls: Canada Place, Cabot Place, Jubilee Place, Crossrail Place and Churchill Place. Beyond the estate, Chrisp Street in Poplar is a district centre. The Isle of Dogs and South Poplar Opportunity Area has London Plan capacity for 29,000 new homes and 110,000 new jobs by 2041, so construction and fit-out continue across E14. Offices and retail units need access control, CCTV and intruder detection, and commercial fire alarm systems to BS 5839-1 with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Canary Wharf Estate',
        note: 'The office, retail and residential estate around One Canada Square, including Newfoundland, the first residential tower on the estate. Access control, CCTV and commercial fire alarm work in managed buildings.',
      },
      {
        name: 'Wood Wharf',
        note: 'The newest part of the estate, begun in 2015 and planned for more than 3,600 homes, including build-to-rent blocks run by Canary Wharf Group\'s rental business. Door entry and communal fire detection lead.',
      },
      {
        name: 'South Quay and Marsh Wall',
        note: 'A cluster of residential towers such as Pan Peninsula, Landmark Pinnacle and South Quay Plaza. Access control and fire detection in high-rise managed blocks.',
      },
      {
        name: 'Millwall',
        note: 'The western and southern Isle of Dogs, with Edwardian terraces and the Chapel House Street garden estate of 1920 to 1921 alongside post-war estates such as the Barkantine.',
      },
      {
        name: 'Cubitt Town',
        note: 'The eastern Isle of Dogs, largely rebuilt after wartime bombing, with post-war estates including the Samuda Estate, and the Island Gardens conservation area.',
      },
      {
        name: 'Poplar',
        note: 'North of the docks, with the Lansbury estate, which includes the permanent buildings of the 1951 Festival of Britain, Balfron Tower, and the Chrisp Street district centre.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you maintain access control and door entry in Canary Wharf residential towers?',
        answer:
          'Yes. We install, maintain and take over access control, door entry and communal fire detection for managed residential buildings in E14, including build-to-rent blocks. When we take over a system installed by the developer, we survey the equipment first and confirm what can be kept.',
      },
      {
        question: 'Do you service commercial fire alarms in Canary Wharf offices?',
        answer:
          'Yes. We service BS 5839-1 fire alarm systems on a 6-monthly contract, carry out fault finding and repairs, and take over systems installed by other contractors. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
      {
        question: 'Do you cover the whole of the Isle of Dogs and Poplar?',
        answer:
          'Yes. We cover E14, including Canary Wharf, Wood Wharf, South Quay, Millwall, Cubitt Town and Poplar, for homes, managed blocks and businesses.',
      },
    ],
    metaTitle: 'Access Control, CCTV & Fire Alarms, Canary Wharf',
    metaDescription:
      'Security installers covering Canary Wharf, Wood Wharf, South Quay, Millwall, Cubitt Town and Poplar. Access control, CCTV and fire alarms. SSAIB and BAFE.',
    extraKeywords: [
      'access control canary wharf',
      'cctv installation canary wharf',
      'fire alarm servicing canary wharf',
      'fire alarm commissioning canary wharf',
      'security systems isle of dogs',
      'door entry systems canary wharf',
      'security company e14',
    ],
  },
  greenwich: {
    description: 'The Royal Borough of Greenwich in South East London combines a rich maritime heritage with significant commercial development. The area includes Greenwich town centre, the O2 entertainment complex, Royal Arsenal Riverside, and extensive residential areas from Blackheath through Charlton to Woolwich.',
    population: '~290,000 (borough)',
    commuting: 'DLR to Bank in 20 minutes; Elizabeth Line from Woolwich; National Rail from Greenwich to London Bridge.',
    whyLocal: 'Our engineers service customers across SE10 and the wider Greenwich borough, including BAFE-certified fire alarm work for the commercial properties along the riverside, domestic intruder alarms for the residential streets around Blackheath and Charlton, and access control for the new-build developments at Royal Arsenal Riverside and Kidbrooke Village.',
    residential: ['Greenwich', 'Blackheath', 'Charlton', 'Kidbrooke', 'Westcombe Park', 'Woolwich'],
    propertyStock:
      'Greenwich has a heritage constraint that very few of our other coverage areas share, and it changes what can be installed and how. The Maritime Greenwich World Heritage Site covers the Old Royal Naval College, the Queen\'s House, the Royal Observatory and the Cutty Sark, and the buffer zone around that inscribed core is formed from conservation areas including West Greenwich, East Greenwich and Blackheath. Much of SE10\'s period housing sits inside one of those conservation areas or inside the Ashburnham Triangle, and parts of the borough are subject to Article 4 Directions which withdraw permitted development rights that would apply elsewhere. The housing itself is largely Georgian and Victorian terraced property climbing the hill in West Greenwich, with Victorian and Edwardian stock through East Greenwich, Westcombe Park and Charlton, and elegant Georgian houses around Blackheath. Set against that are two large modern developments: the Greenwich Peninsula around North Greenwich and the O2, and Kidbrooke Village to the south east, both dominated by apartment blocks with controlled entry.',
    securityContext:
      'The heritage position has direct practical consequences. Where a property is listed, consent is required before equipment is fixed to the fabric of the building, and that applies to an external sounder, a camera bracket, or a cable clipped across a facade just as much as to a window replacement. Where a property is in a conservation area, external alterations are more tightly controlled than they would be elsewhere, and an Article 4 Direction can remove permitted development rights that a homeowner would otherwise rely on. None of this makes a property impossible to secure, but it does mean the design has to start from where equipment can acceptably go rather than from a standard package. In practice that pushes us towards wireless systems with no surface cabling, internal detection rather than external where the coverage can be achieved, discreet siting of sounders and cameras on secondary elevations, and equipment finishes chosen to sit quietly against the building. We will tell you at survey where we think consent is likely to be needed, but the consent itself is a matter for the Royal Borough and for the property owner, and we recommend checking before work is scheduled. The modern apartment stock at the Peninsula and Kidbrooke Village has none of these constraints and is instead about door entry, access control and communal fire detection.',
    commercial:
      'Commercial demand in SE10 divides between the visitor economy and the retail and industrial corridor. Greenwich town centre, the market and the riverside carry a dense concentration of independent retail, restaurants, bars and hotels, much of it in listed or conservation area buildings, where the same heritage constraints apply and where fire detection has to be designed around historic layouts and escape routes. The Woolwich Road corridor and the retail parks around Bugsby\'s Way in Charlton are a different proposition: larger modern units where external CCTV covering car parks and service yards, access control on staff and delivery entrances, and BS 5839-1 fire alarm systems with 6-monthly servicing are the standard requirement. The Greenwich Peninsula development around the O2 has generated a steady stream of commercial and residential access control work. J&L Security is BAFE accredited for the installation and maintenance of fire alarms, which is what commercial landlords, insurers and licensing authorities in the borough ask to see.',
    neighbourhoods: [
      {
        name: 'West Greenwich',
        note: 'Georgian and Victorian terraces climbing the hill from the town centre, largely within a conservation area and the World Heritage Site buffer zone. Wireless systems and discreet external siting are the norm, and listed property needs consent before anything is fixed to the fabric.',
      },
      {
        name: 'East Greenwich',
        note: 'Victorian and Edwardian terraced streets running towards the Peninsula, also substantially within a conservation area. A mix of owner-occupied houses and converted flats, so both intruder alarms and shared-entrance door entry come up.',
      },
      {
        name: 'Blackheath',
        note: 'Georgian houses around the heath in a designated conservation area, with generally higher contents values. Monitored, SSAIB-approved systems are more common here where insurance conditions specify an inspectorate-approved installation.',
      },
      {
        name: 'Westcombe Park and Maze Hill',
        note: 'Victorian and Edwardian housing on the slope between Greenwich Park and Charlton, much of it substantial family property. Standard requirement is a wireless intruder alarm with external CCTV covering rear access.',
      },
      {
        name: 'Charlton',
        note: 'Residential streets alongside the Woolwich Road corridor and the retail parks around Bugsby\'s Way. Domestic work on one side and larger commercial CCTV, access control and BS 5839-1 fire alarm work on the other.',
      },
      {
        name: 'Kidbrooke and Greenwich Peninsula',
        note: 'Large modern apartment developments with controlled entry and managed communal areas. Door entry, access control and communal fire detection dominate, with no heritage constraint on installation.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you install an alarm or CCTV on a listed building in Greenwich?',
        answer:
          'Yes, but the design has to work around the listing. Consent is required before equipment is fixed to the fabric of a listed building, and that includes an external sounder, a camera bracket, or cabling run across a facade. We design these installations as wireless systems with no surface cabling, keep external equipment on secondary elevations wherever the coverage allows, and choose finishes that sit quietly against the building. We will tell you at survey where we expect consent to be needed, but obtaining it is a matter for the property owner and the Royal Borough of Greenwich, and it should be resolved before work is scheduled.',
      },
      {
        question: 'Does conservation area status affect a security installation in SE10?',
        answer:
          'It can. Much of SE10\'s period housing sits within the West Greenwich, East Greenwich or Blackheath conservation areas, or the Ashburnham Triangle, and parts of the borough are covered by Article 4 Directions which withdraw permitted development rights that would apply elsewhere. External alterations are more tightly controlled as a result. It does not prevent a property being properly secured, but it does mean the specification should start from where equipment can acceptably be positioned. We recommend checking the position with the Royal Borough before installation.',
      },
      {
        question: 'Do you cover the newer developments at Greenwich Peninsula and Kidbrooke Village?',
        answer:
          'Yes. These are apartment developments with controlled entry, so the work is door entry, access control and communal fire detection rather than domestic intruder alarms. We install new systems and take over existing ones where a managing agent wants to move the maintenance contract, and we service communal fire alarm systems under BAFE-accredited fire alarm maintenance.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Greenwich SE10',
    metaDescription:
      'Security installers covering Greenwich, Blackheath, Charlton, Kidbrooke and Westcombe Park. Alarms, CCTV and fire alarms, including listed property.',
    extraKeywords: [
      'burglar alarms greenwich',
      'cctv installation greenwich',
      'cctv installer greenwich',
      'burglar alarm installation greenwich',
      'alarm maintenance greenwich',
      'burglar alarms blackheath',
      'burglar alarms kidbrooke',
      'business intruder alarm installation greenwich',
      'security systems se10',
    ],
  },
  harlow: {
    description:
      'A new town in West Essex, designed post-war with a distinctive layout of residential neighbourhoods surrounding a town centre. Harlow has a significant industrial and business park sector, particularly in the Pinnacles and Templefields areas, alongside a large residential population.',
    population: 'around 93,300 (district, Census 2021)',
    commuting: 'West Anglia Main Line from Harlow Town and Harlow Mill to London Liverpool Street and Cambridge; Stansted Express from Harlow Town.',
    whyLocal:
      'We serve clients across Harlow CM17 to CM20, from domestic alarm installations in the residential areas to commercial fire alarms and CCTV for the business parks.',
    residential: ['Mark Hall', 'Old Harlow', 'Netteswell', 'Potter Street', 'Great Parndon', 'Church Langley'],
    propertyStock:
      'Harlow was designated a new town in 1947, and Frederick Gibberd\'s master plan set its shape: residential neighbourhoods, each with its own centre, around a town centre, with industry in separate employment areas. The neighbourhoods were built in sequence. Mark Hall North was complete by 1954, including The Lawn of 1950 to 1951, the first residential tower block in Britain. Netteswell and Mark Hall South followed, Great Parndon was under construction in 1960, Stewards, Kingsmoor and Staple Tye were built mainly between 1965 and 1974, and Katherines and Sumners were begun in 1974. Church Langley and Newhall were added in the late 1990s and 2000s. Harlow has a higher than average share of terraced houses, and in 2021 29.3% of households rented from a social landlord, in the highest 5% of English local authority areas. Old Harlow, the original market settlement, keeps its older buildings and Victorian and Edwardian homes along Bury Road, New Road and Park Hill.',
    securityContext:
      'Harlow\'s new-town layout shapes the work. On the neighbourhood estates, where much of the housing is terraced, the rear of the house needs covering as well as the front, and wireless systems avoid disturbing finished interiors. Social landlords and managing agents need door entry and communal fire detection for blocks of flats. The two main employment areas, Templefields in the north and The Pinnacles in the west, have industrial, logistics and office premises that need yard and perimeter CCTV, intruder detection and commercial fire alarms to BS 5839-1. In Old Harlow and Harlow\'s other conservation areas, external equipment should be sited discreetly.',
    commercial:
      'Harlow\'s two main employment areas are Templefields in the north, with around 80,000 square metres of mostly industrial and logistics floorspace, and The Pinnacles in the west, with modern industrial units for production, distribution and offices. Burnt Mill has warehousing and workshops, and Harlow Enterprise Zone covers Kao Park, Harlow Science Park and part of Templefields. The town centre, the first in a new town to be built around a pedestrian precinct, includes the Harvey Centre, Broad Walk and the Water Gardens, and each neighbourhood has its own centre. Industrial and logistics sites need external CCTV, perimeter detection and BS 5839-1 fire alarm systems with a servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Mark Hall',
        note: 'Mark Hall North, the first neighbourhood, was complete by 1954 and is now a conservation area; it includes The Lawn, Britain\'s first residential tower block. Mark Hall South followed. Terraces and flats where rear-door protection and communal door entry matter.',
      },
      {
        name: 'Old Harlow',
        note: 'The original market settlement, with a conservation area and Victorian and Edwardian houses along Bury Road, New Road and Park Hill. Discreet external equipment suits the setting.',
      },
      {
        name: 'Netteswell',
        note: 'One of the first neighbourhoods, nearing completion by 1954, and home to Harlow Town Park, laid out by Frederick Gibberd and Sylvia Crowe.',
      },
      {
        name: 'Potter Street',
        note: 'A former hamlet in the east of the town, named after the pottery once made there, enlarged into a new-town neighbourhood in the 1950s.',
      },
      {
        name: 'Great Parndon',
        note: 'A former parish in the south-west, under construction as a neighbourhood in 1960.',
      },
      {
        name: 'Church Langley',
        note: 'A planned extension completed in 2005, of newer houses where wired and wireless systems are both straightforward to fit.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you install alarms on Harlow\'s new-town estates?',
        answer:
          'Yes. Harlow\'s neighbourhoods were built in sequence, from Mark Hall North in the early 1950s to Church Langley in 2005, and much of the housing is terraced. We cover the front and rear doors and ground-floor windows, and wireless systems avoid disturbing decorated interiors. For blocks of flats we install door entry, access control and communal fire detection.',
      },
      {
        question: 'Do you cover businesses at Templefields and The Pinnacles?',
        answer:
          'Yes. Templefields and The Pinnacles are Harlow\'s two main employment areas. Typical work is external CCTV covering yards and loading areas, intruder detection graded to the contents, and BS 5839-1 fire alarm systems with a 6-monthly servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
      {
        question: 'Can you fit security to a house in Old Harlow or another conservation area?',
        answer:
          'Yes. Harlow has 10 conservation areas, including Old Harlow, Mark Hall North and Churchgate Street, which also has an Article 4 Direction. We site sounders and cameras discreetly and use wireless systems where cabling would disturb older fabric. If you are unsure whether a change to the outside of the property needs consent, check with Harlow Council\'s planning team before any external equipment is fitted.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Harlow',
    metaDescription:
      'Security installers covering Harlow, Old Harlow, Mark Hall, Church Langley, Templefields and The Pinnacles. Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms harlow',
      'cctv installation harlow',
      'fire alarms harlow',
      'fire alarm maintenance harlow',
      'alarm installers harlow',
      'security company harlow',
      'cctv templefields harlow',
    ],
  },
  epping: {
    description:
      'A market town at the northern end of Epping Forest in West Essex, at the eastern end of the Central line and home to the offices of Epping Forest District Council. Its High Street is lined with listed buildings, most from the 18th century, and hosts a weekly market, with period houses at the core of the town and later housing around it.',
    commuting: 'Central line from Epping, at the eastern end of the line, and from Theydon Bois.',
    whyLocal:
      'Our engineers work across Epping CM16 and the villages around it, including Coopersale, Theydon Bois and North Weald. Wireless systems suit the town\'s older and listed buildings.',
    residential: ['Epping', 'Coopersale', 'Bell Common', 'Theydon Bois', 'North Weald', 'Thornwood'],
    propertyStock:
      'Epping stayed compact for a long time: on the 1873 Ordnance Survey map the town barely extended beyond its present conservation area. The High Street and Lindsey Street core has cottages and townhouses built between the 16th and 20th centuries, and by the end of the 19th century the High Street was lined with 26 coaching inns. The railway reached Epping in 1865, and by the early 20th century new houses had been built on Station Road and on roads laid out in the late 19th century, such as St John\'s Road, Hartland Road and Kendal Avenue. In the 1960s and 1970s housing estates were built around the town, including Theydon Grove from 1964, and blocks of flats followed on Hemnall Street and Station Road. The Local Plan allocates land south of the town for at least 450 new homes. A listed High Street building and a 1960s estate house need quite different approaches, which is why we survey before quoting.',
    securityContext:
      'Epping\'s older properties set the tone. Listed buildings and period cottages in the town centre and around Bell Common need wireless systems that avoid disturbing historic fabric, with external sounders and cameras sited carefully in the conservation areas. The late Victorian and Edwardian houses built around the edges of the old town, and the post-war estates, are more straightforward, though detached and semi-detached houses still need side and rear access covered. Shops on the High Street need intruder alarms and CCTV positioned for identification at the doors, and blocks of flats need door entry and communal fire detection.',
    commercial:
      'Epping\'s commerce is concentrated on the High Street, a conservation area lined with listed buildings, where a weekly market has been held since a charter of 1253 and now runs every Monday with around 55 stalls. Some of the old coaching inns survive as pubs, such as The Thatched House, The George and Dragon and The Black Lion, and the Civic Offices of Epping Forest District Council are on the High Street. North Weald Airfield, a general aviation airfield owned by the district council, hosts a large Saturday market. Shops, pubs and offices need intruder alarms, CCTV and fire detection sized against the fire risk assessment. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Epping Town Centre',
        note: 'The High Street and Lindsey Street core, a conservation area of listed buildings from the 16th to the 20th centuries, most of them 18th century, with the Monday market. Wireless alarms and discreet external equipment suit the listed buildings.',
      },
      {
        name: 'Station Road and St John\'s Road',
        note: 'Late Victorian and Edwardian streets around the edges of the old town, built up by the early 20th century after the railway arrived in 1865. Period houses with side and rear access to cover.',
      },
      {
        name: 'Bell Common',
        note: 'A conservation area on the edge of the forest, with two groups of 19th-century cottages on the High Road built for workers on the Copped Hall estate.',
      },
      {
        name: 'Coopersale',
        note: 'A village of about a thousand people, separated from Epping by forest land but part of the parish, with the Coopersale Street conservation area to the south-east.',
      },
      {
        name: 'Theydon Bois',
        note: 'A separate village and parish in CM16 with its own Central line station, which grew after the railway arrived in 1865.',
      },
      {
        name: 'North Weald',
        note: 'A separate parish in CM16, home to North Weald Airfield, established in 1916 and home to 56 Squadron\'s Hurricanes in the Battle of Britain period.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you fit an alarm to a listed building in Epping?',
        answer:
          'Yes. Epping High Street is a conservation area lined with listed buildings, most of them from the 18th century. Wireless intruder alarms avoid chasing cables into historic walls, and we site sounders and cameras as discreetly as the building allows. Listed building consent can be needed for changes to a listed building, so check with Epping Forest District Council before any external equipment is fitted.',
      },
      {
        question: 'Do you cover Theydon Bois, North Weald and Coopersale?',
        answer:
          'Yes. We cover Epping and the villages around it, including Coopersale, Theydon Bois, North Weald and Thornwood, for burglar alarms, CCTV, fire alarms and access control.',
      },
      {
        question: 'Do you install security for shops and pubs on Epping High Street?',
        answer:
          'Yes. We install intruder alarms, CCTV positioned for identification at the doors, and fire alarm systems sized against the fire risk assessment, with a servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. We are also SSAIB approved.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Epping CM16',
    metaDescription:
      'Security installers covering Epping, Coopersale, Bell Common, Theydon Bois and North Weald. Wireless alarms for listed buildings, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms epping',
      'cctv installation epping',
      'fire alarms epping',
      'alarm installers theydon bois',
      'burglar alarms north weald',
      'security company epping',
    ],
  },
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
    description:
      'Battersea, Nine Elms, Vauxhall and South Lambeth lie across the London Boroughs of Wandsworth and Lambeth. Along the river between them is the Vauxhall, Nine Elms and Battersea Opportunity Area, where more than 10,000 new homes have been completed since it was designated in 2004. The Battersea Power Station redevelopment, the US Embassy and the Northern line extension sit alongside Victorian terraces, mansion blocks and council estates, so the area combines new-build apartments, period homes and commercial premises.',
    population: 'SW8 38,648 and SW11 81,336 (Census 2021)',
    commuting: 'Northern line from Battersea Power Station and Nine Elms; Victoria line and National Rail from Vauxhall; National Rail and London Overground from Clapham Junction.',
    whyLocal:
      'Our engineers travel to Battersea, Nine Elms, Vauxhall and South Lambeth (SW8 and SW11) from our base in Brentwood, for residential customers in the new developments and period homes, and for commercial premises.',
    residential: ['Battersea Park', 'Nine Elms', 'Vauxhall', 'South Lambeth', 'Battersea Square', 'Clapham Junction'],
    propertyStock:
      'The area\'s housing runs from the 17th century to the 2020s. Old Battersea House, of 1699, survives by the original village at Battersea Square, and South Lambeth has 19th-century middle-class terraces and villas in the Albert Square and Lansdowne Gardens conservation areas. In the Victorian period, Park Town was laid out on Queenstown Road from 1863, the Shaftesbury Park Estate of two-storey workers\' cottages was built between 1873 and 1877, and five-storey mansion blocks went up facing Battersea Park, which opened in 1858. The Latchmere Estate of 1903 was the first council estate in the country built by a council\'s own workforce. Large post-war estates followed across north Battersea, and since 2004 more than 10,000 new homes have been built in the Opportunity Area, including over 2,200 so far at Battersea Power Station. A Victorian cottage on the Shaftesbury Park Estate and an apartment at Nine Elms call for different systems, so we survey before quoting.',
    securityContext:
      'Three kinds of property set the requirements. In the new developments at Nine Elms and Battersea Power Station, apartments sit in managed blocks with controlled entrances and communal areas, so access control, door entry and communal fire detection lead, along with maintenance of the systems installed at completion. In the Victorian and Edwardian houses and mansion flats, wireless intruder alarms avoid disturbing period interiors, and ground-floor flats need their windows and rear access covered. Many of these streets are in conservation areas, including Battersea Park, Park Town, Shaftesbury Park Estate, Vauxhall and Albert Square, so external sounders and cameras should be sited discreetly. Shops, offices and industrial premises, from Clapham Junction to the Queenstown Road industrial area, need CCTV, intruder alarms and commercial fire alarms to BS 5839-1.',
    commercial:
      'Clapham Junction is a major town centre around what the London Plan calls Europe\'s busiest rail interchange station, with Victorian and Edwardian shop terraces on St John\'s Road, St John\'s Hill and Lavender Hill. Battersea Power Station reopened in 2022 as a shopping, leisure and office destination, including Apple\'s UK headquarters, beside the new Electric Boulevard high street. New Covent Garden Market at Nine Elms, a fruit, vegetable and flower wholesale market, has around 130 businesses on 38 acres, and Queenstown Road is a Strategic Industrial Location. Retail, office and wholesale premises need CCTV, access control and intruder alarms, and commercial fire alarm systems to BS 5839-1. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Battersea Park',
        note: 'Mansion blocks and period houses around the park, which opened in 1858 and is a Grade II* registered landscape, in the Battersea Park conservation area. Wireless alarms suit the mansion flats.',
      },
      {
        name: 'Battersea Power Station and Nine Elms',
        note: 'The redeveloped Power Station, reopened in 2022, and the riverside apartments of Nine Elms, served by Northern line stations since 2021, with the US Embassy on Nine Elms Lane. Access control and communal fire detection lead.',
      },
      {
        name: 'Vauxhall',
        note: 'An 18th and 19th-century mixed residential and commercial area around Kennington Lane and Harleyford Road, in Lambeth, now with a cluster of towers such as St George Wharf. Door entry in the towers and discreet systems in the conservation area.',
      },
      {
        name: 'South Lambeth',
        note: '19th-century terraces and villas in the Albert Square, Lansdowne Gardens and South Lambeth Road conservation areas, in Lambeth. Wireless intruder alarms avoid disturbing period interiors.',
      },
      {
        name: 'Park Town',
        note: 'A Victorian planned estate built along Queenstown Road between 1863 and the eve of the First World War, now a conservation area.',
      },
      {
        name: 'Shaftesbury Park and Clapham Junction',
        note: 'Two-storey workers\' cottages of 1873 to 1877 off Lavender Hill, and the Victorian and Edwardian shop terraces of Clapham Junction, both conservation areas.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you install access control in new-build blocks at Nine Elms and Battersea Power Station?',
        answer:
          'Yes. We install, maintain and take over access control, door entry and communal fire detection for managed residential blocks. When we take over a system installed at completion, we survey the equipment first and confirm what can be kept.',
      },
      {
        question: 'Do you cover Vauxhall and South Lambeth as well as Battersea?',
        answer:
          'Yes. We cover SW8 and SW11, including Battersea, Nine Elms, Vauxhall and South Lambeth, across the London Boroughs of Wandsworth and Lambeth. Our engineers travel from our base in Brentwood, and we agree an appointment time with you when you call.',
      },
      {
        question: 'Can you fit a burglar alarm to a mansion flat or period house in Battersea?',
        answer:
          'Yes. For mansion flats near Battersea Park and period houses in areas such as Park Town and the Shaftesbury Park Estate, wireless intruder alarms avoid chasing cables into decorated walls. Many of these streets are conservation areas, so we site sounders and cameras discreetly. If you are unsure whether a change to the outside of the property needs consent, check with Wandsworth or Lambeth Council\'s planning team before any external equipment is fitted.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Access Control, Battersea',
    metaDescription:
      'Security installers covering Battersea, Nine Elms, Vauxhall and South Lambeth (SW8, SW11). Burglar alarms, CCTV, access control and fire alarms. SSAIB and BAFE.',
    extraKeywords: [
      'burglar alarms battersea',
      'cctv installation battersea',
      'access control nine elms',
      'burglar alarms vauxhall',
      'security systems south lambeth',
      'door entry systems battersea',
      'fire alarms battersea',
    ],
  },
  fulham: {
    description:
      'A residential area in the south of the London Borough of Hammersmith and Fulham, covering Fulham Broadway, Parsons Green, Sands End, Imperial Wharf, Chelsea Harbour and the Fulham side of West Brompton. Its housing is mainly Victorian and Edwardian terraces, many divided into flats, with riverside apartment developments and shops along North End Road and Fulham Road.',
    commuting: 'District line from Fulham Broadway, Parsons Green and Putney Bridge; London Overground and Southern from Imperial Wharf and West Brompton.',
    whyLocal:
      'Our engineers travel to Fulham SW6 and SW10 from our base in Brentwood. Wireless Grade 2 packages suit the period terraces and converted flats, and our SSAIB approval supports customers with insurance policies that require an inspectorate-approved system.',
    residential: ['Fulham Broadway', 'Parsons Green', 'Sands End', 'Imperial Wharf', 'Chelsea Harbour', 'Bishops Park'],
    propertyStock:
      'Fulham is mostly Victorian and Edwardian, long roads of terraced houses, with 1960s council estates in the north such as the West Kensington, Gibbs Green and Clem Attlee estates. Around Parsons Green most of the housing was in place by the 1890s, alongside the arrival of the District Railway: mainly Victorian terraces around a triangular green that keeps its village character, with a few older houses on New Kings Road dating from 1795. South Fulham has two-storey terraces in long streets and post-war estates, while the riverside has changed from industry to housing: Chelsea Harbour, granted planning permission in 1986, Imperial Wharf, and King\'s Road Park on the former Fulham Gasworks, planned for more than 1,800 homes around a Grade II listed gasholder. A converted Victorian terrace and a riverside apartment need different systems, so we survey before quoting.',
    securityContext:
      'Where Fulham\'s period terraces have been divided into flats, each flat needs its own entry points covered and the shared front door needs door entry that works. Where a house is still a single home, wireless intruder alarms avoid disturbing decorated interiors, and the rear of the house needs covering as well as the front. About half of Hammersmith and Fulham is covered by conservation areas, including Parsons Green, Sands End and Walham Green in Fulham, so external sounders and cameras should be sited discreetly. The riverside developments at Imperial Wharf, Chelsea Harbour and King\'s Road Park are managed blocks where access control and communal fire detection lead. Shops on North End Road and Fulham Road need CCTV positioned for identification at the doors.',
    commercial:
      'Fulham\'s town centre is around Fulham Broadway, with the Fulham Broadway Shopping Centre and the North End Road market, which trades six days a week and is known for fresh fruit and vegetables. Fulham Road runs past Stamford Bridge, home of Chelsea Football Club since 1905 and, despite its name, in Hammersmith and Fulham. Along the river, South Fulham Riverside mixes housing with commercial, industrial and retail uses, and the Design Centre at Chelsea Harbour is a design trade centre. Retail and hospitality premises need shopfront CCTV and intruder alarms, and larger commercial buildings need access control and BS 5839-1 fire alarm systems. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Parsons Green',
        note: 'Mainly Victorian terraces around a triangular green with a village character, a conservation area since 1975, running towards Eel Brook Common. Wireless alarms suit the period houses.',
      },
      {
        name: 'Fulham Broadway',
        note: 'The town centre, formerly Walham Green, with the shopping centre, the North End Road market and Victorian and Edwardian streets around it. Shopfront CCTV and door entry for flats.',
      },
      {
        name: 'Sands End',
        note: 'South Fulham by the river, with some 300-year-old cottages, 19th-century streets and two-storey terraces, much of it in the Sands End conservation area, and King\'s Road Park on the former gasworks.',
      },
      {
        name: 'Imperial Wharf',
        note: 'A riverside development on former industrial land, with its own London Overground station since 2009. Managed apartment blocks where access control and communal fire detection lead.',
      },
      {
        name: 'Chelsea Harbour',
        note: 'Despite its name, in Hammersmith and Fulham: apartments, a marina, the Design Centre and a hotel, granted planning permission in 1986. Access control and CCTV for managed buildings.',
      },
      {
        name: 'West Brompton',
        note: 'Straddles the boundary with Kensington and Chelsea. On the Fulham side, the Billings and Brompton Cutting conservation area follows the railway cutting north from Stamford Bridge; Brompton Cemetery, The Boltons and West Brompton station are on the Kensington and Chelsea side, covered on our Chelsea and Kensington page.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you cover Parsons Green, West Brompton and Chelsea Harbour?',
        answer:
          'Yes. We cover Fulham SW6 and the Hammersmith and Fulham part of SW10, including Parsons Green, Fulham Broadway, Sands End, Imperial Wharf, Chelsea Harbour and the Fulham side of West Brompton. Our engineers travel from our base in Brentwood, and we agree an appointment time with you when you call.',
      },
      {
        question: 'Can you fit an alarm to a converted Victorian house in Fulham?',
        answer:
          'Yes. Where a terrace has been divided into flats, we protect each flat\'s own entry points and can fit door entry for the shared front door. Wireless intruder alarms avoid disturbing decorated interiors. Parsons Green and other parts of Fulham are conservation areas, so we site sounders and cameras discreetly. If you are unsure whether a change to the outside of the property needs consent, check with Hammersmith and Fulham Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you install access control in riverside developments at Imperial Wharf and King\'s Road Park?',
        answer:
          'Yes. We install, maintain and take over access control, door entry and communal fire detection for managed residential blocks, and survey any existing system first to confirm what can be kept.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Fulham',
    metaDescription:
      'Security installers covering Fulham, Parsons Green, Sands End, Imperial Wharf and Chelsea Harbour (SW6, SW10). Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms fulham',
      'burglar alarms sands end',
      'burglar alarms parsons green',
      'cctv installation fulham',
      'fire alarms fulham',
      'access control imperial wharf',
      'security company fulham',
    ],
  },
  streatham: {
    description:
      'A South London area mostly in the London Borough of Lambeth, with the Streatham Park and Furzedown side in Wandsworth, and a long high street running from Streatham Hill through to Streatham Common. Streatham combines large Victorian and Edwardian houses, converted flats and interwar mansion blocks with an active commercial high street. This page also covers Brixton Hill, Tulse Hill and Clapham Park, which lie wholly or partly in SW2.',
    commuting: 'National Rail from Streatham, Streatham Hill, Streatham Common and Tulse Hill; Victoria line at Brixton and Northern line at Tooting Bec.',
    whyLocal:
      'Our engineers travel to Streatham, Brixton Hill, Tulse Hill and Clapham Park (SW2 and SW16) from our base in Brentwood, for wireless intruder alarms in period homes, BS 5839-6 fire alarms for HMOs and shared housing, and commercial CCTV and access control along the high street.',
    residential: ['Streatham Hill', 'Streatham Common', 'Streatham Vale', 'Brixton Hill', 'Tulse Hill', 'Clapham Park'],
    propertyStock:
      'Streatham and its neighbours were built across a century and a half. Brixton Hill has early 19th-century town houses, and Tulse Hill had a continuous line of detached villas by 1843, many later replaced by council housing. Streatham High Road is mostly late 19th century, Telford Park was laid out between 1878 and 1882, and the Leigham Court Estate was built by the Artizans, Labourers and General Dwellings Company between 1889 and 1928 as long terraces of purpose-built flats and houses. The Hyde Farm Estate, near Clapham Park, followed between 1896 and 1916. In the 1930s large blocks of flats went up along the High Road and on Brixton Hill, such as Tudor Close of 1933, and the Tulse Hill estate was begun in the mid-1930s. Clapham Park, first laid out by Thomas Cubitt from 1825, was largely rebuilt by the London County Council and is now being regenerated by Metropolitan Thames Valley Housing, which reported 843 homes completed or started there since 2022 as of October 2025. A mansion flat, a model-dwelling terrace and a new apartment each need a different specification, so we survey before quoting.',
    securityContext:
      'Where Streatham\'s large Victorian and Edwardian houses have been converted into flats or shared homes, door entry and fire detection for the shared areas come into the specification, along with BS 5839-6 fire alarm systems where a property is let as an HMO. Houses still in single occupation need wireless intruder alarms that avoid disturbing period interiors, with side and rear access covered. The interwar mansion blocks along the High Road and Brixton Hill need door entry and access control for their shared entrances. The area has many conservation areas, including Streatham High Road and Streatham Hill, Telford Park, Leigham Court Estate and Rush Common and Brixton Hill, so external equipment should be sited discreetly. Shops along the high street need CCTV positioned for identification at the doors.',
    commercial:
      'Streatham and Brixton are both major town centres in the London Plan, and West Norwood and Tulse Hill a district centre. Streatham High Road, running from Streatham Hill to Streatham Common, has shops, cinemas, churches and public buildings, including the Tate library and St Leonard\'s Church, whose original building dates from the 1350s. Brixton Hill has shopping parades and late Victorian pubs, and the Streatham Hub beside Streatham station brought a new leisure centre and a supermarket with flats above. Shops, pubs and leisure premises need shopfront CCTV, intruder alarms and fire detection sized against the fire risk assessment. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Streatham Hill',
        note: 'Early and mid 20th-century shops, entertainment buildings and mansion blocks along Streatham Hill, with the Telford Park and Leigham Court Estate conservation areas behind. Door entry for mansion blocks and wireless alarms for period houses.',
      },
      {
        name: 'Streatham Common',
        note: '19th-century houses around the common and The Rookery gardens, opened to the public in 1913, in the Streatham Common conservation area.',
      },
      {
        name: 'Streatham Park',
        note: 'Queen Anne-style houses from the 1880s to the interwar period, many overlooking Tooting Bec Common, on both the Lambeth and Wandsworth sides.',
      },
      {
        name: 'Brixton Hill',
        note: 'Early 19th-century town houses, Victorian terraces and 1930s blocks of flats such as Tudor Close along the A23, in the Rush Common and Brixton Hill conservation area.',
      },
      {
        name: 'Tulse Hill',
        note: 'A Lambeth district of 1930s and later council estates, including the Tulse Hill estate, beside Brockwell Park, with a Southern and Thameslink station.',
      },
      {
        name: 'Clapham Park',
        note: 'Thomas Cubitt\'s estate of 1825 onwards, largely rebuilt by the London County Council and now being regenerated by Metropolitan Thames Valley Housing, with the Edwardian Hyde Farm Estate nearby.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you cover Brixton Hill, Tulse Hill and Clapham Park as well as Streatham?',
        answer:
          'Yes. We cover SW2 and SW16, including Streatham Hill, Streatham Common, Streatham Vale, Brixton Hill, Tulse Hill and Clapham Park. Our engineers travel from our base in Brentwood, and we agree an appointment time with you when you call.',
      },
      {
        question: 'Do you fit BS 5839-6 fire alarms in converted houses and HMOs in Streatham?',
        answer:
          'Yes. Where a house has been converted into flats or is let as an HMO, we design and install BS 5839-6 fire alarm systems to the grade and category set by the fire risk assessment and the council\'s licensing schedule, and we can service them afterwards. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
      },
      {
        question: 'Can you fit door entry to a mansion block on Streatham High Road or Brixton Hill?',
        answer:
          'Yes. We install, maintain and take over door entry and access control for blocks of flats, including the interwar mansion blocks along Streatham High Road and Brixton Hill, and survey any existing system first to confirm what can be kept.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Streatham',
    metaDescription:
      'Security installers covering Streatham, Streatham Hill, Brixton Hill, Tulse Hill and Clapham Park (SW2, SW16). Burglar alarms, CCTV and fire alarms.',
    extraKeywords: [
      'burglar alarms streatham',
      'fire detection system streatham',
      'cctv installation streatham',
      'burglar alarms brixton hill',
      'alarm installers tulse hill',
      'door entry systems streatham',
      'fire alarms streatham',
    ],
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
  clapham: {
    description:
      'Clapham lies mostly in the London Borough of Lambeth, with part of Clapham Common and its western side in Wandsworth. This page also covers Stockwell and the Oval side of Kennington in SW9, and Balham in SW12, which is in Wandsworth. The area runs from Georgian and Regency houses around Clapham Common to Victorian terraces, mansion flats and post-war estates, with busy high streets at Clapham High Street, Stockwell and Balham.',
    commuting: 'Northern line from Clapham North, Clapham Common, Clapham South, Stockwell, Oval and Balham; Victoria line from Stockwell; London Overground from Clapham High Street and Wandsworth Road; Southern from Balham.',
    whyLocal:
      'Our engineers travel to Clapham, Stockwell, Oval and Balham from our base in Brentwood, for burglar alarms, CCTV, fire alarms and access control in homes, blocks of flats and businesses.',
    residential: ['Clapham Old Town', 'Clapham North', 'Abbeville', 'Stockwell', 'Oval', 'Balham'],
    propertyStock:
      'Around Clapham Common and the Old Town are large Queen Anne, Georgian and Regency houses, such as 113 North Side, built in 1763, and Holy Trinity Church on the common dates from 1776. Stockwell developed in the 19th century as an elegant middle-class suburb, and the villas of Stockwell Park were mostly built between 1825 and 1840, while the terraced streets of Kennington, around the Oval, developed from the late 18th century onwards. Later in the 19th century came the grid of Victorian streets around Abbeville Road and the terraces of Albert Square and Larkhall. Balham grew after the railway arrived in 1856, with the early Edwardian Dinsmore Road estate; to the south, towards Tooting Bec Common and in SW17, are the Heaver Estate of about 1890 to 1910 and Du Cane Court, a 1930s block of 676 flats. Clapham has social housing on estates from the 1930s and 1960s, and Stockwell\'s post-war estates include Stockwell Park, Lansdowne Green and Spurgeon. A Georgian house on the common and a flat on a 1960s estate need very different systems, so we survey before quoting.',
    securityContext:
      'Where a large period house has been divided into flats, each flat needs its own entry points covered and the shared front door needs door entry; where it remains one home, wireless intruder alarms avoid disturbing decorated interiors, and side and rear access need covering as well as the front. The mansion blocks of Clapham Common North Side, such as Grove Mansions of 1896, and of Balham, such as Du Cane Court, need door entry and access control for their shared entrances. Much of the area is in conservation areas, from Clapham and Stockwell Park in Lambeth to Clapham Common, Heaver Estate and Nightingale Lane in Wandsworth, so external equipment should be sited discreetly. On the high streets, shops and restaurants need CCTV and intruder alarms, and fire detection sized against the fire risk assessment.',
    commercial:
      'Clapham High Street, Stockwell and Balham are all district town centres in the London Plan. Clapham High Street began as 18th and early 19th-century houses converted to shops, with whole new blocks added in the late 19th and early 20th centuries. The Old Town, Abbeville Road and Nightingale Lane have smaller parades, Venn Street has a cinema, restaurants and a weekend food market, and Balham High Road grew into a commercial street of shops, banks and entertainment after the railway arrived in 1856. Retail and hospitality premises need shopfront CCTV, intruder alarms and fire detection sized against the fire risk assessment, and flats above shops need door entry. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Clapham Common and Old Town',
        note: 'Georgian and Regency houses around the common and the Old Town, in the Clapham conservation area, with Holy Trinity Church of 1776 and the Grade II listed bandstand of 1890. Wireless alarms and discreet external equipment suit the setting.',
      },
      {
        name: 'Clapham North and Larkhall',
        note: '19th-century terraces either side of Clapham Road, including the Larkhall and Sibella Road conservation areas, near Clapham North and Clapham High Street stations.',
      },
      {
        name: 'Abbeville',
        note: 'A grid of late Victorian streets around Abbeville Road, with a parade of shops with flats above in the Abbeville Road conservation area.',
      },
      {
        name: 'Stockwell',
        note: 'An early 19th-century suburb whose villas survive in the Stockwell Park conservation area, with Albert Square and Lansdowne Gardens nearby and post-war estates. Northern and Victoria lines at Stockwell.',
      },
      {
        name: 'Oval',
        note: 'The part of Kennington around The Oval cricket ground, where SE11 meets SW8 and SW9, with terraced housing from the late 18th century onwards in the Kennington and St Marks conservation areas.',
      },
      {
        name: 'Balham',
        note: 'A Wandsworth town centre on Balham High Road, with the early Edwardian Dinsmore Road estate and the larger houses of Nightingale Lane, and Du Cane Court and the Heaver Estate to the south in SW17. Door entry for mansion blocks and wireless alarms for period houses.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you cover Stockwell, Oval and Balham as well as Clapham?',
        answer:
          'Yes. This page covers Clapham (SW4), Stockwell and the Oval side of Kennington (SW9), and Balham (SW12), across the London Boroughs of Lambeth and Wandsworth. Our engineers travel from our base in Brentwood, and we agree an appointment time with you when you call.',
      },
      {
        question: 'Can you fit an alarm to a Georgian or Victorian house near Clapham Common?',
        answer:
          'Yes. Wireless intruder alarms avoid chasing cables into decorated walls, and we cover side and rear access as well as the front door. Much of the area around the common is in the Clapham and Clapham Common conservation areas, so we site sounders and cameras discreetly. If you are unsure whether a change to the outside of the property needs consent, check with Lambeth or Wandsworth Council\'s planning team before any external equipment is fitted.',
      },
      {
        question: 'Do you install door entry for mansion blocks in Balham and Clapham?',
        answer:
          'Yes. We install, maintain and take over door entry and access control for blocks of flats, including mansion blocks, and survey any existing system first to confirm what can be kept.',
      },
    ],
    metaTitle: 'Burglar Alarms, CCTV & Fire Alarms in Clapham',
    metaDescription:
      'Security installers covering Clapham, Stockwell, Oval and Balham (SW4, SW9, SW12). Burglar alarms, CCTV, door entry and fire alarms. SSAIB and BAFE.',
    extraKeywords: [
      'burglar alarm clapham',
      'burglar alarms clapham',
      'cctv installation clapham',
      'burglar alarms balham',
      'burglar alarms stockwell',
      'door entry systems clapham',
      'fire alarms clapham',
      'alarm installers sw4',
    ],
  },
  'chelsea-and-kensington': {
    description:
      'Chelsea, Brompton, Earl\'s Court, South Kensington and Knightsbridge lie in the south of the Royal Borough of Kensington and Chelsea, with part of Knightsbridge in the City of Westminster. The area is one of Georgian and Victorian terraces, garden squares, mews houses and mansion blocks, with the international shopping centre of Knightsbridge, the King\'s Road, and the museums of South Kensington.',
    commuting: 'District, Circle and Piccadilly lines from South Kensington, Gloucester Road, Sloane Square, Earl\'s Court and Knightsbridge; District line and London Overground from West Brompton.',
    whyLocal:
      'Our engineers travel to Chelsea, Kensington and Knightsbridge from our base in Brentwood, for intruder alarms, CCTV, access control and fire alarms in period houses, mansion flats, mews houses and commercial premises.',
    residential: ['Chelsea', 'Brompton', 'South Kensington', 'Earl\'s Court', 'West Brompton', 'Knightsbridge'],
    propertyStock:
      'Most of the area was laid out between the late 18th century and the late 19th, with rebuilding in parts of Chelsea up to the 1950s. Chelsea Common came first, from the late 18th century, together with Hans Town, which Henry Holland laid out around Sloane Street. Brompton Square followed in the 1820s, and in South Kensington the Thurloe Estate and Smith\'s Charity estate was built up from the 1830s, with Pelham Crescent between 1833 and 1838 and Thurloe Square from 1840 to 1846. The Boltons and Redcliffe Square, in West Brompton, were developed between 1850 and 1876 in an Italianate style, and Earl\'s Court was built up after the Metropolitan District Railway was authorised in 1864, with mansion blocks around Earl\'s Court Square in the 1890s. The result is a borough of terraces, villas, squares, crescents, mansion blocks and mews, where a high proportion of homes are flats, over 4,000 buildings are listed and there are more than 100 garden squares. A mews house, a stucco terrace and a mansion flat each need a different specification, so we survey before quoting.',
    securityContext:
      'Security here is shaped by the buildings\' age and value. Georgian and Victorian terraces and mews houses need intruder alarms that avoid disturbing period interiors, which usually means wireless systems or carefully concealed wiring, and cover for mews doors, basements and rear access as well as the front. Mansion blocks and converted houses need door entry and access control for shared entrances, and communal fire detection. Nearly three quarters of the Royal Borough is covered by its 38 conservation areas, and over 4,000 buildings are listed, so external sounders and cameras need careful, discreet siting, and consent may be needed for changes to a listed building. Shops, galleries and offices on the King\'s Road, Brompton Road and in South Kensington need CCTV, intruder alarms and commercial fire alarm systems to BS 5839-1.',
    commercial:
      'The Royal Borough\'s largest town centre is Knightsbridge, an international shopping centre anchored by Harrods on Brompton Road. The King\'s Road is a major centre, anchored at its eastern end by Peter Jones at Sloane Square and the Duke of York Square development, with the Royal Court, Cadogan Hall and the Saatchi Gallery nearby, while its western end is known for furniture and design retailers. South Kensington, Brompton Cross and Earl\'s Court Road are district centres, and South Kensington is the borough\'s cultural centre, home to the Victoria and Albert Museum, the Natural History Museum, the Science Museum and Imperial College. The Lots Road area by Chelsea Harbour is an employment zone. Premises range from department stores, shops and galleries to offices and institutions, and need CCTV, access control, intruder alarms and BS 5839-1 fire alarm systems with a servicing contract. J&L Security is BAFE accredited for the installation and maintenance of fire alarms.',
    neighbourhoods: [
      {
        name: 'Chelsea',
        note: 'Laid out from the early 19th century up to the 1950s, from small two-storey terraced houses to five-storey terraces and flats, with shops on the King\'s Road, Fulham Road and Walton Street. Wireless alarms and discreet external equipment suit the conservation areas.',
      },
      {
        name: 'Royal Hospital',
        note: 'Georgian and Victorian terraces between the King\'s Road and the Embankment, around the Royal Hospital, founded in 1682 and home of the Chelsea Flower Show since 1913.',
      },
      {
        name: 'Brompton and Knightsbridge',
        note: 'Brompton Square of the 1820s and grand houses on Brompton Road, with two-storey cottages and former mews behind, and Harrods. Part of Knightsbridge is in the City of Westminster.',
      },
      {
        name: 'South Kensington',
        note: 'The Thurloe Estate and Smith\'s Charity squares and crescents of the 1830s and 1840s, and Queen\'s Gate, where most of the 14 mews terraces are now homes, beside the museums.',
      },
      {
        name: 'Earl\'s Court',
        note: 'Terraces built after the District Railway, and 1890s mansion blocks around Earl\'s Court Square, with a range of property types and tenures. Door entry and access control for mansion blocks.',
      },
      {
        name: 'West Brompton and The Boltons',
        note: 'Italianate houses of 1850 to 1876 around The Boltons and Redcliffe Square, bounded by Brompton Cemetery, a Grade I registered landscape.',
      },
    ],
    localFaqs: [
      {
        question: 'Can you fit an alarm to a listed house or mews house in Chelsea or Kensington?',
        answer:
          'Yes. Wireless intruder alarms, or carefully concealed wiring, avoid disturbing period interiors, and we cover mews doors and rear access as well as the front. Over 4,000 buildings in the Royal Borough are listed and nearly three quarters of it is in conservation areas, so check with Kensington and Chelsea Council\'s planning team whether consent is needed before any external equipment is fitted.',
      },
      {
        question: 'Do you cover Earl\'s Court, South Kensington and Knightsbridge?',
        answer:
          'Yes. We cover SW3, SW5, SW7 and SW10, including Chelsea, Brompton, Earl\'s Court, South Kensington, West Brompton and Knightsbridge, on both the Kensington and Chelsea and the Westminster sides. Our engineers travel from our base in Brentwood, and we agree an appointment time with you when you call.',
      },
      {
        question: 'Do you install door entry and access control in mansion blocks?',
        answer:
          'Yes. We install, maintain and take over door entry, access control and communal fire detection for mansion blocks and converted houses, and survey any existing system first to confirm what can be kept. J&L Security is BAFE accredited for the installation and maintenance of fire alarms. We are also SSAIB approved.',
      },
    ],
    metaTitle: 'Burglar Alarms & CCTV in Chelsea and Kensington',
    metaDescription:
      'Security installers covering Chelsea, Brompton, Earl\'s Court, South Kensington and Knightsbridge (SW3, SW5, SW7, SW10). Alarms, CCTV and access control.',
    extraKeywords: [
      'burglar alarms chelsea',
      'burglar alarm chelsea',
      'cctv installation chelsea',
      'burglar alarms kensington',
      'burglar alarms knightsbridge',
      'access control chelsea',
      'alarm installers south kensington',
      'security company chelsea',
    ],
  },
};

const serviceIcons = {
  'burglar-alarms': Shield,
  'cctv-systems': Camera,
  'fire-alarms': Flame,
  'access-control': Lock,
  'security-lighting': Lightbulb,
} as const;

const genericLocationFaqs = (locationName: string, noTimePromises = false) => [
  ...(noTimePromises
    ? []
    : [
        {
          question: `Do you offer same-day security surveys in ${locationName}?`,
          answer: `Yes. We offer free same-day security surveys across ${locationName} and the surrounding area. Call us before noon and we can usually arrange an afternoon visit.`,
        },
        {
          question: `How quickly can you respond to an emergency alarm fault in ${locationName}?`,
          answer: `For customers on our maintenance contract we aim to respond to emergency call-outs in ${locationName} within 2–4 hours, 24 hours a day, 7 days a week.`,
        },
      ]),
  {
    question: `What security systems do you install in ${locationName}?`,
    answer: `We install the full range of security systems in ${locationName}: burglar alarms (wired and wireless), CCTV, fire alarms (domestic and commercial), access control, door entry, and security lighting.`,
  },
  {
    question: `Are you based near ${locationName}?`,
    answer: noTimePromises
      ? `J&L Security is based in Brentwood, Essex. Our engineers travel to ${locationName} for surveys, installations and maintenance, and we agree an appointment time with you when you call.`
      : `J&L Security is based in Brentwood, Essex, giving us excellent coverage across ${locationName} and the surrounding areas. Our engineers work throughout Essex and Greater London daily.`,
  },
  {
    question: `Do you provide maintenance contracts in ${locationName}?`,
    answer: noTimePromises
      ? `Yes. We offer annual maintenance contracts for all systems we install in ${locationName}, covering regular servicing visits and software updates.`
      : `Yes. We offer annual maintenance contracts for all systems we install in ${locationName}, covering regular servicing visits, priority emergency response, and software updates.`,
  },
  {
    question: `Do you install and service fire alarms in ${locationName}?`,
    answer: `Yes. We are a BAFE-certified fire alarm maintainer covering ${locationName} and the surrounding area. We install commercial systems to BS 5839-1, domestic and HMO systems to BS 5839-6, and provide 6-monthly servicing contracts for both. We also carry out fire risk assessments where required.`,
  },
  {
    question: `Can you install or repair smoke alarms in ${locationName}?`,
    answer: `Yes. We carry out smoke alarm installs and smoke alarm repair for domestic properties and HMOs in ${locationName} under BS 5839-6, including Grade D mains-powered interlinked systems suitable for landlord licensing requirements.`,
  },
];

// Town-specific questions lead, because they are the ones that answer a local
// search. The generic set follows and is unchanged for towns without local FAQs.
const locationFaqs = (locationName: string, ext?: LocationExtended, noTimePromises = false) => [
  ...(ext?.localFaqs ?? []),
  ...genericLocationFaqs(locationName, noTimePromises),
];

// ─── Page component ──────────────────────────────────────────────────────────

type Props = { params: Promise<{ location: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) return {};
  const ext = locationExtended[locationSlug];

  // Where a town has measured search demand for specific service and
  // neighbourhood terms, lead the title and description with those rather than
  // with the generic template, which returns the same snippet for every town.
  const title = ext?.metaTitle ?? `Security Systems ${location.name}: Alarms, CCTV & Fire Protection`;
  const description =
    ext?.metaDescription ??
    `Professional security system installation in ${location.name}, ${location.county}. Burglar alarms, CCTV, fire alarms, access control. Free surveys, same-day service. Call J&L Security.`;

  return {
    title,
    description,
    keywords: [
      `security systems ${location.name}`,
      `burglar alarm ${location.name}`,
      `CCTV installation ${location.name}`,
      `fire alarm ${location.name}`,
      `alarm installer ${location.name}`,
      `security company ${location.name}`,
      `${location.postcode} security`,
      ...(ext?.extraKeywords ?? []),
    ],
    alternates: { canonical: `${COMPANY_INFO.website}/locations/${locationSlug}` },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) notFound();

  const ext = locationExtended[locationSlug];
  const faqs = locationFaqs(location.name, ext, location.noTimePromises);

  // Service-location pages for this area
  const localPages = serviceLocationMatrix.filter(
    (item) => item.location.toLowerCase().replace(/ /g, '-') === locationSlug
  );

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQPageSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Locations', url: `${COMPANY_INFO.website}/locations` },
    { name: location.name, url: `${COMPANY_INFO.website}/locations/${locationSlug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                {location.county} · {location.postcode}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Security Systems in {location.name}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Professional burglar alarms, CCTV, fire alarms and access control, installed and maintained by {location.noTimePromises ? 'our engineers' : 'local engineers'} across {location.name} and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Call {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone2}`}
                    className="text-primary-200 hover:text-white text-sm text-center transition-colors"
                  >
                    or call {COMPANY_INFO.phone2}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center"
                >
                  Free Survey in {location.name}
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us / local info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Security Services in {location.name}
              </h2>
              {ext && (
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{ext.description}</p>
              )}
              {ext && (
                <p className="text-gray-700 leading-relaxed mb-6">{ext.whyLocal}</p>
              )}

              {ext?.propertyStock && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                    Property in {location.name}: What It Means for a Security System
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{ext.propertyStock}</p>
                </>
              )}

              {ext?.securityContext && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                    {location.noTimePromises ? `Typical Requirements in ${location.name}` : `What We Are Usually Asked to Do in ${location.name}`}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{ext.securityContext}</p>
                </>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-primary-50 rounded-xl p-5">
                  <Clock className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{location.noTimePromises ? 'Free Surveys' : 'Same-Day Surveys'}</h3>
                  <p className="text-sm text-gray-600">
                    {location.noTimePromises
                      ? `No-obligation security assessments across ${location.name}, booked at a time that suits you`
                      : `Free security assessments available today across ${location.name}`}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <Shield className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{location.noTimePromises ? 'Maintenance Contracts' : '24/7 Emergency Cover'}</h3>
                  <p className="text-sm text-gray-600">
                    {location.noTimePromises
                      ? 'Servicing contracts for the alarm, CCTV, fire and access control systems we install'
                      : 'Round-the-clock emergency callouts for alarm faults and break-ins'}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Accredited Engineers</h3>
                  <p className="text-sm text-gray-600">SSAIB, CHAS, FIA and BAFE certified, with installation to SSAIB standards</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <MapPin className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{location.noTimePromises ? 'Based in Brentwood' : 'Locally Based'}</h3>
                  <p className="text-sm text-gray-600">
                    {location.noTimePromises
                      ? `Our engineers travel from our Brentwood base to ${location.name}`
                      : `Engineers working from our Brentwood base cover ${location.name} daily`}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Local Area</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Postcode:</span>
                    <span className="text-gray-600 ml-2">{location.postcode}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">County:</span>
                    <span className="text-gray-600 ml-2">{location.county}</span>
                  </div>
                  {ext?.population && (
                    <div>
                      <span className="font-medium text-gray-700">Population:</span>
                      <span className="text-gray-600 ml-2">{ext.population}</span>
                    </div>
                  )}
                  {ext && (
                    <div>
                      <span className="font-medium text-gray-700">Transport:</span>
                      <span className="text-gray-600 ml-2">{ext.commuting}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Landmarks</h3>
                <ul className="space-y-1">
                  {location.landmarks.map((landmark) => (
                    <li key={landmark} className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary-400 flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
              {/* The chip list is the fallback. Towns with detailed neighbourhood
                  content get the fuller section further down the page instead. */}
              {ext && !ext.neighbourhoods && ext.residential.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Areas We Cover</h3>
                  <div className="flex flex-wrap gap-2">
                    {ext.residential.map((area) => (
                      <span key={area} className="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Neighbourhood detail. Only rendered for towns that carry it. */}
      {ext?.neighbourhoods && ext.neighbourhoods.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Areas We Cover in and around {location.name}
              </h2>
              <p className="text-gray-600 text-lg">
                {location.noTimePromises
                  ? `What is needed varies street by street. These are the parts of ${location.name} this page covers, and the requirements typical of each.`
                  : `What we are typically asked for varies street by street. These are the parts of ${location.name} we work in most often, and the requirements that come up in each.`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ext.neighbourhoods.map((area) => (
                <div key={area.name} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commercial and industrial detail. Only rendered for towns that carry it. */}
      {ext?.commercial && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Commercial Security in {location.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{ext.commercial}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Book a Free Commercial Survey
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Services available */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Services Available in {location.name}
            </h2>
            <p className="text-gray-600 text-lg">All services installed and maintained by our {location.noTimePromises ? '' : 'local '}engineers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Shield;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-primary-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 inline-flex items-center gap-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specific local service pages */}
      {localPages.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Specialist Services in {location.name}
              </h2>
              <p className="text-gray-600">Dedicated pages for common security requests in your area</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {localPages.map((item) => {
                return (
                  <Link
                    key={item.slug}
                    href={serviceLocationPath(item)}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
                        {item.service} in {item.location}
                      </p>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      {location.nearbyAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Also Cover Near {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {location.nearbyAreas.map((area) => {
                const areaSlug = area.toLowerCase().replace(/ /g, '-');
                const hasPage = locations.some((l) => l.slug === areaSlug);
                return hasPage ? (
                  <Link
                    key={area}
                    href={`/locations/${areaSlug}`}
                    className="bg-white border-2 border-transparent hover:border-primary-400 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all"
                  >
                    {area}
                  </Link>
                ) : (
                  <span key={area} className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {area}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Security Questions for {location.name}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-primary-500 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Security Survey in {location.name}</h2>
          <p className="text-xl mb-8 text-primary-100">
            {location.noTimePromises
              ? `Our qualified engineers cover ${location.name} and the surrounding areas. No-obligation assessment, booked at a time that suits you.`
              : `Our qualified engineers cover ${location.name} and all surrounding areas. No-obligation assessment, with same-day appointments available.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {COMPANY_INFO.phone}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="text-primary-200 hover:text-white text-sm text-center transition-colors"
              >
                or call {COMPANY_INFO.phone2}
              </a>
            </div>
            <a
              href={whatsappLink(`Hi, I'd like a free security survey in ${location.name}`)}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
