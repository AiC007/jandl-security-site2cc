import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, whatsappLink } from '@/lib/utils';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
import { locations } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Service Areas - Essex & Greater London Coverage',
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
  openGraph: {
    title: 'Service Areas - Essex & Greater London Coverage',
    description: 'Find J&L Security services in your local area across Essex and Greater London.',
  },
  alternates: {
    canonical: `${COMPANY_INFO.website}/locations`,
  },
};

// Featured towns. Facts follow each town's own area page (lib/data.ts and the
// sourced locationExtended content); no populations or journey times, and no
// response-time promises, as on the area pages.
const locationData = [
  {
    name: 'Ilford',
    postcode: 'IG1-IG6',
    county: 'Greater London',
    nearbyAreas: ['Seven Kings', 'Goodmayes', 'Redbridge', 'Gants Hill', 'Chadwell Heath', 'Barking'],
    description: "The largest town centre in the London Borough of Redbridge and one of London's Metropolitan town centres",
    landmarks: ['Ilford Station', 'Exchange Ilford', 'Valentines Park', 'Redbridge Town Hall'],
    commuting: 'Elizabeth line from Ilford, Seven Kings and Goodmayes; Central line from Gants Hill and Newbury Park',
    residential: ['Cranbrook', 'Valentines', 'Seven Kings', 'Goodmayes', 'Gants Hill', 'Newbury Park']
  },
  {
    name: 'Romford',
    postcode: 'RM1-RM3, RM5, RM7',
    county: 'Greater London',
    nearbyAreas: ['Hornchurch', 'Upminster', 'Emerson Park', 'Harold Wood', 'Collier Row', 'Rush Green'],
    description: 'Historic market town and major retail centre in the London Borough of Havering, with a market first granted in 1247',
    landmarks: ['Romford Market', 'The Liberty Shopping Centre', 'Raphael Park', 'Romford Stadium'],
    commuting: 'Elizabeth line from Romford, Gidea Park and Harold Wood; London Overground (Liberty line) from Romford to Upminster',
    residential: ['Gidea Park', 'Heath Park', 'Harold Hill', 'Harold Wood', 'Collier Row', 'Rise Park']
  },
  {
    name: 'Chelmsford',
    postcode: 'CM1-CM3',
    county: 'Essex',
    nearbyAreas: ['Brentwood', 'Billericay', 'Great Baddow', 'Galleywood', 'Springfield', 'Writtle'],
    description: 'The county town of Essex, granted city status in 2012',
    landmarks: ['Chelmsford Cathedral', 'High Chelmer Shopping Centre', 'Hylands Park', 'Anglia Ruskin University'],
    commuting: 'Greater Anglia services from Chelmsford to London Liverpool Street',
    residential: ['Great Baddow', 'Galleywood', 'Springfield', 'Writtle', 'Broomfield']
  },
  {
    name: 'Brentwood',
    postcode: 'CM13-CM15',
    county: 'Essex',
    nearbyAreas: ['Billericay', 'Wickford', 'Shenfield', 'Hutton', 'Ingatestone', 'Kelvedon Hatch'],
    description: 'Market town and borough in south-west Essex, and the home of J&L Security',
    landmarks: ['Brentwood High Street', 'Thorndon Country Park', 'Brentwood Centre', 'Shenfield Common'],
    commuting: 'Elizabeth line from Brentwood and Shenfield; Greater Anglia services from Shenfield to London Liverpool Street',
    residential: ['Shenfield', 'Hutton', 'Warley', 'Great Warley', 'Ingrave', 'Herongate']
  },
  {
    name: 'Basildon',
    postcode: 'SS13-SS16',
    county: 'Essex',
    nearbyAreas: ['Wickford', 'Billericay', 'Laindon', 'Pitsea', 'Stanford-le-Hope', 'Canvey Island'],
    description: 'New town in south Essex, designated in 1949, with a major retail and business centre',
    landmarks: ['Eastgate Shopping Centre', 'Festival Leisure Park', 'Wat Tyler Country Park', 'Basildon Sporting Village'],
    commuting: 'c2c services from Basildon, Laindon and Pitsea to London Fenchurch Street',
    residential: ['Laindon', 'Pitsea', 'Vange', 'Kingswood', 'Langdon Hills']
  },
  {
    name: 'Hornchurch',
    postcode: 'RM11-RM12',
    county: 'Greater London',
    nearbyAreas: ['Upminster', 'Emerson Park', 'Elm Park', 'Rainham', 'Dagenham', 'Harold Wood'],
    description: "Suburban town in the London Borough of Havering, with a historic high street and the Queen's Theatre",
    landmarks: ['Hornchurch Country Park', "St Andrew's Church", "Queen's Theatre"],
    commuting: 'District line from Hornchurch, Upminster Bridge and Elm Park; London Overground from Emerson Park',
    residential: ['Emerson Park', 'Ardleigh Green', 'Elm Park', 'St Andrews']
  }
];

// Every area page is linked from here, straight from lib/data.ts, so a new
// page can never be missed and no link can point at a page that does not
// exist. Places covered without a page of their own are listed as plain text.
const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);
const essexLocations = locations.filter((l) => l.county === 'Essex').sort(byName);
const greaterLondonLocations = locations.filter((l) => l.county === 'Greater London').sort(byName);

const essexAlsoCovered = [
  'Billericay', 'Braintree', 'Buckhurst Hill', 'Canvey Island', 'Chigwell', 'Colchester',
  'Loughton', 'Rayleigh', 'Saffron Walden', 'Southend-on-Sea', 'Stanford-le-Hope', 'Wickford', 'Witham'
];
const greaterLondonAlsoCovered = [
  'City of London', 'Docklands', 'Havering', 'Newham', 'Tower Hamlets', 'Waltham Forest'
];

export default function LocationsPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Locations', url: `${COMPANY_INFO.website}/locations` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Locations' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Service Areas Across Essex & Greater London
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional security system installation and maintenance across Essex and Greater London,
              from our engineers based in Brentwood. Surveys are free and without obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
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
              <h3 className="text-xl font-semibold mb-2">Based in Brentwood</h3>
              <p className="text-gray-600">
                Our qualified engineers work from our base at Great Warley, Brentwood,
                and travel across Essex and Greater London.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Surveys</h3>
              <p className="text-gray-600">
                No-obligation security surveys, booked at a time that suits you.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Service</h3>
              <p className="text-gray-600">
                Installation, maintenance and monitoring of burglar alarms, CCTV, fire alarms,
                access control and security lighting.
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
              Our engineers cover a 30-mile radius from our Brentwood base, ensuring comprehensive 
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
              Six of the towns we cover, each with its own area page
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locationData.map((location) => (
              <div key={location.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.postcode} • {location.county}</p>
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
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
                  >
                    <div className="text-gray-800 font-medium text-sm">{location.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{location.postcode}</div>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Also covered: {essexAlsoCovered.join(', ')}.
              </p>
            </div>

            {/* Greater London */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Greater London Coverage</h2>
              <div className="grid grid-cols-2 gap-3">
                {greaterLondonLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
                  >
                    <div className="text-gray-800 font-medium text-sm">{location.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{location.postcode}</div>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Also covered: {greaterLondonAlsoCovered.join(', ')}.
              </p>
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
                Call {COMPANY_INFO.phone}
              </a>
              <span className="text-gray-500 mx-1">or</span>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Call {COMPANY_INFO.phone2}
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
            Our engineers provide security surveys at no cost and without obligation,
            booked at a time that suits you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="inline h-4 w-4 mr-2" />
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
              href={whatsappLink(`Hi, I'd like a free security survey in [YOUR AREA]`)}
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