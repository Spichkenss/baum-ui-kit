import { withPolymorphism } from "@hoc/withPolymorphism";
import { withThemedStyle } from "@hoc/withThemedStyle";
import { FlexContainer } from "./flex-container.component";
import { FlexItem } from "./flex-item.component";


export const Flex = Object.assign(
  {},
  {
    Container: withThemedStyle(withPolymorphism(FlexContainer)),
    Item: withThemedStyle(withPolymorphism(FlexItem)),
  }
);