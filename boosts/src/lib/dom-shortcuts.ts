export const $ready = (fn: EventListener): void =>
  document.addEventListener('DOMContentLoaded', fn);
export const $ = (query: string, context = document) =>
  context.querySelector(query);
export const $$ = (query: any, context: ParentNode = document): HTMLElement[] =>
  Array.from(context.querySelectorAll(query));
export const preventDefault =
  (fn: () => any) => (e: { preventDefault: () => any }) => (
    e.preventDefault(), fn()
  );

export const $watch = (
  el: HTMLElement,
  query: string,
  fn: (results: HTMLElement[]) => any,
) => {
  setInterval(() => {
    const results = $$(query, el);
    if (results.length) fn(results);
  }, 250);
};
