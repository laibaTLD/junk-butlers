
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
  title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
  description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/clean-outs/service-areas/glendale-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Glendale AZ",
  areaLabel: "Glendale, AZ",
  description:
    "Experience the #1 professional and affordable home and offices junks and trash clean outs services contractor in Glendale, AZ. Our local and certified team provides trusted same-day furniture disposal and debris removal. From residential cleanouts to commercial demolition, we do it all!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our courteous Junk Butlers team provides professional, stress-free cleanouts with a smile for every Glendale customer",
    },
    {
      title: "Quick Response",
      description:
        "Need junk gone fast? We offer rapid, same-day debris removal and furniture disposal across Glendale, AZ",
    },
    {
      title: "24/7 Support",
      description:
        "Our certified experts are available 24/7 to handle your emergency commercial or residential cleanouts",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Glendale AZ? - Same Day Junk Removal",
  paragraphs: [
    "If you are searching for a professional and trusted garbage or junks and trash clean outs services contractor or company in Glendale, AZ, look no more than Junk Butlers. As the trusted and premier home debris removal or hauling contractor in Glendale, AZ, we specialize in reclaiming your space with efficiency and care. Whether you need a skilled or professional all home and offices junk or junks and trash clean outs services contractor in Glendale, AZ, or a local and affordable furniture or appliance disposal clean outs contractor Glendale, AZ trusts, our team is ready to help. We are a professional local junks and trash clean outs services company in Glendale, AZ, providing a certified appliance junks and trash clean outs services Glendale, AZ residents rely on for eco-friendly disposal.Our crews are also recognized as the best garage junk removal contractor Glendale, AZ homeowners hire for deep-cleaning projects. As an experienced and trusted all kind trash or junk removal or demolition contractor or company in Glendale, AZ, we handle everything from minor yard waste to major site preparation. Don’t let clutter overwhelm your property; choose the experts who offer same-day service and unmatched reliability. From heavy furniture to old appliances and construction debris, Junk Butlers delivers the most comprehensive and professional waste management solutions in the Valley. ",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: " What types of items do Junk Butlers remove?",
      answer:
        "As a skilled trash cleanouts removal contractor in Glendale, AZ, we take everything from old furniture and appliances to yard debris and construction waste. Whether it is a single sofa or a full office cleanout, our team handles the heavy lifting, loading, and responsible disposal for you every time.",
    },
    {
      question: "Do you offer same-day junk removal in Glendale",
      answer:
        "Yes! Junk Butlers is your trusted and professional same-day junks and trash clean outs services contractor. We understand that clutter can be urgent, so we prioritize rapid response times for both residential and commercial clients throughout Glendale and the surrounding Valley areas. Contact us early for guaranteed availability!",
    },
    {
      question: "Are you a certified and insured cleanout company?",
      answer:
        "Absolutely. We are a certified and trusted all kinds household removal or cleanouts contractor. Our professional status ensures that your property is protected during the removal process. Hiring an experienced high-qualified clean outs services contractor like us gives you peace of mind that the job is done safely.",
    },
    {
      question: "Can you handle large-scale commercial demolition projects?",
      answer:
        "Yes, we are a skilled and professional trusted Junks and Trash Clean Outs Services or Demolition Services contractor in Glendale, AZ. We manage retail strip-outs, office decommissioning, and shed removals. No matter the scale, our team provides the equipment and expertise to clear your commercial space efficiently and professionally.",
    },
    {
      question: " How do you determine your pricing for cleanouts?",
      answer:
        "As a local and affordable furniture or appliance disposal clean outs contractor, our pricing is based on the volume of junk and the type of materials removed. We provide transparent, upfront estimates without hidden fees. You get premium service from the No1 trash or junks clean outs company at competitive rates.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Glendale AZ",
  subHeading: "",
  description:
    "As Glendale’s top-rated cleanup experts, Junk Butlers delivers unmatched reliability. We are the skilled trash cleanouts removal contractor or company in Glendale, AZ, providing certified and trusted all kinds household removal and commercial hauling. Experience fast, professional service today!",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-4.webp",
    alt: "Junk removal and demolition services in Sun City, AZ",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers is your skilled trash cleanouts removal contractor or company in Glendale, AZ, offering versatile solutions for every need. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Glendale, AZ, we handle furniture, appliances, and debris with professional care.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor or Company Glendale AZ",
    
description:"When your home becomes overwhelmed by clutter, you need the certified and trusted all kinds household removal or cleanouts contractor or company Glendale, AZ depends on. Junk Butlers is your premier partner for reclaiming your living space. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Glendale, AZ, we understand that household waste requires careful handling and efficient disposal.Whether you are clearing out a dusty attic, a packed basement, or need a skilled trash cleanouts removal contractor or company in Glendale, AZ for a full estate renovation, we deliver unmatched results. From old toys and clothes to heavy appliances and general household debris, our team ensures every item is hauled away responsibly. We pride ourselves on being the local experts who treat your home with respect while providing fast, affordable, and comprehensive residential cleaning solutions.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks or Trash Cleanouts Services Contractor or Company in Glendale AZ",

description:"Running a business is demanding, and managing commercial waste shouldn't add to your stress. Junk Butlers serves as the local & trusted commercial offices and stores junks or trash cleanouts services contractor or company in Glendale, AZ, helping businesses maintain professional, clutter-free environments. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Glendale, AZ, we specialize in office furniture removal, retail store strip-outs, and warehouse debris clearing.Our status as a certified and trusted all kinds household removal or cleanouts contractor or company Glendale, AZ extends to the corporate sector, where we handle electronics, shelving, and bulky office equipment with ease. If you need a skilled trash cleanouts removal contractor or company in Glendale, AZ that respects your business hours and operational flow, we are the team to call. Trust us to provide a clean slate for your office or storefront with our reliable, professional, and high-capacity hauling services."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Trash or Junk Removal Demolition Contractor Glendale AZ",
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Glendale AZ",
    description:
      "When you need a certified or trusted local No1 residential or commercial trash or junks and trash clean outs services contractor Glendale, AZ, the search ends with Junk Butlers. Our reputation is built on providing a seamless, stress-free experience for property owners who demand excellence. As an experienced high-qualified clean outs services contractor Glendale, AZ, we understand that every project—whether it is a small residential garage or a massive corporate warehouse—requires a tailored approach to waste management and disposal. Junk Butlers specializes in more than just simple hauling; we provide comprehensive site clearing that restores the value and functionality of your property.Our team is fully licensed and trained to handle heavy lifting, hazardous debris, and complex logistics, making us the premier choice for those seeking a skilled & professional home or offices trash or trash cleanout contractor or company in Glendale, AZ. We take pride in our efficiency-first mindset, ensuring that your space is cleared on schedule and left in pristine condition. From removing old appliances to managing post-construction cleanup, our commitment to quality is unmatched. Choose the local experts who combine industry certification with a deep-rooted dedication to the Glendale community. Let us handle the heavy lifting while you enjoy a clutter-free environment.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor in Glendale AZ",
    description:
      "As the premier Junk Butlers team, we are proud to be the leading all major junk and trash clean outs services contractor serving a wide range of communities across the region. Our mission is to provide professional, efficient, and affordable hauling solutions to both residential and commercial clients throughout Glendale, AZ, and the surrounding cities. Whether you are dealing with household clutter in Peoria, AZ, or need a complete office cleanout in Sun City, AZ, our crew is ready to respond with same-day service. We have built a reputation for excellence by extending our top-rated debris removal and furniture disposal services to the bustling neighborhoods of Phoenix, AZ, ensuring that the state's capital remains clean and clutter-free.Our service reach doesn't stop there; we also cater to the growing communities in Surprise, AZ, providing skilled demolition and junk removal for homeowners and local businesses alike. For those in Scottsdale, AZ, looking for high-quality, professional cleanout services that prioritize eco-friendly disposal, Junk Butlers is the name to trust. No matter where you are located in the Valley, our mobile units are equipped to handle any job, large or small. From the Northwest Valley to the heart of the city, we are the local experts committed to restoring your space and providing the most reliable waste management services in Arizona.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Glendale AZ?",
    description:
      "Choosing the right partner for property clearing is essential for safety and efficiency. Why Choose Junk Butlers as your best junks and trash clean outs services contractor Glendale AZ? The answer lies in our commitment to excellence and local reliability. As a skilled and professional trusted Junks and Trash Clean Outs Services or Demolition Services contractor in Glendale, AZ, we offer a level of expertise that goes far beyond simple hauling. We understand that every project, from residential attic clearing to complex commercial demolition, requires a strategic approach. Junk Butlers stands out because we combine heavy-duty equipment with a meticulous, customer-first mindset.Unlike generic services, we are a fully certified and trusted all kinds household removal or cleanouts contractor that prioritizes eco-friendly disposal and recycling. Our team is trained to navigate tight spaces, handle bulky furniture, and manage hazardous debris without damaging your property. We provide transparent pricing, same-day availability, and the peace of mind that comes with hiring an experienced high-qualified clean outs services contractor in Glendale, AZ. When you choose us, you aren't just hiring a truck; you are partnering with the Valley’s #1 experts dedicated to restoring your space and simplifying your life.",
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
