import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import CompanyDetails from "@/sections/CompanyDetails";
import CTASection from "@/sections/CTASection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Junks Butlers | Professional Junk Removal Phoenix AZ",
  description:
    "Learn about Junks Butlers — trusted junk and trash removal in Phoenix and the West Valley. Same-day service, upfront pricing, and eco-friendly disposal.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://junksbutlers.com"}/about-us`,
  },
  robots: { index: true, follow: true },
};

async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    notFound();
  }

  return landingPageData;
}

export default async function AboutUsPage() {
  const landingPageData = await getLandingPageData();
  const about = landingPageData.content?.about;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://junksbutlers.com";

  const seoDataWithIndex = {
    ...landingPageData.seoData,
    isIndex: true,
    canonicalUrl: `${siteUrl}/about-us`,
  };

  return (
    <Layout
      theme={landingPageData.themeData}
      seoData={seoDataWithIndex}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
          serviceAreas={landingPageData.businessData?.serviceAreas}
        />
        <main>
          {about ? (
            <AboutSection
              title={about.title}
              description={about.description}
              features={about.features}
              ctaButton={
                about.ctaButton ?? {
                  label: "Contact Us",
                  href: "/contact-us",
                }
              }
              image={
                landingPageData.images?.find(
                  (img) =>
                    img.slotName === "about" || img.category === "about"
                )?.imageUrl
              }
              images={landingPageData.images || []}
              theme={landingPageData.themeData}
            />
          ) : (
            <section className="min-h-[50vh] flex items-center justify-center px-6 py-24 bg-white">
              <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">
                  About {landingPageData.businessName}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {landingPageData.seoData?.description ||
                    "Professional junk and trash removal you can trust. Same-day service, upfront pricing, and eco-friendly disposal for homes and businesses across the Phoenix metro area."}
                </p>
              </div>
            </section>
          )}

          {landingPageData.content?.companyDetails && (
            <CompanyDetails
              data={landingPageData.content.companyDetails}
              images={landingPageData.images}
              theme={landingPageData.themeData}
            />
          )}

          <CTASection
            data={
              landingPageData.content?.ctaSection ?? {
                heading: "Ready to clear the clutter?",
                subHeading: "",
                description:
                  "Get a free quote for junk removal, hauling, or clean-outs. We serve Phoenix and the West Valley.",
                ctaButton: { label: "Get a Free Quote", href: "/contact-us" },
              }
            }
            theme={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
