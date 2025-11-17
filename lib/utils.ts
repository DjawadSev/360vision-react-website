export type ClassValue =
  | string
  | number
  | boolean
  | ClassValue[]
  | { [key: string]: boolean }
  | null
  | undefined;

function resolveClass(value: ClassValue, acc: string[]) {
  if (typeof value === "boolean") {
    return;
  }

  if (!value && value !== 0) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    if (String(value).trim().length > 0) {
      acc.push(String(value));
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => resolveClass(item, acc));
    return;
  }

  Object.entries(value).forEach(([key, enabled]) => {
    if (enabled) {
      acc.push(key);
    }
  });
}

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  inputs.forEach((value) => resolveClass(value, classes));
  return classes.join(" ").trim();
}
