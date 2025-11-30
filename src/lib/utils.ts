import { siteConfig } from "@/config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { OgImageSchema } from "@/types";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOgImageUrl({ heading, type }: OgImageSchema) {
  const ogUrl = new URL(`${siteConfig.siteUrl}/api/og`);
  ogUrl.searchParams.set("heading", heading);
  ogUrl.searchParams.set("type", type);
  const ogImageUrl = ogUrl.toString();
  return ogImageUrl;
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
      "IT вакансии",
      "Работа в IT",
      "Резюме IT",
      "Поиск ментора IT",
      "IT специалисту",
      "IT карьера",
      "Разместить резюме",
      "Менторство IT",
      "IT фриланс",
    ],
    openGraph: {
      title,
      description,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
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
      images: "/images/og-image.png",
    },

    icons: {
      icon: "/favicon.ico",
    },
    ...props,
  };
}
