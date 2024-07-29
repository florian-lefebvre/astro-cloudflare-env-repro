# Reproduction

1. `pnpm i`
2. `FOO=TEST pnpm run build`
3. `node dist/_worker.js/index.js` or `pnpm wrangler pages dev dist` fail
4. `dist/_worker.js/index.js` imports staticlly from e.g. `./chunks/_astro-internal_middleware_DvVktIYq.mjs` (this is the issue)
5. remove the static import
6. `node dist/_worker.js/index.js` or `pnpm wrangler pages dev dist` work (request will fail, due to removed imports)
