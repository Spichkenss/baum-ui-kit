import { PrimitiveDiv, PrimitiveDivProps } from "@components/Primitives/Div"
import { classnames } from "@lib/classnames";

import styles from "./panel-content.module.scss";

type PanelContentProps = PrimitiveDivProps;

export const PanelContent = ({
  children,
  className,
  ...rest
}: PanelContentProps) => {
  return (
    <PrimitiveDiv
      fullWidth
      className={
        classnames(
          styles["Panel-Content__Root"],
          className
        )
      }
      {...rest}
    >
      {children}
    </PrimitiveDiv>
  )
}