
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
  title: "Certified & Professional #1 Junks and Trash Clean Outs Services Contractor Phoenix, AZ",
  areaLabel: "Phoenix, AZ",
  subheading: "Phoenix's Premier Junk Removal Experts",
  description:
    "Clear the clutter with Junk Butlers, your local and certified contractor for professional and affordable home and office clean outs. From skilled furniture disposal to trusted same-day debris removal, we are the top-rated residential and commercial experts in Phoenix.",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and certified Junk Butlers team provides polite, helpful service for every Phoenix clean out.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone now? Our trusted same-day team ensures professional and affordable junk removal in Phoenix.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer trusted residential and commercial support, providing skilled furniture and trash disposal anytime you need.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Clean Outs Services Contractor or Company in Phoenix AZ? - Same Day Junk Removal",
  paragraphs: [
    "Are you overwhelmed by clutter? If you are looking for a professional and trusted garbage, junk, and trash clean out contractor in Phoenix, AZ, Junk Butlers is here to help. We provide trusted and premier home debris removal and hauling services designed to reclaim your space today. As a professional local junks and trash clean outs services company in Phoenix, AZ, we specialize in both residential and commercial projects. Whether you need a skilled or professional all home and offices junk clean outs contractor, or an experienced and trusted all-kind trash removal or demolition company, our team handles the heavy lifting with precision.We take pride in being a local and affordable furniture or appliance disposal clean outs contractor, ensuring your old items are hauled away responsibly. Our expertise extends to specialized needs, including certified appliance junks and trash clean outs and comprehensive garage junk removal. From single-item pickups to full-scale property hauls, we are the trusted and premier choice for Phoenix residents. We understand that junk doesn't wait, which is why we offer same-day junk removal to get your life back on track fast. Choose the local and certified experts who prioritize efficiency and affordability. Contact Junk Butlers today—the most skilled or professional junk removal team in the Valley—and experience a cleaner, clutter-free environment immediately!",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Phoenix  City, AZ.",
  questions: [
    {
      question: " What services do Junk Butlers offer in Phoenix?",
      answer:
        "As a skilled and professional home or offices trash cleanout contractor, we handle everything from furniture disposal to commercial demolition. Whether you need certified appliance junks and trash clean outs or a full garage clearing, our local and certified team provides professional and affordable solutions for every project.",
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer:
        "Yes! We are a professional and trusted same-day junks and trash clean outs services contractor in Phoenix, AZ. We understand that clutter can be urgent, so our skilled trash cleanouts removal team works quickly to reclaim your space, offering trusted and premier hauling exactly when you need it.",
    },
    {
      question: " Are you a licensed and insured contractor?",
      answer:
        "Absolutely. Junk Butlers is a local and certified and experienced high-qualified clean outs services contractor in Phoenix, AZ. We prioritize safety and professionalism, making us the No1 residential or commercial trash or junks and trash clean outs services contractor you can trust for secure, reliable hauling.",
    },
    {
      question: "How much does professional junk removal cost?",
      answer:
        "We take pride in being a professional and affordable company. Costs depend on the volume of debris, but as a trusted and premier home debris removal or hauling contractor, we provide transparent, upfront quotes. Contact Junk Butlers for the most skilled and professional service at competitive rates.",
    },
    {
      question: "Which areas in the Valley do you serve?",
      answer:
        "We are the premier and skilled residential or commercial buildings trash experts serving Phoenix, Scottsdale, Glendale, Peoria, Surprise, and Sun City, AZ. As a local and affordable contractor, we ensure every neighborhood has access to skilled and professional trusted junks and trash clean outs or demolition services.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Clean Outs Services Company or Agency Phoenix AZ",
  subHeading: "",
  description:
    "As Phoenix’s top-rated agency, Junk Butlers delivers professional and affordable solutions. We are the local and certified experts for skilled debris, furniture, and trash clean outs. Trust our skilled residential and commercial team for trusted same-day removal services today!",
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
  description: `Junk Butlers offers the most skilled trash cleanouts removal in Phoenix. As a premier and skilled residential or commercial buildings trash expert, we handle everything from certified and trusted household removal to local and affordable furniture disposal. Trust our professional and trusted same-day team for all your hauling needs.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Clean Outs Services Contractor Phoenix AZ",
    
description:"Transform your living space with Junk Butlers, the certified and trusted all kinds household removal or cleanouts contractor in the Valley. Dealing with accumulated clutter can be overwhelming, but our team makes it effortless. As a premier and skilled residential junk removal expert, we specialize in clearing out everything from old furniture and broken appliances to basement debris.We are recognized as the most skilled trash cleanouts removal contractor in Phoenix, ensuring that every room in your home—from the attic to the garage—is left spotless. Our commitment to being a certified and trusted company means we handle your belongings with care while providing eco-friendly disposal solutions. Don't let unwanted items take over your life; choose a premier and skilled residential or commercial buildings trash expert who understands the local needs of Phoenix homeowners. Contact us today for reliable, fast, and thorough household cleanouts.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks or Trash Cleanouts Services Contractor Phoenix AZ",

description:"Maintaining a clean business environment is essential for productivity and professional appeal. Junk Butlers is your best local & trusted commercial offices and stores junks or trash cleanouts services contractor in Phoenix. We understand the unique logistics of commercial hauling, offering streamlined solutions for office furniture, electronic waste, and retail debris.As a premier and skilled residential or commercial buildings trash or junks and trash clean outs services contractor, we work around your schedule to minimize downtime. Whether you are renovating a storefront or clearing out a corporate office, we serve as the most skilled trash cleanouts removal company to get the job done right. Our reputation as a certified and trusted all kinds household removal or cleanouts contractor extends to the business sector, ensuring high standards of professionalism. Trust our skilled trash cleanouts removal contractor team to keep your Phoenix business clutter-free and ready for growth."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Trash or Junk Removal Demolition Contractor Phoenix AZ",
  description: `If you are searching for a skilled and top-rated home and offices furniture or all-kind trash removal demolition contractor in Phoenix, AZ, look no more than Junk Butlers. We pride ourselves on being the valley’s most reliable solution for clearing unwanted clutter, offering comprehensive services tailored to your specific needs. As a skilled and professional home or offices trash cleanout contractor, we handle everything from minor residential pickups to large-scale commercial cleanouts with efficiency and care. At Junk Butlers, we understand that disposing of heavy items can be a logistical nightmare. That is why we have established ourselves as the premier residential and commercial old furniture removal contractor in Phoenix, AZ.
Whether you are upgrading your living room set or liquidating an entire office floor, our team provides the heavy lifting and responsible disposal you deserve. Our expertise goes beyond simple hauling; we are an experienced and trusted all-kind trash removal and demolition company. From removing construction debris to clearing out neglected estates, our skilled and professional crew ensures your property is left clean and ready for its next chapter. Choose the local and certified experts who prioritize customer satisfaction and affordable pricing. Contact Junk Butlers today for the best junk removal and demolition services in the Phoenix area!`,
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks and Trash Clean Outs Services Contractor Phoenix AZ",
    description:
      "When it comes to property maintenance, finding a certified or trusted local No1 residential or commercial trash or junks and trash clean outs services contractor in Phoenix, AZ, is essential for a stress-free experience. Junk Butlers stands at the forefront of the industry, providing unmatched expertise in hauling, disposal, and site clearing. As an experienced high-qualified clean outs services contractor in Phoenix, AZ, we understand the unique needs of both homeowners and business managers in the Valley. Whether you are dealing with a cluttered basement or a sprawling commercial warehouse, our team delivers the most professional and affordable solutions available. Junk Butlers is not just a hauling company; we are a full-service local and certified partner dedicated to efficiency.From skilled debris and furniture removal to comprehensive estate clean outs, our experienced high-qualified team ensures that every job is completed to the highest standards of cleanliness and safety. In a fast-paced city like Phoenix, you need a trusted and premier provider that values your time. We take pride in being the No1 residential or commercial trash or junks and trash clean outs services contractor, offering flexible scheduling and same-day options. Don't settle for less when it comes to your property. Choose the skilled and professional experts at Junk Butlers to handle your toughest messes. Contact us today to experience the gold standard in Phoenix junk removal!",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Clean Outs Services Contractor Phoenix AZ",
    description:
      "Junk Butlers is proud to be the leading provider of comprehensive hauling solutions across the entire Valley, serving as your premier local and certified expert. We have strategically expanded our reach to ensure that whether you are a homeowner or a business owner, you have access to a professional and affordable team nearby. Our primary service hubs include the bustling center of Phoenix, AZ, where we operate as the trusted and premier choice for rapid debris removal. To the West, we provide skilled and professional support in Glendale, AZ, and Peoria, AZ, ensuring that residential neighborhoods and commercial strips remain clutter-free.We also cater to the growing communities of Surprise, AZ, and the active lifestyle areas of Sun City, AZ, offering certified and trusted furniture and appliance disposal. For those in the East Valley, our experienced high-qualified clean outs services extend into Scottsdale, AZ, delivering high-end estate clearing and commercial office hauls. No matter which of these major areas you are located in, Junk Butlers guarantees same-day reliability and a commitment to excellence. From Suncity to Scottsdale, we are the No1 residential or commercial trash or junks and trash clean outs services contractor dedicated to keeping Arizona clean.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Clean Outs Services Contractor Phoenix AZ?",
    description:
      "Choosing the right partner for property clearing is essential for safety, efficiency, and peace of mind. Junk Butlers stands out as the premier choice because we are a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Phoenix, AZ. Our reputation is built on a foundation of reliability and transparent pricing, ensuring you never have to deal with hidden fees or subpar work. We don't just haul away trash; we provide a comprehensive service that restores the value and functionality of your space. As a local and certified leader, Junk Butlers employs a team of experts trained in the most effective removal techniques.Whether you require a skilled and professional trusted team for a complex commercial demolition project or a simple residential furniture haul, we bring the same level of dedication to every job. Our deep roots in the community make us the No1 residential or commercial trash or junks and trash clean outs services contractor that neighbors trust. We prioritize eco-friendly disposal and recycling, ensuring your unwanted items are handled responsibly. When you choose us, you are choosing a professional and affordable partner dedicated to keeping Phoenix clean, one haul at a time.",
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
