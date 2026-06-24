"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 

interface SocialLink {
  platform: string;
  url: string;
}

interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
}

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface BusinessData {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  socialLinks?: SocialLink[];
  serviceAreas?: ServiceArea[];
}

interface FooterSectionProps {
  businessName: string;
  businessDescription?: string;
  logoImage?: string;
  businessData?: BusinessData;
  themeData?: ThemeData;
  copyright?: string;
}

export default function FooterSection({
  businessName,
  businessDescription,
  logoImage,
  themeData,
}: FooterSectionProps) {
  // Theme colors with fallbacks
  const primaryColor = themeData?.primaryColor || 'var(--color-primary)';
  const secondaryColor = themeData?.secondaryColor || 'var(--color-secondary)';

  // Logo from public folder: only trust paths starting with '/'
  const logoSrc = logoImage && logoImage.startsWith('/')
    ? logoImage
    : '/logo.png';


  return (
    <footer
      id="contact"
      className="border-t"
      style={{ background: '#ffffff', borderColor: `${secondaryColor}1A` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        {/* Brand (centered) */}
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src={logoSrc}
            alt={`${businessName} logo`}
            width={340}
            height={102}
            className="h-20 w-auto"
          />
          {businessDescription && (
            <p className="max-w-2xl text-body-sm md:text-body-md leading-relaxed" style={{ color: `${secondaryColor}CC` }}>
              {businessDescription}
            </p>
          )}
        </div>

        {/* Links (centered) */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {[
            { href: "#home", label: "Home" },
            { href: "/about-us", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact-us", label: "Contact" },
            { href: "/serving-areas", label: "Serving Areas" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-body-sm md:text-body-md transition-colors"
              style={{ color: `${secondaryColor}CC` }}
            >
              <span className="hover:underline underline-offset-4" style={{ textDecorationColor: primaryColor }}>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Social (centered) */}
        <div className="mt-8 flex justify-center gap-3">
          {/* Hardcoded social links */}
          <a
            href="https://www.yelp.com/biz/junk-butlers-peoria"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:shadow-sm"
            style={{
              borderColor: `${secondaryColor}33`,
              color: primaryColor,
              background: '#ffffff'
            }}
            title="Find us on Yelp"
          >
            <FontAwesomeIcon icon={faYelp} className="w-5 h-5" />
          </a>
          <a
            href="mailto:junkbutlers@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:shadow-sm"
            style={{
              borderColor: `${secondaryColor}33`,
              color: primaryColor,
              background: '#ffffff'
            }}
            title="Email us"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          </a>
          
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/JunkButlersAZ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:shadow-sm"
            style={{
              borderColor: `${secondaryColor}33`,
              color: primaryColor,
              background: '#ffffff'
            }}
            title="Follow us on Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
          </a>
          
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/junk_butlers/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:shadow-sm"
            style={{
              borderColor: `${secondaryColor}33`,
              color: primaryColor,
              background: '#ffffff'
            }}
            title="Follow us on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </a>
        
        </div>

        {/* Divider */}
        <div className="mt-10 border-t" style={{ borderColor: `${secondaryColor}1A` }} />

        <div className="mt-6 text-sm text-center" style={{ color: `${secondaryColor}CC` }}>
          2026 ©junksbutlers. All Rights Reserved. Build by{" "}
          <a
            href="https://usbrandbooster.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
            style={{ color: primaryColor }}
          >
            US Brand Booster
          </a>
        </div>
      </div>
    </footer>
  );
}
