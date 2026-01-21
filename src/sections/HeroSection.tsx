'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ThemeData } from '@/types/template';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    href: string;
    label: string;
  };
  backgroundImage?: string;
  images?: Array<{
    id: string;
    imageUrl: string;
    slotName: string;
    altText: string;
  }>;
  theme?: ThemeData;
}

export default function HeroSection({ title, subtitle, description, ctaButton, images = [], theme }: HeroSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: collageVisRef, isVisible: collageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  // Get hero images from the images array
  const heroImages = images.filter((img) => img.slotName.startsWith('hero-image-'));

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';

  // Parallax mouse animation removed for performance and simplicity

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
      }}
    >

      {/* Subtle 3D floating SVGs background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Ring */}
        <svg className="absolute" width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ left: '8%', top: '18%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.08))' }}>
          <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.14)" strokeWidth="2" className="animate-floatY-slow" />
        </svg>
        {/* Triangle */}
        <svg className="absolute" width="110" height="110" viewBox="0 0 110 110" fill="none" style={{ right: '12%', top: '12%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.06))' }}>
          <path d="M55 12 L98 92 H12 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="transparent" className="animate-floatXY" />
        </svg>
        {/* Hexagon */}
        <svg className="absolute" width="140" height="140" viewBox="0 0 140 140" fill="none" style={{ left: '14%', bottom: '14%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 14px rgba(255,255,255,0.08))' }}>
          <path d="M70 10 L120 40 L120 100 L70 130 L20 100 L20 40 Z" stroke="rgba(255,255,255,0.10)" strokeWidth="2" fill="transparent" className="animate-rotate-slow" />
        </svg>
        {/* Diamond */}
        <svg className="absolute" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ right: '8%', bottom: '20%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.06))' }}>
          <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="transparent" className="animate-floatY" />
        </svg>
        {/* Plus */}
        <svg className="absolute" width="90" height="90" viewBox="0 0 90 90" fill="none" style={{ left: '45%', top: '10%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.06))' }}>
          <path d="M45 15 V75 M15 45 H75" stroke="rgba(255,255,255,0.1)" strokeWidth="2" className="animate-rotate-slower" />
        </svg>
        {/* Small ring */}
        <svg className="absolute" width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ right: '42%', bottom: '12%', transform: 'translateZ(0)', filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.06))' }}>
          <circle cx="40" cy="40" r="26" stroke="rgba(255,255,255,0.14)" strokeWidth="2" className="animate-floatY-alt" />
        </svg>
      </div>

      {/* Hero images row for small/medium screens (avoid overlap) */}
      {heroImages.length > 0 && (
        <div className="relative z-10 lg:hidden px-4 sm:px-6 mt-4 mb-16">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {heroImages.map((img) => (
              <div key={img.id} className="snap-center shrink-0 group relative">
                <Image
                  src={img.imageUrl}
                  alt={img.altText}
                  width={240}
                  height={240}
                  className="object-cover rounded-xl shadow-2xl  contrast-110 hover:contrast-125 hover:-translate-y-1 hover:scale-[1.12] transition-transform duration-500 w-48 h-48 sm:w-56 sm:h-56"
                  quality={90}
                />
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center">
        {/* Left side - Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-0">
          <div className="max-w-3xl text-center lg:text-left">
            <div>
              <h1
                ref={titleRef}
                className={`text-display-xl mb-4 sm:mb-6 tracking-tight transition-all duration-700 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ color: '#ffffff' }}
              >
                {title}
              </h1>

              {subtitle && (
                <h2
                  ref={subtitleRef}
                  className={`text-description-lg sm:text-description-xl md:text-description-xl mb-6 sm:mb-8 text-white/80 transition-all duration-700 delay-100 ${
                    subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  {subtitle}
                </h2>
              )}

              {description && (
                <p className="text-body-lg sm:text-body-xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                  {description}
                </p>
              )}

              {ctaButton && (
                <div
                  ref={ctaRef}
                  className={`transition-all duration-700 delay-150 ${
                    ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <a
                    href={ctaButton.href}
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-label-lg bg-white/95 text-neutral-900 hover:bg-white group transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                  >
                    <span>{ctaButton.label}</span>
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-900 opacity-75"></span>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Staggered collage on large screens (avoid hidden overlaps) */}
        <div className="flex-1 relative hidden lg:flex items-center justify-center px-8 py-16">
          {heroImages.length > 0 && (
            <div
              className="relative w-[720px]"
            >
              <div ref={collageVisRef} className="flex items-end justify-center gap-4">
                {heroImages.slice(0, 3).map((img, index) => {
                  const cfg = [
                    { w: 280, h: 360, wrap: 'z-10' },
                    { w: 340, h: 440, wrap: 'z-20' },
                    { w: 280, h: 360, wrap: 'z-10' },
                  ][index];
                  if (!cfg) return null;
                  return (
                    <div
                      key={img.id}
                      className={`group relative ${cfg.wrap} transition-all duration-700 ${
                        collageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{
                        marginLeft: index === 0 ? 0 : -20,
                        marginTop: index === 0 ? 8 : index === 1 ? 0 : 14,
                      }}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.altText}
                        width={cfg.w}
                        height={cfg.h}
                        className="rounded-2xl object-cover  contrast-110 ring-1 ring-white/10 hover:ring-white/20 hover:contrast-125 hover:-translate-y-1 hover:scale-[1.12] shadow-2xl transition-transform"
                        quality={90}
                        sizes="(min-width: 1024px) 720px, 100vw"
                      />
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/70 animate-pulse" />
        </div>
      </div>
      {/* Floating SVG animations keyframes */}
      <style jsx global>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes floatYSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        @keyframes floatYAlt {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        @keyframes floatXY {
          0% { transform: translate(0, 0); }
          50% { transform: translate(8px, -8px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-floatY { animation: floatY 6s ease-in-out infinite; will-change: transform; }
        .animate-floatY-slow { animation: floatYSlow 8s ease-in-out infinite; will-change: transform; }
        .animate-floatY-alt { animation: floatYAlt 7s ease-in-out infinite; will-change: transform; }
        .animate-floatXY { animation: floatXY 9s ease-in-out infinite; will-change: transform; }
        .animate-rotate-slow { animation: rotateSlow 24s linear infinite; transform-origin: 50% 50%; will-change: transform; }
        .animate-rotate-slower { animation: rotateSlow 36s linear infinite; transform-origin: 50% 50%; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .animate-floatY,
          .animate-floatY-slow,
          .animate-floatY-alt,
          .animate-floatXY,
          .animate-rotate-slow,
          .animate-rotate-slower { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
