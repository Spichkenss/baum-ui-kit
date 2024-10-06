import { ComponentProps, ElementType } from "react";
import { classnames } from "../../lib";
import styles from "./primitive.module.scss";

export type PrimitiveProps = {
    fullWidth?: boolean;
}

type PrimitiveComponentProps<Element extends ElementType> = PrimitiveProps & {
    as?: Element;
} & Omit<ComponentProps<Element>, "as">;

export const PrimitiveComponent =
    <Element extends ElementType>(
        {
            as,
            className,
            fullWidth = false,
            ...rest
        }: PrimitiveComponentProps<Element>,
    ) => {
        const Component = as || "div";

        return (
            <Component
                className={classnames(
                    styles["Primitive__Root"],
                    { [styles.fullWidth]: fullWidth },
                    className
                )}
                {...rest}
            />

        );
    }


PrimitiveComponent.displayName = "PrimitiveComponent";