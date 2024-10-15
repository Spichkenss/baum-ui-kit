import { classnames } from "../../lib";
import { SelectOption } from "../Select";
import styles from "./custom-select-value.module.scss"

type CustomSelectValueProps = {
  value?: SelectOption["label"];
  placeholder?: string;
  prefix?: string;
  fixed?: boolean;
}

export const CustomSelectValue = ({
  value,
  placeholder,
  prefix,
  fixed
}: CustomSelectValueProps) => {
  return (
    <div className={classnames(
      styles["Custom-Select-Value__Root"],
      {
        [styles["Fixed"]]: fixed
      },
    )}
    >
      <span
        className={classnames(
          styles["Custom-Select-Value__Prefix"],
          {
            [styles["Muted"]]: !value,
          },
        )}
      >
        {prefix}
      </span>
      <span className={styles["Custom-Select-Value__Selected-Value"]}>
        {value ?? placeholder ?? ""}
      </span>
    </div>
  )
}