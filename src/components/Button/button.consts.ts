import styles from "./button.module.scss";

const buttonSizeStyles = {
    sm: styles['Size-sm'],
    md: styles['Size-md'],
    lg: styles['Size-lg'],
} as const;

const buttonAppearenceStyles = {
    primary: styles['Appearance-primary'],
    secondary: styles['Appearance-secondary'],
    outline: styles['Appearance-outline'],
    ghost: styles['Appearance-ghost'],
    uncontained: styles['Appearance-uncontained'],
} as const;

type ButtonSize = keyof typeof buttonSizeStyles;
type ButtonAppearance = keyof typeof buttonAppearenceStyles;

export {buttonSizeStyles, buttonAppearenceStyles}
export type {ButtonSize, ButtonAppearance};