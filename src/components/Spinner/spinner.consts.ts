import styles from "./spinner.module.scss";

const spinnerSizeStyles = {
  "sm": styles["Size-sm"],
  "md": styles["Size-md"],
  "lg": styles["Size-lg"]
} as const;

type SpinnerSize = keyof typeof spinnerSizeStyles;


export { spinnerSizeStyles };
export type { SpinnerSize };