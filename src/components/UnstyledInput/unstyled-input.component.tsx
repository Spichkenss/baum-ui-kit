import {ComponentPropsWithoutRef, forwardRef} from "react";
import styles from './unstyled-input.component.module.scss';
import {classnames} from "../../lib";

export type UnstyledInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'>;

export const UnstyledInput = forwardRef<
    HTMLInputElement,
    UnstyledInputProps
>(({type, className, ...rest}, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            className={classnames(
                styles['Unstyled-input__Root'],
                className
            )}
            {...rest}
        />
    )
})

UnstyledInput.displayName = "UnstyledInput";