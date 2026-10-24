# CLAUDE.md - Portfolio Site Development Guide

## Commands
- **Install**: `npm install`
- **Dev**: `npm run dev` (dev server on localhost:4321)
- **Build**: `npm run build` (static site into `dist/`)
- **Preview**: `npm run preview` (serve `dist/`)

## Architecture
- **Tech Stack**: Astro 5 (static output), TypeScript, Tailwind CSS 4 via `@tailwindcss/vite`, Astro content collections for markdown
- **Hosting**: Vercel. `vercel.json` sets `cleanUrls` and `trailingSlash: false`, and Astro builds with `build.format: 'file'`, so URLs match the old Nuxt site exactly. Never change these without checking that every live URL still resolves.
- **Key Directories**:
  - `src/pages/` (routes), `src/layouts/` (`Base.astro`), `src/components/` (Astro components)
  - `src/content/blog/` and `src/content/talks/` (markdown, schema in `src/content.config.ts`)
  - `src/data/` (home page copy, highlights, certifications, site settings)
  - `src/utils/` (reading time remark plugin, date formatting, post helpers)
  - `public/` (blog images, favicon, OG image, and copies of talk photos kept so old image links work)
- **Slugs**: files are named `N.slug.md`. `generateId` drops the number and lowercases, matching the old Nuxt Content paths.

## Code Style
- **Components**: `.astro` files with scoped `<style>`, PascalCase names. Client scripts only where needed (theme toggle, note switch, reading settings), and the page must work without them.
- **Styling**: design tokens as CSS variables in `src/styles/global.css` (light and dark "night paper"), plus shared classes (`.wrap`, `.rows`, `.page-title`, `.cta`, `.prose`). Reuse them before writing new styles.
- **Type**: Hanken Grotesk for everything; Atkinson Hyperlegible Next only through the reading settings.
- **Design rules**: no gradients, no left-accent cards, no card grids with shadows. Solid fills, strong contrast, and both themes.
- **Accessibility**: text at least 16px, contrast at least 4.5:1, one `<h1>` per page, visible focus, 44px touch targets, and `prefers-reduced-motion` respected.
- **Dark Mode**: `data-theme` on `<html>`, set before paint from localStorage or the system preference.

## Writing Style
- **No em dashes**: Never use em dashes in content or descriptions. Use colons, periods, or commas instead.
- Plain, human English. Avoid semicolons, comma-tail run-on sentences and strings of short sentences.
- Don't describe Philip by location.

## Git Conventions
- **Commit format**: Use a heading line followed by sub bullet points for details
- **No Co-Authored-By**: Do not include Co-Authored-By lines in commit messages
