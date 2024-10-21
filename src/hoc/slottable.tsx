import { Slot } from "@components/Slot";

export type WithSlottableProps<TProps extends object> =
  & Record<string, unknown>
  & TProps
  &
  {
    asChild?: boolean;
  }

export const slottable = <TProps extends object>(
  Component: React.ComponentType<WithSlottableProps<TProps>>,
) => {
  return (
    props: React.PropsWithChildren<WithSlottableProps<TProps>>
  ) => {
    const { asChild, ...rest } = props;

    if (asChild) {
      return (
        <Slot {...rest} />
      )
    }

    return <Component {...props} />
  }
}