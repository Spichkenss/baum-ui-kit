import {
  DropdownContextProvider,
} from "./dropdown.context";
import type { DropdownProps } from "./dropdown.types";

type DropdownRootProps = {
  children?: React.ReactNode;
} & DropdownProps;

export const DropdownRoot = ({
  children,
  ...contextProps
}: DropdownRootProps) => {
  return (
    <DropdownContextProvider {...contextProps}>
      {children}
    </DropdownContextProvider>
  )
}