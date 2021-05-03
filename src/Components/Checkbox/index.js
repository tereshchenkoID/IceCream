import React from "react";

import styles from './index.module.scss';

const Checkbox = ({id, name, sort, setSort}) => {

    const handleCheckbox = (e, id) => {
        const date = sort.slice();
        const s = date.filter(c => c.name.includes(e.target.value))

        if (s.length > 0) {
            date.splice(date.indexOf(s[0]), 1);
        }
        else {
            date.push({
                name: e.target.value,
                code: id.toLowerCase()
            })
        }

        setSort(date);
    };

    return (
        <div className={styles.block}>
            <input
                type="checkbox"
                id={id}
                value={name}
                className={styles.input}
                onChange={(e) => handleCheckbox(e, id)}
            />
            <label
                htmlFor={id}
                className={styles.label}
            >
                {name}
            </label>
        </div>
    );
}

export default Checkbox;
