
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
  title: 'Affordable Junk Hauling Services in Phoenix AZ | Same Day Pickup',
  description: 'Need junk hauling in Phoenix, AZ? Junks Butlers offers fast, reliable, and affordable junk removal services. We handle furniture, appliances, and more. Call for a free estimate!',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-hauling/service-areas/phoenix-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Affordable Junk Hauling Services in Phoenix AZ | Same Day Pickup',
    description: 'Need junk hauling in Phoenix, AZ? Junks Butlers offers fast, reliable, and affordable junk removal services. We handle furniture, appliances, and more. Call for a free estimate!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Junk Hauling Services in Phoenix AZ | Same Day Pickup',
    description: 'Need junk hauling in Phoenix, AZ? Junks Butlers offers fast, reliable, and affordable junk removal services. We handle furniture, appliances, and more. Call for a free estimate!',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Phoenix, AZ",
  areaLabel: "Phoenix, AZ",
  description:
    "Looking for professional and affordable junk removal? Junk Butlers is your local and trusted partner for same day residential and commercial hauling. From skilled debris removal to furniture disposal, our certified team delivers the #1 clean-out services in Phoenix, AZ.",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides professional, polite service for every Phoenix home and office cleanup.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone now? We offer professional and trusted same day junk and trash removal services.",
    },
    {
      title: "24/7 Support",
      description:
        "Our certified experts are available around the clock for affordable residential or commercial junk hauling needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Phoenix AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "Stop searching for 'hauling near me' and partner with the best. Junk Butlers is your premier professional and trusted garbage or junks and trash hauling services contractor dedicated to clearing the clutter from your life. As a skilled or professional all home and offices junk or junks and trash hauling services contractor in Phoenix, AZ, we understand that reliability and speed are your top priorities. Whether you need a professional local junks and trash hauling services company in Phoenix, AZ for a quick cleanup or a trusted and premier home debris removal or hauling contractor for a major renovation, we have the equipment to handle it all. Our team is the best garage junk removal contractor Phoenix, AZ, transforming chaotic storage spaces into functional areas overnight. We don't just move bags; we are a certified appliance junks and trash clean outs services provider. If you have bulky items, our local and affordable furniture or appliance disposal hauling contractor experts ensure they are handled responsibly. Furthermore, as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, we manage complex projects including light demolition and construction debris. Trust Junk Butlers for same day junk removal that is efficient, affordable, and local. Let our experts restore your property today with the #1 hauling services in the Valley!",
  ],
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers offers the most professional and trusted solutions across the Valley. From skilled trash cleanouts and furniture disposal to certified appliance removal, our team handles it all. Whether you need residential or commercial hauling, we provide local and affordable services designed to clear your space fast.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor or Company Phoenix AZ",
    
description:"When clutter takes over your home, you need a certified and trusted all kinds household removal or junks hauling contractor or company Phoenix AZ. At Junk Butlers, we understand that your home is your sanctuary. Our team serves as the premier and skilled residential or commercial buildings trash or junks hauling services contractor Phoenix AZ, ensuring that every unwanted item—from old mattresses to piles of basement debris—is removed swiftly and safely. As a skilled trash cleanouts removal contractor or company in Phoenix AZ, we handle the heavy lifting so you don't have to. Whether you are prepping for a move or simply reclaiming your garage, our residential experts provide a seamless experience. We prioritize eco-friendly disposal and recycling, making us the most reliable choice for homeowners. Trust the Junk Butlers name to deliver professional, 'white-glove' service that leaves your living space spotless and stress-free today.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks Hauling Services Contractor or Company in Phoenix AZ",

description:"Business owners know that a clean environment is vital for productivity and customer impressions. If you are looking for a local & trusted commercial offices and stores junks hauling services contractor or company in Phoenix AZ, Junk Butlers is the partner you can count on. We specialize in large-scale removals, acting as a skilled trash cleanouts removal contractor or company in Phoenix AZ that works around your business hours to minimize downtime. Our reputation as a premier and skilled residential or commercial buildings trash or junks hauling services contractor Phoenix AZ comes from our ability to handle office furniture, electronics, and retail fixtures with precision. We are a certified and trusted all kinds household removal or junks hauling contractor or company Phoenix AZ that extends those same high standards to the corporate world. From warehouse clear-outs to storefront debris, our professional crew ensures your commercial property remains professional, organized, and completely junk-free."
}
  ]
};

const CTA_DATA = {
  heading:
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Phoenix AZ",
  subHeading: "",
  description:
    "Experience the Valley's top-rated cleanup with Junk Butlers. As your local and trusted experts, we provide professional and affordable residential and commercial solutions. From same day junk removal to skilled debris hauling, we are the #1 choice for Phoenix.",
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
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Phoenix AZ",
  description: `Finding a reliable partner for your next big cleanup is easy with Junk Butlers. As the premier choice for property owners, we stand out as a skilled & professional home or offices trash or trash hauling contractor or company in Phoenix, AZ. We understand that whether you are clearing out a family estate or managing a large corporate relocation, you need a team that combines efficiency with absolute care. Our expertise extends beyond simple pickups; we are a residential & commercial old furniture removal contractor Phoenix, AZ, equipped to handle heavy desks, bulky sofas, and outdated office workstations. If your project requires more than just hauling, our team functions as a comprehensive demolition contractor, safely breaking down structures and clearing debris to leave your site pristine. At Junk Butlers, we take pride in being a top rated service provider. We bridge the gap between heavy-duty labor and professional customer service. From hauling away daily household waste to managing complex offices furniture disposals, our skilled crew ensures every job is completed on time and within budget. Choose the professional home or offices trash experts who prioritize your satisfaction and the environment. Contact us today to experience why we are the #1 trusted hauling and demolition experts in the entire Phoenix area!`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks Hauling Services Contractor Phoenix AZ",
    description:
      "When it comes to reclaiming your space, you deserve the peace of mind that comes from hiring a certified or trusted local no1 residential or commercial trash or junks hauling services contractor Phoenix AZ. At Junk Butlers, we have built our reputation on reliability, speed, and unmatched professionalism. Whether you are a homeowner tackling a basement cleanup or a business manager overseeing a large-scale renovation, our team is equipped to handle the heavy lifting with precision. As an experienced high-qualified clean outs services contractor Phoenix AZ, we go beyond simple curbside pickups. We specialize in comprehensive property transformations, ensuring that every piece of debris, old furniture, or accumulated trash is disposed of responsibly. Our deep roots in the community make us the local choice you can depend on for same day results and transparent pricing. Choosing Junk Butlers means partnering with a team that understands the unique needs of the Valley. We aren't just haulers; we are an Experienced high-qualified crew dedicated to maintaining the beauty and cleanliness of our neighborhoods. From residential estates to commercial warehouses, we provide the certified and trusted expertise required to get the job done right the first time. Experience the #1 difference today and see why we are the premier trash or junks hauling services contractor in Phoenix, AZ.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "At Junk Butlers, we are proud to offer the most comprehensive coverage for residential and commercial clients across the Valley. As your premier junk and trash hauling services contractor, we have strategically expanded our operations to ensure that professional help is always just a phone call away. Whether you are located in the heart of Phoenix AZ or in the surrounding desert communities, our team delivers the same high standard of 'No. 1' rated service. We provide specialized hauling and clean-out solutions in Scottsdale AZ, catering to both luxury estates and high-end commercial properties with total discretion. To the west, our local and trusted crews are a staple in Glendale AZ and Peoria AZ, helping homeowners reclaim their garages and yards from unwanted debris. We also offer dedicated, affordable removal services in the growing communities of Surprise AZ and the vibrant neighborhoods of Sun City AZ. No matter where you are situated in the metropolitan area, Junk Butlers remains the most reliable certified partner for furniture disposal, appliance removal, and full-scale property cleanouts. Our commitment to being the top Phoenix AZ contractor means providing lightning-fast response times and professional results to every doorstep in our service region.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for Your Junks and Trash Hauling Services Contractor Phoenix AZ?",
    description:
      "Choosing the right partner for your property cleanup is a decision that impacts your time, budget, and peace of mind. Junk Butlers stands out as the premier choice because we are a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Phoenix AZ. We don’t just move items; we provide a comprehensive, stress-free experience tailored to the unique needs of the Valley’s residents and business owners. Our commitment to excellence is reflected in our 'customer-first' approach. As a professional and trusted company, we prioritize transparent pricing, punctual arrivals, and eco-friendly disposal methods. Whether you require a complex demolition services contractor for a structural teardown or a quick residential pickup, Junk Butlers delivers the expertise required for a flawless finish. We are fully licensed and insured, ensuring that every project—from massive office clear-outs to small garage refreshes—is handled with the utmost safety and care. By choosing us, you are partnering with a skilled and professional trusted team that is deeply invested in keeping Phoenix clean and clutter-free. Let us handle the heavy lifting while you enjoy the results of a perfectly organized space.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
  },
};

const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get clear answers about our professional junk and trash removal services in Phoenix, AZ.",
  questions: [
    {
      question: "What types of items can Junk Butlers remove?",
      answer:
        "As a professional and trusted contractor, we handle almost everything. From old furniture removal and appliance disposal to home debris and garage junk, our skilled team clears it all. Whether it is a single item or a full estate clean-out, we ensure responsible disposal in Phoenix, AZ.",
    },
    {
      question: "Do you offer same-day junk removal in Phoenix?",
      answer:
        "Yes! We are a professional and trusted same-day junk and trash removal services contractor. We understand clutter can be urgent, so our local crews respond quickly and provide affordable, efficient hauling for homes and offices across the Valley.",
    },
    {
      question: "Are you a licensed and certified hauling company?",
      answer:
        "Absolutely. Junk Butlers is a certified and trusted household removal company. We follow all local regulations and safety standards, ensuring your property is protected while we manage residential or commercial trash hauling needs.",
    },
    {
      question: "Do you provide commercial hauling for businesses?",
      answer:
        "Yes. We are a local and trusted commercial offices and stores junk hauling services contractor. Our team handles office furniture, retail fixtures, and warehouse debris, offering skilled cleanouts designed to minimize downtime for your business in Phoenix, AZ.",
    },
    {
      question: "How do you determine your hauling prices?",
      answer:
        "Our pricing is professional and affordable, based on the volume of space your items occupy in our trucks. We provide transparent, upfront estimates with no hidden fees, ensuring the best value for furniture disposal or demolition services in Phoenix.",
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
