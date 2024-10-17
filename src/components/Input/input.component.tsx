import { forwardRef, useId } from "react";
import { ControlComponent, ControlComponentProps } from "../ControlComponent";
import { UnstyledInput, UnstyledInputProps } from "../UnstyledInput";
import styles from "./input.module.scss";

export type InputProps = UnstyledInputProps & ControlComponentProps;

export const Input = forwardRef<
    HTMLInputElement,
    InputProps
>(({
  status,
  size = "md",
  type = "text",
  fullWidth,
  before,
  after,
  label,
  ...rest
}, ref) => {
  const id = useId();

  return (
    <ControlComponent
      id={id}
      status={status}
      size={size}
      after={after}
      before={before}
      fullWidth={fullWidth}
      label={label}
      className={styles["Input__Root"]}
    >
      <UnstyledInput
        id={id}
        ref={ref}
        type={type}
        className={styles["Input__Field"]}
        {...rest}
      />
    </ControlComponent>
  )
})

Input.displayName = "Input";