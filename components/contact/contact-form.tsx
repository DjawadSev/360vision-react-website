'use client';

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const decayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDecayTimer = () => {
    if (decayTimer.current) {
      clearTimeout(decayTimer.current);
      decayTimer.current = null;
    }
  };

  useEffect(() => {
    return () => clearDecayTimer();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearDecayTimer();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const project = (formData.get("project") as string)?.trim();

    if (!name || !email || !project) {
      setStatus("error");
      setMessage("Please add your name, email, and project details.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project }),
      });

      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Request failed");
      }

      setStatus("success");
      setMessage("Message sent. We reply within 1 business day.");
      if (event?.currentTarget) {
        event.currentTarget.reset();
      }
      decayTimer.current = setTimeout(() => {
        setStatus("idle");
        setMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Contact form error", error);
      setStatus("error");
      setMessage("We could not send this right now. Please email us directly at contact@360vision.io.");
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="relative space-y-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/logos/background-red.png')] bg-cover opacity-10 mix-blend-screen" style={{ backgroundPosition: "20% center" }} aria-hidden />
      <div className="space-y-2">
        <label className="text-sm text-white/70" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--brand-red)]/60 focus:outline-none"
          placeholder="Ada Lovelace"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-white/70" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--brand-red)]/60 focus:outline-none"
          placeholder="you@company.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-white/70" htmlFor="project">
          Project details
        </label>
        <textarea
          id="project"
          name="project"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--brand-red)]/60 focus:outline-none"
          placeholder="Budget, timelines, KPIs..."
          required
        />
      </div>
      <div className="space-y-2">
        <Button
          className={cn("w-full justify-center text-center", status === "success" && "bg-green-600 hover:bg-green-500")}
          variant="secondary"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Contact us"}
        </Button>
        <p className="text-sm sm:text-base text-white/70">
          We answer within 1 business day. Every detail goes straight to the leadership team.
        </p>
        {message ? (
          <p
            className={cn(
              "text-sm sm:text-base text-center font-semibold rounded-2xl border px-4 py-3",
              status === "error" && "border-red-500/40 bg-red-500/10 text-red-200",
              status === "success" && "border-emerald-400/50 bg-emerald-500/10 text-emerald-100",
              status === "idle" || status === "loading" ? "border-white/20 bg-white/5 text-white/80" : ""
            )}
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
