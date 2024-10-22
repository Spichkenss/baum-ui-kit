import { spacings } from "@lib/consts/spacings";

export const theme = {
  spacing: spacings,
} as const;

export type Theme = typeof theme;

export type ThemeFn = (theme: Theme) => React.CSSProperties;