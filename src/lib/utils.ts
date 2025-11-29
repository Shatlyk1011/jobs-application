import { siteConfig } from "@/config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { OgImageSchema } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOgImageUrl({ heading, type }: OgImageSchema) {
  const ogUrl = new URL(`${siteConfig.siteUrl}/api/og`)
  ogUrl.searchParams.set('heading', heading)
  ogUrl.searchParams.set('type', type)
  const ogImageUrl = ogUrl.toString()
  return ogImageUrl
}
