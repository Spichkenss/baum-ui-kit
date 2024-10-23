import { classnames } from "@lib/classnames";
import { PrimitiveDiv, PrimitiveDivProps } from "@components/Primitives/Div";

import {
  AccordionContextProvider,
  type AccordionContextProviderProps
} from "./accordion.context";

import styles from "./accordion-root.module.scss";

type AccordionRootProps =
  & AccordionContextProviderProps
  & PrimitiveDivProps
  &
  {
    children?: React.ReactNode;
    className?: string;
  };

export const AccordionRoot = (
  {

    children,
    className: classNameProp,
    value,
    onChange,
    multiple,
    defaultValue,
    ...rest
  }: AccordionRootProps
) => {
  return (
    <AccordionContextProvider
      value={value}
      onChange={onChange}
      multiple={multiple}
      defaultValue={defaultValue}
    >
      <PrimitiveDiv
        fullWidth
        className={classnames(
          styles["Accordion-Root__Root "],
          classNameProp
        )}
        {...rest}
      >
        {children}
      </PrimitiveDiv>
    </AccordionContextProvider>

  )
}