# PVA Media — Website

A marketing site for PVA Media, a London-based digital studio building conversion-focused websites and paid marketing for professional services (law firms, estate agencies, consultancies).

Built with Next.js 14 (App Router), Tailwind CSS, and shadcn-style components on top of Radix primitives. Animations use Framer Motion.

---

## Design system

- **Canvas:** `#0A0A0A` off-black with a faint noise overlay and subtle atmospheric radial glows
- **Accent:** `#E85D2C` clay orange — used sparingly, mostly on primary CTAs and emphasis
- **Type:** Satoshi (Fontshare) for display + body; JetBrains Mono for eyebrow labels, timestamps, metrics
- **Grid:** thin 1px hairline dividers, no heavy borders, no drop shadows
- **Motion:** `out-expo` easing, 300–700ms reveals, magnetic hover on primary CTAs
- Design tokens live in `app/globals.css` + `tailwind.config.ts`

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, logo strip, featured work, pricing, process, guarantees, values, CTA |
| `/services` | Three tier plans (Web / Web+Growth / Growth) + 8-service catalogue |
| `/work` | Case study index + named engagements |
| `/work/[slug]` | Individual case detail |
| `/process` | Five-phase process walkthrough + timelines |
| `/about` | Studio overview, principles, stats |
| `/contact` | Short intake form + direct channels |
| `/onboarding` | Full client onboarding questionnaire (six sections) |

## Run locally

```bash
npm install
npm run dev
```

Requires Node **20+** (tested on Node 22). Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/                  # Next.js App Router pages
components/
  ui/                 # shadcn-style primitives (Button, Input, Select, etc.)
  nav.tsx             # Sticky navigation with mobile slide-over
  ticker.tsx          # Top status bar with live London time
  footer.tsx          # Multi-column footer
  hero, case-card,
  pricing-card, ...   # Page-level components
lib/
  data.ts             # Site content (services, tiers, cases, process, etc.)
  utils.ts            # `cn` helper
```

## Notes for the next editor

- All content lives in `lib/data.ts` — edit that file to change copy without touching JSX
- Case studies use plausible placeholder clients. Replace `CASES` in `lib/data.ts` with real engagements as they come in
- The onboarding form is wired up locally (no backend yet). To connect to Formspree/Resend/etc., replace the `handleSubmit` stub in `app/onboarding/page.tsx`
- The contact form is similarly a stub — both forms currently just simulate success after 600ms
