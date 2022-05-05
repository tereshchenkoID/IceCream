import React from "react";
import classNames from "classnames";

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
                        className={classNames('button', classname)}
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
                        className={classNames('button', classname)}
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
