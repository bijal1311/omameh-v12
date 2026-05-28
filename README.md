# Omameh · v12

**The brand-new V11 Final Build.** Fresh Next.js 14 App Router scaffold,
built from the canonical mockup HTML (handoff_final/mockup/Omameh-
Website-Mockup.html). No legacy CSS, no Header/SvgDefs/BrandCursor
baggage — just the mockup as the website.

**Live:** TBD (Vercel project to be created · this commit)
**Source mockup:** `C:\Users\Bijal\OneDrive\Desktop\Omameh Group\Omameh_Website_Final_V1_Unpacked\handoff_final\mockup\Omameh-Website-Mockup.html`
**Launch target:** Sunday 28 June 2026

## Architecture

| File | Purpose |
|---|---|
| `app/layout.jsx` | Server component · font loading + metadata + minimal shell. **No Header / SvgDefs / BrandCursor / ReadProgress.** |
| `app/page.jsx` | Home (`/`) |
| `app/<route>/page.jsx` | Each route is one self-contained client component |
| `styles/globals.css` | Mockup `<style>` head (lines 12-1694, skipping review-bar) + Design CSS Patch §A-§H |
| `lib/wire-interactions.js` | Calendar slot mailto handler · everything else needed is inline in mockup |
| `public/` | 4 assets: V9 master mark · watermark · colour portrait · B/W portrait |

## Content reconciliation

For surfaces the mockup scaffolded that V11 already had locked copy for
(5 Pillars, Founder Why eleven paragraphs, 4 bios, Privacy legal,
Markets, Atlas streams cadence, ABN, Pledge wording, 7 email aliases),
the locked V11 content wins. For new surfaces the mockup introduced
(Triskelion lockup, time-slot calendar, Case 00 30-day circle, Founder
identity hero structure, Atlas unified CTA band), the mockup wins.

## Why this exists

Two attempts to port the mockup into `omameh-v11`'s existing Next.js
scaffold broke the visual design due to accumulated structural
complexity (legacy CSS layers, Header/SvgDefs wrappers, token cascade
conflicts). v12 is the clean rebuild from first principles — mockup +
locked V11 content, nothing else.

## Deploy

```bash
npm install
npm run dev       # local
npm run build     # production verify
```

Then connect to Vercel as a new project (separate from omameh-v11).

— v12 · founder build · 29 May 2026
