import { createPrimitiveComponent } from "../../PrimitiveComponent";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

export const PrimitiveInput = createPrimitiveComponent("input");

type PrimitiveInputComponentProps = ComponentProps<typeof PrimitiveInput>;

export type PrimitiveInputProps =
  & PrimitiveInputComponentProps
  & ComponentPropsWithoutRef<"input">;