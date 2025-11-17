"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "Northwind Commerce",
    result: "+168% revenue",
    summary: "Full rebrand, product launch films, and paid social system for a B2B marketplace.",
  },
  {
    client: "Pulse Labs",
    result: "4.5x ROAS",
    summary: "Always-on creative testing and influencer distribution for a consumer health app.",
  },
  {
    client: "Astra Energy",
    result: "5 countries launched",
    summary: "Hybrid ABM + field marketing engine built to support international expansion.",
  },
];

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-10%" },
};

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <motion.div
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/70 via-black to-black px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-10"
        {...sectionFade}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Selected work shaping the next decade of brands.</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          We collaborate with marketing leaders, founders, and product teams across SaaS, commerce, and industrial innovation.
          Each engagement blends research, narrative, design, and data.
        </p>
      </motion.div>

      <div className="space-y-6">
        {caseStudies.map((project, index) => (
          <motion.article
            key={project.client}
            className="interactive-card overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/60 to-black/70 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
            whileHover={{ scale: 1.01, y: -3 }}
            {...sectionFade}
            transition={{ ...sectionFade.transition, delay: index * 0.06 }}
          >
            <div className="pointer-glow" aria-hidden />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Client</p>
                <h2 className="text-3xl font-semibold text-white">{project.client}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Result</p>
                <p className="text-2xl font-semibold text-[var(--brand-gold)]">{project.result}</p>
              </div>
            </div>
            <p className="mt-6 text-white/70">{project.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)]">
              View case study
              <span aria-hidden>↗</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
