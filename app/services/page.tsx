import { Button } from "@/components/ui/button";

const servicePackages = [
  {
    title: "Launch Accelerator",
    description: "60-day sprint for new product launches including positioning, creative, paid media, and lifecycle foundations.",
    deliverables: ["Narrative workshop", "Funnel build", "Performance dashboard"],
  },
  {
    title: "Growth Partnership",
    description: "Embedded team for brands scaling past Series A with weekly experimentation and creative production.",
    deliverables: ["Paid social pods", "Content studio", "Lifecycle automation"],
  },
  {
    title: "Enterprise Advisory",
    description: "Executive strategy, team enablement, and modern playbooks for marketing leaders inside large organizations.",
    deliverables: ["Audience mapping", "CMO office", "Innovation lab"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Everything you need to go to market with confidence.</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          We architect bespoke teams across strategy, creative, media, and lifecycle so you can move faster without hiring a dozen
          full-time roles. Choose a package or mix modules for a perfect fit.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--brand-gold)]">
          Premium, motion-led experiences • Conversion discipline
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {servicePackages.map((pkg) => (
          <article
            key={pkg.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black/70 to-black/70 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">{pkg.title}</h2>
              <span className="rounded-full border border-[var(--brand-red)]/40 bg-[var(--brand-red)]/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                Elite
              </span>
            </div>
            <p className="mt-3 flex-1 text-white/70">{pkg.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {pkg.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8" variant="outline">
              Book this service
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
