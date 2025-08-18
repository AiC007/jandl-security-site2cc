import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface QuoteRequest {
  name: string;
  phone: string;
  service: string;
  postcode: string;
  message?: string;
  honeypot?: string;
  timestamp: string;
  timeSpent: number;
}

export async function POST(request: Request) {
  try {
    const data: QuoteRequest = await request.json();

    // Spam protection
    if (data.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Time-based protection (must spend at least 5 seconds on form)
    if (data.timeSpent < 5000) {
      return NextResponse.json({ error: 'Form submitted too quickly' }, { status: 400 });
    }

    // Validate required fields
    if (!data.name || !data.phone || !data.service || !data.postcode) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Generate unique ID
    const id = `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Prepare submission data
    const submission = {
      id,
      ...data,
      submittedAt: new Date().toISOString(),
      source: 'website_quote_form',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data', 'forms');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Save to JSON file
    const filename = `${id}.json`;
    const filepath = path.join(dataDir, filename);
    await writeFile(filepath, JSON.stringify(submission, null, 2));

    // In production, you would also send an email notification here
    // For now, we'll just log it
    console.log('New quote request:', {
      id,
      name: data.name,
      service: data.service,
      postcode: data.postcode,
      timestamp: submission.submittedAt
    });

    // TODO: Send email notification to info@jandlsecurity.co.uk
    // This would integrate with your email service (SendGrid, SES, etc.)

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      id
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}