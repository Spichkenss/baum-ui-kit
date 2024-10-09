import { ControlComponent, ControlComponentProps } from "../ControlComponent";
import { UnstyledInput, UnstyledInputProps } from "../UnstyledInput";
import { forwardRef } from "react";

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
  return (
    <ControlComponent
      status={status}
      size={size}
      after={after}
      before={before}
      fullWidth={fullWidth}
      label={label}
    >
      <UnstyledInput
        ref={ref}
        type={type}
        {...rest}
      />
    </ControlComponent>
  )
})

Input.displayName = "Input";