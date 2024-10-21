import { createPrimitiveComponent } from "../../PrimitiveComponent";
import { useSuperKeyDown } from "@hooks/useSuperKeyDown";
import { Children, forwardRef, useState } from "react";

const PrimitiveListInner = createPrimitiveComponent("ul");

type PrimitiveListInnerProps =
  & Omit<React.ComponentProps<typeof PrimitiveListInner>, "children">
  &
  {
    activeItemIndex?: number;
    onActiveItemIndexChange?: (index: number) => void;
    children:
      | React.ReactNode
      | ((activeItemIndex: number) => React.ReactNode);
  };

export const PrimitiveList = forwardRef((
  {
    children,
    activeItemIndex: activeItemIndexProp,
    onActiveItemIndexChange,
    ...rest
  }: PrimitiveListInnerProps,
  ref: React.Ref<HTMLUListElement>,
) => {
  const [
    activeItemIndex,
    setActiveItemIndex
  ] = useState<number>(activeItemIndexProp ?? -1);

  const finalChildren = typeof children === "function"
    ? children(activeItemIndex)
    : children;

  const changeActiveItemIndex = (dir: "next" | "prev") => {
    const step = dir === "prev" ? -1 : 1;
    const nextIndex = (activeItemIndex + step) % Children.count(finalChildren)
    onActiveItemIndexChange?.(nextIndex);
    setActiveItemIndex(prev => {
      if (prev === -1) return 0;
      return nextIndex;
    });
  }

  useSuperKeyDown({
    "ArrowUp": (event) => {
      event.preventDefault();
      changeActiveItemIndex("prev");
    },
    "ArrowDown": (event) => {
      event.preventDefault();
      changeActiveItemIndex("next");
    }
  });

  return (
    <PrimitiveListInner {...rest} ref={ref}>
      {finalChildren}
    </PrimitiveListInner>
  )
});

export type PrimitiveListProps =
  React.ComponentProps<typeof PrimitiveListInner>;