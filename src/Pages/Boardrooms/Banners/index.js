import React from "react";
import classes from "classnames";

import Card from "./Card";

import styles from './index.module.scss';

const Banners = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.list}>
                        <div className={classes(styles.card, styles.top)}>
                            <Card
                                text={"next epoch"}
                                value={"02:45:56"}
                            />
                        </div>
                        <div className={classes(styles.card, styles.bottom)}>
                            <Card
                                text={"Current epoch"}
                                value={"87"}
                            />
                        </div>
                        <div className={classes(styles.card, styles.top)}>
                            <Card
                                text={"FUdge Price (TWAp)"}
                                value={"1.0272 DAI"}
                            />
                        </div>
                        <div className={classes(styles.card, styles.bottom)}>
                            <Card
                                text={"APR"}
                                value={"5418.98%"}
                            />
                        </div>
                        <div className={classes(styles.card, styles.top)}>
                            <Card
                                text={"Daily APR"}
                                value={"5418.98%"}
                            />
                        </div>
                        <div className={classes(styles.card, styles.bottom)}>
                            <Card
                                text={"Straws Stacked"}
                                value={"2156.8766"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banners;
