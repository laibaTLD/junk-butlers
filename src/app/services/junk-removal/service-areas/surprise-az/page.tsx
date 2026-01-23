
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
  title: "Certified & Professional #1 Junks Removal Contractor Surprise AZ",
  areaLabel: "Surprise, AZ",
  description:
    "Experience professional and affordable junk hauling for homes and offices. As your local, trusted contractor, Junk Butlers provides skilled debris removal, demolition, and same-day trash disposal. From furniture to commercial waste, we deliver certified, reliable service across Surprise.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Junk Butlers team provides courteous, professional service, ensuring a stress-free experience for every client.",
    },
    {
      title: "Quick Response",
      description:
        "Need junk gone fast? We offer prompt, same-day hauling and debris removal services throughout Surprise, AZ.",
    },
    {
      title: "24/7 Support",
      description:
        "We are always available to schedule your professional home or office junk removal, anytime you need",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Surprise AZ? - Same Day Junk Removal",
  paragraphs: [
    "Finding the right help shouldn't be a hassle when you need to clear clutter. As the premier Junk Butlers, we take pride in being a skilled or professional all home and offices junk or trash removal contractor in Surprise AZ. Whether you are dealing with a cluttered estate or a renovation mess, we stand out as a professional local trash removal company in Surprise AZ that prioritizes efficiency and reliability. As a trusted and premier home debris removal or hauling contractor in Surprise AZ, our team is equipped to handle everything from minor cleanouts to major projects. We provide a certified appliance junks removal service Surprise AZ residents can depend on for eco-friendly disposal.If you are searching for a local and affordable furniture or appliance disposal contractor Surprise AZ, look no more. Our crew is an experienced and trusted all kind trash or junk removal or demolition contractor or company in Surprise AZ, capable of dismantling old sheds or hauling away construction waste. We are also your best garage junk removal contractor Surprise AZ, helping you reclaim your parking space in hours. From residential hauling to complex commercial projects, we provide the same-day service you deserve. Trust the experts who combine local knowledge with certified professional standards to keep your property clean, safe, and clutter-free today",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Sun City, AZ.",
  questions: [
    {
      question: " What services does your junk removal company offer?",
      answer:
        "Junk Butlers is a skilled and professional trusted trash removal or demolition services contractor in Surprise, AZ. We handle residential household junk, commercial office cleanouts, furniture disposal, and appliance removal. Our team also specializes in demolition debris hauling, ensuring your property is left clean and ready for its next use.",
    },
    {
      question: "Do you offer same-day junk removal in Surprise, AZ?",
      answer:
        "Yes! As a professional and trusted same-day trash removal contractor Surprise, AZ, we prioritize speed and efficiency. Whether you have a last-minute garage cleanout or urgent office debris, our local team is ready to respond quickly, providing reliable hauling services exactly when you need them most..",
    },
    {
      question: "Is Junk Butlers an eco-friendly removal contractor?",
      answer:
        "Absolutely. We are a certified or trusted local No. 1 eco-friendly junk or trash removal contractor. We don’t just dump items in landfills; we sort through every load to recycle materials and donate usable furniture or appliances to local charities, supporting a greener community in Surprise",
    },
    {
      question: "Can you handle large-scale commercial office cleanouts",
      answer:
        "Yes, we are a premier and skilled residential or commercial buildings junks or trash removal contractor. We assist businesses with E-waste disposal, office furniture removal, and full-scale retail cleanouts. Our professional crew works efficiently to minimize downtime, making us the top choice for commercial projects in the Valley.",
    },
    {
      question: "  How do you price your junk removal services?",
      answer:
        "We offer local and affordable furniture or appliance disposal with transparent pricing. Our rates are based on the volume of junk removed and the type of materials. As a trusted home debris removal or hauling contractor, we provide free, no-obligation estimates to ensure you get the best value.",
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
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Surprise AZ",
  subHeading: "",
  description:
    "Clear your space today with Junk Butlers. As the premier junk removal agency in Surprise, AZ, we offer certified and trusted hauling for homes and offices. From furniture disposal to debris removal, our skilled team delivers professional, same-day service.",
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
  description: `Junk Butlers offers comprehensive solutions for every cleanup need. As a skilled junks cleanouts removal contractor in Surprise, AZ, we specialize in residential furniture disposal, commercial office cleanouts, and debris hauling. From certified appliance removal to full demolition, our team provides affordable, same-day service to keep your property clutter-free.`,
 service:[
  {
    heading:"Hire the Most Trusted Residential Household Junk Removal Contractor in Surprise, AZ",
    
description:"When clutter takes over your living space, you need the Junk Butlers to restore your home’s comfort. As a certified and trusted all kinds household removal or cleanouts contractor or company Surprise AZ, we specialize in clearing out everything from old furniture and broken appliances to basement debris. We are recognized as a skilled junks cleanouts removal contractor or company in Surprise AZ, offering homeowners a seamless way to reclaim their space.Whether you are prepping for a move or finishing a renovation, our team acts as a premier and skilled residential or commercial buildings junks or trash removal contractor Surprise AZ. We handle the heavy lifting with precision, ensuring that your property is treated with respect. Our residential services are designed to be affordable and thorough, making us the top choice for families who value efficiency and professional disposal standards in the local community.",
 },
{
 heading:"Local & Trusted Commercial Office Cleanouts or Business Junk Removal Company in Surprise, AZ",

description:"Maintaining a professional environment is essential for business success, which is why Junk Butlers provides top-tier commercial solutions. We are the leading skilled junks cleanouts removal contractor or company in Surprise AZ for retail spaces, warehouses, and corporate offices. If you are relocating or downsizing, our team serves as a premier and skilled residential or commercial buildings junks or trash removal contractor Surprise AZ, managing the disposal of office furniture, E-waste, and bulky equipment.As a certified and trusted all kinds household removal or cleanouts contractor or company Surprise AZ, our expertise extends into complex business environments where timing and discretion are key. We minimize downtime by offering flexible scheduling, ensuring your business remains productive. From property management cleanouts to routine commercial trash hauling, we provide the reliable, professional partnership your business needs to stay organized and clutter-free in the Surprise area."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Surprise AZ",
  description: `If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Surprise AZ, look no more than Junk Butlers. We understand that accumulating unwanted items can be overwhelming, which is why we offer comprehensive solutions tailored to your specific needs. As a skilled & professional home or offices junks or trash cleanout contractor or company in Surprise AZ, we handle everything from single-item pickups to massive estate or office cleanouts with unmatched efficiency. Our team excels as a residential & commercial old furniture removal contractor Surprise AZ, helping families and business owners dispose of bulky sofas, desks, and filing cabinets safely and responsibly.
We don't just haul away bags; we are also a premier demolition contractor capable of dismantling structures and clearing the resulting debris. Choosing Junk Butlers means choosing a partner committed to the Surprise community, providing transparent pricing and eco-friendly disposal methods. Whether you are dealing with a cluttered garage, a renovated office space, or a backyard full of construction waste, our experts ensure the job is done right the first time. Experience the peace of mind that comes with hiring the most reliable name in the valley. We prioritize your schedule, offering same-day service to ensure your property is restored to its best condition quickly and professionally.`,
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
      "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Surprise AZ",
    description:
      "When it comes to responsible waste management, you deserve a certified or trusted local no1 eco-friendly junks or trash removal contractor Surprise AZ. At Junk Butlers, we believe that professional hauling should not come at the expense of the environment. Our mission is to provide sustainable solutions that prioritize recycling and donating over simply filling up local landfills. As an experienced high-qualified junks hauling services contractor Surprise AZ, we have perfected a streamlined process that ensures your unwanted items are sorted and disposed of using the most eco-conscious methods available. Whether you are clearing out a residential attic or managing a large-scale commercial cleanout, Junk Butlers delivers the expertise required for a job well done.We understand the specific needs of the Surprise community, offering a blend of reliability and environmental stewardship that sets us apart. Our team is fully equipped to handle bulky furniture, outdated electronics, and general household trash with precision. By choosing an experienced high-qualified junks hauling services contractor Surprise AZ, you are ensuring that your property is cleared quickly by professionals who care about the local landscape. We take pride in being the best agency for those who value green practices and top-tier customer service. Let us handle the heavy lifting while you enjoy a clean, clutter-free space that supports a healthier planet.",
    image: "/images/image-1.webp",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
    description:
      "As the leading Junk Butlers, we are proud to be the premier major junk or trash removal contractor serving a wide range of communities across the Valley. Our mission is to provide efficient, professional hauling services to both residential and commercial clients throughout our extensive service area. We are the top choice for residents in Surprise AZ, offering same-day cleanouts and debris removal. Our expert teams also provide high-quality junk removal in Sun City AZ and Peoria AZ, ensuring that neighboring communities have access to affordable and reliable disposal solutions.For those located further east and south, we act as a trusted service provider in Glendale AZ, handling everything from furniture disposal to large-scale demolition projects. We have also expanded our reach to serve the bustling business districts and luxury estates in Scottsdale AZ and the greater Phoenix AZ metro area. No matter where you are located within these regions, our commitment to eco-friendly practices and superior customer service remains the same. Whether it is a garage cleanout in Peoria or a commercial office renovation in Phoenix, Junk Butlers is the local partner you can depend on for a clutter-free environment.",
    image: "/images/image-2.webp",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Surprise AZ?",
    description:
      "Choosing the right partner for your property cleanup is essential for a stress-free experience. Junk Butlers stands out as the premier choice because we combine local expertise with a commitment to excellence. As a skilled and professional trusted trash removal or demolition services contractor in Surprise AZ, we prioritize your time and property. We don't just haul away junk; we provide a comprehensive service that includes heavy lifting, responsible sorting, and thorough site cleanup. Our reputation as a top-tier Junk Butlers team is built on transparency and reliability.Whether you are dealing with a cluttered residential garage or a complex commercial renovation, we function as a skilled and professional trusted trash removal or demolition services contractor in Surprise AZ that you can count on for fair pricing and same-day availability. We utilize modern equipment and eco-friendly disposal methods to ensure your unwanted items are handled according to the highest industry standards. By choosing us, you are opting for a licensed and insured team that understands the specific needs of the Surprise community. From furniture disposal to full-scale demolition debris hauling, we deliver a seamless, professional experience that allows you to reclaim your space without the hard labor.",
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
