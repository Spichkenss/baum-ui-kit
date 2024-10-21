import { type MouseEventHandler, useRef } from "react";
import { classnames } from "@lib/classnames";
import {
  PrimitiveListItem,
  type PrimitiveListItemProps
} from "@components/Primitives/List";

import { useDropdownContext } from "./dropdown.context";

import styles from "./dropdown.module.scss";
import type { WithAfterAndBeforeElements } from "@global-types";
import { Conditional } from "@components/Conditional";

export type DropdownItemProps =
  & PrimitiveListItemProps
  & WithAfterAndBeforeElements;

export const DropdownItem = ({
  children,
  onClick,
  before,
  after,
  ...rest
}: DropdownItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { activeItemIndex, handleDropdownClose } = useDropdownContext();

  const itemIndex = ref.current?.parentNode ? Array.prototype.indexOf.call(
    ref.current.parentNode.children,
    ref.current
  ) : 0;

  const isListItemActive = activeItemIndex === itemIndex

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    handleDropdownClose();
    onClick?.(event);
  }

  return (
    <PrimitiveListItem
      ref={ref}
      fullWidth
      onClick={handleClick}
      className={classnames(
        styles["Dropdown__Item"],
        {
          [styles["Focused"]]: isListItemActive
        }
      )}
      {...rest}
    >
      <Conditional condition={!!before} fallback={null}>
        <span>
          {before}
        </span>
      </Conditional>
      <span>
        {children}
      </span>
      <Conditional condition={!!after} fallback={null}>
        <span>
          {after}
        </span>
      </Conditional>
    </PrimitiveListItem>
  )
}