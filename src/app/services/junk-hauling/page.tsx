import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/services/[id]/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Junk Hauling Services | Fast & Reliable Hauling Solutions',
  description: 'Expert junk hauling services for homes and businesses. Fast, reliable, and affordable junk hauling with proper disposal and recycling.',
  openGraph: {
    title: 'Professional Junk Hauling Services | Fast & Reliable Hauling Solutions',
    description: 'Expert junk hauling services for homes and businesses. Fast, reliable, and affordable junk hauling with proper disposal and recycling.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Hauling Services | Fast & Reliable Hauling Solutions',
    description: 'Expert junk hauling services for homes and businesses. Fast, reliable, and affordable junk hauling.',
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

export default async function JunkHaulingPage() {
  const landingPageData = await getLandingPageData();

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Fast and reliable junk hauling services for Peoria residents and businesses"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional junk hauling and transport services throughout Phoenix"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Efficient junk hauling solutions for Glendale properties"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized junk hauling services for Sun City senior community"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive junk hauling services for Surprise area"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium junk hauling services for Scottsdale properties"
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
              titleText="Junk Hauling"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Junk Hauling Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive junk hauling services handle everything from single-item pickups to full-scale debris removal. 
                We provide fast, reliable, and professional hauling solutions for residential and commercial properties 
                across Peoria, Phoenix, Glendale, Sun City, Surprise, and Scottsdale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Haul</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Furniture and appliances</li>
                    <li>• Construction debris</li>
                    <li>• Yard waste and landscaping</li>
                    <li>• Electronics and e-waste</li>
                    <li>• Household junk and clutter</li>
                    <li>• Commercial waste and equipment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Peoria, AZ</li>
                    <li>• Phoenix, AZ</li>
                    <li>• Glendale, AZ</li>
                    <li>• Sun City, AZ</li>
                    <li>• Surprise, AZ</li>
                    <li>• Scottsdale, AZ</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Why Choose Our Junk Hauling?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Fast Service</h4>
                    <p className="text-orange-700 text-sm">Quick pickup and hauling when you need it</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Proper Disposal</h4>
                    <p className="text-orange-700 text-sm">Responsible disposal and recycling practices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Heavy Equipment</h4>
                    <p className="text-orange-700 text-sm">Right tools for any hauling job</p>
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
              "Professional junk hauling services you can trust. We're here to help with all your hauling needs."
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
