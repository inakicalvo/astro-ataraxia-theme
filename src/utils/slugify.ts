/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to slugify
 * @returns A lowercase, hyphenated slug
 */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^\w\-]+/g, '') // Remove non-word chars except hyphens
		.replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
		.replace(/^-+/, '') // Trim hyphens from start
		.replace(/-+$/, ''); // Trim hyphens from end
}
