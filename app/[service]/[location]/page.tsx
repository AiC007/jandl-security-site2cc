import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, CalendarDays, Shield, CheckCircle, MapPin } from 'lucide-react';
import { serviceLocationMatrix } from '@/lib/data';
import { COMPANY_INFO } from '@/lib/utils';
import { generateFAQPageSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import QuickQuoteForm from '@/components/QuickQuoteForm';

interface ServiceLocationPageProps {
  params: Promise<{
    service: string;
    location: string;
  }>;
}

// Extended location data with landmarks and local info
interface LocationData {
  landmarks: string[];
  commuterRoutes: string[];
  nearbyAreas: string[];
  localCharacteristics: string;
  postcode: string;
  // Optional enrichment for priority SEO locations (Brentwood, Romford, Ilford,
  // Chelmsford, Upminster). Used by the matrix template to render a local
  // security context block, property type list, key industries list, and
  // location-specific FAQs that are appended to the FAQPage schema.
  localSecurityContext?: string;
  propertyTypes?: string[];
  keyIndustries?: string[];
  locationFAQs?: Array<{ question: string; answer: string }>;
}

const extendedLocationData: Record<string, LocationData> = {
  'ilford': {
    landmarks: ['Ilford Station', 'The Exchange Shopping Centre', 'Valentines Park', 'Redbridge Town Hall'],
    commuterRoutes: ['Elizabeth Line to Central London', 'Great Eastern Main Line to Liverpool Street'],
    nearbyAreas: ['Seven Kings', 'Goodmayes', 'Redbridge', 'Gants Hill', 'Newbury Park'],
    localCharacteristics: 'busy commercial centre with excellent transport links',
    postcode: 'IG1-IG6',
    localSecurityContext: 'Ilford is one of the most densely populated areas in Greater London, with a major retail centre at The Exchange and significant commercial activity along Ilford Hill and Cranbrook Road. The borough\'s mix of large retail, high-density residential, and HMO-conversion stock creates substantial demand for both intruder alarm systems and graded commercial CCTV. Higher-footfall town-centre areas carry elevated opportunistic-crime risk, and a number of insurance providers specify Grade 2 monitored systems for IG1 commercial premises.',
    propertyTypes: [
      'Victorian and Edwardian terraced housing across Valentines and Cranbrook',
      'High-density residential blocks and modern flats around Ilford Station',
      'HMO conversions across Seven Kings and Goodmayes',
      'Town-centre retail and commercial units along the High Road and at The Exchange',
      'Office and professional services premises along Cranbrook Road'
    ],
    keyIndustries: [
      'Retail (The Exchange and Ilford High Road)',
      'Healthcare (King George Hospital and surrounding clinics)',
      'Hospitality and food service',
      'Faith and community organisations',
      'Education and private tuition'
    ],
    locationFAQs: [
      {
        question: 'What burglar alarm grades do you install in Ilford residential properties?',
        answer: 'For most Ilford residential properties (terraced and semi-detached, IG1 to IG6), we install Grade 2 systems to EN 50131. Grade 2 covers the typical risk profile of suburban Ilford housing and is sufficient for the majority of UK home insurers. For higher-value properties or those flagged by insurers as higher-risk (typically £100,000+ contents), we install Grade 3 systems with additional anti-tamper resilience and confirmed-activation criteria. Both grades are eligible for police response under the URN scheme through our SSAIB approval.'
      },
      {
        question: 'Do you install commercial CCTV systems for Ilford retail and shop premises?',
        answer: 'Yes. We design and install commercial CCTV across Ilford retail and hospitality premises, particularly along the High Road, around The Exchange, and through the Ilford Hill commercial corridor. Standard installations use Uniview IP cameras (2MP to 8MP, depending on detail required), an on-site NVR, and the Uniview EZView app for remote viewing. We design to ICO CCTV Code of Practice standards, including signage, retention period, and DPIA support where required. All systems include night vision and are graded to commercial standards.'
      },
      {
        question: 'Do you cover the IG1 to IG6 postcodes from a single Ilford-area engineer?',
        answer: 'Yes. Ilford and the surrounding IG1 to IG6 postcodes (Seven Kings, Goodmayes, Newbury Park, Gants Hill, Redbridge, Barkingside) are within our daily routing from Brentwood. We dispatch the closest available engineer for callouts and surveys, and most locations across the IG belt receive a same-day or next-day appointment.'
      },
      {
        question: 'Is J&L Security SSAIB approved for the police-response URN scheme in Ilford?',
        answer: 'Yes. J&L Security is SSAIB approved, which is one of the two UK inspectorates (the other is NSI) accredited to install and maintain monitored alarm systems eligible for police response under the URN (Unique Reference Number) scheme. For Ilford properties, this means a monitored Grade 2 or 3 system installed by us is eligible for direct police dispatch under the Met Police\'s confirmed-activation policy. We handle the URN registration on the customer\'s behalf as part of the installation.'
      }
    ]
  },
  'romford': {
    landmarks: ['Romford Station', 'The Liberty Shopping Centre', 'Raphael Park', 'Romford Market'],
    commuterRoutes: ['TfL Rail to Liverpool Street', 'Greater Anglia services'],
    nearbyAreas: ['Hornchurch', 'Upminster', 'Emerson Park', 'Harold Wood', 'Collier Row'],
    localCharacteristics: 'major town centre with strong commercial and residential areas',
    postcode: 'RM1-RM3',
    localSecurityContext: 'Romford combines a high-density residential population with one of East London\'s busiest town centres, including The Liberty Shopping Centre and Romford Market. Higher-footfall retail and night-time economy areas around South Street and the market square have elevated rates of opportunistic theft and shoplifting, and many commercial premises specify Grade 2 or 3 monitored systems. A large proportion of housing across Heath Park, Rush Green, and Collier Row is Victorian and Edwardian terraced, well suited to wireless intruder alarm systems where finished interiors restrict cable runs.',
    propertyTypes: [
      'Victorian and Edwardian terraced housing across Heath Park and Rush Green',
      'Inter-war and 1930s semi-detached homes',
      'Town-centre retail and hospitality units around The Liberty and South Street',
      'HMO conversions across Heath Park, Romford town centre, and the RM1 cluster',
      'Office and commercial space along the Western Road and Eastern Road corridors'
    ],
    keyIndustries: [
      'Retail (The Liberty Shopping Centre, Romford Market, and out-of-town parks)',
      'Hospitality and night-time economy (South Street, Market Place)',
      'Healthcare (Queen\'s Hospital and feeder clinics)',
      'Logistics and distribution along the A12 corridor',
      'Independent professional services and trade businesses'
    ],
    locationFAQs: [
      {
        question: 'Do you install burglar alarms in Romford town centre commercial properties?',
        answer: 'Yes. Romford town centre commercial work is one of our regular weekly patterns. For retail and hospitality premises around The Liberty Shopping Centre, South Street, and the Market Place, we typically install Grade 2 or Grade 3 monitored intruder alarm systems with confirmed-activation criteria, panic alarms at point of sale, and remote arm/disarm via the Pyronix or Texecom app. All systems are SSAIB-installed and eligible for police response under the URN scheme. We also handle integration with CCTV and access control where the premises require it.'
      },
      {
        question: 'How quickly can J&L Security respond to a callout in Romford?',
        answer: 'For customers on a maintenance contract, we aim to respond to emergency callouts in Romford within 2 to 4 hours, 24 hours a day, 7 days a week. From our Brentwood base, Romford is within our priority response zone and most callouts are met inside that window. For non-emergency surveys and quotes, we typically attend within 1 to 3 working days; same-day surveys are sometimes available if you call before noon.'
      },
      {
        question: 'Do you fit wireless alarms suitable for Victorian terraced housing in Romford?',
        answer: 'Yes. A large share of Romford\'s housing stock (Heath Park, Rush Green, Collier Row) is Victorian and Edwardian terraced with finished plaster, original floorboards, and limited loft access, which makes wireless systems significantly more practical than wired. We install Pyronix wireless systems with sealed lithium-cell sensors that have a 3 to 5 year battery life, no visible cable runs, and full smartphone control. The wireless premium is typically 15 to 25 per cent above the equivalent wired install.'
      },
      {
        question: 'Are your fire alarm engineers BAFE certified for Romford HMO and commercial work?',
        answer: 'Yes. J&L Security is BAFE certified and an FIA member, which is the standard required by most local authority HMO licence schedules and commercial fire risk assessors. For Romford HMOs (Havering Council licence schedule typically applies), we install BS 5839-6 Grade D1 systems for smaller properties and BS 5839-1 Grade A panel-controlled systems for larger HMOs. All installations include the BAFE handover certificate, log book, and 6-monthly servicing eligible to be cited in the council\'s licence file.'
      }
    ]
  },
  'chelmsford': {
    landmarks: ['Chelmsford Cathedral', 'High Chelmer Shopping Centre', 'Hylands Park', 'Essex County Cricket Ground'],
    commuterRoutes: ['Great Eastern Main Line to London', 'A12 corridor'],
    nearbyAreas: ['Brentwood', 'Billericay', 'Great Baddow', 'Galleywood', 'Springfield'],
    localCharacteristics: 'Essex county town with thriving business district',
    postcode: 'CM1-CM3',
    localSecurityContext: 'Chelmsford is one of the fastest-growing cities in the East of England, with a thriving business district anchored by the Chelmer Valley business park, an active retail centre at High Chelmer, and rapid expansion in residential new-builds across Springfield and Beaulieu Park. The mix of large commercial premises, university accommodation around ARU\'s Chelmsford campus, and growing housing stock generates demand across all five service categories. Commercial fire alarm work for office and business-park premises is a particular concentration here.',
    propertyTypes: [
      'New-build estate housing across Springfield, Beaulieu Park, and Channels',
      'Detached and semi-detached family homes across Galleywood and Great Baddow',
      'University accommodation and student lets around the ARU campus',
      'Town-centre retail and hospitality units around High Chelmer and Bond Street',
      'Commercial and office premises across the Chelmer Valley business park'
    ],
    keyIndustries: [
      'Professional services and finance',
      'Higher education (Anglia Ruskin University Chelmsford campus)',
      'Retail and hospitality (High Chelmer, Bond Street, and out-of-town parks)',
      'Healthcare (Broomfield Hospital and feeder clinics)',
      'Engineering and life sciences (Chelmer Valley business park)'
    ],
    locationFAQs: [
      {
        question: 'Is J&L Security SSAIB approved to install fire alarms in Chelmsford?',
        answer: 'Yes. For fire alarms, the relevant accreditations are BAFE (British Approvals for Fire Equipment) and FIA (Fire Industry Association) membership. J&L Security holds both. For intruder alarms, we are SSAIB approved (the Security Systems and Alarms Inspection Board), which is one of the two UK inspectorates accredited for police-response monitoring under the URN scheme. All Chelmsford installations, fire and intruder, are carried out under the relevant inspectorate\'s standards with full handover certification.'
      },
      {
        question: 'Do you install BS 5839-1 commercial fire alarms for Chelmsford business parks?',
        answer: 'Yes. We design, install, commission, and service BS 5839-1 commercial fire alarm systems across the Chelmer Valley business park, the Great Baddow industrial estate, and similar Chelmsford commercial sites. Standard installations use addressable panels from Advanced, C-Tek, or Kentec, with optical smoke detectors, heat detectors, manual call points, and sounder-beacons sized to the property. We deliver to the system category specified by the client\'s fire risk assessment (typically L1 to L4 for commercial premises) and include the commissioning certificate, log book, and 6-monthly service contract.'
      },
      {
        question: 'How quickly can your engineers attend a fire alarm callout in Chelmsford?',
        answer: 'For fire alarm customers on a maintenance contract, we target a 2 to 4 hour response to Chelmsford callouts during business hours, and within 4 hours out of hours, 24/7. Chelmsford is within easy reach of our Brentwood base via the A12 corridor. For non-urgent service visits, we work to scheduled 6-monthly slots agreed at the start of the contract.'
      },
      {
        question: 'Do you offer 6-monthly fire alarm servicing contracts for Chelmsford properties?',
        answer: 'Yes. BS 5839-1 requires fire alarm systems to be serviced by a competent engineer at intervals not exceeding 6 months (the 2025 update introduced a 5-to-7-month flexibility window). We offer fixed-price annual maintenance contracts that include both 6-monthly visits, full service certification, log-book updates, priority callout response, and emergency-light testing where applicable. Pricing for Chelmsford properties starts from around £180 per year for smaller installations and is quoted individually for larger commercial systems.'
      }
    ]
  },
  'brentwood': {
    landmarks: ['Brentwood High Street', 'Thorndon Country Park', 'Brentwood Centre', 'Warley Place'],
    commuterRoutes: ['Greater Anglia to Liverpool Street', 'M25 Junction 28'],
    nearbyAreas: ['Billericay', 'Wickford', 'Shenfield', 'Hutton', 'Ingatestone'],
    localCharacteristics: 'affluent commuter town with excellent transport connections',
    postcode: 'CM13-CM15',
    localSecurityContext: 'Brentwood is an affluent commuter belt town with a high proportion of detached and semi-detached family homes; high contents values across CM13 to CM15 drive insurance-linked demand for monitored Grade 2 and Grade 3 intruder alarms with police-response eligibility. The town centre and the Shenfield/Hutton retail spine generate steady commercial CCTV and access-control work. Properties are predominantly later 20th-century, with smaller pockets of period and listed buildings around Warley, Ingatestone, and South Weald. J&L Security is based in Brentwood (CM13 3FR), so engineer travel times in this area are minimal.',
    propertyTypes: [
      'Detached and semi-detached family homes across CM13 to CM15',
      'Larger Edwardian and inter-war properties around Hutton and Shenfield',
      'Period and listed buildings around Warley, South Weald, and Ingatestone',
      'Town-centre retail and hospitality units along Brentwood High Street',
      'Small office and consultancy premises across the Brentwood business cluster'
    ],
    keyIndustries: [
      'Hospitality (independent restaurants and gastropubs)',
      'Retail (Brentwood High Street and out-of-town parks)',
      'Professional services and consultancy',
      'Independent healthcare (clinics and dental practices)',
      'Education (Brentwood School cluster and feeder prep schools)'
    ],
    locationFAQs: [
      {
        question: 'How quickly can J&L Security respond to a callout in Brentwood?',
        answer: 'J&L Security is based in Brentwood (CM13 3FR), so callout response times here are the fastest in our coverage area. For maintenance contract customers, we target 1 to 2 hours for emergency callouts in CM13 to CM15, 24 hours a day, 7 days a week. Most non-urgent surveys are arranged within 1 to 2 working days; same-day surveys are available on request if you call before noon.'
      },
      {
        question: 'What burglar alarm grades do you install in Brentwood residential properties?',
        answer: 'For most Brentwood family homes, we install Grade 2 systems to EN 50131. For higher-value properties (typically £150,000+ contents) and any property where the home insurer specifies it, we install Grade 3 systems with additional anti-tamper resilience and confirmed-activation criteria. Both grades are eligible for police response under the URN scheme through our SSAIB approval. We provide the certification documentation required by Brentwood-area home insurers for premium discount.'
      },
      {
        question: 'Do you cover Shenfield, Hutton, and Ingatestone alongside Brentwood?',
        answer: 'Yes. Shenfield, Hutton, Ingatestone, Mountnessing, Doddinghurst, Kelvedon Hatch, and the wider CM4 to CM15 belt are within our daily routing. Many of our long-standing customers in these areas have transitioned from older bell-only systems to monitored Grade 2 systems with smartphone control. Our engineer is typically on-site within 24 to 48 hours of an enquiry for surveys, and within 1 to 2 hours for emergency callouts on a maintenance contract.'
      },
      {
        question: 'Are J&L Security SSAIB and BAFE approved for installations in Brentwood?',
        answer: 'Yes. J&L Security is SSAIB approved (intruder alarms, eligible for police response under the URN scheme), BAFE certified (fire alarms), an FIA member (Fire Industry Association), and CHAS accredited (health and safety). All four are displayed on every page of our site and on our handover documentation. For Brentwood properties, this means you receive the certification documentation needed for both home insurance premium discounts and any commercial fire risk assessment requirement.'
      }
    ]
  },
  'basildon': {
    landmarks: ['Eastgate Shopping Centre', 'Basildon Sporting Village', 'Wat Tyler Country Park', 'Festival Leisure Park'],
    commuterRoutes: ['c2c line to London Fenchurch Street', 'A127 arterial road'],
    nearbyAreas: ['Wickford', 'Billericay', 'Laindon', 'Pitsea', 'Stanford-le-Hope'],
    localCharacteristics: 'new town with modern residential and commercial developments',
    postcode: 'SS13-SS16'
  },
  'hornchurch': {
    landmarks: ['Hornchurch Country Park', 'Queen\'s Theatre', 'Hornchurch Stadium', 'The Dell'],
    commuterRoutes: ['District Line to Central London', 'A127 to M25'],
    nearbyAreas: ['Romford', 'Upminster', 'Rainham', 'Elm Park', 'Emerson Park'],
    localCharacteristics: 'residential suburb with good transport links and local amenities',
    postcode: 'RM11-RM12'
  },
  'upminster': {
    landmarks: ['Upminster Windmill', 'Upminster Park', 'Hornchurch Stadium', 'Tithe Barn Museum'],
    commuterRoutes: ['District Line and c2c to Central London', 'M25 Junction 29'],
    nearbyAreas: ['Hornchurch', 'Cranham', 'Emerson Park', 'Harold Wood', 'South Ockendon'],
    localCharacteristics: 'quiet residential area popular with families and commuters',
    postcode: 'RM14',
    localSecurityContext: 'Upminster is a quiet, affluent suburb on the eastern edge of Greater London with a high proportion of family homes and an established older-resident population. Reported property crime rates are relatively low, but high contents values and frequent unoccupied periods (the typical Upminster commuter household pattern) drive insurance-linked demand for monitored Grade 2 intruder alarms with smartphone notification. Commercial demand centres on the small but active retail spine around Station Road and Upminster Bridge, plus the surrounding light-industrial fringe towards Hornchurch and South Ockendon.',
    propertyTypes: [
      'Detached and semi-detached family homes across RM14',
      'Bungalows and chalet-style properties around Cranham and Corbets Tey',
      'Smaller period and Victorian properties around Upminster village',
      'Town-centre retail and food units around Station Road and Upminster Bridge',
      'Light industrial premises towards Hornchurch and the South Ockendon border'
    ],
    keyIndustries: [
      'Retail (Station Road, Upminster Bridge, and Roomes Stores)',
      'Hospitality (independent restaurants, cafes, and gastropubs)',
      'Healthcare and dental practices',
      'Professional services and accountancy',
      'Light industry and trade businesses'
    ],
    locationFAQs: [
      {
        question: 'Do you install monitored burglar alarms in Upminster for insurance compliance?',
        answer: 'Yes. Insurance-linked monitored alarm work is one of our core patterns in Upminster. We install Grade 2 (the standard for most domestic properties) and Grade 3 (for higher-value contents) monitored intruder alarms eligible for police response under the URN scheme. Through our SSAIB approval, the systems satisfy the requirements of all major UK home insurers, including those that specifically require an "inspectorate-approved" or "NSI/SSAIB-certified" system. We provide all the certification documentation needed for the insurer file.'
      },
      {
        question: 'Can you fit wireless alarm systems in Upminster bungalows and period homes?',
        answer: 'Yes. Wireless systems are particularly well suited to Upminster bungalows (Cranham, Corbets Tey) and the smaller period properties around Upminster village, where finished interiors, single-storey cable runs, and the absence of accessible loft space make wired installations impractical. We install Pyronix wireless systems with 3 to 5 year sealed lithium-cell battery life, full smartphone control, and no visible cable runs. The wireless premium is typically 15 to 25 per cent above the equivalent wired install, but the disruption saving usually justifies it in this property type.'
      },
      {
        question: 'How quickly can J&L Security respond to a callout in Upminster?',
        answer: 'For maintenance contract customers, we target 2 to 4 hour response to emergency callouts in Upminster, 24 hours a day, 7 days a week. From our Brentwood base, Upminster is within our priority response zone via the A127. For non-emergency surveys, we typically attend within 1 to 2 working days; same-day surveys are available on request.'
      },
      {
        question: 'Do you cover Cranham, Corbets Tey, and South Ockendon alongside Upminster?',
        answer: 'Yes. Cranham, Corbets Tey, North Ockendon, South Ockendon, Aveley, and the wider RM14 to RM15 belt are within our daily routing from Brentwood. We also cover Hornchurch, Emerson Park, and Harold Wood as part of the same engineer route, so customers in the wider Upminster area receive the same response targets and survey availability as the town itself.'
      }
    ]
  },
  'barking': {
    landmarks: ['Barking Park', 'Eastbury Manor House', 'Broadway Theatre', 'Barking Abbey ruins'],
    commuterRoutes: ['District, Hammersmith & City, and Overground lines', 'A13 arterial road'],
    nearbyAreas: ['Dagenham', 'Ilford', 'East Ham', 'Chadwell Heath', 'Becontree'],
    localCharacteristics: 'riverside location with ongoing regeneration and transport improvements',
    postcode: 'IG11'
  },
  'goodmayes': {
    landmarks: ['Goodmayes Park', 'Mayesbrook Park', 'King George Hospital', 'Goodmayes Station'],
    commuterRoutes: ['Elizabeth Line to Central London', 'Great Eastern services'],
    nearbyAreas: ['Ilford', 'Seven Kings', 'Chadwell Heath', 'Becontree', 'Dagenham'],
    localCharacteristics: 'diverse residential area with excellent transport connectivity',
    postcode: 'IG3'
  },
  'seven-kings': {
    landmarks: ['Seven Kings Park', 'Mayesbrook Park', 'Seven Kings Station', 'Local shopping parade'],
    commuterRoutes: ['Elizabeth Line to Central London', 'Great Eastern Main Line'],
    nearbyAreas: ['Ilford', 'Goodmayes', 'Newbury Park', 'Manor Park', 'Forest Gate'],
    localCharacteristics: 'established residential area with strong community feel',
    postcode: 'IG3'
  },
  'dagenham': {
    landmarks: ['Valence House Museum', 'Central Park', 'Beam Park', 'Heathway shopping area'],
    commuterRoutes: ['District Line to Central London', 'A13 to City and Canary Wharf'],
    nearbyAreas: ['Barking', 'Romford', 'Rainham', 'Becontree', 'Chadwell Heath'],
    localCharacteristics: 'historic area undergoing significant regeneration with new housing',
    postcode: 'RM8-RM10'
  },
  'redbridge': {
    landmarks: ['Redbridge Central Library', 'King George V Park', 'Redbridge Museum', 'The Exchange'],
    commuterRoutes: ['Central Line to London', 'A12 Eastern Avenue'],
    nearbyAreas: ['Ilford', 'Wanstead', 'South Woodford', 'Gants Hill', 'Newbury Park'],
    localCharacteristics: 'leafy suburban area with good schools and transport links',
    postcode: 'IG4'
  },
  'wanstead': {
    landmarks: ['Wanstead Park', 'Wanstead Flats', 'George Green', 'Christ Church'],
    commuterRoutes: ['Central Line to London', 'A12 and North Circular connections'],
    nearbyAreas: ['Redbridge', 'South Woodford', 'Leytonstone', 'Manor Park', 'Forest Gate'],
    localCharacteristics: 'historic village atmosphere with Victorian and Edwardian properties',
    postcode: 'E11'
  },
  'harlow': {
    landmarks: ['Harlow Town Park', 'The Water Gardens', 'Harlow Museum', 'Gibberd Gallery'],
    commuterRoutes: ['National Rail to Liverpool Street', 'M11 junction 7'],
    nearbyAreas: ['Epping', 'Bishop\'s Stortford', 'Hertford', 'Sawbridgeworth', 'Old Harlow'],
    localCharacteristics: 'new town with modernist architecture and planned green spaces',
    postcode: 'CM17-CM20'
  },
  'chigwell': {
    landmarks: ['Chigwell Golf Club', 'Hainault Forest', 'King\'s Head pub', 'Chigwell Station'],
    commuterRoutes: ['Central Line to London', 'M25 Junction 26'],
    nearbyAreas: ['Loughton', 'Buckhurst Hill', 'Woodford Bridge', 'Hainault', 'Grange Hill'],
    localCharacteristics: 'affluent area known for period properties and green belt location',
    postcode: 'IG7'
  },
  'loughton': {
    landmarks: ['Epping Forest', 'Loughton Camp', 'Roding Valley Park', 'The Broadway'],
    commuterRoutes: ['Central Line to London', 'M25 access via M11'],
    nearbyAreas: ['Buckhurst Hill', 'Chigwell', 'Theydon Bois', 'Debden', 'Epping'],
    localCharacteristics: 'market town on the edge of Epping Forest with excellent transport links',
    postcode: 'IG10'
  },
  'buckhurst-hill': {
    landmarks: ['Queen Elizabeth\'s Hunting Lodge', 'Roding Valley Nature Reserve', 'The Broadway', 'Lords Bushes'],
    commuterRoutes: ['Central Line to London', 'North Circular access'],
    nearbyAreas: ['Loughton', 'Chigwell', 'Woodford', 'South Woodford', 'Walthamstow'],
    localCharacteristics: 'leafy suburban town with Victorian charm and forest proximity',
    postcode: 'IG9'
  },
  'woodford': {
    landmarks: ['Woodford Green', 'St. Barnabas Church', 'Sir Winston Churchill statue', 'Bancroft\'s School'],
    commuterRoutes: ['Central Line to London', 'North Circular and A406'],
    nearbyAreas: ['South Woodford', 'Buckhurst Hill', 'Chingford', 'Walthamstow', 'Redbridge'],
    localCharacteristics: 'historic area with village green atmosphere and period properties',
    postcode: 'IG8'
  },
  'walthamstow': {
    landmarks: ['Walthamstow Village', 'Lloyd Park', 'William Morris Gallery', 'Walthamstow Central'],
    commuterRoutes: ['Victoria Line to Central London', 'Overground services'],
    nearbyAreas: ['Leytonstone', 'Leyton', 'Tottenham', 'Wood Green', 'Chingford'],
    localCharacteristics: 'vibrant area undergoing gentrification with strong arts scene',
    postcode: 'E17'
  },
  'south-woodford': {
    landmarks: ['George Lane shopping area', 'Roding Valley Park', 'South Woodford Library', 'Woodford Wells'],
    commuterRoutes: ['Central Line to London', 'North Circular Road'],
    nearbyAreas: ['Woodford', 'Wanstead', 'Redbridge', 'Snaresbrook', 'Leytonstone'],
    localCharacteristics: 'residential suburb popular with young professionals and families',
    postcode: 'E18'
  },
  'emerson-park': {
    landmarks: ['Emerson Park Tennis Club', 'Nelmes Way shopping parade', 'The Chase nature area', 'Ardleigh Green'],
    commuterRoutes: ['Greater Anglia to Liverpool Street', 'A127 arterial road'],
    nearbyAreas: ['Hornchurch', 'Romford', 'Upminster', 'Harold Wood', 'Elm Park'],
    localCharacteristics: 'quiet residential area with 1930s housing and green spaces',
    postcode: 'RM11'
  },
  'epping': {
    landmarks: ['Epping Forest', 'Epping High Street', 'St. John the Baptist Church', 'Copped Hall ruins'],
    commuterRoutes: ['Central Line to London', 'M25 Junction 26'],
    nearbyAreas: ['Loughton', 'Theydon Bois', 'Harlow', 'North Weald', 'Waltham Abbey'],
    localCharacteristics: 'historic market town surrounded by ancient forest',
    postcode: 'CM16'
  },
  'chadwell-heath': {
    landmarks: ['Chadwell Heath Station', 'Whalebone Lane', 'St. Chad\'s Park', 'Rush Green Road'],
    commuterRoutes: ['Elizabeth Line to Central London', 'Greater Anglia services'],
    nearbyAreas: ['Romford', 'Goodmayes', 'Dagenham', 'Seven Kings', 'Barking'],
    localCharacteristics: 'residential area with good transport connections and local amenities',
    postcode: 'RM6'
  },
  'hainault': {
    landmarks: ['Hainault Forest Country Park', 'Hainault Recreation Ground', 'The Broadway', 'Foxburrows Farm'],
    commuterRoutes: ['Central Line to London', 'A12 Eastern Avenue'],
    nearbyAreas: ['Chigwell', 'Redbridge', 'Grange Hill', 'Fairlop', 'Barkingside'],
    localCharacteristics: 'suburban area with extensive green spaces and family-friendly environment',
    postcode: 'IG6'
  },
  'enfield': {
    landmarks: ['Enfield Palace Gardens', 'Forty Hall', 'New River', 'Enfield Town shopping area'],
    commuterRoutes: ['National Rail to Liverpool Street', 'M25 Junction 25'],
    nearbyAreas: ['Winchmore Hill', 'Edmonton', 'Potters Bar', 'Barnet', 'Cockfosters'],
    localCharacteristics: 'historic market town with royal connections and extensive parkland',
    postcode: 'EN1-EN3'
  },
  'stratford': {
    landmarks: ['Queen Elizabeth Olympic Park', 'Westfield Stratford City', 'London Stadium', 'ArcelorMittal Orbit'],
    commuterRoutes: ['Central, Jubilee lines, DLR, Overground, Elizabeth Line', 'A11 and A118'],
    nearbyAreas: ['Leyton', 'West Ham', 'Bow', 'Hackney Wick', 'Forest Gate'],
    localCharacteristics: 'major transport hub and regeneration area with Olympic legacy',
    postcode: 'E15'
  },
  'canary-wharf': {
    landmarks: ['One Canada Square', 'Canary Wharf Shopping Centre', 'Museum of London Docklands', 'West India Quay'],
    commuterRoutes: ['Jubilee Line, DLR, Elizabeth Line', 'Blackwall Tunnel'],
    nearbyAreas: ['Isle of Dogs', 'Poplar', 'Limehouse', 'Greenwich', 'Docklands'],
    localCharacteristics: 'major financial district with skyscrapers and waterside location',
    postcode: 'E14'
  },
  'city': {
    landmarks: ['St. Paul\'s Cathedral', 'Bank of England', 'Guildhall', 'Barbican Centre'],
    commuterRoutes: ['Multiple Underground lines', 'Major bus routes'],
    nearbyAreas: ['Shoreditch', 'Clerkenwell', 'Barbican', 'London Bridge', 'Liverpool Street'],
    localCharacteristics: 'historic financial district with modern commercial developments',
    postcode: 'EC1-EC4'
  },
  'greenwich': {
    landmarks: ['Royal Observatory', 'Cutty Sark', 'National Maritime Museum', 'Greenwich Park'],
    commuterRoutes: ['DLR, National Rail, Thames Clipper', 'A2 Blackwall Tunnel'],
    nearbyAreas: ['Blackheath', 'Lewisham', 'Deptford', 'Isle of Dogs', 'New Cross'],
    localCharacteristics: 'World Heritage Site with maritime history and royal connections',
    postcode: 'SE10'
  },
  'docklands': {
    landmarks: ['ExCeL London', 'London City Airport', 'Thames Barrier', 'Royal Victoria Dock'],
    commuterRoutes: ['DLR, Elizabeth Line', 'A1020 Royal Docks Road'],
    nearbyAreas: ['Canary Wharf', 'Canning Town', 'Custom House', 'Royal Albert', 'Beckton'],
    localCharacteristics: 'major regeneration area with modern developments and conference facilities',
    postcode: 'E16'
  },
  'islington': {
    landmarks: ['Angel tube station', 'Camden Passage', 'Union Chapel', 'Sadler\'s Wells Theatre'],
    commuterRoutes: ['Northern, Piccadilly lines', 'A1 Great North Road'],
    nearbyAreas: ['Clerkenwell', 'King\'s Cross', 'Holloway', 'Canonbury', 'Barnsbury'],
    localCharacteristics: 'trendy area known for antiques, restaurants, and Victorian terraces',
    postcode: 'N1'
  },
  'barnet': {
    landmarks: ['High Barnet Station', 'Barnet Museum', 'The Spires shopping centre', 'Monken Hadley Common'],
    commuterRoutes: ['Northern Line to London', 'M25 Junction 23'],
    nearbyAreas: ['East Barnet', 'New Barnet', 'Cockfosters', 'Potters Bar', 'Enfield'],
    localCharacteristics: 'historic market town with Battle of Barnet heritage and green belt setting',
    postcode: 'EN5'
  },
  'ealing': {
    landmarks: ['Ealing Broadway', 'Walpole Park', 'Pitzhanger Manor', 'Ealing Studios'],
    commuterRoutes: ['Central, District lines, Elizabeth Line', 'A40 Western Avenue'],
    nearbyAreas: ['Acton', 'Hanwell', 'West Ealing', 'Northolt', 'Perivale'],
    localCharacteristics: 'Queen of the Suburbs with Victorian charm and excellent transport links',
    postcode: 'W5'
  },
  'harrow': {
    landmarks: ['Harrow School', 'Harrow-on-the-Hill Station', 'St. Mary\'s Church', 'Harrow Shopping Centre'],
    commuterRoutes: ['Metropolitan Line to London', 'A40 and A404'],
    nearbyAreas: ['Pinner', 'Stanmore', 'Wealdstone', 'Kenton', 'Wembley'],
    localCharacteristics: 'historic hilltop town famous for public school and panoramic London views',
    postcode: 'HA1-HA3'
  },
  'billericay': {
    landmarks: ['High Street', 'Lake Meadows', 'Norsey Wood', 'Sun Corner'],
    commuterRoutes: ['Greater Anglia to Liverpool Street', 'A129 to A127'],
    nearbyAreas: ['Brentwood', 'Basildon', 'Wickford', 'Stock', 'Little Burstead'],
    localCharacteristics: 'affluent commuter town with historic high street and rural feel',
    postcode: 'CM12'
  }
};

// Generate service-specific FAQs
function generateServiceFAQs(service: string, location: string) {
  const baseService = service.toLowerCase();
  
  const faqSets = {
    'burglar': [
      {
        question: `How much does a burglar alarm cost in ${location}?`,
        answer: `Domestic burglar alarm systems in ${location} start from GBP 450 plus VAT. A typical 3-bedroom house with PIR detectors in the main ground-floor rooms, magnetic contacts on entry doors, a keypad, and an external bell box usually costs between GBP 450 and GBP 800 plus VAT. Wireless systems cost slightly more than wired but avoid the need for cable runs. Adding 24/7 monitoring with police response is an additional monthly cost. We provide a fixed-price quote after a free survey with no obligation.`
      },
      {
        question: `How quickly can you install a burglar alarm in ${location}?`,
        answer: `We typically complete domestic burglar alarm installations in ${location} within 3 to 5 working days of the survey. A standard home installation takes approximately half a day. For urgent requirements, same-week installation is usually available. Wireless systems can sometimes be installed on the day of the survey for straightforward properties.`
      },
      {
        question: `Do your burglar alarms qualify for insurance discounts in ${location}?`,
        answer: `Some insurers offer a discount for a professionally installed, SSAIB-approved intruder alarm system. Once your alarm in ${location} is installed, we provide all the certification and documentation your insurer requires. The discount varies by insurer, so check with your provider for the specific amount.`
      },
      {
        question: `Can I control my burglar alarm in ${location} from my phone?`,
        answer: `Yes. The Pyronix systems we install include smartphone app control. You can arm and disarm the system, receive instant push notifications when the alarm activates, check the system status, and view an event log showing when the alarm was set and unset. This is particularly useful for ${location} residents who commute to London and want to check their property is secure during the day.`
      },
      {
        question: `How often should burglar alarms be serviced in ${location}?`,
        answer: `We recommend annual servicing for burglar alarms in ${location}. A service visit takes 45 to 60 minutes and includes testing every detector and contact, checking battery condition in sensors and the backup battery, verifying communication links for monitored systems, and updating firmware. Annual servicing is often a condition of your home insurance where the alarm is a policy requirement.`
      }
    ],
    'cctv': [
      {
        question: `What CCTV resolution do you recommend for ${location} properties?`,
        answer: `For most domestic properties in ${location}, 2MP (1080p) or 4MP cameras provide clear footage at a reasonable cost. We recommend 4K (8MP) cameras for high-priority positions such as the front door, driveway, or any area where you need to identify faces or read number plates at a distance. A mixed system with 4K on key positions and 2MP on secondary coverage areas is often the best balance of quality and budget.`
      },
      {
        question: `Can I view my ${location} CCTV remotely?`,
        answer: `Yes. All Uniview systems we install include remote viewing through the EZView app on iOS and Android. You can view live footage from all cameras, play back recorded footage, download clips for evidence, and receive motion detection alerts. The app works on mobile data and Wi-Fi, so you can check your ${location} property from anywhere with an internet connection.`
      },
      {
        question: `How long does CCTV footage record for in ${location}?`,
        answer: `Recording duration depends on the NVR storage capacity, the number of cameras, and the resolution. As a guide, a 4-camera 2MP system with a 2TB NVR typically records approximately 14 days of continuous footage. With motion-only recording enabled, that extends to 30 days or more. We configure the retention period during installation based on your requirements.`
      },
      {
        question: `Do I need planning permission for CCTV in ${location}?`,
        answer: `Domestic CCTV on your own property in ${location} does not generally require planning permission. If your cameras overlook a public area or a neighbour's property, ICO guidance on domestic CCTV applies, and you should display signage. For commercial CCTV, data protection regulations require signage, a documented purpose, and reasonable retention periods. We advise on these requirements during the survey.`
      },
      {
        question: `Can you upgrade my existing CCTV system in ${location}?`,
        answer: `Yes. We regularly upgrade older analogue CCTV systems in ${location} to modern IP cameras. If your existing cabling is Cat5e or better, we can often reuse it, which reduces the installation cost. If the cabling is older coaxial, replacement may be needed. We assess this during the free site survey and include any cabling work in the quote.`
      }
    ],
    'fire': [
      {
        question: `How often do fire alarms need servicing in ${location}?`,
        answer: `Fire alarm systems in ${location} require professional servicing every 6 months under BS 5839-1. Each service visit tests every detector, call point, and sounder in the system; checks backup battery condition; inspects cabling for damage; and updates the fire alarm log book. Recent guidance allows a scheduling window of 5 to 7 months between visits. We also recommend weekly user tests, which involve activating one call point and take approximately 2 minutes.`
      },
      {
        question: `What fire alarm do I need for an HMO in ${location}?`,
        answer: `HMO fire alarm requirements in ${location} depend on the number of storeys, the number of occupants, and your local authority licensing conditions. Most HMOs require at least a Category LD2 system: interlinked smoke detectors in hallways and landings, heat detectors in kitchens, and smoke detectors in bedrooms. Larger or higher-risk HMOs may require a Grade A addressable system with a dedicated fire alarm panel. We review your specific requirements and local authority conditions during the survey.`
      },
      {
        question: `What is included in fire alarm servicing in ${location}?`,
        answer: `Each 6-monthly service visit for ${location} properties includes: functional testing of every detector, manual call point, and sounder; checking the fire alarm panel for logged faults; testing backup battery capacity; inspecting cable routes for damage; checking that fire doors close correctly on alarm activation (where connected); issuing a service certificate; and updating the fire alarm log book. We also check emergency lighting if it is part of the system.`
      },
      {
        question: `Can you take over servicing an existing fire alarm in ${location}?`,
        answer: `Yes. We regularly take over fire alarm service contracts in ${location} from other providers. We carry out an initial inspection to assess the system condition, resolve any outstanding faults, update the log book, and place the system on our 6-monthly service schedule. If the system was installed by another company and is still in good working order, a takeover avoids the cost of a full replacement.`
      },
      {
        question: `Do you provide fire alarm monitoring in ${location}?`,
        answer: `Yes, we offer 24/7 fire alarm monitoring for commercial properties in ${location} through an approved Alarm Receiving Centre. When the system activates, the ARC contacts nominated keyholders and can request fire brigade attendance. Monitoring is particularly important for unoccupied commercial properties and buildings where there may not always be someone present to hear the alarm.`
      }
    ],
    'access': [
      {
        question: `What access control options are available in ${location}?`,
        answer: `We install Paxton and Comelit access control systems in ${location}. Options include proximity fob and card readers, PIN keypads, biometric fingerprint readers, video intercom handsets, and smartphone-based access via the Paxton app. For residential blocks, Comelit video intercom allows residents to see and speak to visitors before releasing the door. For offices, Paxton Net2 provides networked control across multiple doors with time-based schedules and audit trails.`
      },
      {
        question: `Can you integrate access control with CCTV in ${location}?`,
        answer: `Yes. We can configure the access control system to trigger CCTV recording when a door is accessed, or to display a camera view on a monitor when someone requests entry. This provides a visual record alongside the electronic audit trail. The integration works between Paxton access control and Uniview CCTV, both of which we install and maintain.`
      },
      {
        question: `What happens if the access control system loses power in ${location}?`,
        answer: `All maglock installations include a backup battery that maintains the system for a defined period during power loss. Maglocks are fail-safe by design: they release when power is lost entirely, allowing occupants to exit safely for fire evacuation. Electric strikes can be configured as fail-safe or fail-secure depending on the application. Every installation includes a break-glass release on the inside of controlled doors.`
      },
      {
        question: `How much does access control cost in ${location}?`,
        answer: `Access control pricing in ${location} varies significantly by scope. A single standalone door with a keypad and maglock is considerably less expensive than a multi-door networked Paxton system with video intercom. We provide detailed quotes after a free site assessment, so you know exactly what the system will cost before committing.`
      },
      {
        question: `Can I manage who has access to my ${location} building remotely?`,
        answer: `Yes. Paxton Net2 and Paxton10 both offer remote administration. You can add or revoke user credentials, set time-based access schedules (e.g., cleaners only between 6pm and 8pm), and review door activity logs from any web browser. Paxton10 also supports smartphone-based credentials, so users can tap their phone instead of carrying a fob.`
      }
    ],
    'security': [
      {
        question: `What types of security lighting do you install in ${location}?`,
        answer: `We install LED PIR-activated floodlights for driveways, gardens, and building perimeters; dusk-to-dawn lights that operate automatically based on ambient light levels; and BS 5266-1 compliant emergency lighting for commercial premises. For domestic properties, a 20W to 30W LED floodlight typically covers a driveway or rear garden. For commercial sites, we install 50W to 150W units with adjustable PIR sensitivity and timer settings.`
      },
      {
        question: `Is emergency lighting a legal requirement in ${location}?`,
        answer: `Emergency lighting is a legal requirement for most commercial premises in ${location} under the Regulatory Reform (Fire Safety) Order 2005. This includes offices, shops, restaurants, warehouses, HMOs with common areas, and any workplace where people could be at risk if the mains lighting fails. The system must illuminate escape routes for a minimum of 3 hours (1 hour for some premises). BS 5266-1 provides the detailed technical requirements.`
      },
      {
        question: `How often does emergency lighting need testing in ${location}?`,
        answer: `Emergency lighting in ${location} commercial premises requires monthly brief function tests (switching off the mains and checking that each fitting illuminates) and an annual full 3-hour duration test. The annual test must be carried out and certified by a competent person. We provide this testing and certification as part of our maintenance service. Results are recorded in the premises log book.`
      },
      {
        question: `Can security lighting work with CCTV in ${location}?`,
        answer: `Yes, and we recommend it. Positioning PIR security lights to illuminate CCTV camera coverage areas significantly improves night-time image quality. When motion is detected, the floodlight activates and the camera captures well-lit footage rather than relying solely on infrared. We design security lighting and CCTV schemes together when both services are being installed.`
      },
      {
        question: `How much does security lighting cost in ${location}?`,
        answer: `Security lighting costs in ${location} depend on the number of fittings, cable runs, and whether existing wiring can be reused. LED PIR floodlights are energy-efficient and have a lifespan of 25,000 to 50,000 hours, so running costs are low. Emergency lighting is quoted based on the building layout and the number of fittings required for BS 5266-1 compliance. All quotes follow a free survey with no obligation.`
      }
    ]
  };

  const serviceType = getServiceType(baseService);
  return faqSets[serviceType as keyof typeof faqSets] || faqSets.burglar;
}

// Service-specific detail blocks for richer, non-generic content
const serviceDetailBlocks: Record<string, {
  typicalProjects: string[];
  equipmentUsed: string;
  complianceNote: string;
  maintenanceInfo: string;
  pricingIndicator: string;
}> = {
  burglar: {
    typicalProjects: [
      'Full intruder alarm installation for a 3-bedroom semi-detached house with PIR detectors covering all ground-floor rooms, magnetic contacts on front and rear doors, and a bell box visible from the street',
      'Wireless alarm upgrade for a rented flat where the landlord does not permit cable runs, using Pyronix wireless sensors with a 3+ year battery life',
      'Commercial alarm system for a retail unit with opening/closing schedules, staff-specific PIN codes, and 24/7 monitoring with police response',
      'Alarm takeover for a homeowner whose previous security company ceased trading, retaining existing sensors where possible and replacing the control panel'
    ],
    equipmentUsed: 'We install Pyronix Euro and Enforcer (version 11) alarm panels. Sensors include dual-technology PIR detectors, pet-friendly PIRs (up to 25kg), magnetic door and window contacts, vibration sensors, and external sounder/strobe bell boxes.',
    complianceNote: 'All installations follow SSAIB guidelines. Systems are eligible for police response via URN registration where monitoring is selected. We provide the documentation your insurer requires for any premium discount.',
    maintenanceInfo: 'Annual servicing keeps your alarm system compliant with insurance requirements and in reliable working order. A typical service visit takes 45 to 60 minutes and includes testing all detectors, checking battery condition, verifying communication links, and updating firmware.',
    pricingIndicator: 'Domestic intruder alarm systems start from GBP 450 plus VAT. The final price depends on the number of detectors, monitoring options, and any additional features such as smartphone control. All quotes are provided after a free survey with no obligation.'
  },
  cctv: {
    typicalProjects: [
      'Four-camera residential system covering the front door, rear garden, driveway, and side passage, with a 2TB NVR providing approximately 14 days of continuous recording',
      'Eight-camera commercial system for a warehouse with 4K cameras at loading bays and 2MP cameras covering general areas, configured with motion zones to reduce false alerts',
      'Single doorbell-style camera installation for a flat, connected to an existing Wi-Fi network with cloud backup and smartphone notifications',
      'CCTV upgrade from an analogue system to IP cameras, retaining existing cable runs where the cabling is Cat5e or better'
    ],
    equipmentUsed: 'We install Uniview IP cameras ranging from 2MP (1080p) to 8MP (4K). Camera types include dome, bullet, turret, and PTZ. All systems include a Uniview NVR with at least 1TB storage. Remote viewing is through the Uniview EZView app on iOS and Android.',
    complianceNote: 'Domestic CCTV on your own property does not normally require planning permission. If cameras overlook a public area or a neighbour\'s property, ICO guidance on domestic CCTV applies. For commercial installations, we advise on signage requirements under the ICO CCTV Code of Practice and GDPR data controller obligations.',
    maintenanceInfo: 'Annual CCTV maintenance includes cleaning camera lenses and housings, checking cable connections, verifying recording schedules, testing night vision performance, updating NVR firmware, and confirming remote access is working correctly.',
    pricingIndicator: 'A 2-camera domestic CCTV system starts from GBP 850 plus VAT. Commercial systems are quoted individually based on camera count, resolution, and site requirements. All quotes follow a free site survey.'
  },
  fire: {
    typicalProjects: [
      'Category L2 fire alarm for a 6-bedroom HMO in compliance with the local authority licensing conditions, including heat detectors in the kitchen, smoke detectors in hallways and bedrooms, and manual call points at exits',
      'Category M system for a small office with manual call points and sounders at each exit, suitable for premises with a straightforward layout and low fire risk',
      'Full addressable fire alarm for a 3-storey commercial building with 40+ devices, zoned by floor, with a repeater panel at reception',
      'Fire alarm takeover and service for a property where the previous contractor did not complete the 6-monthly service visit'
    ],
    equipmentUsed: 'We install fire alarm systems from Advanced, C-Tech, Fike, Haes, Kentech, EDA, EMS, Smartcell, and Zeta. Equipment includes conventional and addressable panels, optical and heat detectors, manual call points, sounders, and beacon strobes.',
    complianceNote: 'All installations comply with BS 5839-1. The system category (L1 to L5, M, or P1/P2) is determined by the fire risk assessment and the property type. HMOs typically require at least a Category LD2 system. Commercial premises fall under the Regulatory Reform (Fire Safety) Order 2005.',
    maintenanceInfo: 'BS 5839-1 requires professional servicing every 6 months. Each service visit tests every detector, call point, and sounder; checks battery condition and backup power; inspects cabling for damage; and updates the fire alarm log book. Weekly user testing (activating one call point) is also advised and takes approximately 2 minutes.',
    pricingIndicator: 'Fire alarm pricing depends on the system category, building size, and number of devices. We provide a detailed quotation after reviewing your fire risk assessment and surveying the property. HMO alarm packages and 6-monthly service contracts are available.'
  },
  access: {
    typicalProjects: [
      'Paxton Net2 system for an office building with controlled entry at the main door and 3 internal restricted areas, with 50 user credentials and time-based access schedules',
      'Comelit video intercom for a residential block of 12 flats, allowing each resident to see and speak to visitors before granting entry',
      'Standalone keypad and maglock on a commercial stockroom door, providing simple access control without a networked system',
      'Access control upgrade from a key-based system to proximity fobs, eliminating the cost of lock changes when staff leave'
    ],
    equipmentUsed: 'We install Paxton access control (Net2, Paxton10) and Comelit door entry systems. Hardware includes proximity card readers, keypad readers, biometric fingerprint readers, maglocks, electric strikes, and video intercom handsets.',
    complianceNote: 'All maglock installations include a break-glass release or request-to-exit button for fire evacuation compliance. Maglocks are fail-safe: they release when power is lost, ensuring occupants can always exit the building safely.',
    maintenanceInfo: 'Access control maintenance includes checking all readers and locks for correct operation, testing break-glass units, verifying backup battery condition, reviewing audit logs for anomalies, and updating user credentials as staff change.',
    pricingIndicator: 'Access control pricing varies by the number of doors, reader types, and user count. A single-door standalone system is significantly less expensive than a networked multi-door system. All quotes follow a free site assessment.'
  },
  security: {
    typicalProjects: [
      'PIR floodlight installation covering the front and rear of a residential property, with adjustable sensitivity and timer settings',
      'BS 5266-1 emergency lighting for a commercial office, including maintained exit signs above all fire doors and non-maintained bulkhead fittings in corridors and stairwells',
      'LED dusk-to-dawn security lights for a car park, replacing older halogen fittings and reducing energy consumption by approximately 70%',
      'Annual emergency lighting test and certification for a landlord with multiple commercial units'
    ],
    equipmentUsed: 'We install LED PIR floodlights, dusk-to-dawn sensors, bulkhead emergency fittings, maintained and non-maintained emergency lights, and illuminated exit signs. All emergency lighting meets BS 5266-1 requirements.',
    complianceNote: 'Emergency lighting is a legal requirement for most commercial premises under the Regulatory Reform (Fire Safety) Order 2005. BS 5266-1 specifies the minimum illumination levels, battery duration (3 hours for most premises), and testing requirements.',
    maintenanceInfo: 'Emergency lighting requires monthly brief function tests and an annual full 3-hour duration test. We carry out and certify the annual test. Security lighting requires minimal maintenance beyond occasional lens cleaning and PIR sensor adjustment.',
    pricingIndicator: 'Security lighting installation costs depend on the number of fittings, cable runs, and whether existing wiring can be reused. Emergency lighting is quoted based on the building layout and number of fittings required for compliance. All quotes follow a free survey.'
  }
};

function getServiceType(service: string): string {
  const s = service.toLowerCase();
  if (s.includes('cctv')) return 'cctv';
  if (s.includes('fire')) return 'fire';
  if (s.includes('access') || s.includes('door') || s.includes('intercom') || s.includes('maglock') || s.includes('keypad') || s.includes('fob')) return 'access';
  if (s.includes('lighting') || s.includes('emergency')) return 'security';
  return 'burglar';
}

// Generate unique content for each service-location combination
function generateContent(service: string, location: string) {
  const locationData = extendedLocationData[location.toLowerCase()] || {
    landmarks: [],
    nearbyAreas: [],
    localCharacteristics: 'local area',
    commuterRoutes: [],
    postcode: ''
  };

  const serviceType = getServiceType(service);
  const details = serviceDetailBlocks[serviceType] || serviceDetailBlocks.burglar;
  const isFireService = serviceType === 'fire';
  const nearbyList = locationData.nearbyAreas.slice(0, 3).join(', ');
  const landmarkList = locationData.landmarks.slice(0, 2).join(' or ');

  // Combine generic service-specific FAQs with any location-specific FAQs
  // configured for the priority SEO locations. Both sets render in the page
  // and are included in the FAQPage schema.
  const combinedFaqs = [
    ...generateServiceFAQs(service, location),
    ...(locationData.locationFAQs ?? [])
  ];

  return {
    h1: `${service} ${location} - Professional Installation & Maintenance`,
    metaDescription: `Expert ${service.toLowerCase()} services in ${location}. Professional installation, maintenance & 24/7 support. Free surveys available. Call ${COMPANY_INFO.phone} or ${COMPANY_INFO.phone2} today.`,

    hero: `Looking for reliable ${service.toLowerCase()} in ${location}? J&L Security provides professional installation and maintenance services throughout ${location} and surrounding areas. With same-day surveys available and over 12 years of experience, we are your trusted local security specialists.`,

    intro: `Our experienced engineers serve ${location} and the surrounding ${nearbyList} areas, providing comprehensive ${service.toLowerCase()} solutions for homes and businesses.${landmarkList ? ` Whether you are located near ${landmarkList}, our` : ' Our'} local team ensures rapid response times and personalised service. Every installation is carried out to SSAIB standards with full documentation and aftercare.`,

    whyChoose: [
      `Local engineers covering ${location} (${locationData.postcode || 'local area'}) and surrounding areas`,
      'Free, no-obligation security survey with same-day availability',
      'All installations to SSAIB standards',
      '24/7 emergency response for existing customers',
      'Transparent, fixed-price quotes with no hidden charges',
      'Ongoing maintenance contracts available'
    ],

    serviceIncludes: generateServiceIncludes(service),

    equipmentUsed: details.equipmentUsed,

    typicalProjects: details.typicalProjects,

    complianceNote: details.complianceNote,

    localInfo: `${location} is a ${locationData.localCharacteristics}, making security a priority for residents and businesses. Our ${service.toLowerCase()} solutions are tailored to the specific needs of ${location} properties, from period homes to modern developments.${locationData.commuterRoutes[0] ? ` With excellent ${locationData.commuterRoutes[0]}, many ${location} residents commute to London, making remote monitoring and smartphone control particularly valuable for keeping an eye on their property while away.` : ''}`,

    maintenanceInfo: details.maintenanceInfo,

    pricingIndicator: details.pricingIndicator,

    coverage: `We provide ${service.toLowerCase()} services throughout ${location} (${locationData.postcode}) and nearby areas including ${locationData.nearbyAreas.join(', ')}. Our local knowledge means we understand the specific security challenges facing ${location} residents and businesses, from the property types common in the area to the response times achievable from our base in Brentwood.`,

    fireCompliance: isFireService ? `All our fire alarm installations in ${location} comply with BS 5839-1 standards and include the mandatory 6-monthly servicing to maintain compliance. This is particularly important for HMOs, commercial properties, and shared residential buildings throughout ${location}. We provide full compliance documentation including commissioning certificates and log books.` : null,

    faqs: combinedFaqs,

    // Optional priority-location enrichment (Brentwood, Romford, Ilford,
    // Chelmsford, Upminster). Undefined for the other 45 matrix entries.
    localSecurityContext: locationData.localSecurityContext,
    propertyTypes: locationData.propertyTypes,
    keyIndustries: locationData.keyIndustries
  };
}

function generateServiceIncludes(service: string) {
  const baseService = service.toLowerCase();
  
  if (baseService.includes('burglar') || baseService.includes('alarm')) {
    return [
      'Free security survey and consultation',
      'Professional installation by qualified engineers',
      'High-quality wireless or wired alarm systems',
      'Smartphone app control and monitoring',
      'PIR detectors, door/window contacts, keypads',
      '24/7 monitoring options available',
      'Insurance-approved systems',
      'Full system commissioning and handover',
      'Comprehensive warranty and ongoing support'
    ];
  }
  
  if (baseService.includes('cctv')) {
    return [
      'Free site survey and system design',
      'Professional camera installation',
      'High-definition 4K or 1080p cameras',
      'Night vision and motion detection',
      'Remote viewing via smartphone/computer',
      'Local or cloud storage options',
      'Professional cable management',
      'System configuration and training',
      'Ongoing maintenance packages'
    ];
  }
  
  if (baseService.includes('fire')) {
    return [
      'BS 5839-1 compliant system design',
      'Professional installation and commissioning',
      'Smoke and heat detector installation',
      'Fire alarm panel configuration',
      'Emergency lighting integration',
      '6-monthly servicing and testing',
      'Compliance certification provided',
      'Staff training on system operation',
      '24/7 monitoring options'
    ];
  }
  
  if (baseService.includes('access') || baseService.includes('door')) {
    return [
      'Free access control assessment',
      'Professional system installation',
      'Key fob or proximity card systems',
      'Biometric reader options',
      'Video intercom integration',
      'Magnetic lock installation',
      'User management and programming',
      'Audit trail capabilities',
      'Integration with existing security systems'
    ];
  }
  
  return [
    'Free consultation and quotation',
    'Professional installation service',
    'Quality equipment and components',
    'System testing and commissioning',
    'User training and documentation',
    'Comprehensive warranty coverage',
    'Ongoing maintenance options',
    'Emergency support available'
  ];
}

export async function generateStaticParams() {
  return serviceLocationMatrix.map((item) => ({
    service: item.slug.split('-').slice(0, -1).join('-'),
    location: item.slug.split('-').slice(-1)[0]
  }));
}

export default async function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const resolvedParams = await params;
  
  // Find the matching service-location combination
  const combination = serviceLocationMatrix.find(item => 
    item.slug === `${resolvedParams.service}-${resolvedParams.location}`
  );

  if (!combination) {
    notFound();
  }

  const content = generateContent(combination.service, combination.location);
  
  // Generate structured data
  const faqSchema = generateFAQPageSchema(content.faqs);
  const serviceSchema = generateServiceSchema(
    combination.service,
    content.metaDescription,
    combination.location
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Services', url: `${COMPANY_INFO.website}/services` },
    { name: `${combination.service} in ${combination.location}`, url: `${COMPANY_INFO.website}/${resolvedParams.service}-${resolvedParams.location}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema, breadcrumbSchema]),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><span className="text-gray-400 mx-1">/</span></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium" itemProp="item">
                <span itemProp="name">Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true"><span className="text-gray-400 mx-1">/</span></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-gray-600 font-medium truncate">
              <span itemProp="name">{combination.service} in {combination.location}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-primary-100">
                  {combination.location}, {extendedLocationData[combination.location.toLowerCase()]?.postcode || 'Essex'}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                {content.h1}
              </h1>
              
              <p className="text-lg mb-8 text-primary-100">
                {content.hero}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center inline-flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
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
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I need ${combination.service.toLowerCase()} in ${combination.location}`}
                  className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors text-center inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Quote
                </a>
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center inline-flex items-center justify-center"
                >
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Book Survey
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation strip */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-700">
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-primary-600 mr-2" aria-hidden="true" />
              <span><strong>SSAIB</strong> Approved (Intruder Alarms)</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-primary-600 mr-2" aria-hidden="true" />
              <span><strong>BAFE</strong> Certified (Fire Alarms)</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-primary-600 mr-2" aria-hidden="true" />
              <span><strong>FIA</strong> Member</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-primary-600 mr-2" aria-hidden="true" />
              <span><strong>CHAS</strong> Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Local security context (priority locations only) */}
      {(content.localSecurityContext || content.propertyTypes || content.keyIndustries) && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Security in {combination.location}: Local Context
            </h2>

            {content.localSecurityContext && (
              <p className="text-gray-700 leading-relaxed mb-8">
                {content.localSecurityContext}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.propertyTypes && content.propertyTypes.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Typical {combination.location} Property Types
                  </h3>
                  <ul className="space-y-2">
                    {content.propertyTypes.map((type, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.keyIndustries && content.keyIndustries.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key {combination.location} Commercial Sectors
                  </h3>
                  <ul className="space-y-2">
                    {content.keyIndustries.map((industry, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose J&L Security in {combination.location}?
              </h2>
              <ul className="space-y-3">
                {content.whyChoose.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {combination.service} Service Includes:
              </h3>
              <ul className="space-y-3">
                {content.serviceIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What We Install in {combination.location}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.equipmentUsed}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {content.complianceNote}
            </p>

            {content.fireCompliance && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-orange-800">
                      BS 5839-1 Compliance Notice
                    </h3>
                    <p className="mt-2 text-sm text-orange-700">
                      {content.fireCompliance}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Typical Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Example Projects in {combination.location}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            The types of {combination.service.toLowerCase()} work we carry out for customers in {combination.location} and surrounding areas:
          </p>
          <div className="space-y-4">
            {content.typicalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Information & Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Local {combination.service} Services in {combination.location}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.localInfo}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {content.coverage}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ongoing Maintenance</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.maintenanceInfo}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              {content.pricingIndicator}
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions - {combination.service} {combination.location}
          </h2>
          
          <div className="space-y-8">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for {combination.service} in {combination.location}?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get your free, no-obligation security survey today. Our local engineers 
            serve {combination.location} with same-day appointments available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
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
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I need ${combination.service.toLowerCase()} in ${combination.location}. Please send me a quote.`}
              className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Quote
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors inline-flex items-center justify-center"
            >
              <CalendarDays className="h-5 w-5 mr-2" />
              Book Free Survey
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services & Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Related Services in {combination.location}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {serviceLocationMatrix
                  .filter(item => item.location === combination.location && item.service !== combination.service)
                  .slice(0, 5)
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={`/${item.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {item.service} {item.location}
                    </Link>
                  ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {combination.service} in Nearby Areas
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {serviceLocationMatrix
                  .filter(item => item.service === combination.service && item.location !== combination.location)
                  .slice(0, 5)
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={`/${item.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      {item.service} {item.location}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: ServiceLocationPageProps) {
  const resolvedParams = await params;
  const combination = serviceLocationMatrix.find(item => 
    item.slug === `${resolvedParams.service}-${resolvedParams.location}`
  );

  if (!combination) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  const content = generateContent(combination.service, combination.location);

  return {
    title: content.h1,
    description: content.metaDescription,
    openGraph: {
      title: content.h1,
      description: content.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `${COMPANY_INFO.website}/${resolvedParams.service}/${resolvedParams.location}`,
    },
  };
}