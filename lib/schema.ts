import { COMPANY_INFO } from './utils';

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "description": "Professional security system installation and maintenance services across Essex and Greater London. Specializing in burglar alarms, CCTV systems, fire alarms, and access control.",
    "url": COMPANY_INFO.website,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 3, Security House",
      "addressLocality": "Romford",
      "addressRegion": "Essex",
      "postalCode": "RM1 2XX",
      "addressCountry": "GB"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Essex"
      },
      {
        "@type": "City",
        "name": "Greater London"
      }
    ],
    "foundingDate": COMPANY_INFO.yearEstablished,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Burglar Alarm Installation",
            "description": "Professional burglar alarm system installation and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CCTV Installation",
            "description": "High-quality CCTV system design, installation and monitoring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Alarm Systems",
            "description": "Commercial and HMO fire alarm installation and servicing"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/jandlsecurity",
      "https://www.linkedin.com/company/jandlsecurity"
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "image": [COMPANY_INFO.website + "/images/jandl-security-logo.jpg"],
    "description": COMPANY_INFO.tagline,
    "url": COMPANY_INFO.website,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 3, Security House",
      "addressLocality": "Romford",
      "addressRegion": "Essex",
      "postalCode": "RM1 2XX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5807",
      "longitude": "0.1816"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "££",
    "areaServed": COMPANY_INFO.serviceAreas,
    "serviceType": "Security System Installation"
  };
}

export function generateFAQPageSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateServiceSchema(serviceName: string, description: string, location?: string) {
  const areaServed = location ? [location, "Essex", "Greater London"] : ["Essex", "Greater London"];
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email
    },
    "areaServed": areaServed,
    "serviceType": "Security Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    }
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}