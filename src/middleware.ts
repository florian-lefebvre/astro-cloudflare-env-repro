import { defineMiddleware } from "astro/middleware";
import { FOO } from "astro:env/server";
// import { whatever } from "./lib";

// console.log('Hi from outside request', { FOO })

const fn = () => {
  // console.log("Hi from fn called in middleware", { FOO });
};

export const onRequest = defineMiddleware(async (context, next) => {
  // const { FOO } = await import("astro:env/server")
  // whatever();
  console.log(process.env)
  fn();
  console.log("Hi from middleware", { FOO });
  return await next();
});
