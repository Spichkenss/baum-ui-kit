import { type ComponentPropsWithoutRef, forwardRef } from "react";
import type { SelectOption } from "../Select";

type NativeSelectProps = ComponentPropsWithoutRef<"select"> & {
    options: SelectOption[];
};

export const NativeSelect = forwardRef<
    HTMLSelectElement,
    NativeSelectProps
>(({ options, ...rest }, ref) => {
  return (
    <select ref={ref} {...rest}>
      {options.map(({ value, label }) => (
        <option
          key={value?.toString()}
          value={value}
        >
          {label}
        </option>
      ))}
    </select>
  )
})

NativeSelect.displayName = "NativeSelect";