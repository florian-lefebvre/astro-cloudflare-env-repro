import { F as FOO } from './server_GbkxczKm.mjs';
import { d as defineMiddleware, s as sequence } from './_astro-internal_middleware_DvVktIYq.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  console.log(process.env);
  console.log("Hi from middleware", { FOO });
  return await next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest as o };
