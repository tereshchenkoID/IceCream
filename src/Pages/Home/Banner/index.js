import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

const Banner = () => {
    function handleMouseMove(e) {
        const parent = document.getElementById('banner-top')

        const rect = parent.getBoundingClientRect()
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        const mouseXpercentage =  Math.round(x * 100 / rect.width);
        const mouseYpercentage =  Math.round(y * 100 / rect.height);

        parent.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #FDAD3E, #C64FBB)`
    }

    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div
                        className={classes("gradient", styles.banner)}
                        onMouseMove={(e)=> handleMouseMove(e)}
                        id={'banner-top'}
                    >
                        <div className={styles.left}>
                            <h1 className={styles.title}>The Sweetest Protocol on Avalanche!</h1>
                            <p className={styles.text}>We are a protocol that simplifies DEFI for investors that are to build long term wealth.</p>
                            <p className={styles.label}>Total Value Locked</p>
                            <p className={styles.value}>$270,056</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.picture}>
                                <div className={styles.img}>
                                    <img
                                        src={"/img/banner-1.webp"}
                                        alt={"Banner 1"}
                                        loading={"lazy"}
                                    />
                                </div>
                                <div className={styles.img}>
                                    <img
                                        src={"/img/banner-2.webp"}
                                        alt={"Banner 2"}
                                        loading={"lazy"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
