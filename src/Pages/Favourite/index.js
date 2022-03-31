import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";
import Empty from "../../Components/Empty";

const getFavourite = (arr, id) => {
    return arr.find((e) => {return e === id});
}

const Favourite = () => {
    const { favourite } = useSelector(state => state.favouriteReducer)
    const { dataCard } = useSelector(state => state.cardReducer)
    const { dataSetting } = useSelector(state => state.settingReducer)

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_3")
        }
    ]

    const [lang] = useState(translateString('lang'))

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
                                favourite.length > 0
                                    ?
                                    dataCard.map((item, idx) =>
                                        getFavourite(favourite, item.id) &&
                                        <div key={idx} className={classes("col", "col-12", "col-md-6", "col-lg-4")}>
                                            <ProfileCard
                                                setting={dataSetting}
                                                data={item}
                                                lang={lang}
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
