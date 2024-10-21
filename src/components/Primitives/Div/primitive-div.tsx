import { createPrimitiveComponent } from "../../PrimitiveComponent";

export const PrimitiveDiv = createPrimitiveComponent("div");

type PrimitiveDivComponentProps = React.ComponentProps<typeof PrimitiveDiv>;

export type PrimitiveDivProps =
  & PrimitiveDivComponentProps
  & React.ComponentPropsWithoutRef<"div">;