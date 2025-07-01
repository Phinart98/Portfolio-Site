# AGENT.md - Portfolio Site Development Guide

## Commands
- **Build**: `npm run build` (prod build) or `nuxt build`
- **Dev**: `npm run dev` (dev server on localhost:3000)
- **Preview**: `npm run preview` (preview prod build)
- **Generate**: `npm run generate` (static site generation)
- **Install**: `npm install`

## Architecture
- **Tech Stack**: Nuxt 3, TypeScript, Tailwind CSS, Nuxt Content (blog/markdown)
- **Structure**: SSG portfolio site with blog content management
- **Key Directories**: `pages/` (routes), `components/` (Vue components), `content/` (markdown blog posts), `layouts/` (page layouts)
- **Styling**: Tailwind CSS with Bootstrap Icons, color mode support (light/dark)

## Code Style
- **Framework**: Vue 3 Composition API with `<script setup>`
- **Styling**: Tailwind utility classes, scoped styles in .vue files
- **TypeScript**: Extends Nuxt's built-in TS config (.nuxt/tsconfig.json)
- **Imports**: Auto-imports enabled via Nuxt (composables, components)
- **Components**: PascalCase naming, auto-registered from ~/components
- **Assets**: CSS in ~/assets/css/, using @apply for utility extensions
- **Content**: Markdown with frontmatter for blog posts in content/ directory
- **Dark Mode**: Uses @nuxtjs/color-mode with system preference fallback
