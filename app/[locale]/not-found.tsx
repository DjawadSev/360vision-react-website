import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div
      id="not-found-page"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[var(--brand-red-dark)]/45 to-black px-6 py-16 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover opacity-10 mix-blend-screen"
        style={{ backgroundPosition: "20% center" }}
        aria-hidden
      />
      <div className="gradient-spot left-6 top-6 bg-[var(--brand-red)]/35" aria-hidden />
      <div className="gradient-spot right-[-80px] bottom-[-80px] bg-[var(--brand-gold)]/20" aria-hidden />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t("eyebrow")}</p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{t("title")}</h1>
            <p className="max-w-xl text-lg text-white/75">{t("body")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-xl bg-[var(--brand-red)] px-6 text-white shadow-[0_16px_60px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
              )}
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-xl border-white/40 bg-white/5 text-white hover:border-[var(--brand-gold)]/60"
              )}
            >
              {t("ctaSecondary")}
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t("linksLabel")}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80 transition hover:border-[var(--brand-gold)]/50 hover:text-white"
              >
                {t("links.home")}
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80 transition hover:border-[var(--brand-gold)]/50 hover:text-white"
              >
                {t("links.services")}
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80 transition hover:border-[var(--brand-gold)]/50 hover:text-white"
              >
                {t("links.blog")}
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80 transition hover:border-[var(--brand-gold)]/50 hover:text-white"
              >
                {t("links.contact")}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-white/5 to-black/90 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(155,11,11,0.4),_transparent_60%)]"
            aria-hidden
          />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t("panelTitle")}</p>
                <p className="text-6xl font-semibold text-white">404</p>
              </div>
              <Image
                src="/logos/secondary-logo-transparent-300px.png"
                alt="360 Vision logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="text-white/70">{t("panelBody")}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">360 Vision</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{t("eyebrow")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
