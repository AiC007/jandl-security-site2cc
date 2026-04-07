import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${COMPANY_INFO.name}. How we collect, use, and protect your personal data.`,
  alternates: {
    canonical: `${COMPANY_INFO.website}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-100">Last updated: 7 April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Who We Are</h2>
          <p>
            {COMPANY_INFO.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a security systems installation
            and maintenance company. Our registered address is {COMPANY_INFO.address}.
          </p>
          <p>
            We are committed to protecting your privacy and handling your personal data responsibly
            in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data
            Protection Act 2018.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following personal data when you interact with us:</p>
          <ul>
            <li><strong>Contact information:</strong> name, phone number, email address, postal address, and postcode</li>
            <li><strong>Enquiry details:</strong> the service you are interested in, property type, and any details you provide about your security requirements</li>
            <li><strong>Website usage data:</strong> pages visited, time spent on pages, and referring URLs (collected via cookies and analytics tools)</li>
            <li><strong>Communication records:</strong> records of phone calls, emails, WhatsApp messages, and form submissions</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes</li>
            <li>Arrange and carry out security surveys and installations</li>
            <li>Provide ongoing maintenance and support services</li>
            <li>Send service reminders (e.g., maintenance due dates)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your data on the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> when you submit a contact form or request a quote</li>
            <li><strong>Contract:</strong> when we need to process your data to fulfil a service agreement</li>
            <li><strong>Legitimate interest:</strong> to improve our services and website, and to respond to enquiries</li>
            <li><strong>Legal obligation:</strong> to comply with applicable laws and regulations</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes for which
            it was collected. Enquiry data is retained for up to 24 months. Customer records are retained
            for up to 7 years after the last service, in line with legal and warranty obligations.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (where no legal obligation requires retention)</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:text-primary-700">
              {COMPANY_INFO.email}
            </a>{' '}
            or call {COMPANY_INFO.phone}.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses essential cookies to ensure proper functionality. We may also use analytics
            cookies (such as Google Analytics) to understand how visitors use our site. You can control
            cookie preferences through your browser settings.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            We may use the following third-party services which process data on our behalf:
          </p>
          <ul>
            <li>Vercel (website hosting)</li>
            <li>Google Analytics (website analytics)</li>
            <li>WhatsApp (messaging)</li>
          </ul>
          <p>
            Each of these providers has their own privacy policy governing how they handle data.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data
            against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS
            encryption for all data transmission.
          </p>

          <h2>10. Complaints</h2>
          <p>
            If you are not satisfied with how we handle your personal data, you have the right to lodge a
            complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
            <a href="https://ico.org.uk" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">
              ico.org.uk
            </a>.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For any questions about this privacy policy or your personal data, contact us at:
          </p>
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
