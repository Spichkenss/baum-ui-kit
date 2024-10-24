import { Spacing } from "@lib/consts/spacings";

export type FlexContainerProperties = {
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  direction?: React.CSSProperties["flexDirection"];
  gap?: Spacing;
  wrap?: React.CSSProperties["flexWrap"];
}