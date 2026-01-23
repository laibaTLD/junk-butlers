
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
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Peoria AZ",
  areaLabel: "Peoria, AZ",
  description:
    "Reclaim your space with the #1 professional junk and trash clean outs services contractor in Peoria, AZ. From furniture disposal to demolition, our skilled team provides affordable, same-day residential and commercial debris removal. Local, trusted, and ready to help!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our polite Junk Butlers team provides personalized, stress-free service to make your Peoria junk removal easy.",
    },
    {
      title: "Quick Response",
      description:
        "Need junk gone now? We offer rapid, same-day clean outs to restore your Arizona property fast.",
    },
    {
      title: "24/7 Support",
      description:
        "Our certified experts are available around the clock to handle all your urgent trash disposal needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Peoria AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for your property can be challenging, but if you are searching for a professional and trusted garbage or junks and trash clean outs services contractor or company in Peoria AZ, Junk Butlers is your premier choice. As a skilled or professional all home and offices junk or junks and trash clean outs services contractor in Peoria AZ, we specialize in transforming cluttered spaces into functional environments. Whether you need a professional local junks and trash clean outs services company in Peoria AZ for a minor cleanup or a trusted and premier home debris removal or hauling contractor in Peoria AZ for a major renovation, our team delivers excellence.We provide certified appliance junks and trash clean outs services service Peoria AZ, ensuring eco-friendly disposal. As a local and affordable furniture or appliance disposal clean outs contractor Peoria AZ, we pride ourselves on transparency and efficiency. Our reputation as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Peoria AZ stems from our commitment to same-day results and safety. From specialized tasks as a garage junk removal contractor Peoria AZ to full-scale site clearing, we handle the heavy lifting so you don't have to. Choose the experts who prioritize your satisfaction and property value.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Sun City, AZ.",
  questions: [
    {
      question: "  What types of junk do you remove in Peoria, AZ?",
      answer:
        "As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Peoria AZ, Junk Butlers handles everything. We remove old furniture, broken appliances, yard debris, and construction waste. Whether it is a residential garage or a commercial warehouse, our team clears it all out.",
    },
    {
      question: "Do you offer same-day clean out services?",
      answer:
        "Yes! We pride ourselves on being a professional and trusted same day junks and trash clean outs services contractor Peoria AZ. We understand that clutter can be urgent, so we prioritize fast response times to ensure your home or office is cleared efficiently and professionally on the very same day.",
    },
    {
      question: "Are your junk removal services affordable?",
      answer:
        "Absolutely. We are recognized as a local and affordable furniture or appliance disposal clean outs contractor Peoria AZ. We provide transparent, upfront pricing based on the volume of junk we haul. You get premier, high-quality service without the big brand price tag, ensuring great value for our local neighbors.",
    },
    {
      question: "Can you handle large commercial demolition projects?",
      answer:
        "Yes, Junk Butlers is more than just a hauling company. We are an experienced and trusted all kind trash or junk removal or demolition contractor or company in Peoria AZ. From stripping out retail interiors to removing old sheds, we have the tools and expertise to manage complex demolition safely.",
    },
    {
      question: "  Is Junk Butlers a licensed and insured company?",
      answer:
        "Security is our priority. We are a certified and trusted all kinds household removal or cleanouts contractor or company Peoria AZ. Being fully insured and professional ensures that your property is protected throughout the removal process. You can trust our skilled team to handle every heavy lifting task with extreme care.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Peoria AZ",
  subHeading: "",
  description:
    "Experience top-tier service with Peoria’s leading experts. From residential furniture to commercial debris, Junk Butlers provides fast, affordable, and certified solutions. Reclaim your space today with the most reliable, same-day junk removal agency dedicated to keeping your property spotless.",
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
  description: `Junk Butlers offers the most comprehensive junk removal in Arizona. As your skilled trash cleanouts removal contractor or company in Peoria AZ, we specialize in premier and skilled residential or commercial buildings trash or junks and trash clean outs services. From furniture disposal to full demolition, we provide certified solutions.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor or Company Peoria AZ",
    
description:"When your home becomes overwhelmed by clutter, you need the premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Peoria AZ trusts most. At Junk Butlers, we understand that a clean home leads to a clear mind. As a certified and trusted all kinds household removal or cleanouts contractor or company Peoria AZ, we handle everything from attic clear-outs to basement decluttering.Our team acts as a skilled trash cleanouts removal contractor or company in Peoria AZ, ensuring that old furniture, broken appliances, and general household debris are removed safely and efficiently. We don't just haul away trash; we provide a fresh start for your living space. Whether you are prepping for a move or simply reclaiming your garage, our local experts deliver professional, white-glove service that respects your property and your time. Choose the experts committed to keeping Peoria homes beautiful and junk-free.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks or Trash Cleanouts Services Contractor or Company in Peoria AZ",

description:"Business efficiency begins with an organized workspace. Junk Butlers is the leading local & trusted commercial offices and stores junks or trash cleanouts services contractor or company in Peoria AZ, helping businesses maintain a professional image. As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor Peoria AZ, we specialize in office furniture liquidations, retail store debris removal, and property management cleanouts.We are recognized as a skilled trash cleanouts removal contractor or company in Peoria AZ that operates with minimal disruption to your daily operations. Our status as a certified and trusted all kinds household removal or cleanouts contractor or company Peoria AZ extends to the corporate sector, where we handle sensitive disposal needs and large-scale office junk with ease. From warehouse debris to cubicle removal, we provide the heavy lifting and logistical support your business requires to stay productive and clutter-free."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Trash or Junk Removal Demolition Contractor Peoria AZ",
  description: `If you are looking for a skilled and top rated home and offices furniture or all kind trash or junk removal demolition contractor Peoria AZ, your search ends with Junk Butlers. We have established ourselves as the region's experts for comprehensive property clearing. As a skilled & professional home or offices trash or trash cleanout contractor or company in Peoria AZ, we understand the unique challenges of both residential decluttering and large-scale commercial cleanouts. Our team excels as a residential & commercial old furniture removal contractor Peoria AZ, handling bulky items like sofas, desks, and cabinets with ease and precision.
Whether you are dealing with a renovation mess, a tenant move-out, or simply a crowded garage, Junk Butlers provides the manpower and equipment to get the job done right. We don't just haul away items; we offer strategic demolition services for sheds, decks, and interior fixtures, making us a versatile partner for any project. Our commitment to being a skilled and top rated provider means we prioritize safety, eco-friendly disposal, and unparalleled customer service. Don't let unwanted debris hold your property back. From office cubicles to household appliances, we ensure every piece of junk is removed efficiently, leaving your space clean and ready for its next chapter. Trust Peoria’s finest to handle the heavy lifting today.`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Peoria AZ",
    description:
      "Choosing a certified or trusted local no1 residential or commercial trash or junks and trash clean outs services contractor Peoria AZ is essential for maintaining a clean and safe environment. Junk Butlers stands at the forefront of the industry, offering unparalleled expertise for both homeowners and business managers. As an experienced high-qualified clean outs services contractor Peoria AZ, we have spent years perfecting our processes to ensure that every project—regardless of size—is handled with the utmost professionalism and care. Our status as the premier certified or trusted local no1 residential or commercial trash or junks and trash clean outs services contractor Peoria AZ means we adhere to strict safety standards and eco-friendly disposal practices.Whether you are clearing out a multi-story office complex or a single-family home, Junk Butlers provides a seamless experience from the initial quote to the final sweep. We understand that your time is valuable, which is why our experienced high-qualified clean outs services contractor Peoria AZ team arrives on time and fully equipped to tackle heavy lifting, debris hauling, and site demolition. By choosing a local leader, you ensure that your property is treated with respect and that all waste is diverted to the proper channels. Let us help you reclaim your space today with the reliability and efficiency that only the best in Peoria can provide.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor",
    description:
      "As a premier major junk and trash clean outs services contractor, we are proud to extend our professional hauling and disposal expertise across the entire Valley. While we are widely recognized as a leading provider in Peoria AZ, our mission at Junk Butlers is to ensure that neighboring communities have access to the same high-quality, reliable service. Our dedicated crews regularly serve residential and commercial clients in Sun City AZ, providing specialized cleanouts for retirement communities and local households. We also maintain a strong presence in Glendale AZ, handling everything from retail debris to residential furniture removal with unmatched efficiency.For those located further west, we are the best team in Surprise AZ, offering same-day solutions for growing families and new business developments. Our service map also encompasses the high-end demands of Scottsdale AZ, where we provide discreet, professional, and thorough property clearing for luxury estates and corporate offices. Finally, our comprehensive reach includes the bustling metropolitan areas of Phoenix AZ, ensuring that the state's capital has a trusted partner for large-scale demolition and trash removal. No matter where you are located within these primary service areas, you can count on us for prompt arrivals, fair pricing, and a spotless finish.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Peoria AZ?",
    description:
      "When choosing a partner for your property, you might ask: why choose Junk Butlers contractor or company for your junks and trash clean outs services contractor Peoria AZ? The answer lies in our unwavering commitment to quality, speed, and reliability. As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Peoria AZ, we don't just move items; we provide a comprehensive solution to property management. Our team at Junk Butlers is fully licensed and insured, giving you total peace of mind while we handle heavy lifting and complex debris removal.We stand out as a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Peoria AZ because we prioritize the customer experience. We offer transparent, upfront pricing with no hidden fees, and our same-day service ensures your clutter is gone exactly when you need it to be. Whether you are dealing with a residential hoarding situation or a commercial construction cleanup, Junk Butlers utilizes the latest equipment and eco-friendly disposal methods to protect your property and the environment. Choosing us means choosing a local leader dedicated to excellence, efficiency, and a junk-free Peoria.",
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
