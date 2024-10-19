import { useRef, useState } from "react";

import { Conditional } from "@components/Conditional";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { PrimitiveDiv } from "@components/Primitives/Div";
import type { WithAfterAndBeforeElements } from "@global-types";
import { classnames } from "@lib/classnames";

import {
  type ControlSize,
  type ControlStatus,
  controlSizeStyles,
  controlStatusStyles
} from "./control.consts";

import styles from "./control.module.scss";
import type { PrimitiveInputProps } from "@components/Primitives/Input";

type BaseControlComponentProps = {
  status?: ControlStatus;
  size?: ControlSize;
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  onBlur?: () => void;
}

export type ControlComponentProps =
  & Omit<PrimitiveInputProps, keyof BaseControlComponentProps>
  & BaseControlComponentProps
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
