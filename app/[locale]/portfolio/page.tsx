import { redirect } from "next/navigation";

import { defaultLocale, type Locale } from "@/i18n";

type PortfolioPageProps = {
  params: Promise<{ locale?: Locale }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale = defaultLocale } = await params;
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  redirect(`${prefix}/services`);
}
