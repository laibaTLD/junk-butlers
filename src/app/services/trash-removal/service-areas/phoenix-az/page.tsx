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
  title: "Certified & Professional #1 Trash Removal Contractor Phoenix AZ",
  areaLabel: "Phoenix-az, az",
  description: "Say goodbye to clutter with Junk Butlers, your local and trusted residential or commercial trash removal and demolition contractor in Phoenix, AZ. We provide professional and affordable home and offices trash removal services, offering skilled debris removal and same-day furniture disposal.",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Our local and certified Junk Butlers team provides professional and trusted service for your Phoenix home."
    },
    {
      title: "Quick Response",
      description: "Need a professional and trusted same day trash removal contractor? We arrive fast in Phoenix, AZ."
    },
    {
      title: "24/7 Support",
      description: "Access professional and affordable home and offices trash removal services anytime you need skilled debris removal."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Phoenix AZ? - Same Day Junk Removal",
  paragraphs: [
    "When you need to clear the clutter, you deserve the professional local trash removal company in Phoenix, AZ, that prioritizes efficiency and reliability. As the trusted and premier home debris removal or hauling contractor in Phoenix, AZ, Junk Butlers specializes in reclaiming your space. Are you currently searching for a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ? Look no more. Our team serves as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, handling everything from minor yard waste to major site cleanups. We offer a certified appliance trash removal service Phoenix, AZ, ensuring your old electronics and hardware are disposed of responsibly.If you are struggling with a cluttered workspace, we are the local and affordable furniture or appliance disposal contractor Phoenix, AZ, businesses rely on for seamless transitions. Additionally, as a specialized garage junk removal contractor Phoenix, AZ, we transform chaotic storage areas into functional spaces overnight. Choosing Junk Butlers means partnering with a professional and trusted same day trash removal contractor Phoenix, AZ, dedicated to superior service. Whether it is residential debris or commercial waste, our local and certified home and offices trash or trash removal or furniture disposal Phoenix, AZ, team provides the expertise you need. Contact the professional junk hauling contractor today for a cleaner tomorrow."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in sun-city-az, AZ.",
  questions: [
    {
      question: "What services do Junk Butlers provide in Phoenix?",
      answer: "As a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, we handle everything. Our team excels as a trusted and premier home debris removal or hauling contractor in Phoenix, AZ, managing furniture, appliances, and construction waste for residential and commercial clients.",
    },
    {
      question: " Do you offer same-day trash removal services?",
      answer: "Yes! We are a professional and trusted same day trash removal contractor Phoenix, AZ, homeowners rely on for urgent needs. Whether you require a skilled trash cleanouts removal contractor or company in Phoenix, AZ, or immediate furniture hauling, Junk Butlers provides fast, reliable, and efficient service every single day.",
    },
    {
      question: "Are you licensed for commercial demolition projects?",
      answer: "Absolutely. We are an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ. Our crew acts as a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, ensuring all site cleanups meet strict safety and professional standards.",
    },
    {
      question: " How do you handle old appliance disposal?",
      answer: "We provide a certified appliance trash removal service Phoenix, AZ, focused on eco-friendly practices. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, Junk Butlers ensures your old refrigerators, washers, and dryers are recycled or disposed of properly, protecting the local Arizona environment for everyone.",
    },
    {
      question: "Which areas do you serve near Phoenix?",
      answer: "Junk Butlers is your local and trusted residential or commercial trash removal and demolition contractor in Phoenix, AZ. Beyond the city, we are the professional junk hauling contractor serving Peoria, Glendale, Scottsdale, and Surprise. We ensure every neighborhood has access to skilled and professional home or offices trash removal."
    }
  ]
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
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Phoenix AZ",
  subHeading: "",
  description: "As the professional and trusted same day trash removal contractor Phoenix, AZ, Junk Butlers delivers excellence. We are the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, providing affordable furniture or appliance disposa",
  ctaButton: { 
    label: "Get a Free Quote", 
    href: "#contact" 
  },
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Phoenix, AZ",
  },
  overlayText: "Our team understands the logistics of Glendale property management, making us the premier choice for both homeowners and business managers alike. When you need a skilled and professional home or offices junks or trash cleanout contractor, you need a team that values your time and maintains a clean workspace from start to finish. From demolition debris to office cubicle disposal, Junk Butlers handles it all. As a residential and commercial old furniture removal contractor, we ensure that your unwanted items are disposed of ethically and efficiently. Don't settle for less when you can hire the highest-rated experts in the Valley. Let us transform your space today with our reliable, high-capacity junk removal and demolition services."
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers is your premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ. From certified appliance trash removal service Phoenix, AZ, to local and affordable furniture disposal, we do it all. Trust our skilled trash cleanouts removal contractor or company in Phoenix, AZ, today.`,
  service:[
  {
      heading:"Hire Now Most Trusted Residential Household Trash Removal Contractor or Company Phoenix AZ",
      description:"Transform your living space today with Junk Butlers, the certified and trusted all kinds household removal or cleanouts contractor or company Phoenix, AZ. We understand that a cluttered home leads to a cluttered mind, which is why we serve as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, homeowners rely on for fast results. Our team isn't just a hauling service; we are a skilled trash cleanouts removal contractor or company in Phoenix, AZ, equipped to handle everything from heavy old furniture to overflowing attic debris.Whether you are prepping for a move or simply reclaiming your garage, our professional and trusted same day trash removal contractor Phoenix, AZ, team ensures a seamless experience. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, we guarantee eco-friendly disposal and superior customer care. Don't let junk hold you back—choose Phoenix’s top-rated experts for a spotless home environment."
  },
  {
    heading:"Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Phoenix AZ",
    description:"Maintain a professional edge with Junk Butlers, your local and trusted commercial offices cleanouts or business junk removal contractor or company in Phoenix, AZ. Efficient property management requires a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, capable of handling large-scale commercial waste without disrupting your operations. We are recognized as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, providing tailored solutions for retail spaces, corporate offices, and construction sites.Our reputation as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, stems from our commitment to speed and transparency. From certified appliance trash removal service Phoenix, AZ, to complete office de-branding and furniture hauling, we do it all. Trust the professional junk hauling contractor that Phoenix businesses prefer for maintaining clean, safe, and productive workspaces every single day."
  }
  ]
};
const OVERLAY_CARD_SECTION = {
  heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Phoenix AZ",
  description: `If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Phoenix AZ, your search ends with Junk Butlers. We pride ourselves on being the most reliable skilled & professional home or offices trash or trash cleanout contractor or company in Phoenix, AZ, offering a comprehensive suite of services tailored to your specific needs. Whether you are dealing with a cluttered estate, an overflowing warehouse, or a complex demolition project, our team provides the muscle and the strategy to get the job done right. As a dedicated residential & commercial old furniture removal contractor Phoenix AZ, we understand that moving heavy items like sofas, desks, and cabinets requires both care and efficiency.
We don't just haul things away; we act as a trusted and premier home debris removal or hauling contractor in Phoenix, AZ, ensuring every piece of waste is handled responsibly. From certified appliance trash removal service Phoenix, AZ, to full-scale garage junk removal, our experts maintain a clean job site from start to finish. Choosing Junk Butlers means hiring an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ. We are committed to being the local and affordable furniture or appliance disposal contractor Phoenix, AZ, that families and business owners trust for same-day service and unparalleled professionalism.
`,
  backgroundImage: {
    src: "/images/image-10.webp",
    alt: "Junk removal and demolition services in Phoenix, AZ",
  },
  secondImage: {
    src: "/images/image-2.webp",
    alt: "Professional junk removal team in Phoenix, AZ",
  }
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading: "Certified or Trusted Local No1 Eco-Friendly Trash or Trash Removal Contractor Phoenix AZ",
    description: "As the certified or trusted local no1 eco-friendly trash or trash removal contractor Phoenix AZ, Junk Butlers is dedicated to providing sustainable waste solutions for a cleaner community. We understand that modern property owners prioritize environmental responsibility, which is why we have established ourselves as the experienced high-qualified trash haulings services contractor Phoenix AZ. Our mission is to divert as much waste as possible from landfills by utilizing eco-conscious disposal methods, recycling protocols, and donation partnerships. Whether you are clearing out a residential property or managing a large-scale construction site, our team operates as a skilled and professional home or offices trash or trash cleanout contractor or company in Phoenix, AZ.We specialize in more than just hauling; we are a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, that understands the logistics of green disposal. From certified appliance trash removal service Phoenix, AZ, to hazardous debris management, we ensure every item is processed according to the highest industry standards. As a local and affordable furniture or appliance disposal contractor Phoenix, AZ, we offer a transparent, reliable, and earth-first approach to junk removal. Trust Junk Butlers to be your professional and trusted same day trash removal contractor Phoenix, AZ, providing the perfect balance of efficiency and ecological care for your next project.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
    description: "As the leading professional and trusted same day trash removal contractor Phoenix, AZ, Junk Butlers is proud to offer comprehensive coverage throughout the entire Valley. We have established ourselves as the premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, extending our top-tier services to several key locations. If you are looking for a skilled or professional all home and offices junk or trash removal contractor in Phoenix, AZ, or the surrounding suburbs, our team is ready to assist. We provide rapid response times in Peoria, AZ, and Sun City, AZ, ensuring that residents have access to a certified and trusted all kinds household removal or cleanouts contractor or company.Our reach as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, also covers the bustling areas of Glendale, AZ, and Surprise, AZ. Whether you need a local and affordable furniture or appliance disposal contractor or a skilled trash cleanouts removal contractor or company for a commercial project, we are just a phone call away. Furthermore, we serve as the trusted and premier home debris removal or hauling contractor in Scottsdale, AZ, delivering high-quality results for both luxury estates and local businesses. No matter where you are located, Junk Butlers remains the professional junk hauling contractor committed to keeping your neighborhood clean and clutter-free.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Phoenix AZ?",
    description: "When it comes to clearing out unwanted clutter, selecting the right partner is essential. Why choose Junk Butlers as your best provider? Because we are the skilled and professional trusted trash removal or demolition services contractor in Phoenix, AZ, dedicated to excellence in every project. Our reputation is built on reliability, transparency, and a deep commitment to our local community. Whether you are dealing with a massive renovation or a simple household cleanup, we bring the expertise required to handle the job safely and efficiently.As a premier and skilled residential or commercial buildings trash or trash removal contractor Phoenix, AZ, we offer more than just a truck and a crew; we provide a seamless experience from the moment you call for a quote until the final sweep-up. We pride ourselves on being the professional and trusted same day trash removal contractor Phoenix, AZ, residents rely on when time is of the essence. Our team is fully equipped as an experienced and trusted all kind trash or junk removal or demolition contractor or company in Phoenix, AZ, ensuring that even the toughest demolition debris is hauled away without a trace. Choose Junk Butlers for local and affordable furniture or appliance disposal and discover why we are the top-rated choice for quality and care.",
    image: "/images/image-7.webp",
    alt: "Junk Butlers team working on a cleanup project"
  }
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

