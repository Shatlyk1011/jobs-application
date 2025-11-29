import { siteConfig } from "@/config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { OgImageSchema } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOgImageUrl(ogImageSchema: OgImageSchema) {
  const ogUrl = new URL(`${siteConfig.siteUrl}/api/og`)
  ogUrl.searchParams.set('heading', ogImageSchema.heading)
  ogUrl.searchParams.set('type', ogImageSchema.type)
  return ogUrl.toString()
}
