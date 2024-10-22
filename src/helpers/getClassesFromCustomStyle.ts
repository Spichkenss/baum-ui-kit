import type { CSSProperties } from "react";

export const getClassesFromCustomStyle = (
  style?: React.CSSProperties
): [string, CSSProperties] => {
  const moduleClasses: string[] = [];
  const styles: CSSProperties = {};

  Object.entries(style || {}).forEach(([key, value]) => {
    if (typeof value === "string" && value.startsWith("_")) {
      moduleClasses.push(value);
    } else {
      styles[key as keyof CSSProperties] = value;
    }
  });

  return [moduleClasses.join(" "), styles];
}