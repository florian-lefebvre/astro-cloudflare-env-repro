// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        FOO: envField.string({
          context: 'server',
          access: 'secret',
        }),
      },
      // validateSecrets: true,
    },
  },
  output: 'server',
  adapter: cloudflare(),
});
