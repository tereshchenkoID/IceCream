import React from "react";
import classes from "classnames";

import {NavLink} from "react-router-dom";
import {translate, translateString} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";

import styles from './index.module.scss';


const Team = () => {
    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Team Manage'
        }
    ]

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.wrapper}>
                        <p>Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
