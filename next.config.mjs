/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // Disable image optimization completely
    images: {
      unoptimized: true,
      disableStaticImages: true,
    },
    // Add headers to prevent wallet extensions from activating
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'",
            },
          ],
        },
      ]
    },
  };
  
  export default nextConfig;
  