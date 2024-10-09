import type { SelectOption, SelectProps } from "../Select";
import {
  type MouseEventHandler,
  useState,
  Fragment,
  useMemo,
  type ChangeEvent,
  useRef,
  useEffect,
  type SelectHTMLAttributes, useCallback,
} from "react";
import { ControlComponent } from "../ControlComponent";
import { Conditional } from "../Conditional";
import { useIsomorphicLayoutEffect } from "../../lib";
import { VisuallyHidden } from "../VisuallyHidden";
import { NativeSelect } from "../NativeSelect";

const findSelectedIndex = (
  options: SelectOption[],
  value: SelectHTMLAttributes<HTMLSelectElement>["value"]
) => {
  if (value === "") {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === "number" ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

export const CustomSelect = ({
  options = [],
  onChange,
  value,
  defaultValue = "",
  placeholder,
  fullWidth,
}: SelectProps) => {
  const nativeSelectRef = useRef<HTMLSelectElement>(null);

  const [isControlledOutside, setIsControlledOutside] = useState(
    value !== undefined
  );
  const [isOptionsListOpened, setIsOptionsListOpened] = useState(false);

  const [nativeSelectValue, setNativeSelectValue] = useState(
    () => value ?? defaultValue
  );

  const [
    selectedOptionIndex,
    setSelectedOptionIndex
  ] = useState<number | undefined>(
    findSelectedIndex(options, value ?? defaultValue),
  );

  const isOptionsArrayHasSomeNativeSelectValue = options.some(
    ({ value }) => nativeSelectValue === value
  )

  const selectedOption = useMemo(() => {
    if (!options.length) return null;

    return selectedOptionIndex !== undefined
      ? options[selectedOptionIndex]
      : undefined;
  }, [options, selectedOptionIndex])

  useEffect(() => {
    setIsControlledOutside(value !== undefined);
    setNativeSelectValue(nativeSelectValue => value ?? nativeSelectValue);
  }, [value]);

  useEffect(()=> {
    const newValue = value ?? nativeSelectValue ?? defaultValue;

    setSelectedOptionIndex(findSelectedIndex(options, newValue));
  },   [nativeSelectValue, defaultValue, value, options]);

  useIsomorphicLayoutEffect(() => {
    if (
      isOptionsArrayHasSomeNativeSelectValue ||
      nativeSelectValue === ""
    ) {
      dispatchNativeSelectChangeEvent();
    }
  }, [nativeSelectValue]);

  const dispatchNativeSelectChangeEvent = () => {
    const event = new Event("change", { bubbles: true });
    nativeSelectRef.current?.dispatchEvent(event);
  }

  const closeOptionsList = () => {
    setIsOptionsListOpened(false);
  }

  const openOptionsList = () => {
    setIsOptionsListOpened(true);
  }

  const selectOption = useCallback((index: number) => {
    const item = options[index];

    setNativeSelectValue(item?.value);
    closeOptionsList();

    const shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync =
      isControlledOutside &&
      value !== nativeSelectValue &&
      nativeSelectValue === item?.value;

    if (shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync) {
      dispatchNativeSelectChangeEvent();
    }
  }, [isControlledOutside, nativeSelectValue, options, value]);

  const handleNativeSelectValueChange = useCallback((
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelectedOptionIndex = findSelectedIndex(
      options,
      event.currentTarget.value,
    );

    if (selectedOptionIndex !== newSelectedOptionIndex) {
      if (!isControlledOutside) {
        setSelectedOptionIndex(newSelectedOptionIndex);
      }
      onChange?.(event);
    }
  }, [isControlledOutside, onChange, options, selectedOptionIndex])

  const handleOptionClick: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      const index = Array.prototype.indexOf.call(
        event.currentTarget.parentNode?.children,
        event.currentTarget,
      );
      const option = options[index];

      if (option && !option.disabled) {
        selectOption(index);
      }
    }, [options, selectOption])

  return (
    <Fragment>
      <VisuallyHidden>
        <NativeSelect
          options={options}
          value={nativeSelectValue}
          onChange={handleNativeSelectValueChange}
          ref={nativeSelectRef}
        />
      </VisuallyHidden>
      <ControlComponent
        fullWidth={fullWidth}
        onClick={openOptionsList}
      >
        {
          selectedOption
            ? selectedOption.label
            : placeholder
        }
      </ControlComponent>
      <Conditional condition={isOptionsListOpened}>
        <ul>
          {options.map(({ label, value }) => (
            <li
              key={value?.toString()}
              onClick={handleOptionClick}
              style={{
                color: "red",
                marginBottom: 10
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </Conditional>
    </Fragment>
  )
}