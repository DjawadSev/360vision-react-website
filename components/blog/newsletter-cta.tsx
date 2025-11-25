'use client';

import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function NewsletterCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleJoinClick = () => {
    setIsFormOpen(true);
    setMessage(null);
    setStatus("idle");
    setTimeout(() => inputRef.current?.focus(), 80);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Add a valid email to opt in.");
      return;
    }

    try {
      setStatus("loading");
      setMessage(null);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Unable to save");
      }

      setStatus("success");
      setMessage("Thank you for joining. You're on the list. You can opt out anytime; contact us through any channel.");
      setEmail("");
    } catch (error) {
      console.error("Newsletter CTA error", error);
      setStatus("error");
      setMessage("We couldn't save this signup right now. Email us and we'll add you manually.");
    }
  };

  return (
    <section
      id="blog-cta"
      className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/80 via-black to-black px-6 py-10 shadow-[0_22px_80px_rgba(0,0,0,0.5)] sm:px-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Newsletter</p>
          <h3 className="text-2xl font-semibold text-white">Get the weekly drop with new playbooks and case notes.</h3>
          <p className="text-white/70">One email. No fluff. Only the experiments and results that moved the needle for our clients.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:max-w-md">
          {!isFormOpen ? (
            <>
              <Button
                className="rounded-xl bg-[var(--brand-red)] text-base shadow-[0_15px_60px_rgba(155,11,11,0.45)] hover:bg-[var(--brand-red-bright)]"
                onClick={handleJoinClick}
              >
                Join the list
              </Button>
              <p className="text-sm text-white/60 sm:text-base">We keep your inbox clean and respect your time.</p>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-row flex-wrap items-center gap-3">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  ref={inputRef}
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="flex-1 min-w-[200px] rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--brand-red)]/60 focus:outline-none"
                  placeholder="you@company.com"
                  required
                />
                <Button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[var(--brand-gold)] px-6 text-base text-black shadow-[0_15px_60px_rgba(212,175,55,0.45)] hover:bg-[#e1c75c]"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Opt in"}
                </Button>
              </form>
              <p className="text-sm text-white/60 sm:text-base">Stay in control. We only email when there's signal.</p>
            </>
          )}
          {message ? (
            <p
              className={cn(
                "text-center text-sm sm:text-base font-semibold rounded-2xl border px-4 py-3",
                status === "success" && "border-emerald-400/50 bg-emerald-500/10 text-emerald-100",
                status === "error" && "border-red-500/50 bg-red-500/10 text-red-100",
                status === "idle" || status === "loading" ? "border-white/20 bg-white/5 text-white/80" : ""
              )}
              aria-live="polite"
            >
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
