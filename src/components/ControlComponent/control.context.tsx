import { createContext, useContext } from "react";

type ControlComponentContextValue = {
  isRootFocused: boolean;
}

const ControlComponentContext = createContext<
  ControlComponentContextValue | null
>(null);

type ControlComponentContextProviderProps = {
  children: React.ReactNode;
} & ControlComponentContextValue;

export const ControlComponentContextProvider = ({
  children,
  isRootFocused
}: ControlComponentContextProviderProps) => {

  return (
    <ControlComponentContext.Provider value={{ isRootFocused }}>
      {children}
    </ControlComponentContext.Provider>
  );
};

export const useControlComponentContext = () => {
  const ctx = useContext(ControlComponentContext);
  if (!ctx)
    throw Error(
      "Hook useControlComponentContext " +
      "must be used within ControlComponentContextProvider"
    );
  return ctx;
};