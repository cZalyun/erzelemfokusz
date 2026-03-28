# ÉrzelemFókusz

Modern recreation of [erzelemfokusz.com](https://www.erzelemfokusz.com/) — a mental health counseling and couples therapy practice by Kőrösi Edina.

Built with **Astro 6**, **Tailwind CSS 4**, and **TypeScript** as a fast, static, SEO-optimized site deployed to GitHub Pages.

**Live:** [erzelemfokusz.com](https://erzelemfokusz.com)

---

## Tech Stack

| Layer       | Technology                                     |
| ----------- | ---------------------------------------------- |
| Framework   | [Astro 6](https://astro.build/) (static output)|
| Styling     | [Tailwind CSS 4.2](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Language    | TypeScript (strict mode)                       |
| Fonts       | Cormorant Garamond + DM Sans (Google Fonts)    |
| SEO         | Sitemap, Open Graph, JSON-LD, hreflang         |
| Deployment  | GitHub Actions → GitHub Pages                  |

## Features

- **Bilingual (HU / EN)** — Astro built-in i18n routing. Hungarian at root, English under `/en/`.
- **Dark / Light / System theme** — CSS custom properties with `localStorage` persistence and FOUC prevention.
- **Configurable** — Toggle pages, features, and languages on/off via `src/config/features.ts`.
- **Full SEO** — Open Graph, Twitter cards, JSON-LD (ProfessionalService schema), sitemap, robots.txt, canonical URLs, hreflang alternates.
- **Responsive** — Mobile-first design with hamburger navigation.
- **Scroll animations** — Intersection Observer–based fade-in with stagger delays.
- **Static contact form** — `mailto:` based, no backend required.

## Pages

| HU Route                | EN Route                 | Content                              |
| ----------------------- | ------------------------ | ------------------------------------ |
| `/`                     | `/en`                    | Homepage (hero, testimonials, consultation, contact, quote) |
| `/bemutatkozas`         | `/en/about`              | About — bio, insights, professional timeline |
| `/biztonsagos-kezdetek` | `/en/safe-beginnings`    | Safe Beginnings couples program      |
| `/ef-lelkigondozas`     | `/en/ef-pastoral-care`   | Emotion-focused pastoral care        |
| `/olelj-at`             | `/en/hold-me-tight`      | Hold Me Tight program + pricing      |
| `/aktualitasok`         | `/en/news`               | Locations & schedule                 |
| `/csoportok`            | `/en/groups`             | Group programs, film club            |
| `/arak-es-keretek`      | `/en/pricing`            | Pricing & terms                      |

## Project Structure

```
src/
├── assets/images/       # Logo, hero, decorative images
├── components/          # Astro components (Navbar, Hero, Timeline, etc.)
├── config/              # site.ts, features.ts, navigation.ts
├── i18n/                # hu.ts, en.ts, utils.ts, types.ts
├── layouts/             # Layout.astro (base layout)
├── pages/               # HU pages at root, EN pages under en/
└── styles/              # global.css (Tailwind + theme variables)
public/
├── CNAME                # Custom domain for GitHub Pages
├── favicon.ico
├── robots.txt
├── 404.html             # SPA fallback redirect
└── og-image.png
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check + build
npm run build

# Preview production build
npm run preview
```

## Configuration

### Feature flags (`src/config/features.ts`)

Toggle any feature or page on/off:

```typescript
export const FEATURES = {
  i18n: true,          // Enable/disable English locale
  darkMode: true,      // Enable/disable theme toggle
  contactForm: true,   // Enable/disable contact form
  pages: {
    home: true,
    about: true,
    // ...toggle individual pages
  },
};
```

### Site metadata (`src/config/site.ts`)

Central configuration for domain, contact info, locations, and social links.

### Navigation (`src/config/navigation.ts`)

Menu structure with per-locale routes and automatic filtering based on enabled pages.

## Deployment

Pushes to `main` automatically deploy via GitHub Actions (`.github/workflows/deploy.yml`).

The workflow uses `withastro/action@v3` to build and `actions/deploy-pages@v4` to publish.

**Custom domain:** Set DNS for `erzelemfokusz.peterbenceczaun.me` to point to GitHub Pages, and enable Pages in the repository settings.

## License

All rights reserved. Content and imagery belong to Kőrösi Edina / ÉrzelemFókusz.
