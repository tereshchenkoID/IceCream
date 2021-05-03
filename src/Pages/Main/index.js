import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import classes from "classnames";

import Slider from "react-slick";

import {translate, translateString} from "../../i18n/translate";

import { loadCardData } from '../../redux/actions/cardActions';
import { loadCompanyData } from '../../redux/actions/companyActions';

import CategoryCard from './CaregoryCard';

import Title from '../../Components/Title';

import ProfileCard from '../../Modules/ProfileCard';
import CompanyCard from '../../Modules/CompanyCard';

import styles from './index.module.scss';
import Header from "../../Layouts/Header";


const Main = () => {
    const dispatch = useDispatch();
    let { dataUser } = useSelector(state => state.userReducer);
    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);
    let { dataCountry } = useSelector( state => state.countryReducer);
    let { dataCompany } = useSelector(state => state.companyReducer);

    const [lang] = useState(translateString('lang'));

    const settings = {
        dots: false,
        arrow: true,
        fade: dataUser.role === 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: dataUser.role === 1 ? 1 : 3,
        slidesToScroll: 1
    };

    useEffect(() => {
        dispatch(loadCardData());
        dispatch(loadCompanyData());
    }, []);

    return (
        <div className={styles.block}>
            <Header lang={lang} />
            {
                dataUser.role === 2 &&
                <>
                    <div className={classes("container-fluid", styles.fluid, styles.white)}>
                        <div className={classes("container", styles.container)}>
                            <div className={styles.section}>
                                <Title
                                    text={translate('main_title_categories')}
                                    url="/search-employer/0"
                                    link={translate('title_view_all')}
                                />
                                <div className={styles.categories}>
                                    {
                                        dataCategory &&
                                        dataCategory.map((item, idx) =>
                                            <div key={idx} className={styles.category}>
                                                <CategoryCard data={item} lang={lang}/>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes("container-fluid", styles.fluid, styles.grey)}>
                        <div className={classes("container", styles.container)}>
                            <div className={styles.section}>
                                <Title
                                    text={translate('main_title_top_researcher')}
                                    url="/search-employer/0"
                                    link={translate('title_view_all')}
                                />
                                <div className={styles.researchers}>
                                    <Slider {...settings}>
                                        {
                                            dataCard.map((item, idx) =>
                                                <div key={idx} className={styles.card}>
                                                    <ProfileCard
                                                        data={item}
                                                        lang={lang}
                                                        categories={dataCategory}
                                                        countries={dataCountry}
                                                    />
                                                </div>
                                            )
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                dataUser.role === 1 &&
                <div className={classes("container-fluid", styles.fluid, styles.grey)}>
                    <div className={classes("container", styles.container)}>
                        <div className={styles.section}>
                            <Title
                                text={translate('main_title_top_companies')}
                                url="/search-company/0"
                                link={translate('title_view_all')}
                            />
                            <div className={styles.comanies}>
                                <Slider {...settings}>
                                    {
                                        dataCompany.map((item, idx) =>
                                            <div key={idx} className={styles.company}>
                                                <CompanyCard
                                                    data={item}
                                                    lang={lang}
                                                    categories={dataCategory}
                                                    countries={dataCountry}
                                                />
                                            </div>
                                        )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Main;
