/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // ✅ تفعيل فحص ESLint للأمان
  },
  typescript: {
    ignoreBuildErrors: false, // ✅ تفعيل فحص TypeScript للأمان
  },
  images: {
    unoptimized: false,
    domains: [], // ✅ تحديد النطاقات المسموحة للصور
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // ✅ إضافة رؤوس أمنية
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  }, 
  poweredByHeader: false, // إخفاء رأس X-Powered-By
  compress: true, 
}

export default nextConfig