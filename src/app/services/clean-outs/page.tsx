import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/services/[id]/components/Breadcrumbs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Clean Out Services | Complete Property Cleanouts',
  description: 'Expert clean out services for homes, businesses, estates, and properties. Professional, efficient, and thorough cleanout solutions for all your needs.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/clean-outs',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Clean Out Services | Complete Property Cleanouts',
    description: 'Expert clean out services for homes, businesses, estates, and properties. Professional, efficient, and thorough cleanout solutions for all your needs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Clean Out Services | Complete Property Cleanouts',
    description: 'Expert clean out services for homes, businesses, estates, and properties.',
  },
};

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

export default async function CleanOutsPage() {
  const landingPageData = await getLandingPageData();

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Complete clean out services for Peoria properties including homes, businesses, and estates"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional property cleanouts throughout Phoenix for residential and commercial properties"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Thorough clean out services for Glendale homes and businesses"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized estate cleanouts and senior property cleanouts in Sun City"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive clean out services for Surprise area properties"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium clean out services for Scottsdale luxury properties and estates"
    }
  ];

  return (
    <Layout
      title={landingPageData.seoData.title}
      description={landingPageData.seoData.description}
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
          serviceAreas={serviceAreas}
        />
        <main className="bg-white">
          <section className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
            <Breadcrumbs 
              titleText="Clean Outs"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Clean Out Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive clean out services handle everything from single-room cleanouts to entire property clearances. 
                We provide thorough, efficient, and professional cleanout solutions for homes, businesses, estates, and commercial properties 
                across Peoria, Phoenix, Glendale, Sun City, Surprise, and Scottsdale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Clean Out Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Whole house cleanouts</li>
                    <li>• Estate cleanouts</li>
                    <li>• Business property cleanouts</li>
                    <li>• Foreclosure cleanouts</li>
                    <li>• Hoarding cleanouts</li>
                    <li>• Garage and attic cleanouts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <Link href="/services/clean-outs/service-areas/peoria-az" className="text-blue-600 hover:text-blue-800 hover:underline">Peoria, AZ</Link></li>
                    <li>• <Link href="/services/clean-outs/service-areas/phoenix-az" className="text-blue-600 hover:text-blue-800 hover:underline">Phoenix, AZ</Link></li>
                    <li>• <Link href="/services/clean-outs/service-areas/glendale-az" className="text-blue-600 hover:text-blue-800 hover:underline">Glendale, AZ</Link></li>
                    <li>• <Link href="/services/clean-outs/service-areas/sun-city-az" className="text-blue-600 hover:text-blue-800 hover:underline">Sun City, AZ</Link></li>
                    <li>• <Link href="/services/clean-outs/service-areas/surprise-az" className="text-blue-600 hover:text-blue-800 hover:underline">Surprise, AZ</Link></li>
                    <li>• <Link href="/services/clean-outs/service-areas/scottsdale-az" className="text-blue-600 hover:text-blue-800 hover:underline">Scottsdale, AZ</Link></li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Why Choose Our Clean Out Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Thorough Service</h4>
                    <p className="text-green-700 text-sm">Complete property cleanouts from floor to ceiling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Compassionate Approach</h4>
                    <p className="text-green-700 text-sm">Understanding and respectful during difficult transitions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Efficient Process</h4>
                    <p className="text-green-700 text-sm">Fast and organized cleanout services</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceAreasSection
            serviceAreas={serviceAreas}
            themeData={landingPageData.themeData}
          />

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
              "Professional clean out services you can trust. We're here to help with all your property cleanout needs."
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
