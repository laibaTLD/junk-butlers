
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
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Sun City AZ",
  areaLabel: "Sun City, AZ",
  description:
    "Reclaim your home or office with Sun City’s #1 certified junk and trash clean-out services. From furniture disposal to debris removal, our professional and affordable team offers trusted same-day service. Local, skilled, and ready to help—call your top-rated contractor today!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our professional Junk Butlers team provides courteous, stress-free clean outs with a helpful, neighborly Arizona smile",
    },
    {
      title: "Quick Response",
      description:
        "Get fast, same-day trash removal in Sun City. We arrive on time to clear your clutter.",
    },
    {
      title: "24/7 Support",
      description:
        "Our trusted junk removal experts are available around the clock to handle any emergency clean out.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Sun City AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for your property can be daunting, but if you are searching for a professional local junks and trash clean outs services company in Sun City AZ, look no more than Junk Butlers. As the premier home debris removal or hauling contractor in Sun City AZ, we specialize in reclaiming your space with efficiency and care. Whether you need a skilled or professional all home and offices junk or junks and trash clean outs services contractor, our team is equipped to handle everything from minor clutter to major hauls. We are recognized as an experienced and trusted all kind trash or junk removal or demolition contractor or company, offering specialized solutions like certified appliance junks and trash clean outs services and thorough garage junk removal. As a local and affordable furniture or appliance disposal clean outs contractor, we prioritize eco-friendly disposal and same-day response times to keep your project on track. Our reputation as a trusted and premier home debris removal or hauling contractor is built on transparency, competitive pricing, and a commitment to the Sun City community. From heavy furniture to construction debris, we provide the muscle and the strategy to leave your property spotless. Choose the experts who combine local knowledge with professional standards for a cleaner, stress-free environment today.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Sun City, AZ.",
  questions: [
    {
      question: "  What types of junk removal services do you offer?",
      answer:
        "Junk Butlers is your premier skilled trash cleanouts removal contractor or company in Sun City AZ. We handle everything from residential furniture and appliance disposal to commercial office debris and construction hauling. Whether it is a small garage project or a full-scale demolition cleanup, our certified team provides thorough results.",
    },
    {
      question: "Do you offer same-day clean out services?",
      answer:
        "Yes! As a professional and trusted same day Junks and Trash Clean Outs Services contractor Sun City AZ, we prioritize your schedule. We understand that clutter can be urgent, so we offer rapid response times to clear out your home or business quickly, efficiently, and at an affordable rate.",
    },
    {
      question: "Are you a licensed and insured contractor?",
      answer:
        "Absolutely. We are a certified and trusted all kinds household removal or cleanouts contractor or company. Our team is fully insured, providing peace of mind while we work on your property. We maintain high professional standards to ensure your residential or commercial space is handled with the utmost care.",
    },
    {
      question: "How do you handle furniture and appliance disposal?",
      answer:
        "As a local and affordable furniture or appliance disposal clean outs contractor Sun City AZ, we focus on eco-friendly practices. We don’t just dump items; we sort through your junk to donate usable furniture and recycle appliances, ensuring a responsible disposal process that benefits the Sun City community environment.",
    },
    {
      question: "Which areas do you serve for trash removal?",
      answer:
        "While we are the top Junks and Trash Clean Outs Services contractor in Sun City AZ, we also serve Peoria, Glendale, Surprise, Scottsdale, and Phoenix. Our team is ready to provide skilled & professional home or offices trash or trash cleanout solutions to clients across the entire Valley.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Sun City AZ",
  subHeading: "",
  description:
    "Choose Junk Butlers, the skilled trash cleanouts removal contractor Sun City relies on. As a certified and trusted agency, we offer premier and skilled residential or commercial solutions. From furniture to debris, we remain the #1 choice for fast, affordable, and professional service!",
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
  description: `Junk Butlers offers comprehensive solutions as the most skilled trash cleanouts removal contractor in Sun City AZ. We specialize in residential debris hauling, certified appliance disposal, and commercial office clearing. From garage cleanouts to demolition prep, our local and affordable team delivers fast, reliable results for every project.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor or Company Sun City AZ",
    
description:"When your home becomes overwhelmed by clutter, you need the certified and trusted all kinds household removal or cleanouts contractor or company that Sun City residents rely on. Junk Butlers provides a seamless solution for homeowners looking to reclaim their living space. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor, we understand that household waste ranges from old mattresses to bulky appliances.Our team acts as your skilled trash cleanouts removal contractor or company, ensuring every room—from the attic to the basement—is cleared of unwanted items safely and efficiently. We don’t just haul away bags; we provide a comprehensive service that includes heavy lifting and responsible disposal. Don't let debris diminish your home's comfort. By hiring a skilled or professional all home and offices junk or junks and trash clean outs services contractor, you ensure a spotless result every time.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks or Trash Cleanouts Services Contractor or Company in Sun City AZ",

description:"Maintaining a professional environment is essential for any business, and Junk Butlers is the local and trusted commercial offices and stores junks or trash cleanouts services contractor or company you can count on. We serve as a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor, helping business owners clear out old office furniture, outdated electronics, and retail fixtures.As a skilled trash cleanouts removal contractor or company in Sun City AZ, we work around your schedule to minimize downtime, offering same-day solutions for urgent needs. Whether you are renovating a storefront or relocating an entire office suite, our certified and trusted all kinds household removal or cleanouts contractor or company expertise extends to the complex logistics of commercial waste. We provide the muscle and the transport needed to keep your workspace productive, organized, and free of hazardous clutter."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or all Kind Trash or Junk Removal Demolition Contractor Sun City AZ",
  description: `If you are searching for the ultimate solution to your clutter problems, Junk Butlers is the answer. As a skilled & professional home or offices trash or trash cleanout contractor or company in Sun City AZ, we pride ourselves on delivering elite service for every type of property. Whether you are dealing with a messy renovation or simply clearing out years of accumulated items, our team stands out as a residential & commercial old furniture removal contractor Sun City AZ that prioritizes speed and efficiency. We understand that disposing of bulky items like sofas, desks, and heavy appliances requires specialized care.
As a skilled trash cleanouts removal contractor or company in Sun City AZ, we utilize the right equipment to ensure your property remains undamaged during the hauling process. Our reputation as a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor is built on our ability to handle everything from minor household debris to complex demolition projects. We are a certified and trusted all kinds household removal or cleanouts contractor or company dedicated to providing transparent pricing and exceptional results. When you hire Junk Butlers, you aren't just getting a truck; you are getting a team of experts committed to making your space clean, safe, and organized once again.`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Sun City AZ",
    description:
      "When it comes to maintaining a clean and organized property, you deserve the peace of mind that comes with hiring the certified or trusted local No1 residential or commercial trash or junks and trash clean outs services contractor Sun City AZ. At Junk Butlers, we have established ourselves as the region's most reliable partner for total debris management. As an experienced high-qualified clean outs services contractor Sun City AZ, we understand the unique needs of both local homeowners and business managers. Our team is fully equipped to handle heavy-duty hauling, specialized electronic waste, and large-scale estate clear-outs with unmatched precision.We take pride in being a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor, ensuring that every scrap of waste is disposed of according to environmental standards. Whether you are dealing with leftover construction materials or simply clearing out a cluttered garage, our skilled trash cleanouts removal contractor or company in Sun City AZ provides the labor and logistics to get the job done right. We aren't just a hauling service; we are a certified and trusted all kinds household removal or cleanouts contractor or company dedicated to restoring your space. Experience the difference that a professional, local team can make. Contact Junk Butlers today for the high-quality, efficient service you expect from Sun City's top-rated experts.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor",
    description:
      "Junk Butlers is proud to be the region's leading provider of comprehensive waste management, extending our expert solutions across the entire Valley. As your premier Sun City AZ junk removal specialist, we have built a reputation for excellence, but our reach goes far beyond city limits. We serve as the most reliable trash cleanouts contractor in Peoria AZ and Glendale AZ, ensuring that suburban homes and commercial hubs alike remain clutter-free. Our mobile teams are strategically stationed to provide rapid, same-day service in Surprise AZ, handling everything from estate clear-outs to construction debris. For those requiring high-end, efficient hauling in Scottsdale AZ, our professional crews deliver discrete and thorough cleanup services tailored to luxury properties and retail spaces.Additionally, our high-capacity trucks are constantly active throughout Phoenix AZ, managing large-scale industrial hauls and residential furniture disposal with ease. No matter where you are located within these major hubs, Junk Butlers guarantees a Certified and Trusted experience. We combine local knowledge of Arizona’s disposal regulations with a commitment to eco-friendly recycling practices. From the quiet streets of Sun City to the bustling corridors of Phoenix, we are the only name you need for professional, affordable, and local clean-out services.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Sun City AZ?",
    description:
      "Choosing Junk Butlers means partnering with a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Sun City AZ. We stand out as the premier choice because we combine high-level expertise with a deeply personal, local touch. As a company owned and operated by a retired first responder, our foundation is built on integrity, discipline, and a commitment to public service. We don't just haul away your unwanted items; we provide a comprehensive experience that includes heavy lifting, sorting for donations, and eco-friendly recycling.Our clients choose us because we offer same-day response times and transparent, affordable pricing that eliminates the guesswork. Whether you are managing a complex estate clean-out, a commercial office renovation, or a simple garage decluttering project, our team arrives uniformed, on time, and fully insured. We utilize high-capacity trucks and professional-grade equipment to ensure every job is completed safely and efficiently. At Junk Butlers, we pride ourselves on leaving every site spotless, often sweeping up after the job is done. When you hire us, you are choosing a skilled and professional trusted junks and trash clean outs services or demolition services contractor dedicated to reclaiming your space and simplifying your life.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
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
