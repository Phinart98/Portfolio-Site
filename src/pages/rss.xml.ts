import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { getSortedPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getSortedPosts();
  return rss({
    title: `${SITE.name}'s writing`,
    description: "Notes on engineering and whatever else I'm exploring.",
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}`,
    })),
  });
}
