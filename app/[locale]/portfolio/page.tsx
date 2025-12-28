import { redirect } from "next/navigation";

import { defaultLocale, locales, type Locale } from "@/i18n";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  redirect(`${prefix}/services`);
}
