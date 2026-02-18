import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Camera, Flame, Lock, Lightbulb, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { generateServiceSchema, generateFAQPageSchema } from '@/lib/schema';
import { COMPANY_INFO } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Security Services - Alarms, CCTV, Fire Protection | J&L Security',
  description: 'Professional security services across Essex & Greater London. Burglar alarms, CCTV systems, fire alarms, access control, security lighting. Free surveys, same-day service.',
  keywords: [
    'security services Essex',
    'burglar alarm installation',
    'CCTV systems London', 
    'fire alarm servicing',
    'access control systems',
    'security lighting installation',
    'alarm monitoring services',
    'emergency locksmith Essex'
  ],
  openGraph: {
    title: 'Security Services - Alarms, CCTV, Fire Protection | J&L Security',
    description: 'Professional security services across Essex & Greater London. Free surveys, same-day service, 24/7 emergency support.',
  },
  alternates: {
    canonical: `${COMPANY_INFO.website}/services`,
  },
};

const serviceDetails = [
  {
    icon: Shield,
    name: 'Intruder/Burglar Alarms',
    slug: 'burglar-alarms',
    description: 'Comprehensive burglar alarm systems for complete property protection',
    features: ['Wired & wireless systems', '24/7 monitoring available', 'Smartphone app control', 'Police response eligible', 'Pet-friendly detectors', 'NSI-equivalent installation'],
    process: ['Free security survey', 'Custom system design', 'Professional installation', 'Full system commissioning', 'User training provided', 'Ongoing maintenance'],
    benefits: ['Insurance premium discounts', 'Deterrent effect on intruders', 'Peace of mind 24/7', 'Remote monitoring capability', 'Quick emergency response'],
    priceRange: 'From £300 for basic systems',
    childPages: [
      'Wireless Alarm Installation',
      'Smart Alarm Systems', 
      'Alarm System Upgrades',
      'Alarm Servicing & Maintenance',
      'Alarm System Repairs',
      'Alarm Takeover Services'
    ]
  },
  {
    icon: Camera,
    name: 'CCTV Systems',
    slug: 'cctv-systems',
    description: 'High-definition CCTV systems for comprehensive surveillance coverage',
    features: ['4K resolution cameras', 'Night vision capability', 'Remote viewing via app', 'Cloud & local storage', 'Motion detection alerts', 'Weatherproof design'],
    process: ['Site survey & planning', 'Camera positioning design', 'Professional installation', 'Network configuration', 'Remote access setup', 'Training & handover'],
    benefits: ['Crime prevention & deterrent', 'Evidence collection capability', 'Remote property monitoring', 'Staff & visitor protection', 'Insurance compliance'],
    priceRange: 'From £500 for basic systems',
    childPages: [
      'IP Camera Systems',
      '4K CCTV Installation',
      'NVR System Upgrades', 
      'CCTV Maintenance',
      'CCTV System Repairs',
      'Commercial CCTV Solutions'
    ]
  },
  {
    icon: Flame,
    name: 'Fire Alarms',
    slug: 'fire-alarms',
    description: 'BS 5839-1 compliant fire detection systems for commercial properties and HMOs',
    features: ['BS 5839-1 compliant design', 'Smoke & heat detectors', 'Manual call points', 'Automatic fire detection', '6-monthly professional servicing', 'Emergency lighting integration'],
    process: ['Fire risk assessment', 'System design & specification', 'Installation & commissioning', 'Testing & verification', 'Documentation handover', 'Ongoing servicing schedule'],
    benefits: ['Life safety protection', 'Property damage prevention', 'Legal compliance assured', 'Insurance requirement met', 'Early fire detection'],
    priceRange: 'From £800 for small commercial',
    childPages: [
      'Commercial Fire Alarms',
      'HMO Fire Detection',
      'Fire Alarm Servicing',
      'Fire System Maintenance',
      'BS 5839-1 Compliance',
      'Fire Alarm Monitoring'
    ],
    specialNote: 'Professional fire alarm servicing is typically performed every 6 months to align with BS 5839-1 recommendations. Recent 2025 updates allow a 5–7 month window for scheduled visits, with weekly user tests advised.'
  },
  {
    icon: Lock,
    name: 'Access Control/Door Entry',
    slug: 'access-control',
    description: 'Advanced access control systems for secure entry management',
    features: ['Key fob & card systems', 'Biometric readers available', 'Video door entry', 'Magnetic door locks', 'Audit trail reporting', 'Remote access control'],
    process: ['Security needs assessment', 'System design & specification', 'Hardware installation', 'Software configuration', 'User enrollment', 'Training & support'],
    benefits: ['Controlled building access', 'Employee tracking capability', 'Visitor management system', 'Enhanced security levels', 'Remote operation possible'],
    priceRange: 'From £400 for basic systems',
    childPages: [
      'Door Entry Systems',
      'Video Intercom Installation',
      'Keypad Access Systems',
      'Biometric Access Control',
      'Magnetic Lock Installation',
      'Access System Maintenance'
    ]
  },
  {
    icon: Lightbulb,
    name: 'Security & Emergency Lighting',
    slug: 'security-lighting',
    description: 'Professional security and emergency lighting systems',
    features: ['PIR motion sensors', 'LED energy-efficient lights', 'Timer & daylight controls', 'Emergency backup power', 'Weatherproof housings', 'Automatic testing systems'],
    process: ['Lighting survey & design', 'Compliance assessment', 'Installation planning', 'Professional fitting', 'System commissioning', 'Testing & certification'],
    benefits: ['Crime deterrent effect', 'Safe evacuation routes', 'Legal compliance met', 'Energy efficient operation', 'Automatic operation'],
    priceRange: 'From £150 per light point',
    childPages: [
      'Security Lighting Installation',
      'Emergency Lighting Systems',
      'LED Security Lights',
      'PIR Sensor Lights',
      'Emergency Light Testing',
      'Lighting Maintenance'
    ]
  }
];

const additionalServices = [
  { name: 'Smoke & Heat Detectors (Domestic)', description: 'Interlinked domestic smoke and heat detection systems' },
  { name: 'Locksmith Services', description: 'Emergency lockouts, lock replacements, BS3621 security locks' },
  { name: 'Safe Fitting', description: 'Home and commercial safe installation and maintenance' },
  { name: 'Electrical Services', description: 'Minor electrical works in connection with security installations' }
];

const faqs = [
  {
    question: 'What types of properties do you work with?',
    answer: 'We work with residential homes, commercial premises, offices, retail units, warehouses, schools, healthcare facilities, and HMOs. Our systems are tailored to each property type and its specific security requirements.'
  },
  {
    question: 'Do you provide 24/7 monitoring services?',
    answer: 'Yes, we offer 24/7 alarm monitoring through our partner Alarm Receiving Centres (ARC). This includes police response for confirmed alarms, key holder callouts, and immediate notification of any system faults.'
  },
  {
    question: 'What warranties do you offer on your installations?',
    answer: 'All installations come with comprehensive warranties: 2 years on all equipment, 12 months on installation labour, and lifetime technical support. We also offer extended warranty packages for additional peace of mind.'
  },
  {
    question: 'Can you upgrade or take over existing security systems?',
    answer: 'Absolutely. We specialise in system upgrades and takeovers from other providers. We can often enhance your existing system without complete replacement, saving you money while improving functionality.'
  },
  {
    question: 'How quickly can you respond to emergency callouts?',
    answer: 'We provide 24/7 emergency response across Essex and Greater London, typically arriving within 2-4 hours depending on location and time of day. Emergency callout charges apply outside normal business hours.'
  },
  {
    question: 'Do your systems qualify for insurance discounts?',
    answer: 'Many of our professionally installed systems meet insurance company requirements and may qualify for premium discounts. We provide all necessary certification and documentation for your insurer.'
  },
  {
    question: 'What ongoing maintenance do you provide?',
    answer: 'We offer comprehensive maintenance contracts including regular system checks, software updates, battery replacements, and priority response for any issues. Maintenance schedules vary by system type and requirements.'
  },
  {
    question: 'Can I control my security systems remotely?',
    answer: 'Yes, most of our modern systems include smartphone app control, allowing you to arm/disarm alarms, view CCTV footage, receive instant alerts, and control access systems from anywhere with an internet connection.'
  }
];

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema(
    'Security System Services',
    'Comprehensive security system installation and maintenance services across Essex and Greater London'
  );
  
  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Security Services
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Comprehensive security solutions across Essex & Greater London. From burglar alarms 
              to fire protection, we provide professional installation, maintenance, and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <Icon className="h-12 w-12 text-primary-600 mr-4" />
                      <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    {service.specialNote && (
                      <div className="bg-primary-50 border-l-4 border-primary-400 p-4 mb-6">
                        <p className="text-sm text-primary-700">{service.specialNote}</p>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Our Process</h3>
                      <div className="space-y-2">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-lg font-medium text-primary-600 mb-4">{service.priceRange}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`bg-gray-50 rounded-lg p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-lg font-semibold mb-6">Specialist Services</h3>
                    <div className="space-y-3">
                      {service.childPages.map((childPage, idx) => (
                        <Link
                          key={idx}
                          href={`/services/${service.slug}/${childPage.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`}
                          className="block text-gray-700 hover:text-primary-600 transition-colors"
                        >
                          <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                            <span className="text-sm">{childPage}</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Supporting services to complement your security installation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
              <p className="text-xl mb-6 text-primary-100">
                Get a free, no-obligation security survey from our experienced engineers. 
                We'll assess your needs and recommend the most suitable security solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Call {COMPANY_INFO.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}