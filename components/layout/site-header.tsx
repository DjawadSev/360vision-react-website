"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Centralized nav links so desktop and mobile menus stay in sync.
const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
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
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] data-[state=open]:translate-x-0 data-[state=open]:translate-y-0 data-[state=open]:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      data-state={open ? "open" : "closed"}
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] data-[state=open]:rotate-45"
    />
    <path
      d="M4 12H20"
      data-state={open ? "open" : "closed"}
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] data-[state=open]:translate-y-0 data-[state=open]:rotate-[135deg]"
    />
  </svg>
);

export function SiteHeader() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const checkWidth = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = containerRef.current?.offsetWidth ?? window.innerWidth;
    setIsMobile(width < 768);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkWidth]);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [checkWidth]);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-[24000] w-full border-b border-white/10 bg-black/85 px-4 backdrop-blur supports-[backdrop-filter]:bg-black/70"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {isMobile && (
            <Popover open={menuOpen} onOpenChange={setMenuOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white hover:border-[var(--brand-gold)] hover:bg-white/10"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  data-testid="mobile-menu-trigger"
                >
                  <HamburgerIcon open={menuOpen} className="[&_path]:data-[state=open]:stroke-[var(--brand-gold)]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                sideOffset={10}
                className="z-[24050] w-64 border border-white/10 bg-black/95 p-2 text-sm text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur"
                data-testid="mobile-menu"
              >
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {links.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <NavigationMenuItem key={link.href} className="w-full">
                          <NavigationMenuLink asChild active={isActive}>
                            <Link
                              href={link.href}
                              className={cn(
                                "flex w-full items-center rounded-lg px-3 py-2 font-semibold transition hover:bg-white/10 hover:text-white", 
                                isActive ? "bg-white/10 text-white" : "text-white/70"
                              )}
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          )}

          <Link href="/" className="flex items-center gap-3 text-white">
            <LogoMark />
            <div className="hidden leading-tight sm:block">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">360 Vision</p>
              <p className="text-lg font-semibold">Creative & Digital</p>
            </div>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink asChild active={isActive}>
                        <Link
                          href={link.href}
                          className={cn(
                            "group inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-white/70 transition hover:text-white",
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
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "rounded-xl border border-transparent text-sm font-semibold text-white/80 hover:border-[var(--brand-gold)] hover:text-white"
            )}
          >
            Contact
          </Link>
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-xl bg-[var(--brand-red)] px-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(155,11,11,0.35)] hover:bg-[var(--brand-red-bright)]"
            )}
          >
            View Work
          </Link>
        </div>
      </div>
    </header>
  );
}
