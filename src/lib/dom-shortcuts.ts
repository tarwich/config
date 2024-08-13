export const $ready = (fn: EventListener): void =>
  document.addEventListener('DOMContentLoaded', fn);
export const $ = (query: string, context = document) =>
  context.querySelector(query);
export const $$ = (query: any, context = document) =>
  Array.from(context.querySelectorAll(query));
export const preventDefault =
  (fn: () => any) => (e: { preventDefault: () => any }) => (
    e.preventDefault(), fn()
  );
