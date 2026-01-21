"use client";

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { CTAContent, ThemeData, Image } from '@/types/template';
import {
  useScrollAnimation,
} from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  data: CTAContent;
  theme?: ThemeData;
  images?: Image[];
}

const CTASection: React.FC<CTASectionProps> = ({ data, theme }) => {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const primaryColor = theme?.primaryColor || '#000000';
  const secondaryColor = theme?.secondaryColor || '#666666';
  const accentColor = theme?.accentColor || primaryColor;

  // Interactive state
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hardcoded CTA background image (reuse gallery image from public/images)
  const ctaImage = "/images/2731F45D-D0C7-47E9-96CE-9B4FF6AA2DD7.jpg";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: `linear-gradient(135deg, 
          ${primaryColor} 0%, 
          ${secondaryColor} 25%, 
          ${primaryColor} 50%, 
          ${secondaryColor} 75%, 
          ${primaryColor} 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 20s ease infinite'
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div
          className="absolute w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-3xl animate-float-slow"
          style={{
            left: `${15 + (isClient ? mousePosition.x * 0.02 : 0)}%`,
            top: `${20 + (isClient ? mousePosition.y * 0.01 : 0)}%`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)`,
            filter: 'blur(80px)',
            boxShadow: `0 0 100px rgba(255, 255, 255, 0.1)`
          }}
        ></div>

        <div
          className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl animate-float-reverse"
          style={{
            right: `${20 + (isClient ? mousePosition.x * 0.015 : 0)}%`,
            bottom: `${25 + (isClient ? mousePosition.y * 0.02 : 0)}%`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 30%, transparent 70%)`,
            filter: 'blur(70px)',
            boxShadow: `0 0 80px rgba(255, 255, 255, 0.08)`
          }}
        ></div>

        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => {
          const positions = [
            { left: 10, top: 15 },
            { left: 85, top: 20 },
            { left: 20, top: 80 },
            { left: 80, top: 75 },
            { left: 50, top: 10 },
            { left: 30, top: 90 },
          ];
          const pos = positions[i] || { left: 50, top: 50 };

          return (
            <div
              key={i}
              className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-pulse"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + (i * 0.5)}s`,
                background: 'rgba(255, 255, 255, 0.3)',
                filter: 'blur(1px)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
              }}
            ></div>
          );
        })}

        {/* Background Image with enhanced overlay */}
        <div className="absolute inset-0">
          <NextImage
            src={ctaImage}
            alt="CTA background"
            fill
            className="object-cover opacity-20"
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Sub heading */}
          <p
            ref={titleRef}
            className={`text-white/90 text-label-lg font-semibold uppercase tracking-wider mb-6 transition-all duration-1000 ${titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
          >
            {data.subHeading}
          </p>

          {/* Main heading */}
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {data.heading}
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            className={`text-description-xl sm:text-description-xl md:text-description-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${descVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
          >
            {data.description}
          </p>

          {/* Enhanced CTA Button */}
          {data.ctaButton && (
            <div
              ref={buttonRef}
              className={`transition-all duration-1000 delay-600 ${buttonVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
                }`}
            >
              <a
                href={data.ctaButton.href}
                className="group relative inline-flex items-center px-12 py-6 text-label-lg font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                  boxShadow: buttonHovered
                    ? `0 25px 50px ${primaryColor}40, 0 0 0 1px ${primaryColor}60`
                    : `0 15px 35px ${primaryColor}30`
                }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                {/* Button background animation */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                    animation: buttonHovered ? 'shimmer 1.5s ease-in-out' : 'none'
                  }}
                ></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  {data.ctaButton.label}
                  <svg
                    className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                ></div>
              </a>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></div>
              <span className="text-body-md font-medium">Trusted Service</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></div>
              <span className="text-body-md font-medium">24/7 Support</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.6)' }}></div>
              <span className="text-body-md font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-caption">Scroll to explore more</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
