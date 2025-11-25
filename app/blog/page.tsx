import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

const heroHighlights = [
  { label: "Reports shipped", value: "120+" },
  { label: "Playbooks tested", value: "48" },
  { label: "Avg. uplift", value: "31%" },
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <div id="blog-page" className="space-y-14">
      <section
        id="blog-hero"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover bg-right opacity-10 mix-blend-screen" aria-hidden />
        <div className="gradient-spot left-[-20px] top-[-40px] bg-[var(--brand-red)]/40" />
        <div className="gradient-spot right-[-80px] bottom-[-60px] bg-[var(--brand-gold)]/25" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <Badge className="bg-white/10 text-white">Insights</Badge>
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">360 Vision Journal</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Bold strategy notes for brands that move fast.</h1>
              <p className="max-w-2xl text-lg text-white/70">
                We document what works across performance, brand, and 3D so your next launch, campaign, or sales push has proof baked in. No fluff, only playbooks and results.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-xl bg-[var(--brand-red)] px-5 shadow-[0_15px_60px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
                )}
              >
                Contact our team
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-xl border-white/40 bg-white/5 px-5 text-white hover:border-[var(--brand-gold)]/60 hover:text-white"
                )}
              >
                See how we execute
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 shadow-inner shadow-black/50"
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <article
            id={`blog-featured-${featured.slug}`}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-black/70 to-black/70 p-6 shadow-[0_24px_96px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-0 opacity-60">
              {featured.cover ? (
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[var(--brand-red)]/30 via-black to-black" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#1a0a0a]/70" />
            </div>
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-[var(--brand-red)] text-white">Featured</Badge>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{featured.category}</span>
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  {featured.language.label} · {featured.language.code.toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-semibold text-white">{featured.title}</h2>
              <p className="text-white/75">{featured.summary}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white/80">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">Publishing cadence</p>
                  <p className="text-white">Weekly drops with real data.</p>
                </div>
                {featured.stat && <span className="rounded-full bg-[var(--brand-gold)]/20 px-3 py-1 text-xs font-semibold text-[var(--brand-gold)]">{featured.stat}</span>}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span>{featured.date}</span>
                <span aria-hidden>&bull;</span>
                <span>{featured.readTime}</span>
                <span aria-hidden>&bull;</span>
                <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/60">
                  Read the breakdown
                  <span aria-hidden>{"->"}</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="blog-grid" className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/50">Latest articles</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Execution notes straight from the studio floor.</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
            Updated in real time as we ship.
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <article
              id={`blog-card-${slugify(post.slug)}`}
              key={post.slug}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/45 via-black/70 to-black/70 p-5 shadow-[0_18px_80px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[var(--brand-gold)]/40"
            >
              <div className="absolute inset-0 opacity-45 transition duration-500 group-hover:opacity-65">
                {post.cover ? (
                  <Image src={post.cover} alt={`${post.title} cover`} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--brand-red)]/30 via-black to-black" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-[#140707]/75" />
              </div>
              <div className="relative flex h-full flex-col gap-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/70">{post.category}</span>
                  <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[var(--brand-gold)] font-semibold">
                    {post.language.code.toUpperCase()}
                  </span>
                  <span className="text-white/50">{post.date}</span>
                  <span aria-hidden className="text-white/40">
                    &bull;
                  </span>
                  <span className="text-white/50">{post.readTime}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="text-white/75">{post.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/75 transition hover:border-[var(--brand-gold)]/50 hover:text-white"
                >
                  <span className="font-semibold text-white">Read the breakdown</span>
                  {post.stat && <span className="rounded-full bg-[var(--brand-gold)]/20 px-3 py-1 text-[11px] font-semibold text-[var(--brand-gold)]">{post.stat}</span>}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="blog-cta"
        className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-10 shadow-[0_22px_80px_rgba(0,0,0,0.5)] sm:px-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Newsletter</p>
            <h3 className="text-2xl font-semibold text-white">Get the weekly drop with new playbooks and case notes.</h3>
            <p className="text-white/70">One email. No fluff. Only the experiments and results that moved the needle for our clients.</p>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-[260px]">
            <Button className="rounded-xl bg-[var(--brand-red)] text-base shadow-[0_15px_60px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]">Join the list</Button>
            <p className="text-xs text-white/50">We keep your inbox clean and respect your time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
