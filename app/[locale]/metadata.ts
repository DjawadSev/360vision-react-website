import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale, type Locale } from "@/i18n";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://360vision.io";

type MetadataParams = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export async function generatePageMetadata({
  locale,
  title,
  description,
  path = "/",
  image,
  keywords = [],
  type = "website",
}: MetadataParams): Promise<Metadata> {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const canonicalPath = `${prefix}${path}`;
  const url = `${baseUrl}${canonicalPath}`;
  
  // Default OG image if none provided
  const ogImage = image ?? `${baseUrl}/logos/secondary-logo-transparent-300px.png`;
  
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "360 VISION",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
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
  };
}
