import type {
  ChangeEvent,
  ReactElement
} from "react";
import type { PrimitiveProps } from "../PrimitiveComponent";

export type SelectOption = {
    label: string | ReactElement;
    value: string;
    disabled?: boolean;
}

export type SelectProps = & PrimitiveProps & {
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    onOpen?: () => void;
    onClose?: () => void;
    placeholder?: string;
};

export type SelectChangeHandler = (value: string) => void;