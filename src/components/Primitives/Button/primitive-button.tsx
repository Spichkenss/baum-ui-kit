import { createPrimitiveComponent } from "../../PrimitiveComponent";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

type ButtonTag = "button" | "a";

export const PrimitiveButton = createPrimitiveComponent<ButtonTag>("button");

type PrimitiveButtonComponentProps = ComponentProps<typeof PrimitiveButton>;

export type PrimitiveButtonProps =
  & PrimitiveButtonComponentProps
  & ComponentPropsWithoutRef<"button">;