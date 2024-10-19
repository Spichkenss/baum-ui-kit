export type WithPolymorphProps<TProps extends object> =
  & TProps
  &
  {
    as?: React.ElementType
  };

export const withPolymorphism =
  <TProps extends object>(
    Component: React.ComponentType<TProps>
  ): React.ComponentType<WithPolymorphProps<TProps>> => {
    return (props: WithPolymorphProps<TProps>) => (
      <Component {...props} />
    );
  }