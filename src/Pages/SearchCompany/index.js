import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'

import {translate, translateString} from "../../i18n/translate";
import classes from "classnames";

import { loadCompanyData } from '../../redux/actions/companyActions';

import CompanyCard from "../../Modules/CompanyCard";

import Breadcrumbs from "../../Components/Breadcrumbs";
import SortCountry from '../../Modules/SortCountry';
import Title from "../../Components/Title";

import styles from './index.module.scss';
import Header from "../../Layouts/Header";

const SearchCompany = () => {
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_2")
        }
    ]

    let { dataCompany } = useSelector(state => state.companyReducer);
    let { dataCountry } = useSelector(state => state.countryReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);

    const [country, setCountry] = useState([]);
    const [lang] = useState(translateString('lang'));

    let f_country = country.length > 0 ? country : dataCountry;

    useEffect(() => {
        dispatch(loadCompanyData());
    }, [dataCategory]);

    return (
        <div className={styles.block}>
            <Header lang={lang} />
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div className={styles.title}>{translate('sort_title')}</div>
                            <Title
                                text={translate('sort_title_country')}
                            />
                            <div className={styles.wrap}>
                                <SortCountry
                                    data={dataCountry}
                                    country={country}
                                    setCountry={setCountry}
                                />
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={styles.sort}>
                                {
                                    country.length > 0 &&
                                    country.map((item, idx) =>
                                        <div key={idx} className={styles.filter}>{item.name}</div>
                                    )
                                }
                            </div>
                            <div className={styles.list}>
                                {
                                    dataCompany.map((item, idx) =>
                                       (f_country.filter(e => e.code.toLowerCase() === item.country).length > 0) &&
                                           <div key={idx} className={styles.card}>
                                               <CompanyCard
                                                   data={item}
                                                   lang={lang}
                                                   categories={dataCategory}
                                                   countries={dataCountry}
                                               />
                                           </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCompany;
