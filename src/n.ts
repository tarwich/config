import { apply } from './lib/apply';

import { $, $$, $ready, $watch, preventDefault } from './lib/dom-shortcuts';

/**
 * Create a new DOM element with the specified tag name, properties, and
 * children.
 *
 * @param {string} [tag='div'] - The tag name of the element to create.
 * @param {Record<string, any>} [properties={}] - An object containing the properties to set
 * on the element.
 * @param {Array} [children=[]] - An array of children to append to the element.
 * @returns {HTMLElement} The newly created DOM element.
 */
export const $n = (
  tag: string = 'div',
  properties: Record<string, any> = {},
  children: Array<any> = [],
): HTMLElement => {
  const [t = 'div', ...classes] = tag.match(/\w+|\W\w+/g) || [];
  const el = document.createElement(t);

  classes.push(...((properties['class'] || '').match(/\w+|\W\w+/g) || []));
  delete properties['class'];

  apply(el, properties);

  classes.forEach((c) => {
    const w = c.slice(1);
    c ? (c[0] === '#' ? (el.id = w) : el.classList.add(w)) : 0;
  });

  for (const child of children) {
    el.appendChild(child instanceof Node ? child : new Text(String(child)));
  }

  return el;
};

Object.assign(window, {
  $,
  $$,
  $ready,
  preventDefault,
  $n,
  $watch,
});
