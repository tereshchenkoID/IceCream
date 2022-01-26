import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import getAllStorage from "../../helpers/localStorage";

import {translate, translateString} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";
import Empty from "../../Components/Empty";

// import styles from './index.module.scss';

const getTeam = (arr, name) => {
    return arr.find((e) => {return e === name});
}

const Team = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_4")
        }
    ]

    const [lang] = useState(translateString('lang'));
    const [favArray, setFavArray] = useState(getAllStorage('favourite'));
    const [teamArray, setTeamArray] = useState(getAllStorage('team'));

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_4')}`} />
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
                            {
                                teamArray.length > 0
                                    ?
                                    dataCard.map((item, idx) =>
                                        getTeam(teamArray, item.id) &&
                                        <div key={idx} className={classes("col", "col-12", "col-md-6", "col-lg-4")}>
                                            <ProfileCard
                                                setting={dataSetting}
                                                data={item}
                                                lang={lang}
                                                favArray={favArray}
                                                setFavArray={setFavArray}
                                                teamArray={teamArray}
                                                setTeamArray={setTeamArray}
                                            />
                                        </div>

                                    )
                                    :
                                    <Empty />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Team;
