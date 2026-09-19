# Ataraxia 🏛️

**A calm, accessible Astro blog theme. No Tailwind, no clutter — just your words.**

<!-- TODO: add a real screenshot or short GIF of the homepage/blog index here, light and dark side by side, e.g. ![Ataraxia theme screenshot](./screenshot.png) -->

[![Astro](https://img.shields.io/badge/Astro-v7-BC52EE)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[Live demo](https://astro-ataraxia-theme.netlify.app/) · [Astro themes page](https://astro.build/themes/details/ataraxia-astro-theme/)

```bash
npm create astro@latest -- --template inakicalvo/astro-ataraxia-theme
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/inakicalvo/astro-ataraxia-theme)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/inakicalvo/astro-ataraxia-theme)

## Why Ataraxia?

- **No Tailwind.** Plain CSS custom properties — colors live in one file, no utility-class soup.
- **WCAG 2.2 AA**, built around Atkinson Hyperlegible, the typeface designed by the Braille Institute for
  low-vision readers.
- **Made for reading**. Generous spacing, careful typography, and no visual noise around your content.

## ✨ Features

- ✅ **Astro v7** - Built with the latest Astro features
- ✅ **Dark Mode** - Toggle between light and dark themes with smooth transitions
- ✅ **Accessible** - WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- ✅ **Atkinson Hyperlegible Fonts** - Variable fonts optimized for readability
- ✅ **Tag System** - Organize posts by tags with dedicated tag pages
- ✅ **Reading Time** - Estimated reading time on every post
- ✅ **Table of Contents** - Auto-generated from post headings, collapsible
- ✅ **Pagination** - Built-in pagination for the blog index
- ✅ **Draft Posts** - Mark posts as drafts to preview locally without publishing
- ✅ **Responsive Design** - Mobile-first with hamburger navigation
- ✅ **Content Collections** - Type-safe blog posts with Zod validation
- ✅ **SEO Optimized** - Canonical URLs, OpenGraph data, and sitemap
- ✅ **RSS Feed** - Auto-generated RSS feed for subscribers
- ✅ **MDX Support** - Enhanced markdown with component support
- ✅ **Breadcrumb Navigation** - Clear navigation paths
- ✅ **Performance** - Optimized images with Sharp
- ✅ **Minimal Styling** - Clean design based on Astro Starter Kit: Blog and Bear Blog

## 🎨 Theme Features

### Dark Mode

- Automatic system preference detection
- Manual toggle with localStorage persistence
- Smooth color transitions
- Sun/moon icons with rotation animations

### Typography

- **Atkinson Hyperlegible** variable fonts for optimal readability
- Support for weights 100-900
- Italic variants included
- Monospace variant for code blocks

### Tag System

- Required tags for all blog posts
- Dedicated tag pages for filtering
- Tag cloud with post counts
- Reusable `TagList` component

### Accessibility

- Keyboard navigation support
- Skip links for main content
- ARIA labels and landmarks
- Sufficient color contrast ratios
- Focus indicators on all interactive elements
- Screen reader friendly

<!-- TODO: run a Lighthouse audit and note the score here, and name the screen readers you actually tested with (e.g. VoiceOver, NVDA) once you have real results. -->

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Creating Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add the required frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 'Oct 03 2025'
tags: ['astro', 'blogging']  # At least one tag required
heroImage: '../../assets/your-image.jpg'  # Optional
draft: true  # Optional - excluded from production builds, visible in dev
---

Your content here...
```

3. The file name becomes the URL slug (e.g., `my-post.md` → `/blog/my-post/`)

## ⚙️ Configuration

Edit `src/consts.ts` to customize your site:

```typescript
export const SITE_TITLE = 'Your Site Title';
export const SITE_DESCRIPTION = 'Your site description';
export const SITE_AUTHOR = 'Your Name';
export const POSTS_PER_PAGE = 6;
```

Update `astro.config.mjs` for your production URL:

```javascript
export default defineConfig({
  site: 'https://your-site.com',
  // ...
});
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

- Light theme: `:root` selector
- Dark theme: `[data-theme="dark"]` selector

### Component and page styles

Components and pages carry no `<style>` blocks. Each one imports its own stylesheet from `src/styles/components/` or `src/styles/pages/` (e.g. `Header.astro` imports `src/styles/components/header.css`). Because these files are plain global CSS, selectors are class-based (`.site-header`, `.post-card`, …) rather than bare element selectors.

### Fonts

Fonts use Astro's native `fonts` API (`fontProviders.local()`) in `astro.config.mjs`, sourced from `src/assets/fonts/` and exposed as the `--font-atkinson` / `--font-atkinson-mono` CSS variables. Variable fonts support any weight from 100-900.

### Navigation

Add or remove links in `src/components/Header.astro`

## 🚀 Project Structure

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── fonts/            # Atkinson Hyperlegible variable fonts
│   ├── components/
│   │   ├── BaseHead.astro    # SEO and meta tags
│   │   ├── Breadcrumb.astro  # Navigation breadcrumbs
│   │   ├── Footer.astro      # Site footer
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro      # Responsive header with navigation
│   │   ├── HeaderLink.astro
│   │   ├── MetaItem.astro    # Icon + label pair for post metadata
│   │   ├── Pagination.astro  # Prev/next + page-number nav
│   │   ├── PostCard.astro    # Post preview card
│   │   ├── PostMeta.astro    # Layout wrapper for MetaItem rows
│   │   ├── TableOfContents.astro # Collapsible per-post TOC
│   │   ├── TagList.astro     # Display post tags
│   │   └── ThemeToggle.astro # Dark/light mode toggle
│   ├── content/
│   │   └── blog/             # Markdown/MDX blog posts
│   ├── layouts/
│   │   └── BlogPost.astro    # Blog post layout
│   ├── pages/
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── rss.xml.js        # RSS feed
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Dynamic blog post routes
│   │   │   └── [...page].astro  # Paginated blog list
│   │   └── tags/
│   │       ├── [tag].astro      # Tag filter pages
│   │       └── index.astro      # All tags page
│   ├── styles/
│   │   ├── global.css        # Global styles and CSS variables
│   │   ├── components/       # One stylesheet per component (header.css, post-card.css, pagination.css, …)
│   │   └── pages/             # One stylesheet per page/layout (blog-post.css, tag.css, …)
│   ├── utils/
│   │   ├── posts.ts          # Published-posts query (filters drafts in prod)
│   │   ├── readingTime.ts    # Word-count based reading time estimate
│   │   └── slugify.ts        # URL slug generation
│   ├── consts.ts             # Site configuration
│   └── content.config.ts     # Content collection schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📦 Dependencies

- **Astro** - Static site generator
- **@astrojs/mdx** - MDX support
- **@astrojs/rss** - RSS feed generation
- **@astrojs/sitemap** - Sitemap generation
- **astro-icon** - Icon component
- **@iconify-json/mdi** - Material Design Icons
- **@iconify-json/simple-icons** - Brand icons (e.g. the footer's GitHub link)
- **sharp** - Image optimization

## 🌐 Deployment

Build your site with `npm run build`. The output will be in the `./dist/` directory, ready to deploy to your favorite hosting platform:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/inakicalvo/astro-ataraxia-theme)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/inakicalvo/astro-ataraxia-theme)

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

## 📑 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Pagination Guide](https://docs.astro.build/en/guides/routing/#pagination)

## 🌍 Sites using Ataraxia

<!-- TODO: add real sites built with this theme here as they appear -->

- _None yet — [open a PR](https://github.com/inakicalvo/astro-ataraxia-theme/pulls) to add yours!_

## 🫶 Credit

This theme is inspired by and built upon:

- [Astro Starter Kit: Blog](https://github.com/withastro/astro/tree/main/examples/blog) - Official Astro blog starter
- [Bear Blog](https://github.com/HermanMartinus/bearblog/) - Minimal blog design
- The philosophical concept of **Ataraxia** (ἀταραξία) - tranquility and freedom from worry

## 📄 License

[MIT](./LICENSE) © 2026 Iñaki Calvo. Feel free to use this theme for your projects!

---

If this theme helped you, consider giving it a ⭐ on GitHub!
