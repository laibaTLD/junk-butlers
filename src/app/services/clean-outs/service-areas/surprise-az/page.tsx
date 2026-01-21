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
  title: 'Professional Clean Out Services Surprise AZ | Complete Property Cleanouts',
  description: 'Expert clean out services in Surprise, AZ. Professional property cleanouts for homes, businesses, estates, and foreclosures. Thorough and efficient cleanout solutions.',
  openGraph: {
    title: 'Professional Clean Out Services Surprise AZ | Complete Property Cleanouts',
    description: 'Expert clean out services in Surprise, AZ. Professional property cleanouts for homes, businesses, estates, and foreclosures. Thorough and efficient cleanout solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Clean Out Services Surprise AZ | Complete Property Cleanouts',
    description: 'Expert clean out services in Surprise, AZ. Professional property cleanouts for homes, businesses, and estates.',
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

export default async function CleanOutsSurprisePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Professional Clean Out Services",
    areaLabel: "Surprise, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Looking for reliable clean out services in Surprise, AZ?",
    "If you're searching for comprehensive clean out services in Surprise, Arizona, our expert team is here to help. We provide thorough property cleanout solutions for homes, businesses, estates, and commercial properties throughout Surprise. Our experienced crew understands the unique needs of this growing community, from new construction sites to established family homes. We pride ourselves on being Surprise's trusted clean out service for efficient, respectful, and complete solutions.",
    "Our professional clean out team in Surprise is equipped to handle any size cleanout project, from single-room clearances to entire property cleanouts. We arrive on time, work efficiently and respectfully, and ensure your property is left clean and tidy. Whether you're handling an estate settlement, preparing a property for sale, or need a complete business cleanout, we have the expertise and sensitivity to get the job done right.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Clean Out Services in Surprise, AZ",
    "We provide comprehensive clean out services across Surprise, Arizona. From whole house cleanouts to estate clearances, our expert team handles all types of property cleanouts efficiently and respectfully. Trust us for professional, thorough, and affordable cleanout solutions throughout Surprise.",
    "Residential Clean Out Services Surprise, AZ",
    "Our residential clean out services in Surprise are designed to help homeowners with any type of property clearance. Whether you're downsizing, handling an estate, or preparing for a move, we make clean outs stress-free and efficient. Our team serves all Surprise neighborhoods, providing respectful and reliable service.",
    "Commercial Property Clean Outs",
    "We specialize in commercial clean out services for businesses throughout Surprise. From office clearances to retail store cleanouts, our commercial clean out services are designed to minimize disruption while ensuring thorough property clearance.",
  ];

  const serviceFeaturesBullets = [
    "Complete Property Clean Outs",
    "Estate Clean Out Services",
    "Business Property Clearances",
    "Foreclosure Clean Outs",
    "Fully Licensed and Insured",
    "Compassionate and Professional Team",
  ];

  const whyChooseUsParagraphs = [
    "Why Choose Our Clean Out Services in Surprise, AZ?",
    "When it comes to property clean outs in Surprise, Arizona, choosing the right service provider makes all the difference. Our company stands out as Surprise's premier clean out service because we combine local expertise with professional service delivery. We understand the unique needs of this rapidly growing community, from new developments to established neighborhoods.",
    "Our team of clean out experts in Surprise is fully trained, insured, and equipped to handle any type of property cleanout. We have built our reputation on delivering exceptional customer service, transparent pricing, and respectful handling of personal belongings. When you choose us, you're not just getting a clean out service – you're getting a partner who understands Surprise and cares about our community.",
  ];

  const whyChooseUsBullets = [
    "Surprise Experts - Deep understanding of Surprise's growing community and diverse needs",
    "Compassionate Service - Understanding and respectful during sensitive transitions",
    "Thorough Process - Complete property cleanouts from top to bottom",
    "Competitive Pricing - Transparent, upfront pricing with no hidden fees",
    "Professional Team - Fully trained, insured, and courteous clean out specialists",
    "Comprehensive Solutions - Handle all types of property cleanouts with care",
  ];

  const faqQuestions = [
    {
      question: "What areas of Surprise do you service for clean outs?",
      answer: "We service all areas of Surprise, including original town site, Surprise Farms, Asante, and all residential and commercial areas throughout the city.",
    },
    {
      question: "Do you handle estate cleanouts in Surprise?",
      answer: "Yes, we specialize in compassionate estate cleanout services in Surprise, handling everything from sorting and organizing to complete property clearance with sensitivity and respect.",
    },
    {
      question: "How quickly can you provide clean out service in Surprise?",
      answer: "We offer flexible scheduling including same-day and next-day clean out services throughout Surprise, subject to availability. Contact us to discuss your timeline.",
    },
    {
      question: "Do you recycle or donate items during clean outs?",
      answer: "Yes, we prioritize responsible disposal methods. We recycle materials whenever possible and donate usable items to local charities throughout the Surprise area.",
    },
    {
      question: "Are you licensed and insured for clean out services in Surprise?",
      answer: "Yes, we are fully licensed, insured, and certified to provide clean out services in Surprise, AZ. Your property is protected when you choose our services.",
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
        subheading="Thorough and professional clean out services in Surprise, AZ"
        description="Complete property cleanout solutions for Surprise homes, businesses, and estates."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Looking for reliable clean out services in Surprise, AZ?"
        paragraphs={areaIntroParagraphs}
        bullets={[]}
        theme={landingPageData.themeData}
      />

      <ServiceFeaturesSection
        title="Our Clean Out Services in Surprise, AZ"
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
        title="Why Choose Our Clean Out Services in Surprise, AZ?"
        paragraphs={whyChooseUsParagraphs}
        bullets={whyChooseUsBullets}
        theme={landingPageData.themeData}
      />

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our clean out services in Surprise, AZ."
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
