"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-sage/10">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        <Link href="#home" className="font-display text-xl text-sage-dark">
          Dr. Maya Reynolds
          <span className="block text-[11px] tracking-wide font-body text-clay -mt-1">
            PsyD, Clinical Psychologist
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-ink">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sage-dark transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sage text-ivory px-5 py-2.5 rounded-full hover:bg-sage-dark transition-colors"
          >
            Book a Consultation
          </a>
        </nav>

        <button
          className="md:hidden text-sage-dark"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-sage/10 px-6 py-4 flex flex-col gap-4 font-body text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-sage text-ivory px-5 py-2.5 rounded-full text-center"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
