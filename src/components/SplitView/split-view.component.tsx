import { PrimitiveDivProps } from "@components/Primitives/Div";
import { classnames } from "@lib/classnames";

import {
  SplitViewDirection,
  splitViewDirectionStyles
} from "./split-view.consts";

import styles from "./split-view.module.scss";

type SplitViewProps = PrimitiveDivProps & {
  separated?: boolean;
  direction?: SplitViewDirection;
}

export const SplitView = ({
  separated = true,
  direction = "vertical",
  children
}: SplitViewProps) => {
  return (
    <div
      className={
        classnames(
          styles["Split-View__Root"],
          splitViewDirectionStyles[direction],
          {
            [styles["Separated"]]: separated
          }
        )
      }
    >
      {children}
    </div>
  )
}