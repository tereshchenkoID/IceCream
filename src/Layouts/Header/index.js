import React from "react";

import {translate} from "../../i18n/translate";

import styles from './index.module.scss';

const Header = () => {
    return (
        <header className={styles.block} style={{backgroundImage: 'url(https://tereshchenko-id.com/website/manager/img/bg.webp)'}}>
            <div className="container-fluid">
                <div className="container">
                    <div className={styles.content}>
                        <h1 className={styles.title}>{translate('header_title')}</h1>
                        <h4 className={styles.subtitle}>{translate('header_subtitle')}</h4>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
