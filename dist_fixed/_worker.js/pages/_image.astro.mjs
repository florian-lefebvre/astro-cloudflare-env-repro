globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

// NOTE: this file is empty on purpose
// it allows use to offer `imageService: 'compile'`

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
