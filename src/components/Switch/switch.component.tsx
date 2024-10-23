import { forwardRef } from "react";

import { useControllableState } from "@hooks/useControllableState";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { classnames } from "@lib/classnames";
import { Conditional } from "@components/Conditional";

import styles from "./switch.module.scss";

export type SwitchProps =
  & React.ComponentPropsWithoutRef<"input">
  &
  {
    label?: string;
  };

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>((
  {
    checked: checkedProp,
    defaultChecked: defaultCheckedProp = false,
    onChange: onChangeProp,
    className: classNameProp,
    label,
    disabled,
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
        styles["Switch__Root"],
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
        />
      </VisuallyHidden>
      <div
        aria-checked={checked}
        aria-disabled={disabled}
        className={classnames(
          styles["Switch__Thumb"],
          {
            [styles["Disabled"]]: disabled,
            [styles["Checked"]]: checked
          }
        )}
      />
      <Conditional condition={!!label}>
        <span
          className={classnames(
            styles["Switch__Label"],
            {
              [styles["Disabled"]]: disabled,
            }
          )}
        >
          {label}
        </span>
      </Conditional>
    </label>
  )
});

Switch.displayName = "Switch";