import {
  forwardRef
} from "react";
import { classnames } from "../../lib";
import {
  ButtonAppearance,
  ButtonSize,
  buttonAppearenceStyles,
  buttonSizeStyles
} from "./button.consts.ts";
import styles from "./button.module.scss";
import { PrimitiveButton } from "../Primitives/Button";
import type {
  PrimitiveButtonProps
} from "../Primitives/Button/primitive-button";
import type { WithAfterAndBeforeElements } from "../../lib/types/common.types";

/*
    TODO добавить функционал кнопке
    - onlyIcon
 */

export type ButtonProps = {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  isLoading?: boolean;
  negative?: boolean;
  href?: string;
} & PrimitiveButtonProps
  & WithAfterAndBeforeElements;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((
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
  },
  ref
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