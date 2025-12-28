import { redirect } from "next/navigation";

import { defaultLocale, locales, type Locale } from "@/i18n";
import { resolveParam } from "@/lib/route-params";

type PortfolioPageProps = {
  params?: Promise<{ locale?: string | string[] }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const resolvedParams = await params;
  const localeParam = resolveParam(resolvedParams?.locale);
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  redirect(`${prefix}/services`);
}
