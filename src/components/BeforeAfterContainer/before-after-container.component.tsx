import { WithAfterAndBeforeElements } from "@global-types"
import { Conditional } from "@components/Conditional";
import { classnames } from "@lib/classnames";

import styles from "./before-after-container.module.scss";

type BeforeAfterContainerProps =
  & WithAfterAndBeforeElements
  &
  {
    className?: string;
    children?: React.ReactNode;
  };

export const BeforeAfterContainer = ({
  before,
  after,
  children,
  className
}: BeforeAfterContainerProps) => {
  return (
    <div
      className={
        classnames(
          styles["Before-After-Container__Root"],
          className
        )
      }
    >
      <Conditional condition={!!before}>
        <span
          className={
            classnames(
              styles["Pseudo-Element"]
            )
          }>
          {before}
        </span>
      </Conditional>
      <span>
        {children}
      </span>
      <Conditional condition={!!after}>
        <span
          className={
            classnames(
              styles["Pseudo-Element"]
            )
          }>
          {after}
        </span>
      </Conditional>
    </div>

  )
}