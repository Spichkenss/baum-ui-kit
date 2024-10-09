import { Fragment, ReactNode } from "react";

type ConditionalProps = {
    condition: boolean;
    children: ReactNode;
    fallback?: ReactNode | null;
}

export const Conditional = ({
  condition,
  children,
  fallback = null,
}: ConditionalProps) => {
  if (!condition) return <Fragment>{fallback}</Fragment>;

  return <Fragment>{children}</Fragment>
}