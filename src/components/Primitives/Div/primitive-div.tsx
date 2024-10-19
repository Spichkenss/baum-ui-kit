import { createPrimitiveComponent } from "../../PrimitiveComponent";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

export const PrimitiveDiv = createPrimitiveComponent("div");

type PrimitiveDivComponentProps = ComponentProps<typeof PrimitiveDiv>;

export type PrimitiveDivProps =
  & PrimitiveDivComponentProps
  & ComponentPropsWithoutRef<"div">;