"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Centralized nav links so desktop and mobile menus stay in sync.
const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const LogoMark = () => (
  <span className="relative block h-11 w-11 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-1 shadow-[0_0_28px_rgba(155,11,11,0.35)]">
    <Image
      src="/logos/logo-small-black-rounded-bg.png"
      alt="360 Vision icon"
      fill
      sizes="44px"
      className="object-contain"
      priority
    />
  </span>
);

const HamburgerIcon = ({
  className,
  open,
}: React.SVGAttributes<SVGElement> & { open?: boolean }) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12L20 12"
      data-state={open ? "open" : "closed"}
      className="origin-center -translate-y-[7px] data-[state=open]:translate-x-0 data-[state=open]:translate-y-0 data-[state=open]:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      data-state={open ? "open" : "closed"}
      className="origin-center data-[state=open]:rotate-45"
    />
    <path
      d="M4 12H20"
      data-state={open ? "open" : "closed"}
      className="origin-center translate-y-[7px] data-[state=open]:translate-y-0 data-[state=open]:rotate-[135deg]"
    />
  </svg>
);

type MobileSideNavProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

function MobileSideNav({ open, onClose, pathname }: MobileSideNavProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const handlePointerDown = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open || !isMounted || typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        id="mobile-menu-backdrop"
        className="fixed inset-0 z-[24040] bg-black/70 backdrop-blur"
        aria-hidden="true"
        onClick={onClose}
        data-testid="mobile-menu-backdrop"
      />
      <aside
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        ref={panelRef}
        className="fixed inset-y-0 right-0 z-[24050] flex w-[min(88vw,340px)] flex-col gap-6 border-l border-white/15 bg-black/70 p-6 text-white shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        data-testid="mobile-menu"
      >
        <div id="mobile-menu-header" className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Close menu"
              data-testid="mobile-menu-close"
              onClick={onClose}
              className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur"
            >
              Exit
            </button>
          </div>
        </div>
        <div id="mobile-menu-brand" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/60 px-3 py-2">
          <LogoMark />
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">360 Vision</p>
            <p className="text-lg font-semibold text-white">Creative & Digital</p>
          </div>
        </div>
        <nav id="mobile-primary-nav" aria-label="Primary" className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-base font-semibold backdrop-blur",
                  isActive ? "text-white shadow-[0_10px_60px_rgba(155,11,11,0.35)]" : "text-white/80"
                )}
              >
                {link.label}
                {isActive && <span className="text-xs uppercase tracking-[0.3em] text-[var(--brand-gold)]">Active</span>}
              </Link>
            );
          })}
        </nav>
        <div id="mobile-nav-cta" className="mt-auto space-y-3 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur">
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-center rounded-2xl border border-white/30 bg-black/60 text-base font-semibold text-white/90"
            )}
          >
            Contact
          </Link>
        </div>
      </aside>
    </>,
    document.body
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header id="site-header" className="sticky top-0 z-[24000] w-full border-b border-white/10 bg-black/85 px-4 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div id="site-header-inner" className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4">
        <div id="site-header-left" className="flex items-center gap-3">
          <Link id="site-logo-link" href="/" className="flex items-center gap-3 text-white">
            <LogoMark />
            <div className="hidden leading-tight sm:block">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">360 Vision</p>
              <p className="text-lg font-semibold">Creative & Digital</p>
            </div>
          </Link>
        </div>

        <NavigationMenu id="desktop-navigation" className="hidden flex-1 justify-center md:flex">
          <NavigationMenuList className="gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild active={isActive}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-white/70 hover:text-white",
                          isActive && "bg-white/10 text-white shadow-[0_0_24px_rgba(155,11,11,0.35)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
          </NavigationMenuList>
        </NavigationMenu>
        <div id="site-header-actions" className="flex items-center gap-2">
          <button
            id="mobile-menu-toggle"
            type="button"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            data-testid="mobile-menu-trigger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <HamburgerIcon open={menuOpen} className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-2 text-white" />
          </button>
        </div>
      </div>
      <MobileSideNav open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
