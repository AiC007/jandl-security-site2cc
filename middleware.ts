import { NextRequest, NextResponse } from 'next/server';

// Markdown content negotiation (RFC-style Accept negotiation).
//
// When an agent requests a page with `Accept: text/markdown`, rewrite the
// request to the markdown route handler, which returns a clean markdown
// representation of that page. Normal browsers (Accept: text/html...) are
// untouched. Assets, API routes, .well-known files and the existing .txt/.xml
// discovery files are excluded by the matcher below.
export function middleware(req: NextRequest) {
  const accept = req.headers.get('accept') || '';
  const wantsMarkdown = /\btext\/markdown\b/i.test(accept) && !/\btext\/html\b/i.test(accept);

  if (wantsMarkdown && req.method === 'GET') {
    const original = req.nextUrl.pathname;
    // Forward the original path both as a request header (robust across the
    // rewrite) and as a query parameter (fallback).
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-md-path', original);

    const url = req.nextUrl.clone();
    url.pathname = '/api/markdown';
    url.search = `path=${encodeURIComponent(original)}`;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }
  return NextResponse.next();
}

export const config = {
  // Match page routes only: exclude /api, /_next, /.well-known, and any path
  // that contains a dot (static files such as .txt, .xml, .json, .ico, images).
  matcher: ['/((?!api/|_next/|\\.well-known/|.*\\.).*)'],
};
