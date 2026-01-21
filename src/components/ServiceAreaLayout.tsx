import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import { LandingPageData } from "@/types/template";
import { ReactNode } from "react";

interface ServiceAreaLayoutProps {
  landingPageData: LandingPageData;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ServiceAreaLayout({
  landingPageData,
  title,
  description,
  children,
}: ServiceAreaLayoutProps) {
  return (
    <Layout
      title={title}
      description={description || landingPageData.seoData.description}
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          businessName={landingPageData.businessName}
          logoImage={
            landingPageData.images?.find((img) => img.slotName === "logo-image")
              ?.imageUrl
          }
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
          serviceAreas={landingPageData.businessData?.serviceAreas}
        />
        <main className="bg-white">{children}</main>
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
      </div>
    </Layout>
  );
}
