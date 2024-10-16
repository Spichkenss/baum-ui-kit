import styles from "./select-option.module.scss"
import { classnames } from "../../lib";
import { PrimitiveComponent } from "../PrimitiveComponent";
import type {
  SelectOption as TSelectOption,
  SelectRenderOptionFnExtraArgs
} from "./select.types";

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
    <PrimitiveComponent
      key={value}
      as='div'
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
    </PrimitiveComponent>
  )
}