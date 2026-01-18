import type { MetadataRoute } from "next";

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://360vision.io";
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/sitemap.rss`],
  };
}
