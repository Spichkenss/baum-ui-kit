import { type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";

import { classnames } from "@lib/classnames";

import styles from "./unstyled-input.component.module.scss";

export type UnstyledInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "size"
>;

export const UnstyledInput = forwardRef((
  {
    type,
    className,
    ...rest
  }: UnstyledInputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      type={type}
      className={classnames(
        styles["Unstyled-input__Root"],
        className
      )}
      {...rest}
    />
  )
})

UnstyledInput.displayName = "UnstyledInput";