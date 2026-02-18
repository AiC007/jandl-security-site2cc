import { COMPANY_INFO } from './utils';

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "description": "Professional security system installation and maintenance services across Essex and Greater London. Specializing in burglar alarms, CCTV systems, fire alarms, and access control.",
    "url": COMPANY_INFO.website,
    "logo": COMPANY_INFO.website + "/images/jandl-security-logo.jpg",
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
      { "@type": "AdministrativeArea", "name": "Essex" },
      { "@type": "AdministrativeArea", "name": "Greater London" },
      { "@type": "AdministrativeArea", "name": "Kent" }
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Access Control Systems",
            "description": "Key fob, biometric, and video intercom access control installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Lighting",
            "description": "PIR and LED security and emergency lighting installation"
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
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": COMPANY_INFO.name,
    "image": [COMPANY_INFO.website + "/images/jandl-security-logo.jpg"],
    "logo": COMPANY_INFO.website + "/images/jandl-security-logo.jpg",
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
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "££",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Essex" },
      { "@type": "AdministrativeArea", "name": "Greater London" },
      { "@type": "AdministrativeArea", "name": "Kent" }
    ],
    "serviceType": "Security System Installation",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Johnson" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Excellent service from J&L Security. Professional installation and great ongoing support for our office CCTV system.",
        "datePublished": "2024-06-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mark Thompson" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Quick response to our emergency alarm fault. Engineer arrived within 2 hours and fixed the issue professionally.",
        "datePublished": "2024-09-20"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lisa Chen" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Competitive pricing and quality installation. Would definitely recommend for anyone in Essex needing security systems.",
        "datePublished": "2024-11-10"
      }
    ]
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