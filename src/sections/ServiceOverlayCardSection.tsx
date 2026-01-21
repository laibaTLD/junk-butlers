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
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side: Heading and Description */}
          <div className="order-2 lg:order-1">
            <h2
              className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6"
              style={{ color: primaryColor }}
            >
              {heading}
            </h2>
            <div
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: secondaryColor }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Right side: Images */}
          <div className="order-1 lg:order-2 space-y-82 flex flex-col justify-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <NextImage
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
            {secondImage && (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <NextImage
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
