// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hotbakedapps.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
