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

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Selected work shaping the next decade of brands.</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          We collaborate with marketing leaders, founders, and product teams across SaaS, commerce, and industrial innovation.
          Each engagement blends research, narrative, design, and data.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((project) => (
          <article
            key={project.client}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Client</p>
                <h2 className="text-3xl font-semibold text-white">{project.client}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Result</p>
                <p className="text-2xl font-semibold text-emerald-300">{project.result}</p>
              </div>
            </div>
            <p className="mt-6 text-white/70">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
