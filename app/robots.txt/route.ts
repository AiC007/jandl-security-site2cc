import { COMPANY_INFO } from '@/lib/utils';

export function GET() {
  const robotsTxt = `# Robots.txt for J&L Security
# Professional Security Systems - Essex & Greater London

User-agent: *
Allow: /

# Prioritize important pages
Allow: /services
Allow: /locations
Allow: /about
Allow: /contact
Allow: /faqs

# Block unnecessary crawling
Disallow: /api/
Disallow: /data/
Disallow: /_next/
Disallow: /admin/

# Sitemaps
Sitemap: ${COMPANY_INFO.website}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}