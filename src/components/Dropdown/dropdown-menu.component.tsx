import { ClickableOutside } from "@components/ClickableOutside";
import {
  PrimitiveList,
  type PrimitiveListProps
} from "@components/Primitives/List";
import { classnames } from "@lib/classnames";

import { useDropdownContext } from "./dropdown.context";

import styles from "./dropdown.module.scss";

type DropdownMenuProps = PrimitiveListProps;

export const DropdownMenu = ({
  children,
  className: classNameProp,
  ...rest
}: DropdownMenuProps) => {
  const {
    isOpen,
    handleDropdownClose,
    setActiveItemIndex,
    activeItemIndex
  } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <ClickableOutside onClickOutside={handleDropdownClose}>
      <PrimitiveList
        fullWidth
        className={classnames(
          styles["Dropdown__Menu"],
          classNameProp
        )}
        activeItemIndex={activeItemIndex}
        onActiveItemIndexChange={setActiveItemIndex}
        {...rest}
      >
        {children}
      </PrimitiveList>
    </ClickableOutside>
  );
}