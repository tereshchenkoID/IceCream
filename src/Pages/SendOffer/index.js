import React from "react";
import classes from "classnames";

import {translate} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';
import {useParams} from "react-router-dom";

const SendOffer = () => {
    let { id } = useParams();

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Create Offer'
        }
    ]

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    {
                        id
                            ?
                            <div className={styles.form}>
                                <div className={styles.head}>
                                    <div className={styles.title}>Create you offer</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.wrapper}>
                                        <div className={styles.text}>Set your minimal hourly rate</div>
                                        <input
                                            type="number"
                                            className={styles.field}
                                        />
                                    </div>
                                    <div className={styles.wrapper}>
                                        <div className={styles.text}>Description</div>
                                        <textarea className={styles.textarea}/>
                                    </div>
                                    <button className={styles.action}>Send</button>
                                </div>
                            </div>
                            :
                            <div className={styles.notification}>Choose profile for offer</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default SendOffer;
