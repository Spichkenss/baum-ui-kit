import { PrimitiveDiv, PrimitiveDivProps } from "@components/Primitives/Div";
import { classnames } from "@lib/classnames";

import styles from "./panel-root.module.scss";

type PanelRootProps = PrimitiveDivProps;

export const PanelRoot = ({
  children,
  className,
  ...rest
}: PanelRootProps) => {
  return (
    <PrimitiveDiv
      className={
        classnames(
          styles["Panel-Root__Root"],
          className
        )
      }
      {...rest}
    >
      {children}
    </PrimitiveDiv>
  )
}