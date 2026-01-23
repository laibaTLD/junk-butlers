import Navbar from "@/components/Navbar";
import { LandingPageData } from "@/types/template";
import { ReactNode } from "react";
import Head from "next/head";

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
    <div className="animate-fade-in-up">
      <Head>
        <title>{title} | {landingPageData.businessName}</title>
        {description && <meta name="description" content={description} />}
      </Head>
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
    </div>
  );
}
