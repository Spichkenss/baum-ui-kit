import styles from "./badge.module.scss";

const badgeAppearanceStyles = {
  success: styles["Success"],
  warning: styles["Warning"],
  error: styles["Error"],
  neutral: styles["Neutral"],
  info: styles["Info"]
} as const;

type BadgeAppearance = keyof typeof badgeAppearanceStyles;

export { badgeAppearanceStyles };
export type { BadgeAppearance };
