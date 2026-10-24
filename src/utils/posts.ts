import { getCollection, type CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;
export type PostWithTime = Post & { readingTime: string };

// Newest first, the order every list on the site uses (posts and talks).
export const newestFirst = <T extends { data: { date: Date } }>(posts: T[]): T[] =>
  [...posts].sort((a, b) => +b.data.date - +a.data.date);

// A series' parts, newest part first, like the rest of the writing page.
export const seriesParts = <T extends Post>(posts: T[], name: string): T[] =>
  posts.filter((p) => p.data.series?.name === name).sort((a, b) => b.data.series!.part - a.data.series!.part);

export const getSortedPosts = async () => newestFirst(await getCollection('blog'));

// Each post with the reading time the remark plugin worked out when the
// collection was built. It's stored with the entry, so nothing is re-rendered.
export async function getPosts(limit?: number): Promise<PostWithTime[]> {
  const posts = (await getSortedPosts()).slice(0, limit);
  return posts.map((p) => ({ ...p, readingTime: p.rendered?.metadata?.frontmatter?.readingTime as string }));
}
