import { createPrimitiveComponent } from "../../PrimitiveComponent";

export const PrimitiveInput = createPrimitiveComponent("input");

type PrimitiveInputComponentProps =
  React.ComponentProps<typeof PrimitiveInput>;

export type PrimitiveInputProps =
  & PrimitiveInputComponentProps
  & React.ComponentPropsWithoutRef<"input">;