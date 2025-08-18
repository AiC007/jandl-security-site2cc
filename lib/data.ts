import { Service, Location, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'burglar-alarms',
    name: 'Burglar Alarms',
    slug: 'burglar-alarms',
    description: 'Professional burglar alarm installation and monitoring services',
    category: 'alarms',
    features: ['Wireless & wired systems', '24/7 monitoring', 'Smart phone app control', 'Police response eligible', 'Pet-friendly detectors'],
    benefits: ['Deterrent effect', 'Insurance discounts', 'Peace of mind', 'Remote monitoring', 'Quick emergency response']
  },
  {
    id: 'cctv-systems',
    name: 'CCTV Systems',
    slug: 'cctv-systems',
    description: 'High-definition CCTV installation and maintenance',
    category: 'cctv',
    features: ['4K resolution cameras', 'Night vision', 'Remote viewing', 'Cloud storage', 'Motion detection'],
    benefits: ['Crime prevention', 'Evidence collection', 'Remote monitoring', 'Staff protection', 'Property security']
  },
  {
    id: 'fire-alarms',
    name: 'Fire Alarms',
    slug: 'fire-alarms',
    description: 'Commercial and residential fire alarm systems',
    category: 'fire',
    features: ['BS 5839-1 compliant', 'Smoke & heat detectors', 'Automatic monitoring', 'Emergency lighting', '6-monthly servicing'],
    benefits: ['Life protection', 'Property protection', 'Insurance compliance', 'Legal compliance', 'Early detection']
  },
  {
    id: 'access-control',
    name: 'Access Control',
    slug: 'access-control',
    description: 'Door entry and access control systems',
    category: 'access',
    features: ['Key fobs & cards', 'Biometric readers', 'Video intercoms', 'Magnetic locks', 'Audit trails'],
    benefits: ['Restricted access', 'Employee tracking', 'Visitor management', 'Enhanced security', 'Remote control']
  },
  {
    id: 'security-lighting',
    name: 'Security Lighting',
    slug: 'security-lighting',
    description: 'External security and emergency lighting systems',
    category: 'lighting',
    features: ['PIR sensors', 'LED technology', 'Timer controls', 'Emergency backup', 'Weather resistant'],
    benefits: ['Crime deterrent', 'Safe navigation', 'Energy efficient', 'Automatic operation', 'Long lifespan']
  }
];

export const locations: Location[] = [
  {
    id: 'ilford',
    name: 'Ilford',
    slug: 'ilford',
    county: 'Greater London',
    postcode: 'IG1-IG6',
    nearbyAreas: ['Seven Kings', 'Goodmayes', 'Redbridge', 'Gants Hill'],
    landmarks: ['Ilford Station', 'The Exchange Shopping Centre', 'Valentines Park']
  },
  {
    id: 'romford',
    name: 'Romford',
    slug: 'romford',
    county: 'Greater London',
    postcode: 'RM1-RM3',
    nearbyAreas: ['Hornchurch', 'Upminster', 'Emerson Park', 'Harold Wood'],
    landmarks: ['Romford Station', 'The Liberty Shopping Centre', 'Raphael Park']
  },
  {
    id: 'chelmsford',
    name: 'Chelmsford',
    slug: 'chelmsford',
    county: 'Essex',
    postcode: 'CM1-CM3',
    nearbyAreas: ['Brentwood', 'Billericay', 'Great Baddow', 'Galleywood'],
    landmarks: ['Chelmsford Cathedral', 'High Chelmer Shopping Centre', 'Hylands Park']
  },
  {
    id: 'brentwood',
    name: 'Brentwood',
    slug: 'brentwood',
    county: 'Essex',
    postcode: 'CM13-CM15',
    nearbyAreas: ['Billericay', 'Wickford', 'Shenfield', 'Hutton'],
    landmarks: ['Brentwood High Street', 'Thorndon Country Park', 'Brentwood Centre']
  },
  {
    id: 'basildon',
    name: 'Basildon',
    slug: 'basildon',
    county: 'Essex',
    postcode: 'SS13-SS16',
    nearbyAreas: ['Wickford', 'Billericay', 'Laindon', 'Pitsea'],
    landmarks: ['Eastgate Shopping Centre', 'Basildon Sporting Village', 'Wat Tyler Country Park']
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How quickly can you respond to emergency callouts?',
    answer: 'We offer 24/7 emergency response across Essex and Greater London, typically arriving within 2-4 hours depending on location and time of day.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Do you provide free security surveys?',
    answer: 'Yes, we offer free, no-obligation security surveys for all new customers. Our engineers will assess your property and recommend the most suitable security solutions.',
    category: 'general'
  },
  {
    id: '3',
    question: 'What warranties do you offer on installations?',
    answer: 'All our installations come with comprehensive warranties: 2 years on equipment, 12 months on labour, and lifetime technical support. We also offer extended warranty options.',
    category: 'warranty'
  },
  {
    id: '4',
    question: 'How often should fire alarms be serviced?',
    answer: 'Professional fire alarm servicing is typically performed every 6 months to align with BS 5839-1 recommendations. Recent 2025 updates allow a 5-7 month window for scheduled visits, with weekly user tests advised.',
    category: 'fire-alarms'
  },
  {
    id: '5',
    question: 'Can you takeover existing alarm systems?',
    answer: 'Yes, we specialise in taking over existing systems from other providers. We\'ll assess your current setup and can often upgrade or maintain it without full replacement.',
    category: 'alarms'
  },
  {
    id: '6',
    question: 'Do your systems qualify for insurance discounts?',
    answer: 'Many of our NSI/SSAIB equivalent systems qualify for insurance premium discounts. We\'ll provide certification documentation to submit to your insurer.',
    category: 'insurance'
  },
  {
    id: '7',
    question: 'What CCTV resolution do you recommend?',
    answer: '4K cameras provide excellent detail for identification purposes. However, we\'ll recommend the optimal resolution based on your specific requirements and budget.',
    category: 'cctv'
  },
  {
    id: '8',
    question: 'Can I control my security system remotely?',
    answer: 'Yes, most of our modern systems include smartphone app control, allowing you to arm/disarm alarms, view CCTV footage, and receive alerts remotely.',
    category: 'technology'
  }
];

// Service-Location combinations for the 50 pages
export const serviceLocationMatrix = [
  { service: 'Burglar Alarm Installation', location: 'Ilford', slug: 'burglar-alarm-installation-ilford' },
  { service: 'Burglar Alarm Servicing', location: 'Romford', slug: 'burglar-alarm-servicing-romford' },
  { service: 'Wireless Alarm Installation', location: 'Hornchurch', slug: 'wireless-alarm-installation-hornchurch' },
  { service: 'Alarm Repairs', location: 'Upminster', slug: 'alarm-repairs-upminster' },
  { service: 'Alarm Monitoring', location: 'Barking', slug: 'alarm-monitoring-barking' },
  { service: 'CCTV Installation', location: 'Goodmayes', slug: 'cctv-installation-goodmayes' },
  { service: 'CCTV Repairs', location: 'Seven Kings', slug: 'cctv-repairs-seven-kings' },
  { service: 'CCTV Maintenance', location: 'Dagenham', slug: 'cctv-maintenance-dagenham' },
  { service: 'Commercial CCTV Installation', location: 'Redbridge', slug: 'commercial-cctv-installation-redbridge' },
  { service: 'Home CCTV Installation', location: 'Wanstead', slug: 'home-cctv-installation-wanstead' },
  { service: 'Fire Alarm Installation (Commercial)', location: 'Brentwood', slug: 'fire-alarm-installation-brentwood' },
  { service: 'Fire Alarm Servicing (6-monthly)', location: 'Chelmsford', slug: 'fire-alarm-servicing-chelmsford' },
  { service: 'Fire Alarm Maintenance', location: 'Harlow', slug: 'fire-alarm-maintenance-harlow' },
  { service: 'HMO Fire Alarm Testing', location: 'Basildon', slug: 'hmo-fire-alarm-testing-basildon' },
  { service: 'Access Control Installation', location: 'Chigwell', slug: 'access-control-installation-chigwell' },
  { service: 'Door Entry Systems', location: 'Loughton', slug: 'door-entry-systems-loughton' },
  { service: 'Video Intercom Installation', location: 'Buckhurst Hill', slug: 'video-intercom-installation-buckhurst-hill' },
  { service: 'Security Lighting Installation', location: 'Woodford', slug: 'security-lighting-installation-woodford' },
  { service: 'Emergency Lighting Testing', location: 'Walthamstow', slug: 'emergency-lighting-testing-walthamstow' },
  { service: 'Smoke & Heat Detectors (Domestic)', location: 'South Woodford', slug: 'smoke-heat-detectors-south-woodford' },
  { service: 'Alarm Takeover & Upgrade', location: 'Emerson Park', slug: 'alarm-takeover-upgrade-emerson-park' },
  { service: 'Burglar Alarm Installation', location: 'Epping', slug: 'burglar-alarm-installation-epping' },
  { service: 'Burglar Alarm Repairs', location: 'Chadwell Heath', slug: 'burglar-alarm-repairs-chadwell-heath' },
  { service: 'Smart Alarm Installation', location: 'Hainault', slug: 'smart-alarm-installation-hainault' },
  { service: 'CCTV for Businesses', location: 'Enfield', slug: 'cctv-for-businesses-enfield' },
  { service: 'CCTV Upgrades to 4K', location: 'Stratford', slug: 'cctv-upgrades-4k-stratford' },
  { service: 'Fire Alarm Commissioning', location: 'Canary Wharf', slug: 'fire-alarm-commissioning-canary-wharf' },
  { service: 'Fire Alarm Fault Finding', location: 'City of London', slug: 'fire-alarm-fault-finding-city' },
  { service: 'Fire Alarm Monitoring', location: 'Greenwich', slug: 'fire-alarm-monitoring-greenwich' },
  { service: 'BS 5839-1 Compliance Audits', location: 'Docklands', slug: 'bs5839-compliance-docklands' },
  { service: 'Access Control Maintenance', location: 'Islington', slug: 'access-control-maintenance-islington' },
  { service: 'Keypad/Fob Systems', location: 'Barnet', slug: 'keypad-fob-systems-barnet' },
  { service: 'Video Door Entry', location: 'Ealing', slug: 'video-door-entry-ealing' },
  { service: 'Maglock Installation', location: 'Harrow', slug: 'maglock-installation-harrow' },
  { service: 'Emergency Locksmith', location: 'Romford', slug: 'emergency-locksmith-romford' },
  { service: 'BS3621 Locks Fitted', location: 'Ilford', slug: 'bs3621-locks-ilford' },
  { service: 'Safe Fitting', location: 'Brentwood', slug: 'safe-fitting-brentwood' },
  { service: 'Security Lighting Maintenance', location: 'Upminster', slug: 'security-lighting-maintenance-upminster' },
  { service: 'Emergency Lighting Installation', location: 'Billericay', slug: 'emergency-lighting-installation-billericay' },
  { service: 'Domestic Smoke Alarm Install', location: 'Basildon', slug: 'domestic-smoke-alarm-install-basildon' },
  { service: 'Interlinked Detectors', location: 'Chelmsford', slug: 'interlinked-detectors-chelmsford' },
  { service: 'Alarm Monitoring with App', location: 'Barking', slug: 'alarm-monitoring-app-barking' },
  { service: 'Police Response Eligibility', location: 'Redbridge', slug: 'police-response-eligibility-redbridge' },
  { service: 'Takeover Old Alarms', location: 'Dagenham', slug: 'takeover-old-alarms-dagenham' },
  { service: 'CCTV Remote Viewing Setup', location: 'Goodmayes', slug: 'cctv-remote-viewing-goodmayes' },
  { service: 'CCTV Annual Maintenance', location: 'Wanstead', slug: 'cctv-annual-maintenance-wanstead' },
  { service: 'Fire Alarm Annual Service', location: 'Harlow', slug: 'fire-alarm-annual-service-harlow' },
  { service: 'HMO Alarm Packages', location: 'Stratford', slug: 'hmo-alarm-packages-stratford' },
  { service: 'Access Control Upgrades', location: 'Chigwell', slug: 'access-control-upgrades-chigwell' },
  { service: 'Door Entry Repairs', location: 'Loughton', slug: 'door-entry-repairs-loughton' }
];