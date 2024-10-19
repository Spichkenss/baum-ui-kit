import { classnames } from "@lib/classnames";
import { PrimitiveDiv } from "@components/Primitives/Div";

import type {
  SelectOption as TSelectOption,
  SelectRenderOptionFnExtraArgs
} from "./select.types";

import styles from "./select-option.module.scss";

type SelectOptionProps = {
  option: TSelectOption;
  extraArgs?: SelectRenderOptionFnExtraArgs;
};

export const SelectOption = ({
  option,
  extraArgs,
  ...rest
}: SelectOptionProps) => {
  const {
    value,
    disabled,
    label,
  } = option;

  const {
    onOptionClick,
    className,
    isFocused,
  } = extraArgs ?? {};

  return (
    <PrimitiveDiv
      key={value}
      role="option"
      fullWidth={true}
      aria-disabled={disabled}
      onClick={onOptionClick}
      className={classnames(
        styles["Select-Item__Root"],
        className,
        {
          [styles["Focused"]]: isFocused,
        }
      )}
      {...rest}
    >
      {label}
    </PrimitiveDiv>
  )
}