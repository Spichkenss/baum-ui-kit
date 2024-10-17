import {
  type AsProp,
  createPolymorphicComponent,
  type PolymorphicComponentProps,
} from "../../lib/utils/createPolymorphicComponent";
import {
  type ElementType,
  forwardRef,
  type PropsWithoutRef
} from "react";
import { classnames } from "../../lib";
import styles from "./primitive.module.scss";

type PrimitiveProps = {
  className?: string;
  fullWidth?: boolean;
};

export type WithPrimitiveProps<TProps = object> = PrimitiveProps & TProps;

export const createPrimitiveComponent =
  <TElem extends ElementType = ElementType>(
    as: AsProp<TElem>
  ) => {
    const Component = createPolymorphicComponent<TElem, PrimitiveProps>(as);

    return forwardRef<
      HTMLElement,
      PropsWithoutRef<WithPrimitiveProps<PolymorphicComponentProps<TElem>>>
    >(
      (
        {
          fullWidth,
          className: classNameProp,
          ...polymorphicProps
        },
        ref
      ) => {
        const className = classnames(
          styles["Primitive__Root"],
          classNameProp,
          {
            [styles["fullWidth"]]: fullWidth,
          }
        );

        return (
          <Component
            ref={ref}
            className={className}
            {...(polymorphicProps as
                PropsWithoutRef<PolymorphicComponentProps<TElem>>
            )}
          />
        );
      }
    );
  };
