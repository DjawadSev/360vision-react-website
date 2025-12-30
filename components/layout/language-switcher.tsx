"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { locales } from "@/i18n";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");
  const isMobile = variant === "mobile";

  const handleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur",
        isMobile
          ? "flex w-full flex-col items-stretch gap-2"
          : "flex min-w-[220px] items-center justify-between gap-3"
      )}
      aria-label={t("label")}
    >
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-[var(--brand-gold)]" aria-hidden />
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">{t("label")}</span>
      </div>
      <div className={cn("flex items-center gap-1", isMobile && "flex-wrap gap-2")}>
        {locales.map((item) => {
          const isActive = item === locale;
          return (
            <button
              key={item}
              type="button"
              onClick={() => handleChange(item)}
              className={cn(
                "rounded-xl px-3 py-1 text-xs font-semibold uppercase transition",
                isMobile ? "tracking-[0.14em]" : "tracking-[0.18em]",
                isActive
                  ? "border border-[var(--brand-gold)]/60 bg-[var(--brand-gold)]/15 text-white"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
              )}
              aria-pressed={isActive}
              aria-label={t("change", { locale: t(`locale.${item}`) })}
            >
              {t(`locale.${item}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
