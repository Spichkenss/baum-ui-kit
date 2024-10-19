import type { WithPrimitiveProps } from "@components/PrimitiveComponent";
import type { ControlComponentProps } from "@components/ControlComponent";

export type SelectOptionClickHandler = React.MouseEventHandler<HTMLElement>;

export type SelectOption = {
    label: string | React.ReactElement;
    value: string;
    disabled?: boolean;
}

export type SelectRenderOptionFnExtraArgs = WithPrimitiveProps<{
    isFocused: boolean;
    onOptionClick: SelectOptionClickHandler;
}>;

export type SelectRenderOptionFn = (
  props: SelectOption,
  index: number,
  extraArgs?: SelectRenderOptionFnExtraArgs,
) => React.ReactNode;

export type SelectProps = WithPrimitiveProps<{
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    onOpen?: () => void;
    onClose?: () => void;
    placeholder?: string;
    prefix?: string;
    searchable?: boolean;
    renderOption?: SelectRenderOptionFn;
}> & ControlComponentProps;

export type SelectChangeHandler = (value: string) => void;