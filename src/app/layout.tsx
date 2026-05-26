import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

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
  },
  verification: {
    google: "your-google-verification-code",
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
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-navy-900 antialiased",
          "dark:bg-navy-900 dark:text-white"
        )}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
