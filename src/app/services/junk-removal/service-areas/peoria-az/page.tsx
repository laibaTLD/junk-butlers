
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
  title: 'Book Affordable Junk Removal Services in Peoria, AZ | Junks Butlers | Fast & Reliable',
  description: 'Affordable junk removal services in Peoria, AZ by Junks Butlers. We remove furniture, appliances, yard waste, and debris for homes and businesses.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-removal/service-areas/peoria-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Book Affordable Junk Removal Services in Peoria, AZ | Junks Butlers | Fast & Reliable',
    description: 'Affordable junk removal services in Peoria, AZ by Junks Butlers. We remove furniture, appliances, yard waste, and debris for homes and businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Affordable Junk Removal Services in Peoria, AZ | Junks Butlers',
    description: 'Affordable junk removal services in Peoria, AZ by Junks Butlers. We remove furniture, appliances, yard waste, and debris for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks Removal Contractor Peoria AZ",
  areaLabel: "Peoria, AZ",
  description: "Clear your space today with the most trusted local contractors for home and office. From debris removal to demolition, our skilled team provides affordable, same-day trash hauling and furniture disposal. Professional service, locally owned, and always reliable",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Our local and trusted team provides professional furniture disposal with a neighborly, stress-free customer experience."
    },
    {
      title: "Quick Response",
      description: "Need same-day trash removal? Our skilled contractors arrive fast to clear your Peoria home or office."
    },
    {
      title: "24/7 Support",
      description: "Reliable residential or commercial junk hauling support is available anytime you need expert Peoria debris removal."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Peoria AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner for property cleanouts shouldn’t be a hassle. If you are searching for a professional and trusted junk or trash removal contractor or company in Peoria AZ, Junk Butlers is your premier local solution. As an Experienced and trusted all kind trash or junk removal or demolition contractor or company in Peoria AZ, we specialize in clearing out clutter with unmatched efficiency and care. Whether you need a skilled or professional all home and offices junk or trash removal contractor in Peoria AZ for a corporate relocation or a garage junk removal contractor Peoria AZ to reclaim your parking space, our team is ready to help.We take pride in being a professional local trash removal company in Peoria AZ that prioritizes the community’s needs, offering certified appliance junks removal service Peoria AZ to ensure your old electronics and white goods are handled responsibly. From light structures to heavy waste, we are the trusted and premier home debris removal or hauling contractor in Peoria AZ you can count on for every project. As a local and affordable furniture or appliance disposal contractor Peoria AZ, we guarantee transparent pricing and same day junk removal to keep your transition seamless. Let Junk Butlers handle the heavy lifting, providing the professional debris hauling and demolition services you deserve to keep your residential or commercial property clean, safe, and completely clutter-free."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in Peoria, AZ.",
  questions: [
    {
      question: " What services do Junk Butlers provide in Peoria, AZ?",
      answer: "As a skilled and professional trusted trash removal or demolition services contractor in Peoria AZ, we handle everything. From residential furniture disposal and appliance removal to commercial office cleanouts and light demolition projects, our team provides comprehensive, eco-friendly hauling solutions tailored to meet your specific property needs.",
    },
    {
      question: " Do you offer same-day junk removal services?",
      answer: "Yes! Junk Butlers understands that clutter can be urgent. We offer professional and trusted same-day trash removal throughout Peoria and surrounding areas. Contact us early in the day, and our skilled hauling team will work to clear your space before the sun goes down",
    },
    {
      question: ". Are you a licensed and certified contractor?",
      answer: "Absolutely. We are a certified and professional #1 junks removal contractor Peoria AZ. Our team is fully insured and trained to handle residential and commercial debris safely. You can trust Junk Butlers to provide high-quality service while protecting your property and following all local disposal regulations.",
    },
    {
      question: " How do you determine your pricing?",
      answer: "As a local and affordable provider, we offer transparent, volume-based pricing. Costs depend on the amount of space your items take up in our trucks. Whether it’s a garage junk removal project or a business cleanout, we provide free, no-obligation estimates with no hidden fees.",
    },
    {
      question: "Which areas do you serve besides Peoria?",
      answer: "5. Which areas do you serve besides Peoria?Beyond being the top junk removal contractor Peoria AZ, we serve the entire valley. Our service areas include Sun City, Glendale, Surprise, Scottsdale, and Phoenix. No matter where you are located, Junk Butlers delivers the same premier and skilled hauling and demolition services to your doorstep."
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
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Peoria AZ",
  subHeading: "",
  description: "Experience the gold standard with Junk Butlers, your skilled and professional home and office junk removal contractor. From certified furniture disposal to affordable debris hauling, our trusted Peoria team delivers same-day solutions to keep your property clean and clutter-free.",
  ctaButton: { 
    label: "Get a Free Quote", 
    href: "/contact-us" 
  },
  backgroundImage: {
    src: "/images/image-4.webp",
    alt: "Junk removal and demolition services in Phoenix, AZ",
  },
  overlayText: "Our team understands the logistics of Glendale property management, making us the premier choice for both homeowners and business managers alike. When you need a skilled and professional home or offices junks or trash cleanout contractor, you need a team that values your time and maintains a clean workspace from start to finish. From demolition debris to office cubicle disposal, Junk Butlers handles it all. As a residential and commercial old furniture removal contractor, we ensure that your unwanted items are disposed of ethically and efficiently. Don't settle for less when you can hire the highest-rated experts in the Valley. Let us transform your space today with our reliable, high-capacity junk removal and demolition services."
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Junk Butlers offers the most comprehensive hauling solutions in the valley. As a premier and skilled residential or commercial buildings junks or trash removal contractor Peoria AZ, we provide certified appliance disposal, garage cleanouts, and demolition. From skilled debris removal to furniture hauling, we are your local and affordable experts.`,
  service:[
  {
      heading:"Hire Now Most Trusted Residential Household Junk Removal Contractor in Peoria, AZ",
      description:"When clutter takes over your living space, you need the #1 certified & professional team to restore order. Junk Butlers is recognized as the certified and trusted all kinds household removal or cleanouts contractor or company Peoria AZ, dedicated to helping homeowners reclaim their space. Whether you are dealing with years of attic accumulation, a messy renovation, or an estate transition, we serve as your premier and skilled residential buildings junks or trash removal contractor Peoria AZ.Our team understands that your home is your sanctuary. As a skilled junks cleanouts removal contractor or company in Peoria AZ, we handle everything from heavy furniture and old mattresses to general household trash with the utmost care. We prioritize eco-friendly disposal and recycling, ensuring your items are handled responsibly. Don't let unwanted debris weigh you down—choose the local experts who combine professional strength with a neighborly touch. Experience the ease of a clutter-free home today with our reliable residential hauling solutions."
  },
  {
    heading:"Local & Trusted Commercial Office Cleanouts & Business Junk Removal Company in Peoria, AZ",
    description:"Choosing the right partner for waste management means finding a certified or trusted local no1 eco-friendly junks or trash removal contractor Peoria AZ that values the environment as much as you do. Junk Butlers is proud to lead the industry by providing sustainable disposal solutions that prioritize recycling and donating over simply hitting the landfill. As an experienced high-qualified junks hauling services contractor Peoria AZ, we have mastered the logistics of eco-conscious removal, ensuring that every load is sorted with precision to minimize our carbon footprint.Our commitment to being a green-certified agency means we stay up to date on the latest environmental regulations and disposal techniques. Whether you are clearing out a residential garage or a massive commercial warehouse, our team operates with a level of professionalism that has made us the no1 eco-friendly choice in the region. We understand that Peoria residents want more than just a hauling service; they want a partner who respects their property and the planet. Junk Butlers delivers exactly that, combining high-capacity hauling power with a delicate approach to waste diversion. From old electronics to organic yard debris, our experienced high-qualified team ensures your junk is handled responsibly, making us the most trusted name for eco-friendly cleanup in Peoria."
  }
  ]
};
const OVERLAY_CARD_SECTION = {
  heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
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
    heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Peoria AZ",
    description: "If you are looking for a skilled and top-rated home and offices trash or junk removal demolition contractor Peoria AZ, look no more than the experts at Junk Butlers. Our reputation as a premier local provider is built on delivering efficient, high-quality cleanup solutions for every type of property. As a skilled & professional home or offices junks or trash cleanout contractor or company in Peoria AZ, we understand that clutter can be overwhelming. Whether you are managing a massive estate clear-out, a post-construction demolition project, or a simple backyard cleanup, our team brings the tools and expertise necessary to get the job done right the first time.We take pride in being a versatile residential & commercial old furniture removal contractor Peoria AZ, helping you dispose of heavy desks, bulky sofas, and outdated office workstations without you lifting a finger. At Junk Butlers, we don’t just haul away trash; we provide a full-service experience that includes meticulous debris removal and light demolition. Our commitment to being a skilled and top-rated agency means we prioritize safety, speed, and environmental responsibility in every load. From small residential pickups to large-scale industrial cleanouts, we are the trusted partners you need to reclaim your space. Choose Peoria’s most reliable professionals for a cleaner, more organized environment today.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Certified or Trusted Local No1 Eco Friendly Junks or Trash Removal Contractor Peoria AZ",
    description: "Choosing the right partner for waste management means finding a certified or trusted local no1 eco-friendly junks or trash removal contractor Peoria AZ that values the environment as much as you do. Junk Butlers is proud to lead the industry by providing sustainable disposal solutions that prioritize recycling and donating over simply hitting the landfill. As an experienced high-qualified junks hauling services contractor Peoria AZ, we have mastered the logistics of eco-conscious removal, ensuring that every load is sorted with precision to minimize our carbon footprint.Our commitment to being a green-certified agency means we stay up to date on the latest environmental regulations and disposal techniques. Whether you are clearing out a residential garage or a massive commercial warehouse, our team operates with a level of professionalism that has made us the no1 eco-friendly choice in the region. We understand that Peoria residents want more than just a hauling service; they want a partner who respects their property and the planet. Junk Butlers delivers exactly that, combining high-capacity hauling power with a delicate approach to waste diversion. From old electronics to organic yard debris, our experienced high-qualified team ensures your junk is handled responsibly, making us the most trusted name for eco-friendly cleanup in Peoria.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Peoria AZ?",
    description: "When it comes to reclaiming your property, you deserve a partner that combines reliability with expert execution. Why Choose Junk Butlers contractor or company for your trash removal services contractor Peoria AZ? The answer lies in our unwavering commitment to quality and customer satisfaction. As a skilled and professional trusted trash removal or demolition services contractor in Peoria AZ, we don't just haul away waste; we provide a comprehensive solution that handles the heavy lifting, logistical planning, and responsible disposal of your unwanted items. Junk Butlers has built a reputation on being the most dependable name in the valley, ensuring that every project—regardless of size—is completed with surgical precision.Our clients choose us because we bridge the gap between affordability and premium service. Whether you are dealing with a complex estate clear-out or require a skilled and professional trusted trash removal or demolition services contractor in Peoria AZ for a commercial renovation, we bring the right equipment and a can-do attitude to every job site. We prioritize safety, speed, and transparency, ensuring there are no hidden fees or unexpected delays. By choosing Junk Butlers, you are investing in a clutter-free future backed by a team that truly cares about the Peoria community.",
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
