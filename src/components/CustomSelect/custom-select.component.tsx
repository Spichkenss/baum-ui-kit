import type {
  SelectOption,
  SelectOptionClickHandler,
  SelectProps,
} from "../Select";
import {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import {
  ControlComponent,
} from "../ControlComponent";
import { Conditional } from "../Conditional";
import { VisuallyHidden } from "../VisuallyHidden";
import { NativeSelect } from "../NativeSelect";
import { CustomSelectOptions } from "./custom-select-options.component";
import {
  NativeSelectChangeHandler,
  NativeSelectValue,
  SelectOptionFn,
  SelectSearchEventHandler
} from "./custom-select.types";
import { CustomSelectValue } from "./custom-select-value.component";
import { classnames, useIsomorphicLayoutEffect } from "../../lib";
import styles from "./custom-select.module.scss";
import { UnstyledInput } from "../UnstyledInput";
import { useSuperKeyDown } from "../../lib/hooks";

const findSelectedIndex = (
  options: SelectOption[],
  value: NativeSelectValue,
) => {
  if (value === "") {
    return -1;
  }
  return (
    options.findIndex((item) => {
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
  renderOption: renderOptionProp,
  ...rest
}: SelectProps) => {
  /*
   * Ссылка на натинвый селект
   * для привязки его функционала к кастомному компоненту
   */
  const nativeSelectRef = useRef<HTMLSelectElement>(null);

  /* Индекс опции, которая станет значением селекта при нажатии на Enter */
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);

  /* Состояние видимости списка опций */
  const [isOptionsListOpened, setIsOptionsListOpened] = useState(false);

  /* Значение инпута для фильтрации списка опций при `searchable` ==  true */
  const [inputValue, setInputValue] = useState("");

  /* Значение нативного селектка */
  const [nativeSelectValue, setNativeSelectValue] = useState(
    () => value ?? defaultValue
  );

  /* Переменная для отслеживания управления снаружи */
  const isControlledOutside = value !== undefined;

  /* Индекс выбранной опции */
  const [
    selectedOptionIndex,
    setSelectedOptionIndex
  ] = useState<number | undefined>(
    findSelectedIndex(options, value ?? defaultValue),
  );

  const isOptionsArrayHasSomeNativeSelectValue = options.some(
    ({ value }) => nativeSelectValue === value
  )

  /* Функция фильтрации опций по строке ввода при `searchable` ==  true */
  const filteredOptionsByInputValue = useMemo(() => {
    if (!searchable || inputValue === "") return options;

    return options.filter(({ label }) => {
      return label
        .toString()
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    })
  }, [inputValue, options, searchable]);

  /* Объект выбранной опции */
  const selectedOption = useMemo(() => {
    if (!filteredOptionsByInputValue.length) return null;

    return selectedOptionIndex !== undefined
      ? filteredOptionsByInputValue[selectedOptionIndex]
      : undefined;
  }, [filteredOptionsByInputValue, selectedOptionIndex])

  useEffect(() => {
    setNativeSelectValue(nativeSelectValue => value ?? nativeSelectValue);
  }, [value]);

  useEffect(()=> {
    setSelectedOptionIndex(
      findSelectedIndex(filteredOptionsByInputValue, nativeSelectValue)
    );
  },   [filteredOptionsByInputValue, nativeSelectValue]);

  useIsomorphicLayoutEffect(() => {
    if (
      isOptionsArrayHasSomeNativeSelectValue ||
      nativeSelectValue !== ""
    ) {
      dispatchNativeSelectChangeEvent();
    }
  }, [nativeSelectValue]);

  /* Функция создания события при смене значения кастомного селекта */
  const dispatchNativeSelectChangeEvent = () => {
    const event = new Event("change", { bubbles: true });
    nativeSelectRef.current?.dispatchEvent(event);
  }

  /* Функция обнуления значения индекса опции с фокусом */
  const resetFocusedOption = () => {
    setFocusedOptionIndex(-1);
  }

  /* Функция закрытия меню опций */
  const closeOptionsList = useCallback(() => {
    setIsOptionsListOpened(false);
    onClose?.();
  }, [onClose])

  /* Функция открытия меню опций */
  const openOptionsList = () => {
    setIsOptionsListOpened(true);
    onOpen?.();
  }

  /* Функция установки активной опции */
  const selectOption: SelectOptionFn = useCallback((index) => {
    const item = filteredOptionsByInputValue[index];

    setNativeSelectValue(item?.value);
    closeOptionsList();
    resetFocusedOption();

    /* Условие для отстрела события изменения значения селекта */
    const shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync =
      isControlledOutside &&
      value !== nativeSelectValue &&
      nativeSelectValue === item?.value;

    if (shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync) {
      dispatchNativeSelectChangeEvent();
    }

    if (searchable) {
      setInputValue("");
    }
  }, [
    closeOptionsList,
    filteredOptionsByInputValue,
    isControlledOutside,
    nativeSelectValue,
    searchable,
    value
  ]);

  /* Обработчик изменения значения нативного селекта.
  *  Запускается при отстреле события функцией `dispatchNativeSelectChangeEvent`
  */
  const handleNativeSelectValueChange: NativeSelectChangeHandler = useCallback((
    event
  ) => {
    const newSelectedOptionIndex = findSelectedIndex(
      filteredOptionsByInputValue,
      event.currentTarget.value,
    );

    if (selectedOptionIndex !== newSelectedOptionIndex) {
      if (!isControlledOutside) {
        setSelectedOptionIndex(newSelectedOptionIndex);
      }
      onChange?.(event);
    }
  }, [
    filteredOptionsByInputValue,
    isControlledOutside,
    onChange,
    selectedOptionIndex
  ])

  /* Обработчик клика мышью по опции */
  const handleOptionClick: SelectOptionClickHandler = useCallback(
    (event) => {
      event?.stopPropagation();

      const index = Array.prototype.indexOf.call(
        event.currentTarget.parentNode?.children,
        event.currentTarget,
      );

      const option = filteredOptionsByInputValue[index];

      if (option && !option.disabled) {
        selectOption(index);
      }
    }, [filteredOptionsByInputValue, selectOption])

  /* Обработчик изменения инпута при `searchable` == true.
  *  Нужен для создания строки для фильтрации списка опций
  */
  const handleSearchWithinOptionsInputChange:
    SelectSearchEventHandler = (event) => {
      if (!isOptionsListOpened) {
        openOptionsList();
      }
      resetFocusedOption();
      setInputValue(event.target.value);
    }

  /* Функция переключения на следующую\предыдущую опцию */
  const focusOption = (dir: "next" | "prev") => {
    const step = dir === "prev" ? -1 : 1;
    setFocusedOptionIndex(prev =>
      (prev + step) % filteredOptionsByInputValue.length
    );
  }

  /* Функция, которая вызывается при клике за пределами компонента */
  const onBlur = () => {
    closeOptionsList();
  }

  /* Обработчики нажатий */
  useSuperKeyDown({
    "Escape": closeOptionsList,
    "ArrowDown": (event) => {
      event.preventDefault();
      if (!isOptionsListOpened) {
        openOptionsList();
      }
      focusOption("next")
    },
    "ArrowUp": (event) => {
      event.preventDefault();
      if (!isOptionsListOpened) {
        openOptionsList();
      }
      focusOption("prev")
    },
    "Enter": () => {
      if (!isOptionsListOpened) {
        openOptionsList();
        return;
      }
      selectOption(focusedOptionIndex);
    },

  })

  /* Функция для создания react-компонента опций */
  const renderOption = (item: SelectOption, index: number) => {
    const isFocused = index === focusedOptionIndex;

    if (!renderOptionProp) return null;

    return renderOptionProp(
      {
        ...item,
      },
      index,
      {
        fullWidth,
        onOptionClick: handleOptionClick,
        isFocused,
      }
    )
  }

  return (
    <Fragment>
      <ControlComponent
        fullWidth={fullWidth}
        className={styles["Custom-Select__Root"]}
        onClick={openOptionsList}
        onBlur={onBlur}
        {...rest}
      >
        {
          searchable
            ?
            <UnstyledInput
              value={inputValue}
              placeholder={
                selectedOption
                  ? selectedOption.label.toString()
                  : placeholder
              }
              onChange={handleSearchWithinOptionsInputChange}
              className={classnames(
                styles["Custom-Select_Search-Input"],
                {
                  [styles["Selected"]]: !!selectedOption
                }
              )}
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
            fullWidth={fullWidth}
            renderOption={renderOption}
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