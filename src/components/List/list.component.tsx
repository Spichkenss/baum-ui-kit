import { Fragment } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export const List = <T,>(
  {
    items,
    renderItem
  }: ListProps<T>
) => {
  return (
    <Fragment>
      {items.map((item, index) => renderItem(item, index))}
    </Fragment>
  )
}