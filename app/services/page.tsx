import { Button } from "@/components/ui/button";

const servicePackages = [
  {
    title: "3D Visualization",
    description:
      "Discover captivating 3D visualization and animation services with 360 Vision. From photorealistic product renders to immersive brand experiences, our expert team transforms your concepts into high-impact visuals that boost engagement, increase conversions, and strengthen brand recall.",
    deliverables: [
      "Photorealistic product renders",
      "Immersive brand experiences",
      "High-impact visuals that boost engagement and conversions",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Achieve real results with our full-service digital marketing solutions at 360 Vision. From data-driven SEO and PPC to engaging social campaigns and conversion-focused content, we help brands expand their visibility, attract qualified leads, and improve their return on investment (ROI).",
    deliverables: [
      "Data-driven SEO and PPC",
      "Engaging social campaigns and conversion-focused content",
      "Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk.",
    ],
  },
  {
    title: "Branding & Creative Design Services",
    description:
      "At 360 Vision, we craft brands that stand out and leave a lasting impression. From logo creation to complete visual identity systems, we combine strategic thinking with artistic precision to design visuals that capture attention, build trust, and tell your story with impact.",
    deliverables: [
      "Logo creation and complete visual identity systems",
      "Strategic thinking with artistic precision",
      "Visuals that capture attention, build trust, and tell your story",
    ],
  },
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function ServicesPage() {
  return (
    <div id="services-page" className="space-y-12">
      <div id="services-intro" className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Everything you need to go to market with confidence.</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          We architect bespoke teams across strategy, creative, media, and lifecycle so you can move faster without hiring a dozen full-time roles. Choose a package or mix modules for a perfect fit.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--brand-gold)]">
          Premium, motion-led experiences - Conversion discipline
        </div>
      </div>

      <div id="services-package-grid" className="grid gap-8 lg:grid-cols-3">
        {servicePackages.map((pkg) => (
          <article
            id={`services-card-${slugify(pkg.title)}`}
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
