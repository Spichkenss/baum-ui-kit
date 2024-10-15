import { ComponentProps, ElementType, forwardRef, type Ref } from "react";
import { classnames } from "../../lib";
import styles from "./primitive.module.scss";

export type PrimitiveProps = {
  className?: string;
  fullWidth?: boolean;
}

type PrimitiveComponentProps<Element extends ElementType> = PrimitiveProps & {
    as?: Element;
} & Omit<ComponentProps<Element>, "as">;

export const PrimitiveComponent =
    forwardRef(<Element extends ElementType>(
      {
        as,
        className,
        fullWidth = false,
        ...rest
      }: PrimitiveComponentProps<Element>,
      ref: Ref<HTMLDivElement>,
    ) => {
      const Component = as || "div";

      return (
        <Component
          ref={ref}
          className={classnames(
            styles["Primitive__Root"],
            className,
            {
              [styles.fullWidth]: fullWidth
            },
          )}
          {...rest}
        />

      );
    })

PrimitiveComponent.displayName = "PrimitiveComponent";