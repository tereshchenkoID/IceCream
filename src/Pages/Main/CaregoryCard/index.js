import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const CategoryCard = ({data, lang}) => {
    return (
        <NavLink
            className={styles.block}
            to={`/search/${data.id}`}
            title={data[lang]}
        >
            <img
                src={`/img/categories/576/${data.id}.webp`}
                alt={data[lang]}
                className={styles.img}
                loading={"lazy"} />
            <span className={styles.nickname}>{data[lang]}</span>
        </NavLink>
    )
}

export default CategoryCard;
