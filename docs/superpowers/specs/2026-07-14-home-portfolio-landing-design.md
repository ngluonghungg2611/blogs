# Home Portfolio Landing — Design

Date: 2026-07-14

## Goal

Add a new Home page (`/`) that acts as a personal portfolio landing page for
Nguyen Luong Hung. The current Home page (blog post listing) moves to `/blog`.
`/blog/[slug]` (individual post pages) is unaffected.

## Routing changes

- `src/app/page.tsx` (current blog listing: hero, search/sort, tag filter,
  post grid) moves as-is to `src/app/blog/page.tsx`, becoming route `/blog`.
  Its `generateSeoMetadata` call (title "BenTech Blog") moves with it
  unchanged.
- `src/app/page.tsx` is rewritten as the new portfolio Home page (route `/`).
- `src/app/sitemap.ts` gains a static entry for `/blog`
  (`changeFrequency: 'daily'`, `priority: 0.9`), inserted after the existing
  `/about` entry.
- `src/components/layout/Navbar.tsx` `navLinks` becomes:
  `Home (/) → Blog (/blog) → Projects (/projects) → About (/about)`.
- `src/components/layout/Footer.tsx` `footerLinks.Navigation` becomes:
  `Home (/) → Blog (/blog) → Projects (/projects) → About (/about)`.

## Shared data extraction

Two datasets are currently hardcoded inside page-specific files and need to
be reused by the new Home page. Extracting them avoids content drift between
Home and the pages it links to.

- **Projects**: the `Project` type and `projects` array currently live
  inline in `src/app/projects/ProjectsGrid.tsx` (a client component). Move
  both to a new `src/lib/projects.ts` (plain data module, no `'use client'`).
  `ProjectsGrid.tsx` imports `projects` and `Project` from there; behavior of
  the existing Projects page is unchanged.
- **Skills**: the `skillGroups` array currently lives inline in
  `src/app/about/page.tsx`. Move it to a new `src/lib/profile.ts`. The About
  page imports `skillGroups` from there; rendered output is unchanged.
  `certifications` and `blogSeries` arrays stay in `about/page.tsx` — they're
  not reused elsewhere.

## Home page structure

`src/app/page.tsx` (server component) composes five sections in this order:
**Hero → Skills/Experience highlight → Projects highlight → Blog highlight →
Contact CTA**. New components live under `src/components/home/`.

### `RevealSection` (`src/components/home/RevealSection.tsx`, client)

Shared wrapper used by all four non-Hero sections. Uses
`IntersectionObserver` (threshold ~0.15) to toggle from
`opacity-0 translate-y-6` to `opacity-100 translate-y-0` (Tailwind
transition classes) when the section first enters the viewport, then
unobserves — the reveal fires once and does not replay on scroll-up.
No new npm dependency.

### Hero (`src/components/home/Hero.tsx`, server)

Full-bleed dark section, styled consistently with the existing
About/Projects hero blocks (`bg-neutral-900 dark:bg-neutral-950`):

- Avatar: same gradient-square "H" initial block used on About
  (`from-blue-400 to-blue-600`), no photo for now.
- Name: "Nguyen Luong Hung", role: "AI Engineer · Hanoi, Vietnam".
- Short intro: 2-3 sentences condensed from the About page's "About"
  section (production LLM systems, GraphRAG, fine-tuning, self-hosted
  deployment).
- Three CTA buttons: "View Blog" → `/blog`, "View Projects" → `/projects`,
  "About Me" → `/about`.

Not wrapped in `RevealSection` — it's the first thing visible, no reveal
animation needed.

### Skills highlight (`src/components/home/SkillsHighlight.tsx`, server)

Renders 3-4 top skill groups from `profile.ts` (`LLM / GenAI`,
`Deep Learning`, `Infrastructure`, `Databases` — the categories most
relevant to the AI Engineer positioning) as compact tag lists, plus one
short sentence summarizing years of experience / current role. "Xem thêm"
button → `/about`. Wrapped in `RevealSection`.

### Projects highlight (`src/components/home/ProjectsHighlight.tsx`, server)

Selects the 3 most relevant entries from `projects.ts` (filter to
`status !== 'Archived'`, take the first 3 in array order — array is already
ordered most-recent-first). Renders a condensed card per project: title,
tagline, up to 3 tech badges. Clicking a card links to `/projects` (the
Projects page has no per-project deep link, so all highlight cards route to
the same listing). "Xem thêm" button → `/projects`. Wrapped in
`RevealSection`.

### Blog highlight (`src/components/home/BlogHighlight.tsx`, server)

Fetches `getAllPosts()`, takes the first 3 (already sorted newest-first per
existing `lib/posts.ts` behavior), renders them with the existing
`BlogCard` component (same as the blog listing grid) in a 3-column layout.
"Xem thêm" button → `/blog`. Wrapped in `RevealSection`.

### Contact CTA (`src/components/home/ContactCTA.tsx`, server)

Final section: one-line call to action + the same Connect links already in
the Footer (GitHub, LinkedIn, Viblo) plus a `mailto:` email link. Wrapped in
`RevealSection`.

## Metadata

`src/app/page.tsx` gets new `generateSeoMetadata`: title
"Nguyen Luong Hung — AI Engineer", description summarizing the portfolio
positioning (reuses the descriptive line already used on `about/page.tsx`'s
metadata). The blog listing keeps its existing "BenTech Blog" metadata
unchanged after the move to `blog/page.tsx`.

## Out of scope

- No real profile photo (initial-letter avatar, matches About).
- No changes to the Navbar mobile hamburger menu (pre-existing, unrelated).
- No changes to `/projects` sitemap coverage (pre-existing gap, unrelated to
  this work).
- No per-project detail pages/deep links — Projects highlight cards all
  route to `/projects`, matching current site capability.
