"use client";

import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

type FeatureItem = string | { title: string; description?: string };

interface ServiceFeaturesSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
  ctaButton?: {
    href: string;
    label: string;
  };
  theme?: ThemeData;
}

export default function ServiceFeaturesSection({
  title,
  description,
  features,
  ctaButton,
  theme,
}: ServiceFeaturesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: featuresRef, visibleItems } = useStaggeredAnimation<HTMLDivElement>(
    features.length,
    120
  );

  const primaryColor = theme?.primaryColor || "#14532d";
  const secondaryColor = theme?.secondaryColor || "#6b7280";
  const cardShadow = `${primaryColor}22`;

  return (
    <section
      id="service-features"
      className="py-16 sm:py-20"
      style={{ background: `linear-gradient(145deg, ${primaryColor}0f, ${secondaryColor}10)` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-12">
          <div className="space-y-6">
            <h2
              ref={titleRef}
              className={`text-4xl sm:text-5xl font-bold leading-tight transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ color: primaryColor }}
            >
              {title}
            </h2>
            <p
              ref={descRef}
              className={`text-lg leading-relaxed transition-all duration-700 delay-200 ${
                descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ color: `${secondaryColor}cc` }}
            >
              {description}
            </p>

            {ctaButton && (
              <a
                href={ctaButton.href}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: primaryColor, color: "#ffffff", boxShadow: `0 15px 35px ${cardShadow}` }}
              >
                {ctaButton.label}
              </a>
            )}
          </div>

          <div ref={featuresRef} className="space-y-4">
            {features.map((feature, i) => {
              const titleText = typeof feature === 'object' ? feature.title : feature;
              const descText = typeof feature === 'object' ? feature.description : undefined;

              return (
                <div
                  key={i}
                  className={`rounded-2xl border bg-white/90 p-5 shadow-lg backdrop-blur transition-all duration-500 ${
                    visibleItems.includes(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ borderColor: `${primaryColor}1f` }}
                >
                  <div className="space-y-2">
                    <div className="text-lg font-semibold" style={{ color: primaryColor }}>
                      {titleText}
                    </div>
                    {descText && (
                      <p className="text-sm leading-relaxed" style={{ color: `${secondaryColor}cc` }}>
                        {descText}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
