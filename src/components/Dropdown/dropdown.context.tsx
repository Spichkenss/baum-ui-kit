import { useCallback, useEffect, useMemo, useState } from "react";

import { createContext } from "@lib/utils";
import type { ContextProvider } from "@global-types";
import { useBoolean } from "@hooks/useBoolean";

import type { DropdownProps } from "./dropdown.types";

type TDropdownContextValue =
  & Pick<DropdownProps, "isOpen">
  &
  {
    activeItemIndex: number;
    setActiveItemIndex: (index: number) => void;
    handleDropdownOpen: () => void;
    handleDropdownClose: () => void;
  }

const [
  DropdownContext,
  useDropdownContext
] = createContext<TDropdownContextValue>();

DropdownContext.displayName = "DropdownContext";

const DropdownContextProvider: ContextProvider<DropdownProps> = ({
  children,
  onClose,
  isOpen: isOpenedProp
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const [
    isDropdownMenuOpened,
    setIsDropdownMenuOpened
  ] = useBoolean(isOpenedProp);

  useEffect(() => {
    if (isDropdownMenuOpened) {
      setActiveItemIndex(-1);
    }
  }, [isDropdownMenuOpened])

  const handleDropdownClose = useCallback(() => {
    setIsDropdownMenuOpened.setFalse();
    onClose?.();
  }, [onClose, setIsDropdownMenuOpened])

  const handleDropdownOpen = useCallback(() => {
    setIsDropdownMenuOpened.setTrue();
  }, [setIsDropdownMenuOpened])

  const memoizedContextValue = useMemo(() => ({
    isOpen: isDropdownMenuOpened,
    activeItemIndex,
    setActiveItemIndex,
    handleDropdownClose,
    handleDropdownOpen
  }), [
    activeItemIndex,
    handleDropdownClose,
    handleDropdownOpen,
    isDropdownMenuOpened
  ])

  return (
    <DropdownContext.Provider value={memoizedContextValue}>
      {children}
    </DropdownContext.Provider>
  )
};

export {
  DropdownContextProvider,
  // eslint-disable-next-line react-refresh/only-export-components
  useDropdownContext
};
