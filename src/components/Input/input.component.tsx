import { forwardRef, type Ref, useId } from "react";

import {
  UnstyledInput,
  type UnstyledInputProps
} from "@components/UnstyledInput";
import {
  ControlComponent,
  type ControlComponentProps
} from "@components/ControlComponent";

import styles from "./Input.module.scss";

export type InputProps =
  & UnstyledInputProps
  & ControlComponentProps;

export const Input = forwardRef((
  {
    status,
    size = "md",
    type = "text",
    fullWidth,
    before,
    after,
    label,
    ...rest
  }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
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