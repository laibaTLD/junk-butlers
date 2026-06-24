import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from 'next/script';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junks Butlers Professional Junk & Trash Removal Services | Book Fast & Reliable Pickup",
  description: "Trusted junk and trash removal by Junks Butlers. Same-day service, upfront pricing, and eco-friendly disposal for homes and businesses. Schedule your cleanout now.",
  verification: {
    google: 'OVJPxepzejctNO3aq8XobKJZhsDjwvylIo-7AvD7iwM',
  },
};

// Fetch shared data for the layout
async function getLayoutData(): Promise<LandingPageData | null> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error('Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID');
    return null;
  }

  try {
    return await fetchLandingPageForSSG(templateId, id);
  } catch (error) {
    console.error('Error fetching layout data:', error);
    return null;
  }
}

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-DTFWE0LH3W';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutData = await getLayoutData();
  
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        <ThemeProvider theme={layoutData?.themeData}>
          <Navbar 
            businessName={layoutData?.businessName}
            themeData={layoutData?.themeData}
            phoneNumber={layoutData?.businessData?.phone}
            serviceAreas={layoutData?.businessData?.serviceAreas}
          />
          
          <main className="flex-grow">
            {children}
          </main>
          
          {layoutData && (
            <FooterSection 
              businessName={layoutData.businessName}
              businessDescription={
                layoutData.content?.about?.description || 
                "Professional junk removal services you can trust. We're here to help with all your junk removal needs."
              }
              businessData={layoutData.businessData}
              themeData={layoutData.themeData}
            />
          )}
        </ThemeProvider>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove browser extension attributes that cause hydration mismatches
              if (typeof document !== 'undefined') {
                const body = document.body;
                if (body && body.hasAttribute('cz-shortcut-listen')) {
                  body.removeAttribute('cz-shortcut-listen');
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
