import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, MessageSquare, ArrowRight, MapPin, Shield, Camera, Flame, Lock, Lightbulb, ClipboardCheck } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { COMPANY_INFO } from '@/lib/utils';
import { services, serviceLocationMatrix } from '@/lib/data';
import { generateServiceSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

// ─── Extended per-service content ───────────────────────────────────────────

const icons = {
  'burglar-alarms': Shield,
  'cctv-systems': Camera,
  'fire-alarms': Flame,
  'access-control': Lock,
  'security-lighting': Lightbulb,
  'fire-risk-assessments': ClipboardCheck,
} as const;

const servicePageData: Record<string, {
  heroTagline: string;
  overview: string[];
  process: { step: string; detail: string }[];
  whoFor: string[];
  pricing: string;
  faqs: { question: string; answer: string }[];
  image?: { src: string; alt: string };
}> = {
  'burglar-alarms': {
    heroTagline: 'Professional Burglar Alarm Installation & Maintenance',
    overview: [
      'We install and maintain Pyronix wired and wireless systems. A professionally installed burglar alarm is one of the most effective deterrents against break-ins. At J&L Security we design, supply and install wired and wireless intruder alarm systems for homes, businesses, HMOs and commercial premises across Essex and Greater London.',
      'Every system we install meets SSAIB standards and is eligible for police response.',
    ],
    process: [
      { step: 'Free Security Survey', detail: 'One of our engineers visits your property, assesses entry points, and identifies vulnerabilities at no charge.' },
      { step: 'System Design', detail: 'We specify the right grade of alarm, sensor positions, and monitoring option for your needs and budget.' },
      { step: 'Professional Installation', detail: 'Fully insured engineers install the system with minimal disruption, tidying up after themselves.' },
      { step: 'Commissioning & Testing', detail: 'Every zone is walked and tested before we leave. You receive a full test certificate.' },
      { step: 'User Training', detail: 'We demonstrate the system and app controls so you and your household or staff are confident using it.' },
      { step: 'Ongoing Maintenance', detail: 'Annual service visits keep your alarm compliant with insurance requirements and performing reliably.' },
    ],
    whoFor: [
      'Residential homes and flats',
      'Commercial offices and retail units',
      'Warehouses and industrial premises',
      'HMOs and rental properties',
      'Schools and healthcare facilities',
      'Listed buildings (wireless systems available)',
    ],
    pricing: 'From £450 plus VAT for a standard domestic system — full quote provided after free survey.',
    faqs: [
      {
        question: 'Do you install wireless burglar alarms?',
        answer: 'Yes. Wireless alarms are ideal for properties where cable runs are difficult — listed buildings, rented premises, or properties with solid walls. We install Pyronix wireless systems. Battery life on modern wireless sensors typically exceeds 3 years.',
      },
      {
        question: 'Will a burglar alarm reduce my home insurance premium?',
        answer: 'Some insurers may offer a discount for a professionally installed SSAIB approved intruder alarm. Once installed, we provide all the documentation your insurer requires.',
      },
      {
        question: 'Can you take over my existing alarm system?',
        answer: 'In most cases, yes. We assess your current system, replace any failed components, and put it under our maintenance contract — often saving you the cost of a full replacement.',
      },
      {
        question: 'How quickly can you install a burglar alarm?',
        answer: 'For domestic systems we typically install within 3–5 working days of the survey. Same-week installation is usually available for urgent requirements.',
      },
      {
        question: 'What alarm brands do you install?',
        answer: 'We install and maintain Pyronix Euro range or the Enforcer Range (version 11).',
      },
    ],
  },

  'cctv-systems': {
    heroTagline: 'CCTV Installation & Maintenance — 4K Cameras, Remote Viewing',
    overview: [
      'High-definition CCTV is essential for both deterrence and evidence collection. J&L Security designs and installs SSAIB-compliant IP CCTV systems for residential and commercial properties throughout Essex and Greater London, from a single camera above a front door to a 64-channel enterprise system covering a warehouse complex.',
      'We install and maintain Uniview cameras. All our systems include remote viewing via smartphone app, motion detection alerts, and recording options ranging from local NVR storage to cloud backup.',
    ],
    process: [
      { step: 'Site Survey & Design', detail: 'We survey your site, identify blind spots, assess lighting conditions, and design an optimal camera layout.' },
      { step: 'Camera Selection', detail: 'We specify the right camera types — dome, bullet, PTZ, fisheye — for each position based on coverage requirements.' },
      { step: 'Professional Installation', detail: 'Cameras are installed with discreet cable runs or wireless connectivity. All work is completed to a professional standard.' },
      { step: 'NVR / DVR Configuration', detail: 'We configure the recording unit, set motion detection zones, retention schedules, and alert notifications.' },
      { step: 'Remote Access Setup', detail: 'We configure the smartphone app on your devices and test remote viewing from outside the local network.' },
      { step: 'Training & Handover', detail: 'We walk you through the system, show you how to review footage and export clips for evidence if needed.' },
    ],
    whoFor: [
      'Residential homes and driveways',
      'Retail shops and restaurants',
      'Office buildings and car parks',
      'Warehouses and industrial sites',
      'Schools and care homes',
      'Construction sites',
    ],
    pricing: 'From £850 plus VAT for a 2 camera system.',
    faqs: [
      {
        question: 'What resolution CCTV do you recommend?',
        answer: '4K (8MP) cameras provide exceptional facial and number plate detail. For most domestic and small commercial installations 2MP (1080p) or 4MP cameras offer excellent quality at a lower cost. We recommend 4K for high-risk entry points and car parks.',
      },
      {
        question: 'Can I view my CCTV remotely on my phone?',
        answer: 'The cameras we install can be accessed through the UniEase app. This allows you to view live footage, record footage and playback.',
      },
      {
        question: 'Do I need planning permission to install CCTV?',
        answer: 'Domestic CCTV on your own property does not generally require planning permission. Commercial CCTV may require signage under the ICO CCTV Code of Practice.',
      },
      {
        question: 'Do you offer CCTV maintenance contracts?',
        answer: 'Yes. We offer annual maintenance contracts that include a system health check, camera cleaning, firmware updates, and priority response to faults.',
      },
    ],
  },

  'fire-alarms': {
    heroTagline: 'BAFE-Certified Fire Alarm Installation, Servicing & Risk Assessments',
    overview: [
      'J&L Security is a BAFE-certified fire alarm maintainer covering Essex and Greater London. We design, install, commission, and service commercial fire alarm systems to BS 5839-1 and domestic and HMO fire alarm systems to BS 5839-6. We also arrange fire risk assessments through an accredited assessor we work with, deliver any resulting remedial works ourselves, and provide smoke alarm installs and repair plus 6-monthly fire alarm servicing under contract.',
      'We install both conventional and addressable systems from C-Tech, Fike, Haes, Kentech, Advanced, EDA, EMS, Smartcell, and Zeta. Every installation is documented, certified at commissioning, and supported with a service contract that keeps the system compliant with BS 5839 and the Regulatory Reform (Fire Safety) Order 2005.',
    ],
    process: [
      { step: 'Fire Risk Assessment Review', detail: 'We review your existing fire risk assessment (or recommend one) to determine the appropriate category of system.' },
      { step: 'System Design', detail: 'We produce a tailored quotation to meet your system design requirements which outlines positioning of equipment to ensure compliance with BS 5839:1.' },
      { step: 'Installation', detail: 'Qualified engineers install the system with trunking and conduit work to a professional standard.' },
      { step: 'Commissioning', detail: 'The system is fully commissioned with all devices walked and tested. We produce a commissioning certificate.' },
      { step: 'Documentation', detail: 'You will receive all relevant compliance documentation once the final balance has been paid which includes a log book.' },
      { step: '6-Monthly Servicing', detail: 'We service your system twice per year as required by BS 5839-1, including testing all detectors, call points, and sounders.' },
    ],
    whoFor: [
      'Commercial premises requiring BS 5839-1 systems',
      'HMOs and residential blocks under BS 5839-6',
      'Landlords needing fire risk assessments arranged and remedial works delivered',
      'Schools, care homes, and healthcare facilities',
      'Domestic customers needing smoke alarm installs or smoke alarm repair',
      'Existing system owners switching to a BAFE-certified maintainer',
    ],
    pricing: 'Fire alarm servicing contracts from £180 + VAT per year for commercial premises and from £120 + VAT per year for residential and HMO systems. Includes one routine maintenance and one emergency callout. Installation prices and fire risk assessment fees provided after free site survey.',
    faqs: [
      {
        question: 'What is the difference between a conventional and addressable fire alarm?',
        answer: 'A conventional system divides a building into zones — if a detector activates, you know which zone. An addressable system identifies the exact device that has activated, which is essential for larger buildings. We install both depending on the size and layout of your premises.',
      },
      {
        question: 'How often does a fire alarm need to be serviced?',
        answer: 'BS 5839-1 requires professional servicing every 6 months for commercial premises. Recent guidance allows a 5–7 month window for scheduling visits. Weekly user tests are also advised — these take about 2 minutes and involve activating one call point.',
      },
      {
        question: 'Do you install fire alarms in HMOs?',
        answer: 'Yes. HMO fire alarm requirements depend on the number of storeys and occupants. We install Grade D and Grade A systems as required by your local authority and the Regulatory Reform (Fire Safety) Order 2005.',
      },
      {
        question: 'Can you take over servicing an existing fire alarm?',
        answer: 'Yes. We inspect your existing system, assess its condition, update any outstanding maintenance, and place it under our service contract.',
      },
      {
        question: 'Do you provide emergency fire alarm call-outs?',
        answer: 'Yes, we offer 24/7 emergency call out for fire alarm customers who are under our maintenance contract with a visit made within 8 hours.',
      },
      {
        question: 'What documentation do I receive after installation?',
        answer: 'You will receive all relevant compliance documentation once the final balance has been paid which includes a log book.',
      },
      {
        question: 'What is the difference between BS 5839-1 and BS 5839-6?',
        answer: 'BS 5839-1 is the British Standard for fire detection and fire alarm systems in non-domestic premises: offices, retail, schools, care homes, warehouses, factories, and most commercial buildings. BS 5839-6 is the equivalent standard for domestic premises: single-occupancy homes, individual dwellings, and houses in multiple occupation. The two standards cover different system categories and grades. We install and maintain to both standards as a BAFE-certified maintainer.',
      },
      {
        question: 'Do you carry out fire risk assessments?',
        answer: 'Yes. We arrange fire risk assessments for commercial premises, HMOs and blocks of flats through an accredited assessor we work with, and we carry out any resulting remedial works directly. The assessment identifies fire hazards, evaluates risk to occupants, and produces an action plan with prioritised recommendations. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person for any non-domestic premises to have a current fire risk assessment in place. See our <a href="/services/fire-risk-assessments" class="text-primary-600 hover:text-primary-700 font-medium">fire risk assessments service page</a> for the full delivery model.',
      },
      {
        question: 'Do you install and repair smoke alarms?',
        answer: 'Yes. We carry out smoke alarm installs and smoke alarm repair for domestic properties under BS 5839-6, including for HMO landlords meeting licensing conditions. Work covers Grade D mains-powered interlinked alarms with battery backup, Grade F battery-only systems, and panel-controlled Grade A systems for larger HMOs. We can also assess and repair existing smoke alarm systems that have failed user tests.',
      },
      {
        question: 'What does BAFE certification mean for fire alarm maintainers?',
        answer: 'BAFE is the independent register for fire safety service providers in the United Kingdom. A BAFE-certified fire alarm maintainer has been audited against the BAFE SP203-1 scheme covering design, installation, commissioning, and maintenance of fire detection and fire alarm systems. Insurers, fire risk assessors, and regulators frequently look for BAFE certification when assessing whether the responsible person has appointed competent contractors. J&L Security is BAFE certified.',
      },
    ],
  },

  'access-control': {
    heroTagline: 'Access Control & Door Entry System Installation',
    overview: [
      'Access control systems replace traditional keys with electronic credentials: proximity fobs, PIN codes, biometric readers, or video intercoms. This eliminates the cost and disruption of changing locks when a key is lost or a staff member leaves. The system records who entered which door and when, giving you a full audit trail.',
      'J&L Security installs and maintains Paxton (Net2, Paxton10) and Comelit access control and door entry systems for offices, residential blocks, schools, healthcare premises, and commercial buildings across Essex and Greater London. We handle everything from a single controlled door to multi-site networked systems.',
    ],
    process: [
      { step: 'Security Needs Assessment', detail: 'We assess which doors need controlled access, how many users, and what level of audit trail is required.' },
      { step: 'System Design', detail: 'We design the system including reader types, controller positions, door hardware, and cabling routes.' },
      { step: 'Hardware Installation', detail: 'All hardware is installed to a high standard by our professional and qualified staff.' },
      { step: 'Software Configuration', detail: 'We configure the access control software, add users, set time zones, and define access levels.' },
      { step: 'User Enrolment', detail: 'We enrol credentials (fobs, cards, or biometrics) for all users and configure any PIN-only backup access.' },
      { step: 'Training & Support', detail: 'We train your administrator to add/remove users and run audit reports, with ongoing telephone support.' },
    ],
    whoFor: [
      'Commercial offices and business parks',
      'Residential apartment blocks',
      'Schools and educational facilities',
      'Healthcare premises',
      'Warehouses with restricted zones',
      'Retail stockrooms and server rooms',
    ],
    pricing: '',
    faqs: [
      {
        question: 'Do maglocks fail safe or fail secure?',
        answer: 'Maglocks are fail-safe — they release when power is lost, allowing occupants to exit safely. This is the standard for fire evacuation compliance. Electric strikes can be configured as either fail-safe or fail-secure depending on the application.',
      },
      {
        question: 'Can you service or upgrade an existing access control system?',
        answer: 'Yes, we service and maintain Paxton and Comelit systems. Common upgrades include replacing standalone keypads with networked readers, adding video intercom to an existing fob system, or moving from a legacy system to Paxton Net2 or Paxton10 for cloud-based management.',
      },
      {
        question: 'Can I manage access control remotely?',
        answer: 'Yes. Paxton10 and Net2 both offer remote administration. You can add or revoke credentials, set time-based access schedules, and view door activity logs from any web browser or smartphone. This is particularly useful for managing multiple sites or granting temporary access to contractors.',
      },
      {
        question: 'How does a video intercom work for flats?',
        answer: 'A Comelit video intercom places a camera and call panel at the main entrance. When a visitor presses a flat number, the resident sees and speaks to them on their handset or smartphone app before deciding whether to release the door. Each flat has its own handset, and the building manager can program access for deliveries or maintenance staff.',
      },
    ],
  },

  'security-lighting': {
    heroTagline: 'Security & Emergency Lighting Installation Across Essex & London',
    overview: [
      'Security lighting deters intruders, improves visibility for CCTV cameras, and makes your property safer for occupants and visitors after dark. Emergency lighting ensures safe evacuation routes remain lit if the mains power fails.',
      'J&L Security installs and maintains PIR security floodlights, LED dusk-to-dawn lights, and BS 5266-1 compliant emergency lighting for commercial and residential properties across Essex and Greater London. We also carry out annual emergency lighting tests and issue compliance certificates.',
    ],
    process: [
      { step: 'Lighting Survey', detail: 'We assess your site, identify dark spots, and check for emergency lighting compliance requirements.' },
      { step: 'Design & Specification', detail: 'We design a lighting scheme that meets your security and compliance requirements.' },
      { step: 'Professional Installation', detail: 'Fully qualified engineers install lights with weatherproof cabling and fittings.' },
      { step: 'Commissioning & Testing', detail: 'All lights are tested for correct operation, PIR sensitivity, and coverage.' },
      { step: 'Compliance Certification', detail: 'Emergency lighting installations are certified to BS 5266-1 with a full test certificate.' },
      { step: 'Annual Testing', detail: 'We carry out the annual 3-hour full duration test required for BS 5266-1 compliance.' },
    ],
    whoFor: [
      'Commercial premises requiring emergency lighting compliance',
      'HMOs and residential blocks',
      'Car parks and external areas',
      'Industrial sites and warehouses',
      'Retail and hospitality venues',
      'Domestic driveways and gardens',
    ],
    pricing: '',
    faqs: [
      {
        question: 'What is the difference between security lighting and emergency lighting?',
        answer: 'Security lighting deters intruders and improves CCTV camera performance — it is triggered by motion or operates on a timer. Emergency lighting activates when mains power fails, illuminating escape routes to allow safe evacuation.',
      },
      {
        question: 'Is emergency lighting a legal requirement?',
        answer: 'Yes for most commercial premises. The Regulatory Reform (Fire Safety) Order 2005 requires adequate emergency lighting in commercial buildings. BS 5266-1 provides the detailed standard.',
      },
      {
        question: 'How often does emergency lighting need testing?',
        answer: 'Monthly flick tests (a few seconds each) should be carried out by the building manager. A full 3-hour duration test is required annually and must be certified — we carry out and certify this test for our maintenance customers.',
      },
      {
        question: 'What PIR security lights do you install?',
        answer: 'We install LED PIR floodlights in various wattages depending on the area to be covered. For domestic properties, a 20W to 30W LED floodlight covers a typical driveway or rear garden. For commercial car parks and yard areas, we install 50W to 150W units. All PIR sensors have adjustable sensitivity, range, and timer settings.',
      },
      {
        question: 'Can security lighting work with my CCTV system?',
        answer: 'Yes. Positioning security lights to complement your CCTV cameras significantly improves image quality at night. We design lighting and CCTV schemes together so that camera coverage areas are properly illuminated when motion is detected.',
      },
    ],
  },

  'fire-risk-assessments': {
    heroTagline: 'BAFE-Certified Fire Risk Assessments in Essex & London',
    overview: [
      'A fire risk assessment is a structured review of a building that identifies fire hazards, judges who is at risk, and sets out the actions needed to keep people safe. It is the foundation of fire safety compliance for most non-domestic and multi-occupied buildings.',
      'Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person for a premises must carry out and maintain a suitable and sufficient fire risk assessment. The responsible person is usually the employer, building owner, landlord or managing agent. The duty applies to non-domestic premises such as offices, shops and care homes, and to the communal areas of multi-occupied residential buildings such as blocks of flats and houses in multiple occupation.',
      'Since Section 156 of the Building Safety Act 2022 took effect on 1 October 2023, the assessment must be recorded in full regardless of the size of the business or the number of staff. The previous threshold that exempted smaller employers has been removed. The same change raised the maximum fine for relevant offences to an unlimited amount.',
      'If you control a commercial premises, let property, manage a block of flats, or are selling a flat in a converted building, you are very likely to need a current fire risk assessment.',
      'We take an end-to-end approach that most providers cannot match. The assessment itself is carried out by an accredited fire risk assessor we work with. You receive a written report that records the hazards found, the people at risk, and a prioritised action plan.',
      'Where that action plan identifies remedial work, J&L Security carries it out directly. We are an established Essex and Greater London fire and security company, certified by BAFE, and we install and maintain fire alarms, emergency lighting and related life-safety systems every day. That means one point of contact from the assessment through to a compliant building, rather than a report that leaves you to find separate contractors.',
    ],
    process: [
      { step: 'Free Survey and Scope', detail: 'We visit the building, agree the scope of the assessment, and confirm the right route for landlords, businesses or flat sales.' },
      { step: 'Accredited Assessment', detail: 'An accredited fire risk assessor we work with carries out the assessment, covering ignition sources, escape routes, detection, emergency lighting, fire doors and management arrangements.' },
      { step: 'Written Report and Action Plan', detail: 'You receive a written report recording the hazards, the people at risk, and a prioritised action plan that tells you what to do and in what order.' },
      { step: 'Remedial Works by J&L', detail: 'Where the action plan identifies work, we deliver it directly: fire alarms to BS 5839, emergency lighting to BS 5266, electrical testing and fire door works.' },
      { step: 'Certification and Records', detail: 'Every remedial job is documented and certified, giving you a complete record for your insurer, managing agent or an enforcing authority.' },
    ],
    whoFor: [
      'Landlords and HMO operators with communal areas and licensing duties',
      'Freeholders and managing agents of blocks of flats',
      'Offices, shops, restaurants and warehouses under the Fire Safety Order',
      'Care homes and similar premises requiring higher-risk assessments',
      'Property sellers in flats and converted houses, for conveyancing',
      'Businesses of any size since the 2023 removal of the five-employee threshold',
    ],
    pricing: '',
    faqs: [
      {
        question: 'Is a fire risk assessment a legal requirement in the UK?',
        answer: 'For most non-domestic premises and the communal areas of multi-occupied residential buildings, yes. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person to have a suitable and sufficient fire risk assessment. Since Section 156 of the Building Safety Act 2022 took effect on 1 October 2023, it must be recorded in full whatever the size of the business.',
      },
      {
        question: 'Who is the responsible person for a fire risk assessment?',
        answer: 'The responsible person is whoever has control of the premises. This is usually the employer, owner, landlord or managing agent. In a building with more than one responsible person, they must cooperate and share relevant information.',
      },
      {
        question: 'Do landlords need a fire risk assessment?',
        answer: 'Landlords are responsible for fire safety in the areas they control, including the communal parts of blocks and houses in multiple occupation. Licensed HMOs have specific requirements covering escape routes and alarm systems. A single dwelling let to one household sits outside the Fire Safety Order, but as soon as there is a shared or communal area the building is back in scope, and many landlord insurance policies expect an assessment in any case.',
      },
      {
        question: 'Do I need a fire risk assessment to sell my flat?',
        answer: 'When you sell a flat in a converted house or a block, the buyer’s solicitor or mortgage lender will often ask for a current fire risk assessment of the building’s communal areas before the sale completes. It is best treated as a common transaction requirement rather than an automatic legal duty on the individual seller. We can carry out an assessment and any remedial work to help keep a sale on track.',
      },
      {
        question: 'What is the difference between an EWS1 form and a fire risk assessment?',
        answer: 'They are different documents for different purposes. A fire risk assessment is a life-safety review of the whole building required under the Fire Safety Order. An EWS1 form is a separate document used by mortgage lenders to assess the external wall system of certain buildings for valuation. One is not a substitute for the other, and a building may need both.',
      },
      {
        question: 'How often should a fire risk assessment be reviewed?',
        answer: 'It should be reviewed regularly and kept up to date, and again whenever the building, its use or its occupants change in a way that affects fire safety. Many responsible persons review annually as good practice.',
      },
      {
        question: 'What happens if the assessment finds problems?',
        answer: 'The report sets out a prioritised action plan. Because J&L Security carries out fire alarm, emergency lighting and electrical remedial work directly, we can turn that action plan into a scheduled, certified programme of works, so you are not left to source separate contractors.',
      },
      {
        question: 'Who carries out the assessment, and what are they accredited to?',
        answer: 'The assessment is carried out by an accredited fire risk assessor we work with, and the remedial work is carried out by J&L Security, a BAFE-certified fire and security company. We will confirm the assessor’s specific accreditation when we discuss your building.',
      },
      {
        question: 'Which areas do you cover?',
        answer: 'We are based in Brentwood and cover Essex and Greater London. Call us if you want to check we cover your postcode.',
      },
    ],
    image: {
      src: '/images/fire-risk-assessments/fra-service-hero.webp',
      alt: 'Fire safety professional inspecting a UK building communal hallway with fire door, alarm panel and escape-route sign',
    },
  },
};

// ─── Page component ──────────────────────────────────────────────────────────

type Props = { params: Promise<{ service: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

const metaOverrides: Record<string, { description?: string; keywords?: string[]; title?: string }> = {
  'fire-alarms': {
    description: 'BAFE-certified fire alarm installation and servicing across Essex and Greater London. BS 5839-1 commercial systems, BS 5839-6 domestic and HMO. Fire risk assessments arranged and remedial works delivered, smoke alarm install and repair, 6-monthly servicing. Free survey.',
    keywords: [
      'fire alarm installation',
      'BAFE fire alarm maintainers',
      'BAFE certified fire alarm',
      'fire risk assessments',
      'smoke alarm install',
      'smoke alarm repair',
      'fire alarm servicing',
      'BS 5839-1',
      'BS 5839-6',
      'commercial fire alarm Essex',
      'HMO fire alarm London',
      'J&L Security',
    ],
  },
  'fire-risk-assessments': {
    title: 'Fire Risk Assessments in Essex & London | J&L Security',
    description: 'Accredited fire risk assessments for landlords, HMOs and businesses across Essex and London. We assess, then carry out the alarm and lighting remedials. Free survey.',
    keywords: [
      'fire risk assessment Essex',
      'fire risk assessment London',
      'fire risk assessment near me',
      'fire risk assessment HMO',
      'fire risk assessment landlord',
      'fire risk assessment for business',
      'fire risk assessment for flat sale',
      'BAFE fire risk assessment',
      'fire risk assessment Brentwood',
      'fire risk assessment Romford',
      'J&L Security',
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return {};
  const ext = servicePageData[serviceSlug];
  const override = metaOverrides[serviceSlug];
  const description =
    override?.description ??
    `${service.description}. Professional installation and maintenance across Essex & Greater London. Free surveys, same-day service, 24/7 support. Call J&L Security today.`;
  const keywords =
    override?.keywords ?? [
      `${service.name.toLowerCase()} Essex`,
      `${service.name.toLowerCase()} London`,
      `${service.name.toLowerCase()} installation`,
      `${service.name.toLowerCase()} maintenance`,
      'security systems Essex',
      'J&L Security',
    ];
  const title = override?.title ?? `${ext?.heroTagline ?? service.name}`;
  const ogImageUrl = ext?.image ? `${COMPANY_INFO.website}${ext.image.src}` : undefined;
  const ogImages = ogImageUrl
    ? [{ url: ogImageUrl, width: 1600, height: 900, alt: ext?.image?.alt ?? service.name }]
    : undefined;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${COMPANY_INFO.website}/services/${serviceSlug}` },
    openGraph: {
      title,
      description: override?.description ?? `${service.description}. Free surveys across Essex & Greater London.`,
      url: `${COMPANY_INFO.website}/services/${serviceSlug}`,
      type: 'website',
      images: ogImages,
    },
    twitter: ogImageUrl
      ? {
          card: 'summary_large_image',
          title,
          description,
          images: [ogImageUrl],
        }
      : undefined,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) notFound();

  const ext = servicePageData[serviceSlug];
  const Icon = icons[serviceSlug as keyof typeof icons] ?? Shield;

  // Locations where this service category appears in the matrix
  const relatedPages = serviceLocationMatrix.filter((item) => {
    const itemSlug = item.service.toLowerCase();
    const match =
      (serviceSlug === 'burglar-alarms' && (itemSlug.includes('alarm') || itemSlug.includes('smoke') || itemSlug.includes('detector') || itemSlug.includes('lock'))) ||
      (serviceSlug === 'cctv-systems' && itemSlug.includes('cctv')) ||
      (serviceSlug === 'fire-alarms' && (itemSlug.includes('fire') || itemSlug.includes('smoke') || itemSlug.includes('detector') || itemSlug.includes('bs 5839'))) ||
      (serviceSlug === 'access-control' && (itemSlug.includes('access') || itemSlug.includes('door') || itemSlug.includes('intercom') || itemSlug.includes('maglock') || itemSlug.includes('keypad') || itemSlug.includes('fob') || itemSlug.includes('video door'))) ||
      (serviceSlug === 'security-lighting' && (itemSlug.includes('lighting') || itemSlug.includes('emergency light')));
    return match;
  });

  const serviceSchema = generateServiceSchema(service.name, service.description);
  const faqSchema = ext ? generateFAQPageSchema(ext.faqs) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Services', url: `${COMPANY_INFO.website}/services` },
    { name: service.name, url: `${COMPANY_INFO.website}/services/${serviceSlug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema ? [serviceSchema, faqSchema, breadcrumbSchema] : [serviceSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-xl mb-6">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {ext?.heroTagline ?? service.name}
              </h1>
              <p className="text-xl text-primary-100 mb-8">{service.description}</p>
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
                  Book Free Survey
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      {ext && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {ext.image && (
              <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ext.image.src}
                  alt={ext.image.alt}
                  width={1600}
                  height={900}
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.name} from J&L Security</h2>
                {ext.overview.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 text-lg">{para}</p>
                ))}
                {ext.pricing && <p className="mt-6 text-lg font-medium text-primary-600">{ext.pricing}</p>}
              </div>
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Who it's for */}
      {ext && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Install For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ext.whoFor.map((item) => (
                    <div key={item} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{serviceSlug === 'fire-risk-assessments' ? 'Our Process' : 'Our Installation Process'}</h2>
                <ol className="space-y-4">
                  {ext.process.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{step.step}</p>
                        <p className="text-gray-600 text-sm mt-0.5">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related service-location pages */}
      {relatedPages.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name} Across Essex & Greater London</h2>
              <p className="text-gray-600">Local engineers covering all major towns and cities</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedPages.map((item) => {
                const serviceSlugPart = item.slug.replace(`-${item.location.toLowerCase().replace(/ /g, '-')}`, '');
                const locationSlug = item.location.toLowerCase().replace(/ /g, '-');
                return (
                  <Link
                    key={item.slug}
                    href={`/${serviceSlugPart}/${locationSlug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">{item.service}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.location}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {ext && ext.faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently Asked Questions — {service.name}
            </h2>
            <div className="space-y-4">
              {ext.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free {service.name} Survey</h2>
          <p className="text-xl mb-8 text-primary-100">
            No-obligation assessment from our qualified engineers. Same-day appointments available across Essex and Greater London.
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
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like a free ${service.name} survey`}
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
              <ArrowRight className="h-4 w-4" />
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
