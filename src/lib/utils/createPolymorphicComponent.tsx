import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithRef,
  type ForwardRefRenderFunction,
  type PropsWithoutRef,
} from "react";

export type AsProp<TElem extends ElementType = ElementType> = TElem;

export type PolymorphicComponentProps<TElem extends ElementType> = {
  as?: ElementType
} & ComponentPropsWithRef<TElem>;

export type PolymorphicRef<TElem extends ElementType> =
  ComponentPropsWithRef<TElem>["ref"];

export const createPolymorphicComponent = <
  TElem extends ElementType = ElementType,
  TProps = object
>(
    defaultElement: TElem,
  ) => {
  const Element: ForwardRefRenderFunction<
    PolymorphicRef<ElementType>,
    PropsWithoutRef<PolymorphicComponentProps<TElem> & TProps>
  > = (
    {
      as,
      ...rest
    },
    ref
  ) => {
    const Component = as || defaultElement;

    return <Component ref={ref} {...rest} />;
  };

  return forwardRef(Element);
};
