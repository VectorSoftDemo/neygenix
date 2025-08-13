// next.config.js or next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  assetPrefix: '',
  basePath: '',
  trailingSlash: true,
}

export default nextConfig;
