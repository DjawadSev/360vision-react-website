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

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case "\"":
        return "&quot;";
      default:
        return char;
    }
  });

const toRssDate = (value: Date | string) => new Date(value).toUTCString();

type RssItem = {
  title: string;
  link: string;
  description?: string;
  pubDate: string;
};

export async function GET() {
  const now = new Date();
  const staticRoutes = [
    { path: "/", title: "Home" },
    { path: "/services", title: "Services" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
    { path: "/privacy", title: "Privacy" },
  ] as const;

  const items: RssItem[] = [];

  staticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const url = buildUrl(locale, route.path);
      items.push({
        title: `360 VISION ${route.title} (${locale.toUpperCase()})`,
        link: url,
        description: `${route.title} page`,
        pubDate: toRssDate(now),
      });
    });
  });

  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      const url = buildUrl(locale, `/blog/${post.slug}`);
      items.push({
        title: `${post.title} (${locale.toUpperCase()})`,
        link: url,
        description: post.summary,
        pubDate: toRssDate(post.isoDate ?? now),
      });
    });
  });

  const itemsXml = items
    .map((item) => {
      const description = item.description ? `<description>${escapeXml(item.description)}</description>` : "";
      return [
        "<item>",
        `<title>${escapeXml(item.title)}</title>`,
        `<link>${escapeXml(item.link)}</link>`,
        `<guid isPermaLink="true">${escapeXml(item.link)}</guid>`,
        description,
        `<pubDate>${escapeXml(item.pubDate)}</pubDate>`,
        "</item>",
      ]
        .filter(Boolean)
        .join("");
    })
    .join("");

  const rssUrl = `${baseUrl}/sitemap.rss`;
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escapeXml("360 VISION Sitemap")}</title>`,
    `<link>${escapeXml(baseUrl)}</link>`,
    `<description>${escapeXml("RSS sitemap feed for 360 VISION pages and articles.")}</description>`,
    `<lastBuildDate>${escapeXml(toRssDate(now))}</lastBuildDate>`,
    `<atom:link href="${escapeXml(rssUrl)}" rel="self" type="application/rss+xml" />`,
    itemsXml,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
