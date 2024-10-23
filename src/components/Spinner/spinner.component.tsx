import { classnames } from "@lib/classnames";
import { stringToColor } from "@helpers/stringToColor";

import { SpinnerSize, spinnerSizeStyles } from "./spinner.consts";

import styles from "./spinner.module.scss";

export type SpinnerProps = {
  size?: SpinnerSize;
  color?: string; // TODO расширить типом цветов объекта темы
};

export const Spinner = ({ size = "md", color }: SpinnerProps) => {
  const style = {
    "--spinner-color": stringToColor(color),
  } as React.CSSProperties;

  return (
    <span
      className={classnames(
        styles["Spinner__Root"],
        spinnerSizeStyles[size]
      )}
      style={style}
    />
  );
};
