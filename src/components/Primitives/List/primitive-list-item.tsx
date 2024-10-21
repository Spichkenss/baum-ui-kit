import { createPrimitiveComponent } from "../../PrimitiveComponent";

export const PrimitiveListItem = createPrimitiveComponent("li");

type PrimitiveListItemComponentProps =
  React.ComponentProps<typeof PrimitiveListItem>;

export type PrimitiveListItemProps =
  & PrimitiveListItemComponentProps
  & React.ComponentPropsWithoutRef<"li">;