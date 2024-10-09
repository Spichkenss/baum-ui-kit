import { CustomSelect } from "../CustomSelect";
import type { SelectProps } from "./select.types";
import { useState } from "react";

export const Select = ({ options = [], ...rest }: SelectProps) => {
  const [selected, setSelected] = useState("");

  return (
    <CustomSelect
      options={options}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      {...rest}
    />
  )
}
