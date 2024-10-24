import styles from "./split-view.module.scss";

const splitViewDirectionStyles = {
  horizontal: styles["Horizontal"],
  vertical: styles["Vertical"],
} as const;

type SplitViewDirection = keyof typeof splitViewDirectionStyles;

export { splitViewDirectionStyles };
export type { SplitViewDirection };