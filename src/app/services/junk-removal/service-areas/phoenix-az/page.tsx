
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
  title: 'Certified & Professional #1 Junk Removal Contractor Phoenix AZ | Same Day Service',
  description: 'Clear out the clutter with Junk Butlers. As the #1 certified junk removal contractor in Phoenix, AZ, we provide professional, affordable, and same-day trash removal. From skilled home debris cleanup to commercial demolition, our local experts handle every haul with precision and care.',
  openGraph: {
    title: 'Certified & Professional #1 Junk Removal Contractor Phoenix AZ | Same Day Service',
    description: 'Clear out the clutter with Junk Butlers. As the #1 certified junk removal contractor in Phoenix, AZ, we provide professional, affordable, and same-day trash removal. From skilled home debris cleanup to commercial demolition, our local experts handle every haul with precision and care.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified & Professional #1 Junk Removal Contractor Phoenix AZ',
    description: 'Clear out the clutter with Junk Butlers. As the #1 certified junk removal contractor in Phoenix, AZ, we provide professional, affordable, and same-day trash removal.',
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

export default async function JunkRemovalPhoenixPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Junk Removal Contractor",
    areaLabel: "Phoenix, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Phoenix AZ? - Same Day Junk Removal",
    "Are you overwhelmed by clutter? Junk Butlers is your premier solution for efficient, stress-free cleanup. As a professional local trash removal company in Phoenix, AZ, we understand that junk accumulates quickly, which is why we offer reliable, same-day junk removal to reclaim your space instantly. Whether you are clearing out a residential property or need a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, our team is ready to help. We specialize in everything from garage junk removal to large-scale commercial cleanouts.",
    "As an experienced and trusted all-kind trash or junk removal or demolition contractor or company, we handle the heavy lifting, loading, and eco-friendly disposal so you don't have to. We pride ourselves on being a trusted and premier home debris removal or hauling contractor, ensuring your property is left spotless. Need to get rid of old electronics or heavy kitchen gear? We provide certified appliance junks removal service in Phoenix, AZ, alongside being a local and affordable furniture or appliance disposal contractor. At Junk Butlers, we combine professional equipment with a customer-first attitude. From minor trash pickups to complex demolition projects, we are the Phoenix, AZ experts you can count on for speed, safety, and affordability. Contact us today to experience the gold standard of junk hauling!",
  ];

  const areaBullets: string[] = [
    "Friendly Agents - Our Junk Butlers team provides professional, polite, and trusted residential junk removal services across Phoenix.",
    "Quick Response - Need same-day trash removal? Our skilled contractors offer rapid furniture disposal and debris hauling in Phoenix.",
    "24/7 Support - Local and certified support for office and home junk removal, available anytime for your demolition needs.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Services",
    "Junk Butlers offers premier hauling solutions across Phoenix, AZ. As a certified and trusted all kinds household removal or cleanouts contractor, we specialize in professional junk hauling and skilled junks cleanouts. From local and affordable furniture disposal to commercial office cleanouts, we provide same-day trash removal you can trust.",
    "Hire Now Most Trusted Residential Household Junks Removal Contractor or Company Phoenix AZ",
    "Reclaim your home with the help of Junk Butlers, the certified and trusted all kinds household removal or cleanouts contractor or company in Phoenix, AZ. We understand that household clutter—from old mattresses to attic debris—can become a source of stress. Our team acts as your premier and skilled residential or commercial buildings junks or trash removal contractor, ensuring every room in your house is treated with care.",
    "As a skilled junks cleanouts removal contractor or company in Phoenix, AZ, we handle the heavy lifting of furniture, broken appliances, and general garage waste. We don't just haul trash; we provide a professional experience that prioritizes your schedule and property safety. Whether you are prepping for a move or simply downsizing, our residential experts ensure a spotless finish. Choose the local leaders who combine efficiency with a \"butler-style\" service to make your home feel brand new again.",
    "Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Phoenix AZ",
    "In the fast-paced business world, clutter equals lost productivity. Junk Butlers is the local and trusted commercial offices cleanouts or business junk removal contractor or company in Phoenix, AZ, dedicated to keeping your workspace professional. We serve as a premier and skilled residential or commercial buildings junks or trash removal contractor, specializing in office furniture disposal, E-waste recycling, and total warehouse cleanouts.",
    "Time is money, which is why we operate as a skilled junks cleanouts removal contractor or company in Phoenix, AZ, offering rapid response times to minimize business downtime. From retail renovations to corporate relocations, our certified and trusted all kinds household removal or cleanouts contractor or company expertise extends to high-scale commercial demolition and debris hauling. Trust our team to manage your business waste responsibly, ensuring that your office remains a clean, productive environment for your employees and clients alike.",
  ];

  const serviceFeaturesBullets = [
    "Friendly Agents - Our Junk Butlers team provides professional, polite, and trusted residential junk removal services across Phoenix.",
    "Quick Response - Need same-day trash removal? Our skilled contractors offer rapid furniture disposal and debris hauling in Phoenix.",
    "24/7 Support - Local and certified support for office and home junk removal, available anytime for your demolition needs.",
    "Certified & Professional #1 Contractor",
    "Same-Day Junk Removal Available",
    "Residential & Commercial Services",
    "Eco-Friendly Disposal Methods",
    "Transparent Pricing - No Hidden Fees",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Phoenix AZ",
    "Experience the gold standard with Junk Butlers, your certified and trusted all kinds household removal or cleanouts contractor. We provide professional junk hauling and skilled junks cleanouts across Phoenix. From furniture to debris, our same-day trash removal ensures a spotless space.",
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Phoenix AZ",
    "Searching for the right team to handle your heavy lifting? Junk Butlers is the answer. As a skilled and professional home or offices junks or trash cleanout contractor or company in Phoenix, AZ, we pride ourselves on delivering white-glove service for the toughest jobs. Whether you are facing a massive renovation or just clearing out years of clutter, we provide the expertise needed to restore order to your property. We are more than just a hauling service; we are a residential and commercial old furniture removal contractor Phoenix, AZ, equipped to handle everything from single-item pickups to full-scale building cleanouts.",
    "Our team understands the logistics of Phoenix property management, making us the premier choice for both homeowners and business managers alike. When you need a skilled and professional home or offices junks or trash cleanout contractor, you need a team that values your time and maintains a clean workspace from start to finish. From demolition debris to office cubicle disposal, Junk Butlers handles it all. As a residential and commercial old furniture removal contractor, we ensure that your unwanted items are disposed of ethically and efficiently. Don't settle for less when you can hire the highest-rated experts in the Valley. Let us transform your space today with our reliable, high-capacity junk removal and demolition services.",
    "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Phoenix AZ",
    "Sustainability meets efficiency with Junk Butlers. As the certified or trusted local no1 eco-friendly junks or trash removal contractor Phoenix AZ, we are committed to keeping our community clean and green. We don't just dump your unwanted items in a landfill; we prioritize recycling, donating, and responsible disposal to minimize our environmental footprint. If you are searching for an experienced high-qualified junks hauling services contractor Phoenix AZ, our team offers the perfect blend of technical skill and eco-conscious values. We handle everything from residential cleanouts to massive commercial hauls, ensuring that every piece of debris is managed according to the highest industry standards.",
    "At Junk Butlers, we believe that professional service should never come at the expense of the planet. Our reputation as a certified or trusted local no1 eco-friendly junks or trash removal contractor is built on years of reliable service and transparent pricing. Whether you have piles of yard waste, old electronics, or construction debris, our experienced high-qualified junks hauling services contractor team arrives on time and ready to work. We take pride in being the experts for Phoenix residents who want their junk removed quickly and ethically. Choose the experts who care about your property and your environment—choose the gold standard in eco-friendly hauling.",
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
      question: "What services do Junk Butlers provide in Phoenix?",
      answer: "As a skilled and professional home or offices junks or trash cleanout contractor, we handle everything from appliance removal to full demolition. Junk Butlers specializes in residential debris hauling, commercial office cleanouts, and eco-friendly furniture disposal, ensuring every project in Phoenix, AZ, is completed with professional care and efficiency.",
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer: "Yes! We are a professional and trusted same day trash removal contractor Phoenix AZ. We understand that clutter can be urgent, so our teams are ready to provide rapid response hauling. Whether it is household waste or commercial debris, we arrive quickly to reclaim your space on short notice.",
    },
    {
      question: "Are your junk removal services eco-friendly?",
      answer: "Absolutely. As a certified or trusted local no1 eco-friendly junks or trash removal contractor, we prioritize recycling and donating. We don't just dump items; we sort through your hauls to ensure electronics, metals, and furniture are diverted from landfills, protecting the environment across the Phoenix Valley.",
    },
    {
      question: "Can you handle large commercial demolition projects?",
      answer: "We certainly can. Junk Butlers is an experienced and trusted all kind trash or junk removal or demolition contractor. Our team is equipped with heavy-duty tools to manage office strip-outs, construction site debris, and large-scale commercial cleanouts safely and professionally, adhering to all local Phoenix safety standards.",
    },
    {
      question: "Which areas in the Valley do you serve?",
      answer: "We are a local and trusted residential or commercial junks removal and demolition contractor serving Phoenix, Scottsdale, Glendale, Peoria, Surprise, and Sun City. No matter where you are located in the metro area, our skilled crews provide affordable, high-quality hauling services for both homes and business properties.",
    },
  ];

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Phoenix",
      region: "AZ",
      description: "Certified & Professional #1 Junk Removal Contractor - Professional junk removal and clean out services throughout Phoenix"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium trash removal and hauling services in Scottsdale"
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
        subheading="Clear out the clutter with Junk Butlers"
        description="As the #1 certified junk removal contractor in Phoenix, AZ, we provide professional, affordable, and same-day trash removal. From skilled home debris cleanup to commercial demolition, our local experts handle every haul with precision and care."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Phoenix AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        bullets={areaBullets}
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
          description="Get detailed answers about our junk removal services in Phoenix, AZ."
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
