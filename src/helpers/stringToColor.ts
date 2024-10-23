export function stringToColor(colorString?: string) {
  if (!colorString) return undefined;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return undefined;

  ctx.fillStyle = colorString;

  if (colorString !== "black" && ctx.fillStyle === "#000000") return undefined;

  return ctx.fillStyle;
}