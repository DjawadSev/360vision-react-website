import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { generatePageMetadata } from "../metadata";
import { defaultLocale, locales, type Locale } from "@/i18n";

type PolicySection = {
  title: string;
  body?: string;
  bulletsTitle?: string;
  bullets?: string[];
  secondaryTitle?: string;
  secondaryBullets?: string[];
  note?: string;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;

  const t = await getTranslations({ locale, namespace: "Privacy" });

  return generatePageMetadata({
    locale,
    title: t("seo.title") || "Privacy Policy | 360 VISION",
    description: t("seo.description") || "Read 360 VISION's privacy policy to understand how we collect, use, and protect your personal information.",
    path: "/privacy",
  });
}

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");
  const sections = t.raw("sections") as PolicySection[];

  return (
    <div id="privacy-page" className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("eyebrow")}</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{t("title")}</h1>
        <p className="mt-2 text-white/70">{t("updated")}</p>
        <p className="mt-4 text-lg text-white/75">{t("intro")}</p>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_16px_60px_rgba(0,0,0,0.35)] sm:p-10">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            {section.body && <p className="text-white/75">{section.body}</p>}
            {section.bulletsTitle && <p className="text-white/75">{section.bulletsTitle}</p>}
            {section.bullets && (
              <ul className="ml-4 list-disc space-y-1 text-white/75">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.secondaryTitle && <p className="text-white/75">{section.secondaryTitle}</p>}
            {section.secondaryBullets && (
              <ul className="ml-4 list-disc space-y-1 text-white/75">
                {section.secondaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.note && <p className="text-white/75">{section.note}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
