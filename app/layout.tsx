import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { CosmicWavesShaders } from "@/components/ui/cosmic-waves-shaders";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}>
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
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">360 Vision</p>
                <p className="text-lg font-semibold text-white">Creative & Digital</p>
                <p className="text-white/80">Cité Saidi Ahmed CICAD Part N47 Bureau N17 Bordj El Kiffan</p>
                <a href="mailto:contact@360vision.io" className="text-[var(--brand-gold)] hover:text-[var(--brand-gold)]/80">
                  contact@360vision.io
                </a>
                <Link href="/privacy" className="block text-white/70 underline-offset-4 hover:text-white">
                  Privacy Policy
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
            <p className="mx-auto mt-6 max-w-6xl text-white/60">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
