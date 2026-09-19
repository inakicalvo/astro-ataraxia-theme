const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(body: string, wordsPerMinute = WORDS_PER_MINUTE): number {
	const textOnly = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/!\[.*?\]\(.*?\)/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
	const words = textOnly.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}
