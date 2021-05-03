import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const CategoryCard = ({data, lang}) => {
    return (
        <NavLink
            className={styles.block}
            to={`/search-employer/${data.id}`}
            style={{backgroundImage: 'url(/img/example-1.jpeg)'}}
        >
            <span className={styles.nickname}>{data.title[lang]}</span>
            <span className={styles.count}>{data.count}</span>
        </NavLink>
    )
}

export default CategoryCard;
