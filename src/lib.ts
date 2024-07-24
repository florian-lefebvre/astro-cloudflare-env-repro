import { FOO } from "astro:env/server";

export const whatever = () => {
  console.log("whatever");
};

export const logFoo = () => {
  console.log("Hi from logFoo", { FOO });
};
