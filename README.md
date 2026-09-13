# Dr. Maya Reynolds, PsyD — Therapy Website (Redesign)

Redesigned homepage for a fictional therapy practice, based on the
Conejo Valley Family Counseling homepage layout, rebuilt in Next.js +
TypeScript + Tailwind CSS, and restyled/rewritten using Dr. Maya
Reynolds' profile.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy (Vercel — free & fastest)

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Leave all settings default (Vercel auto-detects Next.js) → Deploy.
4. You'll get a live URL in ~1 minute.

## Project structure

```
app/
  layout.tsx      → root layout, fonts, SEO metadata
  page.tsx        → assembles all homepage sections
  globals.css     → Tailwind base + global styles
components/
  Navbar.tsx
  Hero.tsx
  Intro.tsx
  WhoIHelp.tsx
  QuoteBanner.tsx
  Expertise.tsx
  Approach.tsx
  Services.tsx      → the 3 core services (Part 2 requirement)
  OurOffice.tsx      → new section, not in original (Part 3 requirement)
  Faqs.tsx
  CTA.tsx
  Footer.tsx
public/images/
  maya-headshot.png → extracted from the profile PDF
  office-1.jpeg      → extracted from the profile PDF
  office-2.jpeg      → extracted from the profile PDF
```

## Notes before submitting

- The footer email (`hello@mayareynoldstherapy.com`) is a placeholder —
  the profile didn't include contact details. Swap it for whatever you
  want to use in the demo.
- Only 3 real images exist (headshot + 2 office photos). Sections like
  "Who I Help" currently use text-only cards, no photos — for the
  image-quality score, add a few more licensed/relevant photos
  (e.g. from Unsplash) to those cards before submitting, since the
  brief weighs images heavily.
- Colors: sage green (#3F5D54), ivory (#FAF6EF), clay (#8C5A3C), gold
  accent (#C9A15E) — defined in `tailwind.config.ts`.
