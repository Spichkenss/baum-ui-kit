import type { SelectOption, SelectProps } from "../Select";
import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import { ControlComponent } from "../ControlComponent";
import { Conditional } from "../Conditional";
import { VisuallyHidden } from "../VisuallyHidden";
import { NativeSelect } from "../NativeSelect";
import { CustomSelectOptions } from "./custom-select-options.component";
import {
  NativeSelectChangeHandler,
  NativeSelectValue,
  SelectOptionClickHandler,
  SelectOptionFn,
  SelectSearchEventHandler
} from "./custom-select.types";
import { CustomSelectValue } from "./custom-select-value.component";
import { useIsomorphicLayoutEffect } from "../../lib";
import styles from "./custom-select.module.scss";
import { UnstyledInput } from "../UnstyledInput";

const findSelectedIndex = (
  options: SelectOption[],
  value: NativeSelectValue,
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
  defaultValue,
  placeholder,
  fullWidth,
  prefix,
  onClose,
  onOpen,
  searchable = false,
  ...rest
}: SelectProps) => {
  const nativeSelectRef = useRef<HTMLSelectElement>(null);

  const [isOptionsListOpened, setIsOptionsListOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [nativeSelectValue, setNativeSelectValue] = useState(
    () => value ?? defaultValue
  );

  const isControlledOutside = value !== undefined;

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
    setNativeSelectValue(nativeSelectValue => value ?? nativeSelectValue);
  }, [value]);

  useEffect(()=> {
    const newValue = value ?? nativeSelectValue ?? defaultValue;

    setSelectedOptionIndex(findSelectedIndex(options, newValue));
  },   [nativeSelectValue, defaultValue, value, options]);

  useIsomorphicLayoutEffect(() => {
    if (
      isOptionsArrayHasSomeNativeSelectValue ||
      nativeSelectValue !== ""
    ) {
      dispatchNativeSelectChangeEvent();
    }
  }, [nativeSelectValue]);

  const dispatchNativeSelectChangeEvent = () => {
    const event = new Event("change", { bubbles: true });
    nativeSelectRef.current?.dispatchEvent(event);
  }

  const closeOptionsList = useCallback(() => {
    setIsOptionsListOpened(false);
    onClose?.();
  }, [onClose])

  const openOptionsList = () => {
    setIsOptionsListOpened(true);
    onOpen?.();
  }

  const selectOption: SelectOptionFn = useCallback((index) => {
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

    if (searchable) {
      setInputValue(item?.label.toString());
    }
  }, [
    closeOptionsList,
    isControlledOutside,
    nativeSelectValue,
    options,
    searchable,
    value
  ]);

  const handleNativeSelectValueChange: NativeSelectChangeHandler = useCallback((
    event
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

  const handleOptionClick: SelectOptionClickHandler = useCallback(
    (event) => {
      event?.stopPropagation();

      const index = Array.prototype.indexOf.call(
        event.currentTarget.parentNode?.children,
        event.currentTarget,
      );

      const option = options[index];

      if (option && !option.disabled) {
        selectOption(index);
      }
    }, [options, selectOption])

  const handleSearchWithinOptions: SelectSearchEventHandler = (event) => {
    setInputValue(event.target.value);
  }

  const filteredOptionsByInputValue = useMemo(() => {
    if (!searchable || inputValue === "") return options;

    return options.filter(({ label }) => {
      return label
        .toString()
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    })
  }, [inputValue, options, searchable]);

  const handleSearchableSelectKeyDown:
    React.KeyboardEventHandler<HTMLInputElement> = (event) => {
      const { key } = event;
      if (
        key === "ArrowLeft" ||
        key === "ArrowRight" ||
        key === "Home" ||
        key === "End"
      )
        event.preventDefault()
    }

  const handleFocusSearchableSelect:
    React.FocusEventHandler<HTMLInputElement> = (event) => {
      const tmp = event.target.value;
      event.target.value = "";
      event.target.value = tmp;
    }

  return (
    <Fragment>
      <ControlComponent
        fullWidth={fullWidth}
        onClick={openOptionsList}
        className={styles["Custom-Select__Root"]}
        {...rest}
      >
        {
          searchable
            ?
            <UnstyledInput
              value={inputValue}
              placeholder={placeholder}
              onChange={handleSearchWithinOptions}
              onKeyDown={handleSearchableSelectKeyDown}
              onFocus={handleFocusSearchableSelect}
            />
            :
            <CustomSelectValue
              prefix={prefix}
              value={selectedOption?.label}
              placeholder={placeholder}
            />
        }
        <Conditional condition={isOptionsListOpened}>
          <CustomSelectOptions
            options={filteredOptionsByInputValue}
            onOptionClick={handleOptionClick}
            fullWidth={fullWidth}
          />
        </Conditional>
      </ControlComponent>
      <VisuallyHidden>
        <NativeSelect
          options={filteredOptionsByInputValue}
          value={nativeSelectValue}
          onChange={handleNativeSelectValueChange}
          ref={nativeSelectRef}
        />
      </VisuallyHidden>
    </Fragment>
  )
}