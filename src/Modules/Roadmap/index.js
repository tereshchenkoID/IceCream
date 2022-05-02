import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

const Roadmap = () => {
    return (
        <section className="section">
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <h2 className={styles.title}>ICECREAM Roadmap</h2>
                </div>
            </div>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={styles.block}>
                        <div className={styles.part}>
                            <div className={classes('gradient-background', styles.step)}>
                                <p className={styles.label}>Phase 1</p>
                            </div>

                            <div className={styles.wrap}>
                                <p className={styles.data}>Month, 2021</p>
                                <h5 className={styles.subtitle}>Lorem Ipsum 1</h5>
                                <ul className={classes(styles.list, styles.primary)}>
                                    <li className={styles.item}>Start initial announcement on Twitter</li>
                                    <li className={styles.item}>Create Discord and grow organically</li>
                                    <li className={styles.item}>Develope prototype website</li>
                                    <li className={styles.item}>Secure Domain icecreamfinance.app</li>
                                    <li className={styles.item}>Secure KYC from Assured DeFi</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.part}>
                            <div className={classes('gradient-background', styles.step)}>
                                <p className={styles.label}>Phase 2</p>
                            </div>

                            <div className={styles.wrap}>
                                <p className={styles.data}>Month, 2021</p>
                                <h5 className={styles.subtitle}>Lorem Ipsum 2</h5>
                                <ul className={classes(styles.list, styles.primary)}>
                                    <li className={styles.item}>Start initial announcement on Twitter</li>
                                    <li className={styles.item}>Create Discord and grow organically</li>
                                    <li className={styles.item}>Develope prototype website</li>
                                    <li className={styles.item}>Secure Domain icecreamfinance.app</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.part}>
                            <div className={classes('gradient-background', styles.step)}>
                                <p className={styles.label}>Phase 3</p>
                            </div>

                            <div className={styles.wrap}>
                                <p className={styles.data}>Month, 2022</p>
                                <h5 className={styles.subtitle}>Lorem Ipsum 3</h5>
                                <ul className={classes(styles.list, styles.alt)}>
                                    <li className={styles.item}>Introduce new protocol identity</li>
                                    <li className={styles.item}>Rebuild website with modern UI/UX</li>
                                    <li className={styles.item}>Strategic partnerships</li>
                                    <li className={styles.item}>Sundae school: Level based academy education plan</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.part}>
                            <div className={classes('gradient-background', styles.step)}>
                                <p className={styles.label}>Phase 4</p>
                            </div>

                            <div className={styles.wrap}>
                                <p className={styles.data}>Month, 2022</p>
                                <h5 className={styles.subtitle}>Lorem Ipsum 4</h5>
                                <ul className={classes(styles.list, styles.alt)}>
                                    <li className={styles.item}>Development of deflationary mechanisms starting with lottery system</li>
                                    <li className={styles.item}>Implementation of protocol generated revenue strategy</li>
                                    <li className={styles.item}>Sorbet Finance: Leveraged yield farming protocol introduction</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
