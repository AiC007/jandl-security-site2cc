import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Clock, CheckCircle, Wrench, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

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
  openGraph: {
    title: 'About J&L Security - 13+ Years Professional Security Services',
    description: 'Established security company serving Essex & Greater London since 2011. Accredited engineers and 24/7 emergency support.',
  },
  alternates: {
    canonical: `${COMPANY_INFO.website}/about`,
  },
};


const accreditations = [
  {
    name: 'SSAIB',
    description: 'Security Systems and Alarms Inspection Board - ensuring quality installation and maintenance standards',
    logo: '/images/ssaib-logo.png'
  },
  {
    name: 'CHAS',
    description: 'The Contractors Health and Safety Assessment Scheme - demonstrating health and safety compliance',
    logo: '/images/chas-logo.png'
  },
  {
    name: 'FIA',
    description: 'Fire Industry Association - representing fire safety professionals and ensuring industry standards',
    logo: '/images/fia-logo.png'
  },
  {
    name: 'BAFE',
    description: 'British Approvals for Fire Equipment - independent third-party certification for fire safety',
    logo: '/images/bafe-logo.png'
  }
];

const supplierBrands = [
  'Pyronix', 'Advanced', 'Paxton', 'Comelit', 'Uniview', 'C-Tech',
  'Fike', 'Haes', 'Kentech', 'EDA', 'EMS', 'Smartcell', 'Zeta'
];

const keyStats = [
  { number: '13+', label: 'Years in Business', description: 'Established 2011' },
  { number: '2,500+', label: 'Installations', description: 'Satisfied customers' },
  { number: '24/7', label: 'Emergency Support', description: 'Always available' },
  { number: '30', label: 'Mile Coverage', description: 'Service radius' }
];

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'About', url: `${COMPANY_INFO.website}/about` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, breadcrumbSchema]),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About' }]} />

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
                  J&L Security began with a simple mission:
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
                <p className="text-gray-700 leading-relaxed mt-4 bg-primary-50 border border-primary-200 rounded-lg p-4">
                  J&L Security trades as part of the same team behind J&L Alarms, bringing over 13 years of
                  experience under one dedicated security brand.
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
                  Our work is carried out in strict compliance with current regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quality Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Shield className="h-6 w-6 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-700">
                All installations meet or exceed industry standards including SSAIB guidelines.
                We use only high-quality, certified equipment from trusted manufacturers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Wrench className="h-6 w-6 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-700">
                Comprehensive after-sales support including maintenance contracts, emergency callouts,
                and system upgrades. We're here for the lifetime of your security system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Clock className="h-6 w-6 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Response Times</h3>
              <p className="text-gray-700">
                Same-day surveys available across our coverage area. Emergency callouts typically
                within 2-4 hours, 24/7 across Essex and Greater London.
              </p>
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
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4" />
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