import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const post = {
  title: "كتابة إبداعية متعددة القمع بعد تحديث Andromeda على Meta",
  slug: "andromeda-multifunnel-meta-ar",
  category: "Performance Marketing",
  date: "December 2025",
  isoDate: "2025-12-03",
  readTime: "7 دقائق قراءة",
  summary: "نهج كتابة إعلانية متعددة المراحل يحافظ على جودة الإشارة بعد Andromeda ويخفض تكلفة الإجراء في سوق الإعلانات بالجزائر.",
  tags: ["Meta Ads", "إبداع", "Multi-funnel"],
  stat: "انخفاض CPA بنسبة 15%",
  cover: "/images/cards/3dservicecardimage.png",
  language: { code: "ar", label: "العربية" },
  seo: {
    title: "كتابة متعددة القمع متوافقة مع Andromeda | 360 VISION",
    description: "منهجية كتابة إعلانات توازن بين الجذب، الإقناع، والتحويل مع الحفاظ على إشارات الجودة التي يفضلها Andromeda في السوق الجزائري.",
    keywords: [
      "Andromeda Meta",
      "إعلانات فيسبوك الجزائر",
      "كتابة إعلانية متعددة القمع",
      "تسويق رقمي الجزائر",
      "CPA منخفض",
      "إعلانات إنستغرام الجزائر",
      "إبداع إعلاني",
      "وكالة تسويق جزائرية",
      "تجارة إلكترونية الجزائر",
    ],
  },
  content: {
    intro:
      "تحديث Andromeda غيّر قواعد اللعبة: الجودة، التماسك، والإشارة بعد النقر أصبحت أساس الأداء. كتابة إبداعية متعددة القمع تعني أن كل مرحلة من رحلة العميل تحصل على رسالة ودليل يناسبانها، بدل الاعتماد على Hook واحد.",
    keyTakeaways: [
      "الإعلانات المتسلسلة تعطي إشارات جودة أفضل للألغوريثم وتقلل الارتداد.",
      "كل مرحلة (TOF/MOF/BOF) تتطلب نصًا مختلفًا يناسب نية المستخدم.",
      "النسخ الثنائية (عربي/فرنسي) تحافظ على الإشارة إذا بقي الهيكل ثابتًا.",
    ],
    sections: [
      {
        heading: "كيف غيّر Andromeda الأولويات",
        body:
          "الألغوريثم يفضل المحتوى المتماسك والرحلات الكاملة بدل الإعلانات المنفردة. الإشارة تقاس على الجودة القصيرة والطويلة معًا.",
        bullets: [
          "قصة واضحة ومتصلة من الإعلان إلى صفحة الهبوط.",
          "سرد يركز على المشكلة + الإثبات + الحل بدل Hook واحد.",
          "إشارات تفاعل مستمرة أهم من لقطات CTR قصيرة.",
        ],
      },
      {
        heading: "لماذا القمع المتعدد ضروري في الجزائر",
        body:
          "المستهلك الجزائري يمر بمراحل قبل الشراء. إعلان واحد لا يكفي، لذلك نقسم الرسائل حسب النية.",
        bullets: [
          "TOF: جذب فضول عبر فيديو ديناميكي ورسائل عامة.",
          "MOF: شرح القيمة وإثبات الخبرة (عقارات، خدمات، تجارة إلكترونية، تعليم).",
          "BOF: دفع للعمل مع دليل اجتماعي، عرض محدود، وإعادة استهداف.",
        ],
      },
      {
        heading: "تفوق الكتابة متعددة القمع على الـHook التقليدي",
        body:
          "الجمهور يريد فهم القصة كاملة: لماذا المنتج، لمن، كيف يعمل، ولماذا هو الأفضل. الألغوريثم يكافئ التماسك بين المراحل.",
        bullets: [
          "رسالة مختلفة لكل مرحلة بدلاً من نسخة واحدة للجميع.",
          "تطابق تام بين وعود الإعلان وعناوين الصفحة يقلل الارتداد.",
          "النسخة تتوسع تدريجيًا من فضول إلى إثبات إلى CTA قوي.",
        ],
      },
      {
        heading: "نتائج أفضل في السوق المحلي",
        body:
          "تطبيق هذا النهج يعطي استقرارًا للحملات حتى مع تغييرات Meta، ويخفض التكلفة مع الحفاظ على الحجم.",
        bullets: [
          "انخفاض CPA وتكلفة النتيجة مع ارتفاع CTR.",
          "ثبات أفضل للحملات بفضل إشارات ما بعد النقر.",
          "نمو طويل المدى بسبب الثقة المضافة في كل مرحلة.",
        ],
      },
      {
        heading: "حاسم للتجارة الإلكترونية في الجزائر",
        body:
          "المستخدم يحتاج تطمين قبل الشراء. التسلسل الصحيح: شرح، عرض، تطمين، ثم بيع.",
        bullets: [
          "شرح صريح للوعد والآلية.",
          "عرض أدلة وشهادات قريبة من ثقافة الجمهور.",
          "تطابق لغة الإعلان مع صفحة الهبوط لتقليل التخلي.",
          "CTA متوافق مع نية الزائر (اكتشف/قارن/احجز).",
        ],
      },
    ],
    outcomes: [
      "انخفاض CPA بنسبة 15% مع الحفاظ على الإنفاق.",
      "تحسن CTR وCR عبر رسائل موجهة لكل مرحلة.",
      "حملات أكثر استقرارًا بفضل إشارات جودة متواصلة.",
    ],
    cta: {
      label: "تواصل معنا",
      link: "/contact",
      body: "شارك الهدف والجمهور وميزانيتك. سنرسل لك حزمة نصوص متعددة القمع جاهزة للإطلاق ومتوافقة مع Andromeda.",
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

export default function BlogArticleArabicPage() {
  return (
    <div id={`blog-article-${post.slug}`} className="space-y-12" dir="rtl" lang="ar">
      <Script id={`structured-data-${post.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-12 shadow-[0_32px_120px_rgba(0,0,0,0.55)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover bg-left opacity-10 mix-blend-screen" aria-hidden />
        <div className="absolute inset-0 opacity-40">
          {post.cover ? (
            <Image src={post.cover} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" priority />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[var(--brand-red)]/25 via-black to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#1a0a0a]/80" />
        </div>
        <div className="relative space-y-6 text-right">
          <div className="flex flex-wrap items-center justify-end gap-3">
            <Badge className="bg-[var(--brand-red)] text-white">{post.category}</Badge>
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-[var(--brand-gold)]">
              {post.language.label} · {post.language.code.toUpperCase()}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{post.readTime}</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">{post.date}</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="max-w-3xl text-lg text-white/75 ml-auto">{post.summary}</p>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-end gap-3 text-sm text-white/70">
            {post.stat && <span className="rounded-full bg-[var(--brand-gold)]/15 px-3 py-1 font-semibold text-[var(--brand-gold)]">{post.stat}</span>}
            <span>تاريخ النشر: {post.date}</span>
            <span aria-hidden>&bull;</span>
            <span>اللغة: {post.language.label}</span>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-xl border border-white/30 bg-white/10 text-white hover:border-[var(--brand-gold)]/60"
              )}
            >
              العودة لكل المقالات
            </Link>
            <Link
              href={post.content.cta?.link ?? "/contact"}
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-xl bg-[var(--brand-red)] px-4 text-white shadow-[0_14px_55px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
              )}
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <article className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-right shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">نظرة عامة</p>
            <p className="text-lg text-white/80">{post.content.intro}</p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-inner shadow-black/40">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">أهم النقاط</p>
            <ul className="space-y-3 text-sm text-white/80">
              {post.content.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--brand-gold)]">النتائج</p>
              <ul className="space-y-3 text-sm text-white/80">
                {post.content.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
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
                      <li key={point} className="flex items-start gap-3">
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
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">الخطوة التالية</p>
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
              تواصل معنا
            </Link>
          </section>
        )}
      </article>
    </div>
  );
}
