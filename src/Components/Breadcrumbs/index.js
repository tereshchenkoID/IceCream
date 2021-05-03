import React from "react";
import {NavLink} from "react-router-dom";

import styles from './index.module.scss';

const Breadcrumbs = ({data}) => {

    return (
        <div className={styles.block}>
            {
                data.map((item, idx) =>
                    <div key={idx} className={styles.item}>
                        {
                            item.url ?
                                <NavLink
                                    className={styles.link}
                                    to={item.url}
                                >
                                    {item.text}
                                </NavLink>
                                :
                                <div className={styles.text}>{item.text}</div>
                        }
                        <div className={styles.divider}>/</div>
                    </div>
                )
            }
        </div>
    );
}

export default Breadcrumbs;
