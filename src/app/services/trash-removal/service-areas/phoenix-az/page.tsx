import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Trash Removal Services Phoenix AZ | Fast Trash Hauling",
  description:
    "Expert trash removal services in Phoenix, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties throughout the Valley.",
  openGraph: {
    title: "Professional Trash Removal Services Phoenix AZ | Fast Trash Hauling",
    description:
      "Expert trash removal services in Phoenix, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties throughout the Valley.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Trash Removal Services Phoenix AZ | Fast Trash Hauling",
    description:
      "Expert trash removal services in Phoenix, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties.",
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

export default async function TrashRemovalPhoenixPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Trash Removal Contractor Phoenix AZ",
    areaLabel: "Phoenix, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "When you need to clear the clutter, you deserve the professional local trash removal company in Phoenix, AZ, that prioritizes efficiency and reliability. As the trusted and premier home debris removal or hauling contractor in Phoenix, AZ, Junk Butlers specializes in reclaiming your space. Are you currently searching for a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ? Look no more. Our team serves as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, handling everything from minor yard waste to major site cleanups. We offer a certified appliance trash removal service Phoenix, AZ, ensuring your old electronics and hardware are disposed of responsibly.",
    "If you are struggling with a cluttered workspace, we are the local and affordable furniture or appliance disposal contractor Phoenix, AZ, businesses rely on for seamless transitions. Additionally, as a specialized garage junk removal contractor Phoenix, AZ, we transform chaotic storage areas into functional spaces overnight. Choosing Junk Butlers means partnering with a professional and trusted same day trash removal contractor Phoenix, AZ, dedicated to superior service. Whether it is residential debris or commercial waste, our local and certified home and offices trash or trash removal or furniture disposal Phoenix, AZ, team provides the expertise you need. Contact the professional junk hauling contractor today for a cleaner tomorrow.",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash Removal Company Phoenix AZ",
    "Experience the gold standard with Junk Butlers, your professional and trusted same-day trash removal contractor in Phoenix, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, junk-free space with our certified hauling expertise.",
    "Certified or Trusted Local No1 Eco Friendly Trash Removal Contractor Phoenix AZ",
    "In today's environmentally conscious world, choosing a certified or trusted local #1 eco-friendly trash removal contractor in Phoenix, AZ, is about community responsibility. We implement sustainable disposal practices, prioritizing recycling, donations, and compliant disposal.",
  ];

  const whyChooseUsBullets = [
    "Phoenix Experts — Local, trusted, licensed and insured",
    "Fast Response — Same-day and next-day availability",
    "Eco-Friendly — Recycling, donation, and compliant disposal",
    "Transparent Pricing — No hidden fees",
    "Professional Team — Certified, courteous specialists",
    "Comprehensive Services — Residential and commercial solutions",
  ];

  const faqQuestions = [
    {
      question: "What services do Junk Butlers provide in Phoenix?",
      answer:
        "As a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, we handle everything. Our team excels as a trusted and premier home debris removal or hauling contractor in Phoenix, AZ, managing furniture, appliances, and construction waste for residential and commercial clients.",
    },
    {
      question: "Do you offer same-day trash removal services?",
      answer:
        "Yes! We are a professional and trusted same day trash removal contractor Phoenix, AZ, homeowners rely on for urgent needs. Whether you require a skilled trash cleanouts removal contractor or company in Phoenix, AZ, or immediate furniture hauling, Junk Butlers provides fast, reliable, and efficient service every single day.",
    },
    {
      question: "Are you licensed for commercial demolition projects?",
      answer:
        "Absolutely. We are an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ. Our crew acts as a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, ensuring all site cleanups meet strict safety and professional standards.",
    },
    {
      question: "How do you handle old appliance disposal?",
      answer:
        "We provide a certified appliance trash removal service Phoenix, AZ, focused on eco-friendly practices. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, Junk Butlers ensures your old refrigerators, washers, and dryers are recycled or disposed of properly, protecting the local Arizona environment for everyone.",
    },
    {
      question: "Which areas do you serve near Phoenix?",
      answer:
        "Junk Butlers is your local and trusted residential or commercial trash removal and demolition contractor in Phoenix, AZ. Beyond the city, we are the professional junk hauling contractor serving Peoria, Glendale, Scottsdale, and Surprise. We ensure every neighborhood has access to skilled and professional home or offices trash removal.",
    },
  ];

  const serviceAreas = [
    {
      city: "Phoenix",
      region: "AZ",
      description:
        "Professional and trusted same day trash removal anywhere in the Valley",
    },
    {
      city: "Peoria",
      region: "AZ",
      description:
        "Rapid residential cleanouts from lake communities to industrial parks",
    },
    {
      city: "Sun City",
      region: "AZ",
      description:
        "Certified and trusted all kinds household removal contractor support",
    },
    {
      city: "Glendale",
      region: "AZ",
      description:
        "Premier commercial trash removal for retail, office, and entertainment hubs",
    },
    {
      city: "Surprise",
      region: "AZ",
      description:
        "Comprehensive junk removal and demolition hauling for fast-growing suburbs",
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description:
        "Trusted home debris removal for luxury estates and hospitality venues",
    },
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
        serviceName="Trash Removal"
        areaLabel="Phoenix, AZ"
        heading="Certified & Professional #1 Trash Removal Contractor Phoenix AZ"
        subheading="Say goodbye to clutter with Junk Butlers, your local and trusted residential or commercial trash removal and demolition contractor in Phoenix, AZ."
        description="We provide professional and affordable home and offices trash removal services, offering skilled debris removal and same-day furniture disposal."
        bullets={[
          {
            title: "Friendly Agents",
            description:
              "Our local and certified Junk Butlers team provides professional and trusted service for your Phoenix home.",
          },
          {
            title: "Quick Response",
            description:
              "Need a professional and trusted same day trash removal contractor? We arrive fast in Phoenix, AZ.",
          },
          {
            title: "24/7 Support",
            description:
              "Access professional and affordable home and offices trash removal services anytime you need skilled debris removal.",
          },
        ]}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Phoenix AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        theme={landingPageData.themeData}
      />

      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={`Our Services

Junk Butlers is your premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ. From certified appliance trash removal service Phoenix, AZ, to local and affordable furniture disposal, we do it all. Trust our skilled trash cleanouts removal contractor or company in Phoenix, AZ, today.

Hire Now Most Trusted Residential Household Trash Removal Contractor or Company Phoenix AZ

Transform your living space today with Junk Butlers, the certified and trusted all kinds household removal or cleanouts contractor or company Phoenix, AZ. We understand that a cluttered home leads to a cluttered mind, which is why we serve as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, homeowners rely on for fast results. Our team isn't just a hauling service; we are a skilled trash cleanouts removal contractor or company in Phoenix, AZ, equipped to handle everything from heavy old furniture to overflowing attic debris.

Whether you are prepping for a move or simply reclaiming your garage, our professional and trusted same day trash removal contractor Phoenix, AZ, team ensures a seamless experience. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, we guarantee eco-friendly disposal and superior customer care. Don't let junk hold you back—choose Phoenix’s top-rated experts for a spotless home environment.

Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Phoenix AZ

Maintain a professional edge with Junk Butlers, your local and trusted commercial offices cleanouts or business junk removal contractor or company in Phoenix, AZ. Efficient property management requires a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, capable of handling large-scale commercial waste without disrupting your operations. We are recognized as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, providing tailored solutions for retail spaces, corporate offices, and construction sites.

Our reputation as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, stems from our commitment to speed and transparency. From certified appliance trash removal service Phoenix, AZ, to complete office de-branding and furniture hauling, we do it all. Trust the professional junk hauling contractor that Phoenix businesses prefer for maintaining clean, safe, and productive workspaces every single day.`}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}

      <CTASection
        data={{
          heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Phoenix AZ",
          subHeading: "",
          description:
            "As the professional and trusted same day trash removal contractor Phoenix, AZ, Junk Butlers delivers excellence. We are the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, providing affordable furniture or appliance disposal.",
          ctaButton: { label: "Get a Free Quote", href: "#contact" },
        }}
        theme={landingPageData.themeData}
      />

      <ServiceOverlayCardSection
        heading="Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Phoenix AZ"
        description={`If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Phoenix AZ, your search ends with Junk Butlers. We pride ourselves on being the most reliable skilled & professional home or offices trash or trash cleanout contractor or company in Phoenix, AZ, offering a comprehensive suite of services tailored to your specific needs. Whether you are dealing with a cluttered estate, an overflowing warehouse, or a complex demolition project, our team provides the muscle and the strategy to get the job done right. As a dedicated residential & commercial old furniture removal contractor Phoenix AZ, we understand that moving heavy items like sofas, desks, and cabinets requires both care and efficiency.<br/><br/>We don't just haul things away; we act as a trusted and premier home debris removal or hauling contractor in Phoenix, AZ, ensuring every piece of waste is handled responsibly. From certified appliance trash removal service Phoenix, AZ, to full-scale garage junk removal, our experts maintain a clean job site from start to finish. Choosing Junk Butlers means hiring an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ. We are committed to being the local and affordable furniture or appliance disposal contractor Phoenix, AZ, that families and business owners trust for same-day service and unparalleled professionalism.`}
        backgroundImage={{
          src: "/images/image-10.webp",
          alt: "Trash removal and demolition services in Phoenix, AZ",
        }}
        secondImage={{
          src: "/images/image-2.webp",
          alt: "Professional junk removal team in Phoenix, AZ",
        }}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: "Certified or Trusted Local No1 Eco-Friendly Trash or Trash Removal Contractor Phoenix AZ",
          description:
            "As the certified or trusted local no1 eco-friendly trash or trash removal contractor Phoenix AZ, Junk Butlers is dedicated to providing sustainable waste solutions for a cleaner community. We understand that modern property owners prioritize environmental responsibility, which is why we have established ourselves as the experienced high-qualified trash haulings services contractor Phoenix AZ. Our mission is to divert as much waste as possible from landfills by utilizing eco-conscious disposal methods, recycling protocols, and donation partnerships. Whether you are clearing out a residential property or managing a large-scale construction site, our team operates as a skilled and professional home or offices trash or trash cleanout contractor or company in Phoenix, AZ.\n\nWe specialize in more than just hauling; we are a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, that understands the logistics of green disposal. From certified appliance trash removal service Phoenix, AZ, to hazardous debris management, we ensure every item is processed according to the highest industry standards. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, we offer a transparent, reliable, and earth-first approach to junk removal. Trust Junk Butlers to be your professional and trusted same day trash removal contractor Phoenix, AZ, providing the perfect balance of efficiency and ecological care for your next project.",
        }}
        row1Image={{
          src: "/images/image-10.webp",
          alt: "Eco-friendly trash removal services in Phoenix, AZ",
        }}
        row2={{
          heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
          description:
            "As the leading professional and trusted same day trash removal contractor Phoenix, AZ, Junk Butlers is proud to offer comprehensive coverage throughout the entire Valley. We have established ourselves as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, extending our top-tier services to several key locations. If you are looking for a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, or the surrounding suburbs, our team is ready to assist. We provide rapid response times in Peoria, AZ, and Sun City, AZ, ensuring that residents have access to a certified and trusted all kinds household removal or cleanouts contractor or company.\n\nOur reach as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, also covers the bustling areas of Glendale, AZ, and Surprise, AZ. Whether you need a local and affordable furniture or appliance disposal contractor or a skilled trash cleanouts removal contractor or company for a commercial project, we are just a phone call away. Furthermore, we serve as the trusted and premier home debris removal or hauling contractor in Scottsdale, AZ, delivering high-quality results for both luxury estates and local businesses. No matter where you are located, Junk Butlers remains the professional junk hauling contractor committed to keeping your neighborhood clean and clutter-free.",
        }}
        row2Image={{
          src: "/images/image-2.webp",
          alt: "Service areas coverage map for junk removal services",
        }}
        row3={{
          heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Phoenix AZ?",
          description:
            "When it comes to clearing out unwanted clutter, selecting the right partner is essential. Why choose Junk Butlers as your best provider? Because we are the skilled and professional trusted trash removal or demolition services contractor in Phoenix, AZ, dedicated to excellence in every project. Our reputation is built on reliability, transparency, and a deep commitment to our local community. Whether you are dealing with a massive renovation or a simple household cleanup, we bring the expertise required to handle the job safely and efficiently.\n\nAs a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, we offer more than just a truck and a crew; we provide a seamless experience from the moment you call for a quote until the final sweep-up. We pride ourselves on being the professional and trusted same day trash removal contractor Phoenix, AZ, residents rely on when time is of the essence. Our team is fully equipped as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, ensuring that even the toughest demolition debris is hauled away without a trace. Choose Junk Butlers for local and affordable furniture or appliance disposal and discover why we are the top-rated choice for quality and care.",
        }}
        row3Image={{
          src: "/images/image-3.webp",
          alt: "Professional junk removal team working in Phoenix, AZ",
        }}
      />

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our trash removal services in Phoenix, AZ."
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
