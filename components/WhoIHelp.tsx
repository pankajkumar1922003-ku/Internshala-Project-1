const groups = [
  {
    title: "High-Achieving Adults",
    copy: "For professionals who feel functional on the outside but are quietly carrying constant worry, tension, or a sense of always bracing for something to go wrong.",
  },
  {
    title: "Trauma & PTSD",
    copy: "Support for single-incident trauma and more complex, long-standing patterns paced carefully, with an emphasis on safety, stabilization, and regulation.",
  },
  {
    title: "Burnout & Perfectionism",
    copy: "Space for entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress and high internal pressure.",
  },
];

export default function WhoIHelp() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-sage-dark text-center">
          Who I help
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-sage/15 p-8 bg-white/60"
            >
              <div className="w-11 h-11 rounded-full bg-sage/10 flex items-center justify-center mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-clay" />
              </div>
              <h3 className="font-display text-xl text-sage-dark">{g.title}</h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{g.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
