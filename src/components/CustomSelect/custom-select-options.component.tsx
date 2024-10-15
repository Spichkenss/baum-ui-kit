import { SelectOption } from "../Select"
import { SelectOptionClickHandler } from "./custom-select.types";
import styles from "./custom-select-options.module.scss";
import { PrimitiveComponent, PrimitiveProps } from "../PrimitiveComponent";

type CustomSelectOptionsProps = PrimitiveProps & {
  options: SelectOption[];
  onOptionClick: SelectOptionClickHandler;
}

export const CustomSelectOptions = ({
  options,
  onOptionClick,
  fullWidth
}: CustomSelectOptionsProps) => {

  return (
    <PrimitiveComponent
      as="div"
      role="combobox"
      className={styles["Custom-Select-Options__Root"]}
      fullWidth={fullWidth}
    >
      {options.length > 0
        ?
        options.map(({ label, value, disabled }) => (
          <div
            role="option"
            key={value}
            aria-disabled={disabled}
            onClick={onOptionClick}
            className={styles["Custom-Select-Options__Item"]}
          >
            {label}
          </div>
        ))
        :
        <div
          className={styles["Custom-Select-Options__Empty"]}
        >
          Ничего не найдено
        </div>
      }
    </PrimitiveComponent>
  )
}