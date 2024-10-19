import type { WithPolymorphProps } from "@hoc/withPolymorphism";
import { getClassesFromCustomStyle } from "@helpers/getClassesFromCustomStyle";
import { classnames } from "@lib/classnames";

type FlexItemProps<TElem extends React.ElementType = "div"> =
  WithPolymorphProps<
    & React.ComponentProps<TElem>
    &
    {
      basis?: React.CSSProperties["flexBasis"];
      shrink?: React.CSSProperties["flexShrink"];
      grow?: React.CSSProperties["flexGrow"];
    }
  >;

export const FlexItem = ({
  as: Component = "div",
  basis,
  shrink,
  grow,
  style,
  children,
  className,
  ...rest
}: FlexItemProps) => {
  const [themedClasses, themedStyles] = getClassesFromCustomStyle(style);

  const mergedClasses = classnames(
    themedClasses,
    className
  )

  const finalStyle = {
    flexBasis: basis,
    flexShrink: shrink,
    flexGrow: grow,
    ...themedStyles,
  };

  return (
    <Component
      style={finalStyle}
      className={mergedClasses}
      {...rest}
    >
      {children}
    </Component>
  );
};
