type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassArray
  | ClassDictionary;

interface ClassDictionary {
  [key: string]: unknown;
}

type ClassArray = Array<ClassValue>

export function classnames(...args: ClassValue[]): string {
  return args
    .reduce<string[]>((acc, arg) => {
      if (!arg) {
        return acc;
      }

      if (typeof arg === "string" || typeof arg === "number") {
        acc.push(String(arg));
      } else if (Array.isArray(arg)) {
        acc.push(classnames(...arg));
      } else if (typeof arg === "object") {
        for (const key in arg) {
          if (arg[key]) {
            acc.push(key);
          }
        }
      }

      return acc;
    }, [])
    .join(" ");
}