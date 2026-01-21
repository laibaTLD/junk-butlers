import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";

export const revalidate = 60;

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

export default async function ServingAreasPage() {
  const landingPageData = await getLandingPageData();
  const serviceAreas = landingPageData.businessData?.serviceAreas || [];

  return (
    <Layout
      title={
        landingPageData.seoData.title
          ? `${landingPageData.seoData.title} | Service Areas`
          : "Service Areas"
      }
      description={
        landingPageData.seoData.description ||
        "Explore the locations and regions where we provide professional iron work and structural services."
      }
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
          serviceAreas={landingPageData.businessData?.serviceAreas}
        />
        <main className="bg-white">
          <ServiceAreaHeroSection
            serviceName="All Services"
            areaLabel="Our Service Areas"
            heading={
              landingPageData.seoData.title
                ? `${landingPageData.seoData.title} – Service Areas`
                : "Service Areas We Cover"
            }
            subheading="Explore the cities and regions where we provide professional iron work and structural services."
            description="We proudly serve multiple neighborhoods and regions, delivering reliable craftsmanship and on-time installation wherever your project is located."
            theme={landingPageData.themeData}
          />

          <ServiceAreaIntroSection
            title="Local Service, Professional Results"
            paragraphs={[
              "Every service area we cover receives the same level of care, precision, and attention to detail. Our team handles on-site measurement, fabrication, and installation so your project is completed smoothly from start to finish.",
              "Whether you need new structures, custom metal work, or repairs to existing installations, we bring our workshop-quality results directly to your property.",
            ]}
            bullets={[
              "On-site visits and measurements in your area",
              "Custom solutions for homes, shops, and commercial buildings",
              "Skilled fabrication, welding, and professional finishing",
              "Reliable timelines and clear communication from start to finish",
            ]}
            theme={landingPageData.themeData}
          />

          {serviceAreas.length > 0 && (
            <ServiceAreasSection
              serviceAreas={serviceAreas}
              themeData={landingPageData.themeData}
            />
          )}
          {landingPageData.content.faq && (
            <FAQSection
              title={landingPageData.content.faq.title}
              description={landingPageData.content.faq.description}
              questions={landingPageData.content.faq.questions}
              theme={landingPageData.themeData}
            />
          )}
          <FooterSection
            businessName={landingPageData.businessName}
            businessDescription={
              landingPageData.content?.about?.description ||
              "Professional services you can trust. We're here to help with all your business needs."
            }
            logoImage={
              landingPageData.images?.find(
                (img) => img.slotName === "logo-image"
              )?.imageUrl
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
            copyright={landingPageData.content.footer?.copyright}
          />
        </main>
      </div>
    </Layout>
  );
}
