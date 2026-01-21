"use client";

import Image from "next/image";
import {
  useScrollAnimation,
} from "@/hooks/useScrollAnimation";

interface AboutSectionProps {
  title: string;
  description: string;
  features: string[];
  ctaButton: {
    href: string;
    label: string;
  };
  image?: string;
  images?: Array<{
    slotName: string;
    imageUrl: string;
    category?: string;
  }>;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export default function AboutSection({
  title,
  description,
  features,
  ctaButton,
  image,
  images = [],
  theme,
}: AboutSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.5 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.5 });

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || '#FFC67D';
  const secondaryColor = theme?.secondaryColor || '#FF69B4';

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Hero Section with Full-Width Background */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          {images.length > 0 ? (
            <Image
              src={images[0].imageUrl}
              alt="About us hero"
              fill
              className="object-cover"
              priority
            />
          ) : image ? (
            <Image
              src={image}
              alt="About us hero"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
              }}
            />
          )}
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Hero Content - Glassmorphism Card with two-column layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl text-center border backdrop-blur-xl shadow-2xl px-8 py-10 md:px-12 md:py-12"
            style={{
              background: 'rgba(255,255,255,0.6)',
              borderColor: 'rgba(255,255,255,0.35)',
              boxShadow: `0 20px 60px ${primaryColor}26`
            }}
          >
            <h2
              ref={titleRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: primaryColor }}
            >
              {title}
            </h2>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p
                  ref={descRef}
                  className={`text-lg md:text-xl mb-6 leading-relaxed transition-all duration-1000 delay-200 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ color: secondaryColor }}
                >
                  {description}
                </p>

                {ctaButton && (
                  <div className="transition-all duration-1000 delay-400">
                    <a
                      href={ctaButton.href}
                      className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-label-lg group transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                      style={{ backgroundColor: primaryColor, color: '#ffffff' }}
                    >
                      {ctaButton.label}
                    </a>
                  </div>
                )}
              </div>

              {features && features.length > 0 && (
                <div>
                  <ul className="space-y-3">
                    {features.map((feature: string, i: number) => (
                      <li
                        key={i}
                        className="rounded-xl border-transparent hover:border-white hover:bg-white/20 px-5 border text-left py-3"
                        style={{ borderColor: `${primaryColor}1a`, color: primaryColor }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
