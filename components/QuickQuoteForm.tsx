'use client';

import { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    postcode: '',
    honeypot: '', // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Burglar Alarms',
    'CCTV Systems',
    'Fire Alarms',
    'Access Control',
    'Security Lighting',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection
    if (formData.honeypot) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          timeSpent: Date.now() - startTime,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [startTime] = useState(Date.now());

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We&apos;ve received your enquiry and will call you within 2 hours during business hours.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Get Your Free Security Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Postcode"
            required
            value={formData.postcode}
            onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          style={{ display: 'none' }}
          value={formData.honeypot}
          onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-600 text-center mb-3">
          Or contact us directly:
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like a security quote`}
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}