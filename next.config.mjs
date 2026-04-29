/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Remove the "X-Powered-By: Next.js" header for security
  poweredByHeader: false,

  // Enable gzip/brotli compression at the Node.js layer
  compress: true,

  // Image optimisation — serve AVIF first, fallback to WebP
  images: {
    formats: ['image/avif', 'image/webp'],
    // Responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL for optimised images (1 week)
    minimumCacheTTL: 604800,
  },

  // Cache-control headers (belt-and-suspenders alongside netlify.toml)
  async headers() {
    return [
      {
        // Immutable static assets — 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Images in /public
        source: '/:path*.(png|jpg|jpeg|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Security headers on all routes
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
