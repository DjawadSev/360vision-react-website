import Image from "next/image";
import Link from "next/link";

import { HeroVisualCarousel } from "@/components/home/hero-carousel";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";
import {
  CreditCard,
  CreditCardBack,
  CreditCardChip,
  CreditCardFlipper,
  CreditCardFront,
  CreditCardMagStripe,
  CreditCardName,
} from "@/components/ui/shadcn-io/credit-card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Revenue Influenced", value: "500m DA" },
  { label: "Combined Experience", value: "40+ Years" },
];

const contactInfo = {
  addressLine1: "Cite Saidi Ahmed CICAD Part N47 Bureau N17 Bordj",
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
    body: "Full-funnel advertising engineered for ROI, low CPA, and consistent scaling. We optimize based on real KPIs: cost per lead, message conversion rate, qualified lead rate, and acquisition cost. More growth, more traffic, more volume -- without wasting budget.",
  },
  {
    title: "3D Visualization & Motion Design",
    body: "Premium 3D renders, product visuals, and architectural animations that dramatically increase engagement, trust, and purchase intent. Perfect for real estate, e-commerce, and high-end brands that need a next-level presentation.",
  },
];

const highlights = ["3D & Motion for Real Estate & Products", "End-to-End Growth Solutions", "Data-Driven Marketing Strategies"];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Home() {
  const blogHighlights = blogPosts.slice(0, 3);

  return (
    <div id="home-page" className="space-y-20">
      <section id="home-hero" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover opacity-10 mix-blend-screen" style={{ backgroundPosition: "20% center" }} aria-hidden />
        <div className="gradient-spot left-6 top-4 bg-[var(--brand-red)]/40" />
        <div className="gradient-spot right-12 bottom-[-60px] bg-[var(--brand-gold)]/30" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Modern Digital Marketing Solutions</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">A Digital Agency Helping Algerian Businesses Grow Online</h1>
            <div className="space-y-4 text-white/75">
              <p className="max-w-2xl text-lg">
                360 Vision helps companies across Algeria build powerful digital identities - from social media marketing and online advertising to e-commerce strategy, branding, 3D visuals, and high-impact content creation.
              </p>
              <p className="max-w-2xl text-lg">
                We partner with ambitious Algerian businesses looking to digitalize, attract new customers, and scale their revenue through data-backed, conversion-focused marketing.
              </p>
            </div>
            <div id="home-hero-highlights" className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_22px_rgba(255,255,255,0.08)]">
                  {item}
                </span>
              ))}
            </div>
            <div id="home-hero-ctas" className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">Launch your brand now</Button>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Explore services
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
          {services.map((service) => {
            const isThreeD = service.title.includes("3D Visualization");
            const isMeta = service.title.includes("Meta Ads");
            return (
              <div key={service.title} className="flex h-full">
                {isThreeD ? (
                  <CardContainer containerClassName="py-0 w-full" className="w-full">
                    <CardBody className="relative w-full !h-auto min-h-[360px] rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] space-y-4">
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
                      <CardItem translateZ={60} className="overflow-hidden rounded-xl border border-white/10 bg-black/60">
                        <Image
                          src="/images/cards/3dserviceimage.png"
                          alt="3D visualization showcase"
                          width={640}
                          height={360}
                          className="h-48 w-full object-cover"
                        />
                      </CardItem>
                      <CardItem translateZ={75} className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                        Immersive 3D & Motion
                      </CardItem>
                      <CardItem translateZ={85} className="space-y-2 text-white/80">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-sm leading-relaxed text-white/70">{service.body}</p>
                      </CardItem>
                      <CardItem translateZ={95} className="inline-flex text-[11px] font-semibold text-[var(--brand-gold)]">
                        <Link href="/services" className="flex items-center gap-2">
                          Learn more
                          <span aria-hidden>{"->"}</span>
                        </Link>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                ) : isMeta ? (
                  <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                    <CreditCard className="w-full">
                      <CreditCardFlipper>
                        <CreditCardFront className="bg-gradient-to-br from-[var(--brand-red-dark)] via-[var(--brand-red)] to-[#ff5d5d] text-white">
                          <div className="flex h-full flex-col justify-between">
                            <div className="flex items-start justify-between">
                              <CreditCardChip className="left-2 w-16 bg-[var(--brand-gold)]/90" />
                              <div className="text-white/90">
                                <Image src="/logos/secondary-logo-transparent-300px.png" alt="360 Vision logo" width={42} height={42} className="h-10 w-10 object-contain" />
                              </div>
                            </div>
                            <div className="text-right">
                              <CreditCardName className="text-[14px] font-semibold uppercase tracking-[0.35em] text-[#dcdcdc] drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] whitespace-nowrap">
                                Performance Marketing
                              </CreditCardName>
                            </div>
                          </div>
                        </CreditCardFront>
                        <CreditCardBack className="bg-gradient-to-br from-[#040404] via-[#1a1a1a] to-black text-white">
                          <CreditCardMagStripe className="bg-white/30" />
                          <div className="mt-16 text-right">
                            <p className="text-sm font-semibold text-[var(--brand-red)]">CPA -31%</p>
                          </div>
                        </CreditCardBack>
                      </CreditCardFlipper>
                    </CreditCard>
                    <div className="space-y-2 text-white/80">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Service</p>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="text-white/70">{service.body}</p>
                      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                        Learn more
                        <span aria-hidden>{"->"}</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <article
                    id={`home-service-${slugify(service.title)}`}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Service</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 flex-grow text-white/70">{service.body}</p>
                    <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                      Learn more
                      <span aria-hidden>{"->"}</span>
                    </Link>
                  </article>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="home-tools" className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[var(--brand-red-dark)]/20 to-black px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Our Tool Stack</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Platforms and engines we build with daily.</h2>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-white/85 via-white/75 to-white/65 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.3)]">
          <LogoCarousel columns={3} />
        </div>
      </section>

      <section
        id="home-blog"
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/60 via-black to-black px-6 py-10 shadow-[0_22px_90px_rgba(0,0,0,0.5)] sm:px-10"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Insights</p>
            <h2 className="text-3xl font-semibold text-white">Fresh signals from the 360 Vision team.</h2>
            <p className="max-w-2xl text-white/70">Notes from live campaigns, launches, and experiments so you can move faster with proof.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`${buttonVariants({ size: "sm" })} rounded-xl bg-[var(--brand-red)] px-4 text-white shadow-[0_14px_55px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]`}
            >
              Visit the blog {"->"}
            </Link>
            <Link
              href="/contact"
              className={`${buttonVariants({ variant: "ghost", size: "sm" })} rounded-xl border border-white/30 bg-white/5 text-white hover:border-[var(--brand-gold)]/60`}
            >
              Talk to us
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {blogHighlights.map((post) => (
            <article
              id={`home-blog-card-${slugify(post.slug)}`}
              key={post.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/45 via-black/70 to-black/70 p-5 shadow-[0_18px_80px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[var(--brand-gold)]/35"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition group-hover:opacity-100" aria-hidden />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80">{post.category}</span>
                    <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[var(--brand-gold)] font-semibold">
                      {post.language.code.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <span>{post.date}</span>
                    <span aria-hidden>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="text-white/75">{post.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white/80">
                  <span className="font-semibold text-white">{post.stat}</span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[var(--brand-gold)] hover:text-[var(--brand-gold)]">
                    Read the breakdown
                    <span aria-hidden>{"->"}</span>
                  </Link>
                </div>
              </div>
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
