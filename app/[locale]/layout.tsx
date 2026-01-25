import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Facebook, Instagram } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://360vision.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "360 VISION | Digital Marketing & Creative Agency",
    template: "%s | 360 VISION",
  },
  description: "Transform your brand with cutting-edge digital marketing, 3D visualization, and performance-driven campaigns. 360 VISION delivers bold, modern marketing solutions.",
  keywords: [
    "digital marketing",
    "marketing agency",
    "3D visualization",
    "performance marketing",
    "creative agency",
    "brand development",
    "meta ads",
    "google ads",
    "social media marketing",
  ],
  authors: [{ name: "360 VISION" }],
  creator: "360 VISION",
  publisher: "360 VISION",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: baseUrl,
    siteName: "360 VISION",
    title: "360 VISION | Digital Marketing & Creative Agency",
    description: "Transform your brand with cutting-edge digital marketing, 3D visualization, and performance-driven campaigns.",
    images: [
      {
        url: `${baseUrl}/logos/secondary-logo-transparent-300px.png`,
        width: 1200,
        height: 630,
        alt: "360 VISION Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 VISION | Digital Marketing & Creative Agency",
    description: "Transform your brand with cutting-edge digital marketing, 3D visualization, and performance-driven campaigns.",
    images: [`${baseUrl}/logos/secondary-logo-transparent-300px.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-verification-code',
  },
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
  const isKnownLocale = locales.includes(rawLocale as Locale);
  const locale = isKnownLocale ? (rawLocale as Locale) : defaultLocale;

  setRequestLocale(locale);

  if (!isKnownLocale) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });

  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "360 VISION",
    url: baseUrl,
    logo: `${baseUrl}/logos/secondary-logo-transparent-300px.png`,
    description: "Digital marketing and creative agency specializing in 3D visualization, performance marketing, and brand development.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@360vision.io",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61578708776363",
      "https://www.instagram.com/360vision_dz/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oran",
      addressCountry: "DZ",
    },
  };

  // Structured Data for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "360 VISION",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
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
