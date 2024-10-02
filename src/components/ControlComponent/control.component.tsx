import {ReactNode} from "react";
import {ControlSize, controlSizeStyles, ControlStatus, controlStatusStyles} from "./control.consts.ts";
import styles from './control.module.scss';
import {classnames} from "../../lib";
import {WithAfterComponent, WithBeforeComponent} from "../../lib/types/common.types.ts";
import {PrimitiveComponent, PrimitiveProps} from "../PrimitiveComponent";

export type ControlComponentProps = WithBeforeComponent
    & WithAfterComponent
    & PrimitiveProps
    &
    {
        status?: ControlStatus;
        size?: ControlSize;
        children?: ReactNode;
    }

export const ControlComponent = ({
    status = "default",
    size = "md",
    children,
    ...rest
}: ControlComponentProps) => {
    return (
        <PrimitiveComponent
            as={'div'}
            className={classnames(
                styles['Control__Root'],
                controlStatusStyles[status],
                controlSizeStyles[size]
            )}
            {...rest}
        >
            {children}
        </PrimitiveComponent>
    )
}
