'use client';

import { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, whatsappLink } from '@/lib/utils';

const FALLBACK_ERROR = 'We could not send your enquiry. Please call us on one of the numbers below.';

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

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
    setErrorMessage(null);

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
        return;
      }

      // Surface the server's reason where it is safe to show, otherwise a general message.
      let reason = FALLBACK_ERROR;
      try {
        const body = (await response.json()) as { error?: string };
        if (response.status === 400 && body.error) {
          reason = body.error;
        }
      } catch {
        // Ignore a non-JSON body and keep the fallback message.
      }
      setErrorMessage(reason);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(FALLBACK_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center" role="status">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We&apos;ve received your enquiry and will call you within 2 hours during business hours.
        </p>
        <div className="flex justify-center flex-wrap gap-2">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone2}`}
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY_INFO.phone2}</span>
          </a>
          <a
            href={whatsappLink("Hi, I've just sent an enquiry through your website")}
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            target="_blank"
            rel="noopener noreferrer"
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
          <label htmlFor="quote-name" className="sr-only">Your name</label>
          <input
            id="quote-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your Name"
            required
            maxLength={120}
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="sr-only">Phone number</label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Phone Number"
            required
            maxLength={40}
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="quote-service" className="sr-only">Service</label>
          <select
            id="quote-service"
            name="service"
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
          <label htmlFor="quote-postcode" className="sr-only">Postcode</label>
          <input
            id="quote-postcode"
            type="text"
            name="postcode"
            autoComplete="postal-code"
            placeholder="Your Postcode"
            required
            maxLength={20}
            value={formData.postcode}
            onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: 'none' }}
          value={formData.honeypot}
          onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
        />

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700" role="alert">
            {errorMessage}
          </div>
        )}

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
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone2}`}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY_INFO.phone2}</span>
          </a>
          <a
            href={whatsappLink("Hi, I'd like a security quote")}
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
