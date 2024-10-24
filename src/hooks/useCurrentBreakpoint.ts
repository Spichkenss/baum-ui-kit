import { useEffect, useState } from "react";

import { type ScreenType, screenWidth } from "@lib/consts/screens";

const getMatchingScreen = (): ScreenType => {
  const entry = Object.entries(screenWidth).find(
    ([, mediaQuery]) => window.matchMedia(`(${mediaQuery})`).matches
  );

  return (entry ? entry[0] : "wide") as ScreenType;
};

export const useCurrentBreakpoint = (): ScreenType => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<ScreenType>(() => {
    return getMatchingScreen();
  });

  useEffect(() => {
    const mediaQueryLists = Object.entries(screenWidth).map(([key, value]) => ({
      breakpoint: key as ScreenType,
      mql: window.matchMedia(`(${value})`),
    }));

    const handleBreakpointChange = () => {
      const matching = getMatchingScreen();
      if (matching !== currentBreakpoint) {
        setCurrentBreakpoint(matching);
      }
    };

    mediaQueryLists.forEach(({ mql }) =>
      mql.addEventListener("change", handleBreakpointChange)
    );

    return () => {
      mediaQueryLists.forEach(({ mql }) =>
        mql.removeEventListener("change", handleBreakpointChange)
      );
    };
  }, [currentBreakpoint]);

  return currentBreakpoint;
};
