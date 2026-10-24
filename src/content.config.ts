import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files are named "N.slug.md" so they sort on disk; the published slug drops
// the number and is lowercased, matching the URLs the Nuxt site served.
const slugFromFile = ({ entry }: { entry: string }) =>
  entry.replace(/\.md$/, '').replace(/^\d+\./, '').toLowerCase();

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog', generateId: slugFromFile }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string().optional(),
    date: z.coerce.date(),
    series: z.object({ name: z.string(), part: z.number() }).optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/talks', generateId: slugFromFile }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    tags: z.array(z.string()).default([]),
    eventLink: z.string().url().optional(),
    talkLink: z.string().url().optional(),
    slidesLink: z.string().url().optional(),
    headerImage: image(),
    gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
  }),
});

export const collections = { blog, talks };
