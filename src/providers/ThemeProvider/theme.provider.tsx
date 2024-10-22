import type { Theme } from "@lib/consts/theme";
import { createContext } from "@lib/utils";
import { useMemo } from "react";

type ThemeProviderProps = {
   children?: React.ReactNode;
   theme: Theme;
}

const [
  ThemeContext,
  useThemeProvider
] = createContext<Omit<ThemeProviderProps, "children">>();

ThemeContext.displayName = "ThemeContext";

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const memoizedContextValue = useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeContext.Provider value={memoizedContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useThemeProvider }