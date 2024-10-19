import type { WithPolymorphProps } from "@hoc/withPolymorphism";
import { getClassesFromCustomStyle } from "@helpers/getClassesFromCustomStyle";
import { classnames } from "@lib/classnames";

import styles from "./flex-container.module.scss";

type FlexContainerProps<TElem extends React.ElementType = "div"> =
  WithPolymorphProps<
    & React.ComponentProps<TElem>
    &
    {
      align?: React.CSSProperties["alignItems"];
      justify?: React.CSSProperties["justifyContent"];
      direction?: React.CSSProperties["flexDirection"];
    }
  >;

export const FlexContainer = ({
  as: Component = "div",
  children,
  style,
  align,
  justify,
  direction = "column",
  className,
  ...rest
}: FlexContainerProps) => {
  const [themedClasses, themedStyles] = getClassesFromCustomStyle(style);

  const finalClassName = classnames(
    styles["Flex__Container"],
    themedClasses,
    className
  );

  const finalStyle = {
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    ...themedStyles
  };

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