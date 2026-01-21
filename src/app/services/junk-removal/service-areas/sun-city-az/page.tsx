
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceFeaturesSection from "@/sections/ServiceFeaturesSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: 'Certified & Professional #1 Junk Removal Contractor Sun City AZ | Same Day Service',
  description: 'Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. We provide professional and affordable home and offices junks removal services, including same day trash removal and furniture disposal.',
  openGraph: {
    title: 'Certified & Professional #1 Junk Removal Contractor Sun City AZ | Same Day Service',
    description: 'Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. We provide professional and affordable home and offices junks removal services, including same day trash removal and furniture disposal.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified & Professional #1 Junk Removal Contractor Sun City AZ',
    description: 'Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ.',
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

export default async function JunkRemovalSunCityPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Junk Removal Contractor Sun City AZ",
    areaLabel: "Sun City, AZ",
    description: "Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. We provide professional and affordable home and offices junks removal services, including same day trash removal and furniture disposal.",
    bullets: [
      {
        title: "Friendly Agents",
        description: "Our local and trusted team provides professional furniture disposal with a neighborly, stress-free customer experience."
      },
      {
        title: "Quick Response",
        description: "Need same-day trash removal? Our skilled contractors arrive fast to clear your Sun City home or office."
      },
      {
        title: "24/7 Support",
        description: "Reliable residential or commercial junk hauling support is available anytime you need expert Sun City debris removal."
      }
    ]
  };

  const servicesContent = landingPageData.content?.services;
  
  const areaIntroParagraphs = [
    "Finding a reliable partner for property cleanouts shouldn't be a hassle. If you are searching for a professional and trusted junk or trash removal contractor or company in Sun City AZ, Junk Butlers is your premier local solution. As an Experienced and trusted all kind trash or junk removal or demolition contractor or company in Sun City AZ, we specialize in clearing out clutter with unmatched efficiency and care. Whether you need a skilled or professional all home and offices junk or trash removal contractor in Sun City AZ for a corporate relocation or a garage junk removal contractor Sun City AZ to reclaim your parking space, our team is ready to help.",
    "We take pride in being a professional local trash removal company in Sun City AZ that prioritizes the community's needs, offering certified appliance junks removal service Sun City AZ to ensure your old electronics and white goods are handled responsibly. From light structures to heavy waste, we are the trusted and premier home debris removal or hauling contractor in Sun City AZ you can count on for every project. As a local and affordable furniture or appliance disposal contractor Sun City AZ, we guarantee transparent pricing and same day junk removal to keep your transition seamless. Let Junk Butlers handle the heavy lifting, providing the professional debris hauling and demolition services you deserve to keep your residential or commercial property clean, safe, and completely clutter-free."
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Sun City AZ",
    "Experience the best with Junk Butlers, your skilled junks cleanouts removal contractor or company in Sun City AZ. We provide professional and affordable home and offices junks removal services, specializing in trusted same day trash removal and furniture disposal.",
    "Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Sun City AZ",
    "If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Sun City AZ, look no more than the experts at Junk Butlers. Our team has built a reputation as the most skilled & professional home or offices junks or trash cleanout contractor or company in Sun City AZ, helping residents and business owners reclaim their valuable space. We understand that junk accumulation can be stressful, which is why we provide streamlined, heavy-duty hauling solutions tailored to your specific needs. As a premier residential & commercial old furniture removal contractor Sun City AZ, we have the tools and experience to handle everything from bulky sofas to entire office workstations.",
    "Junk Butlers doesn't just pick up trash; we offer comprehensive demolition and cleanout services that ensure your property is left spotless and ready for its next use. Our commitment to being a skilled and top rated home and offices trash or junk removal demolition contractor Sun City AZ means we prioritize safety, efficiency, and eco-friendly disposal methods. Whether you are clearing out a residential garage or managing a large-scale commercial renovation, our professional crew is dedicated to providing five-star service. Trust the local leaders who combine affordable pricing with unmatched expertise. Contact us today to experience why we are the preferred choice for all demolition and junk hauling projects throughout the Sun City area.",
    "Certified or Trusted Local No1 Eco Friendly Junks or Trash Removal Contractor Sun City AZ",
    "Choosing a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ means more than just clearing space; it means ensuring your unwanted items are handled with environmental responsibility. At Junk Butlers, we take our commitment to the planet seriously. As an experienced high-qualified junks hauling services contractor Sun City AZ, we prioritize recycling and donating usable goods over simply hauling everything to a landfill. Our team understands the unique needs of the Sun City community, providing a green solution for those who want to declutter their homes and offices responsibly.",
    "When you hire Junk Butlers, you are partnering with a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ that combines professional efficiency with sustainable practices. Our crew is trained to identify materials that can be repurposed, from old metals to electronics and furniture. As an experienced high-qualified junks hauling services contractor Sun City AZ, we manage the heavy lifting and sorting so you don't have to. We believe that professional junk removal should be both affordable and ethically sound. By choosing our eco-friendly services, you are helping to keep Sun City beautiful while enjoying a clean, junk-free environment. Whether it is a single appliance or a full-property cleanout, we provide the reliable, high-quality service you deserve.",
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
      question: "What items do you remove in Sun City, AZ?",
      answer: "As a skilled junks cleanouts removal contractor or company in Sun City AZ, Junk Butlers handles almost everything. We specialize in certified appliance junks removal, old furniture, electronics, yard waste, and construction debris. Whether it's a single sofa or a full garage, our team clears it quickly."
    },
    {
      question: "Do you offer same-day junk removal services?",
      answer: "Yes! We are a professional and trusted same day trash removal contractor Sun City AZ. We understand that clutter can be urgent, so we prioritize rapid response times. Contact us early in the day to secure your spot and have your unwanted items hauled away by this evening."
    },
    {
      question: "Are your junk removal services environmentally friendly?",
      answer: "Absolutely. As a certified or trusted local no1 eco-friendly junks or trash removal contractor, we prioritize recycling and donations. Junk Butlers works hard to keep Sun City green by ensuring that appliances, metals, and usable furniture are diverted from landfills whenever possible for a sustainable future."
    },
    {
      question: "Do you provide commercial office cleanout services?",
      answer: "Yes, we are a local and trusted commercial offices cleanouts or business junk removal contractor. We help Sun City businesses dispose of office furniture, old computers, and retail fixtures. Our team works efficiently to minimize disruption to your operations, ensuring your professional workspace remains clean, organized, and productive."
    },
    {
      question: "How do you determine your removal pricing?",
      answer: "We are a local and affordable furniture or appliance disposal contractor Sun City AZ that offers transparent, volume-based pricing. Our rates depend on the space your items occupy in our truck. We provide free, no-obligation estimates to ensure you get the most competitive price for your specific haul."
    }
  ];

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Sun City",
      region: "AZ",
      description: "Certified & Professional #1 Junk Removal Contractor - Complete junk removal and trash hauling services"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive junk removal services for Surprise area"
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
        serviceName="Junk Removal"
        areaLabel="Sun City, AZ"
        heading="Professional Junk Removal Services in Sun City, AZ"
        subheading="Fast, Reliable & Eco-Friendly Junk Hauling"
        description={service.description}
        bullets={service.bullets}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Sun City AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        bullets={[
          "Friendly Agents - Our local and trusted team provides professional, polite service for every Sun City junk hauling project.",
          "Quick Response - Need it gone? Contact Junk Butlers for professional and trusted same day trash removal today.",
          "24/7 Support - We offer affordable home and offices junks removal services around the clock for your convenience.",
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

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our junk removal services in Sun City, AZ."
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
