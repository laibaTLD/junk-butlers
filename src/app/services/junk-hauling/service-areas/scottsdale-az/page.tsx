import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceFeaturesSection from "@/sections/ServiceFeaturesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Premium Junk Hauling Services Scottsdale AZ | Luxury Junk Removal',
  description: 'Expert junk hauling services in Scottsdale, AZ. Premium junk removal for luxury homes, estates, and high-end businesses. Professional, discreet, and thorough service.',
  openGraph: {
    title: 'Premium Junk Hauling Services Scottsdale AZ | Luxury Junk Removal',
    description: 'Expert junk hauling services in Scottsdale, AZ. Premium junk removal for luxury homes, estates, and high-end businesses. Professional, discreet, and thorough service.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Junk Hauling Services Scottsdale AZ | Luxury Junk Removal',
    description: 'Expert junk hauling services in Scottsdale, AZ. Premium junk removal for luxury homes and estates.',
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

export default async function JunkHaulingScottsdalePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Premium Junk Hauling Services",
    areaLabel: "Scottsdale, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Looking for premium junk hauling services in Scottsdale, AZ?",
    "If you're searching for high-end junk hauling services in Scottsdale, Arizona, our premium team is here to help. We provide luxury junk removal solutions with a level of sophistication and discretion that Scottsdale residents and businesses expect. Our experienced crew understands the unique needs of this luxury market, from exclusive gated communities to high-end commercial properties. We pride ourselves on being Scottsdale's premium junk hauling service for elegant, efficient, and discreet solutions.",
    "Our professional junk hauling team in Scottsdale is equipped to handle any size junk removal project with attention to detail that luxury properties demand. We arrive on time, work discreetly and efficiently, and ensure your property is left pristine. Whether you're clearing out a luxury estate, renovating a high-end business, or need specialized commercial junk removal, we have the expertise and refined approach to get the job done right.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Premium Junk Hauling Services in Scottsdale, AZ",
    "We provide comprehensive premium junk hauling services across Scottsdale, Arizona. From high-end furniture removal to luxury estate clearances, our expert team handles all types of junk with sophistication and care that Scottsdale properties deserve. Trust us for professional, discreet, and premium junk hauling solutions throughout Scottsdale.",
    "Luxury Residential Junk Hauling Scottsdale, AZ",
    "Our luxury residential junk hauling services in Scottsdale are designed for high-end properties and discerning homeowners. Whether you're renovating a luxury home, clearing out an estate, or need specialized junk removal, we provide services that match the quality of your property. Our team serves all Scottsdale neighborhoods, from Paradise Valley to North Scottsdale.",
    "Premium Commercial Junk Hauling",
    "We specialize in premium commercial junk hauling for high-end businesses throughout Scottsdale. From luxury retail renovations to high-end office junk removal, our commercial junk hauling solutions are designed to maintain the professional image of your business while providing efficient clearance services.",
  ];

  const serviceFeaturesBullets = [
    "Premium Service Level",
    "Discreet and Professional Team",
    "Luxury Property Experience",
    "Fully Licensed and Insured",
    "High-End Equipment",
    "White-Glove Service Available",
  ];

  const whyChooseUsParagraphs = [
    "Why Choose Our Premium Junk Hauling Services in Scottsdale, AZ?",
    "When it comes to junk hauling in Scottsdale, Arizona, choosing a premium service provider who understands the expectations of luxury properties is essential. Our company stands out as Scottsdale's premier junk hauling service because we combine sophisticated service delivery with the highest standards of professionalism. We understand the unique requirements of Scottsdale's luxury market, from gated communities to high-end commercial districts.",
    "Our team of junk hauling experts in Scottsdale is specially trained to work with luxury properties and high-end businesses. We have built our reputation on delivering exceptional white-glove service, complete discretion, and meticulous attention to detail. When you choose us, you're not just getting a junk hauling service – you're getting a premium partner who understands and respects the standards of Scottsdale's finest properties.",
  ];

  const whyChooseUsBullets = [
    "Scottsdale Luxury Experts - Deep understanding of premium property requirements and expectations",
    "White-Glove Service - Meticulous attention to detail and sophisticated service delivery",
    "Complete Discretion - Professional and confidential service for high-profile clients",
    "Premium Equipment - High-end tools and vehicles suitable for luxury properties",
    "Professional Team - Uniformed, courteous, and highly trained junk hauling specialists",
    "Comprehensive Solutions - Handle all types of junk with luxury property expertise",
  ];

  const faqQuestions = [
    {
      question: "Do you offer white-glove junk hauling services in Scottsdale?",
      answer: "Yes, we specialize in white-glove junk hauling services for Scottsdale's luxury properties, providing the highest level of care and attention to detail.",
    },
    {
      question: "Can you handle junk hauling for gated communities in Scottsdale?",
      answer: "Absolutely. We have extensive experience working with Scottsdale's gated communities and understand their specific access requirements and service standards.",
    },
    {
      question: "Do you provide commercial junk hauling for high-end businesses?",
      answer: "Yes, we specialize in premium commercial junk hauling for high-end businesses throughout Scottsdale, maintaining the professional image and discretion your business requires.",
    },
    {
      question: "How quickly can you provide junk hauling service in Scottsdale?",
      answer: "We offer flexible scheduling including same-day and next-day junk hauling services throughout Scottsdale, with priority service for our premium clients.",
    },
    {
      question: "Are you insured for high-value properties in Scottsdale?",
      answer: "Yes, we are fully licensed, insured, and certified to provide junk hauling services in Scottsdale, AZ, with coverage appropriate for high-value properties.",
    },
  ];

  const serviceAreas = [
    { city: "Peoria", region: "AZ", description: "Fast and reliable junk hauling services for Peoria residents and businesses" },
    { city: "Phoenix", region: "AZ", description: "Professional junk removal and hauling services throughout Phoenix" },
    { city: "Glendale", region: "AZ", description: "Efficient junk hauling solutions for Glendale properties" },
    { city: "Sun City", region: "AZ", description: "Specialized junk hauling services for Sun City senior community" },
    { city: "Surprise", region: "AZ", description: "Comprehensive junk hauling services for Surprise area" },
    { city: "Scottsdale", region: "AZ", description: "Premium junk hauling services for Scottsdale properties" }
  ];

  return (
    <ServiceAreaLayout
      landingPageData={landingPageData}
      title={`${service.title} in ${service.areaLabel}`}
      description={landingPageData.seoData.description || `${service.title} services in ${service.areaLabel} for residential and commercial properties.`}
    >
      <ServiceAreaHeroSection
        serviceName={service.title}
        areaLabel={service.areaLabel}
        heading={service.title}
        subheading="Premium and discreet junk hauling services in Scottsdale, AZ"
        description="Luxury junk removal and hauling solutions for Scottsdale's high-end properties and businesses."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />
      <ServiceAreaIntroSection
        title="Looking for premium junk hauling services in Scottsdale, AZ?"
        paragraphs={areaIntroParagraphs}
        bullets={[]}
        theme={landingPageData.themeData}
      />
      <ServiceFeaturesSection
        title="Our Premium Junk Hauling Services in Scottsdale, AZ"
        description={serviceFeaturesParagraphs.join(" ")}
        features={serviceFeaturesBullets}
        theme={landingPageData.themeData}
      />
      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={servicesContent.description}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}
      <WhyChooseUsSection
        title="Why Choose Our Premium Junk Hauling Services in Scottsdale, AZ?"
        paragraphs={whyChooseUsParagraphs}
        bullets={whyChooseUsBullets}
        theme={landingPageData.themeData}
      />
      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our premium junk hauling services in Scottsdale, AZ."
          questions={faqQuestions}
          theme={landingPageData.themeData}
        />
      )}
      <ServiceAreasSection
        serviceAreas={serviceAreas}
        themeData={landingPageData.themeData}
      />
    </ServiceAreaLayout>
  );
}
