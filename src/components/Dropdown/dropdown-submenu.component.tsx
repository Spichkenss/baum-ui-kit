import {
  PrimitiveDiv,
  type PrimitiveDivProps
} from "@components/Primitives/Div";
import { classnames } from "@lib/classnames";

import styles from "./dropdown.module.scss";

type DropdownSubmenuProps = PrimitiveDivProps;

export const DropdownSubmenu = ({ children,
  className: classNameProp,
  ...rest
}: DropdownSubmenuProps) => {
  return (
    <PrimitiveDiv
      className={
        classnames(
          styles["Dropdown__Trigger"],
          classNameProp
        )}
      {...rest}
    >
      {children}
    </PrimitiveDiv>
  )
}