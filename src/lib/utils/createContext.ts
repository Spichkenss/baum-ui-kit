import React from "react";

type CreateContextReturnType<TContextValue> = [
  React.Context<TContextValue | null>,
  () => TContextValue
]

export const createContext = <TContextValue extends object>(
  defaultValue?: TContextValue
): CreateContextReturnType<TContextValue> => {
  const Context = React.createContext<TContextValue | null>(
    defaultValue ?? null
  );

  const useContext = () => {
    const ctx = React.useContext(Context);

    const { displayName } = Context;

    if (!ctx)
      throw Error(
        `${displayName} must be used within the ${displayName}Provider`
      );

    return ctx;
  }

  return [Context, useContext];
}