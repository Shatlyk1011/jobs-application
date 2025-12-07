import { siteConfig } from "@/config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title,
  description,

  ...props
}: {
  title: string;
  description: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Ganat",
      "IT Jobs",
      "IT Resume",
      "Find an IT Mentor",
      "IT Specialist",
      "IT Career",
      "Post a Resume",
      "IT Mentoring",
      "IT Freelancing",
    ],
    openGraph: {
      title,
      description,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: siteConfig.socialBanner,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: siteConfig.socialBanner,
    },

    icons: {
      icon: "/favicon.ico",
    },
    ...props,
  };
}
