"use client";

import React from "react";
import NextImage from "next/image";
import { ThemeData } from "@/types/template";

interface ServiceOverlayCardSectionProps {
  heading: string;
  description: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  secondImage?: {
    src: string;
    alt: string;
  };
  theme?: ThemeData;
}

export default function ServiceOverlayCardSection({
  heading,
  description,
  backgroundImage,
  secondImage,
  theme,
}: ServiceOverlayCardSectionProps) {
  const primaryColor = theme?.primaryColor || "#000000";
  const secondaryColor = theme?.secondaryColor || "#666666";

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left side: Heading and Description */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.5rem] font-bold leading-tight mb-4 sm:mb-6"
              style={{ color: primaryColor }}
            >
              {heading}
            </h2>
            <div
              className="text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4"
              style={{ color: secondaryColor }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Right side: Images */}
          <div className="lg:col-span-7 h-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <NextImage
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {secondImage && (
              <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <NextImage
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
