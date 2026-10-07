import { defineConfig } from 'astro/config';

export default defineConfig({
  site: (process.env.PAGES_SITE || 'https://igal.dev').replace(/^http:/, 'https:'),
  base: process.env.PAGES_BASE || '/',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
