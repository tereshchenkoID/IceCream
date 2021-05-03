import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import { loadCardData } from '../../redux/actions/cardActions';

import Breadcrumbs from "../../Components/Breadcrumbs";
import Title from "../../Components/Title";

import ProfileCard from "../../Modules/ProfileCard";
import SortAge from '../../Modules/SortAge';
import SortCountry from '../../Modules/SortCountry';
import SortGender from '../../Modules/SortGender';
import SortMoney from '../../Modules/SortMoney';
import SortCategory from './SortCategory';
import Header from "../../Layouts/Header";

import styles from './index.module.scss';

const SearchEmployer = () => {
    const dispatch = useDispatch();

    const breadcrumbs = [
        {
            url: "/main",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_3")
        }
    ]

    let { category, subcategory } = useParams();

    let { dataCard } = useSelector(state => state.cardReducer);
    let { dataCountry } = useSelector(state => state.countryReducer);
    let { dataCategory } = useSelector(state => state.categoryReducer);

    const [categories, setCategories] = useState();
    const [country, setCountry] = useState([]);
    const [gender, setGender] = useState([]);
    const [wage, setWage] = useState({min: 0, max: 100});
    const [age, setAge] = useState({min: 0, max: 100});
    const [lang] = useState(translateString('lang'));

    const [cat, setCat] = useState();

    let f_gender = gender.length > 0 ? gender : [{name: "Male", code: "male"}, {name: "Female", code: "female"}];
    let f_country = country.length > 0 ? country : dataCountry;

    useEffect(() => {
        dispatch(loadCardData());
        setCategories(dataCategory)

        setCat(dataCategory.find((e) => {return e.id === category}))
    }, [dataCategory, category, subcategory]);

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
                                text={translate('sort_title_categories')}
                            />
                            <div className={styles.wrap}>
                                <SortCategory
                                    categories={categories}
                                    category={category}
                                    subcategory={subcategory}
                                    lang={translateString('lang')}
                                />
                            </div>
                            <Title
                                text={translate('sort_title_rate')}
                            />
                            <div className={styles.wrap}>
                                <SortMoney
                                    wage={wage}
                                    setWage={setWage}
                                />
                            </div>
                            <Title
                                text={translate('sort_title_age')}
                            />
                            <div className={styles.wrap}>
                                <SortAge
                                    age={age}
                                    setAge={setAge}
                                />
                            </div>
                            <div className={styles.subtitle}>{translate('sort_title_gender')}</div>
                            <div className={styles.wrap}>
                                <SortGender
                                    gender={gender}
                                    setGender={setGender}
                                />
                            </div>
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
                                <div className={styles.filter}>{translate('sort_label_category')}:<span>{cat && cat.title[lang]}</span></div>
                                {
                                    subcategory &&
                                    subcategory !== '0' &&
                                    <div className={styles.filter}>{translate('sort_label_subcategory')}:
                                        <span>
                                    {
                                        cat &&
                                        cat.subcategory &&
                                        cat.subcategory.find((e) => {return e.id === subcategory}) &&
                                        cat.subcategory.find((e) => {return e.id === subcategory}).title[lang]
                                    }
                                </span>
                                    </div>
                                }
                                <div className={styles.filter}>
                                    {translate('sort_label_wage')}: <span>{wage.min} - {wage.max}</span>
                                </div>

                                <div className={styles.filter}>
                                    {translate('sort_label_age')}: <span>{age.min} - {age.max}</span>
                                </div>
                                {
                                    gender.length > 0 &&
                                    gender.map((item, idx) =>
                                        <div key={idx} className={styles.filter}>{item.name}</div>
                                    )
                                }
                                {
                                    country.length > 0 &&
                                    country.map((item, idx) =>
                                        <div key={idx} className={styles.filter}>{item.name}</div>
                                    )
                                }
                            </div>
                            <div className={styles.list}>
                                {
                                    dataCard.map((item, idx) =>
                                       (item.age >= age.min && item.age <= age.max) &&
                                       (item.wage >= wage.min && item.wage <= wage.max) &&
                                       (f_gender.filter(e => e.code === item.gender).length > 0) &&
                                       (f_country.filter(e => e.code.toLowerCase() === item.country).length > 0) &&
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchEmployer;
