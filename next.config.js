/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === '1';
const repoName = 'VerifySignature';

const nextConfig = {
  ...(isExport ? { output: 'export', distDir: repoName } : {}),
  ...(isExport ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` } : {}),
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-DNS-Prefetch-Control', value: 'on' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
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
              source: '/_next/static/(.*)',
              headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
              ],
            },
          ];
        },
      }),
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
