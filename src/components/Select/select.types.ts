import type {
  ChangeEvent,
  ReactElement
} from "react";
import type { PrimitiveProps } from "../PrimitiveComponent";
import { ControlComponentProps } from "../ControlComponent";

export type SelectOption = {
    label: string | ReactElement;
    value: string;
    disabled?: boolean;
}

export type SelectProps = ControlComponentProps & PrimitiveProps & {
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    onOpen?: () => void;
    onClose?: () => void;
    placeholder?: string;
    prefix?: string;
    searchable?: boolean;
};

export type SelectChangeHandler = (value: string) => void;