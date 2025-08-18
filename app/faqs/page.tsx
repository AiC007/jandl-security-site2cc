import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Phone, MessageSquare, Search } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { generateFAQPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Security Systems | J&L Security',
  description: 'Common questions about burglar alarms, CCTV systems, fire alarms, maintenance, warranties, and emergency callouts. Expert answers from Essex & Greater London security specialists.',
  keywords: [
    'security system FAQ',
    'burglar alarm questions',
    'CCTV system help',
    'fire alarm servicing',
    'security maintenance',
    'alarm monitoring questions',
    'warranty information',
    'emergency callout help'
  ],
  alternates: {
    canonical: `${COMPANY_INFO.website}/faqs`,
  },
};

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How quickly can you respond to emergency callouts?',
        answer: 'We offer 24/7 emergency response across Essex and Greater London, typically arriving within 2-4 hours depending on location and time of day. Emergency callout charges apply outside normal business hours (Mon-Fri 8AM-6PM, Sat 8AM-4PM).'
      },
      {
        question: 'Do you provide free security surveys?',
        answer: 'Yes, we offer free, no-obligation security surveys for all new customers. Our experienced engineers will assess your property, identify potential security risks, and recommend the most suitable solutions for your needs and budget.'
      },
      {
        question: 'What areas do you cover?',
        answer: 'We provide services across Essex, Greater London, and surrounding areas within a 30-mile radius of our Romford base. This includes major towns like Ilford, Chelmsford, Brentwood, Basildon, Stratford, and many others.'
      },
      {
        question: 'Are your engineers qualified and insured?',
        answer: 'All our engineers are fully qualified with relevant certifications including NAPIT registration, ECS Gold Cards, and ongoing professional development. We maintain comprehensive insurance including Public Liability (£2M) and Employers\' Liability (£10M).'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options including staged payments for larger installations and maintenance contracts with monthly payment options. We accept cash, card payments, and bank transfers.'
      }
    ]
  },
  {
    title: 'Burglar Alarms',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What types of burglar alarms do you install?',
        answer: 'We install both wired and wireless burglar alarm systems from leading manufacturers including Texecom, Pyronix, and RISCO. Options include basic bell-only systems, monitored alarms with police response, and smart systems with smartphone app control.'
      },
      {
        question: 'Can you upgrade or take over my existing alarm system?',
        answer: 'Yes, we specialise in alarm takeovers and upgrades. We can often enhance your existing system without complete replacement, adding features like smartphone control, additional sensors, or monitoring services while maintaining your current setup.'
      },
      {
        question: 'How do I know if my alarm qualifies for police response?',
        answer: 'For police response eligibility, your system must be professionally installed to NSI/SSAIB standards and monitored through a recognised Alarm Receiving Centre (ARC). We can assess your current system and advise on any upgrades needed for police response qualification.'
      },
      {
        question: 'What maintenance do burglar alarms need?',
        answer: 'Annual maintenance is recommended to ensure reliable operation. This includes battery replacement, sensor testing, communication checks, and software updates. We offer comprehensive maintenance contracts with priority response for any issues.'
      },
      {
        question: 'Can I control my alarm system remotely?',
        answer: 'Yes, most modern systems we install include smartphone app control, allowing you to arm/disarm your alarm, receive instant notifications, and check system status from anywhere with an internet connection.'
      }
    ]
  },
  {
    title: 'CCTV Systems',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What resolution CCTV cameras do you recommend?',
        answer: '4K cameras provide excellent detail for identification purposes and are our standard recommendation. However, we\'ll assess your specific requirements, viewing distances, and budget to recommend the optimal resolution - from HD 1080p to 4K systems.'
      },
      {
        question: 'Can I view my CCTV cameras remotely?',
        answer: 'Yes, all our modern CCTV systems include remote viewing capabilities via smartphone apps or web browsers. You can view live footage, playback recordings, and receive motion detection alerts from anywhere with an internet connection.'
      },
      {
        question: 'How long can CCTV recordings be stored?',
        answer: 'Storage duration depends on the number of cameras, recording quality, and hard drive size. Typically, systems store 2-4 weeks of continuous recording. We can design systems with longer storage periods using larger drives or cloud storage solutions.'
      },
      {
        question: 'Do CCTV cameras work in the dark?',
        answer: 'Yes, all our cameras include infrared night vision capability, providing clear black and white images in complete darkness up to 30+ meters depending on the camera model. Some cameras also offer colour night vision with ambient lighting.'
      },
      {
        question: 'What ongoing maintenance do CCTV systems need?',
        answer: 'CCTV systems require minimal maintenance - mainly lens cleaning, checking connections, and software updates. We recommend annual health checks to ensure optimal performance and offer maintenance contracts with priority support.'
      }
    ]
  },
  {
    title: 'Fire Alarms',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How often should fire alarms be serviced?',
        answer: 'Professional fire alarm servicing is typically performed every 6 months to align with BS 5839-1 recommendations. Recent 2025 updates allow a 5–7 month window for scheduled visits, with weekly user tests advised. This ensures system reliability and legal compliance.'
      },
      {
        question: 'What properties require fire alarm systems?',
        answer: 'Commercial premises, HMOs (Houses in Multiple Occupation), care homes, schools, and many other non-domestic buildings require compliant fire detection systems. Requirements vary based on building use, size, and occupancy. We can assess your specific obligations.'
      },
      {
        question: 'What\'s the difference between smoke and heat detectors?',
        answer: 'Smoke detectors are ideal for most areas and detect particles from fires quickly. Heat detectors are better for areas prone to false alarms (kitchens, garages) as they detect temperature increases rather than smoke particles. We specify the right detector type for each location.'
      },
      {
        question: 'Do you provide fire alarm certificates?',
        answer: 'Yes, we provide all necessary certification including installation certificates, commissioning documents, and service records. These are essential for insurance claims, building compliance, and health & safety requirements.'
      },
      {
        question: 'Can fire alarms be connected to emergency lighting?',
        answer: 'Yes, fire alarm systems can be integrated with emergency lighting to ensure safe evacuation routes are illuminated when the alarm activates. We design and install complete fire safety systems meeting current regulations.'
      },
      {
        question: 'What happens if my fire alarm has a fault?',
        answer: 'Fire alarm faults should be addressed immediately for safety and legal compliance. We provide 24/7 emergency callouts for fire system faults, with typical response within 4 hours. Many faults can be diagnosed remotely to expedite repairs.'
      }
    ]
  },
  {
    title: 'Warranties & Pricing',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What warranties do you offer on installations?',
        answer: 'All installations include comprehensive warranties: 2 years on equipment, 12 months on installation labour, and lifetime technical support. We also offer extended warranty packages for additional peace of mind with priority support options.'
      },
      {
        question: 'How do you price your services?',
        answer: 'Pricing depends on system complexity, property size, and specific requirements. We provide transparent, fixed-price quotes with no hidden costs. Typical starting prices: burglar alarms from £300, CCTV systems from £500, fire alarms from £800.'
      },
      {
        question: 'Do your systems qualify for insurance discounts?',
        answer: 'Many of our professionally installed systems meet insurance company requirements and may qualify for premium discounts of 5-15%. We provide all necessary certification and documentation to submit to your insurer.'
      },
      {
        question: 'What\'s included in maintenance contracts?',
        answer: 'Maintenance contracts include regular system inspections, battery replacements, software updates, priority response for faults, and discounted rates on repairs. Fire alarm contracts include mandatory 6-monthly servicing and certification.'
      },
      {
        question: 'Do you charge for quotations and surveys?',
        answer: 'All surveys and quotations are completely free with no obligation. We believe you should have all the information needed to make an informed decision about your security without any upfront costs.'
      }
    ]
  }
];

const quickLinks = [
  { title: 'Emergency Callout', description: '24/7 emergency response', link: '/contact', urgent: true },
  { title: 'Free Survey', description: 'Book your security assessment', link: '/contact' },
  { title: 'Service Areas', description: 'Check if we cover your location', link: '/locations' },
  { title: 'Our Services', description: 'Complete service overview', link: '/services' }
];

export default function FAQsPage() {
  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  const faqSchema = generateFAQPageSchema(allFAQs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Expert answers to common questions about security systems, installation, 
              maintenance, and our services across Essex and Greater London.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Need immediate help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`block p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  link.urgent 
                    ? 'border-red-200 bg-red-50 hover:border-red-300' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                }`}
              >
                <h3 className={`font-semibold mb-1 ${link.urgent ? 'text-red-900' : 'text-gray-900'}`}>
                  {link.title}
                </h3>
                <p className={`text-sm ${link.urgent ? 'text-red-700' : 'text-gray-600'}`}>
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-primary-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border border-gray-200 rounded-lg">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="text-primary-600 group-open:rotate-45 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experienced team is here to help. Get in touch for expert advice and personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I have a question about security systems`}
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Base Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/services"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Service Guide</h3>
              <p className="text-gray-600 mb-4">
                Detailed information about our security services, installation process, and maintenance options.
              </p>
              <span className="text-primary-600 font-medium">Learn More →</span>
            </Link>

            <Link 
              href="/about"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">About J&L Security</h3>
              <p className="text-gray-600 mb-4">
                Learn about our experience, accreditations, team, and commitment to quality service.
              </p>
              <span className="text-primary-600 font-medium">About Us →</span>
            </Link>

            <Link 
              href="/locations"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Coverage Areas</h3>
              <p className="text-gray-600 mb-4">
                Check our service areas across Essex and Greater London, with local area information.
              </p>
              <span className="text-primary-600 font-medium">Find Your Area →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}