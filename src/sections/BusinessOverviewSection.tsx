"use client";

import Map from "@/components/Map";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import { useState } from "react";

interface Schedule {
  day: string;
  periods?: Array<{
    open: string;
    close?: string;
  }>;
}

interface BusinessHours {
  schedule?: Schedule[];
}

interface BusinessOverviewSectionProps {
  content: Array<{
    heading: string;
    description: string;
    ctaButton: {
      href: string;
      label: string;
    };
  }>;
  contact?: {
    title: string;
    description: string;
    showMap: boolean;
  };
  businessData?: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    hours?: BusinessHours;
  };
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function BusinessOverviewSection({
  content,
  contact,
  businessData,
  theme,
}: BusinessOverviewSectionProps) {
  const { ref: contentRef, visibleItems: contentVisible } =
    useStaggeredAnimation(content.length, 200);
  const { ref: mapRef, isVisible: mapVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: contactRef, isVisible: contactVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  const accentColor = theme?.accentColor || primaryColor;

  // Interactive state
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <section
      id="business-overview"
      className="relative min-h-screen overflow-hidden bg-white"
    >

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Interactive Content Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
            {content.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveContentIndex(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeContentIndex === index
                      ? 'scale-105 shadow-lg'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    background: activeContentIndex === index
                      ? `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                      : 'rgba(255, 255, 255, 0.1)',
                    color: activeContentIndex === index ? '#ffffff' : primaryColor,
                    boxShadow: activeContentIndex === index
                      ? `0 8px 25px ${primaryColor}30`
                      : '0 4px 15px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {item.heading}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left side - Content Display + Contact Form */}
            <div ref={contentRef} className="lg:col-span-2 space-y-8">
              {/* Main Content Card */}
              <div
                className={`group relative transition-all duration-1000 ${
                  contentVisible.includes(activeContentIndex)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ animationDelay: `${activeContentIndex * 0.2}s` }}
              >
                <div 
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
                  style={{
                    boxShadow: `0 20px 40px ${primaryColor}15, 0 0 0 1px ${primaryColor}20`
                  }}
                >
                  {/* Content Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                          boxShadow: `0 8px 25px ${primaryColor}30`
                        }}
                      >
                        <span className="text-white font-bold text-lg">{activeContentIndex + 1}</span>
                      </div>
                      <h2 
                        className="text-heading-xl lg:text-heading-xl font-bold transition-colors duration-300"
                        style={{ 
                          color: primaryColor,
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {content[activeContentIndex]?.heading}
                  </h2>
                    </div>

                    <p 
                      className="text-description-lg lg:text-description-xl leading-relaxed transition-colors duration-300"
                      style={{ 
                        color: secondaryColor,
                        textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {content[activeContentIndex]?.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  {content[activeContentIndex]?.ctaButton && (
                    <div className="pt-4">
                      <a
                        href={content[activeContentIndex].ctaButton.href}
                        className="group relative inline-flex items-center px-8 py-4 text-label-lg font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                          boxShadow: `0 15px 35px ${primaryColor}30`
                        }}
                      >
                        <span className="relative z-10 flex items-center">
                          {content[activeContentIndex].ctaButton.label}
                          <svg 
                            className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </span>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                        ></div>
                      </a>
                    </div>
                  )}

                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse"
                       style={{ background: primaryColor, animationDelay: `${activeContentIndex * 0.5}s` }}></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full animate-pulse"
                       style={{ background: secondaryColor, animationDelay: `${activeContentIndex * 0.7}s` }}></div>
                </div>

                {/* Content Progress Indicator */}
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-2">
                    {content.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeContentIndex ? 'scale-125' : 'scale-100'
                        }`}
                        style={{
                          background: index === activeContentIndex ? primaryColor : secondaryColor + '40',
                          boxShadow: index === activeContentIndex ? `0 0 10px ${primaryColor}40` : 'none'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
          </div>

              {/* Contact Form - Moved to Left Side */}
              <div
                ref={formRef}
                className={`relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transition-all duration-1000 hover:bg-white/20 hover:shadow-2xl ${
                  formVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  boxShadow: `0 20px 40px ${primaryColor}15`
                }}
              >
                <div className="mb-8">
                  <h3
                    className="text-heading-lg font-bold mb-2"
                    style={{ color: primaryColor }}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{ color: secondaryColor }}
                  >
                    Send us a message and we&apos;ll get back to you
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-label-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-label-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-label-sm font-semibold mb-2"
                      style={{ color: primaryColor }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                      boxShadow: `0 10px 25px ${primaryColor}30`
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                    ></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Right side - Enhanced Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 lg:top-8 space-y-8">
                {/* Interactive Map */}
            {contact?.showMap && businessData?.coordinates && (
              <div
                ref={mapRef}
                    className={`relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-1000 hover:bg-white/15 hover:shadow-2xl ${
                  mapVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                    style={{
                      boxShadow: `0 15px 35px ${primaryColor}15`
                    }}
              >
                    <div className="h-80">
                <Map
                  latitude={businessData.coordinates.latitude}
                  longitude={businessData.coordinates.longitude}
                  businessName="Business Location"
                  address={`${businessData.address.street}, ${businessData.address.city}, ${businessData.address.state}`}
                  className="h-full"
                />
                    </div>
                    
                    {/* Map Overlay */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                         style={{ color: primaryColor }}>
                      Our Location
                    </div>
              </div>
            )}


                {/* Enhanced Business Contact Info */}
            {businessData && (
              <div
                ref={contactRef}
                    className={`relative rounded-3xl p-8 transition-all duration-1000 hover:shadow-2xl ${
                  contactVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                      boxShadow: `0 20px 40px ${primaryColor}20`
                }}
              >
                    <div className="mb-8">
                      <h3 
                        className="text-heading-lg font-bold mb-2 text-white"
                      >
                  Contact Information
                </h3>
                      <p 
                        className="text-body-sm text-white/80"
                      >
                        Get in touch with us today
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Email</p>
                          <p className="text-body-sm text-white">{businessData.email}</p>
                        </div>
                  </div>

                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Phone</p>
                          <p className="text-body-sm text-white">{businessData.phone}</p>
                        </div>
                  </div>

                      <div className="flex items-start space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mt-1"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                        <div>
                          <p className="text-label-sm font-semibold text-white/90">Address</p>
                          <div className="text-body-sm text-white">
                      <div>
                              {businessData.address.city}, {businessData.address.state}
                            </div>
                      </div>
                    </div>
                  </div>

                      {/* Enhanced Business Hours */}
                  {businessData.hours?.schedule && (
                        <div className="flex items-start space-x-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mt-1"
                            style={{
                              background: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <svg
                              className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                          <div>
                            <p className="text-label-sm font-semibold text-white/90 mb-3">Business Hours</p>
                            <div className="space-y-2 text-sm">
                          {businessData.hours.schedule.map((schedule: Schedule, index: number) => (
                                <div key={index} className="flex justify-between items-center">
                                  <span className="font-medium text-white/90">{schedule.day}:</span>
                                  <span className="text-white ml-4">
                                {schedule.periods && schedule.periods.length > 0 ? (
                                  schedule.periods.map((period: { open: string; close?: string }, i: number) => (
                                    <span key={i}>
                                      {period.open} - {period.close || 'Late'}
                                      {i < (schedule.periods?.length || 0) - 1 && ', '}
                                    </span>
                                  ))
                                ) : 'Closed'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
