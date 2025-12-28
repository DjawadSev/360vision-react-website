import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Facebook, Instagram } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { CosmicWavesShaders } from "@/components/ui/cosmic-waves-shaders";
import { defaultLocale, type Locale, locales } from "@/i18n";
import { Link } from "@/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "360Vision Studio",
  description: "Marketing agency website for bold, modern brands.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteHeader />
          <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black/80 via-[#0b0b0d]/90 to-black">
            <CosmicWavesShaders
              className="pointer-events-none absolute inset-0 z-0 opacity-75 mix-blend-screen"
              amplitude={1.1}
              frequency={1.2}
              starDensity={1.1}
              speed={0.85}
              colorShift={1.05}
              aria-hidden
            />
            <div className="mesh-overlay z-[1]" aria-hidden />
            <div className="grid-lines z-[2]" aria-hidden />
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-28">{children}</div>
            <footer className="relative z-10 border-t border-white/10 bg-black/60 px-6 py-10 text-sm text-white/70">
              <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">{tFooter("label")}</p>
                  <p className="text-lg font-semibold text-white">{tFooter("tagline")}</p>
                  <p className="text-white/80">{tFooter("addressLine1")}</p>
                  <p className="text-white/80">{tFooter("addressLine2")}</p>
                  <a href="mailto:contact@360vision.io" className="text-[var(--brand-gold)] hover:text-[var(--brand-gold)]/80">
                    {tFooter("email")}
                  </a>
                  <Link href="/privacy" className="block text-white/70 underline-offset-4 hover:text-white">
                    {tFooter("privacy")}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61578708776363"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-[var(--brand-gold)]/60"
                  >
                    <Facebook className="h-5 w-5" aria-hidden />
                  </a>
                  <a
                    href="https://www.instagram.com/360vision_dz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-[var(--brand-gold)]/60"
                  >
                    <Instagram className="h-5 w-5" aria-hidden />
                  </a>
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-6xl text-white/60">&copy; {new Date().getFullYear()} {tFooter("rights")}</p>
            </footer>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
