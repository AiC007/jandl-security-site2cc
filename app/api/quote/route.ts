import { NextResponse } from 'next/server';

// Quote form endpoint.
//
// Vercel functions run on a read-only filesystem, so submissions cannot be
// written to disk. Each enquiry is forwarded to a private notification
// webhook (QUOTE_WEBHOOK_URL) which emails the J&L office. The webhook URL
// and the shared token are server-side environment variables only.

interface QuoteRequest {
  name?: unknown;
  phone?: unknown;
  service?: unknown;
  postcode?: unknown;
  message?: unknown;
  honeypot?: unknown;
  timeSpent?: unknown;
}

const ALLOWED_SERVICES = new Set([
  'Burglar Alarms',
  'CCTV Systems',
  'Fire Alarms',
  'Access Control',
  'Security Lighting',
  'Other',
]);

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  // Collapse whitespace and strip control characters so nothing odd reaches the email.
  return value
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: Request) {
  let data: QuoteRequest;
  try {
    data = (await request.json()) as QuoteRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Spam protection: hidden honeypot field must stay empty.
  if (typeof data.honeypot === 'string' && data.honeypot.trim() !== '') {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // Spam protection: a person needs a few seconds to fill the form in.
  const timeSpent = typeof data.timeSpent === 'number' ? data.timeSpent : 0;
  if (timeSpent < 5000) {
    return NextResponse.json({ error: 'Form submitted too quickly' }, { status: 400 });
  }

  const name = cleanText(data.name, 120);
  const phone = cleanText(data.phone, 40);
  const service = cleanText(data.service, 60);
  const postcode = cleanText(data.postcode, 20).toUpperCase();
  const message = cleanText(data.message, 2000);

  if (!name || !phone || !service || !postcode) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!ALLOWED_SERVICES.has(service)) {
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  }

  // Loose UK phone check: digits, spaces and a leading plus, at least 10 digits.
  if (!/^\+?[\d\s()-]{10,}$/.test(phone) || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ error: 'Please enter a valid phone number' }, { status: 400 });
  }

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  const webhookToken = process.env.QUOTE_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    console.error('Quote submission error: QUOTE_WEBHOOK_URL or QUOTE_WEBHOOK_TOKEN is not configured');
    return NextResponse.json(
      { error: 'Enquiry service is temporarily unavailable. Please call us instead.' },
      { status: 503 }
    );
  }

  const id = `quote_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  const submittedAt = new Date().toISOString();

  const payload = {
    token: webhookToken,
    id,
    name,
    phone,
    service,
    postcode,
    message,
    submittedAt,
    source: 'website_quote_form',
    // Preview and development deployments are routed to The AI Consultancy,
    // so only the production site emails the J&L office.
    environment: process.env.VERCEL_ENV || 'development',
    page: request.headers.get('referer') || '',
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.error('Quote submission error: webhook responded', response.status, id);
      return NextResponse.json(
        { error: 'We could not send your enquiry. Please call us instead.' },
        { status: 502 }
      );
    }

    console.log('New quote request forwarded:', { id, service, postcode, submittedAt });

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      id,
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'We could not send your enquiry. Please call us instead.' },
      { status: 502 }
    );
  }
}
