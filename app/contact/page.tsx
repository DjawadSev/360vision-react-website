import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div id="contact-page" className="grid gap-10 lg:grid-cols-2">
      <div id="contact-info-panel" className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Tell us about your next launch.</h1>
        <p className="mt-4 text-lg text-white/70">
          Share context on your business goals, team size, and timeline. We typically reply within one business day and can kick off discovery the same week.
        </p>
        <div className="mt-10 space-y-4 text-white/70">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Email</p>
            <p className="text-xl text-white">contact@360vision.io</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">HQ</p>
            <p className="text-white">Cit�� Saidi ahmed CICAD part N47 Bureau N17 Brodj</p>
            <p className="text-white">el kiffan</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Phone</p>
            <p className="text-white">+213 770072036</p>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
