import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const stats = [
  { label: "Brands scaled", value: "120+" },
  { label: "Revenue influenced", value: "$48M" },
  { label: "Avg. ROAS", value: "6.2x" },
];

const services = [
  {
    title: "Go-to-market Strategy",
    body: "Full-funnel research, positioning, and activation plans that get your product in front of the right audience.",
  },
  {
    title: "Creative Production",
    body: "Modular campaign systems, motion design, and branded content tailored for paid and organic channels.",
  },
  {
    title: "Lifecycle & Automation",
    body: "Intelligent email, SMS, and CRM journeys that nurture leads into loyal fans.",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-950 px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="gradient-spot left-12 top-10 bg-blue-500/70" />
        <div className="gradient-spot right-12 bottom-0 bg-fuchsia-500/50" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Badge>Full-service marketing agency</Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bold marketing for visionary teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              360Vision Studio partners with funded startups and modern enterprises to launch unforgettable campaigns, produce
              scroll-stopping creative, and build demand engines that compound month over month.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">Plan your launch</Button>
              <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View portfolio
              </Link>
            </div>
            <dl className="mt-12 grid gap-8 text-sm text-white/70 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Campaign snapshot</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-white/60">Client</p>
                <p className="text-xl font-semibold">Lumen AI</p>
              </div>
              <div>
                <p className="text-sm text-white/60">Objective</p>
                <p className="text-lg">Product-led growth launch</p>
              </div>
              <div>
                <p className="text-sm text-white/60">Result</p>
                <p className="text-3xl font-semibold text-emerald-300">+214% signups</p>
              </div>
            </div>
            <div className="mt-10 rounded-2xl bg-slate-950/50 p-4 text-sm text-white/70">
              <p>
                &ldquo;The 360Vision team feels like an in-house squad. They built our launch story, visuals, and lifecycle in weeks.&rdquo;
              </p>
              <p className="mt-4 font-semibold text-white">— Maya Hart, VP Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg transition hover:-translate-y-1 hover:border-white/30"
          >
            <p className="text-sm uppercase tracking-widest text-white/50">Service</p>
            <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-white/70">{service.body}</p>
            <Link href="/services" className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300">
              Learn more →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
