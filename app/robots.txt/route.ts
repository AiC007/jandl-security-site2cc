import { COMPANY_INFO } from '@/lib/utils';

export function GET() {
  const robotsTxt = `# Robots.txt for J&L Security
# Professional Security Systems - Essex & Greater London

User-agent: *
Allow: /
Disallow: /api/
Disallow: /data/
Disallow: /_next/
Disallow: /admin/

# AI Search Crawlers - explicitly allowed
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

# Standard Search Crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Social Crawlers
User-agent: facebookexternalhit
Allow: /
User-agent: Twitterbot
Allow: /

# SEO Scraper Bots - blocked
User-agent: AhrefsBot
Disallow: /
User-agent: SemrushBot
Disallow: /
User-agent: MJ12bot
Disallow: /
User-agent: DotBot
Disallow: /

Crawl-delay: 1

Sitemap: ${COMPANY_INFO.website}/sitemap.xml

# LLM context files
# LLM-Summary: ${COMPANY_INFO.website}/llms.txt
# LLM-Full: ${COMPANY_INFO.website}/llms-full.txt`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
