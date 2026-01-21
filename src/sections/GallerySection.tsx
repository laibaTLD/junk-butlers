"use client";

import { Image } from "@/types/template";
import NextImage from "next/image";
import { useState } from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

interface GalleryImage {
  id: string;
  slotName: string;
  title: string;
  altText: string;
  imageUrl: string;
  category: string;
}

interface GallerySectionProps {
  title: string;
  description: string;
  images?: Image[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function GallerySection({
  title,
  description,
  images,
  theme,
}: GallerySectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(
    8, // We'll show 8 images in the grid
    150
  );

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  const accentColor = theme?.accentColor || primaryColor;

  // Interactive state
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Fallback sample images
  const galleryImages: Image[] =
    images && images.length > 0
      ? images
      : [
          {
            id: "1",
            slotName: "gallery",
            title: "Sunset Mountains",
            altText: "Beautiful mountain sunset",
            imageUrl:
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "2",
            slotName: "gallery",
            title: "Starry Night",
            altText: "Starry night over mountains",
            imageUrl:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "3",
            slotName: "gallery",
            title: "Coastal View",
            altText: "Ocean and rocks",
            imageUrl:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "4",
            slotName: "gallery",
            title: "Friends Hiking",
            altText: "Group of friends hiking",
            imageUrl:
              "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "5",
            slotName: "gallery",
            title: "Work & Coffee",
            altText: "Laptop and coffee",
            imageUrl:
              "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "6",
            slotName: "gallery",
            title: "Urban Landscape",
            altText: "Modern city skyline",
            imageUrl:
              "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "7",
            slotName: "gallery",
            title: "Forest Path",
            altText: "Peaceful forest trail",
            imageUrl:
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
          {
            id: "8",
            slotName: "gallery",
            title: "Desert Dunes",
            altText: "Golden sand dunes",
            imageUrl:
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            category: "gallery",
            landingPageId: "default",
            createdAt: new Date().toISOString(),
          },
        ];

  return (
    <section
      id="gallery"
      className="relative min-h-screen overflow-hidden bg-white"
    >

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              ref={titleRef}
              className={`text-display-lg sm:text-display-xl md:text-display-xl lg:text-display-xl mb-6 transition-all duration-1000 ${
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
            <p
              ref={descRef}
              className={`text-description-lg sm:text-description-xl md:text-description-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                descVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                color: secondaryColor,
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
            {description}
          </p>
        </div>

          {/* Innovative Gallery Grid */}
          <div
            ref={gridRef}
            className="flex flex-wrap gap-5 md:gap-8 items-center justify-center w-full"
          >
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={image.id}
                className={`group relative transition-all duration-1000 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Gallery Card */}
                <div 
                  className="relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-[500px] w-[350px]"
                onClick={() => setSelectedImage(image)}
                  style={{
                    boxShadow: hoveredImage === image.id 
                      ? `0 25px 50px ${primaryColor}20, 0 0 0 1px ${primaryColor}30`
                      : `0 10px 30px ${primaryColor}10`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                <NextImage
                  src={image.imageUrl}
                  alt={image.altText}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Image Badge */}
                    <div 
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                        color: '#ffffff'
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 
                      className="text-heading-sm font-bold mb-2 transition-colors duration-300"
                      style={{ 
                        color: primaryColor,
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                  {image.title}
                    </h3>
                    <p 
                      className="text-body-sm transition-colors duration-300"
                      style={{ 
                        color: secondaryColor,
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {image.altText}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse"
                       style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse"
                       style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>
                </div>

                {/* Hover Glow Effect */}
                {hoveredImage === image.id && (
                  <div 
                    className="absolute inset-0 rounded-3xl blur-xl opacity-30 -z-10 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  ></div>
                )}
                </div>
            ))}
          </div>

         
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <NextImage
              src={selectedImage.imageUrl}
              alt={selectedImage.altText}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Modal Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 
                className="text-heading-lg font-bold mb-2"
                style={{ color: '#ffffff' }}
              >
                {selectedImage.title}
              </h3>
              <p 
                className="text-body-md"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                {selectedImage.altText}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
      </div>
      )}
    </section>
  );
}
