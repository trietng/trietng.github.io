// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://trietng.github.io',
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    routing: "manual"
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    })
  ],
  vite: {
    assetsInclude: [
      '**/*.enc',
    ],
    plugins: [tailwindcss()]
  }
});