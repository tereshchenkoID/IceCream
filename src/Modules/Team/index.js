import React from "react";
import classes from "classnames";

import Card from "./Card";

import styles from './index.module.scss';

const Team = () => {
    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <h2 className={styles.title}>Meet The People Behind it All</h2>
                    <div className={styles.list}>
                        <div className={styles.card}>
                            <Card
                                url={null}
                                name={"Name Surname"}
                                position={"Position"}
                            />
                        </div>
                        <div className={styles.card}>
                            <Card
                                url={null}
                                name={"Name Surname"}
                                position={"Position"}
                            />
                        </div>
                        <div className={styles.card}>
                            <Card
                                url={null}
                                name={"Name Surname"}
                                position={"Position"}
                            />
                        </div>
                        <div className={styles.card}>
                            <Card
                                url={null}
                                name={"Name Surname"}
                                position={"Position"}
                            />
                        </div>
                        <div className={styles.card}>
                            <Card
                                url={null}
                                name={"Name Surname"}
                                position={"Position"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
