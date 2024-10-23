import { forwardRef } from "react"

import { classnames } from "@lib/classnames";
import { WithAfterAndBeforeElements } from "@global-types"

import { BadgeAppearance, badgeAppearanceStyles } from "./badge.consts"

import styles from "./badge.module.scss";
import { PrimitiveDiv } from "@components/Primitives/Div";
import { BeforeAfterContainer } from "@components/BeforeAfterContainer";

export type BadgeProps =
& Omit<React.ComponentPropsWithoutRef<"div">, "color">
& WithAfterAndBeforeElements
&
{
  appearence?: BadgeAppearance;
  // TODO: color из palette или любой другой
}

export const Badge = forwardRef<
  HTMLDivElement,
  BadgeProps
>(({
  appearence = "neutral",
  className,
  children,
  before,
  after,
  ...rest
}, ref) => {
  return (
    <PrimitiveDiv
      ref={ref}
      className={
        classnames(
          styles["Badge__Root"],
          badgeAppearanceStyles[appearence],
          className
        )
      }
      {...rest}
    >
      <BeforeAfterContainer before={before} after={after}>
        {children}
      </BeforeAfterContainer>
    </PrimitiveDiv>
  )
});

Badge.displayName = "Badge";