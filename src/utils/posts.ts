import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Returns blog posts visible for the current environment: drafts are
 * included in dev for previewing, but excluded entirely from prod builds.
 */
export function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	return getCollection('blog', ({ data }) => !import.meta.env.PROD || !data.draft);
}

/**
 * Published posts sorted newest-first by pubDate, optionally capped to `limit`.
 */
export async function getSortedPosts(limit?: number): Promise<CollectionEntry<'blog'>[]> {
	const posts = (await getPublishedPosts()).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return typeof limit === 'number' ? posts.slice(0, limit) : posts;
}
