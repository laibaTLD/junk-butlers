import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_SERVICES = new Set([
  "junk-removal",
  "junk-hauling",
  "clean-outs",
  "trash-removal",
]);

const VALID_CITIES = new Set([
  "glendale-az",
  "peoria-az",
  "phoenix-az",
  "scottsdale-az",
  "sun-city-az",
  "surprise-az",
]);

/** Legacy URLs from an old site template — block indexing and return 410. */
const LEGACY_PATH_PREFIXES = [
  "/services/appliance-removal",
  "/services/demolition",
  "/services/e-waste-recycling",
  "/services/estate-cleanout",
  "/serving-areas/mesa-az",
  "/serving-areas/scottsdale-az/property-management-cleanout",
];

function isLegacyPath(pathname: string): boolean {
  if (LEGACY_PATH_PREFIXES.some((p) => pathname.startsWith(p))) {
    return true;
  }

  // Only /serving-areas exists — no nested city routes
  if (
    pathname.startsWith("/serving-areas/") &&
    pathname !== "/serving-areas"
  ) {
    return true;
  }

  const serviceMatch = pathname.match(/^\/services\/([^/]+)(?:\/(.*))?$/);
  if (!serviceMatch) return false;

  const [, serviceSlug, rest] = serviceMatch;
  if (!VALID_SERVICES.has(serviceSlug)) {
    return true;
  }

  if (!rest) return false;

  const areaMatch = rest.match(/^service-areas\/([^/]+)/);
  if (areaMatch && !VALID_CITIES.has(areaMatch[1])) {
    return true;
  }

  // Reject other paths under a valid service (e.g. /services/junk-removal/foo)
  if (!rest.startsWith("service-areas/")) {
    return true;
  }

  return false;
}

function goneResponse(): NextResponse {
  return new NextResponse(null, {
    status: 410,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isLegacyPath(pathname)) {
    return goneResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:path*", "/serving-areas/:path*"],
};
