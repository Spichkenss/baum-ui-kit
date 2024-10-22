import styles from "./divider.module.scss";
import { classnames } from "@lib/classnames";

export type DividerProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
}

export const Divider = (
  {
    className,
    direction = "horizontal",
  }: DividerProps
) => {
  return (
    <div
      role='separator'
      className={classnames(
        styles["Divider__Root"],
        className,
        {
          [styles["Vertical"]]: direction === "vertical",
          [styles["Horizontal"]]: direction === "horizontal",
        }
      )}
    />
  )
}