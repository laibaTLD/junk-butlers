
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
  title: 'Hire Affordable Junk Removal Experts Junks Butlers In Scottsdale AZ',
  description: 'Need junk gone fast? Junks Butler s Scottsdale offers efficient junk removal experts, hauling, and disposal for homes & businesses with same-day service.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-removal/service-areas/scottsdale-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Affordable Junk Removal Experts Junks Butlers In Scottsdale AZ',
    description: 'Need junk gone fast? Junks Butler s Scottsdale offers efficient junk removal experts, hauling, and disposal for homes & businesses with same-day service.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks Removal Contractor Scottsdale AZ",
  areaLabel: "Scottsdale, AZ",
  description:
    "Clear your space today with Junk Butlers, your local and trusted residential or commercial junk removal and demolition contractor in Scottsdale, AZ. We provide professional and affordable same-day trash removal and skilled home debris hauling you can rely on.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our polite, professional crew treats your home with respect, making every junk removal appointment stress-free.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone? We offer fast, same-day trash hauling across Scottsdale to reclaim your space instantly.",
    },
    {
      title: "24/7 Support",
      description:
        "Our local team is always available to schedule your residential or commercial demolition and junk cleanouts.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Scottsdale AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for your cleanup doesn't have to be stressful. Junk Butlers is the premier home debris removal or hauling contractor in Scottsdale, AZ, dedicated to clearing your clutter with precision. As a skilled and professional all home and offices junk or trash removal contractor in Scottsdale, AZ, we understand that whether you are dealing with a cluttered estate or a busy workplace, you need a professional local trash removal company in Scottsdale, AZ that shows up on time. We specialize in versatile solutions, acting as your local and affordable furniture or appliance disposal contractor Scottsdale, AZ residents trust for heavy lifting.From a certified appliance junks removal service Scottsdale, AZ can depend on to being a specialized garage junk removal contractor Scottsdale, AZ homeowners hire for total transformations, we handle it all. Our team is recognized as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Scottsdale, AZ, ensuring that even complex tear-downs are managed safely. When you search for a trusted and premier home debris removal or hauling contractor in Scottsdale, AZ, look no more than our same-day service. We combine efficiency with affordability, making us the professional local trash removal company in Scottsdale, AZ for any project size. Let us reclaim your space today!",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Sun City, AZ.",
  questions: [
    {
      question: " What items can Junk Butlers remove from my property?",
      answer:
        "As a premier and skilled residential or commercial buildings junk or trash removal contractor, we haul almost anything non-hazardous. This includes old furniture, mattresses, appliances, electronics (e-waste), yard debris, and construction materials. If it fits in our truck and isn’t a biohazard, our professional team can handle it.",
    },
    {
      question: " Do you offer same-day junk removal in Scottsdale?",
      answer:
        "Yes! Junk Butlers is a professional and trusted same-day trash removal contractor in Scottsdale, AZ. We understand that clutter can be urgent, so we prioritize fast response times. Simply call or text us a photo of your items, and we will do our best to clear your space today.",
    },
    {
      question: " How does your junk removal pricing work?",
      answer:
        "Our pricing is transparent and volume-based, meaning you only pay for the space your items occupy in our truck. As a local and affordable furniture or appliance disposal contractor, we provide free, no-obligation quotes on-site to ensure you get a fair price without any hidden fees or surprises.",
    },
    {
      question: "Are you a licensed and insured removal company?",
      answer:
        "Absolutely. Junk Butlers is a certified and trusted all-kinds household removal or cleanouts contractor. We are fully licensed and carry comprehensive insurance to protect your property and our team during the removal process. You can have total peace of mind while we handle the heavy lifting and demolition work.",
    },
    {
      question: " What do you do with the junk after it is hauled away",
      answer:
        "As a certified or trusted local no1 eco-friendly junk removal contractor, we prioritize sustainability. We sort through every load to identify items that can be donated to local Scottsdale charities or sent to recycling centers. We strive to keep as much as possible out of Arizona landfills.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Scottsdale AZ",
  subHeading: "",
  description:
    "Experience the best with Junk Butlers, your premier and skilled residential or commercial junk removal contractor. We provide professional and affordable hauling for homes and offices. Reclaim your space today with Scottsdale’s most trusted and certified trash removal experts.",
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
  description: `Junk Butlers provides comprehensive hauling solutions tailored to your needs. As the premier and skilled residential or commercial buildings junk or trash removal contractor Scottsdale, AZ trusts, we handle everything from furniture disposal and appliance removal to full demolition cleanouts. Experience fast, professional service from Scottsdale's top-rated cleanup experts.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junk Removal Contractor in Scottsdale, AZ",
    
description:"When your home becomes overwhelmed by clutter, you need the Junk Butlers, the certified and trusted all-kinds household removal or cleanouts contractor in Scottsdale, AZ. We specialize in reclaiming your living space, whether you are clearing out a single room or managing a full estate transition. As a premier and skilled residential junk or trash removal contractor, our team handles everything from old mattresses and broken electronics to heavy appliances and general backyard debris.We take pride in being a skilled junk cleanouts removal company in Scottsdale, AZ, ensuring that every item is sorted, hauled, and disposed of responsibly. Homeowners trust us because we combine efficiency with a friendly, local touch. Don't let unwanted items gather dust; choose the most reliable residential household junk removal contractor in Scottsdale, AZ to restore order to your home today. We make the process seamless, affordable, and completely stress-free.",
 },
{
 heading:"Local & Trusted Commercial Office Cleanouts or Business Junk Removal Contractor in Scottsdale, AZ",

description:"Running a business is demanding, and managing office waste shouldn't add to your workload. Junk Butlers is the local and trusted commercial office cleanouts or business junk removal company in Scottsdale, AZ that keeps your workspace professional and productive. From clearing out old office furniture and cubicles to handling e-waste and large-scale renovations, we are the premier and skilled commercial buildings junk or trash removal contractor your company needs.As a skilled junk cleanouts removal contractor in Scottsdale, AZ, we work around your schedule to ensure minimal disruption to your daily operations. Our reputation as a certified and trusted all-kinds removal or cleanouts company means we handle sensitive office debris with the utmost care and professionalism. Whether you are downsizing your headquarters or simply refreshing your layout, partner with the leading commercial office cleanouts contractor in Scottsdale, AZ for a clean, professional, and clutter-free business environment."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Scottsdale AZ",
  description: `If you are overwhelmed by clutter or debris, you need a partner who understands the local landscape. Junk Butlers is proud to be the skilled & professional home or offices junks or trash cleanout contractor or company in Scottsdale, AZ that residents and business owners turn to for reliable results. Whether you are prepping a site for renovation or simply clearing out years of accumulated items, our team acts as your residential & commercial old furniture removal contractor Scottsdale, AZ, handling the heavy lifting so you don’t have to. We go beyond simple hauling; we are a full-service skilled & professional home or offices junks or trash cleanout contractor capable of managing complex demolition projects and large-scale office transitions.
Our reputation as a residential & commercial old furniture removal contractor is built on punctuality, fair pricing, and a commitment to keeping Scottsdale clean. When you choose Junk Butlers, you are hiring a skilled and top rated home and offices trash or junk removal demolition contractor that prioritizes your schedule and property safety. From old sofas and office desks to heavy construction debris, we ensure every item is disposed of according to local regulations. Reclaim your square footage today with the most trusted name in Arizona hauling.`,
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
      "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Scottsdale AZ",
    description:
      "In today’s world, responsible disposal matters just as much as efficiency. Junk Butlers leads the industry as your certified or trusted local no1 eco-friendly junks or trash removal contractor in Scottsdale, AZ. We don’t just haul away your unwanted items; we prioritize sustainable practices by sorting through every load to donate, recycle, or repurpose whenever possible. As an experienced high-qualified junks hauling services contractor Scottsdale, AZ, our team is trained to handle everything from household waste to industrial debris with an environmentally conscious approach.Choosing Junk Butlers means you are partnering with an experienced high-qualified junks hauling services contractor that understands the local Scottsdale environment and regulations. We take pride in being the certified or trusted local no1 eco-friendly junks or trash removal contractor, ensuring that your garage cleanouts, office renovations, or estate clearings leave the smallest carbon footprint possible. Whether you are searching for green disposal for old appliances or need a certified or trusted local no1 eco-friendly trash removal contractor for a commercial site, we provide the professional, reliable, and earth-friendly service you deserve. Let us help you clear the clutter while keeping Arizona beautiful. Contact us today for a free estimate and see why we are Scottsdale’s top choice for sustainable hauling.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
    description:
      "Junk Butlers is proud to be the leading choice for comprehensive hauling throughout the Valley of the Sun. As a premier junk or trash removal contractor, we extend our professional, same-day services to a wide range of communities, ensuring that both homeowners and businesses have access to reliable cleanup solutions. Our primary service hub includes Scottsdale, AZ, where we are known for high-quality residential and commercial cleanouts. However, our reach goes far beyond city limits.We provide expert debris hauling and furniture disposal in Phoenix, AZ, and the rapidly growing neighborhoods of Glendale, AZ. If you are located in the West Valley, our team frequently services Peoria, AZ, as well as the active adult communities in Sun City, AZ, and the family-friendly suburbs of Surprise, AZ. Whether you need a single appliance removed or a full-scale demolition cleanup, our local crews are strategically positioned to arrive on time and fully equipped. No matter where you are located in these major Arizona cities, Junk Butlers is your trusted partner for a clutter-free environmen",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Scottsdale AZ?",
    description:
      "Choosing the right partner for your cleanup project makes all the difference in efficiency and peace of mind. Junk Butlers stands out as the premier choice because we are a skilled and professional trusted trash removal or demolition services contractor in Scottsdale, AZ. We understand that our clients value transparency, punctuality, and hard work. When you hire our Junk Butlers team, you aren't just getting a truck; you are gaining access to a skilled and professional trusted trash removal or demolition services contractor that prioritizes safety and property protection.We offer a level of expertise that general laborers simply cannot match. From navigating tight indoor spaces during a residential furniture move to managing heavy debris on a commercial job site, we are the trash removal services contractor Scottsdale, AZ residents rely on for specialized care. Our commitment to the community is reflected in our eco-friendly disposal methods and our fair, upfront pricing model. As a skilled and professional trusted trash removal or demolition services contractor in Scottsdale, AZ, we handle the logistics from start to finish—loading, hauling, and recycling—so you can enjoy a clean space without lifting a finger. Choose the experts who put your needs first.",
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
