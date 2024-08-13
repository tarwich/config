const isPojo = (x: unknown) =>
  x && typeof x === 'object' && x.constructor === Object;
