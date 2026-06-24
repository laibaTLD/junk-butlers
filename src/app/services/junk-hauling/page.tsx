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
  title: 'Professional Junk Hauling Services | Fast & Reliable Trash Hauling',
  description: 'Expert Junk Hauling services for homes and businesses. Fast, reliable, and affordable trash hauling with proper disposal and recycling solutions.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-hauling',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Junk Hauling Services | Fast & Reliable Trash Hauling',
    description: 'Expert Junk Hauling services for homes and businesses. Fast, reliable, and affordable trash hauling with proper disposal and recycling solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Hauling Services | Fast & Reliable Trash Hauling',
    description: 'Expert Junk Hauling services for homes and businesses. Fast, reliable, and affordable trash hauling.',
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

export default async function TrashRemovalPage() {
  const landingPageData = await getLandingPageData();

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Fast and reliable Junk Hauling services for Peoria residents and businesses"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional Junk Hauling and hauling services throughout Phoenix"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Efficient Junk Hauling solutions for Glendale properties"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized Junk Hauling services for Sun City senior community"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive Junk Hauling services for Surprise area"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium Junk Hauling services for Scottsdale properties"
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
                Our comprehensive Junk Hauling services handle everything from regular household trash pickup to large-scale debris removal. 
                We provide fast, reliable, and professional trash hauling solutions for residential and commercial properties 
                across Peoria, Phoenix, Glendale, Sun City, Surprise, and Scottsdale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Junk Hauling Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular trash pickup</li>
                    <li>• Bulk Junk Hauling</li>
                    <li>• Construction debris removal</li>
                    <li>• Yard waste removal</li>
                    <li>• Commercial trash services</li>
                    <li>• Recycling services</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <Link href="/services/junk-hauling/service-areas/peoria-az" className="text-blue-600 hover:text-blue-800 hover:underline">Peoria, AZ</Link></li>
                    <li>• <Link href="/services/junk-hauling/service-areas/phoenix-az" className="text-blue-600 hover:text-blue-800 hover:underline">Phoenix, AZ</Link></li>
                    <li>• <Link href="/services/junk-hauling/service-areas/glendale-az" className="text-blue-600 hover:text-blue-800 hover:underline">Glendale, AZ</Link></li>
                    <li>• <Link href="/services/junk-hauling/service-areas/sun-city-az" className="text-blue-600 hover:text-blue-800 hover:underline">Sun City, AZ</Link></li>
                    <li>• <Link href="/services/junk-hauling/service-areas/surprise-az" className="text-blue-600 hover:text-blue-800 hover:underline">Surprise, AZ</Link></li>
                    <li>• <Link href="/services/junk-hauling/service-areas/scottsdale-az" className="text-blue-600 hover:text-blue-800 hover:underline">Scottsdale, AZ</Link></li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Why Choose Our Junk Hauling?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Fast Service</h4>
                    <p className="text-red-700 text-sm">Quick pickup and removal when you need it</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Proper Disposal</h4>
                    <p className="text-red-700 text-sm">Responsible trash disposal and recycling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Reliable Schedule</h4>
                    <p className="text-red-700 text-sm">Consistent and dependable Junk Hauling</p>
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
              "Professional Junk Hauling services you can trust. We're here to help with all your trash hauling needs."
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
