// Shared, agent-facing content helpers for J&L Security.
//
// Everything an AI agent can read about J&L (services, coverage, pricing,
// contact, blog) is derived here from the same source data the website renders
// (lib/data.ts, lib/utils.ts, lib/blog.ts). This keeps the markdown content
// negotiation route, the MCP server and the discovery documents consistent and
// avoids inventing any figures: indicative prices are transcribed verbatim from
// the client-approved public/llms.txt.

import { COMPANY_INFO } from './utils';
import { services, locations, faqs, serviceLocationMatrix } from './data';
import { blogPosts, type BlogPost } from './blog';

// ---------------------------------------------------------------------------
// Structured accessors (used by the MCP tools and REST-style responses)
// ---------------------------------------------------------------------------

export function getCompanyInfo() {
  return {
    name: COMPANY_INFO.name,
    relatedBrand: 'J&L Alarms',
    established: COMPANY_INFO.yearEstablished,
    tagline: COMPANY_INFO.tagline,
    phonePrimary: COMPANY_INFO.phone,
    phoneSecondary: COMPANY_INFO.phone2,
    whatsapp: `+${COMPANY_INFO.whatsapp}`,
    email: COMPANY_INFO.email,
    website: COMPANY_INFO.website,
    address: COMPANY_INFO.address,
    accreditations: COMPANY_INFO.accreditations,
    serviceAreas: COMPANY_INFO.serviceAreas,
    emergencyHours: COMPANY_INFO.emergencyHours,
    openingHours: 'Mon to Fri 09:00 to 17:00, Sat 09:00 to 13:00, plus 24/7 emergency callouts',
    notes: 'Free, no-obligation security surveys. Same-day survey appointments available.',
  };
}

export function getServices() {
  return services.map((s) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    category: s.category,
    description: s.description,
    features: s.features,
    benefits: s.benefits,
    url: `${COMPANY_INFO.website}/services/${s.slug}`,
  }));
}

export function getServiceBySlug(slug: string) {
  const normalised = slug.toLowerCase().trim();
  return (
    getServices().find(
      (s) => s.slug === normalised || s.id === normalised || s.name.toLowerCase() === normalised,
    ) || null
  );
}

// Postcode areas (outward-code letters) J&L covers, derived from lib/data.ts.
const COVERED_POSTCODE_AREAS = [
  'CM', 'RM', 'IG', 'SS', 'EN', 'NW', 'WC', 'EC', 'SE', 'SW', 'E', 'N', 'W',
];

// Flat set of place names J&L covers: primary locations, their nearby areas,
// and every town named in the service-location matrix.
function coveredPlaceNames(): string[] {
  const names = new Set<string>();
  for (const loc of locations) {
    names.add(loc.name);
    loc.nearbyAreas.forEach((a) => names.add(a));
  }
  for (const item of serviceLocationMatrix) {
    names.add(item.location);
  }
  return Array.from(names);
}

export function checkServiceArea(query: string): {
  query: string;
  covered: boolean;
  confidence: 'high' | 'likely' | 'unknown';
  matchedOn: string | null;
  county: string | null;
  note: string;
} {
  const q = (query || '').trim();
  if (!q) {
    return {
      query: q,
      covered: false,
      confidence: 'unknown',
      matchedOn: null,
      county: null,
      note: 'No town or postcode supplied. J&L Security covers Essex and Greater London.',
    };
  }
  const lower = q.toLowerCase();

  // Pass 1: exact primary-location match (town name or slug) takes priority,
  // so a town that is also listed as a neighbour of another town resolves to
  // itself (e.g. "Brentwood" is its own location, not a neighbour of Chelmsford).
  for (const loc of locations) {
    if (loc.name.toLowerCase() === lower || loc.slug === lower) {
      return {
        query: q,
        covered: true,
        confidence: 'high',
        matchedOn: loc.name,
        county: loc.county,
        note: `Yes. J&L Security covers ${loc.name} (${loc.county}) and the surrounding area.`,
      };
    }
  }

  // Pass 2: nearby-area match reports the queried area and its parent town.
  for (const loc of locations) {
    const area = loc.nearbyAreas.find((a) => a.toLowerCase() === lower);
    if (area) {
      return {
        query: q,
        covered: true,
        confidence: 'high',
        matchedOn: area,
        county: loc.county,
        note: `Yes. J&L Security covers ${area} (near ${loc.name}, ${loc.county}).`,
      };
    }
  }
  const matrixHit = coveredPlaceNames().find((n) => n.toLowerCase() === lower);
  if (matrixHit) {
    return {
      query: q,
      covered: true,
      confidence: 'high',
      matchedOn: matrixHit,
      county: null,
      note: `Yes. J&L Security works in ${matrixHit} across Essex and Greater London.`,
    };
  }

  // Postcode match: pull the leading letters of a UK outward code.
  const pcMatch = lower.toUpperCase().match(/^([A-Z]{1,2})\d/);
  if (pcMatch) {
    const area = pcMatch[1];
    if (COVERED_POSTCODE_AREAS.includes(area)) {
      return {
        query: q,
        covered: true,
        confidence: 'likely',
        matchedOn: `${area} postcode area`,
        county: null,
        note: `Likely yes. The ${area} postcode area falls within J&L Security's Essex and Greater London coverage. Confirm exact coverage on ${COMPANY_INFO.phone}.`,
      };
    }
  }

  // County-level match.
  if (lower.includes('essex') || lower.includes('greater london') || lower.includes('london')) {
    return {
      query: q,
      covered: true,
      confidence: 'likely',
      matchedOn: 'county',
      county: lower.includes('essex') ? 'Essex' : 'Greater London',
      note: 'Yes. J&L Security covers Essex and Greater London.',
    };
  }

  return {
    query: q,
    covered: false,
    confidence: 'unknown',
    matchedOn: null,
    county: null,
    note: `Coverage for "${q}" is not confirmed from the published service area. J&L Security primarily serves Essex and Greater London. Please call ${COMPANY_INFO.phone} to check.`,
  };
}

// Indicative installed costs, transcribed verbatim from public/llms.txt.
// Starting prices excluding VAT; final quotes follow a free site survey.
export const PRICING_LINES: string[] = [
  'Burglar alarm, J&L standard wireless Grade 2 residential package (Pyronix Enforcer V11): from GBP 485 plus VAT, including panel with keypad, one door contact, two motion detectors, two proximity tags, one wireless external siren',
  'Additional motion detector: from GBP 55 plus VAT',
  'Additional door contact: from GBP 45 plus VAT',
  'Additional wireless external siren: from GBP 125 plus VAT',
  'Vibration detector: from GBP 65 plus VAT; combined vibration plus door/window contact: from GBP 75 plus VAT',
  'Homecontrol 2.0 app module plus first year subscription: from GBP 48 plus VAT; annual app subscription thereafter: from GBP 30 plus VAT',
  '24-hour UK-manned monitoring: from GBP 105 plus VAT per year (police response available for Grade 2+ systems with URN)',
  'Annual maintenance, residential: from GBP 120 plus VAT per year',
  'Annual maintenance, commercial: from GBP 180 plus VAT per year',
  'Sector-wide indicative ranges: bell-only GBP 350 to 600, speech dialler GBP 500 to 900, monitored Grade 2 or 3 GBP 700 to 1,800 plus monthly monitoring',
  'Fire alarm (HMO Grade D, BS 5839-6, 5-bedroom): approximately GBP 350 to 600 installed',
  'Fire alarm (HMO Grade A panel-controlled, larger HMO): approximately GBP 1,200 to 2,500 installed',
  'Fire alarm servicing: from GBP 120 plus VAT per year (residential and small HMO), from GBP 180 plus VAT per year (commercial under BS 5839-1)',
  'Domestic CCTV (2-camera basic system): from GBP 850 plus VAT installed',
];

export function getPricingGuide() {
  return {
    currency: 'GBP',
    vat: 'Prices exclude VAT at 20 percent unless stated. Final quotation follows a free site survey.',
    items: PRICING_LINES,
  };
}

// ---------------------------------------------------------------------------
// HTML to Markdown (blog content is stored as HTML with a small tag set)
// ---------------------------------------------------------------------------

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&pound;/g, '£')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, ', ')
    .replace(/&ndash;/g, '-');
}

function inlineToMarkdown(html: string): string {
  return decodeEntities(
    html
      .replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
      .replace(/<b>([\s\S]*?)<\/b>/gi, '**$1**')
      .replace(/<em>([\s\S]*?)<\/em>/gi, '_$1_')
      .replace(/<i>([\s\S]*?)<\/i>/gi, '_$1_')
      .replace(/<sup>([\s\S]*?)<\/sup>/gi, '^$1^')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
      .replace(/<[^>]+>/g, '')
      .trim(),
  );
}

function tableToMarkdown(tableHtml: string): string {
  const rows = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => m[1]);
  if (rows.length === 0) return '';
  const parseCells = (rowHtml: string) =>
    [...rowHtml.matchAll(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi)].map((c) => inlineToMarkdown(c[2]));

  const lines: string[] = [];
  const header = parseCells(rows[0]);
  lines.push(`| ${header.join(' | ')} |`);
  lines.push(`| ${header.map(() => '---').join(' | ')} |`);
  for (const row of rows.slice(1)) {
    const cells = parseCells(row);
    if (cells.length) lines.push(`| ${cells.join(' | ')} |`);
  }
  return lines.join('\n');
}

export function htmlToMarkdown(html: string): string {
  let out = html.trim();

  // Tables first (block structures), swapped for placeholders.
  const tables: string[] = [];
  out = out.replace(/<table[\s\S]*?<\/table>/gi, (m) => {
    tables.push(tableToMarkdown(m));
    return `\n TABLE${tables.length - 1} \n`;
  });

  out = out
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_m, t) => `\n## ${inlineToMarkdown(t)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_m, t) => `\n### ${inlineToMarkdown(t)}\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_m, t) => `\n#### ${inlineToMarkdown(t)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m, t) => `- ${inlineToMarkdown(t)}\n`)
    .replace(/<\/?(ul|ol)[^>]*>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_m, t) => `\n${inlineToMarkdown(t)}\n`);

  // Any stray inline tags left over.
  out = inlineToMarkdown(out);

  // Restore tables.
  out = out.replace(/ TABLE(\d+) /g, (_m, i) => tables[Number(i)] || '');

  // Collapse excess blank lines.
  return out.replace(/\n{3,}/g, '\n\n').trim();
}

// ---------------------------------------------------------------------------
// Markdown builders for content negotiation (Accept: text/markdown)
// ---------------------------------------------------------------------------

const c = getCompanyInfo();

function contactBlock(): string {
  return [
    '## Contact',
    '',
    `- Phone: ${c.phonePrimary}`,
    `- Phone (secondary): ${c.phoneSecondary}`,
    `- WhatsApp: ${c.whatsapp}`,
    `- Email: ${c.email}`,
    `- Address: ${c.address}`,
    `- Hours: ${c.openingHours}`,
    '',
  ].join('\n');
}

function homepageMarkdown(): string {
  return [
    `# ${c.name}`,
    '',
    `> ${c.tagline}. Established ${c.established}. ${c.accreditations.join(', ')} accredited.`,
    '',
    'Professional security system installation and maintenance across Essex and Greater London.',
    '',
    '## Services',
    '',
    ...getServices().map((s) => `- **${s.name}**: ${s.description} (${s.url})`),
    '',
    '## Service Areas',
    '',
    `Essex and Greater London, including ${locations.map((l) => l.name).slice(0, 12).join(', ')} and surrounding areas.`,
    '',
    '## Accreditations',
    '',
    c.accreditations.join(', '),
    '',
    contactBlock(),
    '## More',
    '',
    `- Full structured overview for LLMs: ${c.website}/llms.txt`,
    `- Expanded detail: ${c.website}/llms-full.txt`,
    `- Machine API (MCP): ${c.website}/mcp`,
  ].join('\n');
}

function serviceMarkdown(slug: string): string | null {
  const s = getServiceBySlug(slug);
  if (!s) return null;
  return [
    `# ${s.name}`,
    '',
    s.description,
    '',
    '## Features',
    '',
    ...s.features.map((f) => `- ${f}`),
    '',
    '## Benefits',
    '',
    ...s.benefits.map((b) => `- ${b}`),
    '',
    `Service area: Essex and Greater London.`,
    '',
    contactBlock(),
  ].join('\n');
}

function servicesIndexMarkdown(): string {
  return [
    '# Security Services',
    '',
    `${c.name} installs and maintains the following systems across Essex and Greater London.`,
    '',
    ...getServices().flatMap((s) => [`## ${s.name}`, '', s.description, `Details: ${s.url}`, '']),
    contactBlock(),
  ].join('\n');
}

function locationMarkdown(slug: string): string | null {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return null;
  return [
    `# Security Systems in ${loc.name}`,
    '',
    `${c.name} provides burglar alarms, CCTV, fire alarms, access control and security lighting in ${loc.name} (${loc.county}, ${loc.postcode}) and nearby areas: ${loc.nearbyAreas.join(', ')}.`,
    '',
    'All services include free surveys and 24/7 emergency support.',
    '',
    contactBlock(),
  ].join('\n');
}

function locationsIndexMarkdown(): string {
  return [
    '# Service Areas',
    '',
    `${c.name} covers Essex and Greater London. Primary locations:`,
    '',
    ...locations.map((l) => `- **${l.name}** (${l.county}, ${l.postcode})`),
    '',
    contactBlock(),
  ].join('\n');
}

function serviceLocationMarkdown(slug: string): string | null {
  const item = serviceLocationMatrix.find((m) => m.slug === slug);
  if (!item) return null;
  return [
    `# ${item.service} in ${item.location}`,
    '',
    `${c.name} provides ${item.service.toLowerCase()} in ${item.location} and the surrounding area. Established ${c.established}, ${c.accreditations.join(', ')} accredited.`,
    '',
    'Free survey, transparent pricing, and 24/7 emergency support.',
    '',
    contactBlock(),
  ].join('\n');
}

function faqsMarkdown(): string {
  return [
    '# Frequently Asked Questions',
    '',
    ...faqs.flatMap((f) => [`## ${f.question}`, '', f.answer, '']),
    contactBlock(),
  ].join('\n');
}

function pricingMarkdown(): string {
  const p = getPricingGuide();
  return [
    '# Indicative Pricing (UK, 2026)',
    '',
    p.vat,
    '',
    ...p.items.map((i) => `- ${i}`),
    '',
    contactBlock(),
  ].join('\n');
}

function blogIndexMarkdown(): string {
  return [
    '# Blog',
    '',
    `Guides from ${c.name} on security systems, fire safety and compliance.`,
    '',
    ...blogPosts.map((p) => `- [${p.title}](${c.website}/blog/${p.slug}): ${p.description}`),
  ].join('\n');
}

function blogPostMarkdown(post: BlogPost): string {
  return [
    `# ${post.title}`,
    '',
    `> ${post.description}`,
    '',
    `Published: ${post.datePublished}. Updated: ${post.dateModified}. By ${c.name}.`,
    '',
    htmlToMarkdown(post.content),
    '',
    '---',
    '',
    contactBlock(),
  ].join('\n');
}

function aboutMarkdown(): string {
  return [
    `# About ${c.name}`,
    '',
    `${c.name} (related brand: ${c.relatedBrand}) has installed and maintained security systems across Essex and Greater London since ${c.established}.`,
    '',
    `Accreditations: ${c.accreditations.join(', ')}.`,
    '',
    'We cover burglar alarms, CCTV, fire alarms, access control, security lighting and fire risk assessments for homes and businesses.',
    '',
    contactBlock(),
  ].join('\n');
}

function fallbackMarkdown(path: string): string {
  return [
    `# ${c.name}`,
    '',
    `> ${c.tagline}`,
    '',
    `A markdown summary is not yet generated for \`${path}\`. The full page is available as HTML at ${c.website}${path}.`,
    '',
    `For a structured overview of the whole site, see ${c.website}/llms.txt and ${c.website}/llms-full.txt.`,
    '',
    contactBlock(),
  ].join('\n');
}

// Route the requested path to its markdown representation.
export function markdownForPath(path: string): string {
  const clean = (path || '/').split('?')[0].replace(/\/+$/, '') || '/';

  if (clean === '/') return homepageMarkdown();
  if (clean === '/services') return servicesIndexMarkdown();
  if (clean === '/locations') return locationsIndexMarkdown();
  if (clean === '/about') return aboutMarkdown();
  if (clean === '/contact') return [`# Contact ${c.name}`, '', contactBlock()].join('\n');
  if (clean === '/faqs') return faqsMarkdown();
  if (clean === '/pricing' || clean === '/prices') return pricingMarkdown();
  if (clean === '/blog') return blogIndexMarkdown();

  const blogMatch = clean.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = blogPosts.find((p) => p.slug === blogMatch[1]);
    if (post) return blogPostMarkdown(post);
  }

  const serviceMatch = clean.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const md = serviceMarkdown(serviceMatch[1]);
    if (md) return md;
  }

  const locationMatch = clean.match(/^\/locations\/(.+)$/);
  if (locationMatch) {
    const md = locationMarkdown(locationMatch[1]);
    if (md) return md;
  }

  // Service-location matrix pages live at /{service}/{location}.
  const slMatch = clean.match(/^\/([^/]+)\/([^/]+)$/);
  if (slMatch) {
    const md = serviceLocationMarkdown(`${slMatch[1]}-${slMatch[2]}`);
    if (md) return md;
  }

  return fallbackMarkdown(clean);
}

// Approximate token count for the optional x-markdown-tokens header.
export function approxTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
