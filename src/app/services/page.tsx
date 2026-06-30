import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Explore Our Professional Trash & Junk Removal Services | Junk Butlers | Phoenix AZ",
  description: "Junk Butlers is your premier partner for a clutter-free life. Explore our comprehensive junk removal services, including Junk Removal, Trash Removal, Clean Outs, and Junk Hauling solutions for all your needs.",
};

async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId!, id!);

  if (!landingPageData) {
    console.error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
    notFound();
  }

  return landingPageData;
}

export default async function ServicesIndexPage() {
  const landingPageData = await getLandingPageData();
  const services = landingPageData.content?.services?.services || [];

  const matchServiceByTitle = (title: string) =>
    services.find(
      (s) =>
        typeof s?.title === "string" &&
        s.title.trim().toLowerCase() === title.trim().toLowerCase()
    );

  const junkRemoval = matchServiceByTitle("Junk Removal") ?? services[0];
  const trashRemoval = matchServiceByTitle("Trash Removal") ?? services[1];
  const cleanOuts = matchServiceByTitle("Clean Outs") ?? services[2];
  const junkHauling = matchServiceByTitle("Junk Hauling") ?? services[3];

  const items = [
    { href: "/junk-removal", label: "Junk Removal", service: junkRemoval },
    {
      href: "/trash-removal",
      label: "Trash Removal",
      service: trashRemoval,
    },
    {
      href: "/clean-outs",
      label: "Clean Outs",
      service: cleanOuts,
    },
    {
      href: "/junk-hauling",
      label: "Junk Hauling",
      service: junkHauling,
    },
  ].filter((i) => i.service);

  return (
    <div className="animate-fade-in-up">
      <main className="bg-white">
          <section className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Explore our comprehensive junk removal services, including Junk Removal, Trash Removal, Clean Outs, and Junk Hauling solutions for all your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map(({ href, label, service }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {label}
                  </h2>
                  {service?.description && (
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {service.description as string}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-gray-900">
                    View details
                    <span className="ml-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
      </main>
    </div>
  );
}
