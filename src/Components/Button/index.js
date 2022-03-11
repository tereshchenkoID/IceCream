import React from "react";

import styles from './index.module.scss';

const Button = ({
    action,
    type,
    placeholder
}) => {
    return (
        <button
            type={type}
            className={styles.button}
            onClick={() => {
                action && action()
            }}
        >
            {placeholder}
        </button>
    );
}

export default Button;
