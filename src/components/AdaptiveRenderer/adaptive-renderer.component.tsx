import { Fragment, ReactNode, useCallback } from "react";

import { ScreenType } from "@lib/consts/screens";
import { useCurrentBreakpoint } from "@hooks/useCurrentBreakpoint";

type TAdaptiveComponentProps = {
  useMinBreakpoint?: boolean;
} & {
  [key in ScreenType]?: ReactNode | null;
};

const breakpointOrder: ScreenType[] = ["phone", "tablet", "desktop", "wide"];

export const AdaptiveRenderer = ({
  useMinBreakpoint = false,
  ...components
}: TAdaptiveComponentProps) => {
  const currentBreakpoint = useCurrentBreakpoint();

  const getComponent = useCallback(() => {
    if (useMinBreakpoint) {
      if (components[currentBreakpoint])
        return components[currentBreakpoint];

      let resultComponent = null;

      for (let i = breakpointOrder.indexOf(currentBreakpoint); i >= 0; i--) {
        if (!components[breakpointOrder[i]]) continue;
        resultComponent = components[breakpointOrder[i]];
        return resultComponent;
      }

      if (!resultComponent) return Object.values(components)[0];
      return resultComponent;
    } else {
      const currentIndex = breakpointOrder.indexOf(currentBreakpoint);
      for (let i = currentIndex; i < breakpointOrder.length; i++) {
        const breakpoint = breakpointOrder[i];
        if (components[breakpoint]) {
          return components[breakpoint];
        }
      }
    }

    return null;
  }, [currentBreakpoint, components, useMinBreakpoint]);

  return <Fragment>{getComponent()}</Fragment>;
};
