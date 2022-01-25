import React from "react";
import {ReactTitle} from 'react-meta-tags';
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import styles from './index.module.scss';

import Breadcrumbs from "../../Components/Breadcrumbs";

const Main = () => {
    const breadcrumbs = [
        {
            url: "/main",
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
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <div className={styles.icon}>
                                        <svg x="0" y="0" viewBox="0 0 80.588 61.158">
                                            <path d="M29.658,61.157c-1.238,0-2.427-0.491-3.305-1.369L1.37,34.808c-1.826-1.825-1.826-4.785,0-6.611 c1.825-1.826,4.786-1.827,6.611,0l21.485,21.481L72.426,1.561c1.719-1.924,4.674-2.094,6.601-0.374 c1.926,1.72,2.094,4.675,0.374,6.601L33.145,59.595c-0.856,0.959-2.07,1.523-3.355,1.56C29.746,61.156,29.702,61.157,29.658,61.157z"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.title}>{translate('about_title_1')}</h3>
                                    <p>{translate('about_description_1')}</p>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <div className={styles.icon}>
                                        <svg x="0" y="0" viewBox="0 0 80.588 61.158">
                                            <path d="M29.658,61.157c-1.238,0-2.427-0.491-3.305-1.369L1.37,34.808c-1.826-1.825-1.826-4.785,0-6.611 c1.825-1.826,4.786-1.827,6.611,0l21.485,21.481L72.426,1.561c1.719-1.924,4.674-2.094,6.601-0.374 c1.926,1.72,2.094,4.675,0.374,6.601L33.145,59.595c-0.856,0.959-2.07,1.523-3.355,1.56C29.746,61.156,29.702,61.157,29.658,61.157z"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.title}>{translate('about_title_2')}</h3>
                                    <p>{translate('about_description_2')}</p>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                <div className={styles.content}>
                                    <div className={styles.icon}>
                                        <svg x="0" y="0" viewBox="0 0 80.588 61.158">
                                            <path d="M29.658,61.157c-1.238,0-2.427-0.491-3.305-1.369L1.37,34.808c-1.826-1.825-1.826-4.785,0-6.611 c1.825-1.826,4.786-1.827,6.611,0l21.485,21.481L72.426,1.561c1.719-1.924,4.674-2.094,6.601-0.374 c1.926,1.72,2.094,4.675,0.374,6.601L33.145,59.595c-0.856,0.959-2.07,1.523-3.355,1.56C29.746,61.156,29.702,61.157,29.658,61.157z"/>
                                        </svg>
                                    </div>
                                    <h3 className={styles.title}>{translate('about_title_3')}</h3>
                                    <p>{translate('about_description_3')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
