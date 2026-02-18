import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, CalendarDays, Shield, CheckCircle, MapPin } from 'lucide-react';
import { serviceLocationMatrix } from '@/lib/data';
import { COMPANY_INFO } from '@/lib/utils';
import { generateFAQPageSchema, generateServiceSchema } from '@/lib/schema';
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
}

const extendedLocationData: Record<string, LocationData> = {
  'ilford': {
    landmarks: ['Ilford Station', 'The Exchange Shopping Centre', 'Valentines Park', 'Redbridge Town Hall'],
    commuterRoutes: ['Elizabeth Line to Central London', 'Great Eastern Main Line to Liverpool Street'],
    nearbyAreas: ['Seven Kings', 'Goodmayes', 'Redbridge', 'Gants Hill', 'Newbury Park'],
    localCharacteristics: 'busy commercial centre with excellent transport links',
    postcode: 'IG1-IG6'
  },
  'romford': {
    landmarks: ['Romford Station', 'The Liberty Shopping Centre', 'Raphael Park', 'Romford Market'],
    commuterRoutes: ['TfL Rail to Liverpool Street', 'Greater Anglia services'],
    nearbyAreas: ['Hornchurch', 'Upminster', 'Emerson Park', 'Harold Wood', 'Collier Row'],
    localCharacteristics: 'major town centre with strong commercial and residential areas',
    postcode: 'RM1-RM3'
  },
  'chelmsford': {
    landmarks: ['Chelmsford Cathedral', 'High Chelmer Shopping Centre', 'Hylands Park', 'Essex County Cricket Ground'],
    commuterRoutes: ['Great Eastern Main Line to London', 'A12 corridor'],
    nearbyAreas: ['Brentwood', 'Billericay', 'Great Baddow', 'Galleywood', 'Springfield'],
    localCharacteristics: 'Essex county town with thriving business district',
    postcode: 'CM1-CM3'
  },
  'brentwood': {
    landmarks: ['Brentwood High Street', 'Thorndon Country Park', 'Brentwood Centre', 'Warley Place'],
    commuterRoutes: ['Greater Anglia to Liverpool Street', 'M25 Junction 28'],
    nearbyAreas: ['Billericay', 'Wickford', 'Shenfield', 'Hutton', 'Ingatestone'],
    localCharacteristics: 'affluent commuter town with excellent transport connections',
    postcode: 'CM13-CM15'
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
    postcode: 'RM14'
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
        question: `How quickly can you install a burglar alarm in ${location}?`,
        answer: `We typically complete burglar alarm installations in ${location} within 1-2 days of your free survey. Same-day surveys are available, and we can often install wireless systems the same day for urgent requirements.`
      },
      {
        question: `Do your burglar alarms qualify for insurance discounts in ${location}?`,
        answer: `Yes, our NSI-equivalent burglar alarm systems installed in ${location} often qualify for insurance premium discounts of 10-15%. We provide all necessary certification documentation.`
      },
      {
        question: `Can I control my ${location} burglar alarm remotely?`,
        answer: `Absolutely. Our modern alarm systems in ${location} include smartphone app control, allowing you to arm/disarm, receive alerts, and monitor your property remotely from anywhere.`
      },
      {
        question: `What happens if my burglar alarm activates in ${location}?`,
        answer: `Depending on your chosen monitoring package, alarms in ${location} can trigger our 24/7 monitoring centre, police response (if eligible), or direct notifications to your phone and nominated contacts.`
      },
      {
        question: `How often should burglar alarms be serviced in ${location}?`,
        answer: `We recommend annual servicing for burglar alarms in ${location} to ensure optimal performance. This includes battery checks, sensor testing, and system updates.`
      }
    ],
    'cctv': [
      {
        question: `What CCTV resolution do you recommend for properties in ${location}?`,
        answer: `For ${location} properties, we typically recommend 4K cameras for main areas and entrances, with 1080p suitable for secondary locations. The choice depends on your specific security requirements and budget.`
      },
      {
        question: `Can I view my ${location} CCTV remotely?`,
        answer: `Yes, all our CCTV systems in ${location} include remote viewing via smartphone apps or web browsers, allowing you to monitor your property from anywhere with an internet connection.`
      },
      {
        question: `How long do you store CCTV footage in ${location}?`,
        answer: `Storage duration depends on your system specification. Typically, we configure systems in ${location} to store 30-90 days of footage locally, with cloud backup options available.`
      },
      {
        question: `What maintenance do CCTV systems need in ${location}?`,
        answer: `CCTV systems in ${location} benefit from annual maintenance including camera cleaning, software updates, and storage system checks to ensure reliable operation year-round.`
      },
      {
        question: `Can you upgrade my existing CCTV system in ${location}?`,
        answer: `Absolutely. We can upgrade older systems in ${location} to modern 4K resolution, add remote viewing capabilities, or expand coverage while often utilizing existing cabling.`
      }
    ],
    'fire': [
      {
        question: `How often do fire alarms need servicing in ${location}?`,
        answer: `Fire alarms in ${location} require professional servicing every 6 months to comply with BS 5839-1 standards. We provide comprehensive testing and certification for all commercial and HMO properties.`
      },
      {
        question: `Are your fire alarm systems compliant for HMOs in ${location}?`,
        answer: `Yes, our fire alarm installations in ${location} fully comply with HMO licensing requirements and BS 5839-1 standards, including interlinked detectors and emergency lighting where required.`
      },
      {
        question: `What's included in fire alarm servicing in ${location}?`,
        answer: `Our ${location} fire alarm service includes detector testing, battery replacement, panel diagnostics, emergency lighting checks, and full compliance documentation.`
      },
      {
        question: `Can you provide fire risk assessments in ${location}?`,
        answer: `Yes, we conduct comprehensive fire risk assessments for commercial properties in ${location}, identifying risks and recommending appropriate fire safety measures.`
      },
      {
        question: `What happens if a fire alarm activates in ${location}?`,
        answer: `Monitored fire systems in ${location} immediately alert our 24/7 control centre and the fire brigade. Unmonitored systems provide local audible warnings to ensure rapid evacuation.`
      }
    ],
    'access': [
      {
        question: `What access control options are available in ${location}?`,
        answer: `We install various access control systems in ${location} including key fobs, proximity cards, biometric readers, video intercoms, and smartphone-controlled systems.`
      },
      {
        question: `Can you integrate access control with existing systems in ${location}?`,
        answer: `Yes, we can integrate new access control systems in ${location} with existing CCTV, alarms, and building management systems for comprehensive security management.`
      },
      {
        question: `How do you program access control systems in ${location}?`,
        answer: `Our engineers program access control systems in ${location} during installation, setting up user groups, time zones, and access levels. We provide full training on system operation.`
      },
      {
        question: `What happens if the access control system fails in ${location}?`,
        answer: `Access control systems in ${location} typically include battery backup and fail-safe mechanisms. We offer 24/7 emergency response for critical system failures.`
      },
      {
        question: `Can access control systems provide audit trails in ${location}?`,
        answer: `Yes, our access control systems in ${location} maintain detailed logs of all entry attempts, successful access, and system events for security and compliance purposes.`
      }
    ],
    'security': [
      {
        question: `What types of security lighting are available in ${location}?`,
        answer: `We install various security lighting in ${location} including PIR-activated floodlights, LED security lights, timer-controlled systems, and emergency backup lighting.`
      },
      {
        question: `How long do LED security lights last in ${location}?`,
        answer: `LED security lights installed in ${location} typically last 25,000-50,000 hours (10-20 years) with minimal maintenance, making them highly cost-effective.`
      },
      {
        question: `Can security lighting integrate with alarms in ${location}?`,
        answer: `Yes, security lighting in ${location} can be integrated with burglar alarms to activate upon detection, providing visual deterrent and improved CCTV recording conditions.`
      },
      {
        question: `What maintenance do security lights need in ${location}?`,
        answer: `Security lighting in ${location} requires minimal maintenance - typically annual cleaning and sensor testing. LED systems virtually eliminate bulb replacement costs.`
      },
      {
        question: `Do you install emergency lighting in ${location}?`,
        answer: `Yes, we install BS 5266-compliant emergency lighting systems in ${location} for commercial properties, including exit route lighting and open area anti-panic lighting.`
      }
    ]
  };

  // Determine service type from service name
  let serviceType = 'burglar';
  if (baseService.includes('cctv')) serviceType = 'cctv';
  else if (baseService.includes('fire')) serviceType = 'fire';
  else if (baseService.includes('access') || baseService.includes('door') || baseService.includes('intercom')) serviceType = 'access';
  else if (baseService.includes('lighting') || baseService.includes('emergency')) serviceType = 'security';

  return faqSets[serviceType as keyof typeof faqSets] || faqSets.burglar;
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

  const isFireService = service.toLowerCase().includes('fire');

  return {
    h1: `${service} ${location} - Professional Installation & Maintenance`,
    metaDescription: `Expert ${service.toLowerCase()} services in ${location}. Professional installation, maintenance & 24/7 support. Free surveys available. Call ${COMPANY_INFO.phone} today.`,
    
    hero: `Looking for reliable ${service.toLowerCase()} in ${location}? J&L Security provides professional installation and maintenance services throughout ${location} and surrounding areas. With same-day surveys available and over 12 years of experience, we're your trusted local security specialists.`,
    
    intro: `Our experienced engineers serve ${location} and the surrounding ${locationData.nearbyAreas.slice(0, 3).join(', ')} areas, providing comprehensive ${service.toLowerCase()} solutions for homes and businesses. Whether you're located near ${locationData.landmarks.slice(0, 2).join(' or ')}, our local team ensures rapid response times and personalized service.`,
    
    whyChoose: [
      'Same-day free surveys available',
      'Local engineers based in Essex & Greater London',
      'NSI-equivalent installation standards',
      '24/7 emergency response available',
      'Comprehensive warranties and ongoing support',
      'Competitive pricing with transparent quotes'
    ],
    
    serviceIncludes: generateServiceIncludes(service),
    
    localInfo: `${location} is a ${locationData.localCharacteristics}, making security a priority for residents and businesses. Our ${service.toLowerCase()} solutions are tailored to the specific needs of ${location} properties, from period homes to modern developments. With excellent ${locationData.commuterRoutes[0] || 'transport connections'}, many ${location} residents commute to London, making remote monitoring and smartphone control particularly valuable.`,
    
    coverage: `We provide ${service.toLowerCase()} services throughout ${location} (${locationData.postcode}) and nearby areas including ${locationData.nearbyAreas.join(', ')}. Our local knowledge ensures we understand the specific security challenges facing ${location} residents and businesses.`,
    
    fireCompliance: isFireService ? `All our fire alarm installations in ${location} comply with BS 5839-1 standards and include the mandatory 6-monthly servicing to maintain compliance. This is particularly important for HMOs, commercial properties, and shared residential buildings throughout ${location}.` : null,
    
    faqs: generateServiceFAQs(service, location)
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

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />

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
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center inline-flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {COMPANY_INFO.phone}
                </a>
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

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

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

      {/* Local Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Local {combination.service} Services in {combination.location}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.localInfo}
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              {content.coverage}
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
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {COMPANY_INFO.phone}
            </a>
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
  };
}