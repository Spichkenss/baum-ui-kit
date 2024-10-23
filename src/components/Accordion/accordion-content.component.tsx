import { forwardRef } from "react";

import { PrimitiveDiv, PrimitiveDivProps } from "@components/Primitives/Div";
import { classnames } from "@lib/classnames";

import { useAccordionContext } from "./accordion.context";
import { useAccordionItemContext } from "./accordion-item.context";

import styles from "./accordion-content.module.scss";

type AccodrionContentProps = PrimitiveDivProps;

export const AccodrionContent = forwardRef<
  HTMLDivElement,
  AccodrionContentProps
>((
  {
    children,
    ...rest
  },
  ref
) => {
  const { value } = useAccordionItemContext();
  const { isOpened } = useAccordionContext();

  const isContentOpened = isOpened(value);

  return (
    <PrimitiveDiv
      ref={ref}
      className={
        classnames(
          styles["Accordion-Content__Root"],
          {
            [styles["Opened"]]: isContentOpened
          }
        )
      }
      fullWidth
      {...rest}
    >
      {children}
    </PrimitiveDiv>
  )
});

AccodrionContent.displayName = "AccodrionContent";