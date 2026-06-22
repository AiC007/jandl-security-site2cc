import { markdownForPath, approxTokens } from '@/lib/agent-content';

// Returns a markdown representation of a page for agents that send
// `Accept: text/markdown`. The middleware rewrites such requests here and
// passes the original path via the `path` query parameter.
export function GET(request: Request) {
  const headerPath = request.headers.get('x-md-path');
  const queryPath = new URL(request.url).searchParams.get('path');
  const path = headerPath || queryPath || '/';
  const markdown = markdownForPath(path);

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'X-Markdown-Tokens': String(approxTokens(markdown)),
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
