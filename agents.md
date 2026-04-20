# Portfolio Project Handoff

## Goal

Build a minimal, high-performance personal portfolio website using:

- Astro
- TypeScript
- Tailwind
- minimal or zero client-side JavaScript
- single-page layout
- dark theme
- strong typography
- subtle motion
- responsive mobile + desktop layout
- static deployment target: Vercel

Non-goals remain:

- no blog
- no CMS
- no database
- no auth
- no admin panel
- no testimonials
- no skill bars
- no complex animations
- no backend contact form
- no filtering/search/dashboard behavior

## Design Direction Agreed

- Typography should carry the design.
- Visual tone should be elegant, restrained, editorial, and minimal.
- Reference inspiration was a large, bold, Helvetica-style layout.
- Exact requested font: `helvetica-w01-bold`
- For now, the app uses a Helvetica-based fallback stack because the actual webfont asset is not in the repo yet.
- Monospace should only be used for nav, subtitle, metadata, and utility text.
- No flashy gradients, glassmorphism, glow effects, or hacker-style visuals.

## Architecture Plan

Minimal project structure chosen:

```text
public/
  GoranMarkovic.pdf
  projects/
    project-01.webp
    project-02.webp
    project-03.webp
    project-04.webp

src/
  components/
    Header.astro
    Hero.astro
    ProjectCard.astro
    ProjectsShell.astro
    Footer.astro
  data/
    site.ts
    projects.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
```

Note:

- `ProjectCard.astro` is planned but not implemented yet.
- `public/projects/*` placeholder images are planned but not added yet.

## Recommendation We Chose

For the subtitle / cursor effect:

- blinking cursor: pure CSS
- subtitle reveal: CSS if needed
- no JavaScript by default

Reason:

- fixed text does not justify hydration
- simpler, faster, and more stable for the MVP

## Repo State When Work Started

The repo was basically the Astro minimal starter plus Tailwind v4:

- `src/pages/index.astro` was starter boilerplate
- `src/styles/global.css` only imported Tailwind
- `public/GoranMarkovic.pdf` already existed

The git worktree was already dirty before implementation, so no unrelated changes were reverted.

## What Was Completed

### Phase 1: Foundation

Completed:

- Added reusable app shell in `src/layouts/BaseLayout.astro`
- Added typed site config in `src/data/site.ts`
- Added typed placeholder project data in `src/data/projects.ts`
- Added global dark theme, spacing, typography, and motion tokens in `src/styles/global.css`
- Replaced the starter homepage with a foundation preview using the shared layout

Implementation notes:

- The exact `Helvetica W01 Bold` file was not available locally.
- We briefly added an `@font-face` hook, then removed it because the asset was missing and caused a build warning.
- The current font stack prefers `"Helvetica W01 Bold"` by family name and then falls back to system Helvetica-like fonts.

### Phase 2: Page Skeleton

Completed:

- Added `src/components/Header.astro`
- Added `src/components/Hero.astro`
- Added `src/components/ProjectsShell.astro`
- Added `src/components/Footer.astro`
- Rebuilt `src/pages/index.astro` to use the new components
- Added a CSS-only blinking cursor in the hero subtitle
- Added the header structure:
  - title on upper left
  - `projects`, `resume`, `email` on upper right in monospace
- Wired links:
  - `projects` anchors to `#projects`
  - `resume` downloads `/GoranMarkovic.pdf`
  - `email` uses `mailto:hello@example.com`
- Added a restrained `Projects` section shell with placeholder blocks
- Added a minimal footer
- Added responsive behavior:
  - header stacks on narrow screens
  - project shell becomes one column on mobile

## Current File Summary

- `src/layouts/BaseLayout.astro`
  - global page shell
  - meta tags, title handling, theme color, favicon

- `src/data/site.ts`
  - site name, role, email, resume path, description
  - placeholder bio and footer text

- `src/data/projects.ts`
  - four hardcoded placeholder project entries
  - includes placeholder image paths and URLs

- `src/components/Header.astro`
  - top navigation and resume/email/projects links

- `src/components/Hero.astro`
  - large title
  - subtitle with blinking cursor
  - placeholder bio

- `src/components/ProjectsShell.astro`
  - project section heading
  - temporary placeholder project blocks

- `src/components/Footer.astro`
  - quiet monospace footer placeholder

- `src/styles/global.css`
  - dark palette
  - typography system
  - layout spacing
  - responsive rules
  - cursor blink animation

- `src/pages/index.astro`
  - composes the full page from the components above

## Current User-Facing State

The page now has:

- a real header
- a large hero/title
- subtitle `software developer` with blinking cursor
- placeholder bio
- a projects section heading and placeholder project blocks
- a minimal footer

This is intentionally not the final MVP yet.

## What Is Intentionally Still Missing

Not done yet:

- final project card component
- actual project card content layout
- local placeholder project images in `public/projects`
- final card styling
- final hover/focus polish
- exact self-hosted `helvetica-w01-bold` font asset
- final email address
- final bio copy
- final footer copy

## Next Phase

Next planned step is **Phase 3: Project Presentation**.

That should include:

- create `src/components/ProjectCard.astro`
- replace `ProjectsShell.astro` placeholder blocks with real project cards
- each card should include:
  - image
  - project name
  - summary
  - tech stack
  - live URL
  - GitHub URL
- keep 2 cards per row on desktop
- stack to 1 column on mobile
- keep the styling restrained and editorial, not flashy

## Constraints To Preserve

- Keep client-side JavaScript at zero unless absolutely needed.
- Prefer Astro-native static patterns.
- Do not add React.
- Do not add a database, auth, CMS, or extra app features.
- Keep placeholder text obviously marked as placeholder.
- Keep implementation small and avoid abstraction creep.

## Verification Already Performed

`npm run build` passed after Phase 1 and again after Phase 2.

## Known Constraint For Future Work

If exact font fidelity is required, add the licensed font file later, likely under:

```text
public/fonts/helvetica-w01-bold.woff2
```

Then reintroduce `@font-face` in `src/styles/global.css`.
