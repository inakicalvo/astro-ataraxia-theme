// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	image: {
    responsiveStyles: true,
    layout: 'constrained',
  	},
	integrations: [
		mdx(),
		sitemap(),
		icon({
			// Only include the small set of Iconify mdi icons we need
			include: {
				   mdi: ['mastodon', 'linkedin', 'github', 'email', 'youtube', 'account', 'calendar', 'calendar-outline', 'account-outline', 'weather-sunny', 'weather-night', 'arrow-left'],
			},
		}),
	],
});
