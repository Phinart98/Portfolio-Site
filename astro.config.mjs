// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://www.philipnarteh.me',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
