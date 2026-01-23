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
  title: "Certified & Professional #1 Trash Removal Contractor Sun City AZ",
  areaLabel: "sun-city, az",
  description: "Trust Junk Butlers for professional and affordable home and offices trash removal. Our skilled team provides local, same-day residential or commercial trash removal and demolition. From furniture disposal to debris hauling, we are your trusted, certified local experts.",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Junk Butlers provides courteous, professional service. Our local sun-city-az team treats your home with total respect."
    },
    {
      title: "Quick Response",
      description: "Need it gone now? We offer same-day trash removal and rapid debris hauling across sun-city-az, AZ."
    },
    {
      title: "24/7 Support",
      description: "Our trusted junk hauling experts are available around the clock for all your urgent disposal needs."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Sun City AZ? - Same Day Junk Removal",
  paragraphs: [
    "When you need to clear the clutter, choosing a professional and trusted garbage or trash removal contractor in Sun City, AZ makes all the difference. At Junk Butlers, we pride ourselves on being the premier local choice for high-quality, same day junk removal. As a skilled and professional all home and offices junk or trash removal contractor in Sun City, AZ, our team is equipped to handle everything from minor household hauls to large-scale commercial cleanouts. We are recognized as a professional local trash removal company in Sun City, AZ, committed to maintaining the beauty of our community. Whether you are dealing with a renovation or a move, we act as your trusted and premier home debris removal or hauling contractor in Sun City, AZ.Our specialized expertise includes being a certified appliance trash removal service Sun City, AZ, ensuring your old refrigerators and dryers are disposed of responsibly. For those seeking a local and affordable furniture or appliance disposal contractor Sun City, AZ, we offer competitive pricing without sacrificing quality. As an experienced and trusted all kind trash or junk removal or demolition contractor or company in Sun City, AZ, we manage heavy-duty tasks including shed teardowns and construction site clearing. From acting as your dedicated garage junk removal contractor Sun City, AZ to hauling away office electronics, Junk Butlers delivers efficiency and peace of mind."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in sun-city-az, AZ.",
  questions: [
    {
      question: "What areas do you provide trash removal services?",
      answer: "Junk Butlers is your premier local hauling expert. We serve as a professional trash removal contractor in Sun City, AZ, but our reach extends to Peoria, Glendale, Surprise, Scottsdale, and Phoenix. We provide rapid, same-day residential and commercial cleanouts throughout the West Valley and the entire Phoenix metropolitan area.",
    },
    {
      question: "Are you a certified and insured demolition contractor?",
      answer: "Yes. We are a certified and trusted all kinds removal or demolition contractor in Sun City, AZ. Our team is fully insured and highly trained to handle safe residential teardowns, garage demolition, and office gut-outs. We prioritize safety and professionalism on every job site, ensuring total peace of mind.",
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer: "Absolutely. As a professional and trusted same day trash removal contractor in Sun City, AZ, we understand that clutter can be an emergency. Contact Junk Butlers today for prompt, reliable service. We specialize in fast turnarounds for furniture disposal, debris hauling, and urgent estate or office cleanouts.",
    },
    {
      question: " How do you handle eco-friendly waste disposal?",
      answer: "We are the No1 eco-friendly trash removal contractor in Sun City, AZ. Junk Butlers is committed to sustainability by sorting every haul. We recycle metals, donate usable furniture, and ensure appliances are disposed of according to environmental regulations, keeping Sun City clean and reducing local landfill waste.",
    },
    {
      question: "Can you handle large commercial office cleanouts?",
      answer: "Yes. We are a local and trusted commercial business junk removal contractor in Sun City, AZ. Our team has the manpower and equipment to clear out warehouses, retail spaces, and corporate offices. From electronic waste to heavy office furniture, we provide efficient, professional hauling tailored to your business."
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
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Sun City AZ",
  subHeading: "",
  description: "Experience top-rated service with Junk Butlers, the premier choice for professional hauling. As your No1 trash removal company in Sun City, AZ, we provide skilled residential and commercial cleanouts. Trust our certified team for affordable, same-day debris removal and expert disposal.",
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
  description: `Junk Butlers provides the premier solution for all your hauling needs. As a skilled trash cleanouts removal contractor in Sun City, AZ, we offer expert residential furniture disposal, certified appliance removal, and comprehensive commercial office cleanouts. Trust our local team for affordable, same-day service tailored to your home or business.".`,
  service:[
  {
      heading:"Hire Now Most Trusted Residential Household Trash Removal Contractor in Sun City, AZ",
      description:"Reclaim your living space today with Junk Butlers, the most reliable name for home decluttering. As a certified and trusted all kinds household removal or cleanouts contractor or company in Sun City, AZ, we understand that unwanted clutter can become overwhelming. Whether you are dealing with years of accumulated basement storage, a sudden move, or a messy renovation, we are the premier and skilled residential or commercial buildings trash removal contractor in Sun City, AZ that homeowners rely on for efficiency.Our team operates as a skilled trash cleanouts removal contractor or company in Sun City, AZ, ensuring that every room in your home—from the attic to the garage—is left spotless. We don't just haul away bags; we provide a comprehensive service that handles heavy furniture, old appliances, and general household debris. When you hire Junk Butlers, you are choosing a team dedicated to eco-friendly disposal and professional care, making us the top-rated choice for residents seeking a stress-free environment."
  },
  {
    heading:"Local & Trusted Commercial Office Cleanouts or Business Junk Removal Contractor in Sun City, AZ",
    description:"In the fast-paced world of business, physical clutter can hinder productivity and professional image. Junk Butlers serves as your local and trusted commercial office cleanouts or business junk removal contractor in Sun City, AZ. We specialize in assisting property managers, office administrators, and retail owners with high-volume debris management. As a premier and skilled residential or commercial buildings trash removal contractor in Sun City, AZ, we offer the logistics and manpower necessary to clear out entire office suites, warehouses, or storefronts with minimal disruption to your daily operations.We are a skilled trash cleanouts removal contractor or company in Sun City, AZ that understands the specific needs of local businesses, including timely service and transparent pricing. From outdated office furniture and electronic waste to construction debris, our certified and trusted all kinds household removal or cleanouts contractor or company in Sun City, AZ expertise extends to the professional sector. Trust Junk Butlers to maintain your workspace's professional standards through reliable, certified, and thorough commercial hauling solutions tailored to the Sun City business community."
  }
  ]
};
const OVERLAY_CARD_SECTION = {
  heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Sun City AZ",
  description: `If you are overwhelmed by clutter or debris, finding a skilled and top rated home and offices trash or junk removal demolition contractor in Sun City, AZ is the first step toward a clean property. At Junk Butlers, we specialize in providing comprehensive hauling solutions that cater to both homeowners and business managers. As a skilled & professional home or offices trash or trash cleanout contractor or company in Sun City, AZ, we take the heavy lifting off your shoulders, ensuring every project is handled with precision and care. Whether you are renovating a kitchen or clearing out a corporate suite, our team excels as a residential & commercial old furniture removal contractor in Sun City, AZ.We understand that disposing of bulky items like sofas, desks, and filing cabinets requires the right equipment and manpower. Junk Butlers is committed to excellence, offering more than just simple pickup; we are an all-in-one demolition and hauling resource. From garage cleanouts to light demolition work, we stand out as the skilled and top rated home and offices trash or junk removal demolition contractor in Sun City, AZ that the community trusts for efficiency. Let our skilled & professional home or offices trash or trash cleanout contractor or company help you reclaim your space with affordable rates and unmatched local reliability.
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
    heading: "Certified or Trusted Local No1 Eco Friendly Trash or Trash Removal Contractor Sun City AZ ",
    description: "Choosing a certified or trusted local No1 eco-friendly trash or trash removal contractor in Sun City, AZ means prioritizing both your property’s cleanliness and the environment. At Junk Butlers, we are dedicated to sustainable disposal practices that keep our community clean and green. We don’t just dump your unwanted items in a landfill; as the leading eco-friendly trash removal contractor, we carefully sort through every haul to recycle, repurpose, or donate as much as possible. Our reputation as an experienced high-qualified trash haulings services contractor in Sun City, AZ has been built on years of reliable, professional service.Whether you are clearing out a residential estate or managing a large commercial renovation, Junk Butlers provides the specialized equipment and manpower needed to get the job done right. We understand that our clients look for a certified or trusted local No1 eco-friendly trash or trash removal contractor in Sun City, AZ because they value transparency and responsibility. When you partner with our experienced high-qualified trash haulings services contractor, you receive a seamless experience from the initial quote to the final sweep-up. We handle everything from heavy debris to everyday household waste with the highest level of professionalism. Trust Junk Butlers to be your best partner for responsible hauling, ensuring your space is cleared efficiently while minimizing your environmental footprint in Sun City.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Our Services Areas for All Major Junk & Trash Removal Contractor",
    description: "As the region’s premier hauling specialists, Junk Butlers is proud to provide extensive coverage across the Valley, serving as the best service areas for all major junk or trash removal contractor needs. Our team is strategically positioned to offer rapid, same-day assistance to residents in Sun City, AZ, where we have established ourselves as the most trusted local experts for residential and commercial cleanouts. We also provide comprehensive debris hauling and furniture disposal for clients in Peoria, AZ, ensuring that both suburban homes and local businesses remain clutter-free.Our professional reach extends to the bustling neighborhoods of Glendale, AZ, and the rapidly growing communities in Surprise, AZ, where we handle everything from estate liquidations to construction site demolition. For those seeking high-end, efficient removal services in the East Valley, we are the preferred choice in Scottsdale, AZ, offering meticulous attention to detail and eco-friendly disposal. Additionally, we serve the entire Phoenix, AZ metropolitan area, providing the heavy-duty manpower required for large-scale urban projects. No matter where you are located within these primary service zones, Junk Butlers delivers the same certified, high-quality, and affordable trash removal solutions that our reputation is built upon.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Sun City AZ?",
    description: "When choosing the right partner for your property cleanup, you need a team that combines reliability with expert execution. So, why choose Junk Butlers contractor or company for your trash removal services contractor in Sun City, AZ? The answer lies in our unwavering commitment to quality and community trust. As a skilled and professional trusted trash removal or demolition services contractor in Sun City, AZ, we understand the unique needs of local residents and business owners alike. At Junk Butlers, we don’t just haul away waste; we provide a comprehensive service experience designed to save you time and stress.Whether you are dealing with a complex estate cleanout or a heavy-duty structural teardown, our status as a skilled and professional trusted trash removal or demolition services contractor in Sun City, AZ ensures that your project is handled safely and efficiently. We utilize modern equipment and eco-friendly disposal methods to provide a superior alternative to standard hauling companies. Our local expertise allows us to offer prompt, same-day scheduling and transparent, affordable pricing. By choosing Junk Butlers, you are investing in a cleaner, safer environment and a team that treats every property with the highest level of professional respect.",
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

