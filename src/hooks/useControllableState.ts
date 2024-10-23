import { useCallback, useState } from "react";

type UseControllableStateChangeCallback<T> = (newState: T) => void;

type UseControllableStateProps<T> = {
  value?: T;
  defaultValue: T | (() => T);
  onChange?: UseControllableStateChangeCallback<T>;
};

type UseControllableStateReturnType<T> =
  [T, UseControllableStateChangeCallback<T>]

export const useControllableState = <T>({
  value,
  defaultValue,
  onChange
}: UseControllableStateProps<T>): UseControllableStateReturnType<T> => {
  const [internalState, setInternalState] = useState<T>(
    () => typeof defaultValue === "function"
      ? (defaultValue as () => T)()
      : defaultValue
  );

  const isControlledOutside = value !== undefined;

  const setState = useCallback((newState: T) => {
    if (isControlledOutside) {
      onChange?.(newState);
    } else {
      setInternalState(newState);
    }
  }, [isControlledOutside, onChange]);

  const currentState =
    value !== undefined
      ? value
      : internalState;


  return [currentState, setState];
}