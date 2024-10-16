import styles from "./full-size-container.module.scss";

type FullSizeContainerComponentProps = {
  children?: React.ReactNode;
}

export const FullSizeContainer = (
  { children }: FullSizeContainerComponentProps
) => {
  return (
    <div className={styles["Full-Size-Container__Root"]}>
      {children}
    </div>
  )
}