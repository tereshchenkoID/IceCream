import React from "react";
import {ReactTitle} from 'react-meta-tags';
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import styles from './index.module.scss';

import Breadcrumbs from "../../Components/Breadcrumbs";

const NotFound = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate('menu_link_10')
        }
    ]

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_10')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12")}>
                                <Breadcrumbs data={breadcrumbs}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <h1 className={styles.title}>
                                        <span>4</span>
                                        <span>0</span>
                                        <span>4</span>
                                        <span>?</span>
                                    </h1>
                                    <p className={styles.subtitle}>{translate('404_title')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFound;
