
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
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Scottsdale, AZ",
  areaLabel: "Scottsdale, AZ",
  subheading: "Scottsdale's Premier Junk Removal Experts",
  description:
    "Reclaim your space with Junk Butlers, your local and trusted residential or commercial junk and trash cleanouts experts. We provide professional and affordable same-day debris, furniture disposal, and demolition services. Certified and skilled, we make Scottsdale clutter-free today!",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Junk Butlers’ polite, professional team provides stress-free debris removal with a smile for every Scottsdale client.",
    },
    {
      title: "Quick Response",
      description:
        "Get same-day junk cleanouts in Scottsdale with our rapid, reliable, and highly efficient local response team.",
    },
    {
      title: "24/7 Support",
      description:
        "Our local and trusted team offers 24/7 assistance for urgent residential or commercial trash removal needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Scottsdale AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for property clearing shouldn’t be a hassle. If you are searching for a professional and trusted garbage or junks and trash clean outs services contractor or company in Scottsdale AZ, look no more than Junk Butlers. As a professional local junks and trash clean outs services company in Scottsdale AZ, we specialize in restoring order to your environment with efficiency and care. Whether you need a skilled or professional all home and offices junk or junks and trash clean outs services contractor in Scottsdale AZ for a full estate clear-out or a garage junk removal contractor Scottsdale AZ to reclaim your parking space, our team is ready to help.We are recognized as a trusted and premier home debris removal or hauling contractor in Scottsdale AZ, providing seamless solutions for post-construction or renovation cleanup. Our experts are also a certified appliance junks and trash clean outs services service Scottsdale AZ, ensuring your old electronics and white goods are handled responsibly. As a local and affordable furniture or appliance disposal clean outs contractor Scottsdale AZ, we pride ourselves on transparent pricing and same day junk removal. Choose an experienced and trusted all kind trash or junk removal or demolition contractor or company in Scottsdale AZ that understands the specific needs of the desert community. From light demolition to heavy hauling, Junk Butlers delivers excellence every time",
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
        "As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Scottsdale AZ, we handle almost everything. From old furniture and broken appliances to construction debris and yard waste, Junk Butlers ensures responsible disposal for both residential and commercial properties throughout the area.",
    },
    {
      question: "Do you offer same-day service in Scottsdale?",
      answer:
        "Yes! We pride ourselves on being a professional and trusted same day junks and trash clean outs services contractor Scottsdale AZ. If you have an urgent need to clear space, call us early, and our team will work to provide fast, efficient hauling the very same day.",
    },
    {
      question: " Are your cleanout services affordable?",
      answer:
        "Absolutely. We are recognized as a local and affordable furniture or appliance disposal clean outs contractor Scottsdale AZ. We provide transparent, upfront pricing based on the volume of junk, ensuring you receive high-quality, professional service that fits your budget without any hidden fees or surprise costs.",
    },
    {
      question: " Is Junk Butlers a certified and insured company",
      answer:
        "Yes, we are a certified and trusted all kinds household removal or cleanouts contractor or company Scottsdale AZ. Our licensing and insurance provide peace of mind, ensuring that your home or office is protected while our experienced team handles the heavy lifting and demolition work safely and professionally.",
    },
    {
      question: "Which areas do you serve outside of Scottsdale, AZ?",
      answer:
        "While we are a premier local junks and trash clean outs services company in Scottsdale AZ, we also serve the surrounding Valley. Our service areas include Phoenix, Glendale, Peoria, Surprise, and Sun City, providing top-rated residential and commercial hauling wherever our customers need us most.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Scottsdale AZ",
  subHeading: "",
  description:
    "Experience top-tier service with Junk Butlers, Scottsdale’s leader for professional and affordable debris removal. Whether you need skilled furniture disposal or same-day commercial cleanouts, our local and certified team delivers fast, reliable results to keep your property spotless.",
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
  description: `At Junk Butlers, we provide professional and affordable solutions for every project. From skilled home debris, junks, and furniture removal to local and trusted residential or commercial demolition, our team delivers. Trust Scottsdale’s certified experts for same-day junks and trash clean outs that restore your property instantly.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor or Company Scottsdale AZ",
    
description:"When clutter takes over your living space, you need the premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Scottsdale AZ residents rely on. Junk Butlers specializes in transforming chaotic homes into pristine environments. As a certified and trusted all kinds household removal or cleanouts contractor or company Scottsdale AZ, we handle everything from old attic debris to heavy backyard waste.Our team understands that your home is your sanctuary, which is why we act as a skilled trash cleanouts removal contractor or company in Scottsdale AZ, ensuring every item is hauled away safely and responsibly. Whether you are prepping for a move, clearing out a garage, or disposing of old appliances, our residential experts provide the heavy lifting so you don’t have to. Experience the peace of mind that comes with hiring Scottsdale’s top-rated professionals for your next household cleanup project.",
 },
{
 heading:"Local & Trusted Commercial offices and Stores Junks or Trash Cleanouts Contractor or Company in Scottsdale AZ",

description:"Business owners know that a clean workspace is essential for productivity and professional appeal. Junk Butlers is your best local & trusted commercial offices and stores junks or trash cleanouts services contractor or company in Scottsdale AZ. We provide streamlined solutions for retail cleanouts, office furniture disposal, and large-scale commercial debris removal. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Scottsdale AZ, we work around your business hours to minimize downtime.Our reputation as a skilled trash cleanouts removal contractor or company in Scottsdale AZ is built on punctuality and thoroughness. Whether you are managing a retail store renovation or a corporate office relocation, our certified and trusted all kinds household removal or cleanouts contractor or company Scottsdale AZ expertise extends to the commercial sector, ensuring your business remains clutter-free and ready for customers."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Trash or Junk Removal Demolition Contractor Scottsdale AZ",
  description: `If you are looking for a skilled and top-rated home and offices furniture or all kind trash or junk removal demolition contractor Scottsdale AZ, Junk Butlers is the premier choice for your next project. We understand that accumulating clutter can be overwhelming, which is why we have established ourselves as the most skilled & professional home or offices trash or trash cleanout contractor or company in Scottsdale AZ. Our team is equipped to handle everything from minor household hauls to complex light demolition tasks with precision and care. As a dedicated residential & commercial old furniture removal contractor Scottsdale AZ, we specialize in the heavy lifting of bulky items, ensuring that old sofas, desks, and filing cabinets are disposed of responsibly.Junk Butlers prides itself on being a local leader, offering a seamless experience for property managers, homeowners, and business owners alike. Whether you are clearing out a retail storefront or deep-cleaning a residential garage, our experts arrive on time and fully prepared. We don't just haul away waste; we provide a comprehensive service that includes sorting, loading, and eco-friendly disposal. Choosing an experienced contractor means you get a clutter-free space without the risk of property damage or personal injury. Trust our Scottsdale-based team to deliver the high-quality, reliable service you deserve for all your junk and debris removal needs`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Scottsdale AZ",
    description:
      "When searching for a certified or trusted local no1 residential or commercial trash or junks and trash clean outs services contractor Scottsdale AZ, excellence and reliability are non-negotiable. Junk Butlers stands at the forefront of the industry, offering unparalleled expertise for both homeowners and business managers. As an experienced high-qualified clean outs services contractor Scottsdale AZ, we understand the unique demands of the local community, from seasonal estate clearing to urgent commercial property hauls. Our team is fully equipped to manage large-scale debris removal, ensuring that every project is completed with meticulous attention to detail and safety. At Junk Butlers, we pride ourselves on being more than just a hauling company; we are your strategic partners in property maintenance.Whether you are dealing with years of accumulated household clutter or require a professional team for a commercial renovation cleanup, our status as a certified or trusted local no1 residential or commercial trash or junks and trash clean outs services contractor Scottsdale AZ ensures you receive top-tier results. Our experienced high-qualified clean outs services contractor Scottsdale AZ team utilizes modern equipment and eco-friendly disposal methods to protect the beauty of our desert city. We prioritize your schedule, offering flexible timing and transparent pricing that eliminates the stress of waste management. Choose the local experts who combine professional certification with a commitment to customer satisfaction for a cleaner, more organized space today.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor",
    description:
      "As the leading major junk and trash clean outs services contractor, Junk Butlers is proud to offer comprehensive hauling and debris removal across the entire Valley. Our dedicated teams provide rapid, professional service in Scottsdale AZ, ensuring that both residential and commercial properties remain pristine. We have expanded our reach to serve as the premier cleanup experts in Phoenix AZ, handling everything from estate clear-outs to construction debris. For those located in the West Valley, we offer reliable and affordable solutions in Glendale AZ and Peoria AZ, specializing in furniture disposal and full-property junk removal.Our commitment to excellence extends to the growing communities of Surprise AZ, where we provide top-rated junk hauling and demolition services tailored to your needs. Additionally, residents in Sun City AZ can rely on our respectful and efficient teams for specialized senior living cleanouts and appliance recycling. No matter where you are located within these major service areas, Junk Butlers guarantees punctual arrivals, transparent pricing, and eco-friendly disposal practices. By choosing a local expert that understands the geography of the Phoenix metropolitan area, you ensure a stress-free experience from the initial quote to the final sweep-up of your site.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Scottsdale AZ?",
    description:
      "Choosing the right partner for property clearing is essential for a stress-free experience, and that is exactly why choose Junk Butlers contractor or company for your junks and trash clean outs services. As the leading skilled and professional trusted junks and trash clean outs services or demolition services contractor in Scottsdale AZ, we combine years of local expertise with a commitment to customer satisfaction. Junk Butlers isn't just a hauling service; we are a full-service solution designed to handle the toughest jobs, from heavy furniture removal to complex interior demolition.What sets us apart is our attention to detail and our customer-first philosophy. We understand that every project in Scottsdale is unique, which is why we provide tailored estimates and rapid response times. When you hire a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Scottsdale AZ, you are investing in safety and efficiency. We utilize professional-grade equipment to ensure your property is cleared without damage, and we follow strict eco-friendly disposal guidelines to keep Arizona beautiful. From transparent, upfront pricing to our polite and uniformed crews, Junk Butlers delivers a level of professionalism that generic hauling companies simply cannot match. Let us handle the heavy lifting while you enjoy your newly reclaimed space.",
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
