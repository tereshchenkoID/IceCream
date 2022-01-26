import React from "react";
import {ReactTitle} from 'react-meta-tags';
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import styles from './index.module.scss';

import TeamCard from "../../Modules/TeamCard";
import Breadcrumbs from "../../Components/Breadcrumbs";

const Main = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_9")
        }
    ]

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_9')}`} />
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
            <section className={classes("section", "dark")}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{translate('about_title_1')}?</h3>
                                    <p className={styles.text}>{translate('about_description_1')}</p>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{translate('about_title_3')}?</h3>
                                    <p className={styles.text}>{translate('about_description_3')}</p>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{translate('about_title_2')}</h3>
                                    <p className={styles.text}>{translate('about_description_2')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12", "col-sm-6", "col-lg-3", "col-padding-vertical")}>
                                <TeamCard
                                    id={1}
                                    name={"Anton Kovtunenko"}
                                />
                            </div>
                            <div className={classes("col", "col-12", "col-sm-6", "col-lg-3", "col-padding-vertical")}>
                                <TeamCard
                                    id={2}
                                    name={"Igor Tereshchenko"}
                                />
                            </div>
                            <div className={classes("col", "col-12", "col-sm-6", "col-lg-3", "col-padding-vertical")}>
                                <TeamCard
                                    id={3}
                                    name={"Roman Smyk"}
                                />
                            </div>
                            <div className={classes("col", "col-12", "col-sm-6", "col-lg-3", "col-padding-vertical")}>
                                <TeamCard
                                    id={4}
                                    name={"Ivan Krytskyi"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
