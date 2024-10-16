import { SelectOption } from "../Select"
import styles from "./custom-select-options.module.scss";
import { PrimitiveComponent, PrimitiveProps } from "../PrimitiveComponent";

type CustomSelectOptionsProps = PrimitiveProps & {
  options: SelectOption[];
  renderOption: (item: SelectOption, index: number) => React.ReactNode;
}

export const CustomSelectOptions = ({
  options,
  fullWidth,
  renderOption,
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
        options.map((item, index) => renderOption(item, index))
        :
        <div className={styles["Custom-Select-Options__Empty"]}>
          Ничего не найдено
        </div>
      }
    </PrimitiveComponent>
  )
}