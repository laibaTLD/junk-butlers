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
  title: 'Professional Junk Hauling Services Sun City AZ | Senior Junk Removal',
  description: 'Expert junk hauling services in Sun City, AZ. Specializing in senior-friendly junk removal, waste hauling, and compassionate junk removal for Sun City residents.',
  openGraph: {
    title: 'Professional Junk Hauling Services Sun City AZ | Senior Junk Removal',
    description: 'Expert junk hauling services in Sun City, AZ. Specializing in senior-friendly junk removal, waste hauling, and compassionate junk removal for Sun City residents.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Hauling Services Sun City AZ | Senior Junk Removal',
    description: 'Expert junk hauling services in Sun City, AZ. Specializing in senior-friendly junk removal and compassionate junk removal.',
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

export default async function JunkHaulingSunCityPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Professional Junk Hauling Services",
    areaLabel: "Sun City, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Looking for senior-friendly junk hauling services in Sun City, AZ?",
    "If you're searching for specialized junk hauling services in Sun City, Arizona, our expert team is here to help with services tailored to our senior community. We provide comprehensive junk removal solutions with extra care and understanding for Sun City residents. Our experienced crew understands the unique needs of Sun City's active adult community, from regular household junk removal to specialized senior assistance. We pride ourselves on being Sun City's trusted junk hauling service with compassionate, efficient, and respectful solutions.",
    "Our professional junk hauling team in Sun City is equipped to handle any size junk removal project with special attention to the needs of senior residents. We arrive on time, work patiently and efficiently, and ensure your property is left clean and tidy. Whether you need furniture removal, appliance disposal, or assistance with property clearing, we have the expertise and sensitivity to get the job done right.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Specialized Junk Hauling Services in Sun City, AZ",
    "We provide comprehensive junk hauling services across Sun City, Arizona, with special attention to the needs of our senior community. From regular household junk removal to bulk waste hauling, our expert team handles all types of junk efficiently and respectfully. Trust us for professional, compassionate, and affordable junk hauling solutions throughout Sun City.",
    "Senior-Friendly Junk Hauling Sun City, AZ",
    "Our senior-friendly junk hauling services in Sun City are designed with extra care and understanding. Whether you need regular junk removal, bulk item disposal, or assistance with property clearing, we make junk removal simple and stress-free. Our team serves all Sun City neighborhoods, providing patient and reliable service.",
    "Waste Hauling Services",
    "We specialize in waste hauling services for Sun City residents who may need additional assistance. From helping organize regular junk removal to providing special containers for easier disposal, our waste hauling services are designed to make life easier for our senior community.",
  ];

  const serviceFeaturesBullets = [
    "Senior-Friendly Service",
    "Compassionate Junk Removal",
    "Waste Hauling Assistance",
    "Fully Licensed and Insured",
    "Patient and Courteous Team",
    "Free On-Site Estimates",
  ];

  const whyChooseUsParagraphs = [
    "Why Choose Our Junk Hauling Services in Sun City, AZ?",
    "When it comes to junk hauling in Sun City, Arizona, choosing a service provider who understands our community's unique needs is essential. Our company stands out as Sun City's premier junk hauling service because we combine professional expertise with compassionate service delivery. We understand the specific challenges and sensitivities that come with junk removal in an active adult community.",
    "Our team of junk hauling experts in Sun City is specially trained to work with senior residents and their families. We have built our reputation on delivering exceptional customer service, transparent pricing, and respectful handling of personal property. When you choose us, you're not just getting a junk hauling service – you're getting a partner who understands and cares about the Sun City community.",
  ];

  const whyChooseUsBullets = [
    "Sun City Specialists - Deep understanding of Sun City's active adult community needs",
    "Compassionate Service - Patient, respectful, and understanding team members",
    "Waste Hauling Experts - Specialized services for seniors handling waste matters",
    "Competitive Pricing - Transparent, upfront pricing with senior discounts available",
    "Professional Team - Fully trained, insured, and courteous junk hauling specialists",
    "Comprehensive Services - Handle all types of junk with special attention to senior needs",
  ];

  const faqQuestions = [
    {
      question: "Do you offer special services for seniors in Sun City?",
      answer: "Yes, we specialize in senior-friendly junk hauling services in Sun City, including waste hauling assistance and compassionate handling of regular junk removal.",
    },
    {
      question: "Can you help with waste hauling in Sun City?",
      answer: "Absolutely. We provide waste hauling services for Sun City seniors, helping organize regular junk removal and providing special containers for easier disposal.",
    },
    {
      question: "Do you offer senior discounts for junk hauling in Sun City?",
      answer: "Yes, we offer special pricing for Sun City seniors. Contact us for details about our senior discount programs.",
    },
    {
      question: "How quickly can you provide junk hauling service in Sun City?",
      answer: "We offer flexible scheduling including same-day and next-day junk hauling services throughout Sun City, with priority service for our senior clients.",
    },
    {
      question: "Are you licensed and insured for junk hauling in Sun City?",
      answer: "Yes, we are fully licensed, insured, and certified to provide junk hauling services in Sun City, AZ. Your property is protected when you choose our services.",
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
        subheading="Compassionate and professional junk hauling services in Sun City, AZ"
        description="Specialized junk removal and waste hauling solutions for Sun City's senior community."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />
      <ServiceAreaIntroSection
        title="Looking for senior-friendly junk hauling services in Sun City, AZ?"
        paragraphs={areaIntroParagraphs}
        bullets={[]}
        theme={landingPageData.themeData}
      />
      <ServiceFeaturesSection
        title="Our Specialized Junk Hauling Services in Sun City, AZ"
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
        title="Why Choose Our Junk Hauling Services in Sun City, AZ?"
        paragraphs={whyChooseUsParagraphs}
        bullets={whyChooseUsBullets}
        theme={landingPageData.themeData}
      />
      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our junk hauling services in Sun City, AZ."
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
