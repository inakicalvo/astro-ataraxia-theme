# Copilot Instructions - Astro Ataraxia Theme

## Project Overview
This is an Astro v5 blog theme based on the official blog starter template, customized as "Ataraxia theme". It uses TypeScript, content collections for blog posts, and includes a responsive design with hamburger navigation.

## Key Architecture Patterns

### Content Management
- **Blog posts**: Located in `src/content/blog/` as `.md` or `.mdx` files
- **Content schema**: Defined in `src/content.config.ts` with frontmatter validation using Zod
- **Required frontmatter**: `title`, `description`, `pubDate`, `tags` (array with at least one tag)
- **Optional frontmatter**: `updatedDate`, `heroImage`
- **Dynamic routing**: Blog posts use `[...slug].astro` pattern where slug matches the file ID
- **Tags system**: Posts require tags for categorization and filtering

### Component Structure
- **Layouts**: `BlogPost.astro` handles blog post rendering with hero images and metadata
- **Global components**: `Header.astro`, `Footer.astro`, `BaseHead.astro` for shared elements
- **Content components**: `TagList.astro` for consistent tag display across pages
- **Navigation**: Responsive header with hamburger menu (mobile-first design)
- **Styling**: Scoped CSS in components + global styles in `src/styles/global.css`

### Icon Integration
- Uses `astro-icon` with selective Iconify imports
- Only includes specific MDI icons: `['mastodon', 'linkedin', 'github', 'email', 'youtube', 'account', 'calendar', 'calendar-outline', 'account-outline', 'weather-sunny', 'weather-night']`
- Configure in `astro.config.mjs` under integrations

### Dark Mode Implementation
- **Theme toggle**: Located in header (desktop right, mobile menu)
- **Persistence**: Uses localStorage + system preference detection
- **CSS variables**: Defined in `src/styles/global.css` with `[data-theme="dark"]` selector
- **Accessibility**: Proper contrast ratios, focus states, and aria-labels
- **Icons**: Sun/moon icons with smooth transitions and rotation effects

### Responsive Design Patterns
- Mobile breakpoint: `@media (max-width: 900px)` for navigation
- Content width: `720px` max with responsive padding
- Hamburger menu: Pure CSS + vanilla JS for mobile navigation

## Development Workflows

### Essential Commands
```bash
npm run dev     # Local dev server at localhost:4321
npm run build   # Production build to ./dist/
npm run preview # Preview production build locally
```

### Adding Blog Posts
1. Create `.md` file in `src/content/blog/`
2. Include required frontmatter (see existing posts for examples)
3. **Tags are required** - add at least one tag: `tags: ['astro', 'tutorial']`
4. File ID becomes the URL slug (`first-post.md` → `/blog/first-post/`)

### Tag System
- **Tag pages**: Auto-generated at `/tags/[tag]/` for filtering posts
- **All tags page**: Available at `/tags/` with post counts
- **TagList component**: Reusable component with limit and showLabel props
- **Tag links**: Clickable tags lead to filtered post views

### Asset Management
- **Images**: Import from `src/assets/` for optimization
- **Hero images**: Reference in frontmatter as `heroImage: '../../assets/filename.jpg'`
- **Static assets**: Place in `public/` for direct URL access

## Configuration Conventions

### Site Constants
- Global site data in `src/consts.ts` (SITE_TITLE, SITE_DESCRIPTION)
- Update `astro.config.mjs` site URL for production builds

### RSS Feed
- Auto-generated at `/rss.xml` from blog collection
- Uses `@astrojs/rss` integration with site metadata

### Font Loading
- Custom "Atkinson" font loaded via `@font-face` in global CSS
- Located in `public/fonts/` directory

## Integration Points
- **MDX**: Enabled for enhanced markdown in blog posts
- **Sitemap**: Auto-generated from all pages
- **RSS**: Dynamic feed from blog collection
- **Sharp**: Image optimization for hero images

## Current Limitations
- No search functionality implemented

## Project-Specific Patterns
- Use `import { SITE_TITLE } from '../consts'` for consistent site branding
- Hamburger menu uses inline script for immediate functionality (no hydration delay)
- CSS custom properties follow Bear Blog conventions with CSS-in-JS color format (`rgb(var(--color))`)
- Content collections use new Astro v5 glob loader pattern instead of filesystem-based approach