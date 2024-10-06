import { ReactNode } from "react";
import {
    type ControlSize,
    type ControlStatus,
    controlSizeStyles,
    controlStatusStyles
} from "./control.consts.ts";
import styles from "./control.module.scss";
import { classnames } from "../../lib";
import {
    type WithAfterComponent,
    type WithBeforeComponent
} from "../../lib/types/common.types.ts";
import { PrimitiveComponent, type PrimitiveProps } from "../PrimitiveComponent";
import { Conditional } from "../Conditional";

export type ControlComponentProps = Omit<WithBeforeComponent
    & WithAfterComponent
    & PrimitiveProps, "label">
    &
    {
        status?: ControlStatus;
        size?: ControlSize;
        children?: ReactNode;
        label?: string;
    }

export const ControlComponent = ({
    status = "default",
    size = "md",
    children,
    label,
    ...rest
}: ControlComponentProps) => {
    return (
        <PrimitiveComponent
            as={"div"}
            className={classnames(
                styles["Control__Root"],
                controlStatusStyles[status],
                controlSizeStyles[size]
            )}
            {...rest}
        >
            <Conditional condition={!!label} fallback={null}>
                <span className={styles["Control__Label"]}>
                    {label}
                </span>
            </Conditional>
            {children}
        </PrimitiveComponent>
    )
}
