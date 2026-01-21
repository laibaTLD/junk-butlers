import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/app/services/[id]/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Junk Removal Services | Complete Junk Hauling Solutions',
  description: 'Expert junk removal services including furniture removal, appliance disposal, yard waste cleanup, and complete property cleanouts. Fast, reliable, and affordable junk hauling.',
  openGraph: {
    title: 'Professional Junk Removal Services | Complete Junk Hauling Solutions',
    description: 'Expert junk removal services including furniture removal, appliance disposal, yard waste cleanup, and complete property cleanouts. Fast, reliable, and affordable junk hauling.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Removal Services | Complete Junk Hauling Solutions',
    description: 'Expert junk removal services including furniture removal, appliance disposal, yard waste cleanup, and complete property cleanouts.',
  },
};

export const revalidate = 60;

async function getLandingPageData(): Promise<LandingPageData | null> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
    return null;
  }

  const landingPageData = await fetchLandingPageForSSG(templateId!, id!);

  if (!landingPageData) {
    console.error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
    return null;
  }

  return landingPageData;
}

export default async function JunkRemovalPage() {
  const landingPageData = await getLandingPageData();

  if (!landingPageData) {
    return null;
  }

  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Complete junk removal and trash hauling services for Peoria residents and businesses"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional junk removal and clean out services throughout Phoenix"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Fast and reliable trash removal and junk hauling in Glendale"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized clean out services for Sun City properties"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive junk removal services for Surprise area"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium trash removal and hauling services in Scottsdale"
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
              titleText="Junk Removal"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Junk Removal Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive junk removal services handle everything from single-item pickups to full property cleanouts. 
                We provide fast, reliable, and affordable junk hauling solutions for residential and commercial properties 
                across Peoria, Phoenix, Glendale, Sun City, Surprise, and Scottsdale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Remove</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Furniture and appliances</li>
                    <li>• Yard waste and debris</li>
                    <li>• Construction materials</li>
                    <li>• Electronics and e-waste</li>
                    <li>• Household junk and clutter</li>
                    <li>• Office equipment and furniture</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Service Areas</h3>
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

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Choose Our Junk Removal?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Fast Service</h4>
                    <p className="text-blue-700 text-sm">Same-day and next-day junk removal available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Eco-Friendly</h4>
                    <p className="text-blue-700 text-sm">We recycle and donate whenever possible</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Fair Pricing</h4>
                    <p className="text-blue-700 text-sm">Transparent pricing with no hidden fees</p>
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
              "Professional junk removal services you can trust. We're here to help with all your junk hauling needs."
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
