import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://junksbutlers.com";
  const now = new Date();

  const staticPaths = [
    "/",
    "/services",
    "/serving-areas",
  ];

  const serviceIds = [
    "junk-removal",
    "junk-hauling",
    "clean-outs",
    "trash-removal",
  ];

  const cities = [
    "glendale-az",
    "peoria-az",
    "phoenix-az",
    "scottsdale-az",
    "sun-city-az",
    "surprise-az",
  ];

  const urls: MetadataRoute.Sitemap = [];

  // Static top-level pages
  for (const path of staticPaths) {
    urls.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
    });
  }

  // Service root pages
  for (const service of serviceIds) {
    urls.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Service area pages per service and city
  for (const service of serviceIds) {
    for (const city of cities) {
      urls.push({
        url: `${baseUrl}/services/${service}/service-areas/${city}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return urls;
}
