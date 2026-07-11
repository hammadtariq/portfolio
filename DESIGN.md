---
name: Hammad Tariq — Portfolio
description: A dark, cinematic single-page portfolio — near-black canvas, a silver-to-ivory gradient headline, and one saturated violet-to-amber gradient CTA, built around real shipped work.
colors:
  canvas: "#0C0C0C"
  ivory: "#D7E2EA"
  gradient-heading-start: "#646973"
  gradient-heading-end: "#BBCCD7"
  gradient-cta-1: "#18011F"
  gradient-cta-2: "#B600A8"
  gradient-cta-3: "#7621B0"
  gradient-cta-4: "#BE4C00"
typography:
  family: "Kanit"
  weights: "300–900, single family"
  display:
    fontSize: "clamp(3rem, 12vw, 160px)"
    fontWeight: 900
    letterSpacing: "tight"
    transform: "uppercase"
  hero:
    fontSize: "14vw–17.5vw (responsive)"
    fontWeight: 900
    lineHeight: 1
  body:
    fontSize: "clamp(1rem, 2vw, 1.35rem)"
    fontWeight: 500
rounded:
  pill: "999px"
  card: "40px–60px (responsive)"
components:
  contact-button:
    background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)"
    textColor: "#FFFFFF"
    shape: "pill"
  live-project-button:
    background: "transparent"
    border: "2px solid #D7E2EA"
    textColor: "#D7E2EA"
    shape: "pill"
---

# Design System: Hammad Tariq — Portfolio

## 1. Overview

This system replaced an earlier "Instrument Panel" direction (charcoal + single amber accent) that the site owner rejected in favor of a fully-specified alternative: a dark, cinematic, motion-forward single-page layout modeled on 3D-creator/agency portfolio conventions, adapted to Hammad's real identity as a full-stack developer.

**Key characteristics:**
- Near-black canvas (`#0C0C0C`) as the dominant surface across the whole page, broken only by a white `ServicesSection` panel.
- One typeface (Kanit, weights 300–900) carries the entire system — display headlines at 900, body copy at 400–500. No second family.
- Two gradients, each used exactly once as a named pattern: a silver-to-ivory vertical gradient for headline text (`.hero-heading`), and a violet-to-amber diagonal gradient for the single primary CTA (`.gradient-cta`). Not repeated elsewhere.
- Motion is structural, not decorative: a magnetic-hover portrait, scroll-driven opposing-direction marquee rows, per-character scroll-reveal body copy, and scroll-scaled sticky-stacking project cards.
- All content is real: real screenshots of shipped products (Bogo/Deliveroo, the Nisum NFT Marketplace, Cats With Glasses), a real headshot, real service descriptions. No stock imagery, no third-party hotlinked assets.

## 2. Colors

- **Canvas** (`#0C0C0C`): the page's base surface — Hero, Marquee, About, Projects.
- **Ivory** (`#D7E2EA`): primary text color on the dark canvas; also the `LiveProjectButton` border/text.
- **Heading gradient** (`#646973` → `#BBCCD7`, 180deg): reserved for large display headings only (`.hero-heading` class) — "hi, i'm hammad", "About me", "Project". Never used for body text or small labels.
- **CTA gradient** (`#18011F` → `#B600A8` → `#7621B0` → `#BE4C00`, 123deg): reserved exclusively for `ContactButton`, the single conversion action repeated across the page (hero, about, and implicitly via the nav's "Contact" link). Nothing else on the page uses this gradient.
- **White** (`#FFFFFF`): the `ServicesSection` panel only — a deliberate tonal break from the dark canvas, with `#0C0C0C` text.

## 3. Typography

**Family:** Kanit (300–900) — a single geometric sans carries both the massive display headlines and body copy, per the site owner's explicit direction. No pairing.

- **Hero display** (900, `14vw`–`17.5vw` fluid, leading-none, uppercase, whitespace-nowrap): "hi, i'm hammad" — one per page, the loudest element on the site.
- **Section display** (900, `clamp(3rem, 12vw, 160px)`, uppercase, centered): "About me", "Services", "Project" section headers.
- **Service/project numerals** (900, `clamp(3rem, 10vw, 140px)`): oversized numeral treatment shared by `ServicesSection` and `ProjectsSection`.
- **Body** (500, `clamp(1rem, 2vw, 1.35rem)`, `#D7E2EA`): the About section's scroll-revealed bio paragraph.
- **Nav/labels** (500, uppercase, tracking-wide): nav links, CTA labels, category tags.

## 4. Motion

- **FadeIn**: shared `whileInView` reveal wrapper (Framer Motion), `viewport={{ once: true, margin: "50px" }}`, easing `[0.25, 0.1, 0.25, 1]`. Used for nearly every entrance across the page with per-element delay/x/y tuning. Respects `prefers-reduced-motion` by rendering the static end-state immediately.
- **Magnet**: mouse-following magnetic hover, applied once — the hero portrait. Disabled on coarse/touch pointers.
- **AnimatedText**: per-character scroll-driven opacity (0.2 → 1), used once — the About section bio. Renders as plain static text under reduced motion.
- **MarqueeSection**: two rows of real project screenshots drifting in opposite directions, driven by scroll position (not a CSS keyframe loop).
- **ProjectsSection**: sticky-stacking cards that scale down slightly as the next card arrives, via `useScroll`/`useTransform`.

## 5. Components

### ContactButton (signature component)
Gradient pill, white uppercase tracking-widest label, permanent 2px white inset outline. Opens the Calendly scheduling modal directly (`CalendlyPopup`) — this site has no dedicated Contact section; booking a call *is* the contact flow, consistent with PRODUCT.md's "booking is the conversion event" principle. Used in the hero, the nav's "Contact" link, and the About section.

### LiveProjectButton
Ghost pill, 2px `#D7E2EA` border, same border color text, subtle tint on hover. Only rendered when a project has a real, live public URL — no dead links.

### Section shape language
Alternating full-bleed dark sections are visually separated by large rounded top corners (`40px`–`60px`, responsive) rather than borders or shadows — `ServicesSection` rounds up onto the dark canvas above it, and `ProjectsSection` rounds up over `ServicesSection` in turn, pulled up with a small negative margin to overlap cleanly.

## 6. Do's and Don'ts

### Do:
- Keep Kanit as the only family; use weight (300–900) for all hierarchy, not a second typeface.
- Reserve the CTA gradient for `ContactButton` only — it is the one conversion signal on the page.
- Reserve `.hero-heading` gradient text for the three section-level display headings only.
- Use only real project/product imagery (own screenshots, own headshot) — no stock photography, no hotlinked third-party assets.
- Respect `prefers-reduced-motion` on every motion primitive (already built into `FadeIn`/`AnimatedText`).

### Don't:
- Don't introduce a second typeface "for contrast" — this system is single-family by design.
- Don't spread the CTA gradient onto secondary actions — dilutes it back into decoration.
- Don't add card-grid sections (icon + heading + text) — this system's alternative to cards is the numbered list (`ServicesSection`) and the sticky-stacking cards (`ProjectsSection`), both already specified.
