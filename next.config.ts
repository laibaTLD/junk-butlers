/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for SSG + ISR (no output: 'export' to keep ISR functionality)
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
    // Avoid exhausting Postgres max_connections during parallel SSG
    staticPageGenerationConcurrency: 2,
  },
  // Configure for optimal SSG + ISR
  async rewrites() {
    const services = [
      "junk-removal",
      "junk-hauling",
      "clean-outs",
      "trash-removal",
    ];
    const cities = [
      "glendale-az",
      "sun-city-az",
      "phoenix-az",
      "scottsdale-az",
      "surprise-az",
      "peoria-az",
    ];

    return services.flatMap((service) =>
      cities.map((city) => ({
        source: `/${service}-in-${city}`,
        destination: `/services/${service}/service-areas/${city}`,
      }))
    );
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
