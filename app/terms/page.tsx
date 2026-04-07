import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${COMPANY_INFO.name}. Conditions governing the use of our website and services.`,
  alternates: {
    canonical: `${COMPANY_INFO.website}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-100">Last updated: 7 April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            These terms of service (&quot;Terms&quot;) govern your use of the {COMPANY_INFO.name} website
            at {COMPANY_INFO.website} and any services provided by {COMPANY_INFO.name}. By using our
            website or engaging our services, you agree to these Terms.
          </p>

          <h2>2. Our Services</h2>
          <p>
            {COMPANY_INFO.name} provides security system installation, maintenance, and emergency callout
            services across Essex and Greater London. Services include burglar alarm installation, CCTV
            system installation, fire alarm installation and servicing, access control systems, and
            security lighting.
          </p>

          <h2>3. Quotations and Pricing</h2>
          <ul>
            <li>All surveys and quotations are provided free of charge with no obligation.</li>
            <li>All quoted prices are exclusive of VAT unless stated otherwise.</li>
            <li>Quotations are valid for 30 days from the date of issue unless otherwise stated.</li>
            <li>Final pricing may vary if the scope of work changes after the initial survey.</li>
          </ul>

          <h2>4. Installation and Workmanship</h2>
          <ul>
            <li>All installations are carried out by qualified engineers to SSAIB and relevant British Standards.</li>
            <li>We will agree an installation date with you in advance.</li>
            <li>We will take reasonable care to minimise disruption to your property during installation.</li>
            <li>On completion, we will demonstrate the system operation and provide all necessary documentation.</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payment terms will be agreed in writing before work commences.</li>
            <li>For residential installations, payment is typically due on completion.</li>
            <li>For commercial contracts, payment terms may be agreed separately.</li>
            <li>We accept bank transfer, card payment, and cash.</li>
          </ul>

          <h2>6. Maintenance and Servicing</h2>
          <ul>
            <li>Maintenance contracts are available for all installed systems.</li>
            <li>Fire alarm systems require 6-monthly servicing under BS 5839-1.</li>
            <li>Maintenance contract terms and pricing are agreed separately.</li>
          </ul>

          <h2>7. Emergency Callouts</h2>
          <ul>
            <li>24/7 emergency callout services are available.</li>
            <li>Emergency callout charges apply outside regular business hours (Monday to Friday 9AM to 5PM, Saturday 9AM to 1PM).</li>
            <li>Emergency response times are typically 2 to 4 hours, subject to engineer availability.</li>
          </ul>

          <h2>8. Liability</h2>
          <p>
            {COMPANY_INFO.name} carries appropriate professional indemnity and public liability insurance.
            Our liability for any claim arising from our services is limited to the value of the contract
            for the specific work in question, except where liability cannot be limited by law.
          </p>

          <h2>9. Cancellation</h2>
          <p>
            For residential customers, you have the right to cancel a contract within 14 days of agreeing
            to the work, in accordance with the Consumer Contracts Regulations 2013. If installation has
            already begun with your agreement within the cooling-off period, you may be charged for work
            already completed.
          </p>

          <h2>10. Website Use</h2>
          <ul>
            <li>The content on this website is provided for general information purposes only.</li>
            <li>We make reasonable efforts to ensure the accuracy of information on our website, but do not guarantee it is complete or up to date.</li>
            <li>You may not reproduce, distribute, or use our website content without our written permission.</li>
          </ul>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of England and Wales.
            Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>12. Contact</h2>
          <p>For any questions about these Terms, contact us at:</p>
          <ul>
            <li>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600">{COMPANY_INFO.email}</a></li>
            <li>Phone: <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600">{COMPANY_INFO.phone}</a></li>
            <li>Address: {COMPANY_INFO.address}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
