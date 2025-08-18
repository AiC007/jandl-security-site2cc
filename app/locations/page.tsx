import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Service Areas - Essex & Greater London Coverage | J&L Security',
  description: 'J&L Security provides professional security system services across Essex and Greater London. Find your local area for burglar alarms, CCTV, fire alarms and access control.',
  keywords: [
    'security services Essex',
    'security systems Greater London',
    'alarm installation Essex',
    'CCTV installation London',
    'fire alarm services Essex',
    'security company London',
    'local security installer'
  ],
  alternates: {
    canonical: `${COMPANY_INFO.website}/locations`,
  },
};

const locationData = [
  {
    name: 'Ilford',
    postcode: 'IG1-IG6',
    county: 'Greater London',
    nearbyAreas: ['Seven Kings', 'Goodmayes', 'Redbridge', 'Gants Hill', 'Chadwell Heath', 'Barking'],
    population: '168,000',
    description: 'Major town in East London with excellent transport links to Central London',
    landmarks: ['Ilford Station', 'The Exchange Shopping Centre', 'Valentines Park', 'Redbridge Town Hall'],
    commuting: 'Direct rail links to Liverpool Street (22 mins) and Stratford (15 mins)',
    residential: ['Valentine', 'Seven Kings', 'Goodmayes', 'Newbury Park', 'Gants Hill', 'Redbridge']
  },
  {
    name: 'Romford',
    postcode: 'RM1-RM3',
    county: 'Greater London',
    nearbyAreas: ['Hornchurch', 'Upminster', 'Emerson Park', 'Harold Wood', 'Collier Row', 'Rush Green'],
    population: '122,000',
    description: 'Historic market town and major retail center in East London',
    landmarks: ['Romford Market', 'The Liberty Shopping Centre', 'Raphael Park', 'Romford Stadium'],
    commuting: 'Elizabeth Line and TfL Rail to Central London (35 mins to Bond Street)',
    residential: ['Gidea Park', 'Harold Wood', 'Rise Park', 'Collier Row', 'Heath Park']
  },
  {
    name: 'Chelmsford',
    postcode: 'CM1-CM3',
    county: 'Essex',
    nearbyAreas: ['Brentwood', 'Billericay', 'Great Baddow', 'Galleywood', 'Springfield', 'Writtle'],
    population: '180,000',
    description: 'County town of Essex with thriving business district and university',
    landmarks: ['Chelmsford Cathedral', 'High Chelmer Shopping Centre', 'Hylands Park', 'Anglia Ruskin University'],
    commuting: 'Direct rail to London Liverpool Street (35 mins)',
    residential: ['Great Baddow', 'Galleywood', 'Springfield', 'Writtle', 'Broomfield']
  },
  {
    name: 'Brentwood',
    postcode: 'CM13-CM15',
    county: 'Essex',
    nearbyAreas: ['Billericay', 'Wickford', 'Shenfield', 'Hutton', 'Ingatestone', 'Kelvedon Hatch'],
    population: '76,000',
    description: 'Affluent town known for excellent schools and green spaces',
    landmarks: ['Brentwood High Street', 'Thorndon Country Park', 'Brentwood Centre', 'Shenfield Common'],
    commuting: 'Elizabeth Line to Central London (45 mins to Liverpool Street)',
    residential: ['Shenfield', 'Hutton', 'Ingrave', 'Herongate', 'South Weald']
  },
  {
    name: 'Basildon',
    postcode: 'SS13-SS16',
    county: 'Essex',
    nearbyAreas: ['Wickford', 'Billericay', 'Laindon', 'Pitsea', 'Stanford-le-Hope', 'Canvey Island'],
    population: '185,000',
    description: 'New town with major retail and business centers',
    landmarks: ['Eastgate Shopping Centre', 'Festival Leisure Park', 'Wat Tyler Country Park', 'Basildon Sporting Village'],
    commuting: 'C2C line to London Fenchurch Street (45 mins)',
    residential: ['Laindon', 'Pitsea', 'Vange', 'Kingswood', 'Langdon Hills']
  },
  {
    name: 'Hornchurch',
    postcode: 'RM11-RM12',
    county: 'Greater London',
    nearbyAreas: ['Upminster', 'Emerson Park', 'Elm Park', 'Rainham', 'Dagenham', 'Harold Wood'],
    population: '43,000',
    description: 'Suburban town with historic high street and country parks',
    landmarks: ['Queen Elizabeth II Country Park', 'Hornchurch Country Park', 'The Bull pub', 'St Andrew\'s Church'],
    commuting: 'District Line to Central London (50 mins to Westminster)',
    residential: ['Emerson Park', 'Ardleigh Green', 'Elm Park', 'St Andrews']
  }
];

const essexLocations = [
  'Basildon', 'Billericay', 'Brentwood', 'Canvey Island', 'Chelmsford', 'Colchester', 
  'Epping', 'Harlow', 'Loughton', 'Rayleigh', 'Southend-on-Sea', 'Stanford-le-Hope',
  'Wickford', 'Witham', 'Buckhurst Hill', 'Chigwell', 'Saffron Walden', 'Braintree'
];

const greaterLondonLocations = [
  'Barking', 'Dagenham', 'Enfield', 'Greenwich', 'Hackney', 'Havering', 'Ilford',
  'Islington', 'Newham', 'Redbridge', 'Romford', 'Stratford', 'Tower Hamlets',
  'Waltham Forest', 'Woolwich', 'Canary Wharf', 'Docklands', 'City of London'
];

export default function LocationsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Service Areas Across Essex & Greater London
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional security system installation and maintenance in your local area. 
              Same-day surveys available, with local engineers covering all major towns and cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Call {COMPANY_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
              >
                Book Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Engineers</h3>
              <p className="text-gray-600">
                Our team of qualified engineers are based across Essex and Greater London, 
                ensuring quick response times and local knowledge.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
              <p className="text-gray-600">
                Free security surveys available same-day across our coverage area. 
                Emergency callouts within 2-4 hours.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Coverage</h3>
              <p className="text-gray-600">
                Complete security services including installation, maintenance, 
                monitoring and emergency support across all areas.
              </p>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Coverage Map</h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
              <p className="text-gray-600">
                Interactive map showing Essex & Greater London coverage area
                <br />
                <small>(Map integration available - Google Maps embed or custom solution)</small>
              </p>
            </div>
            <p className="text-gray-700">
              Our engineers cover a 30-mile radius from our Romford base, ensuring comprehensive 
              coverage across Essex, Greater London, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Service Areas</h2>
            <p className="text-lg text-gray-600">
              Detailed local knowledge and established presence in key locations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locationData.map((location) => (
              <div key={location.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.postcode} • {location.county}</p>
                    <p className="text-sm text-gray-500">Population: {location.population}</p>
                  </div>
                  <Link
                    href={`/locations/${location.name.toLowerCase()}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    View Services
                  </Link>
                </div>

                <p className="text-gray-700 mb-4">{location.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Key Landmarks</h4>
                    <p className="text-sm text-gray-600">{location.landmarks.join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Transport Links</h4>
                    <p className="text-sm text-gray-600">{location.commuting}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Surrounding Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.nearbyAreas.slice(0, 4).map((area) => (
                        <span key={area} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {area}
                        </span>
                      ))}
                      {location.nearbyAreas.length > 4 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{location.nearbyAreas.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Residential Areas</h4>
                    <p className="text-sm text-gray-600">{location.residential.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Essex */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Essex Coverage</h2>
              <div className="grid grid-cols-2 gap-3">
                {essexLocations.map((location) => (
                  <Link
                    key={location}
                    href={`/locations/${location.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
                  >
                    <div className="text-gray-800 font-medium text-sm">{location}</div>
                    <div className="text-xs text-gray-600 mt-1">Security Services Available</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Greater London */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Greater London Coverage</h2>
              <div className="grid grid-cols-2 gap-3">
                {greaterLondonLocations.map((location) => (
                  <Link
                    key={location}
                    href={`/locations/${location.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
                  >
                    <div className="text-gray-800 font-medium text-sm">{location}</div>
                    <div className="text-xs text-gray-600 mt-1">Security Services Available</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3">Don't see your area listed?</h3>
              <p className="text-gray-600 mb-4">
                We cover additional areas throughout Essex, Greater London, and surrounding counties. 
                Contact us to confirm coverage for your specific location.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Check Coverage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Free Security Survey?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our local engineers provide comprehensive security assessments at no cost. 
            Same-day appointments available across all our service areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="inline h-4 w-4 mr-2" />
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like a free security survey in [YOUR AREA]`}
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Quote
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
            >
              Online Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}