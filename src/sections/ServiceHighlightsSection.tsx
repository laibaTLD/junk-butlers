"use client";

import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ServiceHighlightsContent } from "@/types/template";
import { useState } from "react";

interface ServiceHighlightsSectionProps {
  data: ServiceHighlightsContent;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export default function ServiceHighlightsSection({
  data,
  theme,
}: ServiceHighlightsSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: servicesRef, visibleItems } = useStaggeredAnimation(
    data.services.length,
    120
  );

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';

  // Floating elements animation state
  const [/*unused*/, /*setUnused*/] = useState(false);

  // Helper function to format the display value
  const formatDisplayValue = (description: string) => {
    if (description.includes("+")) {
      return { value: description.replace("+", ""), suffix: "+" };
    }
    if (description.includes("%")) {
      return { value: description.replace("%", ""), suffix: "%" };
    }
    if (description.includes("/")) {
      return { value: description, suffix: "" };
    }
    return { value: description, suffix: "" };
  };

  return (
    <section
      id="service-highlights"
      className="relative py-20 overflow-hidden bg-white"
    >

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              ref={titleRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                color: primaryColor
              }}
            >
              {data.title}
            </h2>
            
            <p
              ref={descRef}
              className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                descVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                color: secondaryColor
              }}
            >
              {data.description}
            </p>
          </div>

          {/* Service Highlights Grid */}
          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {data.services && data.services.length > 0 ? data.services.map((service, index) => {
              const { value, suffix } = formatDisplayValue(service.description);
              
              return (
                <div
                  key={`service-${index}`}
                  className={`group relative transition-all duration-1000 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Card Background */}
                  <div 
                    className="relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)`,
                      borderColor: `${primaryColor}20`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Content */}
                    <div className="text-center">
                      {/* Number Display */}
                      <div className="relative mb-6">
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl flex flex-col items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}CC 100%)`,
                            boxShadow: `0 8px 30px ${primaryColor}40`
                          }}
                        >
                          <span 
                            className="text-2xl sm:text-3xl font-bold leading-none text-white"
                          >
                            {value}
                          </span>
                          {suffix && (
                            <span 
                              className="text-lg font-semibold opacity-90 text-white"
                            >
                              {suffix}
                            </span>
                          )}
                        </div>
                        
                        {/* Floating particles effect */}
                        <div 
                          className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full opacity-60 animate-bounce"
                          style={{
                            background: primaryColor,
                            animationDelay: `${index * 0.5}s`
                          }}
                        />
                        <div 
                          className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-40 animate-bounce"
                          style={{
                            background: secondaryColor,
                            animationDelay: `${index * 0.7}s`
                          }}
                        />
                      </div>

                      {/* Service Name */}
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-center leading-tight transition-colors duration-300"
                        style={{ 
                          color: primaryColor
                        }}
                      >
                        {service.name}
                      </h3>
                      
                      {/* Accent line */}
                      <div 
                        className="w-12 h-0.5 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: primaryColor
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div 
                className="col-span-full text-center"
                style={{ color: secondaryColor }}
              >
                No service highlights available
              </div>
            )}
          </div>

          {/* Bottom accent */}
          <div className="text-center mt-16">
            <div 
              className="inline-flex items-center space-x-4"
              style={{ color: secondaryColor }}
            >
              <div 
                className="w-12 h-px"
                style={{ background: secondaryColor }}
              />
              <span className="text-sm font-medium">Excellence in Numbers</span>
              <div 
                className="w-12 h-px"
                style={{ background: secondaryColor }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
