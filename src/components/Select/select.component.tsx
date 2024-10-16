import { CustomSelect } from "../CustomSelect";
import type { SelectProps } from "./select.types";
import { useState } from "react";
import { SelectOption } from "./select-option.component";

export const Select = ({ options = [], ...rest }: SelectProps) => {
  const [selected, setSelected] = useState("");

  return (
    <CustomSelect
      options={options}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      renderOption={(option, _, extraArgs) => {
        return (
          <SelectOption
            key={`${option.label}-${option.value}`}
            option={option}
            extraArgs={extraArgs}
          />
        )}}
      {...rest}
    />
  )
}
