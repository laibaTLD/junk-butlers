"use client";

import React from "react";
import { ThemeData } from "@/types/template";

type BulletItem = string | { title: string; description?: string };

interface ServiceAreaBulletsSectionProps {
  bullets: BulletItem[];
  theme?: ThemeData;
}

const ServiceAreaBulletsSection: React.FC<ServiceAreaBulletsSectionProps> = ({
  bullets,
  theme,
}) => {
  if (!bullets || bullets.length === 0) return null;

  const primaryColor = theme?.primaryColor || "#1a1a1a";
  const secondaryColor = theme?.secondaryColor || "#6b7280";

  return (
    <section className=" -mt-8 pb-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b, idx) => (
              <li
                key={idx}
                className="rounded-2xl border bg-white/95 px-5 py-4 shadow-lg backdrop-blur"
                style={{ borderColor: `${primaryColor}1f` }}
              >
                {(() => {
                  const isObject = typeof b === "object" && b !== null;
                  const titleText = isObject ? (b as any).title : (b as string);
                  const descText = isObject ? (b as any).description : undefined;
                  return (
                    <>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: primaryColor }}
                        />
                        <span className="text-base font-semibold" style={{ color: primaryColor }}>
                          {titleText}
                        </span>
                      </div>
                      {descText && (
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: `${secondaryColor}cc` }}>
                          {descText}
                        </p>
                      )}
                    </>
                  );
                })()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaBulletsSection;
