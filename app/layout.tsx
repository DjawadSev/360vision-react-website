import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
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
        <main className="relative min-h-screen bg-gradient-to-b from-black/80 via-[#0b0b0d]/90 to-black">
          <div className="mesh-overlay" aria-hidden />
          <div className="grid-lines" aria-hidden />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-28">{children}</div>
          <footer className="relative z-10 border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/60">
            <p className="font-semibold text-white">360 VISION</p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
