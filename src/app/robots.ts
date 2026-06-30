import type { MetadataRoute } from "next";

const BASE_URL = "https://junksbutlers.com";

const services = [
  "junk-removal",
  "junk-hauling",
  "clean-outs",
  "trash-removal",
] as const;

const cities = [
  "glendale-az",
  "peoria-az",
  "phoenix-az",
  "scottsdale-az",
  "sun-city-az",
  "surprise-az",
] as const;

const ALLOW_URLS = [
  `${BASE_URL}/services`,
  `${BASE_URL}/serving-areas`,
  `${BASE_URL}/contact-us`,
  `${BASE_URL}/about-us`,
  ...services.map((service) => `${BASE_URL}/${service}`),
  ...services.flatMap((service) =>
    cities.map((city) => `${BASE_URL}/${service}-in-${city}`)
  ),
] as const;

/** Legacy / phantom URLs seen in Search Console — not part of this site. */
const DISALLOW_PATHS = [
  "/api/",
  "/_next/",
  "/admin/",
  "/private/",
  ...services.map((service) => `/services/${service}`),
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
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
