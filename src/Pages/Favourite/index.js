import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import getAllStorage from "../../helpers/localStorage";

import {translate, translateString} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";
import Empty from "../../Components/Empty";

// import styles from "./index.module.scss";

const getFav = (arr, name) => {
    return arr.find((e) => {return e === name});
}

const Favourite = () => {
    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_3")
        }
    ]

    const [lang] = useState(translateString('lang'));
    const [favArray, setFavArray] = useState(getAllStorage('favourite'));
    const [teamArray, setTeamArray] = useState(getAllStorage('team'));

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_3')}`} />
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
                                favArray.length > 0
                                    ?
                                    dataCard.map((item, idx) =>
                                        getFav(favArray, item.id) &&
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

export default Favourite;
