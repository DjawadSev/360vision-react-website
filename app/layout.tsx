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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white`}>
        <div className="flex min-h-screen flex-col bg-slate-950">
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-24">{children}</main>
          <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} 360Vision Studio. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
