import { createPrimitiveComponent } from "../../PrimitiveComponent";

type ButtonTag = "button" | "a";

export const PrimitiveButton = createPrimitiveComponent<ButtonTag>("button");

type PrimitiveButtonComponentProps =
  React.ComponentProps<typeof PrimitiveButton>;

export type PrimitiveButtonProps =
  & PrimitiveButtonComponentProps
  & React.ComponentPropsWithoutRef<"button">;