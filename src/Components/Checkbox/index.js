import React from "react";

import styles from './index.module.scss';

const Checkbox = ({item, name, label, date, action}) => {
    const handleCheckbox = (e) => {
        const data = date.slice();

        if (data.indexOf(e.target.value) !== -1) {
            data.splice(data.indexOf(e.target.value), 1);
        }
        else {
            data.push(e.target.value)
        }

        action(data);
    };

    return (
        <div className={styles.block}>
            <input
                type="checkbox"
                id={`${name}_${label.split(' ').join('-').toLowerCase()}`}
                value={item.id}
                className={styles.input}
                onChange={(e) => handleCheckbox(e)}
            />
            <label
                htmlFor={`${name}_${label.split(' ').join('-').toLowerCase()}`}
                className={styles.label}
            >
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
