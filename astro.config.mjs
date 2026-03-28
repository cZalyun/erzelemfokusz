// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erzelemfokusz.peterbenceczaun.me',
  output: 'static',
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    // @ts-ignore -- Tailwind CSS Vite plugin types mismatch with Astro's bundled Vite
    plugins: [tailwindcss()],
  },
});
