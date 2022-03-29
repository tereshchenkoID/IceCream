import React from "react";
import {ReactTitle} from 'react-meta-tags';
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import Accordion from "../../Components/Accordion";
import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';

const Faq = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_19")
        }
    ]

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_19')}`} />
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
                        <div className={styles.faq}>
                            <div className={styles.item}>
                                <Accordion
                                    title={'Чи потрібна віза?'}
                                    text={'Віза вам не потрібна'}
                                    toggle={true}
                                />
                            </div>
                            <div className={styles.item}>
                                <Accordion
                                    title={'Хто оформлює дозвіл на роботу?'}
                                    text={'Дозвіл на роботу оформлюємо ми'}
                                />
                            </div>
                            <div className={styles.item}>
                                <Accordion
                                    title={'Яка заробітня плата?'}
                                    text={'Мінімально ви отримуєте €10 за годину офіційно'}
                                />
                            </div>
                            <div className={styles.item}>
                                <Accordion
                                    title={'Чи оподатковуються заробіток?'}
                                    text={'Ваші гроші не оподатковуються'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Faq;
