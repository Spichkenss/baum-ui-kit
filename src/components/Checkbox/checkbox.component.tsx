import { forwardRef } from "react";

import { VisuallyHidden } from "@components/VisuallyHidden";
import { useControllableState } from "@hooks/useControllableState";
import { classnames } from "@lib/classnames";
import { Conditional } from "@components/Conditional";

import { type CheckboxSize, checkboxSizeStyles } from "./checkbox.consts";

import styles from "./checkbox.module.scss";

export type CheckboxProps =
  & Omit<React.ComponentPropsWithoutRef<"input">, "size">
  &
  {
    label?: string;
    indeterminate?: boolean;
    size?: CheckboxSize;
  }

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>((
  {
    checked: checkedProp,
    defaultChecked: defaultCheckedProp = false,
    onChange: onChangeProp,
    className: classNameProp,
    disabled,
    label,
    size = "sm",
    indeterminate = false,
  },
  ref
) => {
  const [checked, setChecked] = useControllableState<boolean>({
    value: checkedProp,
    defaultValue: defaultCheckedProp,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.currentTarget.checked);
    onChangeProp?.(event);
  }

  return (
    <label
      className={classnames(
        styles["Checkbox__Root"],
        classNameProp
      )}
    >
      <VisuallyHidden>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={styles["Host"]}
        />
      </VisuallyHidden>
      <div className={classnames(
        styles["Checkbox__Thumb"],
        checkboxSizeStyles[size],
        {
          [styles["Indeterminate"]]: indeterminate
        }
      )}
      />
      <Conditional condition={!!label}>
        <span
          className={classnames(
            styles["Checkbox__Label"]
          )}
        >
          {label}
        </span>
      </Conditional>
    </label>
  )
})

Checkbox.displayName = "Checkbox";
