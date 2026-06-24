
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
  title: 'Top Trusted Junk Removal Company Sun City AZ | Junk Butlers',
  description: 'Need junk removal Contractors in Sun City AZ? Junk Butlers handles furniture, appliances, and clutter with fast, professional service for homes and businesses.',
  alternates: {
    canonical: 'https://junksbutlers.com/services/junk-removal/service-areas/sun-city-az',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Top Trusted Junk Removal Company Sun City AZ | Junk Butlers',
    description: 'Need junk removal Contractors in Sun City AZ? Junk Butlers handles furniture, appliances, and clutter with fast, professional service for homes and businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Trusted Junk Removal Company Sun City AZ | Junk Butlers',
    description: 'Need junk removal Contractors in Sun City AZ? Junk Butlers handles furniture, appliances, and clutter with fast, professional service for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Junks Removal Contractor Sun City AZ",
  areaLabel: "Sun City, AZ",
  description:
    "Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. We provide professional and affordable home and offices junks removal services, including same day trash removal and furniture disposal.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides professional, polite service for every Sun City junk hauling project.",
    },
    {
      title: "Quick Response",
      description:
        "Need it gone? Contact Junk Butlers for professional and trusted same day trash removal today.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer affordable home and offices junks removal services around the clock for your convenience.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Sun City AZ? - Same Day Junk Removal",
  paragraphs: [
    "When you are overwhelmed by clutter, finding an experienced and trusted all kind trash or junk removal or demolition contractor or company in Sun City AZ is essential for peace of mind. At Junk Butlers, we specialize in being the most skilled or professional all home and offices junk or trash removal contractor in Sun City AZ, ensuring your property is cleared efficiently. Whether you are dealing with a messy renovation or a simple spring cleaning, we serve as your trusted and premier home debris removal or hauling contractor in Sun City AZ.Our team is recognized as a professional local trash removal company in Sun City AZ that prioritizes speed and reliability. We provide specialized solutions, including certified appliance junks removal service Sun City AZ, ensuring heavy items are handled safely. If you are looking to reclaim your parking space, we are the best garage junk removal contractor Sun City AZ residents rely on. As a local and affordable furniture or appliance disposal contractor Sun City AZ, we guarantee transparent pricing without hidden fees. From residential cleanouts to complex commercial site clearing, our same day promise means your junk disappears today. Trust the experts who understand the Sun City community’s needs—choose the most dedicated local team for every haul.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Sun City, AZ.",
  questions: [
    {
      question: "What items do you remove in Sun City, AZ?",
      answer:
        "As a skilled junks cleanouts removal contractor or company in Sun City AZ, Junk Butlers handles almost everything. We specialize in certified appliance junks removal, old furniture, electronics, yard waste, and construction debris. Whether it is a single sofa or a full garage, our team clears it quickly.",
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer:
        "Yes! We are a professional and trusted same day trash removal contractor Sun City AZ. We understand that clutter can be urgent, so we prioritize rapid response times. Contact us early in the day to secure your spot and have your unwanted items hauled away by this evening.",
    },
    {
      question: "Are your junk removal services environmentally friendly?",
      answer:
        "Absolutely. As a certified or trusted local no1 eco-friendly junks or trash removal contractor, we prioritize recycling and donations. Junk Butlers works hard to keep Sun City green by ensuring that appliances, metals, and usable furniture are diverted from landfills whenever possible for a sustainable future.",
    },
    {
      question: "Do you provide commercial office cleanout services?",
      answer:
        "Yes, we are a local and trusted commercial offices cleanouts or business junk removal contractor. We help Sun City businesses dispose of office furniture, old computers, and retail fixtures. Our team works efficiently to minimize disruption to your operations, ensuring your professional workspace remains clean, organized, and productive.",
    },
    {
      question: "How do you determine your removal pricing?",
      answer:
        "We are a local and affordable furniture or appliance disposal contractor Sun City AZ that offers transparent, volume-based pricing. Our rates depend on the space your items occupy in our truck. We provide free, no-obligation estimates to ensure you get the most competitive price for your specific haul.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Sun City AZ",
  subHeading: "",
  description:
    "Experience the best with Junk Butlers, your skilled junks cleanouts removal contractor or company in Sun City AZ. We provide professional and affordable home and offices junks removal services, specializing in trusted same day trash removal and furniture disposal.",
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
  description: `Junk Butlers provides the most skilled junks cleanouts removal contractor or company in Sun City AZ. From certified appliance junks removal to garage junk removal, we handle it all. Trust our local and affordable furniture or appliance disposal contractor for premier home debris removal or hauling across Sun City".`,
 service:[
  {
    heading:"Hire Now Most Trusted Residential Household Junks Removal Contractor or Company Sun City AZ",
    
description:"When clutter takes over your home, you need a certified and trusted all kinds household removal or cleanouts contractor or company Sun City AZ to restore order. Junk Butlers specializes in helping homeowners reclaim their living space through efficient and stress-free services. As the premier and skilled residential or commercial buildings junks or trash removal contractor Sun City AZ, we handle everything from old mattress disposal to full basement cleanouts. Our team is recognized as a skilled junks cleanouts removal contractor or company in Sun City AZ, ensuring that heavy furniture, broken appliances, and general household debris are hauled away safely. We understand that residential removals require a delicate touch and respect for your property. By choosing the most reliable Junk Butlers experts, you ensure that your home remains clean and your unwanted items are disposed of responsibly. Whether you are prepping for a move or simply downsizing, our local team is ready to provide the professional muscle you need.",
 },
{
 heading:"Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Sun City AZ",

description:"Business owners know that a cluttered workspace hinders productivity. That is why Junk Butlers is the leading local & trusted commercial offices cleanouts or business junk removal contractor or company in Sun City AZ. We serve as a premier and skilled residential or commercial buildings junks or trash removal contractor Sun City AZ, offering tailored solutions for property managers, retail stores, and corporate offices. Our crew is a skilled junks cleanouts removal contractor or company in Sun City AZ equipped to handle office furniture, E-waste, and large-scale commercial debris.As a certified and trusted all kinds household removal or cleanouts contractor or company Sun City AZ, we extend our expertise to the business sector with unmatched professionalism. We minimize downtime by working quickly and discreetly, ensuring your business operations continue smoothly. From retail renovations to warehouse clearing, our team provides the logistical support required for large-scale removals. Trust Sun City’s commercial experts to maintain your professional image with top-tier hauling and disposal services."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Sun City AZ",
  description: `If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Sun City AZ, look no more than the experts at Junk Butlers. Our team has built a reputation as the most skilled & professional home or offices junks or trash cleanout contractor or company in Sun City AZ, helping residents and business owners reclaim their valuable space. We understand that junk accumulation can be stressful, which is why we provide streamlined, heavy-duty hauling solutions tailored to your specific needs. As a premier residential & commercial old furniture removal contractor Sun City AZ, we have the tools and experience to handle everything from bulky sofas to entire office workstations.
Junk Butlers doesn't just pick up trash; we offer comprehensive demolition and cleanout services that ensure your property is left spotless and ready for its next use. Our commitment to being a skilled and top rated home and offices trash or junk removal demolition contractor Sun City AZ means we prioritize safety, efficiency, and eco-friendly disposal methods. Whether you are clearing out a residential garage or managing a large-scale commercial renovation, our professional crew is dedicated to providing five-star service. Trust the local leaders who combine affordable pricing with unmatched expertise. Contact us today to experience why we are the preferred choice for all demolition and junk hauling projects throughout the Sun City area.`,
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
      "Certified or Trusted Local No1 Eco Friendly Junks or Trash Removal Contractor Sun City AZ",
    description:
      "Choosing a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ means more than just clearing space; it means ensuring your unwanted items are handled with environmental responsibility. At Junk Butlers, we take our commitment to the planet seriously. As an experienced high-qualified junks hauling services contractor Sun City AZ, we prioritize recycling and donating usable goods over simply hauling everything to a landfill. Our team understands the unique needs of the Sun City community, providing a green solution for those who want to declutter their homes and offices responsibly.When you hire Junk Butlers, you are partnering with a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ that combines professional efficiency with sustainable practices. Our crew is trained to identify materials that can be repurposed, from old metals to electronics and furniture. As an experienced high-qualified junks hauling services contractor Sun City AZ, we manage the heavy lifting and sorting so you don't have to. We believe that professional junk removal should be both affordable and ethically sound. By choosing our eco-friendly services, you are helping to keep Sun City beautiful while enjoying a clean, junk-free environment. Whether it is a single appliance or a full-property cleanout, we provide the reliable, high-quality service you deserve.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
    description:
      "As a premier hauling provider, we take pride in being the best provider for our services areas for all major junk or trash removal contractor needs across the Valley. Junk Butlers is strategically positioned to offer rapid, reliable, and professional cleanout solutions to a wide range of communities. Our primary focus remains serving the residents of Sun City AZ, where we have built a reputation for excellence, but our fleet extends far beyond those borders. We provide top-tier junk hauling and demolition services to the growing neighborhoods of Surprise AZ and the bustling residential and commercial hubs of Peoria AZ.If you are located further east, our professional crews are frequently dispatched to Glendale AZ, ensuring that both homes and offices stay clutter-free. Furthermore, we maintain a strong presence in Phoenix AZ, handling large-scale urban removals and specialized trash hauling projects with ease. For those in high-end residential or retail spaces, we also serve as the leading removal experts in Scottsdale AZ. No matter which of these major cities you are located in, our commitment to being the most trusted local contractor remains the same. We ensure that every zip code within our service area receives the same high standard of eco-friendly disposal and same day efficiency that our brand is known for.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Sun City AZ?",
    description:
      "Deciding on the right team for your cleanout project is essential for a stress-free experience, so why choose Junk Butlers contractor or company for your trash removal services contractor Sun City AZ? The answer lies in our unwavering commitment to professionalism, punctuality, and the local community. As a skilled and professional trusted trash removal or demolition services contractor in Sun City AZ, we understand the specific needs of residents and business owners in this area. We don't just haul away your unwanted items; we provide a comprehensive service that includes heavy lifting, sorting, and responsible disposal, ensuring your property is treated with the utmost respect.Junk Butlers stands out because we combine the power of a large-scale operation with the personalized touch of a local business. When you hire us, you are partnering with a skilled and professional trusted trash removal or demolition services contractor in Sun City AZ that prioritizes your schedule and your budget. Our transparent pricing and same day availability make us the most convenient choice for urgent projects. We handle everything from minor household clutter to major site demolitions, proving that no job is too big or too small for our expert crew. Choose us for a cleaner, safer, and junk-free environment today.",
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
