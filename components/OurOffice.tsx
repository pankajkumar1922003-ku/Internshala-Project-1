import Image from "next/image";

export default function OurOffice() {
  return (
    <section id="office" className="py-20 bg-linen/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-wide text-xs text-clay font-medium">
              Our Office
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-sage-dark leading-snug">
              A quiet, private space designed to help you feel at ease.
            </h2>
            <p className="mt-6 text-ink/80 max-w-md">
              My office is a calm, uncluttered space with natural light,
              located at 123th Street 45 W, Santa Monica, CA 90401. Clients
              often share that the space itself helps them feel more grounded
              the moment they arrive.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/75">
              <li>— In-person sessions in Santa Monica</li>
              <li>— Telehealth available for clients across California</li>
              <li>— Private, safe, and comfortable environment</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-1">
              <Image
                src="/images/office-1.jpeg"
                alt="Santa Monica therapy office seating area with natural light"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-1 mt-8">
              <Image
                src="/images/office-2.jpeg"
                alt="Private, calming counseling room interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
