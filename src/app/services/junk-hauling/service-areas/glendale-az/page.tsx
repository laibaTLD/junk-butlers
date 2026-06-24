
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
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: 'Fast & Reliable Junk Hauling in Glendale AZ | Junks Butlers',
  description: 'Junks Butlers provides top-rated junk hauling services in Glendale, AZ. We offer same-day service for furniture removal, appliance disposal, and complete property cleanouts. Get your free quote now!',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-hauling/service-areas/glendale-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Fast & Reliable Junk Hauling in Glendale AZ | Junks Butlers',
    description: 'Junks Butlers provides top-rated junk hauling services in Glendale, AZ. We offer same-day service for furniture removal, appliance disposal, and complete property cleanouts. Get your free quote now!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast & Reliable Junk Hauling in Glendale AZ | Junks Butlers',
    description: 'Junks Butlers provides top-rated junk hauling services in Glendale, AZ. We offer same-day service for furniture removal, appliance disposal, and complete property cleanouts. Get your free quote now!',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Glendale, AZ",
  areaLabel: "Glendale, AZ",
  description:
    "Trusted by homes and offices, Junk Butlers provides affordable, same-day debris and furniture removal. From residential cleanouts to commercial demolition, our certified team delivers skilled, local service you can depend on. Clear your space today!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our Junk Butlers team provides professional, polite, and respectful service for every Glendale home or office.",
    },
    {
      title: "Quick Response",
      description:
        "Need junk gone now? We offer rapid, same-day hauling and debris removal throughout the Glendale area.",
    },
    {
      title: "24/7 Support",
      description:
        "Our certified experts are available around the clock to handle your urgent trash and hauling needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Glendale AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "Finding a reliable partner for your property cleanup shouldn't be a hassle. As the premier home debris removal or hauling contractor in Glendale, AZ, Junk Butlers is dedicated to reclaiming your space with efficiency and care. Whether you are a homeowner or a business manager, we serve as the most skilled or professional all home and offices junk or junks and trash hauling services contractor in Glendale, AZ, handling everything from minor clutter to major construction debris. Our reputation as a professional local junks and trash hauling services company in Glendale, AZ, is built on transparency and speed. We understand that junk piles up fast, which is why we are the trusted and premier home debris removal or hauling contractor in Glendale, AZ, offering local and affordable furniture or appliance disposal hauling contractor Glendale, AZ services.From heavy refrigerators to old sofas, our certified appliance junks and trash clean outs services service Glendale, AZ, ensures eco-friendly disposal. For those tackling bigger projects, we are an experienced and trusted all kind trash or junk removal or demolition contractor or company in Glendale, AZ. We specialize in deep cleans, acting as your best garage junk removal contractor Glendale, AZ, to clear out years of unwanted items in a single visit. Choose the professional local junks and trash hauling services company in Glendale, AZ, that prioritizes your schedule and budget. Contact Junk Butlers today for same-day solutions!",
  ],
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers offers Glendale’s most comprehensive solutions for any cleanup project. From skilled trash cleanouts removal to specialized debris hauling, we serve as your premier and skilled residential or commercial buildings trash or junks hauling services contractor. Whether it’s furniture, appliances, or full-scale demolition, our certified team handles it all!`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor or Company Glendale AZ",
    
description:"Reclaiming your home from unwanted clutter has never been easier with Junk Butlers. As the certified and trusted all kinds household removal or junks hauling contractor or company Glendale AZ, we specialize in transforming cramped living spaces into clean, breathable environments. Whether you are dealing with years of attic accumulation, a messy basement, or outdated furniture, our team acts as the premier and skilled residential or commercial buildings trash or junks hauling services contractor Glendale AZ.We don’t just move items; we provide a comprehensive solution for homeowners who value speed and reliability. From old appliances to general household debris, our skilled trash cleanouts removal contractor or company in Glendale AZ handles the heavy lifting so you don’t have to. We take pride in being a local favorite, ensuring every piece of junk is disposed of responsibly, keeping our Glendale neighborhoods beautiful and clutter-free.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks Hauling Services Contractor or Company in Glendale AZ",

description:"Business efficiency begins with a clean workspace, and Junk Butlers is the partner you need for professional property maintenance. We are recognized as a skilled trash cleanouts removal contractor or company in Glendale AZ, specifically tailored to the fast-paced needs of retail stores and corporate offices. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Glendale AZ, we understand that commercial removals require discretion and minimal disruption to your operations.Whether you are renovating a storefront, clearing out an old office suite, or need a certified and trusted all kinds household removal or junks hauling contractor or company Glendale AZ for a mixed-use property, we deliver results. Our team is equipped to handle office furniture, electronic waste, and large-scale commercial debris. Trust Glendale’s local experts to keep your business professional, organized, and completely free of unwanted trash."
}
  ]
};

const CTA_DATA = {
  heading:
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Glendale AZ",
  subHeading: "",
  description:
    "Searching for the best? Junk Butlers is your premier and skilled residential or commercial buildings trash or junks hauling services contractor. We deliver skilled trash cleanouts removal with unmatched reliability. Trust Glendale’s top-rated agency for fast, professional, and affordable junk hauling.",
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


const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Glendale AZ",
  description: `When you need clutter gone fast, you need a team that combines muscle with professional expertise. Junk Butlers has established itself as the best solution for those seeking a skilled & professional home or offices trash or trash hauling contractor or company in Glendale, AZ. We understand that whether you are clearing out a residential spare room or managing a massive corporate relocation, the quality of your contractor matters. Our reputation as a residential & commercial old furniture removal contractor Glendale, AZ, is built on our ability to handle heavy, awkward items like sofas, desks, and shelving units without damaging your property.
Beyond simple pickups, we are a full-service skilled and top rated home and offices furniture or all kind junk hauling or demolition contractor Glendale, AZ, capable of tackling tough interior demolition and site clearing. We bridge the gap between simple trash pickup and heavy-duty debris management. By choosing Junk Butlers, you are hiring a skilled & professional home or offices trash or trash hauling contractor or company in Glendale, AZ, that prioritizes eco-friendly disposal and recycling. Don’t let unwanted items or old structures hold your property back. From a single couch to a full-scale office cleanout, our residential & commercial old furniture removal contractor Glendale, AZ, team is ready to deliver a clean slate. Contact us today for the premier hauling experience your Glendale property deserves!
.
`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks Hauling Services Contractor Glendale AZ",
    description:
      "When it comes to property maintenance and waste management, you deserve the peace of mind that comes with hiring the certified or trusted local No1 residential or commercial trash or junks hauling services contractor Glendale AZ. Junk Butlers is proud to lead the industry by providing streamlined, heavy-duty hauling solutions for every type of client. From small residential garbage pickups to large-scale commercial debris removal, we ensure that every project is handled with precision. Our team is recognized as an experienced high-qualified clean outs services contractor Glendale AZ, capable of managing complex site clearances that most standard haulers simply cannot handle.We understand that Glendale residents and business owners need a reliable partner who arrives on time and works efficiently. As the certified or trusted local No1 residential or commercial trash or junks hauling services contractor Glendale AZ, we utilize specialized equipment to ensure safe and rapid removal of all unwanted materials. Junk Butlers doesn't just haul away trash; we provide a full-service experience that includes sorting, loading, and responsible disposal. By choosing an experienced high-qualified clean outs services contractor Glendale AZ, you are investing in a clutter-free future for your property. Whether you are prepping a home for sale or clearing out a retail warehouse, our professional crew is ready to prove why we are Glendale’s top-rated hauling choice. Contact us today to experience the professional difference!",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "As the region’s premier hauling experts, Junk Butlers is proud to provide extensive coverage throughout the entire Valley of the Sun. We are recognized as the top-rated junk and trash hauling services contractor for both residential and commercial clients across Glendale, AZ, and the neighboring community of Peoria, AZ. Our professional teams travel daily to provide rapid, same-day cleanouts in Sun City, AZ, ensuring local residents receive the reliable service they deserve.We also extend our high-quality debris removal and furniture disposal to the growing neighborhoods of Surprise, AZ, and the busy commercial hubs of Scottsdale, AZ. Whether you are managing a large estate in Phoenix, AZ, or a small office renovation, our 'Butlers' are equipped to handle any volume. From the West Valley to the Heart of the City, we bridge the gap between clutter and a clean space with local expertise and certified disposal practices. Trust us to be your primary hauling partner in any city we serve.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for Your Junks and Trash Hauling Services Contractor Glendale AZ?",
    description:
      "Choosing the right partner for debris management is essential for a stress-free experience. Junk Butlers stands out as the premier choice because we combine local expertise with a commitment to excellence. As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Glendale AZ, we provide more than just a truck and labor; we offer a systematic approach to reclaiming your property. Our team is fully certified, ensuring that every load is handled according to strict safety and environmental standards.When you hire Junk Butlers, you are choosing a company that understands the specific needs of the Glendale community. We are recognized as a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Glendale AZ because we handle the most difficult jobs—from heavy furniture removal to complex interior demolition—with surgical precision. We offer transparent pricing, same-day service availability, and a professional crew that treats your home or office with the utmost respect. Why settle for a generic hauling service when you can hire the top-rated local experts? We prioritize recycling and donating usable items, making us the most responsible and efficient hauling partner in the region",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
  },
};

const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Find clear answers about our junk and trash hauling services in Glendale, AZ.",
  questions: [
    {
      question: "What items can Junk Butlers haul away for me?",
      answer:
        "As a skilled and professional trusted junks and trash clean outs services contractor, we handle almost everything. From old furniture and appliances to construction debris and yard waste, Junk Butlers clears it all. We serve both residential and commercial properties in Glendale, ensuring your space is left spotless.",
    },
    {
      question: "Do you offer same-day junk removal in Glendale?",
      answer:
        "Yes! We pride ourselves on being a professional and trusted same day junks and trash removal services contractor. If you need immediate hauling, our team is ready to respond. Contact us early to secure your spot for fast, efficient, and reliable debris removal anywhere in the Glendale area.",
    },
    {
      question: "How does your pricing for junk hauling work?",
      answer:
        "Our rates are based on the volume of items we haul. As a local and affordable furniture or appliance disposal hauling contractor, we provide transparent, upfront quotes. You only pay for the space your items occupy in our truck, ensuring you get the best value for professional service.",
    },
    {
      question: "Are you a certified and insured hauling company?",
      answer:
        "Absolutely. Junk Butlers is a certified or trusted local No1 residential or commercial trash or junks hauling services contractor. Being fully insured and certified means your property is protected during the removal process, whether we are performing a simple cleanout or a more complex light demolition project.",
    },
    {
      question: "Do you provide commercial office cleanouts?",
      answer:
        "Yes, we are a local & trusted commercial offices and stores junks hauling services contractor. We specialize in removing office furniture, electronic waste, and retail debris. Our team works efficiently to minimize downtime, making us the preferred choice for businesses throughout Glendale, AZ, and the surrounding Phoenix valley.",
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

