import { spacings, type Spacing as TSpacing } from "@lib/consts/spacings";

import styles from "./spacing.module.scss";
import { classnames } from "@lib/classnames";

type SpacingProps = {
  size: TSpacing | number;
};

export const Spacing = ({ size }: SpacingProps) => {
  const isNumber = !Number.isNaN(size);

  return (
    <div
      className={classnames(
        styles["Spacing__Root"],
        spacings[size as TSpacing]
      )}
      style={
        {
          marginBottom: isNumber
            ? size
            : undefined
        }
      }
    />
  );
};
