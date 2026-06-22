import {
  getCompanyInfo,
  getServices,
  getServiceBySlug,
  checkServiceArea,
  getPricingGuide,
} from '@/lib/agent-content';
import { blogPosts } from '@/lib/blog';
import { COMPANY_INFO } from '@/lib/utils';

// Minimal, stateless MCP server for J&L Security, exposed over Streamable HTTP
// (JSON-RPC 2.0 over POST). All tools are read-only and return information that
// is already public on the website, sourced from the same data the site renders.
//
// Discovery: /.well-known/mcp/server-card.json points here.
// Spec: Model Context Protocol, Streamable HTTP transport.

const PROTOCOL_VERSION = '2025-06-18';
const SERVER_INFO = { name: 'jandl-security', title: 'J&L Security', version: '1.0.0' };

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Mcp-Session-Id, Mcp-Protocol-Version',
};

type JsonRpcId = string | number | null;

interface JsonRpcRequest {
  jsonrpc: '2.0';
  id?: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
}

const TOOLS = [
  {
    name: 'get_company_info',
    description:
      'Get J&L Security contact details, accreditations, opening hours and service area. Use when a user asks how to contact J&L or for company background.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'list_services',
    description:
      'List the security services J&L Security installs and maintains (burglar alarms, CCTV, fire alarms, access control, security lighting, fire risk assessments).',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'get_service_details',
    description: 'Get the features and benefits of a specific J&L Security service.',
    inputSchema: {
      type: 'object',
      properties: {
        service: {
          type: 'string',
          description:
            'Service name or slug, e.g. "burglar-alarms", "cctv-systems", "fire-alarms", "access-control", "security-lighting", "fire-risk-assessments".',
        },
      },
      required: ['service'],
      additionalProperties: false,
    },
  },
  {
    name: 'check_service_area',
    description:
      'Check whether J&L Security covers a given town or UK postcode in Essex or Greater London.',
    inputSchema: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'A town name (e.g. "Brentwood") or UK postcode/outward code (e.g. "CM13").',
        },
      },
      required: ['location'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_pricing_guide',
    description:
      'Get J&L Security indicative installed costs for alarms, CCTV and fire systems. Prices are starting points excluding VAT; a free survey gives an exact quote.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'list_blog_articles',
    description:
      'List J&L Security guide articles on security, fire safety and compliance, with their URLs.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
];

function textResult(text: string) {
  return { content: [{ type: 'text', text }] };
}

function runTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case 'get_company_info': {
      const c = getCompanyInfo();
      return textResult(
        [
          `${c.name} (established ${c.established}) — ${c.tagline}`,
          ``,
          `Phone: ${c.phonePrimary}`,
          `Phone (secondary): ${c.phoneSecondary}`,
          `WhatsApp: ${c.whatsapp}`,
          `Email: ${c.email}`,
          `Address: ${c.address}`,
          `Accreditations: ${c.accreditations.join(', ')}`,
          `Service area: ${c.serviceAreas.join(', ')}`,
          `Hours: ${c.openingHours}`,
          `Website: ${c.website}`,
        ].join('\n'),
      );
    }
    case 'list_services': {
      const lines = getServices().map((s) => `- ${s.name} (${s.slug}): ${s.description}`);
      return textResult(['J&L Security services:', '', ...lines].join('\n'));
    }
    case 'get_service_details': {
      const service = String(args.service ?? '');
      const s = getServiceBySlug(service);
      if (!s) {
        return {
          ...textResult(
            `No service matched "${service}". Available services: ${getServices()
              .map((x) => x.slug)
              .join(', ')}.`,
          ),
          isError: true,
        };
      }
      return textResult(
        [
          `${s.name}`,
          ``,
          s.description,
          ``,
          `Features:`,
          ...s.features.map((f) => `- ${f}`),
          ``,
          `Benefits:`,
          ...s.benefits.map((b) => `- ${b}`),
          ``,
          `More: ${s.url}`,
        ].join('\n'),
      );
    }
    case 'check_service_area': {
      const location = String(args.location ?? '');
      const r = checkServiceArea(location);
      return textResult(
        [
          `Coverage check for "${r.query}":`,
          `Covered: ${r.covered ? 'yes' : 'not confirmed'} (confidence: ${r.confidence})`,
          r.matchedOn ? `Matched on: ${r.matchedOn}` : ``,
          r.note,
        ]
          .filter(Boolean)
          .join('\n'),
      );
    }
    case 'get_pricing_guide': {
      const p = getPricingGuide();
      return textResult(
        ['Indicative installed costs (UK, 2026):', p.vat, '', ...p.items.map((i) => `- ${i}`)].join(
          '\n',
        ),
      );
    }
    case 'list_blog_articles': {
      const lines = blogPosts.map(
        (post) => `- ${post.title}: ${COMPANY_INFO.website}/blog/${post.slug}`,
      );
      return textResult(['J&L Security guides:', '', ...lines].join('\n'));
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

function handleMessage(msg: JsonRpcRequest) {
  const { id, method, params } = msg;

  // Notifications (no id) require no response body.
  if (id === undefined || id === null) {
    return null;
  }

  switch (method) {
    case 'initialize':
      return {
        jsonrpc: '2.0' as const,
        id,
        result: {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: { tools: { listChanged: false } },
          serverInfo: SERVER_INFO,
          instructions:
            'Read-only tools for J&L Security: company info, services, service-area coverage, pricing and guides. To request a quote, share the company phone or WhatsApp with the user.',
        },
      };
    case 'ping':
      return { jsonrpc: '2.0' as const, id, result: {} };
    case 'tools/list':
      return { jsonrpc: '2.0' as const, id, result: { tools: TOOLS } };
    case 'tools/call': {
      const name = String((params as Record<string, unknown>)?.name ?? '');
      const args = ((params as Record<string, unknown>)?.arguments ?? {}) as Record<string, unknown>;
      if (!TOOLS.some((t) => t.name === name)) {
        return {
          jsonrpc: '2.0' as const,
          id,
          error: { code: -32602, message: `Unknown tool: ${name}` },
        };
      }
      try {
        return { jsonrpc: '2.0' as const, id, result: runTool(name, args) };
      } catch (err) {
        return {
          jsonrpc: '2.0' as const,
          id,
          result: { ...textResult(`Tool error: ${(err as Error).message}`), isError: true },
        };
      }
    }
    default:
      return {
        jsonrpc: '2.0' as const,
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
      };
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } },
      { status: 400, headers: CORS },
    );
  }

  // Support both single messages and JSON-RPC batches.
  const messages = Array.isArray(body) ? body : [body];
  const responses = messages
    .map((m) => handleMessage(m as JsonRpcRequest))
    .filter((r): r is NonNullable<typeof r> => r !== null);

  // All inputs were notifications: acknowledge with 202 and no body.
  if (responses.length === 0) {
    return new Response(null, { status: 202, headers: CORS });
  }

  const payload = Array.isArray(body) ? responses : responses[0];
  return Response.json(payload, { headers: CORS });
}

// Stateless server: no server-initiated SSE stream over GET.
export function GET() {
  return new Response('Method Not Allowed. POST JSON-RPC 2.0 messages to this MCP endpoint.', {
    status: 405,
    headers: { ...CORS, Allow: 'POST, OPTIONS' },
  });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
