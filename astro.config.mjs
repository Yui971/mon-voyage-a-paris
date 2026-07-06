import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yui971.github.io',
  base: '/mon-voyage-a-paris/',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
