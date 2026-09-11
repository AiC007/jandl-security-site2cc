import { NextResponse } from 'next/server';

// Quote form endpoint.
//
// Vercel functions run on a read-only filesystem, so submissions cannot be
// written to disk. Each enquiry is emailed to the J&L office through Resend's
// HTTP API. Configuration is server-side only:
//   RESEND_API_KEY   Resend API key (same account as the other AIC sites)
//   ENQUIRY_FROM     Optional sender override (defaults to the verified AIC domain)
//   ENQUIRY_TO       Optional recipient override
// Production emails the J&L office directly. Preview and development
// deployments go to The AI Consultancy with [TEST] in the subject.

const CLIENT_INBOX = 'info@jandlsecurity.co.uk';
const AIC_INBOX = 'ai@theaiconsultancy.ai';
const DEFAULT_FROM = 'J&L Security Website <ai@theaiconsultancy.ai>';

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatUkTime(date: Date): string {
  return date.toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM || DEFAULT_FROM;

  if (!apiKey) {
    console.error('Quote submission error: RESEND_API_KEY is not configured');
    return NextResponse.json(
      { error: 'Enquiry service is temporarily unavailable. Please call us instead.' },
      { status: 503 }
    );
  }

  const environment = process.env.VERCEL_ENV || 'development';
  const isProduction = environment === 'production';
  const to = process.env.ENQUIRY_TO || (isProduction ? CLIENT_INBOX : AIC_INBOX);

  const id = `quote_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  const submittedAt = new Date();
  const when = formatUkTime(submittedAt);
  const page = request.headers.get('referer') || '';

  const subject =
    (isProduction ? '' : `[TEST ${environment}] `) +
    `J&L Security website enquiry: ${service} in ${postcode} from ${name}`;

  const text = [
    'New enquiry from the J&L Security website quote form.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Postcode: ${postcode}`,
    message ? `Message: ${message}` : '',
    `Submitted: ${when}`,
    page ? `Page: ${page}` : '',
    '',
    'The customer has been told to expect a call within 2 hours during business hours.',
    '',
    `Reference: ${id}`,
    'Sent automatically by the J&L Security website via The AI Consultancy.',
  ]
    .filter((line) => line !== '')
    .join('\n');

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#5b6b7b;vertical-align:top;white-space:nowrap;">${label}</td>` +
    `<td style="padding:6px 0;color:#0A1F3D;font-weight:600;">${value}</td></tr>`;

  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1f2d3d;line-height:1.5;max-width:640px;">' +
    '<p style="color:#8792a2;font-size:12px;margin:0 0 14px 0;">J&amp;L Security website &middot; New enquiry</p>' +
    '<p>A customer has just submitted the quote form on jandlsecurity.co.uk.</p>' +
    '<table style="border-collapse:collapse;font-size:14px;">' +
    row('Name', escapeHtml(name)) +
    row('Phone', `<a href="tel:${escapeHtml(phone.replace(/\s+/g, ''))}" style="color:#0A1F3D;">${escapeHtml(phone)}</a>`) +
    row('Service', escapeHtml(service)) +
    row('Postcode', escapeHtml(postcode)) +
    (message ? row('Message', escapeHtml(message)) : '') +
    row('Submitted', escapeHtml(when)) +
    (page ? row('Page', escapeHtml(page)) : '') +
    '</table>' +
    '<div style="background:#FEFCE8;border-left:3px solid #F59E0B;padding:10px 14px;margin:16px 0;">' +
    'The customer has been told to expect a call within 2 hours during business hours.' +
    '</div>' +
    `<p style="color:#8792a2;font-size:12px;">Reference ${escapeHtml(id)} &middot; ` +
    'Sent automatically by the J&amp;L Security website via The AI Consultancy.</p>' +
    '</div>';

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [to], subject, text, html }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const detail = await response.text();
      console.error('Quote submission error: Resend responded', response.status, detail.slice(0, 300), id);
      return NextResponse.json(
        { error: 'We could not send your enquiry. Please call us instead.' },
        { status: 502 }
      );
    }

    console.log('New quote request emailed:', { id, service, postcode, to, submittedAt: submittedAt.toISOString() });

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
