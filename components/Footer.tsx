import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';

export default function Footer() {
  const serviceLinks = [
    { name: 'Burglar Alarms', href: '/services/burglar-alarms' },
    { name: 'CCTV Systems', href: '/services/cctv-systems' },
    { name: 'Fire Alarms', href: '/services/fire-alarms' },
    { name: 'Access Control', href: '/services/access-control' },
    { name: 'Security Lighting', href: '/services/security-lighting' },
  ];

  const locationLinks = [
    { name: 'Ilford', href: '/locations/ilford' },
    { name: 'Romford', href: '/locations/romford' },
    { name: 'Chelmsford', href: '/locations/chelmsford' },
    { name: 'Brentwood', href: '/locations/brentwood' },
    { name: 'Basildon', href: '/locations/basildon' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-400" />
              <div>
                <div className="text-xl font-bold">{COMPANY_INFO.name}</div>
                <div className="text-sm text-gray-400">Est. {COMPANY_INFO.yearEstablished}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional security system installation and maintenance across Essex and Greater London. 
              Trusted by thousands of homes and businesses since 2011.
            </p>
            <div className="flex space-x-2">
              {COMPANY_INFO.accreditations.map((acc) => (
                <div key={acc} className="bg-gray-800 px-2 py-1 rounded text-xs">
                  {acc}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas Served</h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-xs mt-3">
              + All of Essex &amp; Greater London
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-xs text-gray-400">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  {COMPANY_INFO.address}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 8AM-4PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. 
              Company Registration: 12345678
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}