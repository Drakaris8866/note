import React, {FC, ReactNode} from 'react';
import styles from './Button.module.scss'

interface IButtonProps {
    children: ReactNode,
    htmlType?: "button" | "submit" | "reset" | undefined
}

const Button:FC<IButtonProps> = ({children, htmlType}) => {
    return (
        <button type={htmlType} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;