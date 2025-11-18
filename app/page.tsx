import Link from "next/link";

import { HeroVisualCarousel } from "@/components/home/hero-carousel";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const stats = [
  { label: "Projects completed", value: "120+" },
  { label: "Revenue influenced", value: "500m DA" },
  { label: "Combined years of Exp", value: "40+" },
];

const contactInfo = {
  addressLine1: "CitǸ Saidi ahmed CICAD part N47 Bureau N17 Brodj",
  addressLine2: "el kiffan",
  email: "contact@360vision.io",
  phone: "+213 770072036",
};

const services = [
  {
    title: "Branding & Creative Direction",
    body: "We build visual identities designed for high memorability, brand authority, and long-term positioning. From logo systems to full brand worlds -- everything is built to convert, stand out, and support future scaling.",
  },
  {
    title: "Meta Ads, TikTok Ads & Performance Marketing",
    body: "Full-funnel advertising engineered for ROAS, low CPA, and consistent scaling. We optimize based on real KPIs: cost per lead, message conversion rate, qualified lead rate, and acquisition cost. More growth, more traffic, more volume -- without wasting budget.",
  },
  {
    title: "3D Visualization & Motion Design",
    body: "Premium 3D renders, product visuals, and architectural animations that dramatically increase engagement, trust, and purchase intent. Perfect for real estate, e-commerce, and high-end brands that need a next-level presentation.",
  },
];

const highlights = ["3D & Motion for Real Estate & Products", "End-to-End Growth Solutions", "Data-Backed Marketing Decisions"];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Home() {
  return (
    <div id="home-page" className="space-y-20">
      <section id="home-hero" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-12">
        <div className="gradient-spot left-6 top-4 bg-[var(--brand-red)]/40" />
        <div className="gradient-spot right-12 bottom-[-60px] bg-[var(--brand-gold)]/30" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Complete Digital Marketing Solution</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">A Modern Digital Marketing Agency Helping Algerian Businesses Grow</h1>
            <p className="max-w-2xl text-lg text-white/70">
              360 Vision delivers data-driven marketing solutions for companies across Algeria — from social media ads to 3D visualization and high-impact content creation.
            </p>
            <div id="home-hero-highlights" className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_22px_rgba(255,255,255,0.08)]">
                  {item}
                </span>
              ))}
            </div>
            <div id="home-hero-ctas" className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">Launch your brand now</Button>
              <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Explore more
              </Link>
            </div>
            <dl id="home-hero-stats" className="grid gap-6 pt-8 text-sm text-white/70 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner hover:border-[var(--brand-red)]/50">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-white/50">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div id="home-hero-contact-card" className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 shadow-inner sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Visit us</p>
                <p>{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
                <p className="font-semibold text-white">{contactInfo.email}</p>
                <p className="font-semibold text-white">{contactInfo.phone}</p>
              </div>
            </div>
          </div>

          <HeroVisualCarousel />
        </div>
      </section>

      <section id="home-services" className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Signature services</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Precision-built capabilities for brands that want more than average.</h2>
          </div>
          <Link href="/services" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Explore services {"->"}
          </Link>
        </div>

        <div id="home-services-grid" className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              id={`home-service-${slugify(service.title)}`}
              key={service.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Service</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/70">{service.body}</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                Learn more
                <span aria-hidden>{"->"}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="home-about" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/55 via-[var(--brand-red)]/28 to-black px-6 py-12 shadow-[0_25px_100px_rgba(155,11,11,0.35)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover bg-center opacity-10 mix-blend-screen" aria-hidden />
        <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">About Us.</h2>
          </div>
          <div className="space-y-4 text-lg text-white/75">
            <p>We are not just a social media agency. We are a growth partner.</p>
            <p>
              360 Vision is a full-stack creative and marketing agency built by strategists, designers, developers, and analysts -- all focused on one thing: helping brands grow with precision and impact.
            </p>
            <p>
              From content creation to paid media, 3D production to CRM integration, we do not just offer services -- we build systems that convert attention into results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
