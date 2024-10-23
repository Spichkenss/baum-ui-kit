import { ContextProvider } from "@global-types";
import { createContext } from "@lib/utils";
import { useCallback, useMemo } from "react";
import { AccordionProps } from "./accordion.types";
import { useControllableState } from "@hooks/useControllableState";

type AccordionContextValue =
  & Pick<AccordionProps, "value" | "multiple" | "onChange">
  &
  {
    isOpened: (value: string) => boolean;
    toggleItemOpenState: (value: string) => void;
  };

const [
  AccordionContext,
  useAccordionContext,
] = createContext<AccordionContextValue>();

AccordionContext.displayName = "AccordionContext";

type AccordionContextProviderProps = AccordionProps;

const AccordionContextProvider:
  ContextProvider<AccordionContextProviderProps> = (
    {
      value: valueProp,
      defaultValue: defaultValueProp,
      children,
      multiple = false,
      onChange: onChangeProp,
    }
  ) => {
    const [
      openedItems,
      setOpenedItems
    ] = useControllableState<string | string[]>({
      value: valueProp,
      defaultValue: defaultValueProp
        ? defaultValueProp
        : multiple
          ? []
          : "",
      onChange: (value) => {
        onChangeProp?.(value);
      }
    })

    const isOpened = useCallback((value: string) => {
      return multiple
        ? openedItems.includes(value)
        : openedItems === value;
    }, [multiple, openedItems])

    const closeItem = useCallback((value: string) => {
      const filteredItems = multiple && Array.isArray(openedItems)
        ? openedItems.filter(item => item !== value)
        : "";
      setOpenedItems(filteredItems);
    }, [multiple, openedItems, setOpenedItems])

    const openItem = useCallback((value: string) => {
      const newItems = multiple && Array.isArray(openedItems)
        ? [...openedItems, value]
        : value;
      setOpenedItems(newItems);
    }, [multiple, openedItems, setOpenedItems])

    const toggleItemOpenState = useCallback((value: string) => {
      if (isOpened(value)) {
        closeItem(value);
      } else {
        openItem(value);
      }
    }, [closeItem, isOpened, openItem])

    const memoizedContextValue: AccordionContextValue = useMemo(
      () => ({
        value: openedItems,
        openedItems,
        isOpened,
        multiple,
        toggleItemOpenState
      }),
      [openedItems, isOpened, multiple, toggleItemOpenState]
    )

    return (
      <AccordionContext.Provider value={memoizedContextValue}>
        {children}
      </AccordionContext.Provider>
    );
  }

// eslint-disable-next-line react-refresh/only-export-components
export { AccordionContextProvider, useAccordionContext };
export type { AccordionContextProviderProps };