import React from "react";
import {NavLink} from "react-router-dom";
import classes from "classnames";

import styles from './index.module.scss';
import {translateString} from "../../../i18n/translate";

const SortCategory = ({
    categories,
    category,
    subcategory,
    lang
}) => {

    return (
        <div>
            {
                categories &&
                categories.map((c_item, c_idx) =>
                    <div key={c_idx} className={classes(styles.category, c_item.id === category && styles.active)}>
                        <NavLink
                            className={styles.wrapper}
                            to={`/search-employer/${c_item.id}`}
                        >
                            <span>
                                {c_item.title[lang]}
                            </span>
                            {
                                c_item.subcategory &&
                                <div className={styles.icon}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490.8 490.8">
                                        <path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82 l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262 c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>
                                        <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115 L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667 c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>
                                    </svg>
                                </div>
                            }
                        </NavLink>
                        <div className={styles.dropdown}>
                            {
                                c_item.subcategory &&
                                c_item.subcategory.map((s_item, s_idx) =>
                                    <NavLink
                                        key={s_idx}
                                        className={classes(styles.subcategory, subcategory && s_item.id === subcategory && styles.active)}
                                        to={`/search-employer/${c_item.id}/${s_item.id}`}
                                    >
                                        {s_item.title[translateString('lang')]}
                                    </NavLink>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SortCategory;
