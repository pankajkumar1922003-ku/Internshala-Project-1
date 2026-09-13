import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/office-2.jpeg"
          alt="Warm, private counseling room in Santa Monica"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sage-dark/75" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-display italic text-2xl md:text-3xl text-ivory leading-relaxed">
          You deserve to feel respected, understood, and actively involved in
          your own healing not just symptom relief, but real insight and
          resilience.
        </p>
      </div>
    </section>
  );
}
