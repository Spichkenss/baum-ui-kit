import { classnames } from "@lib/classnames";
import {
  PrimitiveTrigger,
  type PrimitiveTriggerProps
} from "@components/Primitives/Trigger";

import { useDropdownContext } from "./dropdown.context";

import styles from "./dropdown.module.scss";

type DropdownTriggerProps = PrimitiveTriggerProps;

export const DropdownTrigger = ({
  asChild,
  className: classNameProp,
  ...rest
}: DropdownTriggerProps) => {
  const { isOpen, handleDropdownOpen } = useDropdownContext();

  return (
    <PrimitiveTrigger
      asChild={asChild}
      isClickable={!isOpen}
      onClick={handleDropdownOpen}
      className={
        classnames(
          styles["Dropdown__Trigger"],
          classNameProp
        )}
      {...rest}
    />
  )
}