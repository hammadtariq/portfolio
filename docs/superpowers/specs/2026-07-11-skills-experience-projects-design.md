# Skills, Experience, and Projects Refresh

## Goal

Polish the portfolio’s Skills, Experience, and Projects sections so they form a coherent light-to-dark progression into the existing dark testimonial and footer finale.

## Visual Direction

- Design variance: 7. Use varied capability clusters, a timeline with a clear visual rhythm, and an editorial featured-project layout.
- Motion intensity: 5. Preserve the existing reveal behavior and add only tactile hover feedback. Reduced-motion users remain static.
- Visual density: 4. Keep substantial technical content scannable with strong grouping and whitespace.
- Color story: Skills begins on cool white with blue and pale-cyan accents. Experience shifts through soft slate-blue. Projects creates the single intentional transition to midnight blue.
- Shape: Keep the current soft-card and full-pill control system, with elevated cards using the web liquid-glass approximation where it supports hierarchy.

## Skills

- Retain the `skills` anchor and technology data.
- Use a varied two-column capability grid with purposeful tinted backgrounds for selected groups.
- Preserve icon labels and add small, readable category descriptions only where they clarify the grouping.

## Experience

- Retain the `experience` anchor and all experience data.
- Fix the existing conditional-hook lint issue by calling the reveal hook before the empty-data return.
- Recast the timeline in cool slate tones with blue milestones and a more refined internal progression panel.

## Projects

- Retain `projects` anchor, modal behavior, project data, and external links.
- Make the project section the deliberate transition into the dark page phase.
- Keep a featured project plus compact supporting work, with blue media overlays and glass panels that preserve image legibility.
- Keep the project modal accessible and improve its visual continuity with the dark gallery.

## Verification

- Add component tests for the visible section headings and project-dialog interaction.
- Run the full test suite, lint, production build, and real-browser desktop/mobile visual review.
- No commits will be created.
