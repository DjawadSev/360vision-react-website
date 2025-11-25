"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type HeroShowcaseItem = {
  id: string;
  label: string;
  title: string;
  metric: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const heroShowcase: HeroShowcaseItem[] = [
  {
    id: "growth",
    label: "Boost Your Business",
    title: "Scale your growth with precision marketing",
    metric: "+214% Total Growth",
    description: "Full-funnel performance engine for ambitious brands.",
    image: {
      src: "/images/Hero/05.png",
      alt: "360 Vision showcase graphic",
    },
  },
  {
    id: "launch",
    label: "Product Launch",
    title: "Launch your brand with impact",
    metric: "+9,400 New Visitors in 48h",
    description: "Identity systems, launch campaigns, 3D visuals, packaging, and GTM assets.",
    image: {
      src: "/images/Hero/Hero.png",
      alt: "360 Vision motion identity",
    },
  },
  {
    id: "experience",
    label: "Immersive Experience",
    title: "Transform ideas into interactive experiences",
    metric: "+3x Engagement vs Static Assets",
    description: "3D worlds, architectural visuals, and hyper-real product demos.",
    image: {
      src: "/images/Hero/360vision_Hero-100.jpg",
      alt: "360 Vision premium environment",
    },
  },
];

const IMAGE_HEIGHT = 380;
const SLIDE_HEIGHT = 440;
const TRACK_GAP = 24;

export function HeroVisualCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroShowcase.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroShowcase.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="hero-visual-carousel" className="relative">
      <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 blur-3xl" />
      <div
        id="hero-carousel-viewport"
        className="relative h-[480px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur"
        aria-label="Hero visual carousel"
      >
        <div
          id="hero-carousel-track"
          className="flex flex-col transition-transform duration-500 ease-out"
          style={{
            gap: `${TRACK_GAP}px`,
            transform: `translateY(-${activeIndex * (SLIDE_HEIGHT + TRACK_GAP)}px)`,
            height: `${heroShowcase.length * SLIDE_HEIGHT + (heroShowcase.length - 1) * TRACK_GAP}px`,
          }}
          aria-live="polite"
        >
          {heroShowcase.map((item) => (
            <article
              id={`hero-carousel-slide-${item.id}`}
              key={item.id}
              className="flex h-full flex-col gap-3"
              style={{ height: `${SLIDE_HEIGHT}px` }}
            >
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/60" style={{ height: `${IMAGE_HEIGHT}px` }}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={900}
                  height={520}
                  className="h-full w-full object-cover"
                  priority={item.id === "growth"}
                />
              </div>
              <div className="mb-1 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80">
                <div className="space-y-0.5">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-[9px] text-white/60">{item.description}</p>
                </div>
                <span className="rounded-full border border-[var(--brand-red)]/40 bg-[var(--brand-red)]/30 px-2 py-0.5 text-[9px] font-semibold text-white">
                  {item.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div id="hero-carousel-controls" className="mt-4 flex flex-col gap-2" aria-label="Carousel controls">
        {heroShowcase.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              id={`hero-carousel-control-${item.id}`}
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center justify-between rounded-2xl border px-4 py-2 text-left text-sm font-semibold transition",
                isActive
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
              )}
              aria-current={isActive}
            >
              <span>{item.label}</span>
              <span className="text-xs uppercase tracking-[0.2em]">{isActive ? "Live" : "View"}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
