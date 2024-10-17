import { ReactNode, useRef, useState } from "react";
import {
  type ControlSize,
  type ControlStatus,
  controlSizeStyles,
  controlStatusStyles
} from "./control.consts.ts";
import styles from "./control.module.scss";
import { classnames } from "../../lib";
import { Conditional } from "../Conditional";
import { useOnClickOutside } from "../../lib/hooks";
import type { WithAfterAndBeforeElements } from "../../lib/types/common.types";
import { PrimitiveDiv } from "../Primitives/Div";
import type { PrimitiveDivProps } from "../Primitives/Div/primitive-div";

export type ControlComponentProps = {
  status?: ControlStatus;
  size?: ControlSize;
  children?: ReactNode;
  label?: string;
  onClick?: () => void;
  onBlur?: () => void;
} & PrimitiveDivProps
  & WithAfterAndBeforeElements;

export const ControlComponent = ({
  status = "default",
  size = "md",
  children,
  label,
  onClick,
  className,
  onBlur,
  id,
  ...rest
}: ControlComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRootFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsFocused(true);
    onClick?.();
  };

  const handleBlur = () => {
    if (!isRootFocused) return;
    setIsFocused(false);
    onBlur?.();
  };

  useOnClickOutside(ref, handleBlur)

  return (
    <PrimitiveDiv
      ref={ref}
      className={classnames(
        styles["Control__Root"],
        controlStatusStyles[status],
        controlSizeStyles[size],
        className,
        {
          [styles["Focused"]]: isRootFocused
        }
      )}
      onClick={handleClick}
      {...rest}
    >
      <Conditional condition={!!label} fallback={null}>
        <label
          htmlFor={id}
          className={styles["Control__Label"]}
        >
          {label}
        </label>
      </Conditional>
      {children}
    </PrimitiveDiv>
  )
}
