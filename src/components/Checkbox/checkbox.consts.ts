import styles from "./checkbox.module.scss";

const checkboxSizeStyles = {
  sm: styles["Size-sm"],
  md: styles["Size-md"],
} as const;

type CheckboxSize = keyof typeof checkboxSizeStyles;

export { checkboxSizeStyles };
export type { CheckboxSize }