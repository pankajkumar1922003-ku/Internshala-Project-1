import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-20 bg-linen/50">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden order-2 md:order-1">
          <Image
            src="/images/office-1.jpeg"
            alt="Calm, sunlit therapy office in Santa Monica"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl text-sage-dark leading-snug">
            You&rsquo;re tired of feeling &ldquo;fine&rdquo; on the outside
            while bracing for the next thing to go wrong.
          </h2>
          <p className="mt-6 text-ink/80 max-w-prose">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware but internally feel exhausted, stuck in overthinking,
            or emotionally on edge. If that sounds familiar, you&rsquo;re not
            alone, and it doesn&rsquo;t have to stay this way.
          </p>
          <p className="mt-4 text-ink/80 max-w-prose">
            I offer a warm, collaborative, and grounded approach to therapy
            structured enough to feel supportive, with room for genuine
            reflection and depth.
          </p>
        </div>
      </div>
    </section>
  );
}
