import type { WithPolymorphProps } from "@hoc/withPolymorphism";
import { getClassesFromCustomStyle } from "@helpers/getClassesFromCustomStyle";
import { classnames } from "@lib/classnames";

import { FlexContainerProperties } from "./flex.types";

import styles from "./flex-container.module.scss";
import { spacings } from "@lib/consts/spacings";

type FlexContainerProps<TElem extends React.ElementType = "div"> =
  WithPolymorphProps<
    & React.ComponentProps<TElem>
    & FlexContainerProperties
  >;

export const FlexContainer = ({
  as: Component = "div",
  children,
  style,
  align = "initial",
  justify = "initial",
  wrap = "wrap",
  gap = "md",
  direction = "column",
  className,
  ...rest
}: FlexContainerProps) => {
  const [themedClasses, themedStyles] = getClassesFromCustomStyle(style);

  const finalClassName = classnames(
    styles["Flex__Container"],
    themedClasses,
    spacings[gap],
    className
  );

  const finalStyle = {
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap,
    ...themedStyles
  } as React.CSSProperties;

  return (
    <Component
      style={finalStyle}
      className={finalClassName}
      {...rest}
    >
      {children}
    </Component>
  );
};