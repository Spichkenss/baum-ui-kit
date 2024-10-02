import {type ComponentPropsWithoutRef, forwardRef, ReactNode} from "react";
import styles from './button.module.scss';
import {classnames} from "../../lib/classnames.ts";

const sizeStyles = {
    sm: styles['Size-sm'],
    md: styles['Size-md'],
    lg: styles['Size-lg'],
} as const;

const appearenceStyles = {
    primary: styles['Appearance-primary'],
    secondary: styles['Appearance-secondary'],
    outline: styles['Appearance-outline'],
    ghost: styles['Appearance-ghost'],
    uncontained: styles['Appearance-uncontained'],
} as const;

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    size?: keyof typeof sizeStyles;
    appearance?: keyof typeof appearenceStyles;
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
       disabled,
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

export {Button, sizeStyles, appearenceStyles};
export type {ButtonProps};