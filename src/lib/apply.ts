export function apply(
  target: Record<string, any>,
  source: Partial<typeof target>
): typeof target {
  Object.entries(source).forEach(([key, value]) =>
    isPojo(value) ? apply(target[key], value) : (target[key] = value)
  );

  return target;
}
