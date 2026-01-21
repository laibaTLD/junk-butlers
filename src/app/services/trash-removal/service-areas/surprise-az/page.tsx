import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreaBulletsSection from "@/sections/ServiceAreaBulletsSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Professional Trash Removal Services Surprise AZ | Fast Trash Hauling',
  description: 'Expert trash removal services in Surprise, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties in Surprise and surrounding areas.',
  openGraph: {
    title: 'Professional Trash Removal Services Surprise AZ | Fast Trash Hauling',
    description: 'Expert trash removal services in Surprise, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties in Surprise and surrounding areas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Trash Removal Services Surprise AZ | Fast Trash Hauling',
    description: 'Expert trash removal services in Surprise, AZ. Fast, affordable, and reliable trash hauling for residential and commercial properties.',
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

export default async function TrashRemovalSurprisePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Trash Removal Contractor Surprise AZ",
    areaLabel: "Surprise, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Finding a reliable partner to clear your clutter shouldn't be a hassle. As the premier professional local trash removal company in Surprise, AZ, Junk Butlers is dedicated to reclaiming your space with efficiency and integrity. Whether you are dealing with a cluttered basement or need a skilled professional all home and offices junk removal contractor in Surprise, AZ, our team delivers results that exceed expectations. We take pride in being a trusted and premier home debris removal hauling contractor in Surprise, AZ, specialized in everything from construction cleanup to garage junk removal contractor Surprise, AZ services. If you have old electronics or heavy machinery, our certified appliance trash removal service Surprise, AZ ensures eco-friendly disposal.",
    "We understand that budget and timing are critical, which is why we are recognized as a local and affordable furniture appliance disposal contractor Surprise, AZ, offering transparent pricing without hidden fees. As an experienced and trusted all kind trash junk removal demolition contractor company in Surprise, AZ, we handle the heavy lifting, loading, and hauling so you don't have to. From residential renovations to massive commercial cleanouts, our same-day junk removal options provide the immediate relief you need. Choose the experts who prioritize your satisfaction and the local environment—contact Junk Butlers today for a cleaner, junk-free tomorrow.",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Trash Removal Company Surprise AZ",
    "Experience the gold standard with Junk Butlers, your professional and trusted same-day trash removal contractor in Surprise, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, junk-free space with our certified hauling expertise.",
    "Certified or Trusted Local No1 Eco Friendly Trash Removal Contractor Surprise AZ",
    "In today's environmentally conscious world, choosing a certified or trusted local #1 eco-friendly trash removal contractor in Surprise, AZ, is about community responsibility. We implement sustainable disposal practices, prioritizing recycling, donations, and compliant disposal.",
  ];

  const whyChooseUsBullets = [
    "Surprise Experts — Local, trusted, licensed and insured",
    "Fast Response — Same-day and next-day availability",
    "Eco-Friendly — Recycling, donation, and compliant disposal",
    "Transparent Pricing — No hidden fees",
    "Professional Team — Certified, courteous specialists",
    "Comprehensive Services — Residential and commercial solutions",
  ];

  
  const faqQuestions = [
    {
      question: "What types of items can Junk Butlers remove?",
      answer: "As a skilled and professional trash removal contractor in Surprise, AZ, we handle almost everything — residential furniture, old appliances, construction debris, office equipment, and more — with certified, eco-friendly channels.",
    },
    {
      question: "Do you offer same-day junk removal in Surprise?",
      answer: "Yes! We pride ourselves on being a professional and trusted same-day trash removal contractor in Surprise, AZ. Contact us early for best availability.",
    },
    {
      question: "Are you licensed and insured for demolition?",
      answer: "Absolutely. We are a certified and trusted all-kind trash removal and light demolition contractor in Surprise, AZ, following strict safety protocols and carrying full insurance.",
    },
    {
      question: "How does pricing work?",
      answer: "We offer transparent, upfront pricing based on the volume your junk occupies in our trucks. No hidden fees — premier, skilled service at a fair price.",
    },
    {
      question: "Which areas do you serve besides Surprise?",
      answer: "We regularly serve Sun City, Glendale, Peoria, Scottsdale, and Phoenix with the same trusted and reliable service.",
    },
  ];

  const serviceAreas = [
    { city: "Peoria", region: "AZ", description: "Fast and reliable trash removal services for Peoria residents and businesses" },
    { city: "Phoenix", region: "AZ", description: "Professional trash removal and hauling services throughout Phoenix" },
    { city: "Glendale", region: "AZ", description: "Efficient trash removal solutions for Glendale properties" },
    { city: "Sun City", region: "AZ", description: "Specialized trash removal services for Sun City senior community" },
    { city: "Surprise", region: "AZ", description: "Comprehensive trash removal services for Surprise area" },
    { city: "Scottsdale", region: "AZ", description: "Premium trash removal services for Scottsdale properties" }
  ];

  return (
    <ServiceAreaLayout
      landingPageData={landingPageData}
      title={`${service.title} in ${service.areaLabel}`}
      description={landingPageData.seoData.description || `${service.title} services in ${service.areaLabel} for residential and commercial properties.`}
    >
      <ServiceAreaHeroSection
        serviceName="Trash Removal"
        areaLabel="Surprise, AZ"
        heading="Professional Trash Removal Services in Surprise, AZ"
        subheading="Fast, Reliable & Eco-Friendly Junk Hauling"
        description="Expert trash removal and junk hauling services for residential and commercial properties. Same-day service available."
        bullets={[
          {
            title: "Friendly Agents",
            description:
              "Junk Butlers provides courteous, professional service. Our local Surprise team treats your home with total respect.",
          },
          {
            title: "Quick Response",
            description:
              "Need it gone now? We offer same-day trash removal and rapid debris hauling across Surprise, AZ.",
          },
          {
            title: "24/7 Support",
            description:
              "Our trusted junk hauling experts are available around the clock for all your urgent disposal needs.",
          },
        ]}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />
      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Surprise AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        theme={landingPageData.themeData}
      />
      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={`Our Services

Junk Butlers offers comprehensive solutions for every cleanup challenge. As a skilled trash cleanouts removal company in Surprise, AZ, we provide professional and affordable residential hauling, commercial office cleanouts, and certified appliance disposal. From furniture removal to construction debris, our trusted team ensures a clutter-free space with same-day service.

Hire Now the Most Trusted Residential Household Trash Removal Contractor in Surprise, AZ

When clutter takes over your home, you need a certified and trusted all-kinds household removal cleanouts contractor in Surprise, AZ, to restore order. Junk Butlers specializes in comprehensive residential solutions, ranging from single-item pickups to full-scale estate clearing. As a premier and skilled residential trash removal contractor in Surprise, AZ, we understand that your home is your sanctuary. Our team is trained to handle delicate situations with professionalism, ensuring that old furniture, broken appliances, and accumulated debris are removed without damaging your property.

We pride ourselves on being a skilled trash cleanouts removal company in Surprise, AZ, that prioritizes eco-friendly disposal methods. Whether you are prepping for a move or simply reclaiming your garage, our local experts provide the heavy lifting and efficient hauling you deserve. Don't let household waste diminish your quality of life; choose Surprise's favorite residential team for a spotless, stress-free home environment today.

Local & Trusted Commercial Office Cleanouts & Business Junk Removal Company in Surprise, AZ

Maintaining a productive workspace requires a clutter-free environment, and Junk Butlers is the local and trusted commercial office cleanouts business junk removal company in Surprise, AZ, that local enterprises rely on. We serve as a premier and skilled commercial buildings trash removal contractor in Surprise, AZ, offering tailored logistics for retail spaces, corporate offices, and construction sites. Our team works around your schedule to ensure minimal disruption to your daily operations, providing a seamless transition during office moves or renovations.

As a certified and trusted all-kinds removal contractor in Surprise, AZ, we handle everything from electronic e-waste and office furniture to large-scale industrial debris. Our reputation as a skilled trash cleanouts removal contractor in Surprise, AZ, is built on reliability, transparent pricing, and rapid response times. Protect your professional image and improve workplace safety by partnering with a hauling company that understands the unique demands`}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}
      <CTASection
        data={{
          heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Surprise AZ",
          subHeading: "",
          description: "Experience the gold standard with Junk Butlers, your professional and trusted same-day trash removal contractor in Surprise, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, junk-free space with our certified hauling expertise.",
          ctaButton: { label: "Get a Free Quote", href: "#contact" }
        }}
        theme={landingPageData.themeData}
      />

      <ServiceOverlayCardSection
        heading="Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Surprise AZ"
        description={`When you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor in Surprise, AZ, you need a team that combines technical expertise with local reliability. Junk Butlers stands out as the premier choice, offering comprehensive solutions for both interior cleanouts and light demolition projects. As a skilled and professional home or offices trash cleanout contractor in Surprise, AZ, we understand the unique challenges of clearing out large properties. Whether you are stripping a room down to the studs or simply need a massive amount of debris hauled away, our crew manages every phase with precision and safety.<br/><br/>We take pride in being a versatile residential and commercial old furniture removal contractor in Surprise, AZ, ensuring that bulky items like desks, cubicles, sofas, and filing cabinets are removed without disrupting your day. Our demolition services are perfect for homeowners renovating a kitchen or businesses updating their retail layout. By choosing Junk Butlers, you are partnering with a skilled and professional company that prioritizes eco-friendly disposal and site safety. From the initial heavy lifting to the final sweep-up, we provide a seamless experience that restores the value and functionality of your property. Don't settle for less—hire Surprise's most trusted experts for a clutter-free and professional result every time.`}
        backgroundImage={{
          src: "/images/image-10.webp",
          alt: "Trash removal and demolition services in Surprise, AZ"
        }}
        secondImage={{
          src: "/images/image-2.webp",
          alt: "Professional junk removal team in Surprise, AZ"
        }}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: "Certified or Trusted Local No1 Eco Friendly Trash or Trash Removal Contractor Surprise AZ",
          description: "In today's environmentally conscious world, choosing a certified or trusted local #1 eco-friendly trash removal contractor in Surprise, AZ, is more than just a matter of convenience—it's about community responsibility. Junk Butlers leads the way by implementing sustainable disposal practices that keep our local landfills from overflowing. As an experienced high-qualified trash haulings services contractor in Surprise, AZ, we don't just \"dump\" your items; we carefully sort through every load to identify recyclables, salvageable materials, and items that can be donated to local charities.\n\nOur commitment to being a certified and trusted provider means we stay updated on the latest environmental regulations and green disposal methods. When you hire Junk Butlers, you are supporting a local #1 eco-friendly mission that prioritizes the planet alongside efficiency. Whether we are clearing out a residential garage or managing a large-scale commercial site, our high-qualified trash haulings team ensures that your unwanted items are handled with the highest ethical standards. We take the guesswork out of \"green\" living by providing a seamless, professional experience that leaves your property spotless and your conscience clear. For reliable, earth-friendly solutions that don't compromise on power or speed, trust Surprise's premier hauling experts to get the job done right."
        }}
        row1Image={{
          src: "/images/image-10.webp",
          alt: "Eco-friendly trash removal services in Surprise, AZ"
        }}
        row2={{
          heading: "Our Services Areas for All Major Junk & Trash Removal Contractor",
          description: "At Junk Butlers, we take pride in being the most reliable and accessible provider for all your hauling needs, extending our expert reach far beyond a single zip code. Our comprehensive service areas for all major junk or trash removal contractor projects cover the entire Northwest Valley and beyond, ensuring that professional help is always just a phone call away. We are deeply rooted as your experts in Surprise, AZ, but our fleet frequently services the neighboring communities of Sun City, AZ, and Glendale, AZ, providing rapid response times for both residential and commercial clients.\n\nAs a premier regional provider, we have expanded our operations to meet the growing demand for high-quality disposal in Peoria, AZ, and the upscale residential markets of Scottsdale, AZ. Even if you are located in the heart of the city, our Phoenix, AZ, teams are equipped to handle large-scale debris removal and urgent cleanouts with the same level of care and precision. By maintaining a presence across these major hubs, Junk Butlers ensures that whether you are clearing out a suburban garage or a downtown office suite, you receive the same certified and trusted service that has made us the #1 choice in the region."
        }}
        row2Image={{
          src: "/images/image-2.webp",
          alt: "Service areas coverage map for junk removal services"
        }}
        row3={{
          heading: "Why Choose Junk Butlers Contractor or Company for your Trash Removal Services Contractor Surprise AZ?",
          description: "Choosing the right partner for your property cleanout is essential for a stress-free experience, and that is exactly why so many residents and business owners turn to Junk Butlers. As a skilled and professional trusted trash removal or demolition services contractor in Surprise, AZ, we have built our reputation on a foundation of reliability, transparency, and unmatched work ethic. When you choose us, you aren't just hiring a truck; you are hiring a dedicated team that understands the logistics of efficient hauling and safe demolition. Junk Butlers stands out from the competition by offering a unique blend of affordability and high-end service.\n\nWe realize that every project—from a simple furniture pickup to a complex site demolition—requires a tailored approach. Our status as a skilled and professional agency means we arrive on time, provide upfront pricing, and utilize the best equipment to ensure the job is done safely and quickly. Furthermore, being a trusted trash removal contractor in Surprise, AZ, means we are fully licensed and insured, giving you total peace of mind while we work on your property. We treat your home or office with the utmost respect, ensuring a thorough cleanup that leaves your space ready for its next chapter."
        }}
        row3Image={{
          src: "/images/image-3.webp",
          alt: "Professional junk removal team working in Surprise, AZ"
        }}
      />
      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our trash removal services in Surprise, AZ."
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
