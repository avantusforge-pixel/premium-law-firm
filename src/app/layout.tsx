import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Premier Legal Firm | Corporate & Civil Law Excellence",
    template: "%s | Premier Legal Firm",
  },
  description:
    "Elite international law firm specializing in corporate law, litigation, and complex legal matters. Trusted by Fortune 500 companies and individuals worldwide.",
  keywords: [
    "law firm",
    "corporate law",
    "litigation",
    "legal services",
    "attorneys",
    "international law",
    "business law",
    "legal counsel",
  ],
  authors: [{ name: "Premier Legal Firm" }],
  creator: "Premium Law Firm",
  publisher: "Premium Law Firm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Premier Legal Firm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premier Legal Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Legal Firm | Corporate & Civil Law Excellence",
    description:
      "Elite international law firm specializing in corporate law, litigation, and complex legal matters.",
    images: ["/og-image.jpg"],
    creator: "@premierlegal",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, plusJakarta.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Premier Legal Firm",
              description: "Elite international law firm specializing in corporate law, litigation, and complex legal matters",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              telephone: "+1 (212) 555-0100",
              email: "info@premierlegalf.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Plaza, Suite 1000",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              areaServed: "US",
              priceRange: "$$",
              sameAs: [
                "https://www.linkedin.com/company/premier-legal-firm",
                "https://twitter.com/premierlegal",
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-navy-900 antialiased",
          "dark:bg-navy-900 dark:text-white"
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
