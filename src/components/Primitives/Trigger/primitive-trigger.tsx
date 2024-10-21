import { classnames } from "@lib/classnames";

import { createPrimitiveComponent } from "../../PrimitiveComponent";

import styles from "./primitive-trigger.module.scss";
import type { WithSlottableProps } from "@hoc/slottable";
import { Slot } from "@components/Slot";

const PrimitiveTriggerInner = createPrimitiveComponent("button");

type BaseTriggerInnerProps =
  WithSlottableProps<React.ComponentProps<typeof PrimitiveTriggerInner>>;

type PrimitiveTriggerInnerProps =
  & BaseTriggerInnerProps
  &
  {
    isClickable: boolean;
  }

export const PrimitiveTrigger = (
  {
    className: classNameProp,
    isClickable,
    asChild,
    ...rest
  }: PrimitiveTriggerInnerProps,
) => {

  const Component = asChild ? Slot : PrimitiveTriggerInner;

  return (
    <Component
      className={classnames(
        classNameProp,
        styles["Primitive-Trigger"]
      )}
      data-clickable={isClickable}
      {...rest}
    />
  )
}

export type PrimitiveTriggerProps = BaseTriggerInnerProps;