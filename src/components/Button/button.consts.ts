import styles from "./button.module.scss";

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

type ButtonSize = keyof typeof sizeStyles;
type ButtonAppearance = keyof typeof appearenceStyles;

export {sizeStyles, appearenceStyles}
export type {ButtonSize, ButtonAppearance};