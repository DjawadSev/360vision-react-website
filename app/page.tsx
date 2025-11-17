import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const stats = [
  { label: "Brands launched", value: "120+" },
  { label: "Revenue influenced", value: "$48M" },
  { label: "Avg. ROAS", value: "6.2x" },
];

const services = [
  {
    title: "Go-to-market Strategy",
    body: "Positioning, research, and sequencing to cut through the noise with a cinematic launch moment.",
  },
  {
    title: "Creative Production",
    body: "High-impact films, modular ads, and immersive visuals crafted for paid, social, and product surfaces.",
  },
  {
    title: "Lifecycle & Automation",
    body: "CRM, email, and SMS ecosystems that turn spark into sustained demand and loyalty.",
  },
];

const highlights = ["End-to-end squads", "Motion-first storytelling", "Performance intelligence"];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-12">
        <div className="gradient-spot left-6 top-4 bg-[var(--brand-red)]/40" />
        <div className="gradient-spot right-12 bottom-[-60px] bg-[var(--brand-gold)]/30" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Complete Digital Marketing Solution</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Build Brands That Demand Attention
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              From digital campaigns to bold design systems, we create work that cuts through the noise and elevates your brand beyond the competition.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_22px_rgba(255,255,255,0.08)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">Plan your launch</Button>
              <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View portfolio
              </Link>
            </div>
            <dl className="grid gap-6 pt-8 text-sm text-white/70 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-white/50">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/60">
                <Image
                  src="/images/Hero/Hero.png"
                  alt="360 Vision creative hero"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Latest launch</p>
                  <p className="text-lg font-semibold text-white">Aura Systems – Immersive reveal</p>
                </div>
                <span className="rounded-full border border-[var(--brand-red)]/40 bg-[var(--brand-red)]/30 px-3 py-1 text-[13px] font-semibold text-white">
                  +214% signups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Signature services</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Precision teams for every growth chapter.</h2>
          </div>
          <Link href="/services" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Explore services →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Service</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/70">{service.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                Learn more
                <span aria-hidden>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
