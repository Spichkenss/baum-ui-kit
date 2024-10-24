import { PrimitiveDiv, PrimitiveDivProps } from "@components/Primitives/Div"
import { classnames } from "@lib/classnames";

import styles from "./panel-header.module.scss";

type PanelHeaderProps = PrimitiveDivProps;

export const PanelHeader = ({
  children,
  className,
  ...rest
}: PanelHeaderProps) => {
  return (
    <PrimitiveDiv
      fullWidth
      className={
        classnames(
          styles["Panel-Header__Root"],
          className
        )
      }
      {...rest}
    >
      {children}
    </PrimitiveDiv>
  )
}