import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useSelector} from "react-redux";

import classes from "classnames";

import {translate, translateString} from "../../../i18n/translate";

import Radio from "../../../Components/Radio";
import Field from "../../../Components/Field";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Button from "../../../Components/Button";
import Loader from "../../../Components/Loader";

import styles from './index.module.scss';

const actionList = (data, action, id) => {
    const result = [...data];
    const find = result.find((e) => {return e === id})
    find ? result.splice(result.indexOf(find), 1) : result.push(id)

    action(result)
}

const Personal = () => {
    let { dataProfile } = useSelector(state => state.profileReducer);
    let { dataSetting } = useSelector(state => state.settingReducer);

    const [lang] = useState(translateString('lang'));

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_11")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [country, setCountry] = useState({
        toggle: false,
        value: '0'
    });
    const [region, setRegion] = useState({
        toggle: false,
        value: '0'
    });

    const [family, setFamily] = useState();
    const [driver, setDriver] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const init = () => {
        setName(dataProfile[0].name);
        setSurname(dataProfile[0].surname);
        setHeight(dataProfile[0].height || 0);
        setWeight(dataProfile[0].weight || 0);
        setAge(dataProfile[0].age);
        setGender(dataProfile[0].gender)
        setFamily(dataProfile[0].family)
        setDriver(dataProfile[0].driver_license || [])
        setHobbies(dataProfile[0].hobbies || [])
        setCountry({
            toggle: false,
            value: dataProfile[0].country
        })
        setRegion({
            toggle: false,
            value: dataProfile[0].region
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true)

        const formData = new FormData(e.target);

        formData.set('id', localStorage.getItem('user_id'))
        formData.set('type', '1')
        formData.set('name', name)
        formData.set('surname', surname)
        formData.set('age', age)
        formData.set('country', country.value)
        formData.set('region', region.value)
        formData.set('gender', gender)
        formData.set('family', family)
        formData.set('weight', weight.toString())
        formData.set('height', height.toString())
        formData.set('hobbies', hobbies.join())
        formData.set('driver', driver.join())


        fetch('http://localhost:8888/user/update', {
            method: 'POST',
            body: formData
        })
            .then(success => {
                setTimeout(() => {
                    success.ok && setLoader(false)
                }, 3000);
            })
            .catch(error => console.log("Error", error));
    }


    useEffect(() => {
        dataProfile &&
        dataProfile.length > 0 && init()
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_11')}`} />
            {
                loader &&
                <div className={styles.loader}>
                    <Loader />
                </div>
            }
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <form
                            className={classes(
                                styles.form,
                                loader && styles.disabled
                            )}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_general')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.wrap}>
                                        <div className="row">
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_name')} <span>*</span></p>
                                                <Field
                                                    type={"text"}
                                                    required={true}
                                                    placeholder={false}
                                                    data={name || ''}
                                                    action={setName}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_surname')} <span>*</span></p>
                                                <Field
                                                    type={"text"}
                                                    required={true}
                                                    placeholder={false}
                                                    data={surname || ''}
                                                    action={setSurname}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_birth')} <span>*</span></p>
                                                <Field
                                                    type={"date"}
                                                    required={true}
                                                    placeholder={false}
                                                    data={age || ''}
                                                    action={setAge}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")} />
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_country')} <span>*</span></p>
                                                <div className={classes(styles.dropdown, country.toggle && styles.active)}>
                                                    <div
                                                        className={styles.select}
                                                        onClick={()=> {
                                                            setCountry({
                                                                toggle: !country.toggle,
                                                                value: country.value
                                                            })
                                                        }}
                                                    >
                                                        {dataSetting.regions[country.value][lang]}
                                                    </div>
                                                    <div className={styles.toggle}>
                                                        {
                                                            dataSetting.regions.map((item, idx) =>
                                                                <div
                                                                    key={idx}
                                                                    className={classes(styles.value, item.id === country.value && styles.active)}
                                                                    onClick={()=> {
                                                                        setCountry({
                                                                            toggle: false,
                                                                            value: item.id
                                                                        })
                                                                    }}
                                                                >
                                                                    {item[lang]}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_region')} <span>*</span></p>
                                                <div className={classes(styles.dropdown, region.toggle && styles.active)}>
                                                    <div
                                                        className={styles.select}
                                                        onClick={()=> {
                                                            setRegion({
                                                                toggle: !region.toggle,
                                                                value: region.value
                                                            })
                                                        }}
                                                    >
                                                        {dataSetting.regions[country.value].list[region.value][lang]}
                                                    </div>
                                                    <div className={styles.toggle}>
                                                        {
                                                            dataSetting.regions[country.value].list.map((item, idx) =>
                                                                <div
                                                                    key={idx}
                                                                    className={classes(styles.value, item.id === region.value && styles.active)}
                                                                    onClick={()=> {
                                                                        setRegion({
                                                                            toggle: false,
                                                                            value: item.id
                                                                        })
                                                                    }}
                                                                >
                                                                    {item[lang]}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.wrap}>
                                        <div className="row">
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_gender')} <span>*</span></p>
                                                {
                                                    dataSetting.gender.slice(1, dataSetting.length).map((item, idx) =>
                                                        <div
                                                            key={idx}
                                                            className={styles.block}
                                                        >
                                                            <Radio
                                                                lang={lang}
                                                                item={item}
                                                                name={'gender'}
                                                                date={gender}
                                                                action={setGender}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_family')}</p>
                                                {
                                                    dataSetting.family.slice(1, dataSetting.length).map((item, idx) =>
                                                        <div
                                                            key={idx}
                                                            className={styles.block}
                                                        >
                                                            <Radio
                                                                lang={lang}
                                                                item={item}
                                                                name={'family'}
                                                                date={family}
                                                                action={setFamily}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.wrap}>
                                        <div className="row">
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_weight')}, kg</p>
                                                <Field
                                                    type={"number"}
                                                    required={false}
                                                    placeholder={false}
                                                    data={weight}
                                                    action={setWeight}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-6", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_height')}, cm</p>
                                                <Field
                                                    type={"number"}
                                                    required={false}
                                                    placeholder={false}
                                                    data={height}
                                                    action={setHeight}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_driver')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.list}>
                                        {
                                            dataSetting.driver.map((item, idx) =>
                                                <button
                                                    key={idx}
                                                    type={"button"}
                                                    onClick={() => {
                                                        actionList(driver, setDriver, item.id)
                                                    }}
                                                    className={classes(
                                                        styles.item,
                                                        driver.find((e) => {return e === item.id}) && styles.active
                                                    )}
                                                >
                                                    <span>{item.name}</span>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_about')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.list}>
                                        {
                                            dataSetting.about.map((item, idx) =>
                                                <button
                                                    key={idx}
                                                    type={"button"}
                                                    onClick={() => {
                                                        actionList(hobbies, setHobbies, item.id)
                                                    }}
                                                    className={classes(
                                                        styles.item,
                                                        hobbies.find((e) => {return e === item.id}) && styles.active
                                                    )}
                                                >
                                                    <span>{item[lang]}</span>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <Button
                                type={"submit"}
                                placeholder={translate('profile_button_save_settings')}
                            />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Personal;
