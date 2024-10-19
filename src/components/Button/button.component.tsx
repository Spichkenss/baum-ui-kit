import { forwardRef, type Ref } from "react";

import { classnames } from "@lib/classnames";
import type { WithAfterAndBeforeElements } from "@global-types";

import {
  type ButtonSize,
  type ButtonAppearance,
  buttonAppearenceStyles,
  buttonSizeStyles
} from "./button.consts";
import {
  PrimitiveButton,
  type PrimitiveButtonProps
} from "../Primitives/Button";

import styles from "./button.module.scss";

type BaseButtonProps = {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  isLoading?: boolean;
  negative?: boolean;
  href?: string;
}

export type ButtonProps =
  & WithAfterAndBeforeElements
  & BaseButtonProps
  & PrimitiveButtonProps;

export const Button = forwardRef((
  {
    className,
    size = "md",
    appearance = "primary",
    disabled = false,
    isLoading = false,
    children,
    before,
    after,
    negative = false,
    href,
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement | HTMLAnchorElement>
) => {

  return (
    <PrimitiveButton
      ref={ref}
      as={href ? "a" : "button"}
      href={href}
      disabled={disabled || isLoading}
      data-loading={isLoading}
      className={classnames(
        styles["Button__Root"],
        buttonSizeStyles[size],
        buttonAppearenceStyles[appearance],
        {
          [styles["Negative"]]: negative
        },
        className,
      )}
      {...rest}
    >
      {isLoading && (
        <span className={styles["Button__Loader"]}>
          loading
        </span>
      )}
      <span className={styles["Button__Label"]}>
        <span className={styles["Button__Label__Before"]}>
          {before}
        </span>
        <span>{children}</span>
        <span className={styles["Button__Label__After"]}>
          {after}
        </span>
      </span>
    </PrimitiveButton>
  );
});

Button.displayName = "Button";