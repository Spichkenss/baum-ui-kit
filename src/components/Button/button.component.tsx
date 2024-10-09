import { type ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./button.module.scss";
import { classnames } from "../../lib";
import {
  ButtonAppearance,
  ButtonSize,
  buttonAppearenceStyles,
  buttonSizeStyles
} from "./button.consts.ts";
import {
  WithAfterComponent,
  WithBeforeComponent
} from "../../lib/types/common.types.ts";
import { PrimitiveComponent, PrimitiveProps } from "../PrimitiveComponent";

/*
    TODO добавить функционал кнопке
    - href
    - onlyIcon
 */

type ButtonProps = ComponentPropsWithoutRef<"button">
    & WithBeforeComponent
    & WithAfterComponent
    & PrimitiveProps
    & {
    size?: ButtonSize;
    appearance?: ButtonAppearance;
    isLoading?: boolean;
    negative?: boolean;
};

const Button = forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({
  className,
  size = "md",
  appearance = "primary",
  disabled = false,
  isLoading = false,
  children,
  before,
  after,
  negative = false,
  ...rest
}, ref) => {

  return (
    <PrimitiveComponent
      as={"button"}
      ref={ref}
      className={classnames(
        styles["Button__Root"],
        buttonSizeStyles[size],
        buttonAppearenceStyles[appearance],
        {
          [styles["Negative"]]: negative
        },
        className,
      )}
      disabled={disabled || isLoading}
      data-loading={isLoading}
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
    </PrimitiveComponent>
  );
});

Button.displayName = "Button";

export { Button };
export type { ButtonProps };