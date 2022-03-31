import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux'
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import {translate, translateString} from "../../i18n/translate";

import getAge from "../../helpers/getAge";
import convertData from "../../helpers/convertData";

import Toggle from "../../Components/Toggle";
import Empty from "../../Components/Empty";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Title from "../../Components/Title";
import Sort from "../../Modules/Sort";
import ProfileCard from "../../Modules/ProfileCard";
import SortAge from '../../Modules/SortAge';
import SortGender from '../../Modules/SortGender';
import SortFamily from '../../Modules/SortFamily';
import SortVaccination from '../../Modules/SortVaccination';
import SortDriver from '../../Modules/SortDriver';
import SortCategory from '../../Modules/SortCategory';
import SortAvailable from "../../Modules/SortAvailable";

import styles from './index.module.scss';

const convertAvailable = function(date) {
    const dateParts = date.split("-");
    return new Date(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10) - 1, parseInt(dateParts[2], 10));
}

const Search = () => {
    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_2")
        }
    ]

    let {id} = useParams();

    let {dataCard} = useSelector(state => state.cardReducer);
    let {dataSetting} = useSelector(state => state.settingReducer);

    const [lang] = useState(translateString('lang'));

    const values = [0, 80];
    const [sort, setSort] = useState(0);
    const [photo, setPhoto] = useState(false);
    const [age, setAge] = useState({min: values[0], max: values[1]});
    const [gender, setGender] = useState('0');
    const [family, setFamily] = useState('0');
    const [driver, setDriver] = useState([]);
    const [vaccination, setVaccination] = useState('0');
    const [category, setCategory] = useState([]);
    const [available, setAvailable] = useState({
        min: 0,
        max: 0
    })

    const [toggle, setToggle] = useState(false);

    const conditionVaccination = (data) => {
        if (vaccination !== '0') return data.vaccinated === vaccination
        else return true
    }

    const conditionGender = (data) => {
        if (gender !== '0') return data.gender === gender
        else return true
    }

    const conditionPhoto = (data) => {
        if (photo) return data.photo
        else return true
    }

    const conditionFamily = (data) => {
        if (family !== '0') {
            if (data.family)
                return data.family === family
        }
        else {
            return true
        }
    }

    const conditionDriver = (data) => {
        if (driver.length > 0) {
            if (data.driver_license)
                return driver.find((e) => {return data.driver_license.indexOf(e) !== -1})
        }
        else {
            return true;
        }
    }

    const conditionAvailable = (data) => {
        if (available.min && available.min !== 0 && available.max && available.max !== 0 ) {
            return convertAvailable(data.available[0]) <= convertAvailable(available.min) && convertAvailable(data.available[1]) >= convertAvailable(available.max)
        }
        else {
            return true;
        }
    }

    const conditionCategory = (data) => {
        if (id !== '0') {
            const c = data.skills.find((e) => {return e.id === id})

            if (category.length > 0) {
                return category.find((e) => {
                    return c && c.list.find((a) => { return a === e })
                })
            }
            else {
                return c
            }
        }
        else {
            return data
        }
    }

    const sortData = (data) => {
        if (sort === 1) {
            data.sort((a, b) => {
                return convertAvailable(a.date) - convertAvailable(b.date);
            })
        }

        if (sort === 2) {
            data.sort((a, b) => {
                return convertAvailable(b.date) - convertAvailable(a.date);
            })
        }

        if (sort === 3) {
            data.sort((a, b) => {
                return convertAvailable(b.age) - convertAvailable(a.age);
            })
        }

        if (sort === 4) {
            data.sort((a, b) => {
                return convertAvailable(a.age) - convertAvailable(b.age);
            })
        }
    }

    const allCondition = (data) => {
        const a = data.filter((item) =>
            getAge(item.age) >= age.min && getAge(item.age) <= age.max &&
            conditionPhoto(item) &&
            conditionFamily(item) &&
            conditionGender(item) &&
            conditionVaccination(item) &&
            conditionDriver(item) &&
            conditionAvailable(item) &&
            conditionCategory(item)
        )

        if (sort !== 0) {
            sortData(a)
        }

        return a
    }

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_2')}`} />
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
                            <div className={classes("col", "col-12", "col-lg-4")}>
                                <div className={classes(styles.filters, toggle && styles.active)}>
                                    <button
                                        className={styles.icon}
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                        </svg>
                                    </button>
                                    <div className={styles.scroll}>
                                        <Title
                                            text={`${translateString('sort_title_categories')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortCategory
                                                categories={dataSetting.job}
                                                id={id}
                                                category={category}
                                                setCategory={setCategory}
                                                lang={lang}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_photo')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <Toggle
                                                date={photo}
                                                action={setPhoto}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_available')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortAvailable
                                                available={available}
                                                setAvailable={setAvailable}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_age')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortAge
                                                min={values[0]}
                                                max={values[1]}
                                                age={age}
                                                setAge={setAge}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_gender')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortGender
                                                setting={dataSetting.gender}
                                                lang={lang}
                                                gender={gender}
                                                setGender={setGender}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_vaccination')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortVaccination
                                                setting={dataSetting.vaccination}
                                                lang={lang}
                                                vaccination={vaccination}
                                                setVaccination={setVaccination}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_family')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortFamily
                                                setting={dataSetting.family}
                                                lang={lang}
                                                family={family}
                                                setFamily={setFamily}
                                            />
                                        </div>
                                        <Title
                                            text={`${translateString('sort_title_driver')}:`}
                                        />
                                        <div className={styles.wrapper}>
                                            <SortDriver
                                                setting={dataSetting.driver}
                                                driver={driver}
                                                setDriver={setDriver}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes("col", "col-12", "col-md-12", "col-lg-8")}>
                                <div className={styles.sort}>
                                    <div className={styles.list}>
                                        {
                                            id !== '0' &&
                                            dataSetting.job &&
                                            <button
                                                className={styles.filter}
                                                onClick={()=>setCategory([])}
                                            >
                                                <span>{translate('sort_label_category')}:</span>
                                                <strong>{dataSetting.job[id][lang]}</strong>
                                                {
                                                    category.length > 0 &&
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                    </svg>
                                                }
                                            </button>
                                        }
                                        {
                                            available.min !== 0 && available.max !== 0 &&
                                                <button
                                                    className={styles.filter}
                                                    onClick={()=>setAvailable({
                                                        min: 0,
                                                        max: 0
                                                    })}
                                                >
                                                    <span>{translate('sort_label_available')}:</span>
                                                    <strong>
                                                        {
                                                            available.min ?
                                                            convertData(available.min)
                                                                :
                                                           <span>{translate('sort_alert_wrong_date')}</span>
                                                        }
                                                        -
                                                        {
                                                            available.max ?
                                                            convertData(available.max)
                                                                :
                                                            <span>{translate('sort_alert_wrong_date')}</span>
                                                        }
                                                    </strong>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                    </svg>
                                                </button>
                                        }
                                        {
                                            (age.min !== 0 || age.max !== 80) &&
                                            <button
                                                className={styles.filter}
                                                onClick={()=>setAge({min: 0, max: 80})}
                                            >
                                                <span>{translate('sort_label_age')}:</span>
                                                <strong>{age.min} - {age.max}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            photo &&
                                            <button
                                                className={styles.filter}
                                                onClick={() => setPhoto(!photo)}
                                            >
                                                <strong>{translate('sort_label_photo')}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            gender !== '0' &&
                                            <button
                                                className={styles.filter}
                                                onClick={() => setGender('0')}
                                            >
                                                <span>{translate('sort_label_gender')}:</span>
                                                <strong>{dataSetting.gender[gender][lang]}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            vaccination !== '0' &&
                                            <button
                                                className={styles.filter}
                                                onClick={() => setVaccination('0')}
                                            >
                                                <span>{translate('sort_label_vaccination')}:</span>
                                                <strong>{dataSetting.vaccination[vaccination][lang]}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            family !== '0' &&
                                            <button
                                                className={styles.filter}
                                                onClick={() => setFamily('0')}
                                            >
                                                <span>{translate('sort_label_family')}:</span>
                                                <strong>{dataSetting.family[family][lang]}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            driver.length > 0 &&
                                            <button
                                                className={styles.filter}
                                                onClick={() => setDriver([])}
                                            >
                                                <span>{translate('sort_label_driver')}:</span>
                                                {
                                                    driver.map((item, idx) =>
                                                        <strong key={idx}>
                                                            {dataSetting.driver[item].name}
                                                            {idx !== driver.length - 1 && ','}
                                                        </strong>
                                                    )
                                                }
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z"/>
                                                </svg>
                                            </button>
                                        }
                                    </div>
                                    <button
                                        className={styles.toggle}
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.23 122.88">
                                            <path d="M122.23,12.35v10.54c0,1.29-1.21,2.35-2.69,2.35H77.85c-2.84,5.92-8.89,10.01-15.9,10.01 c-7,0-13.05-4.09-15.89-10.01H2.69C1.22,25.24,0,24.18,0,22.89V12.35C0,11.06,1.21,10,2.69,10h43.37c2.84-5.92,8.89-10,15.89-10 c7,0,13.05,4.09,15.89,10h41.69C121.02,10,122.23,11.06,122.23,12.35L122.23,12.35L122.23,12.35z M49.57,112.88 c-2.84,5.92-8.89,10-15.9,10c-7,0-13.05-4.08-15.89-10l-15.09,0c-1.48,0-2.69-1.06-2.69-2.35V99.99c0-1.29,1.21-2.35,2.69-2.35 l15.09,0c2.84-5.92,8.89-10.01,15.89-10.01c7,0,13.05,4.09,15.89,10.01h69.97c1.48,0,2.69,1.06,2.69,2.35v10.54 c0,1.29-1.22,2.35-2.69,2.35L49.57,112.88L49.57,112.88z M104.12,69.73c-2.84,5.92-8.89,10.01-15.89,10.01 c-7,0-13.05-4.09-15.9-10.01H2.69C1.22,69.73,0,68.67,0,67.38V56.85c0-1.29,1.21-2.35,2.69-2.35h69.64c2.84-5.92,8.89-10,15.89-10 c7,0,13.05,4.09,15.89,10h15.42c1.48,0,2.69,1.06,2.69,2.35v10.53c0,1.29-1.21,2.35-2.69,2.35H104.12L104.12,69.73z"/>
                                        </svg>
                                    </button>
                                </div>
                                <Sort
                                    sort={sort}
                                    setSort={setSort}
                                    lang={lang}
                                />
                                <div className="row">
                                    {
                                        (
                                            allCondition(dataCard) &&
                                            allCondition(dataCard).length > 0
                                        )
                                            ?
                                            allCondition(dataCard).map((item, idx) =>
                                                <div key={idx} className={classes("col", "col-12", 'col-sm-6', "col-padding-vertical")}>
                                                    <ProfileCard
                                                        setting={dataSetting}
                                                        data={item}
                                                        lang={lang}
                                                    />
                                                </div>
                                            )
                                            :
                                            <div className={classes("col", "col-12", "col-padding-vertical")}>
                                                <Empty />
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Search;
