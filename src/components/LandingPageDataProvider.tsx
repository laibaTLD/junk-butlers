import React, { createContext, useContext } from 'react';
import { LandingPageData } from '@/types/template';

interface LandingPageDataContextType {
  content?: LandingPageData['content'] & {
    servicesDetails?: {
      servicesDetails?: Array<{
        title?: string;
        content?: {
          description?: string;
          sections?: Array<{ title?: string; text?: string }>;
          faqs?: string[];
        };
      }>;
    };
  };
  themeData?: LandingPageData['themeData'];
  images?: LandingPageData['images'];
}

const LandingPageDataContext = createContext<LandingPageDataContextType | undefined>(undefined);

export function LandingPageDataProvider({ children }: { children: React.ReactNode }) {
  // Provide default values for components that expect this context
  const defaultValue: LandingPageDataContextType = {
    content: {
      services: { title: "", description: "", services: [] },
      hero: { title: "", subtitle: "", description: "" },
      about: { title: "", description: "", features: [] },
      testimonials: { title: "", description: "", testimonials: [] },
      gallery: { title: "", description: "" },
      faq: { title: "", description: "", questions: [] },
      businessOverview: { content: [] },
      companyDetails: { heading: "", description: "", sections: [] },
      footer: { copyright: "" },
      contact: { title: "", description: "", showMap: false },
      serviceHighlights: { title: "", description: "", services: [] },
      ctaSection: { heading: "", subHeading: "", description: "", ctaButton: { label: "", href: "" } },
      servicesDetails: {
        servicesDetails: [],
      },
    },
    themeData: {
      primaryColor: "#6366F1",
      secondaryColor: "#A855F7",
    },
    images: [],
  };

  return (
    <LandingPageDataContext.Provider value={defaultValue}>
      {children}
    </LandingPageDataContext.Provider>
  );
}

export function useLandingPageData(): LandingPageDataContextType {
  const context = useContext(LandingPageDataContext);
  if (context === undefined) {
    // Return default values if context is not available
    return {
      content: {
        services: { title: "", description: "", services: [] },
        hero: { title: "", subtitle: "", description: "" },
        about: { title: "", description: "", features: [] },
        testimonials: { title: "", description: "", testimonials: [] },
        gallery: { title: "", description: "" },
        faq: { title: "", description: "", questions: [] },
        businessOverview: { content: [] },
        companyDetails: { heading: "", description: "", sections: [] },
        footer: { copyright: "" },
        contact: { title: "", description: "", showMap: false },
        serviceHighlights: { title: "", description: "", services: [] },
        ctaSection: { heading: "", subHeading: "", description: "", ctaButton: { label: "", href: "" } },
        servicesDetails: {
          servicesDetails: [],
        },
      },
      themeData: {
        primaryColor: "#6366F1",
        secondaryColor: "#A855F7",
      },
      images: [],
    };
  }
  return context;
}
