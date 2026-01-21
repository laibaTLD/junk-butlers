"use client";

import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
}

interface ServiceAreasSectionProps {
  serviceAreas?: ServiceArea[];
  themeData?: ThemeData;
}

export default function ServiceAreasSection({
  serviceAreas,
  themeData,
}: ServiceAreasSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: areasRef, visibleItems: areasVisible } = useStaggeredAnimation(serviceAreas?.length || 0, 150);

  // Theme colors with fallbacks
  const primaryColor = themeData?.primaryColor || 'var(--color-primary)';
  const secondaryColor = themeData?.secondaryColor || 'var(--color-secondary)';
  const accentColor = themeData?.accentColor || primaryColor;

  if (!serviceAreas || serviceAreas.length === 0) {
    return null;
  }

  // Get unique regions for filtering
  const regions = Array.from(new Set(serviceAreas.map(area => area.region)));

  // Filter areas based on search and region
  const filteredAreas = serviceAreas.filter(area => {
    const matchesSearch = area.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         area.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (area.description && area.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRegion = selectedRegion === "all" || area.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section
      id="service-areas"
      className="relative min-h-screen overflow-hidden bg-white"
    >

      <div className="relative z-10 min-h-screen">
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
              Service Areas
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
              We proudly serve communities across the region, bringing professional services directly to your neighborhood.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      style={{ color: secondaryColor }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search cities or regions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/15 focus:border-white/30 transition-all duration-300"
                    style={{
                      boxShadow: `0 10px 30px ${primaryColor}10`
                    }}
                  />
                </div>
              </div>

              {/* Region Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:bg-white/15 focus:border-white/30 transition-all duration-300"
                  style={{
                    boxShadow: `0 10px 30px ${primaryColor}10`
                  }}
                >
                  <option value="all" style={{ background: primaryColor, color: '#ffffff' }}>All Regions</option>
                  {regions.map((region) => (
                    <option key={region} value={region} style={{ background: primaryColor, color: '#ffffff' }}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div ref={areasRef} className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center w-full gap-8">
              {filteredAreas.map((area, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 w-[300px] md:w-[400px] ${
                    areasVisible.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Area Card */}
                  <div
                    className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                    style={{
                      boxShadow: `0 15px 35px ${primaryColor}15`
                    }}
                  >
                    {/* Location Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                        boxShadow: `0 8px 25px ${primaryColor}30`
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3
                        className="text-heading-md font-bold mb-2 transition-colors duration-300"
                        style={{
                          color: primaryColor,
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {area.city}
                      </h3>
                      <p
                        className="text-label-lg font-semibold mb-4 transition-colors duration-300"
                        style={{
                          color: secondaryColor,
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {area.region}
                      </p>
                      {area.description && (
                        <p
                          className="text-body-sm leading-relaxed transition-colors duration-300"
                          style={{
                            color: secondaryColor,
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {area.description}
                        </p>
                      )}
                    </div>

                    {/* Service Status Indicator */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ background: primaryColor }}
                      ></div>
                      <span
                        className="text-label-sm font-medium"
                        style={{ color: primaryColor }}
                      >
                        Currently Serving
                      </span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse"
                         style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse"
                         style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
                        filter: 'blur(20px)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredAreas.length === 0 && (searchTerm || selectedRegion !== "all") && (
              <div className="text-center py-16">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                    boxShadow: `0 15px 35px ${primaryColor}30`
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-heading-md font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  No areas found
                </h3>
                <p
                  className="text-body-md"
                  style={{ color: secondaryColor }}
                >
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 mx-auto max-w-4xl"
              style={{
                boxShadow: `0 20px 40px ${primaryColor}15`
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                  boxShadow: `0 15px 35px ${primaryColor}30`
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              
              <h3
                className="text-heading-lg font-bold mb-4"
                style={{ color: primaryColor }}
              >
                Don&apos;t See Your Area?
              </h3>
              <p
                className="text-body-md mb-8 max-w-2xl mx-auto"
                style={{ color: secondaryColor }}
              >
                We&apos;re always expanding our service areas. Contact us to discuss availability in your location and we&apos;ll do our best to accommodate your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:6232562272"
                  className="group relative inline-flex items-center px-8 py-4 text-label-lg font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                    boxShadow: `0 15px 35px ${primaryColor}30`
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                  ></div>
                </a>
                
                <a
                  href="tel:6232562272"
                  className="group relative inline-flex items-center px-8 py-4 text-label-lg font-bold rounded-2xl border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                  style={{
                    color: primaryColor,
                    borderColor: primaryColor,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
