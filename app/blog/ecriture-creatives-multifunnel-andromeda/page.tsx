import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const post = {
  title: "Pourquoi la stratégie Multi-Funnel Creative Writing donne de meilleurs résultats après la mise à jour Andromeda (Meta) – Spécial marché Algérien",
  slug: "ecriture-creatives-multifunnel-andromeda",
  category: "Performance Marketing",
  date: "December 2025",
  isoDate: "2025-12-02",
  readTime: "7 min read",
  summary:
    "Le Multi-Funnel Creative Writing suit le consommateur algérien à chaque étape et aligne promesse, preuve, et ton sur ce que l’algorithme Meta valorise depuis Andromeda.",
  tags: ["Meta Ads", "Creative", "Multi-funnel"],
  stat: "CPL -18% en 21 jours",
  cover: "/images/hero/05.png",
  language: { code: "fr", label: "Français" },
  seo: {
    title: "Multi-Funnel Creative Writing après Andromeda | 360 VISION",
    description:
      "Pourquoi le creative writing multi-funnel est devenu indispensable après Andromeda pour Facebook Ads/Instagram Ads en Algérie : cohérence, storytelling, signaux de qualité.",
    keywords: [
      "marketing digital algérie",
      "publicité facebook algérie",
      "creative writing algérie",
      "multi funnel algérie",
      "andromeda meta algérie",
      "agence marketing algérienne",
      "création contenu algérie",
      "ad creative algérie",
      "stratégie marketing algérie",
      "e-commerce algérie",
    ],
  },
  content: {
    intro:
      "Le paysage du marketing digital en Algérie a changé radicalement depuis Andromeda. Les anciennes méthodes basées sur un hook unique ne suffisent plus. Les entreprises qui réussissent sur Facebook Ads, Instagram Ads, TikTok Ads et l’e-commerce adoptent une stratégie structurée : le Multi-Funnel Creative Writing.",
    keyTakeaways: [
      "Andromeda renforce l’importance de la qualité, de la cohérence et des signaux post-clic.",
      "Chaque étape du funnel réclame un message adapté : attirer, expliquer, rassurer, convertir.",
      "Le marché algérien répond mieux aux récits complets qu’aux hooks isolés.",
    ],
    sections: [
      {
        heading: "La mise à jour Andromeda a changé les règles du jeu",
        body:
          "L’algorithme Meta donne désormais plus d’importance à la qualité du contenu, à la cohérence du message et aux signaux d’engagement long terme. Les funnels complets sont favorisés par rapport aux publicités isolées.",
        bullets: [
          "Qualité du contenu et storytelling clair.",
          "Message cohérent du clic à la conversion.",
          "Profondeur de la stratégie créative, pas seulement un hook.",
          "Signaux d’engagement sur la durée.",
          "Préférence pour des funnels complets plutôt que des annonces isolées.",
        ],
      },
      {
        heading: "Le Multi-Funnel est devenu indispensable en Algérie",
        body:
          "Une seule publicité ne peut plus tout faire. Chaque étape du parcours client algérien a son objectif et son format pour maximiser la conversion.",
        bullets: [
          "TOF – Découverte : attirer, capter l’attention, créer de la curiosité (vidéos dynamiques, visuels attractifs).",
          "MOF – Intérêt & Confiance : expliquer la valeur et montrer votre expertise (e-commerce, services, immobilier, formations, restauration).",
          "BOF – Conversion : pousser à l’action avec preuve sociale, urgences limitées, offres et retargeting.",
        ],
      },
      {
        heading: "Pourquoi le Creative Writing Multi-Funnel surpasse le hook traditionnel ?",
        body:
          "Le public algérien veut comprendre avant d’acheter. Le Multi-Funnel raconte une histoire complète, s’adapte à l’intention et reste cohérent pour l’algorithme.",
        bullets: [
          "Raconte pourquoi le produit existe, pour qui, comment il fonctionne, et en quoi il est meilleur que la concurrence.",
          "Chaque étape = un message différent aligné sur l’intention (découverte, intérêt, conversion).",
          "La progression narrative est favorisée par l’algorithme Meta.",
        ],
      },
      {
        heading: "Résultat : de meilleures performances sur le marché algérien",
        body:
          "Les marques qui appliquent cette approche voient des coûts baisser et des conversions plus stables, même avec Andromeda.",
        bullets: [
          "Baisse du coût par résultat.",
          "Meilleur taux de clic et meilleur taux de conversion.",
          "Campagnes plus stables et croissance long terme.",
        ],
      },
      {
        heading: "Pourquoi c’est crucial pour l'e-commerce en Algérie ?",
        body:
          "Le consommateur algérien a besoin d’être rassuré. Le Multi-Funnel suit le parcours naturel : expliquer, montrer, rassurer, puis vendre.",
        bullets: [
          "Explique la promesse et le fonctionnement.",
          "Montre des preuves et des démonstrations adaptées au local.",
          "Rassure avec preuves sociales et cohérence annonce/landing.",
          "Vend en alignant l’offre et le CTA sur l’intention du visiteur.",
        ],
      },
    ],
    outcomes: [
      "Coût par lead réduit grâce à un tunnel complet cohérent.",
      "Taux de conversion et CTR en hausse avec messages adaptés par étape.",
      "Campagnes plus stables via des signaux de qualité constants.",
    ],
    cta: {
      label: "Optimiser vos créas Meta",
      link: "/contact",
      body:
        "Brief simple : objectif, audience, KPI. Nous livrons un kit multi-funnel FR/AR prêt à lancer qui respecte Andromeda et le marché algérien.",
    },
  },
};

export const metadata: Metadata = {
  title: post.seo.title,
  description: post.seo.description,
  keywords: post.seo.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.seo.title,
    description: post.seo.description,
    url: `/blog/${post.slug}`,
    publishedTime: post.isoDate,
    locale: post.language.code,
    tags: post.tags,
    images: post.cover
      ? [
          {
            url: post.cover,
            alt: post.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: post.seo.title,
    description: post.seo.description,
    images: post.cover ? [post.cover] : undefined,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.seo.title,
  description: post.seo.description,
  inLanguage: post.language.code,
  datePublished: post.isoDate,
  author: {
    "@type": "Organization",
    name: "360 VISION",
  },
  publisher: {
    "@type": "Organization",
    name: "360 VISION",
    logo: {
      "@type": "ImageObject",
      url: "/logos/secondary-logo-transparent-300px.png",
    },
  },
  image: post.cover,
  keywords: post.seo.keywords,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `/blog/${post.slug}`,
  },
};

export default function BlogArticleStaticPage() {
  return (
    <div id={`blog-article-${post.slug}`} className="space-y-12">
      <Script id={`structured-data-${post.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-12 shadow-[0_32px_120px_rgba(0,0,0,0.55)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover bg-right opacity-10 mix-blend-screen" aria-hidden />
        <div className="absolute inset-0 opacity-40">
          {post.cover ? (
            <Image src={post.cover} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" priority />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[var(--brand-red)]/25 via-black to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#1a0a0a]/80" />
        </div>
        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-[var(--brand-red)] text-white">{post.category}</Badge>
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
              {post.language.label} · {post.language.code.toUpperCase()}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{post.readTime}</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">{post.date}</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="max-w-3xl text-lg text-white/75">{post.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {post.stat && <span className="rounded-full bg-[var(--brand-gold)]/15 px-3 py-1 font-semibold text-[var(--brand-gold)]">{post.stat}</span>}
            <span>Published {post.date}</span>
            <span aria-hidden>&bull;</span>
            <span>Language: {post.language.label}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-xl border border-white/30 bg-white/10 text-white hover:border-[var(--brand-gold)]/60"
              )}
            >
              Back to all articles
            </Link>
            <Link
              href={post.content.cta?.link ?? "/contact"}
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-xl bg-[var(--brand-red)] px-4 text-white shadow-[0_14px_55px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
              )}
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      <article className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Overview</p>
            <p className="text-lg text-white/80">{post.content.intro}</p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-inner shadow-black/40">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Key takeaways</p>
            <ul className="space-y-3 text-sm text-white/80">
              {post.content.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {post.content.outcomes && (
            <div className="space-y-3 rounded-2xl border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/5 p-5 lg:col-span-1">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--brand-gold)]">Outcomes</p>
              <ul className="space-y-3 text-sm text-white/80">
                {post.content.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-6 lg:col-span-2">
            {post.content.sections.map((section) => (
              <section key={section.heading} className="rounded-2xl border border-white/10 bg-black/50 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.35)]">
                <p className="text-xs uppercase tracking-[0.26em] text-white/50">{section.heading}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{section.heading}</h2>
                <p className="mt-3 text-white/75">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {section.bullets.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        {post.content.cta && (
          <section className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--brand-red-dark)]/70 via-black to-black p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Next step</p>
              <h3 className="text-2xl font-semibold text-white">{post.content.cta.label}</h3>
              <p className="text-white/75">{post.content.cta.body}</p>
            </div>
            <Link
              href={post.content.cta.link}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-xl bg-[var(--brand-red)] px-5 text-white shadow-[0_15px_60px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
              )}
            >
              Contact us
            </Link>
          </section>
        )}
      </article>
    </div>
  );
}
