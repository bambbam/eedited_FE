import React from 'react';
import cn from 'classnames'

import styles from './style.module.scss'

export const ButtonType = {
    BUTTON: 'button' as const,
    RESET: 'reset' as const,
    SUBMIT: 'submit' as const,
}

export const ButtonTheme = {
    DEFAULT: 'default' as const,
    ORANGE: 'orange' as const,
    WHITE: 'gray' as const,
}

export const ButtonSize = {
    SMALL: 'small' as const,
    MEDIUM: 'medium' as const,
    LARGE: 'large' as const,
}

export interface Props{
    type?: "button" | "submit" | "reset",
    theme?: "default" | "orange" | "gray",
    size?: "small" | "medium" | "large",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode,
    className?: string,
    disabled?: boolean
}

const Button:React.FC<Props> = (props:Props) => {
    const { type, theme, size, onClick, children, className, disabled } = props
    
    const classProps: string = cn(
        styles.button,
        styles[theme!],
        styles[size!],
        {
            [styles.disabled] : disabled
        },
        className
    )
    return (
        <button className={classProps} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

Button.defaultProps={
    type: ButtonType.BUTTON,
    theme : "default",
    size: "medium",
    onClick: () => {},
    className: '',
    disabled: false,
}

export default Button;