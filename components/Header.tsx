'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <strong>24/7 Emergency Callouts Available</strong> - Call {COMPANY_INFO.phone} Now
      </div>

      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <div>
                <div className="text-xl font-bold text-gray-900">J&L Security</div>
                <div className="text-xs text-gray-600">Est. 2011</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">{COMPANY_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Free Survey
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 px-3 py-2 text-primary-600"
                >
                  <Phone className="h-4 w-4" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="block mx-3 mt-2 bg-primary-600 text-white px-4 py-2 rounded-md text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Survey
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}