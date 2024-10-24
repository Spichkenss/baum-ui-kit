import { PanelContent } from "./panel-content.compoent";
import { PanelHeader } from "./panel-header.component";
import { PanelRoot } from "./panel-root.component";

export const Panel = Object.assign({}, {
  Root: PanelRoot,
  Header: PanelHeader,
  Content: PanelContent,
})