"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/0 p-1 shadow-[0_0_28px_rgba(155,11,11,0.35)]">
            <Image
              src="/logos/360vision-logo-full-transparent.png"
              alt="360 Vision logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">360 Vision</p>
            <p className="text-lg font-semibold">Creative & Digital</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium text-white/70 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 transition-colors hover:text-white",
                  isActive && "bg-white/10 text-white shadow-[0_0_20px_rgba(155,11,11,0.35)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-[var(--brand-red)]/60 hover:shadow-[0_0_30px_rgba(155,11,11,0.45)] hover:text-[var(--brand-gold)] md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/70 backdrop-blur-sm transition-opacity duration-200 md:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={toggleMenu}
      />

      <div
        id="mobile-menu"
        className={cn(
          "pointer-events-none fixed right-3 top-3 bottom-3 z-30 w-[calc(100%-1.5rem)] max-w-sm translate-x-full overflow-hidden rounded-3xl border border-white/10 bg-black/85 shadow-[0_25px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-transform duration-300 md:hidden",
          isMenuOpen && "pointer-events-auto translate-x-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/80" aria-hidden />
        <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-[var(--brand-red)]/25 blur-3xl" aria-hidden />
        <div className="relative flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
              onClick={toggleMenu}
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 shadow-[0_0_24px_rgba(155,11,11,0.45)]">
                <Image
                  src="/logos/360vision-logo-full-transparent.png"
                  alt="360 Vision logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">360 Vision</p>
                <p className="text-lg font-semibold">Creative & Digital</p>
              </div>
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--brand-red)]/60 hover:shadow-[0_0_28px_rgba(155,11,11,0.45)] hover:text-[var(--brand-gold)]"
              aria-label="Close menu"
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>
          <nav className="relative mt-8 flex flex-col gap-3 text-base font-semibold text-white/85">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[var(--brand-red)]/50 hover:shadow-[0_0_38px_rgba(155,11,11,0.45)] hover:text-white",
                    isActive && "border-[var(--brand-red)]/50 text-white shadow-[0_0_32px_rgba(155,11,11,0.45)]"
                  )}
                  onClick={toggleMenu}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-red-dark)]/35 via-transparent to-[var(--brand-gold)]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                  <span className="relative flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[var(--brand-gold)] shadow-[0_0_14px_rgba(212,175,55,0.8)]" aria-hidden />
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10 text-sm text-white/60">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Stay Ahead</p>
            <p>Premium experiences crafted by 360 Vision.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
