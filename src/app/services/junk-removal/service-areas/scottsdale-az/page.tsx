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
  title: 'Certified & Professional #1 Junk Removal Contractor Scottsdale AZ | Same Day Service',
  description: 'Clear your space today with Junk Butlers, your local and trusted residential or commercial junk removal and demolition contractor in Scottsdale, AZ. We provide professional and affordable same-day trash removal and skilled home debris hauling you can rely on.',
  openGraph: {
    title: 'Certified & Professional #1 Junk Removal Contractor Scottsdale AZ | Same Day Service',
    description: 'Clear your space today with Junk Butlers, your local and trusted residential or commercial junk removal and demolition contractor in Scottsdale, AZ. We provide professional and affordable same-day trash removal and skilled home debris hauling you can rely on.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified & Professional #1 Junk Removal Contractor Scottsdale AZ',
    description: 'Clear your space today with Junk Butlers, your local and trusted residential or commercial junk removal and demolition contractor in Scottsdale, AZ.',
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

export default async function JunkRemovalScottsdalePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Junk Removal Contractor",
    areaLabel: "Scottsdale, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Scottsdale AZ? - Same Day Junk Removal",
    "Finding a reliable partner for your cleanup doesn't have to be stressful. Junk Butlers is the premier home debris removal or hauling contractor in Scottsdale, AZ, dedicated to clearing your clutter with precision. As a skilled and professional all home and offices junk or trash removal contractor in Scottsdale, AZ, we understand that whether you are dealing with a cluttered estate or a busy workplace, you need a professional local trash removal company in Scottsdale, AZ that shows up on time. We specialize in versatile solutions, acting as your local and affordable furniture or appliance disposal contractor Scottsdale, AZ residents trust for heavy lifting.",
    "From a certified appliance junks removal service Scottsdale, AZ can depend on to being a specialized garage junk removal contractor Scottsdale, AZ homeowners hire for total transformations, we handle it all. Our team is recognized as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Scottsdale, AZ, ensuring that even complex tear-downs are managed safely. When you search for a trusted and premier home debris removal or hauling contractor in Scottsdale, AZ, look no more than our same-day service. We combine efficiency with affordability, making us the professional local trash removal company in Scottsdale, AZ for any project size. Let us reclaim your space today!",
  ];

  const serviceFeaturesParagraphs = [
    "Our Services",
    "Junk Butlers provides comprehensive hauling solutions tailored to your needs. As the premier and skilled residential or commercial buildings junk or trash removal contractor Scottsdale, AZ trusts, we handle everything from furniture disposal and appliance removal to full demolition cleanouts. Experience fast, professional service from Scottsdale's top-rated cleanup experts.",
    "Hire Now Most Trusted Residential Household Junk Removal Contractor in Scottsdale, AZ",
    "When your home becomes overwhelmed by clutter, you need the Junk Butlers, the certified and trusted all-kinds household removal or cleanouts contractor in Scottsdale, AZ. We specialize in reclaiming your living space, whether you are clearing out a single room or managing a full estate transition. As a premier and skilled residential junk or trash removal contractor, our team handles everything from old mattresses and broken electronics to heavy appliances and general backyard debris.",
    "We take pride in being a skilled junk cleanouts removal company in Scottsdale, AZ, ensuring that every item is sorted, hauled, and disposed of responsibly. Homeowners trust us because we combine efficiency with a friendly, local touch. Don't let unwanted items gather dust; choose the most reliable residential household junk removal contractor in Scottsdale, AZ to restore order to your home today. We make the process seamless, affordable, and completely stress-free.",
    "Local & Trusted Commercial Office Cleanouts or Business Junk Removal Contractor in Scottsdale, AZ",
    "Running a business is demanding, and managing office waste shouldn't add to your workload. Junk Butlers is the local and trusted commercial office cleanouts or business junk removal company in Scottsdale, AZ that keeps your workspace professional and productive. From clearing out old office furniture and cubicles to handling e-waste and large-scale renovations, we are the premier and skilled commercial buildings junk or trash removal contractor your company needs.",
    "As a skilled junk cleanouts removal contractor in Scottsdale, AZ, we work around your schedule to ensure minimal disruption to your daily operations. Our reputation as a certified and trusted all-kinds removal or cleanouts company means we handle sensitive office debris with the utmost care and professionalism. Whether you are downsizing your headquarters or simply refreshing your layout, partner with the leading commercial office cleanouts contractor in Scottsdale, AZ for a clean, professional, and clutter-free business environment.",
  ];

  const serviceFeaturesBullets = [
    "Friendly Agents - Our polite, professional crew treats your home with respect, making every junk removal appointment stress-free.",
    "Quick Response - Need it gone? We offer fast, same-day trash hauling across Scottsdale to reclaim your space instantly.",
    "24/7 Support - Our local team is always available to schedule your residential or commercial demolition and junk cleanouts.",
    "Certified & Professional #1 Contractor",
    "Same-Day Junk Removal Available",
    "Residential & Commercial Services",
    "Eco-Friendly Disposal Methods",
    "Transparent Pricing - No Hidden Fees",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Scottsdale AZ",
    "Experience the best with Junk Butlers, your premier and skilled residential or commercial junk removal contractor. We provide professional and affordable hauling for homes and offices. Reclaim your space today with Scottsdale's most trusted and certified trash removal experts.",
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Scottsdale AZ",
    "If you are overwhelmed by clutter or debris, you need a partner who understands the local landscape. Junk Butlers is proud to be the skilled & professional home or offices junks or trash cleanout contractor or company in Scottsdale, AZ that residents and business owners turn to for reliable results. Whether you are prepping a site for renovation or simply clearing out years of accumulated items, our team acts as your residential & commercial old furniture removal contractor Scottsdale, AZ, handling the heavy lifting so you don't have to. We go beyond simple hauling; we are a full-service skilled & professional home or offices junks or trash cleanout contractor capable of managing complex demolition projects and large-scale office transitions.",
    "Our reputation as a residential & commercial old furniture removal contractor is built on punctuality, fair pricing, and a commitment to keeping Scottsdale clean. When you choose Junk Butlers, you are hiring a skilled and top rated home and offices trash or junk removal demolition contractor that prioritizes your schedule and property safety. From old sofas and office desks to heavy construction debris, we ensure every item is disposed of according to local regulations. Reclaim your square footage today with the most trusted name in Arizona hauling.",
    "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Scottsdale AZ",
    "In today's world, responsible disposal matters just as much as efficiency. Junk Butlers leads the industry as your certified or trusted local no1 eco-friendly junks or trash removal contractor in Scottsdale, AZ. We don't just haul away your unwanted items; we prioritize sustainable practices by sorting through every load to donate, recycle, or repurpose whenever possible. As an experienced high-qualified junks hauling services contractor Scottsdale, AZ, our team is trained to handle everything from household waste to industrial debris with an environmentally conscious approach.",
    "Choosing Junk Butlers means you are partnering with an experienced high-qualified junks hauling services contractor that understands the local Scottsdale environment and regulations. We take pride in being the certified or trusted local no1 eco-friendly junks or trash removal contractor, ensuring that your garage cleanouts, office renovations, or estate clearings leave the smallest carbon footprint possible. Whether you are searching for \"green\" disposal for old appliances or need a certified or trusted local no1 eco-friendly trash removal contractor for a commercial site, we provide the professional, reliable, and \"earth-friendly\" service you deserve. Let us help you clear the clutter while keeping Arizona beautiful. Contact us today for a free estimate and see why we are Scottsdale's top choice for sustainable hauling.",
  ];

  const whyChooseUsBullets = [
    "Certified & Professional #1 Contractor",
    "Same-Day Junk Removal Available",
    "Eco-Friendly Disposal Methods",
    "Transparent Pricing - No Hidden Fees",
    "Professional & Courteous Team",
    "24/7 Support Available",
  ];

  const faqQuestions = [
    {
      question: "What items can Junk Butlers remove from my property?",
      answer: "As a premier and skilled residential or commercial buildings junk or trash removal contractor, we haul almost anything non-hazardous. This includes old furniture, mattresses, appliances, electronics (e-waste), yard debris, and construction materials. If it fits in our truck and isn't a biohazard, our professional team can handle it.",
    },
    {
      question: "Do you offer same-day junk removal in Scottsdale?",
      answer: "Yes! Junk Butlers is a professional and trusted same-day trash removal contractor in Scottsdale, AZ. We understand that clutter can be urgent, so we prioritize fast response times. Simply call or text us a photo of your items, and we will do our best to clear your space today.",
    },
    {
      question: "How does your junk removal pricing work?",
      answer: "Our pricing is transparent and volume-based, meaning you only pay for the space your items occupy in our truck. As a local and affordable furniture or appliance disposal contractor, we provide free, no-obligation quotes on-site to ensure you get a fair price without any hidden fees or surprises.",
    },
    {
      question: "Are you a licensed and insured removal company?",
      answer: "Absolutely. Junk Butlers is a certified and trusted all-kinds household removal or cleanouts contractor. We are fully licensed and carry comprehensive insurance to protect your property and our team during the removal process. You can have total peace of mind while we handle the heavy lifting and demolition work.",
    },
    {
      question: "What do you do with the junk after it is hauled away?",
      answer: "As a certified or trusted local no1 eco-friendly junk removal contractor, we prioritize sustainability. We sort through every load to identify items that can be donated to local Scottsdale charities or sent to recycling centers. We strive to keep as much as possible out of Arizona landfills.",
    },
  ];

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Certified & Professional #1 Junk Removal Contractor - Premium trash removal and hauling services in Scottsdale"
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
      city: "Peoria",
      region: "AZ",
      description: "Complete junk removal and trash hauling services for Peoria residents and businesses"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive junk removal services for Surprise area"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized clean out services for Sun City properties"
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
        subheading="Clear your space today with Junk Butlers"
        description="As your local and trusted residential or commercial junk removal and demolition contractor in Scottsdale, AZ, we provide professional and affordable same-day trash removal and skilled home debris hauling you can rely on."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Scottsdale AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        bullets={[
          "Friendly Agents - Our polite, professional crew treats your home with respect, making every junk removal appointment stress-free.",
          "Quick Response - Need it gone? We offer fast, same-day trash hauling across Scottsdale to reclaim your space instantly.",
          "24/7 Support - Our local team is always available to schedule your residential or commercial demolition and junk cleanouts.",
        ]}
        theme={landingPageData.themeData}
      />

      <ServiceFeaturesSection
        title="Our Services"
        description={serviceFeaturesParagraphs.slice(0, 5).join(" ")}
        features={[
          ...serviceFeaturesBullets,
          ...serviceFeaturesParagraphs.slice(5),
        ]}
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
          description="Get detailed answers about our junk removal services in Scottsdale, AZ."
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
