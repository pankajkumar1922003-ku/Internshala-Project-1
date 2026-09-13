const tags = [
  "Anxiety",
  "Panic",
  "Trauma & PTSD",
  "Burnout",
  "Perfectionism",
  "EMDR",
  "CBT",
  "Mindfulness-Based Therapy",
  "Somatic Techniques",
  "Entrepreneurs & Creatives",
];

export default function Expertise() {
  return (
    <section className="py-20 bg-linen/50">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-sage-dark">
          Areas of expertise
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="px-5 py-2.5 rounded-full border border-sage/25 text-sm text-sage-dark bg-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
