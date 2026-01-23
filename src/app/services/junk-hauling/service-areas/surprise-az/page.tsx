
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

// Types
type ServiceData = {
  title: string;
  areaLabel: string;
  subheading: string;
  description: string;
  bullets: Array<{ title: string; description: string }>;
};

// Data variables
const SERVICE_DATA: ServiceData = {
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Surprise, AZ",
  areaLabel: "Surprise, AZ",
  subheading: "Your Trusted Junk Removal Experts in Surprise, AZ",
  description:
    "Need it gone now? Junk Butlers offers skilled home debris, furniture, and trash removal services. As a certified home and office hauling contractor, we provide affordable clean-outs and demolition tailored to your needs. Fast, local, and highly rated!",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our Junk Butlers team provides courteous, professional service, ensuring a stress-free experience for every Surprise resident.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone fast? We offer professional and trusted same-day junk and trash removal services.",
    },
    {
      title: "24/7 Support",
      description:
        "Your local and trusted residential or commercial hauling partner is available anytime for urgent clean-out needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Surprise AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "Are you overwhelmed by clutter and looking for a professional and trusted garbage or junks and trash hauling services contractor or company in Surprise, AZ? Look no more than Junk Butlers. As a professional local junks and trash hauling services company in Surprise, AZ, we specialize in clearing out the chaos with efficiency and care. Whether you need a skilled or professional all home and offices junk or junks and trash hauling services contractor in Surprise, AZ, or a trusted and premier home debris removal or hauling contractor in Surprise, AZ, our team is equipped to handle jobs of any size.We take pride in being a local and affordable furniture or appliance disposal hauling contractor Surprise, AZ homeowners rely on for honest pricing and hard work. Beyond simple pickups, we are a certified appliance junks and trash clean outs services service Surprise, AZ can trust for eco-friendly disposal. If you are tackling a renovation, our status as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Surprise, AZ ensures your site stays clean and safe. From acting as your dedicated garage junk removal contractor Surprise, AZ specialist to providing lightning-fast same day junk removal, we are committed to excellence. Choose the experts who prioritize your satisfaction and reclaim your space today.",
  ],
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers is your premier and skilled residential or commercial buildings trash or junks hauling services contractor Surprise AZ. We provide skilled trash cleanouts, debris removal, and certified furniture disposal. As a local and trusted company, we offer affordable solutions for all your home and office hauling needs.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor or Company Surprise AZ",
    
description:"When your home becomes overwhelmed by clutter, you need the Junk Butlers, the most reliable team for reclaiming your living space. As a certified and trusted all kinds household removal or junks hauling contractor or company Surprise AZ families rely on, we handle everything from attic clear-outs to basement refreshes. We understand that getting rid of old belongings requires a delicate touch and a fast pace. That is why we stand out as a premier and skilled residential or commercial buildings trash or junks hauling services contractor Surprise AZ homeowners can count on for total efficiency.Our team consists of skilled trash cleanouts removal contractors or companies in Surprise AZ who specialize in removing furniture, appliances, and general household debris. We don't just haul; we ensure that your property is treated with respect while providing affordable solutions to your waste problems. Whether you are prepping for a move or simply clearing out years of accumulated items, our certified experts make the process seamless. Trust the local professionals to handle your heavy lifting with the care and speed you deserve.",
 },
{
 heading:"Local & Trusted Commercial offices and Stores Junks hauling services Contractor or Company in Surprise AZ",

description:"Business owners know that a clean environment is essential for productivity and customer satisfaction. Junk Butlers is the local & trusted commercial offices and stores junks hauling services contractor or company in Surprise AZ dedicated to keeping your workspace pristine. We serve as a skilled trash cleanouts removal contractor or company in Surprise AZ, offering tailored solutions for office furniture, electronic waste, and commercial debris. From small retail storefronts to large corporate buildings, we provide the logistical support needed to remove unwanted items without disrupting your daily operations. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Surprise AZ, we bring a higher level of professionalism to every job site. Our crew is recognized as a certified and trusted all kinds household removal or junks hauling contractor or company Surprise AZ businesses turn to for reliable, scheduled, or one-time clean-outs. We prioritize eco-friendly disposal and recycling, ensuring your company remains compliant and environmentally conscious. Partner with us to experience a junk-free workplace managed by the most experienced hauling team in the region."
}
  ]
};

const CTA_DATA = {
  heading:
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Surprise AZ",
  subHeading: "",
  description:
    "Reclaim your space with Junk Butlers, the skilled trash cleanouts removal contractor or company in Surprise AZ. We are the premier and skilled residential or commercial experts delivering certified and trusted hauling. For affordable and local service, call us now!",
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


const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Surprise AZ",
  description: `When you are searching for a skilled and top-rated home and offices furniture or all kind junk hauling or demolition contractor Surprise AZ, you need a team that combines power with precision. Junk Butlers is that premier choice. As a skilled & professional home or offices trash or trash hauling contractor or company in Surprise AZ, we understand that removing heavy debris or tearing down old structures requires specialized expertise. We don’t just move items; we provide comprehensive solutions for property owners who demand high-quality results and reliable timelines.
Our crew excels as a residential & commercial old furniture removal contractor Surprise AZ trusts for seamless transitions. Whether you are upgrading your office layout or clearing out a family estate, we handle every heavy sofa, desk, and cubicle with ease. Beyond simple hauling, our demolition services are perfect for those tackling renovations or clearing land. We maintain a high standard of safety and cleanliness, ensuring that once the junk is gone, your site is ready for its next chapter. From garage clean-outs to full-scale commercial hauls, Junk Butlers delivers an unmatched level of service. Don't settle for less when you can hire the most skilled & professional team in the valley to handle your most difficult hauling and demolition tasks today.`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks Hauling Services Contractor Surprise AZ",
    description:
      "When it comes to maintaining a clean and organized property, you deserve the peace of mind that comes with hiring a certified or trusted local no1 residential or commercial trash or junks hauling services contractor Surprise AZ. At Junk Butlers, we have built our reputation on being the most reliable partner for residents and business owners alike. We understand that junk accumulation can be overwhelming, which is why we offer streamlined, heavy-duty solutions to clear your space efficiently. As an experienced high-qualified clean outs services contractor Surprise AZ, we bring years of field expertise to every project, ensuring that every load is handled safely and disposed of according to local regulations. Whether you are managing a foreclosed property, clearing out a commercial warehouse, or simply tackling a backyard cleanup, Junk Butlers delivers the professional muscle you need. Our team is fully vetted and equipped to manage large-scale removals that standard trash services simply cannot handle. We take pride in being the certified or trusted local choice, providing transparent pricing and punctual service that respects your busy schedule. From the initial quote to the final sweep-up, our goal is to exceed your expectations. Don't let unwanted clutter hold your property value back; choose the high-qualified experts dedicated to keeping Surprise clean and clutter-free.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "Junk Butlers is proud to be the valley’s top choice, serving as the premier major junk and trash hauling services contractor across the region. While we are centrally based to act as your #1 Surprise AZ specialist, our mobile fleet extends professional, same-day support to all neighboring communities. We provide high-quality residential and commercial clean-outs in Peoria AZ and Sun City AZ, ensuring local homeowners have access to affordable debris removal. Our reach continues through Glendale AZ, where we handle everything from appliance disposal to large-scale site clearances.For those in Scottsdale AZ and the greater Phoenix AZ metro area, our team delivers the same 'white-glove' service that has made us a household name. Whether you are managing a retail storefront in the city center or a desert estate, our service area is designed to bring elite hauling solutions directly to your doorstep. Trust our skilled crew to handle the heavy lifting, no matter where you are located in the West Valley or beyond.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for Your Junks and Trash Hauling Services Contractor Surprise AZ?",
    description:
      "Choosing the right partner for your property cleanup is essential, and Junk Butlers stands out as the premier choice for those who value efficiency, integrity, and hard work. When you choose us, you are partnering with a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Surprise AZ that understands the specific needs of our desert community. We don't just haul away bags; we provide a comprehensive experience that removes the physical and mental burden of clutter from your life. Our reputation is built on being the most reliable Junk Butlers team in the region, offering transparent, upfront pricing with no hidden fees. What sets us apart is our dual expertise as a skilled and professional removal crew and a precise demolition services contractor. We have the heavy-duty equipment and the refined techniques required to handle everything from fragile furniture disposal to rugged site teardowns. Every member of our team is trained to prioritize safety and property protection, ensuring your home or office remains undamaged during the hauling process. For a trusted experience that combines local knowledge with world-class service standards, Junk Butlers is the only name you need to know in Surprise AZ.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
  },
};

const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get answers to common questions about our junk and trash hauling services in Surprise, AZ.",
  questions: [
    {
      question: "What types of junk and trash do you haul in Surprise, AZ?",
      answer:
        "Junk Butlers handles a wide range of junk and trash, from household debris to office waste. As a skilled and professional trusted junks and trash clean outs services contractor, we haul furniture, appliances, electronics, and construction materials. Regardless of load size, our team focuses on responsible disposal and eco-friendly recycling.",
    },
    {
      question: "Do you provide same-day junk removal services in Surprise?",
      answer:
        "Yes! We are a professional and trusted same day junks and trash removal services contractor in Surprise AZ. If clutter becomes urgent, call us in the morning and our team will work to clear your residential or commercial space before the day ends.",
    },
    {
      question: "Are you licensed and insured for demolition services in Surprise?",
      answer:
        "Absolutely. We are a local and trusted residential or commercial junks and trash hauling services and demolition contractor in Surprise AZ. Our crew is fully insured and certified to perform light demolition safely, professionally, and in compliance with local safety regulations.",
    },
    {
      question: "How is pricing calculated for your hauling services?",
      answer:
        "As a local and affordable furniture or appliance disposal hauling contractor in Surprise AZ, our pricing is based on the volume of junk and the amount of truck space it occupies. We offer free, transparent estimates with no hidden fees so you always know what to expect.",
    },
    {
      question: "Do you handle large commercial office clean-outs?",
      answer:
        "Yes, we are a premier and skilled residential or commercial buildings trash or junks hauling services contractor in Surprise AZ. We help with office relocations, retail store closures, and warehouse clean-outs, removing desks, cubicles, and electronic waste efficiently to minimize downtime.",
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
