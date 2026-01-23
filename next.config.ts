/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optimize for SSG + ISR
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any host
      },
    ],
    qualities: [75, 85, 90, 95, 100], // Configure allowed quality values
  },
  // Enable experimental features for better performance
  experimental: {
    ppr: false, // Keep false for stability
  },
  // Configure for optimal SSG + ISR
  async rewrites() {
    return [];
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
