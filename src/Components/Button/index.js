import React from "react";
import classNames from "classnames";

import styles from './index.module.scss';

const Button = ({
    action,
    type,
    placeholder,
    classname
}) => {
    return (
        <>
            {
               type === 'button' &&
                    <button
                        type={type}
                        className={classNames(styles.button, styles[classname])}
                        onClick={() => {
                            action && action()
                        }}
                    >
                        {placeholder}
                    </button>
            }
            {
               type === 'link' &&
                    <a
                        className={classNames(styles.button, styles[classname])}
                        href={action}
                        target={'_blank'}
                        rel={"noreferrer"}
                    >
                        {placeholder}
                    </a>
            }
        </>
    );
}

export default Button;
