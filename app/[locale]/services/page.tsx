import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/navigation";
import { defaultLocale, locales, type Locale } from "@/i18n";

type ServicePackage = {
  title: string;
  description: string;
  deliverables: string[];
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;

  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const servicePackages = t.raw("packages") as ServicePackage[];

  return (
    <div id="services-page" className="space-y-12">
      <div id="services-intro" className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">{t("eyebrow")}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{t("title")}</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">{t("body")}</p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--brand-gold)]">
          {t("badge")}
        </div>
      </div>

      <div id="services-package-grid" className="grid gap-8 lg:grid-cols-3">
        {servicePackages.map((pkg) => (
          <article
            id={`services-card-${slugify(pkg.title)}`}
            key={pkg.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black/70 to-black/70 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">{pkg.title}</h2>
              <span className="rounded-full border border-[var(--brand-red)]/40 bg-[var(--brand-red)]/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                {t("pill")}
              </span>
            </div>
            <p className="mt-3 flex-1 text-white/70">{pkg.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {pkg.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`${buttonVariants({ variant: "outline" })} mt-8 w-full justify-center`}>
              {tCommon("contactUs")}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
