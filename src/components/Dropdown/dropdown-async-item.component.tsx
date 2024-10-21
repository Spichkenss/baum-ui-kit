import type { DropdownItemProps } from "./dropdown-item.component";

type DropdownAsyncItemProps = DropdownItemProps & {
  isLoading: boolean;
}

export const DropdownAsyncItem = ({ children }: DropdownAsyncItemProps) => {
  return (
    <li>
      {children}
    </li>
  )
}