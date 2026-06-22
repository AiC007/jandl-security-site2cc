import { COMPANY_INFO } from '@/lib/utils';

export function GET() {
  const robotsTxt = `# Robots.txt for J&L Security
# Professional Security Systems - Essex & Greater London

# Content usage signals (Cloudflare Content Signals Policy).
# search: allow surfacing in AI-powered search. ai-input: allow use as context
# when answering user questions. ai-train: allow use for AI model training.
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/
Disallow: /data/
Disallow: /_next/
Disallow: /admin/

# AI Search and Assistant Crawlers - explicitly allowed
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
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: GoogleOther
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: cohere-ai
Allow: /
User-agent: DuckAssistBot
Allow: /
User-agent: CCBot
Allow: /
User-agent: Bytespider
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

# LLM and agent context files
# LLM-Summary: ${COMPANY_INFO.website}/llms.txt
# LLM-Full: ${COMPANY_INFO.website}/llms-full.txt
# Agent-Skills: ${COMPANY_INFO.website}/.well-known/agent-skills/index.json
# MCP-Server-Card: ${COMPANY_INFO.website}/.well-known/mcp/server-card.json
# API-Catalog: ${COMPANY_INFO.website}/.well-known/api-catalog
# MCP-Endpoint: ${COMPANY_INFO.website}/mcp`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
