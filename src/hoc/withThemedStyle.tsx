import { theme, type ThemeFn } from "@lib/consts/theme";

type WithCustomStyle = {
  style?: React.CSSProperties | ThemeFn;
}

export type WithThemedStyleProps<TProps extends object> =
  Omit<TProps, "style"> & WithCustomStyle;

export const withThemedStyle = <TProps extends object>(
  WrappedComponent: React.ComponentType<TProps>
): React.ComponentType<WithThemedStyleProps<TProps>> => {
  return (props: WithThemedStyleProps<TProps>) => {
    const { style, ...rest } = props;

    const finalStyle: React.CSSProperties =
      typeof style === "function" ? style(theme) : style || {};

    return <WrappedComponent {...(rest as TProps)} style={finalStyle} />
  }
}