"use client";

import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

interface ServiceAreaIntroSectionProps {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  theme?: ThemeData;
}

const ServiceAreaIntroSection: React.FC<ServiceAreaIntroSectionProps> = ({ 
  title, 
  paragraphs, 
  bullets, 
  theme 
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  
  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || '#1a1a1a';
  const secondaryColor = theme?.secondaryColor || '#6b7280';
  const accentColor = theme?.accentColor || primaryColor;

  return (
    <section
      id="service-area-intro"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primaryColor} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold mb-6 transition-all duration-1000 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                ref={index === 0 ? descRef : undefined}
                className={`text-lg lg:text-xl leading-relaxed mb-6 transition-all duration-1000 ${
                  index === 0 && descVisible
                    ? "opacity-100 translate-y-0"
                    : index === 0
                    ? "opacity-0 translate-y-8"
                    : "opacity-90"
                }`}
                style={{ 
                  color: secondaryColor,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-20 flex justify-center">
          <div 
            className="h-1 w-24 rounded-full transition-all duration-1000"
            style={{
              background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
              opacity: titleVisible ? 1 : 0,
              transitionDelay: '600ms'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaIntroSection;
