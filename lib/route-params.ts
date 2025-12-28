export const resolveParam = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] : value;
