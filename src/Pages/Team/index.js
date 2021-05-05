import React, {useEffect, useState} from "react";
import classes from "classnames";
import {useDispatch, useSelector} from "react-redux";

import {translate, translateString} from "../../i18n/translate";

import {loadCardData} from "../../redux/actions/cardActions";


import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";

import styles from './index.module.scss';

const Team = () => {
    const dispatch = useDispatch();
    const [lang] = useState(translateString('lang'));

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataCountry } = useSelector(state => state.countryReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: 'Team Manage'
        }
    ]

    useEffect(() => {
        dispatch(loadCardData());
    }, []);

    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.wrapper}>
                        {
                            dataCard.map((item, idx) =>
                                <div key={idx} className={styles.card}>
                                    <ProfileCard
                                        data={item}
                                        lang={lang}
                                        categories={dataCategory}
                                        countries={dataCountry}
                                        isTeam
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
