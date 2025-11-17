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
          className="text-white transition hover:text-[var(--brand-gold)] md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        className={cn(
          "fixed right-0 top-0 z-30 h-full w-72 translate-x-full border-l border-white/10 bg-black/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition-transform duration-300 md:hidden",
          isMenuOpen && "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white" onClick={toggleMenu}>
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/0 p-1 shadow-[0_0_24px_rgba(155,11,11,0.35)]">
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
            className="text-white transition hover:text-[var(--brand-gold)]"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            ✕
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-3 text-base font-semibold text-white/80">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 transition-colors hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/10 text-white shadow-[0_0_20px_rgba(155,11,11,0.35)]"
                )}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
