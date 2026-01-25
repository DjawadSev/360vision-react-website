import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactForm } from "@/components/contact/contact-form";
import { generatePageMetadata } from "../metadata";
import { defaultLocale, locales, type Locale } from "@/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;

  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return generatePageMetadata({
    locale,
    title: t("seo.title") || "Contact Us | Get in Touch | 360 VISION",
    description: t("seo.description") || "Ready to transform your brand? Contact 360 VISION today for cutting-edge digital marketing solutions. Let's discuss your project and goals.",
    path: "/contact",
    keywords: [
      "contact marketing agency",
      "get quote",
      "marketing consultation",
      "contact 360 vision",
      "digital marketing inquiry",
    ],
  });
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div id="contact-page" className="grid gap-10 lg:grid-cols-2">
      <div id="contact-info-panel" className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">{t("eyebrow")}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{t("title")}</h1>
        <p className="mt-4 text-lg text-white/70">{t("body")}</p>
        <div className="mt-10 space-y-4 text-white/70">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{t("email.label")}</p>
            <p className="text-xl text-white">{t("email.value")}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{t("hq.label")}</p>
            <p className="text-white">{t("hq.address1")}</p>
            <p className="text-white">{t("hq.address2")}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{t("phone.label")}</p>
            <p className="text-white">{t("phone.value")}</p>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
