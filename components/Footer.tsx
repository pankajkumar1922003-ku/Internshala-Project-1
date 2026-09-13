export default function Footer() {
  return (
    <footer className="bg-sage-dark text-ivory/90 py-14">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="font-display text-lg text-ivory">Dr. Maya Reynolds, PsyD</p>
          <p className="mt-2 text-ivory/70">Licensed Clinical Psychologist</p>
        </div>
        <div>
          <p className="uppercase tracking-wide text-xs text-gold mb-3">Office</p>
          <p>123th Street 45 W</p>
          <p>Santa Monica, CA 90401</p>
          <p className="mt-2">
            <a href="mailto:hello@mayareynoldstherapy.com" className="hover:text-gold">
              hello@mayareynoldstherapy.com
            </a>
          </p>
        </div>
        <div>
          <p className="uppercase tracking-wide text-xs text-gold mb-3">Navigate</p>
          <div className="flex flex-col gap-1.5">
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#services" className="hover:text-gold">Services</a>
            <a href="#office" className="hover:text-gold">Our Office</a>
            <a href="#faqs" className="hover:text-gold">FAQs</a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. This is a fictional practice created for demonstration purposes.
      </p>
    </footer>
  );
}
