"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Image as ImageType } from "@/types/template";
import Image from "next/image";

interface ServiceItem {
  heading: string;
  description: string;
}

interface ServiceAreaServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[]; // Updated to match the actual data structure
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
  images: ImageType[];
}

export default function ServiceAreaServicesSection({
  title,
  description,
  services,
  theme,
  images,
}: ServiceAreaServicesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || "#14532d";

  // Get the first image for the left side
  const mainImage = images[0]?.imageUrl || "/images/image-1.webp";
  const mainImageAlt = images[0]?.altText || "Junk removal services";

  return (
    <section id="services" className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 sm:translate-y-8"
            }`}
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className={`text-base sm:text-lg text-gray-600 transition-all duration-700 delay-200 ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 sm:translate-y-8"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Image and Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:sticky lg:top-6 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side - Services */}
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 
                  className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                  style={{ color: primaryColor }}
                >
                  {service.heading}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}