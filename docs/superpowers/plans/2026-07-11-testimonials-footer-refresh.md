# Testimonials and Footer Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic testimonial grid and copyright footer with a dark, blue-accented testimonial gallery and contact-focused liquid-glass finale.

**Architecture:** `Testimonials.tsx` keeps its data and anchor, presents the first recommendation as a feature panel, and arranges the other recommendations in a responsive gallery. `Footer.tsx` remains self-contained and targets the existing `#contact` anchor. Component tests cover each section’s public semantics.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Vitest, React Testing Library, lucide-react.

## Global Constraints

- Keep `testimonial` and `contact` anchors unchanged.
- Use dark surfaces and blue as the only accent.
- Use a web liquid-glass approximation with an opaque `prefers-reduced-transparency` fallback.
- Add no dependencies and preserve testimonial attribution and full text.
- Avoid em dashes in visible copy. Collapse multi-column layouts below `md`.

---

### Task 1: Build and test the testimonial gallery

**Files:**
- Create: `src/components/Testimonials.test.tsx`
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `LazyLoadImg` with `src`, `alt`, and `classNames`.
- Produces: unchanged default export and `testimonial` anchor.

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "./Testimonials";

describe("Testimonials", () => {
  it("renders a featured recommendation and original quote disclosures", () => {
    render(<Testimonials />);
    expect(screen.getByRole("heading", { name: "Trusted by teams that ship" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Matthew Johnson" })).toBeVisible();
    expect(screen.getAllByText("Read full recommendation")).toHaveLength(6);
  });
});
```

- [ ] **Step 2: Verify RED**

Run: `npm test -- src/components/Testimonials.test.tsx`

Expected: FAIL because the new heading and disclosures do not exist.

- [ ] **Step 3: Implement the gallery and fallback**

```tsx
const [featured, ...supportingTestimonials] = testimonials;

<section id="testimonial" ref={ref} className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32">
  <div className="container relative mx-auto px-4">
    <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">Trusted by teams that ship</h2>
    {/* Featured panel followed by supporting md:grid-cols-2 panels. */}
  </div>
</section>
```

Render an excerpt and `<details><summary>Read full recommendation</summary>...</details>` for all six testimonials. Add `.testimonial-glass` to all panels and add this global fallback:

```css
.testimonial-glass { background: linear-gradient(135deg, rgb(255 255 255 / .16), rgb(255 255 255 / .05)); border: 1px solid rgb(255 255 255 / .16); box-shadow: inset 0 1px 0 rgb(255 255 255 / .24), 0 20px 50px rgb(2 6 23 / .32); backdrop-filter: blur(24px) saturate(150%); }
@media (prefers-reduced-transparency: reduce) { .testimonial-glass { background: rgb(30 41 59); backdrop-filter: none; } }
```

- [ ] **Step 4: Verify GREEN and commit**

Run: `npm test -- src/components/Testimonials.test.tsx`

Expected: PASS with one passing test.

```bash
git add src/components/Testimonials.tsx src/components/Testimonials.test.tsx src/index.css
git commit -m "feat: refresh testimonial gallery"
```

### Task 2: Build and test the contact-focused footer

**Files:**
- Create: `src/components/Footer.test.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: the existing `#contact` anchor and the portfolio GitHub/LinkedIn URLs.
- Produces: self-contained `Footer` default export with one contact navigation action.

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("ends the page with a contact action and social links", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: "Have a product worth shipping?" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/hammadtariq");
  });
});
```

- [ ] **Step 2: Verify RED**

Run: `npm test -- src/components/Footer.test.tsx`

Expected: FAIL because the existing footer has no call to action or social links.

- [ ] **Step 3: Implement the footer**

```tsx
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

<footer className="relative overflow-hidden bg-gray-950 px-4 pb-8 pt-8 text-white">
  <div className="container mx-auto rounded-[2rem] border border-white/15 bg-[linear-gradient(135deg,rgba(37,99,235,0.28),rgba(255,255,255,0.08))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl md:p-10">
    <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">Have a product worth shipping?</h2>
    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">Start a conversation <ArrowUpRight size={18} /></a>
  </div>
</footer>
```

Add social links with accessible labels `GitHub`, `LinkedIn`, and `Email`, pointing respectively to `https://github.com/hammadtariq`, `https://www.linkedin.com/in/hammadtariq1`, and `mailto:info@tariqhammad.com`. External links include `target="_blank" rel="noreferrer"`.

- [ ] **Step 4: Verify GREEN and commit**

Run: `npm test -- src/components/Footer.test.tsx`

Expected: PASS with one passing test.

```bash
git add src/components/Footer.tsx src/components/Footer.test.tsx
git commit -m "feat: add contact-focused portfolio footer"
```

### Task 3: Verify integrated responsiveness

**Files:**
- Verify: `src/components/Testimonials.tsx`, `src/components/Footer.tsx`, and `src/index.css`

- [ ] **Step 1: Run focused checks**

Run: `npm test -- src/components/Testimonials.test.tsx src/components/Footer.test.tsx && npm run lint && npm run build`

Expected: two passing component tests, no lint errors, and a successful TypeScript/Vite build.

- [ ] **Step 2: Review at desktop and mobile widths**

Run: `npm run dev -- --host 127.0.0.1`

Expected: the gallery becomes one column below 768px; footer content stacks cleanly; blue actions meet contrast requirements; the page remains readable when transparency or motion is reduced.

- [ ] **Step 3: Commit any verification-only fix**

```bash
git add src/components/Testimonials.tsx src/components/Footer.tsx src/index.css src/components/Testimonials.test.tsx src/components/Footer.test.tsx
git commit -m "fix: polish responsive portfolio sections"
```
