import type { Breakpoint } from "@global-types";

import styles from "@styles/spacings.module.scss";

export type Spacing = Breakpoint;

export const spacings = {
  "2xs": styles["spacing-2xs"],
  xs: styles["spacing-xs"],
  sm: styles["spacing-sm"],
  md: styles["spacing-md"],
  lg: styles["spacing-lg"],
  xl: styles["spacing-xl"],
  "2xl": styles["spacing-2xl"],
  "3xl": styles["spacing-3xl"],
  "4xl": styles["spacing-4xl"],
} satisfies Record<Spacing, string>;