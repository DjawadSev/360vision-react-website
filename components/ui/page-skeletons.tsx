import { Skeleton } from "@/components/ui/skeleton";

const tone = "bg-white/10";
const toneSoft = "bg-white/5";
const toneStrong = "bg-white/20";

export function HomePageSkeleton() {
  return (
    <div className="space-y-20" aria-hidden="true">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Skeleton className={`h-6 w-44 rounded-full ${tone}`} />
            <div className="space-y-3">
              <Skeleton className={`h-10 w-full max-w-[480px] ${tone}`} />
              <Skeleton className={`h-10 w-full max-w-[420px] ${tone}`} />
            </div>
            <div className="space-y-3">
              <Skeleton className={`h-5 w-full max-w-[520px] ${tone}`} />
              <Skeleton className={`h-5 w-full max-w-[480px] ${tone}`} />
              <Skeleton className={`h-5 w-full max-w-[440px] ${tone}`} />
            </div>
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={`home-hero-pill-${index}`} className={`h-8 w-28 rounded-full ${tone}`} />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Skeleton className={`h-12 w-40 rounded-full ${toneStrong}`} />
              <Skeleton className={`h-12 w-44 rounded-full ${tone}`} />
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
              <div className="space-y-3">
                <Skeleton className={`h-3 w-24 rounded-full ${tone}`} />
                <Skeleton className={`h-4 w-full max-w-[240px] ${tone}`} />
                <Skeleton className={`h-4 w-36 ${tone}`} />
              </div>
              <div className="space-y-3">
                <Skeleton className={`h-3 w-24 rounded-full ${tone}`} />
                <Skeleton className={`h-4 w-44 ${tone}`} />
                <Skeleton className={`h-4 w-32 ${tone}`} />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className={`h-[360px] w-full rounded-3xl ${toneSoft}`} />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={`home-hero-thumb-${index}`} className={`h-12 w-full rounded-xl ${tone}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-32 ${tone}`} />
            <Skeleton className={`h-8 w-full max-w-[360px] ${tone}`} />
          </div>
          <Skeleton className={`h-10 w-32 rounded-full ${tone}`} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`home-services-card-${index}`}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <Skeleton className={`h-36 w-full rounded-xl ${toneSoft}`} />
              <Skeleton className={`mt-4 h-3 w-24 ${tone}`} />
              <Skeleton className={`mt-3 h-6 w-48 ${tone}`} />
              <div className="mt-4 space-y-2">
                <Skeleton className={`h-4 w-full ${tone}`} />
                <Skeleton className={`h-4 w-5/6 ${tone}`} />
                <Skeleton className={`h-4 w-4/6 ${tone}`} />
              </div>
              <Skeleton className={`mt-6 h-5 w-28 ${tone}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[var(--brand-red-dark)]/20 to-black px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-28 ${tone}`} />
            <Skeleton className={`h-8 w-full max-w-[320px] ${tone}`} />
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-[var(--brand-red-dark)]/35 via-white/10 to-[var(--brand-gold)]/14 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={`home-tool-${index}`} className={`h-10 w-full rounded-full ${tone}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/60 via-black to-black px-6 py-10 shadow-[0_22px_90px_rgba(0,0,0,0.5)] sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-28 ${tone}`} />
            <Skeleton className={`h-8 w-64 ${tone}`} />
            <Skeleton className={`h-4 w-full max-w-[320px] ${tone}`} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Skeleton className={`h-10 w-28 rounded-xl ${tone}`} />
            <Skeleton className={`h-10 w-28 rounded-xl ${tone}`} />
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article
              key={`home-blog-card-${index}`}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/45 via-black/70 to-black/70 p-5 shadow-[0_18px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className={`h-6 w-24 rounded-full ${tone}`} />
                  <Skeleton className={`h-6 w-16 rounded-full ${tone}`} />
                </div>
                <Skeleton className={`h-4 w-24 ${tone}`} />
              </div>
              <div className="mt-4 space-y-3">
                <Skeleton className={`h-6 w-full max-w-[220px] ${tone}`} />
                <Skeleton className={`h-4 w-full ${tone}`} />
                <Skeleton className={`h-4 w-5/6 ${tone}`} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, tagIndex) => (
                  <Skeleton key={`home-blog-tag-${index}-${tagIndex}`} className={`h-6 w-20 rounded-full ${tone}`} />
                ))}
              </div>
              <Skeleton className={`mt-6 h-10 w-full rounded-2xl ${toneSoft}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/55 via-[var(--brand-red)]/28 to-black px-6 py-12 shadow-[0_25px_100px_rgba(155,11,11,0.35)] sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-center">
          <div className="space-y-3">
            <Skeleton className={`h-4 w-28 ${tone}`} />
            <Skeleton className={`h-8 w-40 ${tone}`} />
          </div>
          <div className="space-y-3">
            <Skeleton className={`h-4 w-full ${tone}`} />
            <Skeleton className={`h-4 w-full ${tone}`} />
            <Skeleton className={`h-4 w-5/6 ${tone}`} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicesPageSkeleton() {
  return (
    <div className="space-y-12" aria-hidden="true">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <Skeleton className={`h-4 w-28 ${tone}`} />
        <Skeleton className={`mt-4 h-10 w-full max-w-[420px] ${tone}`} />
        <div className="mt-4 space-y-2">
          <Skeleton className={`h-4 w-full max-w-[520px] ${tone}`} />
          <Skeleton className={`h-4 w-4/5 ${tone}`} />
        </div>
        <Skeleton className={`mt-6 h-9 w-72 rounded-full ${tone}`} />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            key={`services-card-${index}`}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black/70 to-black/70 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between">
              <Skeleton className={`h-6 w-44 ${tone}`} />
              <Skeleton className={`h-6 w-20 rounded-full ${tone}`} />
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className={`h-4 w-full ${tone}`} />
              <Skeleton className={`h-4 w-5/6 ${tone}`} />
              <Skeleton className={`h-4 w-4/6 ${tone}`} />
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              {Array.from({ length: 3 }).map((_, itemIndex) => (
                <li key={`services-card-${index}-item-${itemIndex}`} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                  <Skeleton className={`h-2 w-2 rounded-full ${tone}`} />
                  <Skeleton className={`h-3 w-full max-w-[200px] ${tone}`} />
                </li>
              ))}
            </ul>
            <Skeleton className={`mt-8 h-11 w-full rounded-full ${toneSoft}`} />
          </article>
        ))}
      </div>
    </div>
  );
}

export function ContactPageSkeleton() {
  return (
    <div className="grid gap-10 lg:grid-cols-2" aria-hidden="true">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        <Skeleton className={`h-4 w-28 ${tone}`} />
        <Skeleton className={`mt-4 h-10 w-full max-w-[360px] ${tone}`} />
        <Skeleton className={`mt-4 h-4 w-full max-w-[420px] ${tone}`} />
        <div className="mt-10 space-y-6">
          <div className="space-y-2">
            <Skeleton className={`h-3 w-24 ${tone}`} />
            <Skeleton className={`h-5 w-44 ${tone}`} />
          </div>
          <div className="space-y-2">
            <Skeleton className={`h-3 w-24 ${tone}`} />
            <Skeleton className={`h-4 w-52 ${tone}`} />
            <Skeleton className={`h-4 w-40 ${tone}`} />
          </div>
          <div className="space-y-2">
            <Skeleton className={`h-3 w-24 ${tone}`} />
            <Skeleton className={`h-4 w-32 ${tone}`} />
          </div>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={`contact-field-${index}`} className="space-y-2">
            <Skeleton className={`h-3 w-24 ${tone}`} />
            <Skeleton className={`h-12 w-full rounded-2xl ${toneSoft}`} />
          </div>
        ))}
        <div className="space-y-2">
          <Skeleton className={`h-3 w-28 ${tone}`} />
          <Skeleton className={`h-28 w-full rounded-2xl ${toneSoft}`} />
        </div>
        <Skeleton className={`h-12 w-full rounded-full ${toneStrong}`} />
        <Skeleton className={`h-4 w-4/5 ${tone}`} />
      </div>
    </div>
  );
}

export function BlogPageSkeleton() {
  return (
    <div className="space-y-14" aria-hidden="true">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <Skeleton className={`h-6 w-24 rounded-full ${tone}`} />
              <Skeleton className={`h-3 w-24 ${tone}`} />
            </div>
            <div className="space-y-4">
              <Skeleton className={`h-10 w-full max-w-[420px] ${tone}`} />
              <Skeleton className={`h-10 w-full max-w-[360px] ${tone}`} />
              <Skeleton className={`h-4 w-full max-w-[480px] ${tone}`} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Skeleton className={`h-12 w-36 rounded-xl ${toneStrong}`} />
              <Skeleton className={`h-12 w-36 rounded-xl ${tone}`} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={`blog-hero-highlight-${index}`} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Skeleton className={`h-3 w-24 ${tone}`} />
                  <Skeleton className={`mt-2 h-6 w-16 ${tone}`} />
                </div>
              ))}
            </div>
          </div>

          <article className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-black/70 to-black/70 p-6 shadow-[0_24px_96px_rgba(0,0,0,0.55)]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className={`h-6 w-20 rounded-full ${toneStrong}`} />
                <Skeleton className={`h-6 w-28 rounded-full ${tone}`} />
                <Skeleton className={`h-6 w-20 rounded-full ${tone}`} />
              </div>
              <Skeleton className={`h-8 w-full max-w-[320px] ${tone}`} />
              <Skeleton className={`h-4 w-full ${tone}`} />
              <Skeleton className={`h-4 w-5/6 ${tone}`} />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, tagIndex) => (
                  <Skeleton key={`blog-featured-tag-${tagIndex}`} className={`h-6 w-20 rounded-full ${tone}`} />
                ))}
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 px-4 py-3">
                <div className="space-y-2">
                  <Skeleton className={`h-3 w-24 ${tone}`} />
                  <Skeleton className={`h-4 w-32 ${tone}`} />
                </div>
                <Skeleton className={`h-6 w-16 rounded-full ${tone}`} />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Skeleton className={`h-4 w-20 ${tone}`} />
                <Skeleton className={`h-4 w-10 ${tone}`} />
                <Skeleton className={`h-4 w-20 ${tone}`} />
                <Skeleton className={`h-8 w-28 rounded-full ${tone}`} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-32 ${tone}`} />
            <Skeleton className={`h-8 w-64 ${tone}`} />
          </div>
          <Skeleton className={`h-8 w-48 rounded-full ${tone}`} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <article
              key={`blog-card-${index}`}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/45 via-black/70 to-black/70 p-5 shadow-[0_18px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className={`h-6 w-24 rounded-full ${tone}`} />
                  <Skeleton className={`h-6 w-20 rounded-full ${tone}`} />
                  <Skeleton className={`h-4 w-24 ${tone}`} />
                </div>
                <Skeleton className={`h-6 w-full max-w-[260px] ${tone}`} />
                <Skeleton className={`h-4 w-full ${tone}`} />
                <Skeleton className={`h-4 w-5/6 ${tone}`} />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, tagIndex) => (
                    <Skeleton key={`blog-grid-tag-${index}-${tagIndex}`} className={`h-6 w-20 rounded-full ${tone}`} />
                  ))}
                </div>
                <Skeleton className={`h-10 w-full rounded-2xl ${toneSoft}`} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-10 shadow-[0_22px_80px_rgba(0,0,0,0.5)] sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-28 ${tone}`} />
            <Skeleton className={`h-6 w-full max-w-[320px] ${tone}`} />
            <Skeleton className={`h-4 w-4/5 ${tone}`} />
          </div>
          <div className="flex w-full flex-col gap-3 sm:max-w-md">
            <Skeleton className={`h-12 w-full rounded-xl ${toneStrong}`} />
            <Skeleton className={`h-4 w-3/4 ${tone}`} />
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogArticleSkeleton() {
  return (
    <div className="space-y-12" aria-hidden="true">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-12 shadow-[0_32px_120px_rgba(0,0,0,0.55)] sm:px-10">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Skeleton className={`h-6 w-24 rounded-full ${toneStrong}`} />
            <Skeleton className={`h-6 w-24 rounded-full ${tone}`} />
            <Skeleton className={`h-6 w-20 rounded-full ${tone}`} />
            <Skeleton className={`h-6 w-24 rounded-full ${tone}`} />
          </div>
          <div className="space-y-4">
            <Skeleton className={`h-10 w-full max-w-[520px] ${tone}`} />
            <Skeleton className={`h-10 w-full max-w-[420px] ${tone}`} />
            <Skeleton className={`h-5 w-full max-w-[520px] ${tone}`} />
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={`blog-article-tag-${index}`} className={`h-6 w-20 rounded-full ${tone}`} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Skeleton className={`h-10 w-36 rounded-xl ${tone}`} />
            <Skeleton className={`h-10 w-36 rounded-xl ${toneStrong}`} />
          </div>
        </div>
      </section>

      <article className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(0,0,0,0.45)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Skeleton className={`h-4 w-32 ${tone}`} />
            <Skeleton className={`h-4 w-full ${tone}`} />
            <Skeleton className={`h-4 w-5/6 ${tone}`} />
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5">
            <Skeleton className={`h-3 w-32 ${tone}`} />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={`blog-article-takeaway-${index}`} className="flex items-center gap-3">
                  <Skeleton className={`h-2 w-2 rounded-full ${tone}`} />
                  <Skeleton className={`h-3 w-full ${tone}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 rounded-2xl border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/5 p-5 lg:col-span-1">
            <Skeleton className={`h-3 w-28 ${tone}`} />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={`blog-article-outcome-${index}`} className="flex items-center gap-3">
                  <Skeleton className={`h-2 w-2 rounded-full ${tone}`} />
                  <Skeleton className={`h-3 w-full ${tone}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <section
                key={`blog-article-section-${index}`}
                className="rounded-2xl border border-white/10 bg-black/50 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
              >
                <Skeleton className={`h-3 w-32 ${tone}`} />
                <Skeleton className={`mt-2 h-6 w-56 ${tone}`} />
                <div className="mt-3 space-y-2">
                  <Skeleton className={`h-4 w-full ${tone}`} />
                  <Skeleton className={`h-4 w-5/6 ${tone}`} />
                </div>
                <div className="mt-3 space-y-2">
                  {Array.from({ length: 2 }).map((_, bulletIndex) => (
                    <div key={`blog-article-bullet-${index}-${bulletIndex}`} className="flex items-center gap-3">
                      <Skeleton className={`h-2 w-2 rounded-full ${tone}`} />
                      <Skeleton className={`h-3 w-full ${tone}`} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--brand-red-dark)]/70 via-black to-black p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Skeleton className={`h-4 w-28 ${tone}`} />
            <Skeleton className={`h-6 w-full max-w-[260px] ${tone}`} />
            <Skeleton className={`h-4 w-full max-w-[320px] ${tone}`} />
          </div>
          <Skeleton className={`h-12 w-40 rounded-xl ${toneStrong}`} />
        </section>
      </article>
    </div>
  );
}

export function PrivacyPageSkeleton() {
  return (
    <div className="space-y-8" aria-hidden="true">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-10">
        <Skeleton className={`h-4 w-28 ${tone}`} />
        <Skeleton className={`mt-4 h-8 w-full max-w-[420px] ${tone}`} />
        <Skeleton className={`mt-2 h-4 w-40 ${tone}`} />
        <Skeleton className={`mt-4 h-4 w-full max-w-[520px] ${tone}`} />
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)] sm:p-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={`privacy-section-${index}`} className="space-y-2">
            <Skeleton className={`h-6 w-48 ${tone}`} />
            <Skeleton className={`h-4 w-full ${tone}`} />
            <Skeleton className={`h-4 w-5/6 ${tone}`} />
            <div className="space-y-2">
              {Array.from({ length: 2 }).map((_, bulletIndex) => (
                <Skeleton key={`privacy-bullet-${index}-${bulletIndex}`} className={`h-3 w-4/6 ${tone}`} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
