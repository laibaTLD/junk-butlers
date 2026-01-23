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
    <section id="services" className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Image and Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="lg:sticky lg:top-20 h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Services */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: primaryColor }}
                >
                  {service.heading}
                </h3>
                <p className="text-gray-600">
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