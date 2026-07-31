/** @type {import('next').NextConfig} */
// When NEXT_EXPORT=1 we do a fully-static export (GitHub Pages).
// Static export does not support runtime headers(), so headers are skipped.
const isExport = process.env.NEXT_EXPORT === '1';

const nextConfig = {
  basePath: '/VerifySignature',
  assetPrefix: '/VerifySignature/',

  // Disable source maps in production for security
  productionBrowserSourceMaps: false,

  // Static export configuration (used by `npm run export` for GitHub Pages)
  ...(isExport ? { output: 'export', distDir: 'VerifySignature' } : {}),

  // Security headers (best-effort; enforced by reverse proxy/CDN in production)
  // Skipped during static export as Next.js does not support headers() with output:'export'
  ...(isExport ? {} : {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "connect-src 'self' https://blockstream.info",
              "font-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
      {
        // Cache immutable static assets for 1 year
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  }),
};

module.exports = nextConfig;
