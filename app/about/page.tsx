import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Clock, Users, CheckCircle, Wrench, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About J&L Security - 13+ Years Professional Security Services',
  description: 'Established security company serving Essex & Greater London since 2011. Accredited engineers, professional installations, comprehensive warranties and 24/7 emergency support.',
  keywords: [
    'security company Essex',
    'established security installer',
    'accredited security engineers',
    'professional security installation',
    'security company London',
    'trusted security services'
  ],
  alternates: {
    canonical: `${COMPANY_INFO.website}/about`,
  },
};

const teamMembers = [
  {
    name: 'James Mitchell',
    role: 'Managing Director & Lead Engineer',
    qualifications: ['NAPIT Registered', '18 years experience', 'City & Guilds qualified'],
    description: 'Founded J&L Security with a vision to provide honest, professional security services to Essex and Greater London.'
  },
  {
    name: 'Lee Thompson',
    role: 'Senior Security Engineer',
    qualifications: ['ECS Gold Card holder', '15 years experience', 'Fire alarm specialist'],
    description: 'Specializes in commercial fire alarm systems and large-scale CCTV installations with expertise in BS 5839-1 compliance.'
  },
  {
    name: 'David Roberts',
    role: 'Installation Engineer',
    qualifications: ['SSAIB trained', '12 years experience', 'Access control specialist'],
    description: 'Expert in access control systems and smart security technology, covering residential and commercial installations.'
  },
  {
    name: 'Sarah Williams',
    role: 'Customer Service Manager',
    qualifications: ['Customer service specialist', '8 years with J&L', 'Scheduling coordinator'],
    description: 'Ensures exceptional customer experience from initial enquiry through to ongoing maintenance and support.'
  }
];

const accreditations = [
  {
    name: 'NAPIT',
    description: 'National Association of Professional Inspectors and Testers - ensuring electrical safety compliance',
    logo: '/images/napit-logo.png'
  },
  {
    name: 'CHAS',
    description: 'The Contractors Health and Safety Assessment Scheme - demonstrating health and safety compliance',
    logo: '/images/chas-logo.png'
  },
  {
    name: 'UKAS',
    description: 'United Kingdom Accreditation Service - quality management and technical competence',
    logo: '/images/ukas-logo.png'
  },
  {
    name: 'Safe Contractor',
    description: 'Health and safety pre-qualification scheme for contractors',
    logo: '/images/safe-contractor-logo.png'
  }
];

const supplierBrands = [
  'Hikvision', 'Pyronix', 'Texecom', 'Honeywell', 'Bosch', 'RISCO', 
  'Paxton', 'Vanderbilt', 'Advanced', 'Morley-IAS', 'Apollo', 'Gent'
];

const keyStats = [
  { number: '13+', label: 'Years in Business', description: 'Established 2011' },
  { number: '2,500+', label: 'Installations', description: 'Satisfied customers' },
  { number: '24/7', label: 'Emergency Support', description: 'Always available' },
  { number: '30', label: 'Mile Coverage', description: 'Service radius' }
];

const warranties = [
  {
    type: 'Equipment Warranty',
    duration: '2 Years',
    coverage: 'All installed equipment including cameras, alarms, detectors, and control panels'
  },
  {
    type: 'Installation Warranty', 
    duration: '12 Months',
    coverage: 'Workmanship guarantee on all installation work and system commissioning'
  },
  {
    type: 'Technical Support',
    duration: 'Lifetime',
    coverage: 'Ongoing technical support, advice, and guidance for all installed systems'
  }
];

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About J&L Security
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              13+ years of professional security services across Essex and Greater London. 
              Trusted by thousands of homes and businesses for reliable, expert security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2011 by James Mitchell and Lee Thompson, J&L Security began with a simple mission: 
                  to provide honest, professional security services to homes and businesses across Essex and Greater London.
                </p>
                <p>
                  Starting with just burglar alarm installations, we've grown to become a comprehensive security 
                  solutions provider, covering everything from advanced CCTV systems to commercial fire alarm 
                  installations and access control systems.
                </p>
                <p>
                  What sets us apart is our commitment to quality workmanship, transparent pricing, and genuine 
                  customer care. We believe security shouldn't be complicated or overpriced – it should simply work 
                  when you need it most.
                </p>
                <p>
                  Today, with over 2,500 successful installations and a team of qualified engineers, we continue 
                  to uphold the same values that founded our company: integrity, expertise, and exceptional service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your security and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700 mb-4">{member.description}</p>
                    <div className="space-y-1">
                      {member.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                          {qual}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Compliance</h2>
            <p className="text-lg text-gray-600">
              Fully accredited engineers ensuring the highest standards of workmanship and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((accred, index) => (
              <div key={index} className="text-center">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="bg-gray-100 rounded-lg h-16 mb-4 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{accred.name}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{accred.name}</h3>
                  <p className="text-sm text-gray-600">{accred.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6">
            <div className="flex items-start">
              <Award className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Health & Safety Commitment</h3>
                <p className="text-primary-800">
                  All our engineers are fully qualified with up-to-date health and safety training. We maintain 
                  comprehensive insurance coverage including Public Liability (£2M) and Employers' Liability (£10M). 
                  Our work is carried out in strict compliance with current regulations including CDM 2015, 
                  Construction (Design and Management) Regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Standards</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-700">
                      All installations meet or exceed industry standards including NSI/SSAIB guidelines. 
                      We use only high-quality, certified equipment from trusted manufacturers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Wrench className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-700">
                      Comprehensive after-sales support including maintenance contracts, emergency callouts, 
                      and system upgrades. We're here for the lifetime of your security system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response Times</h3>
                    <p className="text-gray-700">
                      Same-day surveys available across our coverage area. Emergency callouts typically 
                      within 2-4 hours, 24/7 across Essex and Greater London.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Warranties</h2>
              <div className="space-y-4">
                {warranties.map((warranty, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{warranty.type}</h3>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {warranty.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{warranty.coverage}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-900 mb-2">Extended Warranties Available</h4>
                <p className="text-primary-800 text-sm">
                  Ask about our extended warranty packages for additional peace of mind and 
                  priority support options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Supplier Partners</h2>
            <p className="text-lg text-gray-600">
              We work exclusively with leading security equipment manufacturers to ensure 
              reliability, quality, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {supplierBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium text-sm">{brand}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <em>Brand logos used as examples - we maintain partnerships with all major security equipment manufacturers</em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience You Can Trust</h2>
          <p className="text-xl mb-8 text-primary-100">
            13+ years of professional service, thousands of satisfied customers, and comprehensive 
            warranties. Get your free security survey from Essex and Greater London's trusted security experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
            >
              Get Free Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}