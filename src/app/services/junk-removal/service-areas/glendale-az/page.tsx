
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
  title: "Certified & Professional #1 Junks Removal Contractor Glendale AZ",
  areaLabel: "Glendale, AZ",
  description: "Clear the clutter with Junk Butlers, your local and trusted residential or commercial junk removal and demolition contractor in Glendale, AZ. We provide professional and affordable same-day hauling for homes and offices. Certified, skilled, and ready to serve!",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Our certified Junk Butlers provide professional, courteous service making your residential or commercial cleanout completely stress-free."
    },
    {
      title: "Quick Response",
      description: "Need same-day trash removal? Our skilled Glendale team arrives fast to handle your junk hauling immediately."
    },
    {
      title: "24/7 Support",
      description: "We offer trusted, 24/7 junk and debris removal assistance for every home or office in Glendale."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Glendale AZ? - Same Day Junk Removal",
  paragraphs: [
    "If you are searching for a professional and trusted junk or trash removal contractor or company in Glendale, AZ, look no more than Junk Butlers. As the trusted and premier home debris removal or hauling contractor in Glendale, AZ, we specialize in reclaiming your space with efficiency and care. Whether you need a skilled or professional all home and offices junk or trash removal contractor in Glendale, AZ, or an experienced and trusted all kind trash or junk removal or demolition contractor or company in Glendale, AZ, our team delivers results. We are recognized as a professional local trash removal company in Glendale, AZ, offering everything from specialized garage junk removal contractor Glendale, AZ services to a certified appliance junks removal service Glendale, AZ.Reclaim your square footage with a local and affordable furniture or appliance disposal contractor Glendale, AZ that prioritizes eco-friendly disposal and client satisfaction. Our same day junk removal ensures that your property transitions from cluttered to pristine in record time. From heavy demolition debris to unwanted household items, we provide the muscle and the logistics to handle the job safely. Don’t settle for less when you can hire the best in the valley. Choose the experts who understand the unique needs of Arizona residents and business owners alike. Contact us today for a free quote!"
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in Glendale, AZ.",
  questions: [
    {
      question: "What services does Junk Butlers offer in Glendale?",
      answer: "unk Butlers is your premier choice for comprehensive hauling. As a skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, we handle residential furniture, commercial office cleanouts, and construction debris. Our certified team ensures every item is disposed of responsibly, providing a stress-free experience for homeowners.",
    },
    {
      question: " Do you provide same-day junk removal services?",
      answer: "Yes! We are a professional and trusted same day trash removal contractor Glendale AZ homeowners rely on for urgent needs. Whether you have sudden move-out clutter or unexpected debris, our team responds quickly. We prioritize efficiency to ensure your property is cleared fast, maintaining our reputation for rapid, reliable service.",
    },
    {
      question: "Are your junk removal services eco-friendly?",
      answer: "Absolutely. As a certified or trusted local No1 eco-friendly junks or trash removal contractor Glendale AZ, we prioritize sustainability. We sort through every load to donate usable items and recycle materials like metal and electronics. Our goal is to minimize landfill waste while providing top-tier hauling for the community.",
    },
    {
      question: "Can you handle large commercial office cleanouts?",
      answer: "Yes, we are a local and trusted residential or commercial junks removal and demolition contractor in Glendale AZ. We specialize in business liquidations, removing old desks, cubicles, and E-waste. Our professional crew works around your schedule to ensure minimal disruption to your daily operations, providing a clean, productive workspace.",
    },
    {
      question: "Why should I hire a professional contractor?",
      answer: "Hiring a skilled or professional all home and offices junk or trash removal contractor in Glendale AZ ensures safety and efficiency. We possess the proper equipment and insurance to handle heavy lifting and demolition. Junk Butlers saves you time and physical labor, delivering a pristine environment with expert care."
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
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Glendale AZ",
  subHeading: "",
  description: "Experience the best with Junk Butlers, the premier and skilled residential or commercial buildings junks or trash removal contractor Glendale AZ. We provide certified and trusted all kinds household removal or cleanouts, delivering professional, affordable, and rapid hauling solutions today!",
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
  description: `Junk Butlers is the premier and skilled residential or commercial buildings junks or trash removal contractor Glendale AZ. From certified and trusted all kinds household removal or cleanouts to skilled junks cleanouts removal for businesses, we do it all. Trust our experts for affordable, professional hauling tailored to your needs".`,
  service:[
  {
      heading:"Hire Now Most Trusted Residential Household Junks Removal Contractor or Company Glendale AZ",
      description:"When clutter takes over your living space, you need the premier and skilled residential or commercial buildings junks or trash removal contractor Glendale AZ homeowners trust. Junk Butlers is your trusted partner for reclaiming your home from unwanted debris. As a certified and trusted all kinds household removal or cleanouts contractor or company Glendale AZ, we handle everything from heavy furniture and old appliances to general garage overflow.Our team is recognized as a skilled junks cleanouts removal contractor or company in Glendale AZ, ensuring that every item is hauled away safely and responsibly. We understand that your home is your sanctuary, which is why we provide meticulous service that respects your property. Whether you are prepping for a move or simply clearing out years of accumulated items, our residential experts provide the efficiency you deserve. Choose the local leaders in household hauling to experience a cleaner, more organized home today."
  },
  {
    heading:"Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Glendale AZ",
    description:"Maintaining a professional environment is essential for success, and Junk Butlers is the local & trusted commercial offices cleanouts or business junk removal contractor or company in Glendale AZ dedicated to your corporate needs. As a skilled junks cleanouts removal contractor or company in Glendale AZ, we minimize downtime by providing swift, organized hauling for offices, retail spaces, and warehouses. We are the premier and skilled residential or commercial buildings junks or trash removal contractor Glendale AZ businesses rely on for removing old office furniture, E-waste, and renovation debris. Being a certified and trusted all kinds household removal or cleanouts contractor or company Glendale AZ, our expertise extends to complex commercial logistics, ensuring your business stays compliant and clutter-free. From single-office pick-ups to massive corporate headquarters cleanouts, our professional crew delivers unmatched reliability. Partner with us to ensure your workspace reflects the high standards of your brand with our top-tier hauling solutions."
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

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading: "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Glendale AZ",
    description: "As a certified or trusted local No1 eco-friendly junks or trash removal contractor Glendale AZ, Junk Butlers is committed to providing sustainable disposal solutions that protect our community. We understand that responsible hauling is about more than just clearing space; it is about ensuring that your unwanted items are sorted, recycled, or donated whenever possible. As an experienced high-qualified junks hauling services contractor Glendale AZ, our team possesses the technical knowledge to handle complex removals while adhering to strict environmental standards. Choosing a certified or trusted local No1 eco-friendly junks or trash removal contractor Glendale AZ means you are partnering with a team that values the future of our local landscape.Junk Butlers specializes in diverting waste from landfills by utilizing a network of local recycling centers and charities. Whether you are clearing out a residential garage or a large-scale commercial site, our experienced high-qualified junks hauling services contractor Glendale AZ team ensures a seamless, green transition for your property. We take pride in our transparent process, offering residents a reliable way to dispose of everything from electronics to construction debris without the ecological guilt. Experience the difference of a premium service that prioritizes both customer satisfaction and environmental integrity. Contact us today to schedule your eco-friendly pickup and see why we are Glendale's top-rated hauling experts.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
    description: "As the region’s premier hauling experts, Junk Butlers is proud to offer our services areas for all major junk or trash removal contractor needs throughout the Valley. While we are widely recognized as the top-rated provider in Glendale AZ, our mobile teams extend their professional reach to provide rapid, reliable cleanouts in Peoria AZ and the retirement communities of Sun City AZ. We understand that residents and business owners across the West Valley require a dependable partner, which is why we also serve as the leading removal specialists in Surprise AZ. Our commitment to excellence doesn't stop there; we provide high-end, efficient hauling solutions for luxury estates and commercial properties in Scottsdale AZ, ensuring every job meets our rigorous Butler standards.Furthermore, our large-scale demolition and disposal crews are frequently deployed throughout Phoenix AZ to handle everything from office decommissions to massive residential estate clearances. No matter where you are located within these major hubs, you can count on our certified team to arrive on time and fully equipped. By choosing our multi-city coverage, you gain access to a local expert that knows the specific disposal regulations of each municipality, guaranteeing a seamless and stress-free experience from start to finish.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Glendale AZ?",
    description: "When you are deciding on the right partner for your property, you might ask: Why choose Junk Butlers contractor or company for your trash removal services contractor Glendale AZ? The answer lies in our unwavering commitment to quality, reliability, and local expertise. Junk Butlers has built a reputation as the most dependable name in the valley by consistently exceeding client expectations through transparent pricing and superior results. As a skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, we bring years of hands-on experience to every project, ensuring that even the most complex debris removal tasks are executed with surgical precision.We don't just haul away items; we provide a full-service experience that prioritizes your schedule and property safety. Our team is fully licensed and insured, giving you peace of mind while we handle the heavy lifting. From residential cleanouts to large-scale commercial demolition, we utilize modern equipment and eco-friendly disposal methods to get the job done right the first time. By selecting a skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, you are guaranteed a clutter-free environment without the stress. Trust the Butler standard for your next project and discover why we are Glendales highest-rated hauling agency.",
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
