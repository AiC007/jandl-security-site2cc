import { COMPANY_INFO } from '@/lib/utils';

// API catalog per RFC 9727, exposed at /.well-known/api-catalog via a rewrite
// in next.config.ts. Lists the machine-readable interfaces J&L Security offers
// to agents: the MCP server (described by its server card) and the site itself
// (described by llms.txt). Content-Type must be application/linkset+json.
export function GET() {
  const base = COMPANY_INFO.website;

  const linkset = {
    linkset: [
      {
        anchor: `${base}/mcp`,
        'service-desc': [
          { href: `${base}/.well-known/mcp/server-card.json`, type: 'application/json' },
        ],
        'service-doc': [{ href: `${base}/llms-full.txt`, type: 'text/plain' }],
      },
      {
        anchor: base,
        describedby: [
          { href: `${base}/llms.txt`, type: 'text/plain' },
          { href: `${base}/.well-known/agent-skills/index.json`, type: 'application/json' },
        ],
        'service-doc': [{ href: `${base}/llms-full.txt`, type: 'text/plain' }],
      },
    ],
  };

  return new Response(JSON.stringify(linkset, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
