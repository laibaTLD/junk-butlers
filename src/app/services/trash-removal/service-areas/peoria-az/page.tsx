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
  title: "Certified & Professional #1 Trash Removal Contractor Peoria AZ",
  areaLabel: "Peoria, AZ",
  description: "Reclaim your space with Junk Butlers, the #1 professional and affordable home and office trash removal contractor in Peoria, AZ. Our skilled team provides same-day, certified junk hauling and demolition.",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Junk Butlers provides courteous, professional service. Our local Peoria team treats your home with total respect."
    },
    {
      title: "Quick Response",
      description: "Need it gone now? We offer same-day trash removal and rapid debris hauling across Peoria, AZ."
    },
    {
      title: "24/7 Support",
      description: "Our trusted junk hauling experts are available around the clock for all your urgent disposal needs."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Peoria AZ? - Same Day Junk Removal",
  paragraphs: [
    "junk removal contractor Peoria, AZ services. If you have old electronics or heavy machinery, our certified appliance trash removal service Peoria, AZ ensures eco-friendly disposal.We understand that budget and timing are critical, which is why we are recognized as a local and affordable furniture appliance disposal contractor Peoria, AZ, offering transparent pricing without hidden fees. As an experienced and trusted all kind trash junk removal demolition contractor company in Peoria, AZ, we handle the heavy lifting, loading, and hauling so you don’t have to. From residential renovations to massive commercial cleanouts, our same-day junk removal options provide the immediate relief you need. Choose the experts who prioritize your satisfaction and the local environment—contact Junk Butlers today for a cleaner, junk-free tomorrow."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in Glendale, AZ.",
  questions: [
    {
      question: " What types of items can Junk Butlers remove?",
      answer: "As a skilled and professional trash removal contractor in Peoria, AZ, we handle almost everything. From residential furniture disposal and old appliances to construction debris and commercial office equipment, Junk Butlers manages the heavy lifting. We ensure all items are disposed of through certified and eco-friendly channels.",
    },
    {
      question: " Do you offer same-day junk removal in Peoria?",
      answer: "Yes! We pride ourselves on being a professional and trusted same-day trash removal contractor Peoria, AZ. We understand that clutter can be urgent. Contact Junk Butlers early in the day, and our local hauling experts will work to clear your space before the sun sets.",
    },
    {
      question: "Are you a licensed and insured demolition contractor?",
      answer: "Absolutely. Junk Butlers is a certified and trusted all-kind trash removal and demolition contractor in Peoria, AZ. Whether it’s removing a shed or an interior office tear-out, our skilled team follows strict safety protocols and carries full insurance to protect your home or business property",
    },
    {
      question: "How does your pricing for trash removal work?",
      answer: "We are recognized as a local and affordable furniture and appliance disposal contractor in Peoria, AZ. Our pricing is based on the volume your junk occupies in our trucks. Junk Butlers provides transparent, upfront quotes without hidden fees, ensuring you get premier and skilled service at a fair price.",
    },
    {
      question: "Which areas does Junk Butlers serve besides Peoria?",
      answer: "Beyond being the #1 trash removal contractor in Peoria, AZ, we serve the entire valley. Our high-qualified trash hauling teams regularly assist clients in Sun City, Glendale, Surprise, Scottsdale, and Phoenix. No matter where you are located, Junk Butlers delivers reliable, local, and trusted disposal services."
    }
  ]
};

const CTA_DATA = {
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Peoria AZ",
  subHeading: "",
  description: "Experience the gold standard with Junk Butlers, your professional and trusted same-day trash removal contractor in Peoria, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, junk-free space with our certified hauling expertise.",
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
  description: `Junk Butlers offers comprehensive solutions for every cleanup challenge. As a skilled trash cleanouts removal company in Peoria, AZ, we provide professional and affordable residential hauling, commercial office cleanouts, and certified appliance disposal. From furniture removal to construction debris, our trusted team ensures a clutter-free space with same-day service.".`,
  service:[
  {
      heading:"Hire Now the Most Trusted Residential Household Trash Removal Contractor in Peoria, AZ",
      description:"When clutter takes over your home, you need a certified and trusted all-kinds household removal cleanouts contractor in Peoria, AZ, to restore order. Junk Butlers specializes in comprehensive residential solutions, ranging from single-item pickups to full-scale estate clearing. As a premier and skilled residential trash removal contractor in Peoria, AZ, we understand that your home is your sanctuary. Our team is trained to handle delicate situations with professionalism, ensuring that old furniture, broken appliances, and accumulated debris are removed without damaging your property.We pride ourselves on being a skilled trash cleanouts removal company in Peoria, AZ, that prioritizes eco-friendly disposal methods. Whether you are prepping for a move or simply reclaiming your garage, our local experts provide the heavy lifting and efficient hauling you deserve. Don't let household waste diminish your quality of life; choose Peoria’s favorite residential team for a spotless, stress-free home environment today."
  },
  {
    heading:"Local & Trusted Commercial Office Cleanouts & Business Junk Removal Company in Peoria, AZ",
    description:"Maintaining a productive workspace requires a clutter-free environment, and Junk Butlers is the local and trusted commercial office cleanouts business junk removal company in Peoria, AZ, that local enterprises rely on. We serve as a premier and skilled commercial buildings trash removal contractor in Peoria, AZ, offering tailored logistics for retail spaces, corporate offices, and construction sites. Our team works around your schedule to ensure minimal disruption to your daily operations, providing a seamless transition during office moves or renovations.As a certified and trusted all-kinds removal contractor in Peoria, AZ, we handle everything from electronic e-waste and office furniture to large-scale industrial debris. Our reputation as a skilled trash cleanouts removal contractor in Peoria, AZ, is built on reliability, transparent pricing, and rapid response times. Protect your professional image and improve workplace safety by partnering with a hauling company that understands the unique demands of the Peoria business community."
  }
  ]
};
const OVERLAY_CARD_SECTION = {
  heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Glendale AZ",
  description: `If you are searching for a skilled and top rated home and offices trash or junk removal demolition contractor Glendale AZ, your search ends with Junk Butlers. We pride ourselves on being the most reliable solution for property owners who demand excellence and efficiency. As a skilled & professional home or offices junks or trash cleanout contractor or company in Glendale AZ, we understand the logistics required to clear out cluttered spaces, from high-rise office buildings to cozy suburban homes. Our team excels as a residential & commercial old furniture removal contractor Glendale AZ, handling heavy lifting and disposal so you don’t have to.
Whether you are dealing with a renovation project that requires expert demolition or simply need to clear out years of accumulated household items, Junk Butlers delivers a seamless experience. We combine technical skill with a commitment to local environmental standards, ensuring that your debris is managed responsibly. By choosing a skilled and top rated home and offices trash or junk removal demolition contractor Glendale AZ, you are investing in a cleaner, safer property. We offer transparent pricing, rapid response times, and the professional muscle needed for even the toughest hauling jobs. Let our experts transform your cluttered environment into a pristine, functional space today. Contact us now to see why we are the preferred choice for Glendale's elite junk removal.
.
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

const SERVICE_AREAS = {
  areas: [
    {
      city: "Peoria",
      region: "AZ",
      description: "Professional trash removal services in Peoria, AZ"
    },
    {
      city: "Phoenix",
      region: "AZ",
      description: "Certified junk removal services in Phoenix, AZ"
    },
    {
      city: "Glendale",
      region: "AZ",
      description: "Affordable trash hauling in Glendale, AZ"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Reliable junk removal in Scottsdale, AZ"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Senior-friendly trash removal in Sun City, AZ"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Same-day junk removal in Surprise, AZ"
    }
  ]
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Peoria AZ",
    description: "When you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor in Peoria, AZ, you need a team that combines technical expertise with local reliability. Junk Butlers stands out as the premier choice, offering comprehensive solutions for both interior cleanouts and light demolition projects. As a skilled and professional home or offices trash cleanout contractor in Peoria, AZ, we understand the unique challenges of clearing out large properties. Whether you are stripping a room down to the studs or simply need a massive amount of debris hauled away, our crew manages every phase with precision and safety.We take pride in being a versatile residential and commercial old furniture removal contractor in Peoria, AZ, ensuring that bulky items like desks, cubicles, sofas, and filing cabinets are removed without disrupting your day. Our demolition services are perfect for homeowners renovating a kitchen or businesses updating their retail layout. By choosing Junk Butlers, you are partnering with a skilled and professional company that prioritizes eco-friendly disposal and site safety. From the initial heavy lifting to the final sweep-up, we provide a seamless experience that restores the value and functionality of your property. Don’t settle for less—hire Peoria’s most trusted experts for a clutter-free and professional result every time.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Certified or Trusted Local No1 Eco Friendly Trash or Trash Removal Contractor Peoria AZ",
    description: "In today’s environmentally conscious world, choosing a certified or trusted local #1 eco-friendly trash removal contractor in Peoria, AZ, is more than just a matter of convenience—it’s about community responsibility. Junk Butlers leads the way by implementing sustainable disposal practices that keep our local landfills from overflowing. As an experienced high-qualified trash haulings services contractor in Peoria, AZ, we don’t just dump your items; we carefully sort through every load to identify recyclables, salvageable materials, and items that can be donated to local charities.Our commitment to being a certified and trusted provider means we stay updated on the latest environmental regulations and green disposal methods. When you hire Junk Butlers, you are supporting a local #1 eco-friendly mission that prioritizes the planet alongside efficiency. Whether we are clearing out a residential garage or managing a large-scale commercial site, our high-qualified trash haulings team ensures that your unwanted items are handled with the highest ethical standards. We take the guesswork out of green living by providing a seamless, professional experience that leaves your property spotless and your conscience clear. For reliable, earth-friendly solutions that don't compromise on power or speed, trust Peoria’s premier hauling experts to get the job done right.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Our Services Areas for All Major Junk & Trash Removal Contractor",
    description: "Choosing the right partner for your property cleanout is essential for a stress-free experience, and that is exactly why so many residents and business owners turn to Junk Butlers. As a skilled and professional trusted trash removal or demolition services contractor in Peoria, AZ, we have built our reputation on a foundation of reliability, transparency, and unmatched work ethic. When you choose us, you aren't just hiring a truck; you are hiring a dedicated team that understands the logistics of efficient hauling and safe demolition. Junk Butlers stands out from the competition by offering a unique blend of affordability and high-end service.We realize that every project—from a simple furniture pickup to a complex site demolition—requires a tailored approach. Our status as a skilled and professional agency means we arrive on time, provide upfront pricing, and utilize the best equipment to ensure the job is done safely and quickly. Furthermore, being a trusted trash removal contractor in Peoria, AZ, means we are fully licensed and insured, giving you total peace of mind while we work on your property. We treat your home or office with the utmost respect, ensuring a thorough cleanup that leaves your space ready for its next chapter.",
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

export default async function TrashRemovalPeoriaPage() {
  const landingPageData = await getLandingPageData();  const servicesImages = landingPageData.images?.filter((img: { slotName: string }) => img.slotName.includes("services")) || [];

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