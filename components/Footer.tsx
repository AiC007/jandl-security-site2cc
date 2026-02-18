import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
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
    <footer className="bg-gradient-to-b from-base-900 to-base-950 text-white">
      <Container size="xl" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full opacity-75"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{COMPANY_INFO.name}</div>
                <div className="text-sm text-base-400 font-medium">Est. {COMPANY_INFO.yearEstablished}</div>
              </div>
            </div>
            <p className="text-base-300 text-sm leading-relaxed">
              Professional security system installation and maintenance across Essex and Greater London. 
              Trusted by thousands of homes and businesses since 2011.
            </p>
            <div className="flex flex-wrap gap-2">
              {COMPANY_INFO.accreditations.map((acc) => (
                <Badge key={acc} variant="secondary" className="bg-base-800 text-base-300 border-base-700 hover:bg-base-700">
                  {acc}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-base-300 hover:text-primary-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Areas Served</h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-base-300 hover:text-primary-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-base-400 text-xs mt-4 font-medium">
              + All of Essex &amp; Greater London
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <div>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="text-base-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-xs text-base-400">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-base-300 hover:text-white text-sm transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-xl flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-base-300 text-sm leading-relaxed">
                  {COMPANY_INFO.address}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-base-300 text-sm leading-relaxed">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 8AM-4PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-base-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-base-400">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. 
              <span className="ml-2">Registered in England & Wales</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-base-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-base-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-base-400 hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}