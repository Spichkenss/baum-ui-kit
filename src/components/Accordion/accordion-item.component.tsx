import {
  AccordionItemContextProvider,
  AccordionItemContextProviderProps
} from "./accordion-item.context";

type AccordionItemProps = AccordionItemContextProviderProps & {
  children?: React.ReactNode;
};

export const AccordionItem = ({ value, children }: AccordionItemProps) => {
  return (
    <AccordionItemContextProvider value={value}>
      {children}
    </AccordionItemContextProvider>
  );
};
