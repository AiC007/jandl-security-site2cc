import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()'
          },
          {
            // Resource discovery for AI agents (RFC 8288 Link headers).
            // Points to the API catalog, MCP server card and LLM context files.
            key: 'Link',
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
              '</llms-full.txt>; rel="service-doc"; type="text/plain"',
              '</llms.txt>; rel="describedby"; type="text/plain"'
            ].join(', ')
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate'
          }
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ];
  },

  // Expose agent discovery and MCP endpoints at their canonical paths.
  // The handlers live under /api so they build reliably; these rewrites map the
  // spec-required public URLs onto them.
  async rewrites() {
    return [
      {
        source: '/.well-known/api-catalog',
        destination: '/api/wellknown/api-catalog',
      },
      {
        source: '/mcp',
        destination: '/api/mcp',
      },
    ];
  },

  // Compression
  compress: true,

  // Performance optimizations
  experimental: {
    scrollRestoration: true,
  },

  // Standalone output for deployment
  // output: 'standalone',

  // Trailing slash handling
  trailingSlash: false,

  // PoweredByHeader disabled for security
  poweredByHeader: false,

  // Environment variables
  env: {
    SITE_URL: 'https://jandlsecurity.co.uk'
  }
};

export default nextConfig;