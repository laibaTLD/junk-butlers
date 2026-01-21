import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
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
  title: "Professional Clean Out Services Peoria AZ | Complete Property Cleanouts",
  description:
    "Expert clean out services in Peoria, AZ. Professional property cleanouts for homes, businesses, estates, and foreclosures. Thorough and efficient cleanout solutions.",
  openGraph: {
    title: 'Professional Clean Out Services Peoria AZ | Complete Property Cleanouts',
    description: 'Expert clean out services in Peoria, AZ. Professional property cleanouts for homes, businesses, estates, and foreclosures. Thorough and efficient cleanout solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Clean Out Services Peoria AZ | Complete Property Cleanouts',
    description: 'Expert clean out services in Peoria, AZ. Professional property cleanouts for homes, businesses, and estates.',
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

export default async function CleanOutsPeoriaPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Clean Out Contractor Peoria AZ",
    areaLabel: "Peoria, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "Finding a reliable partner to clear your clutter shouldn't be a hassle. As the premier professional local clean out company in Peoria, AZ, Junk Butlers is dedicated to reclaiming your space with efficiency and integrity. Whether you are dealing with a cluttered basement or need a skilled professional all home and offices clean out contractor in Peoria, AZ, our team delivers results that exceed expectations. We take pride in being a trusted and premier home debris removal hauling contractor in Peoria, AZ, specialized in everything from construction cleanup to garage clean out contractor Peoria, AZ services. If you have old electronics or heavy machinery, our certified appliance clean out service Peoria, AZ ensures eco-friendly disposal.",
    "We understand that budget and timing are critical, which is why we are recognized as a local and affordable furniture appliance disposal contractor Peoria, AZ, offering transparent pricing without hidden fees. As an experienced and trusted all kind clean out demolition contractor company in Peoria, AZ, we handle the heavy lifting, loading, and hauling so you don't have to. From residential renovations to massive commercial cleanouts, our same-day clean out options provide the immediate relief you need. Choose the experts who prioritize your satisfaction and the local environment—contact Junk Butlers today for a cleaner, stress-free tomorrow.",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Clean Out Company Peoria AZ",
    "Experience the gold standard with Junk Butlers, your professional and trusted same-day clean out contractor in Peoria, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, clutter-free space with our certified hauling expertise.",
    "Certified or Trusted Local No1 Eco Friendly Clean Out Contractor Peoria AZ",
    "In today's environmentally conscious world, choosing a certified or trusted local #1 eco-friendly clean out contractor in Peoria, AZ, is about community responsibility. We implement sustainable disposal practices, prioritizing recycling, donations, and compliant disposal.",
  ];

  const whyChooseUsBullets = [
    "Peoria Experts — Local, trusted, licensed and insured",
    "Fast Response — Same-day and next-day availability",
    "Eco-Friendly — Recycling, donation, and compliant disposal",
    "Transparent Pricing — No hidden fees",
    "Professional Team — Certified, courteous specialists",
    "Comprehensive Services — Residential and commercial solutions",
  ];

  const faqQuestions = [
    {
      question: "What types of items can Junk Butlers remove?",
      answer:
        "As a skilled and professional clean out contractor in Peoria, AZ, we handle almost everything — residential furniture, old appliances, construction debris, office equipment, and more — with certified, eco-friendly channels.",
    },
    {
      question: "Do you offer same-day clean out service in Peoria?",
      answer:
        "Yes! We pride ourselves on being a professional and trusted same-day clean out contractor in Peoria, AZ. Contact us early for best availability.",
    },
    {
      question: "Are you licensed and insured for demolition?",
      answer:
        "Absolutely. We are a certified and trusted all-kind clean out and light demolition contractor in Peoria, AZ, following strict safety protocols and carrying full insurance.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer transparent, upfront pricing based on the volume your items occupy in our trucks. No hidden fees — premier, skilled service at a fair price.",
    },
    {
      question: "Which areas do you serve besides Peoria?",
      answer:
        "We regularly serve Sun City, Glendale, Surprise, Scottsdale, and Phoenix with the same trusted and reliable service.",
    },
  ];

  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Fast and reliable clean out services for Peoria residents and businesses",
    },
    {
      city: "Phoenix",
      region: "AZ",
      description: "Professional clean out and hauling services throughout Phoenix",
    },
    {
      city: "Glendale",
      region: "AZ",
      description: "Efficient clean out solutions for Glendale properties",
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized clean out services for Sun City senior community",
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive clean out services for Surprise area",
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium clean out services for Scottsdale properties",
    },
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
        serviceName="Clean Out Services"
        areaLabel="Peoria, AZ"
        heading="Professional Clean Out Services in Peoria, AZ"
        subheading="Fast, Reliable & Eco-Friendly Property Cleanouts"
        description="Expert clean out and hauling services for residential and commercial properties. Same-day service available."
        bullets={[
          {
            title: "Friendly Agents",
            description:
              "Junk Butlers provides courteous, professional service. Our local Peoria team treats your home with total respect.",
          },
          {
            title: "Quick Response",
            description:
              "Need it gone now? We offer same-day clean out service and rapid debris hauling across Peoria, AZ.",
          },
          {
            title: "24/7 Support",
            description:
              "Our trusted clean out experts are available around the clock for all your urgent disposal needs.",
          },
        ]}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Clean Out Contractor or Company in Peoria AZ? - Same Day Service"
        paragraphs={areaIntroParagraphs}
        theme={landingPageData.themeData}
      />

      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={`Our Services

Junk Butlers offers comprehensive solutions for every cleanup challenge. As a skilled clean out removal company in Peoria, AZ, we provide professional and affordable residential hauling, commercial office cleanouts, and certified appliance disposal. From furniture removal to construction debris, our trusted team ensures a clutter-free space with same-day service.

Hire Now the Most Trusted Residential Household Clean Out Contractor in Peoria, AZ

When clutter takes over your home, you need a certified and trusted all-kinds household removal cleanouts contractor in Peoria, AZ, to restore order. Junk Butlers specializes in comprehensive residential solutions, ranging from single-item pickups to full-scale estate clearing. As a premier and skilled residential clean out contractor in Peoria, AZ, we understand that your home is your sanctuary. Our team is trained to handle delicate situations with professionalism, ensuring that old furniture, broken appliances, and accumulated debris are removed without damaging your property.

We pride ourselves on being a skilled clean out removal company in Peoria, AZ, that prioritizes eco-friendly disposal methods. Whether you are prepping for a move or simply reclaiming your garage, our local experts provide the heavy lifting and efficient hauling you deserve. Don't let household waste diminish your quality of life; choose Peoria's favorite residential team for a spotless, stress-free home environment today.

Local & Trusted Commercial Office Cleanouts & Business Clean Out Company in Peoria, AZ

Maintaining a productive workspace requires a clutter-free environment, and Junk Butlers is the local and trusted commercial office cleanouts business clean out company in Peoria, AZ, that local enterprises rely on. We serve as a premier and skilled commercial buildings clean out contractor in Peoria, AZ, offering tailored logistics for retail spaces, corporate offices, and construction sites. Our team works around your schedule to ensure minimal disruption to your daily operations, providing a seamless transition during office moves or renovations.

As a certified and trusted all-kinds removal contractor in Peoria, AZ, we handle everything from electronic e-waste and office furniture to large-scale industrial debris. Our reputation as a skilled clean out removal contractor in Peoria, AZ, is built on reliability, transparent pricing, and rapid response times. Protect your professional image and improve workplace safety by partnering with a hauling company that understands the unique demands`}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}

      <CTASection
        data={{
          heading: "Junk Butlers - Your Trusted Premier No1 Clean Out Company or Agency Peoria AZ",
          subHeading: "",
          description:
            "Experience the gold standard with Junk Butlers, your professional and trusted same-day clean out contractor in Peoria, AZ. We provide skilled home debris removal and affordable furniture disposal, ensuring a clean, clutter-free space with our certified hauling expertise.",
          ctaButton: { label: "Get a Free Quote", href: "#contact" },
        }}
        theme={landingPageData.themeData}
      />

      <ServiceOverlayCardSection
        heading="Looking for a Skilled and Top-Rated Home and Offices Clean Out Demolition Contractor Peoria AZ"
        description={`When you are searching for a skilled and top-rated home and offices clean out demolition contractor in Peoria, AZ, you need a team that combines technical expertise with local reliability. Junk Butlers stands out as the premier choice, offering comprehensive solutions for both interior cleanouts and light demolition projects. As a skilled and professional home or offices clean out contractor in Peoria, AZ, we understand the unique challenges of clearing out large properties. Whether you are stripping a room down to the studs or simply need a massive amount of debris hauled away, our crew manages every phase with precision and safety.<br/><br/>We take pride in being a versatile residential and commercial old furniture removal contractor in Peoria, AZ, ensuring that bulky items like desks, cubicles, sofas, and filing cabinets are removed without disrupting your day. Our demolition services are perfect for homeowners renovating a kitchen or businesses updating their retail layout. By choosing Junk Butlers, you are partnering with a skilled and professional company that prioritizes eco-friendly disposal and site safety. From the initial heavy lifting to the final sweep-up, we provide a seamless experience that restores the value and functionality of your property. Don't settle for less—hire Peoria's most trusted experts for a clutter-free and professional result every time.`}
        backgroundImage={{
          src: "/images/image-10.webp",
          alt: "Clean out and demolition services in Peoria, AZ",
        }}
        secondImage={{
          src: "/images/image-2.webp",
          alt: "Professional clean out team in Peoria, AZ",
        }}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: "Certified or Trusted Local No1 Eco Friendly Clean Out Contractor Peoria AZ",
          description:
            "In today's environmentally conscious world, choosing a certified or trusted local #1 eco-friendly clean out contractor in Peoria, AZ, is more than just a matter of convenience—it's about community responsibility. Junk Butlers leads the way by implementing sustainable disposal practices that keep our local landfills from overflowing. As an experienced high-qualified clean out hauling services contractor in Peoria, AZ, we don't just \"dump\" your items; we carefully sort through every load to identify recyclables, salvageable materials, and items that can be donated to local charities.\n\nOur commitment to being a certified and trusted provider means we stay updated on the latest environmental regulations and green disposal methods. When you hire Junk Butlers, you are supporting a local #1 eco-friendly mission that prioritizes the planet alongside efficiency. Whether we are clearing out a residential garage or managing a large-scale commercial site, our high-qualified clean out hauling team ensures that your unwanted items are handled with the highest ethical standards. We take the guesswork out of \"green\" living by providing a seamless, professional experience that leaves your property spotless and your conscience clear. For reliable, earth-friendly solutions that don't compromise on power or speed, trust Peoria's premier hauling experts to get the job done right.",
        }}
        row1Image={{
          src: "/images/image-10.webp",
          alt: "Eco-friendly clean out services in Peoria, AZ",
        }}
        row2={{
          heading: "Our Service Areas for All Major Clean Out Projects",
          description:
            "At Junk Butlers, we take pride in being the most reliable and accessible provider for all your hauling needs, extending our expert reach far beyond a single zip code. Our comprehensive service areas for all major clean out contractor projects cover the entire Northwest Valley and beyond, ensuring that professional help is always just a phone call away. We are deeply rooted as your experts in Peoria, AZ, but our fleet frequently services the neighboring communities of Sun City, AZ, and Glendale, AZ, providing rapid response times for both residential and commercial clients.\n\nAs a premier regional provider, we have expanded our operations to meet the growing demand for high-quality disposal in Surprise, AZ, and the upscale residential markets of Scottsdale, AZ. Even if you are located in the heart of the city, our Phoenix, AZ, teams are equipped to handle large-scale debris removal and urgent cleanouts with the same level of care and precision. By maintaining a presence across these major hubs, Junk Butlers ensures that whether you are clearing out a suburban garage or a downtown office suite, you receive the same certified and trusted service that has made us the #1 choice in the region.",
        }}
        row2Image={{
          src: "/images/image-2.webp",
          alt: "Service areas coverage map for clean out services",
        }}
        row3={{
          heading: "Why Choose Junk Butlers Contractor or Company for Your Clean Out Services Contractor Peoria AZ?",
          description:
            "Choosing the right partner for your property cleanout is essential for a stress-free experience, and that is exactly why so many residents and business owners turn to Junk Butlers. As a skilled and professional trusted clean out or demolition services contractor in Peoria, AZ, we have built our reputation on a foundation of reliability, transparency, and unmatched work ethic. When you choose us, you aren't just hiring a truck; you are hiring a dedicated team that understands the logistics of efficient hauling and safe demolition. Junk Butlers stands out from the competition by offering a unique blend of affordability and high-end service.\n\nWe realize that every project—from a simple furniture pickup to a complex site demolition—requires a tailored approach. Our status as a skilled and professional agency means we arrive on time, provide upfront pricing, and utilize the best equipment to ensure the job is done safely and quickly. Furthermore, being a trusted clean out contractor in Peoria, AZ, means we are fully licensed and insured, giving you total peace of mind while we work on your property. We treat your home or office with the utmost respect, ensuring a thorough cleanup that leaves your space ready for its next chapter.",
        }}
        row3Image={{
          src: "/images/image-3.webp",
          alt: "Professional clean out team working in Peoria, AZ",
        }}
      />

      {faqQuestions.length > 0 && (
        <FAQSection
          title="FAQs"
          description="Get detailed answers about our clean out services in Peoria, AZ."
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
