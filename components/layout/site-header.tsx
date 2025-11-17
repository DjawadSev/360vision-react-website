"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_0_28px_rgba(212,175,55,0.3)]">
            <Image
              src="/logos/logo-small-black-rounded-bg.png"
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

        <Button className="hidden md:inline-flex" variant="secondary">
          Book a Call
        </Button>
        <button className="text-white md:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}
