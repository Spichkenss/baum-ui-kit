import { ReactNode, useRef, useState } from "react";
import {
  type ControlSize,
  type ControlStatus,
  controlSizeStyles,
  controlStatusStyles
} from "./control.consts.ts";
import styles from "./control.module.scss";
import { classnames } from "../../lib";
import {
  type WithAfterComponent,
  type WithBeforeComponent
} from "../../lib/types/common.types.ts";
import { PrimitiveComponent, type PrimitiveProps } from "../PrimitiveComponent";
import { Conditional } from "../Conditional";
import { useOnClickOutside } from "../../lib/hooks";


export type ControlComponentProps = Omit<WithBeforeComponent
    & WithAfterComponent
    & PrimitiveProps, "label">
    &
    {
        status?: ControlStatus;
        size?: ControlSize;
        children?: ReactNode;
        label?: string;
        onClick?: () => void;
    }

export const ControlComponent = ({
  status = "default",
  size = "md",
  children,
  label,
  onClick,
  className,
  ...rest
}: ControlComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsFocused(true);
    onClick?.();
  };

  const handleBlur = () => {
    if (!isFocused) return;
    setIsFocused(false);
  };

  useOnClickOutside(ref, handleBlur)

  return (
    <PrimitiveComponent
      as={"div"}
      ref={ref}
      className={classnames(
        styles["Control__Root"],
        controlStatusStyles[status],
        controlSizeStyles[size],
        className,
        {
          [styles["Focused"]]: isFocused
        }
      )}
      onClick={handleClick}
      {...rest}
    >
      <Conditional condition={!!label} fallback={null}>
        <span className={styles["Control__Label"]}>
          {label}
        </span>
      </Conditional>
      {children}
    </PrimitiveComponent>
  )
}
