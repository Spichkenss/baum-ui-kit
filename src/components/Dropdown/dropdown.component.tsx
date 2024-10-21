import { DropdownRoot } from "./dropdown-root.component";
import { DropdownTrigger } from "./dropdown-trigger.component";
import { DropdownItem } from "./dropdown-item.component";
import { DropdownAsyncItem } from "./dropdown-async-item.component";
import { DropdownSubmenu } from "./dropdown-submenu.component";
import { DropdownMenu } from "./dropdown-menu.component";

export const Dropdown = Object.assign({}, {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  AsyncItem: DropdownAsyncItem,
  Submenu: DropdownSubmenu,
})