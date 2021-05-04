import React from "react";
import classes from "classnames";

import {translate} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';

const Notification = () => {
    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Notification'
        }
    ]

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.notifications}>
                        <div className={classes(styles.notification, styles.active)}>
                            <div className={styles.photo} />
                            <div className={styles.description}>
                                <div className={styles.date}>21.04.20121</div>
                                <a href="#" className={styles.link}>Company Name</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem recusandae repudiandae? Eius expedita perferendis veniam? Amet distinctio dolor earum, fugit hic neque ratione rem sed suscipit unde vel voluptate.</p>
                            </div>
                            <div className={styles.actions}>
                                <button className={classes(styles.action, styles.accept)}>Accept</button>
                                <button className={classes(styles.action, styles.decline)}>Decline</button>
                            </div>
                        </div>
                       <div className={styles.notification}>
                           <div className={styles.photo} />
                           <div className={styles.description}>
                               <div className={styles.date}>21.04.20121</div>
                               <a href="#" className={styles.link}>Company Name</a>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem recusandae repudiandae? Eius expedita perferendis veniam? Amet distinctio dolor earum, fugit hic neque ratione rem sed suscipit unde vel voluptate.</p>
                           </div>
                       </div>
                        <div className={styles.notification}>
                            <div className={styles.photo} />
                            <div className={styles.description}>
                                <div className={styles.date}>21.04.20121</div>
                                <a href="#" className={styles.link}>Company Name</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem recusandae repudiandae? Eius expedita perferendis veniam? Amet distinctio dolor earum, fugit hic neque ratione rem sed suscipit unde vel voluptate.</p>
                            </div>
                            <div className={styles.actions}>
                                <div className={classes(styles.status, styles.accept)}>Accept</div>
                                <div className={classes(styles.status, styles.decline)}>Decline</div>
                                <div className={classes(styles.status, styles.pending)}>Pending</div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
