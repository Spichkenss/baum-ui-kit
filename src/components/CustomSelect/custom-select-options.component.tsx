import type { PrimitiveProps } from "@components/PrimitiveComponent";
import type { SelectOption } from "@components/Select";
import { PrimitiveDiv } from "@components/Primitives/Div";

import styles from "./custom-select-options.module.scss";

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
    <PrimitiveDiv
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
    </PrimitiveDiv>
  )
}