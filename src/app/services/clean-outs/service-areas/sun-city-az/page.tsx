import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServicesSection from "@/sections/ServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ServiceFeaturesSection from "@/sections/ServiceFeaturesSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Certified & Professional #1 Junks Removal Contractor Sun City AZ',
  description: 'Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. Professional and affordable same day trash removal.',
  openGraph: {
    title: 'Certified & Professional #1 Junks Removal Contractor Sun City AZ',
    description: 'Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified & Professional #1 Junks Removal Contractor Sun City AZ',
    description: 'Professional and affordable home and offices junks removal services in Sun City, AZ.',
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

export default async function CleanOutsSunCityPage() {
  const landingPageData = await getLandingPageData();

  const service = {
    title: "Certified & Professional #1 Junks Removal Contractor Sun City AZ",
    areaLabel: "Sun City, AZ",
    description: "Reclaim your space with Junk Butlers, your local and trusted residential or commercial junks removal and demolition contractor in Sun City, AZ. We provide professional and affordable home and offices junks removal services, including same day trash removal and furniture disposal.",
    bullets: [
      {
        title: "Friendly Agents",
        description: "Our local and trusted team provides professional, polite service for every Sun City junk hauling project."
      },
      {
        title: "Quick Response",
        description: "Need it gone? Contact Junk Butlers for professional and trusted same day trash removal today."
      },
      {
        title: "24/7 Support",
        description: "We offer affordable home and offices junks removal services around the clock for your convenience."
      }
    ]
  };

  const servicesContent = landingPageData.content?.services;
  const servicesImages =
    landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  const areaIntroParagraphs = [
    "When you are overwhelmed by clutter, finding an experienced and trusted all kind trash or junk removal or demolition contractor or company in Sun City AZ is essential for peace of mind. At Junk Butlers, we specialize in being the most skilled or professional all home and offices junk or trash removal contractor in Sun City AZ, ensuring your property is cleared efficiently. Whether you are dealing with a messy renovation or a simple spring cleaning, we serve as your trusted and premier home debris removal or hauling contractor in Sun City AZ.",
    "Our team is recognized as a professional local trash removal company in Sun City AZ that prioritizes speed and reliability. We provide specialized solutions, including certified appliance junks removal service Sun City AZ, ensuring heavy items are handled safely. If you are looking to reclaim your parking space, we are the best garage junk removal contractor Sun City AZ residents rely on. As a local and affordable furniture or appliance disposal contractor Sun City AZ, we guarantee transparent pricing without hidden fees. From residential cleanouts to complex commercial site clearing, our \"same day\" promise means your junk disappears today. Trust the experts who understand the Sun City community’s needs—choose the most dedicated local team for every haul.",
  ];

  const whyChooseUsParagraphs = [
    "Junk Butlers - Your Trusted Premier No1 Junk Removal Company or Agency Sun City AZ",
    "Experience the gold standard with Junk Butlers, your skilled and professional home and office junk removal contractor. From certified furniture disposal to affordable debris hauling, our trusted Sun City team delivers same-day solutions to keep your property clean and clutter-free.",
    "Looking for a Skilled and Top-Rated Home and Offices Junk Removal Demolition Contractor Sun City AZ",
    "If you are looking for a skilled and top-rated home and offices junk removal demolition contractor Sun City AZ, look no more than the experts at Junk Butlers. Our reputation as a premier local provider is built on delivering efficient, high-quality cleanup solutions for every type of property. As a skilled & professional home or offices junks or trash cleanout contractor or company in Sun City AZ, we understand that clutter can be overwhelming.",
    "We take pride in being a versatile residential & commercial junk removal contractor Sun City AZ, helping you dispose of heavy desks, bulky sofas, and outdated office workstations without you lifting a finger. At Junk Butlers, we don't just haul away trash; we provide a full-service experience that includes meticulous debris removal and light demolition. Our commitment to being a skilled and top-rated agency means we prioritize safety, speed, and environmental responsibility in every load. from small residential pickups to large-scale industrial cleanouts, we are the trusted partners you need to reclaim your space.",
    "Certified or Trusted Local No1 Eco Friendly Junk Removal Contractor Sun City AZ",
    "Choosing the right partner for junk removal services means finding a certified or trusted local no1 eco-friendly junk removal contractor Sun City AZ that values the environment as much as you do. Junk Butlers is proud to lead the industry by providing sustainable disposal solutions that prioritize recycling and donating over simply hitting the landfill. As an experienced high-qualified junk hauling services contractor Sun City AZ, we have mastered the logistics of eco-conscious removal, ensuring that every load is sorted with precision to minimize our carbon footprint."
  ];

  const faqQuestions = [
    {
      question: "1. What items do you remove in Sun City, AZ?",
      answer:
        "As a skilled junks cleanouts removal contractor or company in Sun City AZ, Junk Butlers handles almost everything. We specialize in certified appliance junks removal, old furniture, electronics, yard waste, and construction debris. Whether it is a single sofa or a full garage, our team clears it quickly.",
    },
    {
      question: "2. Do you offer same-day junk removal services?",
      answer:
        "Yes! We are a professional and trusted same day trash removal contractor Sun City AZ. We understand that clutter can be urgent, so we prioritize rapid response times. Contact us early in the day to secure your spot and have your unwanted items hauled away by this evening.",
    },
    {
      question: "3. Are your junk removal services environmentally friendly?",
      answer:
        "Absolutely. As a certified or trusted local no1 eco-friendly junks or trash removal contractor, we prioritize recycling and donations. Junk Butlers works hard to keep Sun City green by ensuring that appliances, metals, and usable furniture are diverted from landfills whenever possible for a sustainable future.",
    },
    {
      question: "4. Do you provide commercial office cleanout services?",
      answer:
        "Yes, we are a local and trusted commercial offices cleanouts or business junk removal contractor. We help Sun City businesses dispose of office furniture, old computers, and retail fixtures. Our team works efficiently to minimize disruption to your operations, ensuring your professional workspace remains clean, organized, and productive.",
    },
    {
      question: "5. How do you determine your removal pricing?",
      answer:
        "We are a local and affordable furniture or appliance disposal contractor Sun City AZ that offers transparent, volume-based pricing. Our rates depend on the space your items occupy in our truck. We provide free, no-obligation estimates to ensure you get the most competitive price for your specific haul.",
    },
  ];

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Complete clean out services for Peoria properties including homes, businesses, and estates"
    },
    {
      city: "Phoenix",
      region: "AZ",
      description: "Professional property cleanouts throughout Phoenix for residential and commercial properties"
    },
    {
      city: "Glendale",
      region: "AZ",
      description: "Thorough clean out services for Glendale homes and businesses"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized estate cleanouts and senior property cleanouts in Sun City"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive clean out services for Surprise area properties"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium clean out services for Scottsdale luxury properties and estates"
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
        heading={service.title}
        subheading="Professional • Reliable • Same Day Service"
        description={service.description}
        bullets={service.bullets}
        images={landingPageData.images}
        theme={landingPageData.themeData}
      />

      <ServiceAreaIntroSection
        title="Are You Looking for a Professional and Trusted Junk or Trash Removal Contractor or Company in Sun City AZ? - Same Day Junk Removal"
        paragraphs={areaIntroParagraphs}
        theme={landingPageData.themeData}
      />

      <WhyChooseUsSection
        title="Why Choose Junk Butlers for Sun City Junk Removal"
        paragraphs={whyChooseUsParagraphs}
        theme={landingPageData.themeData}
      />

      <ServiceFeaturesSection
        title="Our Premium Service Features"
        description="We provide the highest quality junk removal and demolition services in Sun City, AZ."
        features={[
          "Certified Appliance Removal",
          "Eco-Friendly Disposal",
          "Same-Day Hauling",
          "Residential Cleanouts",
          "Commercial Junk Removal",
          "Professional Demolition"
        ]}
        theme={landingPageData.themeData}
      />

      {servicesContent && (
        <ServicesSection
          title={servicesContent.title || "Our Services"}
          description={`Our Services

Junk Butlers provides the most skilled junks cleanouts removal contractor or company in Sun City AZ. From certified appliance junks removal to garage junk removal, we handle it all. Trust our local and affordable furniture or appliance disposal contractor for premier home debris removal or hauling across Sun City.

Hire Now Most Trusted Residential Household Junks Removal Contractor or Company Sun City AZ

When clutter takes over your home, you need a certified and trusted all kinds household removal or cleanouts contractor or company Sun City AZ to restore order. Junk Butlers specializes in helping homeowners reclaim their living space through efficient and stress-free services. As the premier and skilled residential or commercial buildings junks or trash removal contractor Sun City AZ, we handle everything from old mattress disposal to full basement cleanouts.

Local & Trusted Commercial Offices Cleanouts or Business Junk Removal Contractor or Company in Sun City AZ

Business owners know that a cluttered workspace hinders productivity. That is why Junk Butlers is the leading local & trusted commercial offices cleanouts or business junk removal contractor or company in Sun City AZ. We serve as a premier and skilled residential or commercial buildings junks or trash removal contractor Sun City AZ, offering tailored solutions for property managers, retail stores, and corporate offices.`}
          services={servicesContent.services}
          theme={landingPageData.themeData}
          images={servicesImages}
        />
      )}

      <CTASection
        data={{
          heading: "Junk Butlers - Your Trusted Premier No1 Trash or Junks Removal Company or Agency Sun City AZ",
          subHeading: "",
          description:
            "Experience the best with Junk Butlers, your skilled junks cleanouts removal contractor or company in Sun City AZ. We provide professional and affordable home and offices junks removal services, specializing in trusted same day trash removal and furniture disposal.",
          ctaButton: { label: "Get a Free Quote", href: "#contact" },
        }}
        theme={landingPageData.themeData}
      />

      <ServiceOverlayCardSection
        heading="Looking for a Skilled and Top-Rated Home and Offices Trash or Junk Removal Demolition Contractor Sun City AZ"
        description={`If you are searching for a skilled and top-rated home and offices trash or junk removal demolition contractor Sun City AZ, look no more than the experts at Junk Butlers. Our team has built a reputation as the most skilled & professional home or offices junks or trash cleanout contractor or company in Sun City AZ, helping residents and business owners reclaim their valuable space. We understand that junk accumulation can be stressful, which is why we provide streamlined, heavy-duty hauling solutions tailored to your specific needs. As a premier residential & commercial old furniture removal contractor Sun City AZ, we have the tools and experience to handle everything from bulky sofas to entire office workstations.<br/><br/>Junk Butlers doesn't just pick up trash; we offer comprehensive demolition and cleanout services that ensure your property is left spotless and ready for its next use. Our commitment to being a skilled and top rated home and offices trash or junk removal demolition contractor Sun City AZ means we prioritize safety, efficiency, and eco-friendly disposal methods. Whether you are clearing out a residential garage or managing a large-scale commercial renovation, our professional crew is dedicated to providing five-star service. Trust the local leaders who combine affordable pricing with unmatched expertise. Contact us today to experience why we are the preferred choice for all demolition and junk hauling projects throughout the Sun City area.`}
        backgroundImage={{
          src: "/images/image-10.webp",
          alt: "Junk removal and demolition services in Sun City, AZ",
        }}
        secondImage={{
          src: "/images/image-2.webp",
          alt: "Professional junk removal team in Sun City, AZ",
        }}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: "Certified or Trusted Local No1 Eco Friendly Junks or Trash Removal Contractor Sun City AZ",
          description:
            "Choosing a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ means more than just clearing space; it means ensuring your unwanted items are handled with environmental responsibility. At Junk Butlers, we take our commitment to the planet seriously. As an experienced high-qualified junks hauling services contractor Sun City AZ, we prioritize recycling and donating usable goods over simply hauling everything to a landfill. Our team understands the unique needs of the Sun City community, providing a green solution for those who want to declutter their homes and offices responsibly.\n\nWhen you hire Junk Butlers, you are partnering with a certified or trusted local no1 eco-friendly junks or trash removal contractor Sun City AZ that combines professional efficiency with sustainable practices. Our crew is trained to identify materials that can be repurposed, from old metals to electronics and furniture. As an experienced high-qualified junks hauling services contractor Sun City AZ, we manage the heavy lifting and sorting so you don't have to. We believe that professional junk removal should be both affordable and ethically sound. By choosing our eco-friendly services, you are helping to keep Sun City beautiful while enjoying a clean, junk-free environment. Whether it is a single appliance or a full-property cleanout, we provide the reliable, high-quality service you deserve.",
        }}
        row1Image={{
          src: "/images/image-10.webp",
          alt: "Eco-friendly junk removal services in Sun City, AZ",
        }}
        row2={{
          heading: "Our Services Areas for All Major Junk or Trash Removal Contractor",
          description:
            "As a premier hauling provider, we take pride in being the best provider for our services areas for all major junk or trash removal contractor needs across the Valley. Junk Butlers is strategically positioned to offer rapid, reliable, and professional cleanout solutions to a wide range of communities. Our primary focus remains serving the residents of Sun City AZ, where we have built a reputation for excellence, but our fleet extends far beyond those borders. We provide top-tier junk hauling and demolition services to the growing neighborhoods of Surprise AZ and the bustling residential and commercial hubs of Peoria AZ.\n\nIf you are located further east, our professional crews are frequently dispatched to Glendale AZ, ensuring that both homes and offices stay clutter-free. Furthermore, we maintain a strong presence in Phoenix AZ, handling large-scale urban removals and specialized trash hauling projects with ease. For those in high-end residential or retail spaces, we also serve as the leading removal experts in Scottsdale AZ. No matter which of these major cities you are located in, our commitment to being the most trusted local contractor remains the same. We ensure that every zip code within our service area receives the same high standard of eco-friendly disposal and \"same day\" efficiency that our brand is known for.",
        }}
        row2Image={{
          src: "/images/image-2.webp",
          alt: "Service areas coverage map for junk removal services",
        }}
        row3={{
          heading: "Why Choose Junk Butlers Contractor or Company for Your Trash Removal Services Contractor Sun City AZ?",
          description:
            "Deciding on the right team for your cleanout project is essential for a stress-free experience, so why choose Junk Butlers contractor or company for your trash removal services contractor Sun City AZ? The answer lies in our unwavering commitment to professionalism, punctuality, and the local community. As a skilled and professional trusted trash removal or demolition services contractor in Sun City AZ, we understand the specific needs of residents and business owners in this area. We don't just haul away your unwanted items; we provide a comprehensive service that includes heavy lifting, sorting, and responsible disposal, ensuring your property is treated with the utmost respect.\n\nJunk Butlers stands out because we combine the power of a large-scale operation with the personalized touch of a local business. When you hire us, you are partnering with a skilled and professional trusted trash removal or demolition services contractor in Sun City AZ that prioritizes your schedule and your budget. Our transparent pricing and \"same day\" availability make us the most convenient choice for urgent projects. We handle everything from minor household clutter to major site demolitions, proving that no job is too big or too small for our expert crew. Choose us for a cleaner, safer, and junk-free environment today.",
        }}
        row3Image={{
          src: "/images/image-3.webp",
          alt: "Professional junk removal team working in Sun City, AZ",
        }}
      />

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
