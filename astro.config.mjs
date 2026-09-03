import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',

  build: {
    format: 'file',
  },

  adapter: cloudflare(),
});