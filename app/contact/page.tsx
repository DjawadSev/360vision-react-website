import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Tell us about your next launch.</h1>
        <p className="mt-4 text-lg text-white/70">
          Share context on your business goals, team size, and timeline. We typically reply within one business day and can kick off discovery the same week.
        </p>
        <div className="mt-10 space-y-4 text-white/70">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Email</p>
            <p className="text-xl text-white">hello@360vision.studio</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">HQ</p>
            <p>Remote-first across NYC · Austin · London</p>
          </div>
        </div>
      </div>

      <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        <div>
          <label className="text-sm text-white/70" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40"
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label className="text-sm text-white/70" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-sm text-white/70" htmlFor="project">
            Project details
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40"
            placeholder="Budget, timelines, KPIs..."
          />
        </div>
        <Button className="w-full" variant="secondary">
          Send message
        </Button>
      </form>
    </div>
  );
}
