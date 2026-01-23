
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServiceAreaServicesSection from "@/sections/ServiceAreaServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

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
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Surprise, AZ",
  areaLabel: "Glendale, AZ",
  description:
    "Junk Butlers is your local and trusted residential and commercial trash clean outs and demolition contractor. We provide professional and affordable same-day furniture disposal and debris removal. For certified home or office service in Surprise, AZ, call us today!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable Junk Butlers team provides polite, stress-free service for all your Surprise, AZ cleanouts.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone now? We offer professional same-day junk removal and rapid debris hauling services.",
    },
    {
      title: "24/7 Support",
      description:
        "As your local and trusted contractor, we provide 24/7 assistance for urgent trash removal needs",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Surprise AZ? - Same Day Junk Removal",
  paragraphs: [
    "services contractor in Surprise, AZ, look no further than Junk Butlers. As the premier home debris removal or hauling contractor in the region, we specialize in reclaiming your space with efficiency and care. Whether you need a skilled or professional all home and offices junk clean outs service or a local and affordable furniture or appliance disposal expert, our team is ready to assist. We pride ourselves on being a professional local junks and trash clean outs services company that understands the specific needs of our community.From certified appliance junks and trash clean outs to heavy-duty garage junk removal, we handle the heavy lifting so you don't have to. As an experienced and trusted all kind trash or junk removal or demolition contractor, Junk Butlers delivers high-quality results for both residential and commercial properties. We offer same-day junk removal to ensure your property is cleared quickly and safely. Our commitment as a trusted and premier service provider means you receive top-tier workmanship at a price you can afford. Don't let clutter overwhelm your home or workplace; choose the most reliable junks and trash clean outs services contractor in Surprise, AZ. Contact us today for a cleaner, clutter-free tomorrow.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: " What items can Junk Butlers remove from my property?",
      answer:
        "As a skilled and professional home or offices trash cleanout contractor in Surprise, AZ, we haul almost anything. This includes old furniture, appliances, electronics, yard waste, and construction debris. From certified appliance disposal to full garage junk removal, our team handles the heavy lifting safely and responsibly.",
    },
    {
      question: "Do you offer same-day junk removal in Surprise, AZ?",
      answer:
        "Yes! We understand that clutter can be urgent. Junk Butlers offers professional and trusted same-day junks and trash clean outs services. As your local Surprise, AZ contractor, we strive to arrive quickly to clear your space, providing efficient hauling when you need it most.",
    },
    {
      question: "Are your cleanout and demolition services affordable?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable furniture and appliance disposal contractor. We provide transparent, upfront pricing with no hidden fees. Whether you need a small residential pickup or a large commercial demolition project, we offer competitive rates for all Surprise, AZ residents.",
    },
    {
      question: "Is Junk Butlers a licensed and insured contractor?",
      answer:
        "Yes, we are a certified and trusted company. Choosing an experienced high-qualified clean outs services contractor in Surprise, AZ, ensures your property is protected. Our professional team is fully insured, giving you peace of mind while we perform demolition or heavy junk removal at your home or office.",
    },
    {
      question: "Which areas do you serve outside of Surprise, AZ?",
      answer:
        "Beyond being a premier Surprise, AZ contractor, we serve Peoria, Sun City, Glendale, Scottsdale, and Phoenix. As a local and trusted residential or commercial junks and trash clean outs services provider, we bring our top-rated hauling and debris removal expertise to clients throughout the entire region.",
    },
  ],
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
  heading:
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Surprise AZ",
  subHeading: "",
  description:
    "Experience the best with Junk Butlers, your premier and skilled choice for local removals. We provide professional and affordable junk hauling for homes and offices. As a certified and trusted agency, we ensure fast, same-day cleanouts across Surprise, AZ.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "#contact",
  },
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Sun City, AZ",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers offers comprehensive solutions as a skilled trash cleanouts removal company in Surprise, AZ. From certified appliance junks and trash clean outs to local and affordable furniture disposal, we handle it all. Trust our premier and skilled team for residential debris hauling and commercial demolition services tailored to you.
`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor Surprise AZ",
    
description:"When clutter takes over your home, you need the Junk Butlers, the most certified and trusted all kinds household removal or cleanouts contractor in the region. We understand that residential spaces can quickly become overwhelmed by unwanted items, which is why our skilled trash cleanouts removal company in Surprise AZ is dedicated to restoring your living space. From old furniture and broken appliances to basement debris and attic overflows, we handle every aspect of the job with precision.As a premier and skilled residential trash or junks and trash clean outs services contractor, we prioritize eco-friendly disposal and efficient hauling. Our team is trained to navigate tight hallways and staircases safely, ensuring your property remains undamaged during the process. Whether you are prepping for a move or simply reclaiming your garage, our Surprise AZ residential experts provide the reliable, same-day service you deserve to live clutter-free.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks or Trash Cleanouts Services Contractor in Surprise AZ",

description:"Maintaining a clean, professional environment is essential for business success. Junk Butlers stands out as the local & trusted commercial offices and stores junks or trash cleanouts services contractor dedicated to the Surprise AZ business community. We specialize in large-scale removals, including office furniture, electronic waste, and retail store fixtures. As a premier and skilled commercial buildings trash or junks and trash clean outs services contractor, we offer flexible scheduling to ensure your daily operations face zero disruptions.Our reputation as a skilled trash cleanouts removal company in Surprise AZ is built on our ability to manage complex commercial projects and light demolition. Whether you are renovating a storefront or clearing out a corporate office suite, our certified and trusted team provides the heavy-duty hauling required for industrial-grade debris. Trust the professionals to keep your workspace organized, safe, and professional with our comprehensive commercial cleanout solutions tailored specifically for local businesses"
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Trash or Junk Removal Demolition Contractor Surprise AZ",
  description: `If you are searching for a skilled and top-rated home and offices furniture or all kind trash or junk removal demolition contractor in Surprise AZ, your search ends with Junk Butlers. We have established ourselves as the experts for property owners who demand efficiency and reliability. As a skilled and professional home or offices trash or trash cleanout contractor or company in Surprise AZ, we understand that every project—whether a small apartment declutter or a full-scale office renovation—requires a meticulous approach to ensure all debris is cleared safely and responsibly. Specializing as a residential and commercial old furniture removal contractor in Surprise AZ, Junk Butlers handles the heavy lifting of bulky items like sofas, desks, and cabinets that regular trash services won't touch.
Our expertise goes beyond simple hauling; we are also a premier demolition contractor capable of breaking down structures and clearing away the resulting mess. By choosing a local and trusted team, you benefit from our deep knowledge of Surprise’s disposal regulations and our commitment to eco-friendly practices. We pride ourselves on being the skilled and professional solution for those who need their space reclaimed immediately. Don't let unwanted junk stall your progress—trust the #1 experts to provide a clean slate for your home or business today.`,
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Sun City, AZ",
  },
  secondImage: {
    src: "/images/image-2.webp",
    alt: "Professional junk removal team in Sun City, AZ",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Surprise AZ",
    description:
      "When you need a certified or trusted local No1 residential or commercial trash or junks and trash clean outs services contractor in Surprise, AZ, the community turns to Junk Butlers. Our reputation is built on providing a seamless, stress-free experience for homeowners and business managers alike. As an experienced high-qualified clean outs services contractor in Surprise, AZ, we possess the specialized equipment and manpower to tackle any project, regardless of size or complexity. Whether you are dealing with a buildup of household waste, renovation debris, or outdated office equipment, our team ensures every item is hauled away responsibly and efficiently.As the premier Junk Butlers, we understand that your time is valuable. That is why we emphasize prompt, reliable service that keeps your property clean and safe. Our status as an experienced high-qualified team means we don't just move junk; we provide comprehensive solutions that include sorting, heavy lifting, and proper disposal. From the moment you contact us, you’ll see why we are considered the No1 residential or commercial trash or junks and trash clean outs services contractor in the area. We are fully committed to maintaining the beauty of our local neighborhoods by offering professional-grade services at competitive prices. Choose a certified and trusted partner for your next project and enjoy the peace of mind that comes with a perfectly cleared space.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor",
    description:
      "As the leading major junk and trash clean outs services contractor, Junk Butlers is proud to provide comprehensive hauling and demolition solutions across the entire valley. While we are widely recognized as the top-rated provider in Surprise, AZ, our highly mobile teams extend their professional expertise to several neighboring communities to ensure no property is left cluttered. We offer prompt, reliable services in Peoria, AZ, and Sun City, AZ, helping residents and business owners reclaim their spaces with ease. Our commitment to excellence also reaches into Glendale, AZ, where we handle everything from residential furniture disposal to large-scale commercial cleanouts.For those located further east, we provide premier debris removal in Scottsdale, AZ, and the greater Phoenix, AZ metropolitan area. No matter where you are located within these regions, our experienced high-qualified clean outs services contractor team arrives fully equipped to manage your toughest junk removal challenges. By serving Surprise, AZ, Phoenix, AZ, and the surrounding cities, we ensure that top-tier, affordable trash removal is always just a phone call away. Whether it’s a garage in Peoria, AZ, or an office suite in Scottsdale, AZ, trust the professionals to deliver a clean, junk-free environment every time",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Surprise AZ?",
    description:
      "Choosing the right partner for your property can be the difference between a stressful ordeal and a seamless transformation. Why choose Junk Butlers? Because we are the skilled and professional trusted junks and trash clean outs services or demolition services contractor in Surprise, AZ, committed to excellence in every haul. Our reputation is built on transparency, reliability, and a deep understanding of our customers' needs. We don't just remove waste; we provide a comprehensive service that includes heavy lifting, responsible disposal, and detailed site cleanups, ensuring your home or business looks its absolute best.As a skilled and professional trusted provider, we prioritize safety and efficiency above all else. Whether you are dealing with a cluttered garage, an estate cleanout, or complex demolition services, our team has the expertise to handle the job correctly the first time. Junk Butlers stands out from the competition by offering competitive pricing without compromising on the quality of our work. We are a local and certified company that takes pride in serving our community with integrity. When you hire us, you are choosing a junks and trash clean outs services contractor in Surprise, AZ, that treats your property with the respect it deserves.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Glendale, AZ",
  },
};


async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    throw new Error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    throw new Error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
  }

  return landingPageData;
}

export default async function JunkRemovalPhoenixPage() {
  const landingPageData = await getLandingPageData();
  const servicesContent = landingPageData.content?.services;
  const servicesImages = landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

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
                services={SERVICES_CONTENT.service}
                
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
