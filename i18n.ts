import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "fr"] as const;

export const defaultLocale = "en";

export type LocalePrefix = "as-needed" | "always" | "never";

export const localePrefix: LocalePrefix = "as-needed";

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Fallback to the default locale when middleware doesn't supply one (e.g. root "/")
  const resolvedLocale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
