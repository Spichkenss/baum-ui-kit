import { Flex } from "@components/Flex";
import { FlexContainerProperties } from "@components/Flex";

import styles from "./grid-layout.module.scss";

type GridLayoutProps = FlexContainerProperties & {
  columns: number;
  children: React.ReactNode;
}

export const GridLayout = ({
  columns,
  ...rest
}: GridLayoutProps) => {

  const style = {
    "--grid-layout-columns-count": columns,
  } as React.CSSProperties;


  return (
    <Flex.Container
      {...rest}
      style={style}
      className={
        styles["Grid-Layout__Root"]
      }
      direction="row"
      wrap="wrap"
    />
  )
}