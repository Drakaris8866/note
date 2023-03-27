import React, {FC} from 'react';
import styles from './Input.module.scss'

interface IInputProps {
    placeholder: string,
}

const Input: FC<IInputProps> = ({placeholder}) => {
    return (
        <input className={styles.input} type="text" placeholder={placeholder}/>
    );
};

export default Input;