// next.config.js or next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 Static export enabled
  images: {
    unoptimized: true, // 👈 Disable image optimization for static hosting
  },
};

export default nextConfig;
