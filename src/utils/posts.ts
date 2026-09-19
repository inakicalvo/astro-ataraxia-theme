import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Returns blog posts visible for the current environment: drafts are
 * included in dev for previewing, but excluded entirely from prod builds.
 */
export function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	return getCollection('blog', ({ data }) => !import.meta.env.PROD || !data.draft);
}
