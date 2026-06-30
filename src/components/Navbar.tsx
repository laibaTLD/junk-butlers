"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface NavbarProps {
  businessName?: string;
  logoImage?: string;
  themeData?: {
    primaryColor: string;
    secondaryColor: string;
  };
  phoneNumber?: string;
  serviceAreas?: ServiceArea[];
}

function getServiceAreaUrl(serviceHref: string, areaLabel: string): string {
  const serviceSlug = serviceHref
    .replace(/^\/services\//, "")
    .replace(/^\//, "");
  const areaSlug = areaLabel
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");

  return `/${serviceSlug}-in-${areaSlug}`;
}

export default function Navbar({
  businessName,
  logoImage,
  themeData,
  phoneNumber,
  serviceAreas, // eslint-disable-line @typescript-eslint/no-unused-vars
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAreasModal, setShowAreasModal] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);


  // Use hardcoded service areas for Arizona cities
  const hardcodedAreas: ServiceArea[] = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Complete junk removal and trash hauling services for Peoria residents and businesses"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Professional junk removal and clean out services throughout Phoenix"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Fast and reliable trash removal and junk hauling in Glendale"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized clean out services for Sun City properties"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Comprehensive junk removal services for Surprise area"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium trash removal and hauling services in Scottsdale"
    }
  ];

  const allAreas: ServiceArea[] = hardcodedAreas;

  // Ensure we only show each city/region once in the dropdown (e.g., one Manhattan, NY)
  const uniqueAreas: ServiceArea[] = allAreas.filter((area, index, self) => {
    const key = `${area.city}-${area.region}`.toLowerCase();

    return (
      index ===
      self.findIndex(
        (other) => `${other.city}-${other.region}`.toLowerCase() === key
      )
    );
  });

  const areaLabels = uniqueAreas.map((area) => `${area.city}, ${area.region}`);

  const servingAreaGroups = [
    {
      label: "Junk Removal",
      href: "/junk-removal",
      areas: areaLabels,
    },
    {
      label: "Trash Removal",
      href: "/trash-removal",
      areas: areaLabels,
    },
    {
      label: "Clean Outs",
      href: "/clean-outs",
      areas: areaLabels,
    },
    {
      label: "Junk Hauling",
      href: "/junk-hauling",
      areas: areaLabels,
    },
  ];

  return (
    <nav
      className="shadow-lg fixed w-full z-50 backdrop-blur-sm"
      style={{
        background: themeData
          ? themeData.primaryColor
          : "linear-gradient(135deg, #000000, #1f2937)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between ">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-white transition-colors font-bold"
          >
            <Image 
              src={logoImage || "/logo.png"} 
              alt={`${businessName || "NS Iron Work"} logo`}
              width={100}
              height={100}
              className="rounded-lg w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-auto lg:h-auto object-contain"
            />
            
          </Link>

          <div className="flex items-center" />
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center px-4 lg:px-8 py-2 space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <div className="relative group">
              <Link
                href="/serving-areas"
                className="cursor-pointer text-white/90 hover:text-white transition-colors font-medium"
              >
                Serving Areas
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 bg-white/95 text-gray-900 rounded-lg shadow-lg backdrop-blur-sm z-50">
                <div className="flex flex-col lg:flex-row">
                  <div className="py-2 lg:w-64 border-r lg:border-r border-gray-200 bg-[#535455] text-white">
                    {servingAreaGroups.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onMouseEnter={() => setActiveServiceIndex(index)}
                        className={`flex w-full items-center justify-between px-4 py-2 text-sm font-semibold transition-colors ${
                          activeServiceIndex === index
                            ? "bg-white text-black"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="ml-2">›</span>
                      </Link>
                    ))}
                  </div>
                  <div className="py-2 lg:w-64 bg-white max-h-64 overflow-y-auto">
                    {servingAreaGroups[activeServiceIndex]?.areas.map((area, index) => {
                      const group = servingAreaGroups[activeServiceIndex];

                      return (
                        <Link
                          key={`${area}-${index}`}
                          href={getServiceAreaUrl(group.href, area)}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                        >
                          {area}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5 border border-white/20 hover:border-white/40 backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Call Us Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden h-screen overflow-y-auto">
            <div
              className="px-2 pb-3 space-y-1 sm:px-3 border-t border-white/20 h-full flex flex-col items-center justify-start pt-16"
              style={{
                background: themeData
                  ? `linear-gradient(135deg, ${themeData.primaryColor}aa, ${themeData.secondaryColor}aa, #000000)`
                  : "linear-gradient(135deg, #000000, #1f2937)",
              }}
            >
              <Link
                onClick={() => setIsOpen(false)}
                href="/"
                className="block w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                Home
              </Link>
              
              <Link
                onClick={() => setIsOpen(false)}
                href="/about-us"
                className="block w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                About
              </Link>
              
              <Link
                onClick={() => setIsOpen(false)}
                href="/services"
                className="block w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                Services
              </Link>
              
              {/* Mobile Serving Areas Button */}
              <button
                onClick={() => setShowAreasModal(true)}
                className="w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                Serving Areas
              </button>
              
              <Link
                onClick={() => setIsOpen(false)}
                href="/#testimonials"
                className="block w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                Testimonials
              </Link>
              
              <Link
                onClick={() => setIsOpen(false)}
                href="/contact-us"
                className="block w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-center"
              >
                Contact
              </Link>
              
              <Link
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="w-full max-w-xs mx-auto mt-4 px-6 py-3 text-white rounded-lg text-center transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/20 font-medium"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                Call Us Now
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Areas Modal */}
      {showAreasModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAreasModal(false)}
          />
          <div className="flex min-h-screen items-center justify-center p-4">
            <div 
              className="relative w-full max-w-md max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: themeData
                  ? `linear-gradient(135deg, ${themeData.primaryColor}, ${themeData.secondaryColor || themeData.primaryColor}cc)`
                  : "linear-gradient(135deg, #1f2937, #111827)",
                border: themeData ? `1px solid ${themeData.secondaryColor || themeData.primaryColor}40` : "1px solid #374151"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div className="flex justify-between items-center mb-6">
                  <h2 
                    className="text-2xl font-bold text-white"
                  >
                    Service Areas
                  </h2>
                  <button 
                    onClick={() => setShowAreasModal(false)}
                    className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-6">
                  {servingAreaGroups.map((group) => (
                    <div key={group.href} className="mb-6">
                      <h3 
                        className="text-lg font-semibold mb-3 pb-2 text-white border-b border-white/20"
                      >
                        {group.label}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {group.areas.map((area) => {
                          return (
                            <Link
                              key={`${area}-${group.href}`}
                              href={getServiceAreaUrl(group.href, area)}
                              onClick={() => {
                                setIsOpen(false);
                                setShowAreasModal(false);
                              }}
                              className="block px-3 py-2 text-sm text-white/90 hover:text-white rounded-lg transition-colors text-center bg-white/5 hover:bg-white/10 border border-white/10"
                            >
                              {area}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-white/10 bg-black/30">
                <button
                  onClick={() => setShowAreasModal(false)}
                  className="w-full py-2 px-4 rounded-lg transition-colors font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
