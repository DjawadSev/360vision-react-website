import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { defaultLocale, locales, type Locale } from "@/i18n";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

type BlogArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;
  const post = getPostBySlug(slug);
  const t = await getTranslations({ locale, namespace: "BlogDetail" });

  if (!post) {
    return {
      title: t("notFoundTitle"),
      robots: { index: false, follow: false },
    };
  }

  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const url = `${prefix}/blog/${post.slug}`;

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.seo.title,
      description: post.seo.description,
      url,
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
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;
  const post = getPostBySlug(slug);
  const t = await getTranslations({ locale, namespace: "BlogDetail" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });

  if (!post) {
    notFound();
  }

  const prefix = locale === defaultLocale ? "" : `/${locale}`;

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
      "@id": `${prefix}/blog/${post.slug}`,
    },
  };

  return (
    <div id={`blog-article-${post.slug}`} className="space-y-12">
      {post && (
        <>
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
                <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-gold)] leading-tight">
                  {post.language.label} / {post.language.code.toUpperCase()}
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
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                {post.stat && <span className="rounded-full bg-[var(--brand-gold)]/15 px-3 py-1 font-semibold text-[var(--brand-gold)]">{post.stat}</span>}
                <span>{t("published", { date: post.date })}</span>
                <span aria-hidden>&bull;</span>
                <span>{t("updated")}</span>
                <span aria-hidden>&bull;</span>
                <span>{t("language", { language: post.language.label })}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "rounded-xl border border-white/30 bg-white/10 text-white hover:border-[var(--brand-gold)]/60"
                  )}
                >
                  {tCommon("backToArticles")}
                </Link>
                <Link
                  href={post.content.cta?.link ?? "/contact"}
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "rounded-xl bg-[var(--brand-red)] px-4 text-white shadow-[0_14px_55px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
                  )}
                >
                  {tCommon("contactTeam")}
                </Link>
              </div>
            </div>
          </section>

          <article className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">{t("overview")}</p>
                <p className="text-lg text-white/80">{post.content.intro}</p>
              </div>
              <div className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-inner shadow-black/40">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t("keyTakeaways")}</p>
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
                <div className="lg:col-span-1 space-y-3 rounded-2xl border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/5 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--brand-gold)]">{t("outcomes")}</p>
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

              <div className="lg:col-span-2 space-y-6">
                {post.content.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="rounded-2xl border border-white/10 bg-black/50 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
                  >
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
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("nextStep")}</p>
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
                  {tCommon("contactUs")}
                </Link>
              </section>
            )}
          </article>
        </>
      )}
    </div>
  );
}
