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
  title: "Professional Trash Removal Services Scottsdale AZ | Luxury Junk Hauling",
  description:
    "Expert trash removal services in Scottsdale, AZ. Fast, discreet, and reliable junk hauling for upscale residential and commercial properties across the East Valley.",
  openGraph: {
    title: "Professional Trash Removal Services Scottsdale AZ | Luxury Junk Hauling",
    description:
      "Expert trash removal services in Scottsdale, AZ. Fast, discreet, and reliable junk hauling for upscale residential and commercial properties across the East Valley.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Trash Removal Services Scottsdale AZ | Luxury Junk Hauling",
    description:
      "Expert trash removal services in Scottsdale, AZ. Fast, discreet, and reliable junk hauling for upscale residential and commercial properties.",
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

export default async function TrashRemovalScottsdalePage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Trash Removal Contractor Scottsdale AZ",
    areaLabel: "Scottsdale, AZ",
  } as const;

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "When you need to reclaim your space, finding an experienced and trusted all kind trash or junk removal or demolition contractor or company in Scottsdale AZ is essential. At Junk Butlers, we understand that clutter can become overwhelming, which is why we serve as your trusted and premier home debris removal or hauling contractor in Scottsdale AZ. Whether you are dealing with a messy renovation or simply clearing out the attic, our skilled or professional all home and offices junk or trash removal contractor in Scottsdale AZ is ready to help. As a professional local trash removal company in Scottsdale AZ, we specialize in everything from certified appliance trash removal service Scottsdale AZ to full-scale garage junk removal contractor Scottsdale AZ projects.",
    "We pride ourselves on being a local and affordable furniture or appliance disposal contractor Scottsdale AZ residents can rely on for transparent pricing and efficiency. Our mission is to provide high-quality, seamless solutions for every client, ensuring that your property remains clean and functional. Don't settle for subpar service when you can work with the best. Experience the difference of a professional and trusted same day trash removal contractor Scottsdale AZ today. Let our team handle the heavy lifting while you enjoy a clutter-free environment. Contact us now for your estimate and see why we are the top choice for residential and commercial hauling.",
  ];

  const faqQuestions = [
    {
      question: "What services do Junk Butlers provide in Scottsdale?",
      answer:
        "As a skilled and professional trusted trash removal or demolition services contractor in Scottsdale AZ, Junk Butlers handles everything. We provide residential and commercial old furniture removal, certified appliance disposal, and full garage cleanouts. Whether it is heavy construction debris or simple household clutter, our team delivers.",
    },
    {
      question: "Do you offer same-day trash removal services?",
      answer:
        "Yes! We are a professional and trusted same day trash removal contractor Scottsdale AZ. We understand that some hauls are urgent, so we prioritize rapid response times for offices and homes. Contact Junk Butlers early to secure your spot for immediate, high-quality hauling and debris clearing.",
    },
    {
      question: "Are your trash removal services eco-friendly?",
      answer:
        "Absolutely. We are a certified or trusted local no1 eco-friendly trash removal contractor Scottsdale AZ. Junk Butlers prioritizes recycling and donating usable items to local charities. Our experienced high-qualified trash haulings services ensure that we minimize landfill waste while keeping our beautiful Scottsdale community clean.",
    },
    {
      question: "How much does junk removal cost in Scottsdale?",
      answer:
        "We take pride in being a local and affordable furniture or appliance disposal contractor Scottsdale AZ. Our pricing is transparent and based on the volume of debris. As a skilled trash cleanouts removal contractor, we provide free estimates to ensure you get the best value for your project.",
    },
    {
      question: "Do you handle commercial office cleanouts?",
      answer:
        "Yes, we are a local and trusted commercial offices cleanouts and business junk removal contractor. Junk Butlers helps businesses in Scottsdale, Phoenix, and Glendale clear out old office furniture, e-waste, and warehouse clutter. Our skilled and professional team ensures your workspace is cleared with minimal business disruption.",
    },
  ];

  const serviceAreas = [
    {
      city: "Scottsdale",
      region: "AZ",
      description:
        "Certified and professional same day trash removal for every neighborhood",
    },
    {
      city: "Peoria",
      region: "AZ",
      description:
        "Dedicated junk removal specialists for growing suburbs and local businesses",
    },
    {
      city: "Sun City",
      region: "AZ",
      description:
        "Respectful, reliable assistance for household transitions and estate cleanouts",
    },
    {
      city: "Glendale",
      region: "AZ",
      description:
        "Garage cleanouts to construction debris hauling with premier service",
    },
    {
      city: "Surprise",
      region: "AZ",
      description:
        "No. 1 rated junk removal and demolition support for rapid-growth communities",
    },
    {
      city: "Phoenix",
      region: "AZ",
      description:
        "High-volume commercial trash removal and residential hauling every day",
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
        serviceName="Trash Removal"
        areaLabel="Scottsdale, AZ"
        heading="Certified & Professional #1 Trash Removal Contractor Scottsdale AZ"
        subheading="Clear the clutter with Junk Butlers, your local and trusted residential or commercial trash removal and demolition contractor in Scottsdale, AZ."
        description="From offices to homes, our professional and affordable team provides certified, same-day furniture disposal and skilled debris removal."
        bullets={[
          {
            title: "Friendly Agents",
            description:
              "Our local and trusted team provides professional junk hauling with a smile for every Scottsdale client.",
          },
          {
            title: "Quick Response",
            description:
              "Need same day trash removal? Our skilled home debris and trash removal contractor arrives fast.",
          },
          {
            title: "24/7 Support",
            description:
              "We offer affordable home and offices trash removal services around the clock for your convenience.",
          },
        ]}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Garbage or Trash Removal Contractor or Company in Scottsdale AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        theme={landingPageData.themeData}
      />

      {servicesContent && (
        <ServicesSection
          title={servicesContent.title}
          description={`Our Services

Junk Butlers is your premier and skilled residential or commercial buildings trash removal contractor Scottsdale AZ. From certified appliance disposal to skilled trash cleanouts, we provide affordable solutions for every need. Trust our professional local trash removal company for same-day results that keep your property clean and clutter-free.

Hire Now Most Trusted Residential Household Trash Removal Contractor Scottsdale AZ

When it comes to your home, you deserve a certified and trusted all kinds household removal or cleanouts contractor or company Scottsdale AZ. At Junk Butlers, we specialize in restoring order to your living space. Whether you are dealing with years of accumulated clutter in the attic or need a skilled trash cleanouts removal contractor or company in Scottsdale AZ for a post-renovation cleanup, our team is ready to assist.

We are recognized as a premier and skilled residential or commercial buildings trash or trash removal contractor Scottsdale AZ, ensuring that every item is handled with care and disposed of responsibly. From heavy furniture to daily household debris, our professional crew provides the muscle and the strategy to clear your property efficiently. Don’t let junk diminish your home's comfort; choose the local experts who prioritize your satisfaction and offer seamless, stress-free residential hauling solutions today.

Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor in Scottsdale AZ

Business owners require efficiency and reliability, which is why we are the premier and skilled residential or commercial buildings trash or trash removal contractor Scottsdale AZ. Junk Butlers provides comprehensive solutions for businesses looking to declutter warehouses, retail spaces, or corporate suites. As a skilled trash cleanouts removal contractor or company in Scottsdale AZ, we minimize downtime by working around your schedule to remove office furniture, electronic waste, and general business debris.

We are a certified and trusted all kinds household removal or cleanouts contractor or company Scottsdale AZ that extends its expertise to the commercial sector, ensuring your professional environment remains pristine and productive. Our commitment to transparent pricing and rapid service makes us the go-to partner for property managers and business owners alike. Trust our experienced team to handle your commercial hauling needs with the professional touch your brand deserves.`}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}

      <CTASection
        data={{
          heading: "Junk Butlers - Your Trusted Premier No1 Trash or Trash Removal Company or Agency Scottsdale AZ",
          subHeading: "",
          description:
            "Looking for a skilled or professional all home and offices junk removal contractor in Scottsdale AZ? Junk Butlers offers certified appliance disposal and local, affordable furniture hauling. Trust our experienced demolition contractor for same-day service that clears your clutter fast!",
          ctaButton: { label: "Get My Estimate", href: "#contact" },
        }}
        theme={landingPageData.themeData}
      />

      <ServiceOverlayCardSection
        heading="Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Scottsdale AZ"
        description={`If you are searching for a skilled and top rated home and offices trash or junk removal demolition contractor Scottsdale AZ, your search ends with Junk Butlers. We pride ourselves on being a skilled & professional home or offices trash or trash cleanout contractor or company in Scottsdale AZ, dedicated to providing seamless hauling solutions for every client. Whether you are clearing out a residential estate or managing a large-scale corporate transition, we function as the most reliable residential & commercial old furniture removal contractor Scottsdale AZ has to offer. Our team understands that every project is unique, which is why we approach each job with precision and care, ensuring that debris is cleared safely and efficiently.<br/><br/>As a premier skilled and top rated home and offices trash or junk removal demolition contractor Scottsdale AZ, we handle everything from heavy construction debris to delicate office electronics. Junk Butlers is committed to maintaining the beauty of our local community by offering eco-friendly disposal and high-quality service. By choosing a skilled & professional home or offices trash or trash cleanout contractor or company in Scottsdale AZ, you ensure that your property is in expert hands. Let us simplify your life with our comprehensive residential & commercial old furniture removal contractor Scottsdale AZ services. Contact us today to experience the professional difference that a dedicated, local hauling specialist can make for your home or business environment.`}
        backgroundImage={{
          src: "/images/image-10.webp",
          alt: "Luxury trash removal service in Scottsdale, AZ",
        }}
        secondImage={{
          src: "/images/image-2.webp",
          alt: "Professional junk removal crew",
        }}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: "Certified or Trusted Local No1 Eco-Friendly Trash or Trash Removal Contractor Scottsdale AZ",
          description: `As a certified or trusted local no1 eco-friendly trash or trash removal contractor Scottsdale AZ, Junk Butlers is committed to providing sustainable disposal solutions that protect our desert environment. We understand that residents and business owners alike are looking for more than just a hauling service; they need an experienced high-qualified trash haulings services contractor Scottsdale AZ who prioritizes recycling and responsible waste management. Our team is specifically trained to sort through debris, ensuring that usable items are donated and recyclables are processed correctly, rather than simply dumped in a landfill. Choosing a certified or trusted local no1 eco-friendly trash or trash removal contractor Scottsdale AZ means you are partnering with a company that values integrity and community health.

Junk Butlers has built a reputation as an experienced high-qualified trash haulings services contractor Scottsdale AZ by consistently delivering prompt, professional, and environmentally conscious results. Whether you are clearing out a residential garage, a commercial office space, or a construction site, our eco-friendly approach ensures a smaller carbon footprint for your project. We take pride in being the premier choice for those who demand excellence and sustainability. When you hire our expert team, you receive the peace of mind that comes with knowing your unwanted items are being handled by the best in the business. Experience the superior service of Scottsdale’s leading green hauling specialists today.`,
        }}
        row1Image={{
          src: "/images/image-10.webp",
          alt: "Eco-conscious trash removal",
        }}
        row2={{
          heading: "Our Services Areas for All Major Junk & Trash Removal Contractor",
          description: `As the leading major junk or trash removal contractor, Junk Butlers is proud to offer expansive coverage across the Valley, ensuring that professional hauling is always within your reach. Our primary service hub is in Scottsdale AZ, where we have established ourselves as the go-to experts for residential and commercial cleanouts. However, our fleet extends far beyond, serving as a dedicated Peoria AZ junk removal specialist for growing neighborhoods and local businesses. We also provide specialized, respectful debris clearing for the Sun City AZ community, helping residents manage household transitions with ease.

If you are located in Glendale AZ, our team is ready to handle everything from garage cleanouts to large-scale construction site debris. We have also expanded our footprint to include the rapidly developing areas of Surprise AZ, delivering the same "No. 1" rated service that our clients expect. Of course, no service area would be complete without full coverage of Phoenix AZ, where we tackle high-volume commercial trash removal and residential hauling daily. No matter where you are located in these major cities, Junk Butlers guarantees a "local and trusted" experience with every haul. We understand the specific disposal regulations of each municipality, ensuring that your junk is removed efficiently and legally every time.`,
        }}
        row2Image={{
          src: "/images/image-2.webp",
          alt: "Map of Scottsdale service coverage",
        }}
        row3={{
          heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Scottsdale AZ?",
          description: `Choosing Junk Butlers means partnering with a skilled and professional trusted trash removal or demolition services contractor in Scottsdale AZ that truly understands the needs of the community. What sets us apart as a premier trash removal services contractor Scottsdale AZ is our unwavering commitment to reliability, transparency, and superior workmanship. We don't just haul away items; we provide a seamless experience designed to alleviate the stress of clutter. As a skilled and professional trusted trash removal or demolition services contractor in Scottsdale AZ, our team is fully licensed and insured, ensuring your property is protected during every phase of the removal or demolition process.

Junk Butlers utilizes advanced hauling equipment and strategic disposal methods to handle everything from heavy construction debris to delicate office furniture. Our local expertise allows us to provide faster response times and more competitive, honest pricing compared to national franchises. We take pride in our "customer-first" philosophy, which has solidified our reputation as the leading trash removal services contractor Scottsdale AZ. When you choose us, you are choosing a team that values your time, respects your property, and is dedicated to maintaining a cleaner, more organized Scottsdale. Experience the peace of mind that comes with hiring the best in the business.`,
        }}
        row3Image={{
          src: "/images/image-3.webp",
          alt: "Junk Butlers team assisting Scottsdale client",
        }}
      />

      {faqQuestions.length > 0 && (
        <FAQSection
          title="Scottsdale Trash Removal FAQs"
          description="Quick answers for homeowners, HOAs, and commercial partners."
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
