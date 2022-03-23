import React from "react";

import styles from './index.module.scss';

const Radio = ({lang, item, name, date, action, required}) => {

    return (
        <div className={styles.block}>
            <input
                type="radio"
                className={styles.radio}
                id={`${name}_${item[lang].toLowerCase()}`}
                value={item.id}
                name={name}
                checked={item.id === date}
                onChange={(e) => action(e.target.value)}
                required={required}
            />
            <label
                htmlFor={`${name}_${item[lang].toLowerCase()}`}
                className={styles.label}
            >
                {item[lang]}
            </label>
        </div>
    );
}

export default Radio;
