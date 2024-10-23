import { PrimitiveDiv } from "@components/Primitives/Div";
import { ContextProvider } from "@global-types";
import { createContext } from "@lib/utils";
import { useMemo } from "react";

type AccordionItemContextValue = {
  value: string;
};

const [AccordionItemContext, useAccordionItemContext] =
  createContext<AccordionItemContextValue>();

AccordionItemContext.displayName = "AccordionItemContext";

type AccordionItemContextProviderProps =
  Pick<AccordionItemContextValue, "value">;

const AccordionItemContextProvider: ContextProvider<
AccordionItemContextProviderProps
> = ({ value, children }) => {
  const memoizedContextValue: AccordionItemContextValue = useMemo(() => ({
    value
  }), [value])

  return (
    <AccordionItemContext.Provider value={memoizedContextValue}>
      <PrimitiveDiv fullWidth>
        {children}
      </PrimitiveDiv>
    </AccordionItemContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { AccordionItemContextProvider, useAccordionItemContext };
export type { AccordionItemContextProviderProps };