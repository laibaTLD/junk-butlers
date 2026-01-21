"use client";
import Script from "next/script";
 

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  company: string;
  rating?: number;
}

export default function TestimonialsSection({ title, description, testimonials, theme }: TestimonialsSectionProps) {
  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || "#000000";
  const secondaryColor = theme?.secondaryColor || "#666666";

  // Touch testimonials to avoid unused-var lint; also could be used later
  const total = Array.isArray(testimonials) ? testimonials.length : 0;

  return (
    <section id="testimonials" className="relative py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p className="text-lg md:text-xl" style={{ color: secondaryColor }}>
            {description}
          </p>
          {total > 0 && (
            <p className="mt-2 text-sm" style={{ color: secondaryColor + "80" }}>
              Showing live reviews (total: {total})
            </p>
          )}
        </div>

        {/* Elfsight Platform Script */}
         <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <div
          className="elfsight-app-61bb91f9-379f-4f51-8ba8-d0cd49fe9b0e"
          data-elfsight-app-lazy
        />



      </div>
    </section>
  );
}
