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
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Everything you need to go to market with confidence.</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          We architect bespoke teams across strategy, creative, media, and lifecycle so you can move faster without hiring a dozen
          full-time roles. Choose a package or mix modules for a perfect fit.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {servicePackages.map((pkg) => (
          <article key={pkg.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">{pkg.title}</h2>
            <p className="mt-3 flex-1 text-white/70">{pkg.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {pkg.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-emerald-300">•</span>
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
