"use client";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { Image as ImageType } from "@/types/template";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
interface Service {
  name: string;
  description: string;
  price: string;
  features: string[];
  slug?: string;
}
interface ServicesSectionProps {
  title: string;
  description: string;
  services: Service[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
  images: ImageType[];
  phone?: string;
}
export default function ServicesSection({
  title,
  description,
  services,
  theme,
  images,
}: ServicesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(
    services.length,
    200
  );
  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  
  // Interactive state
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Function to generate slug from service name
  const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')   // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-');          // Remove duplicate hyphens
};

  const descriptionBlocks = (description || "")
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  function isHeadingBlock(text: string) {
    const t = text.trim();
    if (t.length > 120) return false;
    return !/[.!?]$/.test(t);
  }

  const headerIntro =
    descriptionBlocks.find((b) => !isHeadingBlock(b)) || description || "";

  const contentSections = (() => {
    const sections: Array<{ heading: string; paragraphs: string[] }> = [];
    let current: { heading: string; paragraphs: string[] } | null = null;

    for (const block of descriptionBlocks) {
      if (isHeadingBlock(block)) {
        current = { heading: block, paragraphs: [] };
        sections.push(current);
        continue;
      }
      if (!current) {
        current = { heading: "", paragraphs: [] };
        sections.push(current);
      }
      current.paragraphs.push(block);
    }
    return sections;
  })();

  return (
    <section 
      id="services" 
      className="relative bg-white"
    >
      {/* Background kept clean and white for this section */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              ref={titleRef}
              className={`text-2xl sm:text-3xl md:text-4xl mb-6 transition-all duration-1000 ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                color: primaryColor,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p
                ref={descRef}
                className={`text-description-lg sm:text-description-xl md:text-description-xl leading-relaxed transition-all duration-1000 delay-200 ${
                  descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  color: secondaryColor,
                  textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
                }}
              >
                {headerIntro}
              </p>
            </div>
          </div>

          {/* Sticky image + content blocks */}
          <div className="mb-16 lg:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
                  <Image
                    src={
                      images.find((img) => img.slotName === "services-image-1")?.imageUrl ||
                      images[0]?.imageUrl ||
                      "https://images.pexels.com/photos/6195895/pexels-photo-6195895.jpeg"
                    }
                    alt={
                      images.find((img) => img.slotName === "services-image-1")?.altText ||
                      "Residential and commercial junk removal"
                    }
                    width={1200}
                    height={900}
                    className="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
                </div>
              </div>

              <div className="space-y-6">
                {/* Only show the main two blocks on the right */}
                {contentSections
                  .filter((s) => s.heading && s.paragraphs.length > 0)
                  .slice(1, 3)
                  .map((section, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border bg-white p-6 md:p-7 shadow-lg"
                      style={{ borderColor: `${primaryColor}1a`, boxShadow: `0 18px 45px ${primaryColor}14` }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: primaryColor }}>
                        {section.heading}
                      </h3>
                      <div className="space-y-4">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-base leading-relaxed" style={{ color: `${secondaryColor}cc` }}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Uniform Card Container */}
                <div className="relative h-[500px] w-full">
                  {/* Card Background */}
                  <div 
                    className="relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden shadow-lg h-full flex flex-col"
                    style={{
                      boxShadow: hoveredCard === index 
                        ? `0 20px 40px ${primaryColor}25, 0 0 0 1px ${primaryColor}30`
                        : `0 10px 25px ${primaryColor}15`
                    }}
                  >
                    {/* Image Section - Fixed Height */}
                    <div className="relative h-48 mb-6">
                      <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={
                            images.find(img => img.slotName === `services-image-${index + 1}`)?.imageUrl ||
                            "https://images.pexels.com/photos/6195895/pexels-photo-6195895.jpeg"
                          }
                          alt={
                            images.find(img => img.slotName === `services-image-${index + 1}`)?.altText ||
                            `${service.name} service`
                          }
                          width={400}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Price Badge */}
                      <a href="tel:6232562272" 
                        className="absolute top-4 right-4 px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                          color: 'white'
                        }}
                      >
                        <span className="text-xs font-bold">{service.price}</span>
                      </a>
                      {/* Service Icon */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Content Section - Flexible Height */}
                    <div className="flex-1 flex flex-col space-y-4">
                      {/* Service Title */}
                      <h3 
                        className="text-xl font-bold transition-colors duration-300 line-clamp-2"
                        style={{ 
                          color: primaryColor,
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {service.name}
                      </h3>
                      {/* Service Description - Fixed Height */}
                      <div className="flex-1">
                        <p 
                          className="text-sm leading-relaxed transition-colors duration-300 line-clamp-3"
                          style={{ 
                            color: secondaryColor,
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                      {/* Features List - Fixed Height */}
                      {service.features?.length > 0 && (
                        <div className="space-y-2">
                          <h4 
                            className="text-sm font-semibold"
                            style={{ color: primaryColor }}
                          >
                            Included:
                          </h4>
                          <div className="space-y-1 max-h-24 overflow-hidden">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1"
                              >
                                <div 
                                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                  style={{
                                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                                    boxShadow: `0 2px 6px ${primaryColor}30`
                                  }}
                                >
                                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span 
                                  className="text-xs"
                                  style={{ color: secondaryColor }}
                                >
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* CTA Button - Fixed Position */}
                      <div className="pt-4 mt-auto">
                        <Link 
                          href={`/services/${generateSlug(service.name)}`}
                          className="w-full px-4 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden text-sm font-semibold"
                          style={{
                            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                            color: 'white',
                            boxShadow: `0 6px 20px ${primaryColor}25`
                          }}
                        >
                          <span className="relative z-10">
                            Get Started                          </span>
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                          ></div>
                        </Link>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full animate-pulse"
                         style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                         style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>
                  </div>
                  {/* Hover Glow Effect */}
                  {hoveredCard === index && (
                    <div 
                      className="absolute inset-0 rounded-2xl blur-xl opacity-25 -z-10 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
                        filter: 'blur(20px)'
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Decorative Elements */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: primaryColor }}></div>
              <span 
                className="text-body-md font-medium"
                style={{ color: secondaryColor }}
              >
                Professional Services Tailored to Your Needs
              </span>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: secondaryColor }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
