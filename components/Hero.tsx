import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-wide text-xs text-clay font-medium mb-5">
            In-Person in Santa Monica &amp; Telehealth Across California
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.15] text-sage-dark">
            Steady your mind and reconnect with yourself.
          </h1>
          <p className="mt-6 text-lg text-ink/80 max-w-md">
            Individual therapy for high-achieving adults navigating anxiety,
            trauma, and burnout grounded, evidence-based, and paced to fit
            your life.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 bg-clay text-ivory px-7 py-3.5 rounded-full hover:bg-clay-light transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg">
            <Image
              src="/images/maya-headshot.png"
              alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-linen rounded-2xl p-4 shadow-md hidden sm:block max-w-[220px]">
            <p className="font-display italic text-sage-dark text-sm">
              &ldquo;Therapy that combines practical tools with depth-oriented
              work.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
