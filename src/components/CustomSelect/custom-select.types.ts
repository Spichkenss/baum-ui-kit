
export type NativeSelectChangeHandler
  = React.ChangeEventHandler<HTMLSelectElement>;

export type NativeSelectValue
  = React.SelectHTMLAttributes<HTMLSelectElement>["value"];

export type SelectOptionFn = (index: number) => void;

export type SelectSearchEventHandler
  = React.ChangeEventHandler<HTMLInputElement>;