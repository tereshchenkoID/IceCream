import React from "react";

import {translateString} from "../../i18n/translate";

import styles from './index.module.scss';

const Field = ({
    data,
    action,
    type,
    required,
    placeholder
}) => {
    return (
        <input
            type={type}
            required={required}
            value={data}
            placeholder={placeholder ? translateString(placeholder) : ''}
            onChange={(e) => action(e.target.value)}
            className={styles.field}
        />
    );
}

export default Field;
