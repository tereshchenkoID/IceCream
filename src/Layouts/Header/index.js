import React from "react";
import classes from "classnames";

import {translate} from "../../i18n/translate";

import Search from "./Search";

import styles from './index.module.scss';

const Header = ({lang}) => {
    return (
        <div className={styles.block} style={{backgroundImage: 'url(/img/header-1.jpeg)'}}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <h1 className={styles.title}>{translate('header_title')}</h1>
                    <h4 className={styles.subtitle}>{translate('header_subtitle')}</h4>
                    <Search lang={lang}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
