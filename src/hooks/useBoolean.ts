import { useState } from "react";

type UseBooleanSetter = () => void;

type UseBooleanReturnType = [
  boolean, {
    setTrue: UseBooleanSetter;
    setFalse: UseBooleanSetter;
    toggle: UseBooleanSetter;
  }];

export const useBoolean = (
  initialValue: boolean = false
): UseBooleanReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(prev => !prev);

  return [value, { setTrue, setFalse, toggle }];
}