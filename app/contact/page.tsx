import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { COMPANY_INFO } from '@/lib/utils';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact J&L Security - Free Surveys & Emergency Callouts',
  description: 'Contact J&L Security for free security surveys, emergency callouts, and expert advice. Covering Essex & Greater London with same-day response available.',
  keywords: [
    'contact security company',
    'free security survey',
    'emergency locksmith',
    'security system quote',
    'Essex security contact',
    'London security services'
  ],
  alternates: {
    canonical: `${COMPANY_INFO.website}/contact`,
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: COMPANY_INFO.phone,
    secondary: '24/7 Emergency Line',
    description: 'Speak directly with our team for immediate assistance or to book your free survey.',
    action: `tel:${COMPANY_INFO.phone}`,
    actionText: 'Call Now'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    primary: 'WhatsApp Chat',
    secondary: 'Quick Response',
    description: 'Send us a message on WhatsApp for fast responses and easy communication.',
    action: `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like information about security systems`,
    actionText: 'Start Chat'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: COMPANY_INFO.email,
    secondary: 'Non-urgent enquiries',
    description: 'Email us for detailed enquiries, quotes, or any questions about our services.',
    action: `mailto:${COMPANY_INFO.email}`,
    actionText: 'Send Email'
  },
  {
    icon: Calendar,
    title: 'Online Booking',
    primary: 'Schedule Survey',
    secondary: 'Free & No Obligation',
    description: 'Book your free security survey online at a time that suits you.',
    action: '#booking-form',
    actionText: 'Book Survey'
  }
];

const openingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM', type: 'regular' },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM', type: 'regular' },
  { day: 'Sunday', hours: 'Emergency Only', type: 'emergency' },
  { day: 'Bank Holidays', hours: 'Emergency Only', type: 'emergency' }
];

const servicePromises = [
  'Free, no-obligation security surveys',
  'Same-day surveys available',
  'Transparent, fixed-price quotes',
  '24/7 emergency response',
  'Local engineers across Essex & Greater London',
  'Comprehensive warranties on all work'
];

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact J&L Security</h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Get your free security survey, expert advice, or emergency assistance. 
              Professional service across Essex and Greater London with same-day response available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-gray-900 mb-1">{method.primary}</p>
                  <p className="text-sm text-gray-600 mb-3">{method.secondary}</p>
                  <p className="text-gray-700 mb-4 text-sm">{method.description}</p>
                  <a
                    href={method.action}
                    className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors inline-block"
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.actionText}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Security Survey</h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and we'll contact you to arrange your free, 
                no-obligation security assessment at a time convenient for you.
              </p>
              <div id="booking-form">
                <QuickQuoteForm />
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              
              {/* Address */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                    <address className="text-gray-700 not-italic leading-relaxed">
                      {COMPANY_INFO.address}
                    </address>
                    <p className="text-sm text-gray-600 mt-2">
                      Easily accessible from the A12 and A127, with parking available on-site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                    <div className="space-y-2">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-gray-700">{schedule.day}</span>
                          <span className={`font-medium ${
                            schedule.type === 'emergency' ? 'text-orange-600' : 'text-gray-900'
                          }`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">
                        <strong>24/7 Emergency Callouts Available</strong><br />
                        Emergency charges apply outside regular hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promises */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Our Service Promise</h3>
                <ul className="space-y-2">
                  {servicePromises.map((promise, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-sm">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Centrally located in Romford for easy access across Essex and Greater London
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Google Map</p>
              <p className="text-gray-500 text-sm mt-2">
                Embed Google Maps showing our location at:<br />
                Unit 3, Security House, Romford, Essex RM1 2XX
              </p>
            </div>
          </div>

          {/* Directions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">By Car</h3>
              <p className="text-gray-700 text-sm">
                Easy access from A12 and A127. Free on-site parking available. 
                Sat nav postcode: RM1 2XX
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">By Train</h3>
              <p className="text-gray-700 text-sm">
                Romford Station: 5 minutes walk. Direct services from Liverpool Street, 
                Stratford, and Elizabeth Line connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">By Bus</h3>
              <p className="text-gray-700 text-sm">
                Multiple bus routes serve Romford. Stop at Romford Station or 
                Main Road for easy walking access to our office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t-4 border-red-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-red-900 mb-4">Emergency Callouts</h2>
          </div>
          <p className="text-xl text-red-800 mb-6">
            Security system fault? Locked out? Break-in damage? 
            We provide 24/7 emergency response across Essex and Greater London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-red-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=EMERGENCY - I need immediate assistance`}
              className="bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Emergency
            </a>
          </div>
          <p className="text-sm text-red-700 mt-4">
            Typical response time: 2-4 hours • Emergency callout charges apply
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Coverage</h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide comprehensive security services across a wide area of Essex and Greater London
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Essex', 'Greater London', 'Hertfordshire', 'Kent borders'].map((area) => (
              <div key={area} className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <span className="text-primary-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-gray-600">
              Not sure if we cover your area? 
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600 hover:text-primary-700 font-medium ml-1">
                Call us to check
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}