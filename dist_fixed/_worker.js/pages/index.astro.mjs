globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as createAstro } from '../chunks/astro/server_AhPZWQGb.mjs';
import { F as FOO } from '../chunks/server_GbkxczKm.mjs';
export { renderers } from '../renderers.mjs';

const logFoo = () => {
  console.log("Hi from logFoo", { FOO });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  logFoo();
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> </body></html>`;
}, "/Users/alexanderniebuhr/Developer/tmp/astro-cloudflare-env-repro/src/pages/index.astro", void 0);

const $$file = "/Users/alexanderniebuhr/Developer/tmp/astro-cloudflare-env-repro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
