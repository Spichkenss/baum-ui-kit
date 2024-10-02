import {type ComponentPropsWithoutRef, forwardRef, ReactNode} from "react";
import styles from './button.module.scss';
import {classnames} from "../../lib/classnames.ts";
import {ButtonAppearance, ButtonSize, appearenceStyles, sizeStyles} from "./button.consts.ts";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    size?: ButtonSize;
    appearance?: ButtonAppearance;
    isLoading?: boolean;
    before?: ReactNode;
    after?: ReactNode;
    negative?: boolean;
};

const Button = forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({
       className,
       size = 'md',
       appearance = 'primary',
       disabled = false,
       isLoading = false,
       children,
       before,
       after,
       negative = false,
       ...rest
   }, ref) => {

    return (
        <button
            ref={ref}
            className={classnames(
                styles['Button__Root'],
                sizeStyles[size],
                appearenceStyles[appearance],
                {
                    [styles['Negative']]: negative
                },
                className,
            )}
            disabled={disabled || isLoading}
            data-loading={isLoading}
            {...rest}
        >
            {isLoading && (
                <span className={styles['Button__Loader']}>
                    loading
                </span>
            )}

            <span className={styles['Button__Label']}>
                <span className={styles['Button__Label__Before']}>{before}</span>
                <span>{children}</span>
                <span className={styles['Button__Label__After']}>{after}</span>
            </span>
        </button>
    );
});

Button.displayName = 'Button';

export {Button};
export type {ButtonProps};