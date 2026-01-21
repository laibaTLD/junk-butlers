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
  title: 'Professional Junk Hauling Services Glendale AZ | Fast Junk Removal',
  description: 'Expert junk hauling services in Glendale, AZ. Fast, affordable, and reliable junk removal for residential and commercial properties in Glendale and surrounding areas.',
  openGraph: {
    title: 'Professional Junk Hauling Services Glendale AZ | Fast Junk Removal',
    description: 'Expert junk hauling services in Glendale, AZ. Fast, affordable, and reliable junk removal for residential and commercial properties in Glendale and surrounding areas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Hauling Services Glendale AZ | Fast Junk Removal',
    description: 'Expert junk hauling services in Glendale, AZ. Fast, affordable, and reliable junk removal for residential and commercial properties.',
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

export default async function JunkHaulingGlendalePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Professional Junk Hauling Services",
    areaLabel: "Glendale, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Looking for reliable junk hauling services in Glendale, AZ?",
    "If you're searching for professional junk hauling services in Glendale, Arizona, our expert team is here to help. We provide comprehensive junk removal solutions for both residential and commercial properties throughout Glendale. Our experienced crew understands the unique needs of Glendale residents, from historic homes near downtown to modern developments in the west valley. We pride ourselves on being Glendale's trusted junk hauling service for fast, efficient, and affordable solutions.",
    "Our professional junk hauling team in Glendale is equipped to handle any size junk removal project, from single-item pickups to entire property cleanouts. We arrive on time, work efficiently, and ensure your property is left clean and tidy. Whether you need furniture removal, appliance disposal, or complete property clearing, we have the expertise and equipment to get the job done right.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Junk Hauling Services in Glendale, AZ",
    "We provide comprehensive junk hauling services across Glendale, Arizona. From furniture removal to appliance disposal, our expert team handles all types of junk efficiently and responsibly. Trust us for professional, fast, and affordable junk hauling solutions throughout Glendale.",
    "Residential Junk Hauling Glendale, AZ",
    "Our residential junk hauling services in Glendale are designed to help homeowners clear out unwanted items quickly and easily. Whether you're moving, renovating, or just decluttering, we make junk removal simple and convenient. Our team serves all Glendale neighborhoods, providing reliable service when you need it most.",
    "Commercial Junk Hauling Services",
    "We specialize in commercial junk hauling for businesses throughout Glendale. From office furniture removal to retail store cleanouts, our commercial junk hauling solutions are designed to keep your business running smoothly while ensuring proper waste disposal.",
  ];

  const serviceFeaturesBullets = [
    "Furniture Removal",
    "Appliance Disposal",
    "Construction Debris Removal",
    "Yard Waste Hauling",
    "Property Cleanouts",
    "Same-Day Service Available",
  ];

  const whyChooseUsParagraphs = [
    "Why Choose Our Junk Hauling Services in Glendale, AZ?",
    "When it comes to junk hauling in Glendale, Arizona, choosing the right service provider makes all the difference. Our company stands out as Glendale's premier junk hauling service because we combine local expertise with professional service delivery. We understand the unique needs of Glendale residents and businesses, from historic properties to modern developments.",
    "Our team of junk hauling experts in Glendale is fully trained, insured, and equipped to handle any type of junk removal project. We have built our reputation on delivering exceptional customer service, transparent pricing, and responsible disposal practices. When you choose us, you're not just getting a junk hauling service – you're getting a partner who understands Glendale and cares about our community.",
  ];

  const whyChooseUsBullets = [
    "Glendale Experts - Deep understanding of Glendale's diverse neighborhoods and needs",
    "Fast Response Time - Same-day and next-day junk hauling services available",
    "Eco-Friendly Practices - Recycling and proper waste disposal methods",
    "Competitive Pricing - Transparent, upfront pricing with no hidden fees",
    "Professional Team - Fully trained, insured, and courteous junk hauling specialists",
    "Comprehensive Services - Handle all types of junk from residential to commercial",
  ];

  const faqQuestions = [
    {
      question: "What areas of Glendale do you service for junk hauling?",
      answer: "We service all areas of Glendale, including downtown Glendale, historic districts, and all residential and commercial areas throughout the city.",
    },
    {
      question: "Do you offer same-day junk hauling in Glendale?",
      answer: "Yes, we offer same-day junk hauling services throughout Glendale, AZ, subject to availability. Contact us early in the day for the best chance of same-day service.",
    },
    {
      question: "How much does junk hauling cost in Glendale?",
      answer: "Our junk hauling pricing is based on volume and type of items. We provide free, no-obligation on-site estimates and offer transparent pricing with no hidden fees.",
    },
    {
      question: "Do you recycle junk you haul in Glendale?",
      answer: "Yes, we prioritize eco-friendly disposal methods. We recycle materials whenever possible and follow all local regulations for proper waste disposal in Glendale.",
    },
    {
      question: "Are you licensed and insured for junk hauling in Glendale?",
      answer: "Yes, we are fully licensed, insured, and certified to provide junk hauling services in Glendale, AZ. Your property is protected when you choose our services.",
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
        subheading="Fast and reliable junk hauling services in Glendale, AZ"
        description="Professional junk removal and hauling solutions for Glendale residents and businesses."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />
      <ServiceAreaIntroSection
        title="Looking for reliable junk hauling services in Glendale, AZ?"
        paragraphs={areaIntroParagraphs}
        bullets={[]}
        theme={landingPageData.themeData}
      />
      <ServiceFeaturesSection
        title="Our Junk Hauling Services in Glendale, AZ"
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
        title="Why Choose Our Junk Hauling Services in Glendale, AZ?"
        paragraphs={whyChooseUsParagraphs}
        bullets={whyChooseUsBullets}
        theme={landingPageData.themeData}
      />
      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our junk hauling services in Glendale, AZ."
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
