const faqs = [
  {
    q: "Do you offer in-person and online sessions?",
    a: "Yes. I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    q: "What kind of therapy methods do you use?",
    a: "I integrate evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented (somatic) techniques, tailored to what you're working through.",
  },
  {
    q: "Do you work with trauma?",
    a: "Yes. I work with both single-incident trauma and more complex, long-standing patterns, with a careful pace focused on safety, stabilization, and helping you feel more regulated day to day.",
  },
  {
    q: "Who do you typically work with?",
    a: "Many of my clients are high-achieving, self-aware adults including entrepreneurs, creatives, and professionals who feel exhausted, stuck in overthinking, or disconnected from themselves after years of pushing through stress.",
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl md:text-4xl text-sage-dark text-center">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-sage/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-lg text-sage-dark">
                {f.q}
                <span className="text-clay group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
