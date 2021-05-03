import React, {useEffect, useState} from "react";
import classes from "classnames";
import {useDispatch, useSelector} from "react-redux";

import getAllStorage from "../../helpers/localStorage";

import {translate, translateString} from "../../i18n/translate";

import {loadCardData} from "../../redux/actions/cardActions";
import {loadCompanyData} from "../../redux/actions/companyActions";

import Breadcrumbs from "../../Components/Breadcrumbs";
import ProfileCard from "../../Modules/ProfileCard";
import CompanyCard from "../../Modules/CompanyCard";

import styles from "./index.module.scss";

const Favourite = () => {
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: translate("profile_popup_bookmarks")
        }
    ]

    const [lang] = useState(translateString('lang'));

    const [favArray, setFavArray] = useState(getAllStorage());
    const [ hoverTitle ] = useState(translateString('card_favourite'));

    let { dataUser } = useSelector(state => state.userReducer);
    let { dataCountry } = useSelector(state => state.countryReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataCompany } = useSelector(state => state.companyReducer);

    const getFav = (name) => {
        return favArray.find((e) => {return e === name});
    }

    useEffect(() => {
        dataUser.role === 1 && dispatch(loadCompanyData());
        dataUser.role === 2 && dispatch(loadCardData());
    }, [favArray]);


    const removeFav = (name) => {
        favArray.find((e) => {return e === name})
            ?
            localStorage.removeItem(name)
            :
            localStorage.setItem(name, name)

        setFavArray(getAllStorage());
    };


    return (
        <div className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.wrapper}>
                        {
                            (dataUser.role === 2 && dataCard || dataUser.role === 1 && dataCompany).map((item, idx) =>
                               getFav(item.id) &&
                               <div
                                   key={idx}
                                   className={classes(
                                       styles.card,
                                       dataUser.role === 2 && styles.sm,
                                       dataUser.role === 1 && styles.lg
                                   )}
                               >
                                   <div
                                       className={styles.favourite}
                                       onClick={() => removeFav(item.id)}
                                       title={hoverTitle}
                                   >
                                       <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                           <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z"/>
                                       </svg>
                                   </div>

                                   {
                                       dataUser.role === 2 &&
                                       <ProfileCard
                                           data={item}
                                           lang={lang}
                                           categories={dataCategory}
                                           countries={dataCountry}
                                           isFavourite
                                       />
                                   }
                                   {
                                       dataUser.role === 1 &&
                                           <CompanyCard
                                               data={item}
                                               lang={lang}
                                               categories={dataCategory}
                                               countries={dataCountry}
                                               isFavourite
                                           />
                                   }
                               </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favourite;
