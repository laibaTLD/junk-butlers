import type { MetadataRoute } from "next";

const ALLOW_URLS = [
  "https://junksbutlers.com/services",
  "https://junksbutlers.com/serving-areas",
  "https://junksbutlers.com/contact-us",
  "https://junksbutlers.com/about-us",
  "https://junksbutlers.com/services/junk-removal",
  "https://junksbutlers.com/services/junk-hauling",
  "https://junksbutlers.com/services/clean-outs",
  "https://junksbutlers.com/services/trash-removal",
  "https://junksbutlers.com/services/junk-removal/service-areas/glendale-az",
  "https://junksbutlers.com/services/junk-removal/service-areas/peoria-az",
  "https://junksbutlers.com/services/junk-removal/service-areas/phoenix-az",
  "https://junksbutlers.com/services/junk-removal/service-areas/scottsdale-az",
  "https://junksbutlers.com/services/junk-removal/service-areas/sun-city-az",
  "https://junksbutlers.com/services/junk-removal/service-areas/surprise-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/glendale-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/peoria-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/phoenix-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/scottsdale-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/sun-city-az",
  "https://junksbutlers.com/services/junk-hauling/service-areas/surprise-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/glendale-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/peoria-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/phoenix-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/scottsdale-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/sun-city-az",
  "https://junksbutlers.com/services/clean-outs/service-areas/surprise-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/glendale-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/peoria-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/phoenix-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/scottsdale-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/sun-city-az",
  "https://junksbutlers.com/services/trash-removal/service-areas/surprise-az",
] as const;

/** Legacy / phantom URLs seen in Search Console — not part of this site. */
const DISALLOW_PATHS = [
  "/api/",
  "/_next/",
  "/admin/",
  "/private/",
  // Block nested serving-area URLs (only /serving-areas is valid),
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [...ALLOW_URLS],
        disallow: [...DISALLOW_PATHS],
      },
    ],
    sitemap: "https://junksbutlers.com/sitemap.xml",
  };
}
