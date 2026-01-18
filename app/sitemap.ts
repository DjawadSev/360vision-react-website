import type { MetadataRoute } from "next";

import { defaultLocale, localePrefix, locales, type Locale } from "@/i18n";
import { blogPosts } from "@/lib/blog-posts";

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://360vision.io";
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

const getLocalePrefix = (locale: Locale) => {
  if (localePrefix === "never") {
    return "";
  }

  if (localePrefix === "always") {
    return `/${locale}`;
  }

  return locale === defaultLocale ? "" : `/${locale}`;
};

const buildPathname = (locale: Locale, pathname: string) => {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const prefix = getLocalePrefix(locale);

  if (normalizedPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${normalizedPath}`;
};

const buildUrl = (locale: Locale, pathname: string) => `${baseUrl}${buildPathname(locale, pathname)}`;

const buildAlternates = (pathname: string) => ({
  languages: Object.fromEntries(locales.map((locale) => [locale, buildUrl(locale, pathname)])),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ] as const;

  const entries: MetadataRoute.Sitemap = [];

  staticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      entries.push({
        url: buildUrl(locale, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: buildAlternates(route.path),
      });
    });
  });

  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: buildUrl(locale, path),
        lastModified: post.isoDate,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: buildAlternates(path),
      });
    });
  });

  return entries;
}
