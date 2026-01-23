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
  title: "Certified & Professional #1 Trash Removal Contractor Glendale AZ",
  areaLabel: "sun-city, az",
  description: "Experience professional and affordable junk removal with Junk Butlers. As Glendale’s local and trusted contractor, we provide same-day trash, debris, and furniture disposal for homes and offices. Certified and skilled, we make residential or commercial hauling effortless.",
  subheading: "Clear out the clutter with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description: "Our local and trusted team at Junk Butlers provides helpful, polite, and professional junk removal."
    },
    {
      title: "Quick Response",
      description: "Need it gone now? We are your professional and trusted same day trash removal contractor."
    },
    {
      title: "24/7 Support",
      description: "We offer professional and affordable assistance anytime for your residential or commercial trash removal needs."
    }
  ]
};

const INTRO_SECTION = {
  title: "Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Glendale AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding a reliable partner to clear your space shouldn't be a hassle. As the premier home debris removal or hauling contractor in Glendale AZ, Junk Butlers is dedicated to reclaiming your property from unwanted clutter. Whether you are dealing with a cluttered estate or need a skilled or professional all home and offices junk or trash removal contractor in Glendale AZ, our team delivers efficiency and care. We pride ourselves on being an experienced and trusted all kind trash or junk removal or demolition contractor or company in Glendale AZ, handling everything from heavy construction debris to delicate office cleanouts. As a professional local trash removal company in Glendale AZ, we understand the specific needs of our community.We offer specialized solutions, including serving as your best garage junk removal contractor Glendale AZ and providing a certified appliance trash removal service Glendale AZ. If you are looking for a local and affordable furniture or appliance disposal contractor Glendale AZ, we ensure your heavy items are hauled away safely and responsibly. Don't let clutter stall your productivity or comfort. Trust the most professional and trusted garbage or trash removal contractor or company in Glendale AZ to provide same day junk removal that fits your schedule. From residential backyards to commercial warehouses, Junk Butlers provides the professional muscle you need to get the job done right."
  ]
};

const FAQ_SECTION = {
  title: "FAQs",
  description: "Get detailed answers about our junk removal services in sun-city-az, AZ.",
  questions: [
    {
      question: "What services do Junk Butlers offer in Glendale?",
      answer: "As a skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, we handle everything. Junk Butlers provides residential cleanouts, commercial office clearing, construction debris hauling, and appliance disposal. We are your premier and skilled residential or commercial buildings trash or trash removal contractor Glendale AZ experts.",
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer: "Yes! We are a professional and trusted same day trash removal contractor Glendale AZ. Whether you have a sudden office move or urgent household clutter, Junk Butlers responds quickly. Our team ensures your space is cleared efficiently, maintaining our reputation as a skilled trash cleanouts removal contractor or company",
    },
    {
      question: " Are your trash removal services eco-friendly?",
      answer: "Absolutely. We are the certified or trusted local No1 eco-friendly trash or trash removal contractor Glendale AZ. Junk Butlers prioritizes recycling and donating items to local charities. As an experienced high-qualified trash haulings services contractor Glendale AZ, we ensure responsible disposal to keep our local community green.",
    },
    {
      question: "Can you handle large commercial office cleanouts?",
      answer: "We specialize in local & trusted commercial offices cleanouts or business junk removal projects. From warehouse debris to office furniture, we are the skilled & professional home or offices trash or trash cleanout contractor or company in Glendale AZ businesses trust for minimal disruption and high-speed professional hauling.",
    },
    {
      question: ". Is your junk removal service affordable?",
      answer: "We provide professional and affordable home and offices trash removal services. Junk Butlers offers transparent pricing with no hidden fees. As a local and trusted residential or commercial trash removal and demolition contractor in Glendale AZ, we combine top-tier service with budget-friendly rates for every single neighborhood."
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
  heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Glendale AZ",
  subHeading: "",
  description: "Junk Butlers is the top-rated choice for professional hauling. As your premier No1 trash or trash removal company or agency Glendale AZ, we provide fast, reliable solutions. Trust our expert team for efficient residential and commercial cleanouts today!",
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
  description: `Junk Butlers provides comprehensive solutions to keep your property clean. As a premier and skilled residential or commercial buildings trash or trash removal contractor Glendale AZ, we handle everything. From skilled trash cleanouts to being a certified and trusted all kinds household removal or cleanouts contractor or company Glendale AZ, we do it all.".`,
  service:[
  {
      heading:"Hire Now Most Trusted Residential Household Trash Removal Contractor Glendale AZ",
      description:"Is your home being overrun by unwanted clutter? Junk Butlers is here to help you reclaim your living space. As the most certified and trusted all kinds household removal or cleanouts contractor or company Glendale AZ residents rely on, we handle the heavy lifting so you don’t have to. From old furniture in the attic to piles of debris in the backyard, our team serves as your premier and skilled residential or commercial buildings trash or trash removal contractor Glendale AZ.We understand that household junk can become overwhelming, which is why we offer streamlined, stress-free solutions tailored to your schedule. Whether you are prepping for a move or simply decluttering your garage, our skilled trash cleanouts removal contractor or company in Glendale AZ ensures every item is disposed of responsibly. Choose a team that values your property and provides a seamless experience from start to finish. Let us transform your house back into a home today."
  },
  {
    heading:"Local & Trusted Commercial Office Cleanouts or Business Junk Removal Company in Glendale AZ",
    description:"Maintaining a clean and professional workspace is essential for any thriving business. Junk Butlers specializes in high-efficiency local & trusted commercial offices cleanouts or business junk removal contractor or company in Glendale AZ services. We understand that time is money; therefore, our skilled trash cleanouts removal contractor or company in Glendale AZ works swiftly to minimize disruptions to your daily operations. Whether you are upgrading office furniture, clearing out a warehouse, or managing a retail renovation, we provide the professional muscle required for large-scale projects.As a premier and skilled residential or commercial buildings trash or trash removal contractor Glendale AZ, we have the equipment and expertise to handle electronic waste, office cubicles, and construction debris. Our reputation as a certified and trusted all kinds household removal or cleanouts contractor or company Glendale AZ extends to the corporate sector, ensuring that your business remains compliant with local disposal regulations. Partner with us for reliable, affordable, and professional commercial hauling."
  }
  ]
};
const OVERLAY_CARD_SECTION = {
  heading: "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Glendale AZ",
  description: `If you are looking for a skilled and top-rated home and offices trash or junk removal demolition contractor Glendale AZ, look no more than the experts at Junk Butlers. We specialize in providing comprehensive cleanout solutions that cater to both homeowners and business managers. Our reputation as a skilled & professional home or offices trash or trash cleanout contractor or company in Glendale AZ is built on our commitment to speed, safety, and thoroughness. Whether you are stripping a room down to the studs or just clearing out years of accumulated clutter, we have the tools and the manpower to handle the job flawlessly.
In addition to heavy-duty demolition debris, we are the leading residential & commercial old furniture removal contractor Glendale AZ. Moving heavy sofas, office desks, or outdated filing cabinets can be physically demanding and risky; our team manages the entire process so you don't have to lift a finger. By choosing Junk Butlers, you are partnering with a company that understands the nuances of local disposal regulations and environmental standards. We take pride in being a skilled and top rated home and offices trash or junk removal demolition contractor Glendale AZ, ensuring your space is left spotless and ready for its next chapter. From single-item pickups to full-scale building cleanouts, we deliver professional results every time.
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
    heading: "Certified or Trusted Local No1 Eco Friendly Trash or Trash Removal Contractor Glendale AZ",
    description: "As the certified or trusted local No. 1 eco-friendly trash or trash removal contractor Glendale AZ, Junk Butlers is committed to providing sustainable disposal solutions that protect our community and the environment. We don’t just haul away your unwanted items; we prioritize recycling, donating, and repurposing whenever possible. In a world where waste management is increasingly critical, having an experienced high-qualified trash haulings services contractor Glendale AZ ensures that your debris is handled with the highest environmental standards. Our green initiatives are designed to reduce landfill contributions while providing you with a clean, clutter-free space.Whether you are clearing out a residential property or managing a large-scale commercial site, our eco-conscious approach sets us apart. As your certified or trusted local No. 1 eco-friendly trash or trash removal contractor Glendale AZ, we utilize advanced sorting techniques to identify materials that can be salvaged. By choosing Junk Butlers, you are partnering with an experienced high-qualified trash haulings services contractor Glendale AZ that values transparency, efficiency, and ecological responsibility. We believe that professional service and environmental stewardship should go hand-in-hand. Let us show you how easy and impactful responsible waste removal can be. From old electronics to construction materials, we handle every job with the expertise required to keep Glendale clean and green for future generations.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Phoenix, AZ"
  },
  row2: {
    heading: "Our Services Areas for All Major Junk & Trash Removal Contractor",
    description: "As a premier major junk or trash removal contractor, Junk Butlers is proud to provide comprehensive hauling solutions across the entire Valley. Our mission is to ensure that every home and business owner has access to professional and affordable cleanup services, regardless of their location. We maintain a strong presence in Glendale AZ, where our local expertise allows for rapid, same-day service for residential and commercial clients alike. However, our reach extends far beyond city limits to ensure the surrounding communities stay clutter-free.If you are located in Peoria AZ or Sun City AZ, our skilled teams are regularly in your neighborhood, providing expert debris removal and appliance disposal. We also offer robust support for larger projects in Surprise AZ, handling everything from garage cleanouts to construction site hauling. For those in the more metropolitan hubs, we serve as a trusted partner for office and estate cleanouts in both Scottsdale AZ and Phoenix AZ. No matter where you are situated in these regions, you can count on the most reliable major junk or trash removal contractor to arrive on time and fully equipped. From the West Valley to the heart of the city, we are committed to keeping your properties clean, safe, and organized.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Phoenix, AZ"
  },
  row3: {
    heading: "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Glendale AZ?",
    description: "When it comes to reclaiming your property, you need a team that combines reliability with expert execution. Why choose Junk Butlers contractor or company for your trash removal services contractor Glendale AZ? The answer lies in our unwavering commitment to quality and customer satisfaction. As a skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, we have spent years perfecting our processes to ensure that every project is handled with precision. Whether you are dealing with a minor household decluttering task or a major commercial demolition project, Junk Butlers brings the necessary equipment and expertise to get the job done right the first time.We understand that our clients value transparency and efficiency. That is why we have established ourselves as the premier skilled and professional trusted trash removal or demolition services contractor in Glendale AZ, offering competitive pricing without ever compromising on service standards. From the moment you contact us, our team works tirelessly to provide a seamless experience, handling all the heavy lifting and responsible disposal so you don’t have to. By choosing Junk Butlers, you are partnering with a local leader that understands the specific needs of the Glendale community. Trust the best trash removal services contractor Glendale AZ to deliver a clean, safe, and clutter-free environment for your home or business.",
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

