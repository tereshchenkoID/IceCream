import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const SearchItem = ({data, setCheckboxes, lang}) => {
    return (
        <NavLink
            className={styles.block}
            to={`/search/${data.id}`}
            onClick={() => setCheckboxes([]) }
        >
            <span>{data.title[lang]}</span>
        </NavLink>
    );
}

export default SearchItem;
