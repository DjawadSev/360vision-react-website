import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { HeroVisualCarousel, type HeroShowcaseItem } from "@/components/home/hero-carousel";
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
import { Link } from "@/navigation";
import { defaultLocale, type Locale } from "@/i18n";

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
type ServiceCard = { title: string; body: string; variant?: "3d" | "meta" | "standard" };
type ContactCard = {
  visitLabel: string;
  contactLabel: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  phone: string;
};

export default async function Home({ params }: { params: Promise<{ locale?: Locale }> }) {
  const { locale = defaultLocale } = await params;

  const tHome = await getTranslations({ locale, namespace: "Home" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  const heroHighlights = tHome.raw("hero.highlights") as string[];
  const services = tHome.raw("services.cards") as ServiceCard[];
  const contactInfo = tHome.raw("hero.contact") as ContactCard;
  const heroCarouselItems = tHome.raw("heroCarousel.items") as HeroShowcaseItem[];
  const heroCarouselLabels = tHome.raw("heroCarousel.labels") as { live: string; view: string };

  const blogHighlights = blogPosts.slice(0, 3);

  return (
    <div id="home-page" className="space-y-20">
      <section
        id="home-hero"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover opacity-10 mix-blend-screen" style={{ backgroundPosition: "20% center" }} aria-hidden />
        <div className="gradient-spot left-6 top-4 bg-[var(--brand-red)]/40" />
        <div className="gradient-spot right-12 bottom-[-60px] bg-[var(--brand-gold)]/30" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge>{tHome("hero.badge")}</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{tHome("hero.title")}</h1>
            <div className="space-y-4 text-white/75">
              <p className="max-w-2xl text-lg">{tHome("hero.body1")}</p>
              <p className="max-w-2xl text-lg">{tHome("hero.body2")}</p>
            </div>
            <div id="home-hero-highlights" className="flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_22px_rgba(255,255,255,0.08)]">
                  {item}
                </span>
              ))}
            </div>
            <div id="home-hero-ctas" className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">{tHome("hero.ctaPrimary")}</Button>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
                {tHome("hero.ctaSecondary")}
              </Link>
            </div>
            <div id="home-hero-contact-card" className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 shadow-inner sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{contactInfo.visitLabel}</p>
                <p>{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{contactInfo.contactLabel}</p>
                <p className="font-semibold text-white">{contactInfo.email}</p>
                <p className="font-semibold text-white">{contactInfo.phone}</p>
              </div>
            </div>
          </div>

          <HeroVisualCarousel items={heroCarouselItems} labels={heroCarouselLabels} />
        </div>
      </section>

      <section id="home-services" className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">{tHome("services.eyebrow")}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{tHome("services.title")}</h2>
          </div>
          <Link href="/services" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            {tHome("services.cta")}
          </Link>
        </div>

        <div id="home-services-grid" className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const isThreeD = service.variant === "3d";
            const isMeta = service.variant === "meta";
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
                        {tHome("services.labels.immersive")}
                      </CardItem>
                      <CardItem translateZ={85} className="space-y-2 text-white/80">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-sm leading-relaxed text-white/70">{service.body}</p>
                      </CardItem>
                      <CardItem translateZ={95} className="inline-flex text-[11px] font-semibold text-[var(--brand-gold)]">
                        <Link href="/services" className="flex items-center gap-2">
                          {tCommon("learnMore")}
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
                                {tHome("services.labels.performance")}
                              </CreditCardName>
                            </div>
                          </div>
                        </CreditCardFront>
                        <CreditCardBack className="bg-gradient-to-br from-[#040404] via-[#1a1a1a] to-black text-white">
                          <CreditCardMagStripe className="bg-white/30" />
                          <div className="mt-16 text-right">
                            <p className="text-sm font-semibold text-[var(--brand-red)]">{tHome("services.labels.cpa")}</p>
                          </div>
                        </CreditCardBack>
                      </CreditCardFlipper>
                    </CreditCard>
                    <div className="space-y-2 text-white/80">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{tCommon("serviceLabel")}</p>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="text-white/70">{service.body}</p>
                      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                        {tCommon("learnMore")}
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
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{tCommon("serviceLabel")}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 flex-grow text-white/70">{service.body}</p>
                    <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
                      {tCommon("learnMore")}
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
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">{tHome("tools.eyebrow")}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{tHome("tools.title")}</h2>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-[var(--brand-red-dark)]/35 via-white/10 to-[var(--brand-gold)]/14 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <LogoCarousel columns={3} />
        </div>
      </section>

      <section
        id="home-blog"
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/60 via-black to-black px-6 py-10 shadow-[0_22px_90px_rgba(0,0,0,0.5)] sm:px-10"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">{tHome("blog.eyebrow")}</p>
            <h2 className="text-3xl font-semibold text-white">{tHome("blog.title")}</h2>
            <p className="max-w-2xl text-white/70">{tHome("blog.subtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`${buttonVariants({ size: "sm" })} rounded-xl bg-[var(--brand-red)] px-4 text-white shadow-[0_14px_55px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]`}
            >
              {tHome("blog.visit")}
            </Link>
            <Link
              href="/contact"
              className={`${buttonVariants({ variant: "ghost", size: "sm" })} rounded-xl border border-white/30 bg-white/5 text-white hover:border-[var(--brand-gold)]/60`}
            >
              {tHome("blog.talk")}
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
                  <span className="font-semibold text-white">{post.stat ?? tCommon("readBreakdown")}</span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[var(--brand-gold)] hover:text-[var(--brand-gold)]">
                    {tCommon("readBreakdown")}
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
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">{tHome("about.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{tHome("about.title")}</h2>
          </div>
          <div className="space-y-4 text-lg text-white/75">
            <p>{tHome("about.paragraphs.0")}</p>
            <p>{tHome("about.paragraphs.1")}</p>
            <p>{tHome("about.paragraphs.2")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
