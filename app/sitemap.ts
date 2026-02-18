import { MetadataRoute } from 'next';
import { COMPANY_INFO, generateSlug } from '@/lib/utils';
import { serviceLocationMatrix } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.website;
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Service-location pages
  // URL must match the [service]/[location] Next.js route: /{service-slug}/{location-slug}
  const serviceLocationPages = serviceLocationMatrix.map((item) => {
    const serviceSlug = generateSlug(item.service);
    const locationSlug = item.location.toLowerCase().replace(/ /g, '-');
    return {
      url: `${baseUrl}/${serviceSlug}/${locationSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  // Main service pages
  const mainServices = [
    'burglar-alarms',
    'cctv-systems', 
    'fire-alarms',
    'access-control',
    'security-lighting'
  ];

  const servicePages = mainServices.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Location pages
  const locations = [
    'ilford', 'romford', 'chelmsford', 'brentwood', 'basildon', 
    'hornchurch', 'barking', 'dagenham', 'redbridge', 'enfield',
    'stratford', 'canary-wharf', 'greenwich', 'harlow', 'epping'
  ];

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
  ];
}