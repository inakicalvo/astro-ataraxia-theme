# Ataraxia - Astro Blog Theme

A clean, accessible, and modern blog theme for Astro v5, inspired by the philosophical concept of tranquility and peace of mind.

## ✨ Features

- ✅ **Astro v6** - Built with the latest Astro features
- ✅ **Dark Mode** - Toggle between light and dark themes with smooth transitions
- ✅ **Accessible** - WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- ✅ **Atkinson Hyperlegible Fonts** - Variable fonts optimized for readability
- ✅ **Tag System** - Organize posts by tags with dedicated tag pages
- ✅ **Responsive Design** - Mobile-first with hamburger navigation
- ✅ **Content Collections** - Type-safe blog posts with Zod validation
- ✅ **SEO Optimized** - Canonical URLs, OpenGraph data, and sitemap
- ✅ **RSS Feed** - Auto-generated RSS feed for subscribers
- ✅ **MDX Support** - Enhanced markdown with component support
- ✅ **Breadcrumb Navigation** - Clear navigation paths
- ✅ **Performance** - Optimized images with Sharp
- ✅ **Minimal Styling** - Clean design based on Astro Starter Kit: Blog and Bear Blog

## 🚀 Project Structure

```text
├── public/
│   ├── fonts/               # Atkinson Hyperlegible variable fonts
│   └── favicon.svg
├── src/
│   ├── assets/              # Optimized images
│   ├── components/
│   │   ├── BaseHead.astro   # SEO and meta tags
│   │   ├── Breadcrumb.astro # Navigation breadcrumbs
│   │   ├── Footer.astro     # Site footer
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro     # Responsive header with navigation
│   │   ├── HeaderLink.astro
│   │   ├── TagList.astro    # Display post tags
│   │   └── ThemeToggle.astro # Dark/light mode toggle
│   ├── content/
│   │   └── blog/            # Markdown/MDX blog posts
│   ├── layouts/
│   │   └── BlogPost.astro   # Blog post layout
│   ├── pages/
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── rss.xml.js       # RSS feed
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Dynamic blog post routes
│   │   │   └── index.astro      # Blog list page
│   │   └── tags/
│   │       ├── [tag].astro      # Tag filter pages
│   │       └── index.astro      # All tags page
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   ├── utils/
│   │   └── slugify.ts       # URL slug generation
│   ├── consts.ts            # Site configuration
│   └── content.config.ts    # Content collection schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

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

### Fonts

Font declarations are in `src/styles/global.css`. Variable fonts support any weight from 100-900.

### Navigation

Add or remove links in `src/components/Header.astro`

## 📦 Dependencies

- **Astro** v5.15.1 - Static site generator
- **@astrojs/mdx** - MDX support
- **@astrojs/rss** - RSS feed generation
- **@astrojs/sitemap** - Sitemap generation
- **@iconify-json/mdi** - Material Design Icons
- **sharp** - Image optimization

## 🌐 Deployment

Build your site with `npm run build`. The output will be in the `./dist/` directory, ready to deploy to your favorite hosting platform:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

## 📑 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

## 🫶 Credit

This theme is inspired by and built upon:

- [Astro Starter Kit: Blog](https://github.com/withastro/astro/tree/main/examples/blog) - Official Astro blog starter
- [Bear Blog](https://github.com/HermanMartinus/bearblog/) - Minimal blog design
- The philosophical concept of **Ataraxia** (ἀταραξία) - tranquility and freedom from worry

## 📄 License

MIT License - Feel free to use this theme for your projects!
