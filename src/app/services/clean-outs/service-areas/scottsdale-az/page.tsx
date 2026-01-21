import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceFeaturesSection from "@/sections/ServiceFeaturesSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Premium Clean Out Services Scottsdale AZ | Luxury Estate Cleanouts',
  description: 'Expert clean out services in Scottsdale, AZ. Premium property cleanouts for luxury homes, estates, and high-end businesses. Professional, discreet, and thorough service.',
  openGraph: {
    title: 'Premium Clean Out Services Scottsdale AZ | Luxury Estate Cleanouts',
    description: 'Expert clean out services in Scottsdale, AZ. Premium property cleanouts for luxury homes, estates, and high-end businesses. Professional, discreet, and thorough service.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Clean Out Services Scottsdale AZ | Luxury Estate Cleanouts',
    description: 'Expert clean out services in Scottsdale, AZ. Premium property cleanouts for luxury homes and estates.',
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

export default async function CleanOutsScottsdalePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Premium Clean Out Services",
    areaLabel: "Scottsdale, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Looking for premium clean out services in Scottsdale, AZ?",
    "If you're searching for high-end clean out services in Scottsdale, Arizona, our premium team is here to help. We provide luxury property cleanout solutions with level of sophistication and discretion that Scottsdale residents and businesses expect. Our experienced crew understands the unique needs of this luxury market, from exclusive gated communities to high-end commercial properties. We pride ourselves on being Scottsdale's premium clean out service for elegant, efficient, and discreet solutions.",
    "Our professional clean out team in Scottsdale is equipped to handle any size cleanout project with attention to detail that luxury properties demand. We arrive on time, work discreetly and efficiently, and ensure your property is left pristine. Whether you're clearing out a luxury estate, renovating a high-end business, or need specialized commercial cleanout, we have the expertise and refined approach to get the job done right.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Premium Clean Out Services in Scottsdale, AZ",
    "We provide comprehensive premium clean out services across Scottsdale, Arizona. From high-end furniture removal to luxury estate clearances, our expert team handles all types of cleanouts with sophistication and care that Scottsdale properties deserve. Trust us for professional, discreet, and premium cleanout solutions throughout Scottsdale.",
    "Luxury Residential Clean Out Services Scottsdale, AZ",
    "Our luxury residential clean out services in Scottsdale are designed for high-end properties and discerning homeowners. Whether you're renovating a luxury home, clearing out an estate, or preparing a property for sale, we provide cleanout services that match the quality of your property. Our team serves all Scottsdale neighborhoods, from Paradise Valley to North Scottsdale.",
    "Commercial Clean Out for High-End Businesses",
    "We specialize in commercial clean out services for premium businesses throughout Scottsdale. From luxury retail renovations to high-end office cleanouts, our commercial clean out services are designed to maintain the professional image of your business while providing efficient clearance solutions.",
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
    "Why Choose Our Premium Clean Out Services in Scottsdale, AZ?",
    "When it comes to property clean outs in Scottsdale, Arizona, choosing a premium service provider who understands the expectations of luxury properties is essential. Our company stands out as Scottsdale's premier clean out service because we combine sophisticated service delivery with the highest standards of professionalism. We understand the unique requirements of Scottsdale's luxury market, from gated communities to high-end commercial districts.",
    "Our team of clean out experts in Scottsdale is specially trained to work with luxury properties and high-end businesses. We have built our reputation on delivering exceptional white-glove service, complete discretion, and meticulous attention to detail. When you choose us, you're not just getting a clean out service – you're getting a premium partner who understands and respects the standards of Scottsdale's finest properties.",
  ];

  const whyChooseUsBullets = [
    "Scottsdale Luxury Experts - Deep understanding of premium property requirements and expectations",
    "White-Glove Service - Meticulous attention to detail and sophisticated service delivery",
    "Complete Discretion - Professional and confidential service for high-profile clients",
    "Premium Equipment - High-end tools and vehicles suitable for luxury properties",
    "Professional Team - Uniformed, courteous, and highly trained clean out specialists",
    "Comprehensive Solutions - Handle all types of clean outs with luxury property expertise",
  ];

  const faqQuestions = [
    {
      question: "Do you offer white-glove clean out services in Scottsdale?",
      answer: "Yes, we specialize in white-glove clean out services for Scottsdale's luxury properties, providing the highest level of care and attention to detail.",
    },
    {
      question: "Can you handle clean outs for gated communities in Scottsdale?",
      answer: "Absolutely. We have extensive experience working with Scottsdale's gated communities and understand their specific access requirements and service standards.",
    },
    {
      question: "Do you provide commercial clean outs for high-end businesses?",
      answer: "Yes, we specialize in commercial clean outs for premium businesses throughout Scottsdale, maintaining the professional image and discretion your business requires.",
    },
    {
      question: "How quickly can you provide clean out service in Scottsdale?",
      answer: "We offer flexible scheduling including same-day and next-day clean out services throughout Scottsdale, with priority service for our premium clients.",
    },
    {
      question: "Are you insured for high-value properties in Scottsdale?",
      answer: "Yes, we are fully licensed, insured, and certified to provide clean out services in Scottsdale, AZ, with coverage appropriate for high-value properties.",
    },
  ];

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
    <ServiceAreaLayout
      landingPageData={landingPageData}
      title={`${service.title} in ${service.areaLabel}`}
      description={
        landingPageData.seoData.description ||
        `${service.title} services in ${service.areaLabel} for residential and commercial properties.`
      }
    >
      <ServiceAreaHeroSection
        serviceName={service.title}
        areaLabel={service.areaLabel}
        heading={service.title}
        subheading="Premium and discreet clean out services in Scottsdale, AZ"
        description="Luxury clean out solutions for Scottsdale's high-end properties and estates."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Looking for premium clean out services in Scottsdale, AZ?"
        paragraphs={areaIntroParagraphs}
        bullets={[]}
        theme={landingPageData.themeData}
      />

      <ServiceFeaturesSection
        title="Our Premium Clean Out Services in Scottsdale, AZ"
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

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our premium clean out services in Scottsdale, AZ."
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
