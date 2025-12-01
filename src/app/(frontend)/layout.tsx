import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "../globals.css";
import { ThemeProviders } from "../theme-providers";
import { siteConfig } from "@/config";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "./",
    siteName: siteConfig.title,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
    },
  },
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
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image",
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.info(
    "%cSalam",
    "color: #ffffff; background-color: #222; padding: 6px 12px; border-radius: 4px; font-size: 14px; border: 1px solid #fff1; letter-spacing:-0.2px font-weight: medium;",
  );
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${InterSans.variable} antialiased`}>
        <ThemeProviders>
          {children}
          <Toaster richColors theme="dark" position="bottom-left" />
        </ThemeProviders>
      </body>
    </html>
  );
}
