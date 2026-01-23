
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceAreaServicesSection from "@/sections/ServiceAreaServicesSection";

// Page metadata
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

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junk Removal Contractor Phoenix AZ",
  areaLabel: "Phoenix, AZ",
  description: "Clear out the clutter with Junk Butlers. As the #1 certified junk removal contractor in Phoenix, AZ, we provide professional, affordable, and same-day trash removal. From skilled home debris cleanup to commercial demolition, our local experts handle every haul with precision and care.",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Our local and trusted team provides professional furniture disposal with a neighborly, stress-free customer experience."
    },
    {
      title: "Quick Response",
      description: "Need same-day trash removal? Our skilled contractors arrive fast to clear your Phoenix home or office."
    },
    {
      title: "24/7 Support",
      description: "Reliable residential or commercial junk hauling support is available anytime you need expert Phoenix debris removal."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Phoenix AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for property cleanouts shouldn't be a hassle. If you are searching for a professional and trusted junk or trash removal contractor or company in Phoenix AZ, Junk Butlers is your premier local solution. As an Experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix AZ, we specialize in clearing out clutter with unmatched efficiency and care. Whether you need a skilled or professional all home and offices junk or trash removal contractor in Phoenix AZ for a corporate relocation or a garage junk removal contractor Phoenix AZ to reclaim your parking space, our team is ready to help.",
    "We take pride in being a professional local trash removal company in Phoenix AZ that prioritizes the community's needs, offering certified appliance junks removal service Phoenix AZ to ensure your old electronics and white goods are handled responsibly. From light structures to heavy waste, we are the trusted and premier home debris removal or hauling contractor in Phoenix AZ you can count on for every project. As a local and affordable furniture or appliance disposal contractor Phoenix AZ, we guarantee transparent pricing and same day junk removal to keep your transition seamless. Let Junk Butlers handle the heavy lifting, providing the professional debris hauling and demolition services you deserve to keep your residential or commercial property clean, safe, and completely clutter-free."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in Phoenix, AZ.",
  questions: [
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
      answer: "We are a local and trusted residential or commercial junks removal and demolition contractor serving Phoenix, Scottsdale, Glendale, Peoria, Surprise, and Sun City. No matter where you are located in the metro area, our skilled crews provide affordable, high-quality hauling services for both homes and business properties."
    }
  ]
};

const SERVICE_AREAS = {
  title: "Serving All of Phoenix Metro Area",
  areas: [
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
  ]
};

const CTA_DATA = {
  heading: "Junk Butlers - Your Trusted Premier No1 Junk Removal Company or Agency Phoenix AZ",
  subHeading: "",
  description: "Experience the gold standard with Junk Butlers, your skilled and professional home and office junk removal contractor. From certified furniture disposal to affordable debris hauling, our trusted Phoenix team delivers same-day solutions to keep your property clean and clutter-free.",
  ctaButton: { 
    label: "Get a Free Quote", 
    href: "#contact" 
  },
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Phoenix, AZ",
  },
  overlayText: "Our team understands the logistics of Phoenix property management, making us the premier choice for both homeowners and business managers alike. When you need a skilled and professional home or offices junks or trash cleanout contractor, you need a team that values your time and maintains a clean workspace from start to finish. From demolition debris to office cubicle disposal, Junk Butlers handles it all. As a residential and commercial old furniture removal contractor, we ensure that your unwanted items are disposed of ethically and efficiently. Don't settle for less when you can hire the highest-rated experts in the Valley. Let us transform your space today with our reliable, high-capacity junk removal and demolition services."
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: "Junk Butlers offers premier hauling solutions across Phoenix, AZ. We provide professional, reliable, and eco-friendly junk removal services for both residential and commercial properties.",
  services: [
    {
      heading: "Hire Now Most Trusted Residential Household Junks Removal Contractor or Company Phoenix AZ",
      description: "Reclaim your home with the help of Junk Butlers, the certified and trusted all kinds household removal or cleanouts contractor or company in Phoenix, AZ. We understand that household clutter—from old mattresses to attic debris—can become a source of stress. Our team acts as your premier and skilled residential or commercial buildings junks or trash removal contractor, ensuring every room in your house is treated with care.As a skilled junks cleanouts removal contractor or company in Phoenix, AZ, we handle the heavy lifting of furniture, broken appliances, and general garage waste. We don't just haul trash; we provide a professional experience that prioritizes your schedule and property safety. Whether you are prepping for a move or simply downsizing, our residential experts ensure a spotless finish. Choose the local leaders who combine efficiency with a butler-style service to make your home feel brand new again."
    },
    {
      heading: "Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Phoenix AZ",
      description: "In the fast-paced business world, clutter equals lost productivity. Junk Butlers is the local and trusted commercial offices cleanouts or business junk removal contractor or company in Phoenix, AZ, dedicated to keeping your workspace professional. We serve as a premier and skilled residential or commercial buildings junks or trash removal contractor, specializing in office furniture disposal, E-waste recycling, and total warehouse cleanouts.Time is money, which is why we operate as a skilled junks cleanouts removal contractor or company in Phoenix, AZ, offering rapid response times to minimize business downtime. From retail renovations to corporate relocations, our certified and trusted all kinds household removal or cleanouts contractor or company expertise extends to high-scale commercial demolition and debris hauling. Trust our team to manage your business waste responsibly, ensuring that your office remains a clean, productive environment for your employees and clients alike.`"
    }
    
  ]
};

const OVERLAY_CARD_SECTION = {
  heading: "Looking for a Skilled and Top-Rated Home and Offices Junk Removal Demolition Contractor in Phoenix AZ",
  description: `Are you overwhelmed by clutter? Junk Butlers is your premier solution for efficient, stress-free cleanup. As a professional local trash removal company in Phoenix, AZ, we understand that junk accumulates quickly, which is why we offer reliable, same-day junk removal to reclaim your space instantly. Whether you are clearing out a residential property or need a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, our team is ready to help. We specialize in everything from garage junk removal to large-scale commercial cleanouts.
As an experienced and trusted all-kind trash or junk removal or demolition contractor or company, we handle the heavy lifting, loading, and eco-friendly disposal so you don't have to. We pride ourselves on being a trusted and premier home debris removal or hauling contractor, ensuring your property is left spotless. Need to get rid of old electronics or heavy kitchen gear? We provide certified appliance junks removal service in Phoenix, AZ, alongside being a local and affordable furniture or appliance disposal contractor. At Junk Butlers, we combine professional equipment with a customer-first attitude. From minor trash pickups to complex demolition projects, we are the Phoenix, AZ experts you can count on for speed, safety, and affordability. Contact us today to experience the gold standard of junk hauling!`,
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Phoenix, AZ",
  },
  secondImage: {
    src: "/images/image-2.webp",
    alt: "Professional junk removal team in Phoenix, AZ",
  }
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading: "Certified or Trusted Local No1 Eco Friendly Junk Removal Contractor Phoenix AZ",
    description: "Sustainability meets efficiency with Junk Butlers. As the certified or trusted local no1 eco-friendly junks or trash removal contractor Phoenix AZ, we are committed to keeping our community clean and green. We don't just dump your unwanted items in a landfill; we prioritize recycling, donating, and responsible disposal to minimize our environmental footprint. If you are searching for an experienced high-qualified junks hauling services contractor Phoenix AZ, our team offers the perfect blend of technical skill and eco-conscious values. We handle everything from residential cleanouts to massive commercial hauls, ensuring that every piece of debris is managed according to the highest industry standards. At Junk Butlers, we believe that professional service should never come at the expense of the planet. Our reputation as a certified or trusted local no1 eco-friendly junks or trash removal contractor is built on years of reliable service and transparent pricing. Whether you have piles of yard waste, old electronics, or construction debris, our experienced high-qualified junks hauling services contractor team arrives on time and ready to work. We take pride in being the experts for Phoenix residents who want their junk removed quickly and ethically. Choose the experts who care about your property and your environment—choose the gold standard in eco-friendly hauling.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Professional and Trusted Same Day Trash Removal Contractor Phoenix AZ",
    description: "When time is of the essence, Junk Butlers delivers. As a professional and trusted same day trash removal contractor in Phoenix, AZ, we understand that junk doesn't wait for a convenient time. Whether you're facing an emergency cleanout or simply want to clear space quickly, our team is ready to respond. We are the go-to professionals for last-minute cleanouts, foreclosure cleanups, and urgent construction debris removal. With our same-day service, you won't have to live with the clutter any longer than necessary. Our efficient process and dedicated crew ensure that your space is cleared and cleaned in record time.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Phoenix AZ?",
    description: "Choosing the right partner for your property cleanup is essential for safety, efficiency, and peace of mind. Junk Butlers stands out as the premier choice because we are a skilled and professional trusted trash removal or demolition services contractor in Phoenix, AZ. We don't just move boxes; we provide a comprehensive service experience that prioritizes your specific needs, whether you are dealing with a residential overflow or a complex commercial site. Our reputation as a top-tier trash removal services contractor Phoenix, AZ is built on a foundation of reliability and transparent pricing. When you hire Junk Butlers, you are enlisting a team that understands the local regulations and disposal requirements of the Valley.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working on a cleanup project"
  }
};

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
  const landingPageData = await getLandingPageData();  const servicesImages = landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  return (
    <ServiceAreaLayout
      landingPageData={landingPageData}
      title={`${SERVICE_DATA.title} in ${SERVICE_DATA.areaLabel}`}
      description={
        landingPageData.seoData.description ||
        `${SERVICE_DATA.title} services in ${SERVICE_DATA.areaLabel} for residential and commercial properties.`
      }
    >
      <ServiceAreaHeroSection
        serviceName={SERVICE_DATA.title}
        areaLabel={SERVICE_DATA.areaLabel}
        heading={SERVICE_DATA.title}
        subheading={SERVICE_DATA.subheading}
        description={SERVICE_DATA.description}
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
        bullets={SERVICE_DATA.bullets}
      />

      <ServiceAreaIntroSection
        title={INTRO_SECTION.title}
        paragraphs={INTRO_SECTION.paragraphs}
        theme={landingPageData.themeData}
      />

      <ServiceAreaServicesSection
        title={SERVICES_CONTENT.title}
        description={SERVICES_CONTENT.description}
        services={SERVICES_CONTENT.services}
        
        theme={landingPageData.themeData}
        images={servicesImages}
      />

      <CTASection
        data={CTA_DATA}
        theme={landingPageData.themeData}
      />



      <ServiceOverlayCardSection
        heading={OVERLAY_CARD_SECTION.heading}
        description={OVERLAY_CARD_SECTION.description}
        backgroundImage={OVERLAY_CARD_SECTION.backgroundImage}
        secondImage={OVERLAY_CARD_SECTION.secondImage}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: SERVICE_DETAIL_SECTION.row1.heading,
          description: SERVICE_DETAIL_SECTION.row1.description
        }}
        row1Image={{
          src: SERVICE_DETAIL_SECTION.row1.image,
          alt: SERVICE_DETAIL_SECTION.row1.alt
        }}
        row2={{
          heading: SERVICE_DETAIL_SECTION.row2.heading,
          description: SERVICE_DETAIL_SECTION.row2.description
        }}
        row2Image={{
          src: SERVICE_DETAIL_SECTION.row2.image,
          alt: SERVICE_DETAIL_SECTION.row2.alt
        }}
        row3={SERVICE_DETAIL_SECTION.row3 ? {
          heading: SERVICE_DETAIL_SECTION.row3.heading,
          description: SERVICE_DETAIL_SECTION.row3.description
        } : undefined}
        row3Image={SERVICE_DETAIL_SECTION.row3 ? {
          src: SERVICE_DETAIL_SECTION.row3.image,
          alt: SERVICE_DETAIL_SECTION.row3.alt
        } : undefined}
      />


 <ServiceAreasSection
        serviceAreas={SERVICE_AREAS.areas}
        themeData={landingPageData.themeData}
      />


      <FAQSection
        title={FAQ_SECTION.title}
        description={FAQ_SECTION.description}
        questions={FAQ_SECTION.questions}
        theme={landingPageData.themeData}
      />

    </ServiceAreaLayout>
  );
}
