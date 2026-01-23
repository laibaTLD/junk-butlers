
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

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Sun City, AZ",
  areaLabel: "Sun City, AZ",
  description:
      "Experience professional and affordable junk and trash hauling in Sun City, AZ. From skilled home debris and furniture removal to local commercial demolition, our certified team offers trusted same-day service. Let the experts handle your clean-outs today!",
    subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted Junk Butlers team provides courteous, professional service for every Sun City resident.",
    },
    {
      title: "Quick Response",
      description:
        "Get same-day trash hauling with our rapid-action team, ensuring your property is cleared without delay.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer professional and affordable assistance anytime, providing round-the-clock solutions for your junk removal needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Sun City AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "Searching for a professional and trusted garbage or junk hauling services contractor? Look no more than Junk Butlers, the professional local junks and trash hauling services company Sun City residents rely on. We provide same-day junk removal to ensure your property stays clean, safe, and clutter-free. As a skilled all home and offices junk hauling services contractor, we handle everything from single-item pickups to massive estate clearances. We have earned our reputation as a trusted and premier home debris removal contractor, offering specialized support for renovations and move-outs. Need to get rid of old freezers or stoves? Our certified appliance junks and trash clean outs service ensures your bulky items are handled responsibly.Efficiency meets value with our team. As a local and affordable furniture disposal hauling contractor, we make it easy to refresh your interior without the heavy lifting. Beyond simple pickups, we are an experienced and trusted demolition contractor capable of managing complex site clearances. From your backyard to your vehicle stalls, our experts serve as your best garage junk removal contractor, transforming messy spaces into functional areas. Don’t settle for less than the best trusted all kind trash or junk removal company in the region. Junk Butlers is ready to deliver the 'white glove' service you deserve. Contact us today for Sun City’s most reliable hauling!",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Junk Butlers services in Sun City, AZ.",
  questions: [
    {
      question: "What services do Junk Butlers offer in Sun City?",
      answer:
        "We are a skilled and professional trusted junks and trash clean outs services provider. Our team handles residential furniture removal, office cleanouts, appliance disposal, and debris hauling. We also serve as a demolition services contractor in Sun City, AZ, managing light structural removals and yard waste clearing efficiently.",
    },
    {
      question: "Do you offer same-day junk hauling services?",
      answer:
        "Yes! As the trusted local No. 1 residential or commercial trash hauling contractor, we prioritize speed. If you call early, we can often provide same-day junk removal to clear your clutter immediately. Our goal is to provide fast, reliable service that fits into your busy Arizona schedule.",
    },
    {
      question: "Are your hauling and demolition services affordable?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable furniture disposal hauling contractor. We offer transparent, upfront pricing based on the volume of junk we remove. Whether it’s a small garage cleanout or a large commercial project, you get premium service at a competitive local rate.",
    },
    {
      question: "Which areas do you serve outside of Sun City?",
      answer:
        "Beyond being a top Sun City, AZ contractor, we cover the entire Valley. Our service areas include Peoria, Glendale, Surprise, Scottsdale, and Phoenix. No matter where you are located, our skilled home and offices junk hauling team is ready to provide professional and certified disposal solutions.",
    },
    {
      question: "How do you handle old appliances and furniture?",
      answer:
        "As a certified appliance junks and trash clean outs service, we focus on responsible disposal. We don’t just dump items; we sort through furniture and appliances to recycle or donate whenever possible. This eco-friendly approach makes us the experienced and trusted all-kind trash removal company Sun City prefers.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Sun City AZ",
  subHeading: "",
  description:
    "Reclaim your space with Junk Butlers, the skilled trash cleanouts removal company you can trust. As the premier residential and commercial hauling contractor, we provide certified household removal and affordable office cleanouts. Experience Sun City's most reliable same-day service today!",
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
  description: `Searching for a professional and trusted partner? Junk Butlers is the premier and skilled residential or commercial buildings trash hauling services contractor in Sun City, AZ. From certified household removal to skilled trash cleanouts, we provide affordable, same-day solutions for homes and offices. Clear your space today!`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor in Sun City, AZ",
    
description:"Transform your living space today with Junk Butlers, your certified and trusted all kinds household removal or junks hauling contractor. We understand that home clutter can be overwhelming, which is why we provide a seamless, stress-free experience for Sun City homeowners. Whether you are dealing with years of accumulated basement clutter or need a skilled trash cleanouts removal company, our team is ready to help.As a premier and skilled residential buildings trash or junks hauling services contractor, we specialize in everything from old furniture disposal to complete estate cleanouts. We pride ourselves on being a certified and trusted all kinds household removal contractor, ensuring that your unwanted items are disposed of responsibly and efficiently. Don’t let debris take over your home; hire the most reliable junks and trash hauling services company in Sun City, AZ, and enjoy a pristine environment once again.",
 },
{
 heading:"Local & Trusted Commercial Offices and Stores Junks Hauling Services Contractor in Sun City, AZ",

description:"Business owners in Sun City deserve a workspace that reflects their professionalism. Junk Butlers is the local & trusted commercial offices and stores junks hauling services contractor dedicated to keeping your business running smoothly. From retail store strip-outs to corporate office upgrades, we serve as the premier and skilled commercial buildings trash or junks hauling services contractor that local managers trust for timely and discreet removals.Our reputation as a skilled trash cleanouts removal contractor means we handle office furniture, electronic waste, and bulky retail fixtures with ease. We operate as a certified and trusted all kinds junks hauling company, providing flexible scheduling to minimize any disruption to your business operations. Whether you are relocating or simply downsizing, our commercial junks hauling services company in Sun City, AZ, delivers the speed and reliability you need to maintain a productive and clean commercial environment."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Sun City AZ",
  description: `If you are looking for a skilled and top-rated home and offices furniture or all-kind junk hauling or demolition contractor in Sun City, AZ, Junk Butlers is your premier local expert. We pride ourselves on being a skilled and professional home or offices trash hauling contractor that delivers unmatched reliability for every project. Whether you are clearing out a residential estate or managing a large-scale commercial cleanout, our team is equipped to handle the heavy lifting with precision. As a dedicated residential and commercial old furniture removal contractor in Sun City, AZ, we understand the unique needs of our community, offering everything from single-item pickups to comprehensive site demolitions.
Our reputation as a professional trash hauling company is built on transparency, affordability, and a commitment to keeping Arizona clean. We don't just haul away your unwanted items; we provide peace of mind by ensuring every piece of debris is disposed of responsibly. From outdated office desks to bulky household sofas, our skilled home and offices junk hauling experts ensure a clutter-free environment in record time. Don't settle for less when you can hire the top-rated demolition contractor and hauling agency trusted by thousands. Contact Junk Butlers today to experience why we are the preferred choice for all your trash removal and hauling needs in Sun City.
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks hauling Services Contractor Sun City AZ",
    description:
      "When you need a certified or trusted local No. 1 residential or commercial trash or junks hauling services contractor in Sun City, AZ, Junk Butlers stands out as the industry leader. We have built our reputation on providing seamless, high-quality disposal solutions for both homeowners and business managers. As an experienced high-qualified clean outs services contractor in Sun City, AZ, we understand that removing heavy debris, old furniture, or accumulated office waste requires more than just a truck—it requires a team that respects your property and your time. Our status as a certified trash hauling contractor means we adhere to the highest standards of safety and environmental responsibility.Whether you are dealing with a cluttered garage, a renovated retail space, or a full estate cleanout, Junk Butlers delivers a 'white glove' experience every time. We are recognized as the trusted local No. 1 residential hauling service because we prioritize customer satisfaction and transparent pricing. Don't let unwanted items devalue your property or create a safety hazard. By choosing an experienced high-qualified clean outs services contractor, you ensure that your project is handled by professionals who can navigate the specific logistics of Sun City, AZ. From residential curbside pickups to complex commercial junk hauling, we are the reliable partner you’ve been searching for. Contact us today to reclaim your space with the most trusted hauling team in the valley!",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "As your best major junk and trash hauling services contractor, Junk Butlers is proud to provide comprehensive cleanup solutions across the entire Valley. Whether you need a residential cleanout or a commercial site cleared, our team serves as the premier choice in Peoria, AZ, our home base, and extends expert support to our neighbors in Sun City, AZ. We are a locally owned and operated agency dedicated to maintaining the beauty of our communities, offering same-day hauling for families and businesses in Glendale, AZ, and high-efficiency furniture removal in Surprise, AZ.Our reach continues into the East Valley, where we serve as a trusted partner for luxury estate cleanouts and retail debris removal in Scottsdale, AZ. From downtown high-rises to suburban neighborhoods, our professional crews are active daily in Phoenix, AZ, ensuring that every project—big or small—is handled with the 'Butler' touch of professionalism and care. No matter where you are located in these major service areas, you can count on us for affordable, certified, and eco-friendly disposal.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for Your Junks and Trash Hauling Services Contractor Sun City AZ?",
    description:
      "Choosing the right partner for debris removal makes all the difference in your property’s safety and appearance. Why choose Junk Butlers as your best contractor? Because we are the most skilled and professional trusted junks and trash clean outs services provider in the region. Our team is dedicated to providing Sun City, AZ residents with a seamless, stress-free experience that combines high-efficiency hauling with unmatched customer care. We aren't just a hauling company; we are a full-service demolition services contractor in Sun City, AZ, equipped to handle everything from light interior tear-downs to massive outdoor debris removal.When you hire Junk Butlers, you are choosing a team that values transparency, arriving on time and offering upfront, affordable pricing with no hidden fees. Our reputation as a skilled and professional trusted provider is built on our commitment to the community. We prioritize eco-friendly disposal, ensuring that your items are recycled or donated whenever possible. Whether you need a simple garage cleanout or complex demolition services, we have the expertise and heavy-duty equipment to get the job done right the first time. Experience the peace of mind that comes with hiring the valley’s top-rated hauling experts today!",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
  },
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
