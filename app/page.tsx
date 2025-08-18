import Link from 'next/link';
import { Shield, Camera, Flame, Lock, Lightbulb, Clock, CheckCircle, Star } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { COMPANY_INFO } from '@/lib/utils';
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema';

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema(
    'Security System Installation',
    'Professional security system installation and maintenance across Essex and Greater London'
  );

  const services = [
    {
      icon: Shield,
      name: 'Burglar Alarms',
      description: 'Wireless & wired systems with 24/7 monitoring and smartphone app control',
      features: ['Same-day surveys', 'NSI-equivalent standards', 'Insurance approved'],
      link: '/services/burglar-alarms'
    },
    {
      icon: Camera,
      name: 'CCTV Systems',
      description: '4K resolution cameras with night vision and remote viewing capabilities',
      features: ['Cloud storage', 'Motion detection', 'Professional installation'],
      link: '/services/cctv-systems'
    },
    {
      icon: Flame,
      name: 'Fire Alarms',
      description: 'BS 5839-1 compliant systems for commercial properties and HMOs',
      features: ['6-monthly servicing', 'Emergency lighting', 'Legal compliance'],
      link: '/services/fire-alarms'
    },
    {
      icon: Lock,
      name: 'Access Control',
      description: 'Key fobs, biometric readers, and video intercom systems',
      features: ['Audit trails', 'Remote control', 'Visitor management'],
      link: '/services/access-control'
    }
  ];

  const testimonials = [
    {
      text: "Excellent service from J&L Security. Professional installation and great ongoing support for our office CCTV system.",
      author: "Sarah Johnson",
      location: "Romford",
      rating: 5
    },
    {
      text: "Quick response to our emergency alarm fault. Engineer arrived within 2 hours and fixed the issue professionally.",
      author: "Mark Thompson", 
      location: "Ilford",
      rating: 5
    },
    {
      text: "Competitive pricing and quality installation. Would definitely recommend for anyone in Essex needing security systems.",
      author: "Lisa Chen",
      location: "Chelmsford", 
      rating: 5
    }
  ];

  const trustBadges = [
    'NAPIT Approved',
    'CHAS Accredited',
    'UKAS Certified',
    'Safe Contractor'
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {COMPANY_INFO.tagline}
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Professional security systems with same-day surveys, NSI-equivalent standards, 
                and 24/7 monitoring options. Trusted by thousands across Essex and Greater London since 2011.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Call {COMPANY_INFO.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center"
                >
                  Book Free Survey
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span key={badge} className="bg-primary-500 px-3 py-1 rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Same-Day Surveys</h3>
              <p className="text-gray-600 text-sm">Free security assessments available today</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">NSI Standards</h3>
              <p className="text-gray-600 text-sm">Professional installation to industry standards</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600 text-sm">Round-the-clock monitoring and support</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local Engineers</h3>
              <p className="text-gray-600 text-sm">Essex & Greater London based team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From burglar alarms to fire protection, we provide comprehensive security solutions 
              for homes and businesses across Essex and Greater London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-primary-600 mr-4" />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Coverage Across Essex & Greater London
            </h2>
            <p className="text-xl text-gray-600">
              Professional security system installation and maintenance in your local area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Ilford', 'Romford', 'Chelmsford', 'Brentwood', 'Basildon', 'Hornchurch', 
              'Barking', 'Redbridge', 'Enfield', 'Stratford', 'Canary Wharf', 'Greenwich'].map((location) => (
              <div key={location} className="bg-white p-4 rounded-lg shadow-sm">
                <Link 
                  href={`/locations/${location.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {location}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              See All Coverage Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a free, no-obligation security survey from our professional engineers. 
            Same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like a free security survey`}
              className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}