const services = [
  {
    title: "Anxiety & Panic Therapy",
    copy: "For clients who feel “functional” on the outside while quietly managing constant worry, bodily tension, racing thoughts, or trouble sleeping. We work to understand what keeps your nervous system on high alert and build practical, sustainable ways to feel steadier day to day.",
  },
  {
    title: "Trauma & EMDR Therapy",
    copy: "Support for single-incident trauma as well as longer-standing patterns rooted in childhood, relationships, or chronic stress. Using EMDR alongside somatic and mindfulness-based techniques, we move at a careful pace focused on safety, stabilization, and regaining a sense of control.",
  },
  {
    title: "Burnout & Perfectionism",
    copy: "For entrepreneurs, creatives, and high-performing professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build a more sustainable relationship with work and self.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-sage-dark text-center">
          Ways I can help
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col border-t-2 border-clay pt-6"
            >
              <h3 className="font-display text-xl text-sage-dark">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
