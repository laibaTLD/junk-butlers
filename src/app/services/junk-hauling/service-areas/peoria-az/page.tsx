
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
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Peoria, AZ",
  areaLabel: "Peoria, AZ",
  description:
    "As Peoria’s local and trusted residential or commercial junk and trash hauling services, Junk Butlers delivers professional and affordable solutions. From skilled furniture removal to same-day junk cleanouts, our certified team ensures your home or office stays clutter-free.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides professional, polite, and respectful junk removal for every Peoria home.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone now? Count on our professional and trusted same-day junk and trash removal services.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 assistance for professional junk cleanouts and debris hauling whenever you need us.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Peoria AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "If you are searching for a professional and trusted garbage or junks and trash hauling services contractor or company in Peoria AZ, look no further than Junk Butlers. Reclaiming your space has never been easier with our skilled or professional all home and offices junk or junks and trash hauling services contractor in Peoria AZ. We understand that clutter can become overwhelming, which is why we offer professional local junks and trash hauling services company in Peoria AZ solutions tailored to your schedule. As a trusted and premier home debris removal or hauling contractor in Peoria AZ, we handle everything from post-renovation cleanup to massive estate transitions.Our team is also a certified appliance junks and trash clean outs services service Peoria AZ, ensuring your old refrigerators and washers are disposed of safely and responsibly. If you have bulky items, we serve as your local and affordable furniture or appliance disposal hauling contractor Peoria AZ, providing heavy lifting so you don't have to. Beyond basic hauling, we are an experienced and trusted all kind trash or junk removal or demolition contractor or company in Peoria AZ, capable of managing light demolition projects with ease. Whether you need a specialized garage junk removal contractor Peoria AZ to clear out years of storage or need same day junk removal or hauling, Junk Butlers is committed to providing efficient, eco-friendly, and reliable service every time.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Peoria, AZ.",
  questions: [
    {
      question: "What types of junk does Junk Butlers remove in Peoria",
      answer:
        "We handle a wide variety of items, including old furniture, appliances, electronics, yard waste, and construction debris. As a skilled and professional trusted junk and trash clean outs services contractor, we manage everything from single-item pickups to full property cleanouts for both residential and commercial clients in Peoria.",
    },
    {
      question: " How does your junk removal pricing work?",
      answer:
        "Our pricing is straightforward and volume-based, meaning you only pay for the space your items occupy in our truck. We provide clear, upfront quotes upon arrival with no hidden fees. This ensures you receive affordable and trusted hauling services tailored specifically to the amount of junk we remove.",
    },
    {
      question: " Do you offer same-day junk removal services?",
      answer:
        "Yes! Junk Butlers offers professional and trusted same-day junk and trash removal services in Peoria, AZ. We understand that clutter can be urgent, so we prioritize fast response times to help you reclaim your space quickly. Contact us early to secure your preferred same-day arrival window.",
    },
    {
      question: "Are you a licensed and insured removal company?",
      answer:
        "Absolutely. We are a certified and trusted all kinds household removal and junk hauling company. Being fully licensed and insured ensures that your property is protected throughout the removal process. Our experienced team follows strict safety protocols while handling heavy furniture, appliances, and residential or commercial debris.",
    },
    {
      question: "  What happens to my junk after you haul it away?",
      answer:
        "As an environmentally conscious experienced high-qualified clean outs services contractor, we prioritize responsible disposal. We sort through every load to recycle materials and donate usable furniture or appliances to local Peoria charities. We aim to keep as much as possible out of landfills to support our community.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Peoria AZ",
  subHeading: "",
  description:
    "As Peoria’s top-rated hauling experts, Junk Butlers provides professional and affordable solutions for every project. From skilled furniture removal to certified appliance cleanouts, our local and trusted team delivers same-day service to keep your home or office clutter-free.",
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
  description: `Junk Butlers offers the most comprehensive property solutions in the region. From certified appliance junks and trash clean outs to local and affordable furniture disposal, our team handles it all. Whether you need a garage junk removal contractor or skilled debris hauling, we provide professional, eco-friendly, and efficient removal.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor or Company Peoria AZ",
    
description:"When clutter takes over your living space, you need the Junk Butlers team to restore order. As the most trusted residential household junks and trash hauling services contractor or company Peoria AZ, we specialize in clearing out everything from attic debris to basement overflows. We are recognized as a certified and trusted all kinds household removal or junks hauling contractor or company Peoria AZ, ensuring that every item—whether it is an old sofa, broken electronics, or general bagged trash—is handled with care and disposed of responsibly.Homeowners choose us because we are a premier and skilled residential or commercial buildings trash or junks hauling services contractor Peoria AZ that prioritizes your time and property. Our skilled trash cleanouts removal contractor or company in Peoria AZ is equipped to handle heavy lifting and complex removals that standard trash pickup won't touch. From single-item pickups to full-property transformations, our residential experts provide the seamless, stress-free experience you deserve.",
 },
{
 heading:"Local & Trusted Commercial offices and Stores Junks hauling services Contractor or Company in Peoria AZ",

description:"Maintaining a clean professional environment is essential for productivity and customer impressions. Junk Butlers is your local & trusted commercial offices and stores junks hauling services contractor or company in Peoria AZ. We provide streamlined solutions for businesses, ranging from office furniture liquidation to retail store debris removal. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Peoria AZ, we understand the unique logistics required for commercial properties, including tight schedules and specific disposal regulations.Our reputation as a skilled trash cleanouts removal contractor or company in Peoria AZ means we work quickly to minimize downtime for your business operations. Whether you are remodeling your storefront or clearing out an old warehouse, we act as a certified and trusted all kinds household removal or junks hauling contractor or company Peoria AZ that also scales perfectly for large-scale commercial needs. Trust the professionals who understand the Peoria business landscape to keep your workspace clean, safe, and clutter-free."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Peoria AZ",
  description: `If you are overwhelmed by clutter, Junk Butlers is here to provide the ultimate relief. As the premier choice for those seeking a skilled & professional home or offices trash or trash hauling contractor or company in Peoria AZ, we pride ourselves on efficiency and reliability. Whether you are clearing out a retail space or updating your family home, our team functions as a dedicated residential & commercial old furniture removal contractor Peoria AZ, handling the heavy lifting of sofas, desks, and cabinetry with precision. We go beyond simple pickups to offer full-scale property solutions.
Our reputation as a skilled and top rated home and offices furniture or all kind junk hauling or demolition contractor Peoria AZ means we have the tools and expertise to manage structural teardowns safely. From removing old sheds to gutting office interiors, Junk Butlers ensures every piece of debris is hauled away responsibly. We understand that your time is valuable, which is why our skilled & professional home or offices trash or trash hauling contractor or company in Peoria AZ arrives on time and works quickly. Don't settle for less when you can hire a residential & commercial old furniture removal contractor Peoria AZ that is licensed, insured, and deeply committed to the Peoria community. Let us transform your space today.
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks hauling Services Contractor Peoria AZ",
    description:
      "When you need the job done right the first time, turn to Junk Butlers, your certified or trusted local no1 residential or commercial trash or junks hauling services contractor Peoria AZ. We have built our reputation on providing seamless, stress-free disposal solutions for every type of property. As an experienced high-qualified clean outs services contractor Peoria AZ, we specialize in managing complex projects that require more than just a pickup truck. From massive estate liquidations and hoarding situations to standard backyard cleanups, our team ensures that every piece of debris is sorted, hauled, and disposed of according to the highest industry standards.Local residents and business owners trust us because we operate with transparency and speed. As your certified or trusted local no1 residential or commercial trash or junks hauling services contractor Peoria AZ, we provide the heavy-duty equipment and professional manpower necessary to clear out warehouses, retail shops, and multi-story homes. Junk Butlers understands the unique needs of the Peoria community, offering flexible scheduling and competitive pricing. Our status as an experienced high-qualified clean outs services contractor Peoria AZ means we don't just move junk—we provide a comprehensive service that leaves your space broom-clean and ready for its next chapter. Choose the local experts who prioritize customer satisfaction and environmental responsibility above all else.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "Junk Butlers is proud to be the premier choice for property owners throughout the Valley, offering expansive coverage as a leading junk and trash hauling services contractor. While we are widely recognized as the top provider in Peoria AZ, our professional fleet regularly travels to meet the needs of residents in Sun City AZ, providing specialized senior living cleanouts and debris removal. We also serve the bustling commercial and residential hubs of Glendale AZ and Surprise AZ, ensuring that high-quality hauling is always just a phone call away.For those in the East Valley, our team provides elite, high-standard services across Scottsdale AZ, handling everything from luxury furniture disposal to estate liquidations with the utmost care. Additionally, our comprehensive reach extends throughout the entire Phoenix AZ metropolitan area, making us the most accessible and reliable contractor for any project, large or small. No matter where you are located within these major hubs, Junk Butlers guarantees punctual arrivals, transparent pricing, and the professional expertise required to clear your space efficiently.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Hauling Services Contractor Peoria AZ?",
    description:
      "Choosing the right partner for your property cleanup makes all the difference in speed, safety, and stress levels. Junk Butlers stands out as the premier choice because we are a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Peoria AZ. We don't just haul away bags; we provide a full-service experience that prioritizes the integrity of your home or business. Our team is trained in the latest safety protocols, ensuring that even the most difficult removals—like heavy appliances or structural debris—are handled without damaging your property.Efficiency is at the core of what we do. As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Peoria AZ, Junk Butlers offers transparent, upfront pricing with no hidden fees, so you know exactly what to expect. We are deeply committed to the local community, emphasizing eco-friendly disposal by donating or recycling items whenever possible. Whether you are facing a massive hoarding cleanup or need a small shed demolished, our reputation for reliability and excellence makes us the #1 choice. We combine local expertise with industrial-grade equipment to deliver results that leave your space spotless and your mind at ease.",
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
