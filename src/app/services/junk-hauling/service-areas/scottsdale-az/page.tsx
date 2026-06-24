
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
  title: 'Professional Junk Hauling in Scottsdale AZ | Fast & Affordable Service',
  description: 'Junks Butlers offers reliable junk hauling services in Scottsdale, AZ. We provide efficient, eco-friendly removal of furniture, appliances, and household junk. Same-day service available. Get your free quote today!',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-hauling/service-areas/scottsdale-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Junk Hauling in Scottsdale AZ | Fast & Affordable Service',
    description: 'Junks Butlers offers reliable junk hauling services in Scottsdale, AZ. We provide efficient, eco-friendly removal of furniture, appliances, and household junk. Same-day service available. Get your free quote today!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Junk Hauling in Scottsdale AZ | Fast & Affordable Service',
    description: 'Junks Butlers offers reliable junk hauling services in Scottsdale, AZ. We provide efficient, eco-friendly removal of furniture, appliances, and household junk. Same-day service available. Get your free quote today!',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks and Trash Hauling Services Contractor Scottsdale, AZ",
  areaLabel: "Scottsdale, AZ",
  description:
    "Clear the clutter with Junk Butlers, your local and trusted choice for professional and affordable junk removal. From skilled furniture disposal to same-day office cleanouts, our certified team provides residential and commercial hauling you can count on.",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team at Junk Butlers provides polite, stress-free service for every client.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone now? We offer professional and trusted same day junk removal across Scottsdale.",
    },
    {
      title: "24/7 Support",
      description:
        "We provide professional home and office hauling assistance whenever you need it, day or night.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Garbage or Junks and Trash Hauling Services Contractor or Company in Scottsdale AZ? - Same Day Junk Removal or Hauling",
  paragraphs: [
    "Finding a reliable partner for your property cleanout shouldn't be a hassle. If you are searching for a professional and trusted garbage or junks and trash hauling services contractor in Scottsdale, Junk Butlers is here to deliver. As a professional local junks and trash hauling services company in Scottsdale AZ, we specialize in clearing out clutter with speed and precision. Whether you need an experienced and trusted all kind trash or junk removal or demolition contractor, or a skilled or professional all home and offices junk or junks and trash hauling services contractor in Scottsdale AZ, our team manages the heavy lifting so you don't have to. We are recognized as a trusted and premier home debris removal or hauling contractor in Scottsdale AZ, providing specialized solutions like certified appliance junks and trash clean outs services. From being a local and affordable furniture or appliance disposal hauling contractor to serving as your best garage junk removal contractor Scottsdale AZ, we handle everything from single items to full-scale property renovations. Our same day junk removal or hauling ensures that your space is reclaimed instantly, combining efficiency with a commitment to eco-friendly disposal. Don't let unwanted debris settle; choose the experts who understand the specific needs of Scottsdale residents and business owners alike.",
  ],
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers offers the most reliable solutions in the valley. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Scottsdale AZ, we handle skilled trash cleanouts, furniture disposal, and certified appliance removal. From estates to offices, we ensure a clean, clutter-free space every time.`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks and Trash Hauling Services Contractor or Company Scottsdale AZ",
    
description:"Transform your living space with Junk Butlers, your certified and trusted all kinds household removal or junks hauling contractor or company Scottsdale AZ. We understand that clutter can accumulate quickly, which is why we offer comprehensive solutions tailored to your home. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Scottsdale AZ, we handle everything from old mattresses and broken appliances to heavy furniture and basement debris. Our team is recognized as a skilled trash cleanouts removal contractor or company in Scottsdale AZ, ensuring that every inch of your property is left spotless and organized. We prioritize eco-friendly disposal methods, recycling and donating whenever possible to keep Scottsdale beautiful. Whether you are prepping for a move or simply reclaiming your garage, our professional crew provides the muscle and the strategy to eliminate stress. Choose the local experts who treat your home with total respect and efficiency.",
 },
{
 heading:"Local & Trusted Commercial offices and Stores Junks hauling services Contractor or Company in Scottsdale AZ",

description:"Running a successful business requires a clean, professional environment, and Junk Butlers is the local & trusted partner you need for maintaining that standard. As a premier and skilled residential or commercial buildings trash or junks hauling services contractor Scottsdale AZ, we specialize in the rapid removal of office furniture, old electronics, and retail fixtures. We are the skilled trash cleanouts removal contractor or company in Scottsdale AZ that business owners rely on for minimal disruption to their daily operations.From warehouse cleanouts to routine store debris management, we act as your certified and trusted all kinds household removal or junks hauling contractor or company Scottsdale AZ—extending our high-tier expertise to the corporate world. We offer flexible scheduling, including after-hours services, to ensure your workspace stays productive. Trust our experienced team to handle the heavy lifting and disposal logistics, allowing you to focus entirely on growing your business in the heart of Scottsdale."
}
  ]
};

const CTA_DATA = {
  heading:
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks and Trash Hauling Services Company or Agency Scottsdale AZ",
  subHeading: "",
  description:
    "Experience the gold standard with Junk Butlers. As Scottsdale’s skilled trash cleanouts removal contractor, we provide certified and trusted hauling for homes and offices. From furniture to debris, our premier team ensures fast, affordable, and professional results every single time.",
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
    "Looking for a Skilled and Top-Rated Home and Offices Furniture or All Kind Junk Hauling or Demolition Contractor Scottsdale AZ",
  description: `If you are looking for a skilled and top rated home and offices furniture or all kind junk hauling or demolition contractor Scottsdale AZ, look no more than the dedicated team at Junk Butlers. Reclaiming your space is easy with our skilled & professional home or offices trash or trash hauling contractor or company in Scottsdale AZ, providing seamless transitions for both families and business owners. We pride ourselves on being the best residential & commercial old furniture removal contractor Scottsdale AZ, equipped to handle bulky sofas, heavy desks, and outdated office workstations with total care. Beyond simple pickups, we function as a comprehensive demolition contractor, safely dismantling structures to prepare your property for its next chapter.
Our reputation as a skilled and top rated service provider stems from our commitment to punctuality, fair pricing, and meticulous cleanup. Whether you are clearing out a cluttered attic, upgrading a retail storefront, or managing a full-scale estate renovation, Junk Butlers delivers the professional muscle required. We bridge the gap between heavy-duty hauling and delicate customer service, ensuring that every piece of debris or unwanted furniture is disposed of or recycled according to the highest industry standards. Trust Scottsdale’s premier agency to revitalize your environment and provide the "No. 1" hauling experience you deserve today.
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
      "Certified or Trusted Local No1 Residential or Commercial Trash or Junks Hauling Services Contractor Scottsdale AZ",
    description:
      "When you need a certified or trusted local no1 residential or commercial trash or junks hauling services contractor Scottsdale AZ, you need a partner who understands the importance of a clean environment. Junk Butlers has built a reputation for excellence by delivering consistent, high-quality results for property owners across the region. As an experienced high-qualified clean outs services contractor Scottsdale AZ, we specialize in managing the logistical challenges that come with large-scale property clearances. Whether you are dealing with a cluttered residential garage, a full estate cleanout, or a demanding commercial warehouse project, our team possesses the tools and expertise to execute the job flawlessly. Being a certified or trusted provider means we don't just haul away your items; we prioritize safety, efficiency, and environmental responsibility. Our No1 residential or commercial trash or junks hauling services are designed to meet the unique needs of the Scottsdale community, offering flexible scheduling and transparent pricing. From the initial consultation to the final sweep-up, Junk Butlers operates with the precision of an experienced high-qualified clean outs services contractor. We take pride in being a local agency that neighbors can rely on for everything from construction debris to everyday household waste. Choose the No1 team in Scottsdale to ensure your property is handled by true professionals who value your time and your space.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk and Trash Hauling Services Contractor",
    description:
      "Junk Butlers is proud to be the premier choice for comprehensive cleanup solutions throughout the Valley, serving as your dedicated major junk and trash hauling services contractor across a wide geographic reach. Our specialized teams are strategically positioned to provide rapid, same-day service in Scottsdale AZ, ensuring that local residents and businesses receive the elite care they expect. Beyond Scottsdale, we have expanded our service footprint to meet the growing demand for professional hauling in Phoenix AZ, where we manage everything from high-rise office cleanouts to residential debris removal. We are also the trusted experts for homeowners in Peoria AZ and the neighboring community of Sun City AZ, offering sensitive and efficient estate clearing and furniture disposal. Our commitment to excellence extends into Glendale AZ, providing top-tier commercial and residential support, as well as Surprise AZ, where we help growing families and new businesses maintain clutter-free environments. No matter where you are located within these primary service areas, Junk Butlers guarantees a seamless experience, combining local knowledge with the industrial-strength equipment necessary for any size job. From the heart of the city to the suburban reaches, we remain the most reliable name for keeping Arizona clean, organized, and junk-free.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Junks and Trash Hauling Services Contractor Scottsdale AZ?",
    description:
      "Choosing the right partner for your property needs is essential for a stress-free experience. Junk Butlers stands out as the premier choice because we combine local expertise with a commitment to total customer satisfaction. As a skilled and professional trusted junks and trash clean outs services or demolition services contractor in Scottsdale AZ, we possess the heavy-duty equipment and the refined techniques required to handle even the most daunting projects. Whether you are looking for a simple household pickup or a complex structural teardown, our team operates with the precision and safety expected of a top-tier services contractor. We aren't just a hauling company; we are a full-service agency dedicated to reclaiming your space. Our reputation as a skilled and professional trusted provider is built on our punctuality, transparent pricing, and eco-friendly disposal practices. From residential estates to large-scale commercial sites, Junk Butlers ensures that every job is completed to the highest industry standards. When you choose us, you are choosing a contractor or company that treats your property with the utmost respect while delivering the efficient, 'No. 1' results that Scottsdale residents and business owners have come to rely on.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working in Sun City, AZ",
  },
};

const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Find clear answers about our junk and trash hauling services in Scottsdale, AZ.",
  questions: [
    {
      question: "What types of items do Junk Butlers haul away?",
      answer:
        "As a skilled and professional trusted provider, Junk Butlers hauls everything from old furniture and broken appliances to construction debris. Whether you need a garage junk removal contractor Scottsdale AZ or a team to clear out commercial office waste, our certified experts handle the heavy lifting for you safely.",
    },
    {
      question: "Do you offer same-day junk removal in Scottsdale?",
      answer:
        "Yes! We are a professional and trusted same day junks and trash removal services contractor Scottsdale AZ. We understand that clutter can be urgent, so our local teams prioritize fast response times to ensure your residential or commercial property is cleared of unwanted junks and trash immediately.",
    },
    {
      question: "Are your hauling and demolition services fully certified?",
      answer:
        "Absolutely. We are a certified or trusted local No1 residential or commercial contractor. Junk Butlers maintains all necessary licenses and insurance for both standard hauling and complex demolition services. You can trust our experienced high-qualified clean outs services contractor team to manage every project with total professional safety.",
    },
    {
      question: "How do you determine your hauling service prices?",
      answer:
        "Our pricing is professional and affordable. As a local and trusted agency, we provide transparent quotes based on the volume of debris and the type of items being removed. Whether it’s furniture disposal Scottsdale AZ or a full office cleanout, we ensure you receive the most competitive rates.",
    },
    {
      question: "Which areas do you serve besides Scottsdale?",
      answer:
        "Beyond being a premier junks and trash hauling services contractor Scottsdale AZ, we serve the entire Valley. Our team provides expert removal in Phoenix, Peoria, Glendale, Surprise, and Sun City. Wherever you are, Junk Butlers delivers the most skilled and professional junk hauling and cleanout services available.",
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
