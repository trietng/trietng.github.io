// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

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
    tailwind(),
    react({
      experimentalReactChildren: true,
    })
  ],
  vite: {
    assetsInclude: [
      '**/*.enc',
    ]
  }
});