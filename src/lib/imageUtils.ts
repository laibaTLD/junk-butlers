import { Image } from "@/types/template";

/** Local images used across the site when CMS URLs are missing or broken. */
export const GALLERY_FALLBACK_IMAGES = [
  "/images/0E57FD15-6FA3-40B4-AA72-42E8BA64D39D.jpg",
  "/images/2731F45D-D0C7-47E9-96CE-9B4FF6AA2DD7.jpg",
  "/images/5A25E868-EB83-496C-BD1F-85B92A5F2520.jpg",
  "/images/image-1.webp",
  "/images/image-2.webp",
  "/images/image-4.webp",
  "/images/image-7.webp",
  "/images/image-10.webp",
] as const;

export function normalizeImageUrl(url: string | undefined | null): string {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (!trimmed) return "";

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/")
  ) {
    return trimmed;
  }

  if (trimmed.startsWith("images/")) {
    return `/${trimmed}`;
  }

  const base =
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "";
  if (base) {
    return `${base.replace(/\/$/, "")}/${trimmed.replace(/^\//, "")}`;
  }

  return `/${trimmed.replace(/^\//, "")}`;
}

export function isGalleryImage(img: {
  slotName?: string;
  category?: string;
}): boolean {
  const slot = (img.slotName ?? "").toLowerCase();
  const cat = (img.category ?? "").toLowerCase();
  return slot.includes("gallery") || cat.includes("gallery");
}

/** Stock/demo URLs from the CMS template that should not be used on this site. */
function shouldUseGalleryFallback(url: string): boolean {
  if (!url) return true;
  const normalized = normalizeImageUrl(url);
  if (normalized.startsWith("/images/")) return false;

  try {
    const host = new URL(normalized, "https://junksbutlers.com").hostname;
    const templateHosts = [
      "unsplash.com",
      "placeholder.com",
      "picsum.photos",
      "placehold.co",
      "dummyimage.com",
    ];
    return templateHosts.some((h) => host.includes(h));
  } catch {
    return true;
  }
}

export function getGalleryImages(images: Image[] | undefined): Image[] {
  if (!images?.length) return [];

  return [...images]
    .filter(isGalleryImage)
    .sort((a, b) =>
      a.slotName.localeCompare(b.slotName, undefined, { numeric: true })
    )
    .map((img, index) => {
      const normalized = normalizeImageUrl(img.imageUrl);
      const useFallback = shouldUseGalleryFallback(img.imageUrl);
      return {
        ...img,
        imageUrl: useFallback
          ? GALLERY_FALLBACK_IMAGES[index % GALLERY_FALLBACK_IMAGES.length]
          : normalized ||
            GALLERY_FALLBACK_IMAGES[index % GALLERY_FALLBACK_IMAGES.length],
      };
    });
}

export function getGalleryFallbackImage(index: number): string {
  return GALLERY_FALLBACK_IMAGES[index % GALLERY_FALLBACK_IMAGES.length];
}
