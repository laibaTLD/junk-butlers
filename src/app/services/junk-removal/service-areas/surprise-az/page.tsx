import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceFeaturesSection from "@/sections/ServiceFeaturesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Certified & Professional #1 Junk Removal Contractor Surprise AZ | Same Day Service',
  description: 'Experience professional and affordable junk hauling for homes and offices. As your local, trusted contractor, Junk Butlers provides skilled debris removal, demolition, and same-day trash disposal.',
  openGraph: {
    title: 'Certified & Professional #1 Junk Removal Contractor Surprise AZ | Same Day Service',
    description: 'Experience professional and affordable junk hauling for homes and offices. As your local, trusted contractor, Junk Butlers provides skilled debris removal, demolition, and same-day trash disposal.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified & Professional #1 Junk Removal Contractor Surprise AZ',
    description: 'Experience professional and affordable junk hauling for homes and offices. As your local, trusted contractor, Junk Butlers provides skilled debris removal.',
  },
};

export const revalidate = 60;

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

export default async function JunkRemovalSurprisePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Junk Removal Contractor",
    areaLabel: "Surprise, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  
  const areaIntroParagraphs = [
    "Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Surprise AZ? - Same Day Junk Removal",
    "Finding the right help shouldn't be a hassle when you need to clear clutter. As the premier Junk Butlers, we take pride in being a skilled or professional all home and offices junk or trash removal contractor in Surprise AZ. Whether you are dealing with a cluttered estate or a renovation mess, we stand out as a professional local trash removal company in Surprise AZ that prioritizes efficiency and reliability. As a trusted and premier home debris removal or hauling contractor in Surprise AZ, our team is equipped to handle everything from minor cleanouts to major projects. We provide a certified appliance junks removal service Surprise AZ residents can depend on for eco-friendly disposal.",
    "If you are searching for a local and affordable furniture or appliance disposal contractor Surprise AZ, look no more. Our crew is an experienced and trusted all kind trash or junk removal or demolition contractor or company in Surprise AZ, capable of dismantling old sheds or hauling away construction waste. We are also your best garage junk removal contractor Surprise AZ, helping you reclaim your parking space in hours. From residential hauling to complex commercial projects, we provide the same-day service you deserve. Trust the experts who combine local knowledge with certified professional standards to keep your property clean, safe, and clutter-free today.",
  ];

  const serviceFeaturesParagraphs = [
    "Our Services",
    "Junk Butlers offers comprehensive solutions for every cleanup need. As a skilled junks cleanouts removal contractor in Surprise, AZ, we specialize in residential furniture disposal, commercial office cleanouts, and debris hauling. From certified appliance removal to full demolition, our team provides affordable, same-day service to keep your property clutter-free.",
    "Hire the Most Trusted Residential Household Junk Removal Contractor in Surprise, AZ",
    "When clutter takes over your living space, you need the Junk Butlers to restore your home's comfort. As a certified and trusted all kinds household removal or cleanouts contractor or company Surprise AZ, we specialize in clearing out everything from old furniture and broken appliances to basement debris. We are recognized as a skilled junks cleanouts removal contractor or company in Surprise AZ, offering homeowners a seamless way to reclaim their space.",
    "Whether you are prepping for a move or finishing a renovation, our team acts as a premier and skilled residential or commercial buildings junks or trash removal contractor Surprise AZ. We handle the heavy lifting with precision, ensuring that your property is treated with respect. Our residential services are designed to be affordable and thorough, making us the top choice for families who value efficiency and professional disposal standards in the local community.",
    "Local & Trusted Commercial Office Cleanouts or Business Junk Removal Company in Surprise, AZ",
    "Maintaining a professional environment is essential for business success, which is why Junk Butlers provides top-tier commercial solutions. We are the leading skilled junks cleanouts removal contractor or company in Surprise AZ for retail spaces, warehouses, and corporate offices. If you are relocating or downsizing, our team serves as a premier and skilled residential or commercial buildings junks or trash removal contractor Surprise AZ, managing the disposal of office furniture, E-waste, and bulky equipment.",
    "As a certified and trusted all kinds household removal or cleanouts contractor or company Surprise AZ, our expertise extends into complex business environments where timing and discretion are key. We minimize downtime by offering flexible scheduling, ensuring your business remains productive. From property management cleanouts to routine commercial trash hauling, we provide the reliable, professional partnership your business needs to stay organized and clutter-free in the Surprise area.",
  ];

  const serviceFeaturesBullets = [
    "Friendly Agents - Our local Junk Butlers team provides courteous, professional service, ensuring a stress-free experience for every client.",
    "Quick Response - Need junk gone fast? We offer prompt, same-day hauling and debris removal services throughout Surprise, AZ.",
    "24/7 Support - We are always available to schedule your professional home or office junk removal, anytime you need.",
    "Certified & Professional #1 Contractor",
    "Same-Day Junk Removal Available",
    "Residential & Commercial Services",
    "Eco-Friendly Disposal Methods",
    "Transparent Pricing - No Hidden Fees",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Surprise AZ",
    "Clear your space today with Junk Butlers. As the premier junk removal agency in Surprise, AZ, we offer certified and trusted hauling for homes and offices. From furniture disposal to debris removal, our skilled team delivers professional, same-day service.",
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Surprise AZ",
    "If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Surprise AZ, look no more than Junk Butlers. We understand that accumulating unwanted items can be overwhelming, which is why we offer comprehensive solutions tailored to your specific needs. As a skilled & professional home or offices junks or trash cleanout contractor or company in Surprise AZ, we handle everything from single-item pickups to massive estate or office cleanouts with unmatched efficiency. Our team excels as a residential & commercial old furniture removal contractor Surprise AZ, helping families and business owners dispose of bulky sofas, desks, and filing cabinets safely and responsibly.",
    "We don't just haul away bags; we are also a premier demolition contractor capable of dismantling structures and clearing the resulting debris. Choosing Junk Butlers means choosing a partner committed to the Surprise community, providing transparent pricing and eco-friendly disposal methods. Whether you are dealing with a cluttered garage, a renovated office space, or a backyard full of construction waste, our experts ensure the job is done right the first time. Experience the peace of mind that comes with hiring the most reliable name in the valley. We prioritize your schedule, offering same-day service to ensure your property is restored to its best condition quickly and professionally.",
    "Certified or Trusted Local No1 Eco-Friendly Junks or Trash Removal Contractor Surprise AZ",
    "When it comes to responsible waste management, you deserve a certified or trusted local no1 eco-friendly junks or trash removal contractor Surprise AZ. At Junk Butlers, we believe that professional hauling should not come at the expense of the environment. Our mission is to provide sustainable solutions that prioritize recycling and donating over simply filling up local landfills. As an experienced high-qualified junks hauling services contractor Surprise AZ, we have perfected a streamlined process that ensures your unwanted items are sorted and disposed of using the most eco-conscious methods available. Whether you are clearing out a residential attic or managing a large-scale commercial cleanout, Junk Butlers delivers the expertise required for a job well done.",
    "We understand the specific needs of the Surprise community, offering a blend of reliability and environmental stewardship that sets us apart. Our team is fully equipped to handle bulky furniture, outdated electronics, and general household trash with precision. By choosing an experienced high-qualified junks hauling services contractor Surprise AZ, you are ensuring that your property is cleared quickly by professionals who care about the local landscape. We take pride in being the best agency for those who value green practices and top-tier customer service. Let us handle the heavy lifting while you enjoy a clean, clutter-free space that supports a healthier planet.",
  ];

  const whyChooseUsBullets = [
    "Certified & Professional #1 Contractor",
    "Same-Day Junk Removal Available",
    "Eco-Friendly Disposal Methods",
    "Transparent Pricing - No Hidden Fees",
    "Professional & Courteous Team",
    "24/7 Support Available",
  ];

  const faqQuestions = [
    {
      question: "What services does your junk removal company offer?",
      answer: "Junk Butlers is a skilled and professional trusted trash removal or demolition services contractor in Surprise, AZ. We handle residential household junk, commercial office cleanouts, furniture disposal, and appliance removal. Our team also specializes in demolition debris hauling, ensuring your property is left clean and ready for its next use.",
    },
    {
      question: "Do you offer same-day junk removal in Surprise, AZ?",
      answer: "Yes! As a professional and trusted same-day trash removal contractor Surprise, AZ, we prioritize speed and efficiency. Whether you have a last-minute garage cleanout or urgent office debris, our local team is ready to respond quickly, providing reliable hauling services exactly when you need them most.",
    },
    {
      question: "Is Junk Butlers an eco-friendly removal contractor?",
      answer: "Absolutely. We are a certified or trusted local No. 1 eco-friendly junk or trash removal contractor. We don't just dump items in landfills; we sort through every load to recycle materials and donate usable furniture or appliances to local charities, supporting a greener community in Surprise.",
    },
    {
      question: "Can you handle large-scale commercial office cleanouts?",
      answer: "Yes, we are a premier and skilled residential or commercial buildings junks or trash removal contractor. We assist businesses with E-waste disposal, office furniture removal, and full-scale retail cleanouts. Our professional crew works efficiently to minimize downtime, making us the top choice for commercial projects in the Valley.",
    },
    {
      question: "How do you price your junk removal services?",
      answer: "We offer local and affordable furniture or appliance disposal with transparent pricing. Our rates are based on the volume of junk removed and the type of materials. As a trusted home debris removal or hauling contractor, we provide free, no-obligation estimates to ensure you get the best value.",
    },
  ];

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Surprise",
      region: "AZ",
      description: "Certified & Professional #1 Junk Removal Contractor - Comprehensive junk removal services for Surprise area"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized clean out services for Sun City properties"
    },
    {
      city: "Peoria",
      region: "AZ",
      description: "Complete junk removal and trash hauling services for Peoria residents and businesses"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Fast and reliable trash removal and junk hauling in Glendale"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional junk removal and clean out services throughout Phoenix"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium trash removal and hauling services in Scottsdale"
    }
  ];

  return (
    <ServiceAreaLayout
      landingPageData={landingPageData}
      title={`${service.title} in ${service.areaLabel}`}
      description={
        landingPageData.seoData.description ||
        `${service.title} services in ${service.areaLabel} for residential and commercial properties.`
      }
    >
      <ServiceAreaHeroSection
        serviceName={service.title}
        areaLabel={service.areaLabel}
        heading={service.title}
        subheading="Experience professional and affordable junk hauling for homes and offices"
        description="As your local, trusted contractor, Junk Butlers provides skilled debris removal, demolition, and same-day trash disposal. From furniture to commercial waste, we deliver certified, reliable service across Surprise."
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Surprise AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        bullets={[
          "Friendly Agents - Our local Junk Butlers team provides courteous, professional service, ensuring a stress-free experience for every client.",
          "Quick Response - Need junk gone fast? We offer prompt, same-day hauling and debris removal services throughout Surprise, AZ.",
          "24/7 Support - We are always available to schedule your professional home or office junk removal, anytime you need.",
        ]}
        theme={landingPageData.themeData}
      />

      <ServiceFeaturesSection
        title="Our Services"
        description={serviceFeaturesParagraphs.slice(0, 5).join(" ")}
        features={[
          ...serviceFeaturesBullets,
          ...serviceFeaturesParagraphs.slice(5),
        ]}
        theme={landingPageData.themeData}
      />

      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={servicesContent.description}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={landingPageData.images || []}
          phone={landingPageData.businessData?.phone}
        />
      )}

      <WhyChooseUsSection
        title="Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Surprise AZ"
        paragraphs={whyChooseUsParagraphs}
        bullets={whyChooseUsBullets}
        theme={landingPageData.themeData}
      />

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our junk removal services in Surprise, AZ."
          questions={faqQuestions}
          theme={landingPageData.themeData}
        />
      )}

      <ServiceAreasSection
        serviceAreas={serviceAreas}
        themeData={landingPageData.themeData}
      />
    </ServiceAreaLayout>
  );
}
