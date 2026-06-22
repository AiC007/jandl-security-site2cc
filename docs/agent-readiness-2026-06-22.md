# Agent Readiness Implementation (22 June 2026)

## Context

Cloudflare's scanner at isitagentready.com scored the live site at 21/100 (Level 1,
Basic Web Presence): Discoverability 2/4, Content 0/1, Bot Access Control 1/2,
API/Auth/MCP/Skill Discovery 0/7, Commerce not checked. This change implements
every check that genuinely applies to a passive marketing and lead-generation
site, and deliberately does not fabricate the ones that do not apply.

All new agent tooling is read-only and is backed by the same data the website
already renders (`lib/data.ts`, `lib/utils.ts`, `lib/blog.ts`), centralised in
`lib/agent-content.ts`. No figures were invented: indicative prices are
transcribed verbatim from the client-approved `public/llms.txt`.

## What was implemented

| Category | Check | How |
|---|---|---|
| Discoverability | robots.txt | Existing (`app/robots.txt/route.ts`) |
| Discoverability | sitemap.xml | Existing (`app/sitemap.ts`) |
| Discoverability | Link headers (RFC 8288) | `next.config.ts` headers: api-catalog, service-desc, service-doc, describedby |
| Content | Markdown negotiation | `middleware.ts` + `app/api/markdown/route.ts`: `Accept: text/markdown` returns a real markdown representation of any page |
| Content | llms.txt / llms-full.txt | Existing, refreshed with an Agent Interfaces section |
| Bot Access | Content Signals | `Content-Signal: search=yes, ai-input=yes, ai-train=yes` in robots.txt |
| Bot Access | AI bot rules | Expanded explicit allow list (added GoogleOther, Perplexity-User, Meta-ExternalAgent, Amazonbot, cohere-ai, DuckAssistBot, CCBot, Bytespider) |
| API/MCP/Skill | API catalog (RFC 9727) | `app/api/wellknown/api-catalog/route.ts` -> `/.well-known/api-catalog` (application/linkset+json) |
| API/MCP/Skill | MCP server card | `public/.well-known/mcp/server-card.json` |
| API/MCP/Skill | Live MCP server | `app/api/mcp/route.ts` -> `/mcp` (Streamable HTTP, JSON-RPC 2.0, 6 read-only tools) |
| API/MCP/Skill | Agent Skills index | `public/.well-known/agent-skills/index.json` + 4 SKILL.md (digests verified) |
| API/MCP/Skill | A2A agent card | `public/.well-known/agent-card.json` |

### MCP tools (read-only, all backed by real site data)

`get_company_info`, `list_services`, `get_service_details`, `check_service_area`
(town or UK postcode coverage), `get_pricing_guide`, `list_blog_articles`.

Routing: `/mcp` and `/.well-known/api-catalog` are exposed via rewrites in
`next.config.ts` from handlers under `/api` (which build reliably). The markdown
middleware excludes `/api`, `/_next`, `/.well-known` and any path containing a
dot, so static discovery files and `.txt`/`.xml` files are never rewritten.

## Deliberately not implemented (not applicable, not faked)

- OAuth discovery and OAuth protected resource: the site has no authentication
  and no protected resources. Publishing OAuth metadata would be cardboard.
- Web Bot Auth: applies to sites that dispatch their own crawler or agent. J&L's
  site only receives traffic.
- Commerce (x402, UCP, ACP, MPP): no e-commerce or agentic checkout on the site.
- WebMCP (browser tool API): experimental client-side API. Server-side MCP at
  `/mcp` is the standard, useful equivalent and is implemented instead.

## Operator tasks (cannot be done in code)

- **DNS-AID** (DNS for AI Discovery): optional SVCB/HTTPS DNS records at the
  registrar pointing agents at the discovery endpoints. Needs DNS access, not a
  code change. Flag if we want the last discoverability point.
- **Content-Signal `ai-train` value**: currently `yes` to maximise visibility,
  in line with the brief. Change to `no` in `app/robots.txt/route.ts` if J&L
  would rather not permit use of site content for AI model training. This is a
  content-licensing decision for the client.

## How to re-test

```
npm run build && PORT=3100 npm run start
# then, against http://localhost:3100:
curl -s -D - -o /dev/null /                      # Link header present
curl -s -H 'Accept: text/markdown' /services/fire-alarms
curl -s /.well-known/api-catalog
curl -s -X POST /mcp -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

After deploy, re-run the scan at isitagentready.com against the production URL.
