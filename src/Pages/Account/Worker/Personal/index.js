import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useDispatch, useSelector} from "react-redux";

import {server} from "../../../../redux/types/types";

import {loadProfileData} from "../../../../redux/actions/profileActions";

import classes from "classnames";

import list from "../../_helpers/list";
import request from "../../_helpers/request";
import getId from "../../../../helpers/getId";
import checkForm from "../../../../helpers/checkForm";

import {translate, translateString} from "../../../../i18n/translate";

import Radio from "../../../../Components/Radio";
import Field from "../../../../Components/Field";
import Button from "../../../../Components/Button";
import Preloader from "../../../../Components/Preloader";
import Breadcrumbs from "../../../../Components/Breadcrumbs";
import Notification from "../../../../Components/Notification";
import Photo from "../../../../Components/Photo";

import styles from './index.module.scss';

const Personal = () => {
    const dispatch = useDispatch();

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
    const [tab, setTab] = useState(0);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [family, setFamily] = useState();
    const [country, setCountry] = useState({
        toggle: false,
        value: 0
    });
    const [region, setRegion] = useState({
        toggle: false,
        value: 0
    });

    const [driver, setDriver] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [image, setImage] = useState();

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const updateProfile = () => {
        setTimeout(() => {
            dispatch(loadProfileData())
        }, 2000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([name, surname, age, country.value, region.value, gender, family])

        if (c_Form.code === 0) {
            // console.log(name, surname, age, country, region, gender, family)
            setLoader(true)

            setNotification({
                type: null,
                code: 0
            })

            const formData = new FormData(e.target);

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

            request(formData, setLoader, true)

            updateProfile()
        }
        else {
            setNotification(c_Form)
        }
    }

    const handleDriver = (item) => {
        const formData = new FormData();
        const data = list(driver, setDriver, item.id);

        formData.set('type', '6')
        formData.set('driver', data ? data.join() : null)

        request(formData, setLoader, false)

        updateProfile()
    }

    const handleHobbies = (item) => {
        const formData = new FormData();
        const data = list(hobbies, setHobbies, item.id);

        formData.set('type', '7')
        formData.set('hobbies', data ? data.join() : null)

        request(formData, setLoader, false)

        updateProfile()
    }

    const handlePhoto = (e) => {
        e.preventDefault();

        if (image) {

            const formData = new FormData(e.target);

            formData.set('id', getId())
            formData.set('type', '11')
            formData.set('image', image)

            fetch(`${server.PATH}worker/update`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`
                },
                body: formData,
                contentType: false,
                processData: false
            })
                .then(success => success.json())
                .then(success => {
                    if (success === 0) {
                        setLoader(true)

                        setNotification({
                            type: null,
                            code: 0
                        })

                        setTimeout(() => {
                            setLoader(false)
                        }, 2000);
                    }
                    else if(success === 1) {
                        setNotification({
                            type: 'error',
                            code: 12
                        })
                    }
                    else if(success === 2) {
                        setNotification({
                            type: 'error',
                            code: 14
                        })
                    }
                })
                .catch(error => console.log("Error", error));
        }
        else {
            setNotification({
                type: 'error',
                code: 15
            })
        }
    }

    const loadingPhoto = () => {
        if (image) {
            return URL.createObjectURL(image)
        }
        else {
            return dataProfile.photo
        }
    }

    const uploadPhoto = (e) => {
        const file = e.target.files[0]

        const extension = [
            'image/png',
            'image/jpeg',
            'image/jpg'
        ]

        if (file.size > 4000000) {
            setNotification({
                type: 'error',
                code: 12
            })
        }
        else {
            if(extension.indexOf(file.type) === -1) {
                setNotification({
                    type: 'error',
                    code: 13
                })
            }
            else {
                setImage(file)
            }
        }
    }

    useEffect(() => {
        setName(dataProfile.name)
        setSurname(dataProfile.surname)
        setHeight(dataProfile.height || 0)
        setWeight(dataProfile.weight || 0)
        setAge(dataProfile.age)
        setGender(dataProfile.gender)
        setFamily(dataProfile.family)
        setDriver(dataProfile.driver_license || [])
        setHobbies(dataProfile.hobbies || [])
        setCountry({
            toggle: false,
            value: dataProfile.country || 0
        })
        setRegion({
            toggle: false,
            value: dataProfile.region || 0
        })
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_11')}`} />
            <section className={classes("section", "alt")}>
                <div className="container-fluid">
                    <div className="container">
                        <Breadcrumbs data={breadcrumbs}/>
                    </div>
                </div>
            </section>
            <section className={classes("section", "fluid")}>
                <div className="container-fluid">
                    <div className="container">
                        <Notification date={notification} />

                        <div className={styles.tab}>
                            {
                                loader &&
                                <div className={styles.loader}>
                                    <Preloader />
                                </div>
                            }
                            <div className={styles.header}>
                                <div
                                    className={classes(styles.link, tab === 0 && styles.active)}
                                    onClick={() => {setTab(0)}}
                                >
                                    {translate('section_description_general')}
                                </div>
                                <div
                                    className={classes(styles.link, tab === 1 && styles.active)}
                                    onClick={() => {setTab(1)}}
                                >
                                    {translate('section_description_photo')}
                                </div>
                                <div
                                    className={classes(styles.link, tab === 2 && styles.active)}
                                    onClick={() => {setTab(2)}}
                                >
                                    {translate('section_description_driver')}
                                </div>
                                <div
                                    className={classes(styles.link, tab === 3 && styles.active)}
                                    onClick={() => {setTab(3)}}
                                >
                                    {translate('section_description_about')}
                                </div>
                            </div>

                            <div className={classes(styles.panel, tab === 0 && styles.active)}>
                                <form
                                    className={classes(
                                        styles.form,
                                        loader && styles.disabled
                                    )}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_name')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                placeholder={false}
                                                data={name || ''}
                                                action={setName}
                                                icon={1}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_surname')} <span>*</span></p>
                                            <Field
                                                type={"text"}
                                                placeholder={false}
                                                data={surname || ''}
                                                action={setSurname}
                                                icon={1}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_birth')} <span>*</span></p>
                                            <Field
                                                type={"date"}
                                                placeholder={false}
                                                data={age || ''}
                                                action={setAge}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")} />
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
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
                                                    <div className={styles.icon}>
                                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 6L4.99998 0L0 6L10 6Z" fill="#000" />
                                                        </svg>
                                                    </div>
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
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
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
                                                    <div className={styles.icon}>
                                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 6L4.99998 0L0 6L10 6Z" fill="#000" />
                                                        </svg>
                                                    </div>
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
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
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
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_family')} <span>*</span></p>
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
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_weight')}, kg</p>
                                            <Field
                                                type={"number"}
                                                placeholder={false}
                                                data={weight}
                                                action={setWeight}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-md-6", "col-padding-vertical")}>
                                            <p className={styles.label}>{translate('profile_height')}, cm</p>
                                            <Field
                                                type={"number"}
                                                placeholder={false}
                                                data={height}
                                                action={setHeight}
                                            />
                                        </div>
                                        <div className={classes("col", "col-12", "col-padding-vertical")}>
                                            <Button
                                                type={"submit"}
                                                placeholder={translate('profile_button_save_settings')}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={classes(styles.panel, tab === 1 && styles.active)}>
                               <form
                                   encType={"multipart/form-data"}
                                   className={classes(
                                       styles.form,
                                       loader && styles.disabled
                                   )}
                                   onSubmit={handlePhoto}
                               >
                                   <div className="row">
                                       <div className={classes("col", "col-12", "col-padding-vertical")}>
                                           <p className={styles.label}>{translate('alert-upload-photo')} <span>*</span></p>

                                           <div className={styles.photo}>
                                               <Photo
                                                   photo={loadingPhoto()}
                                                   size={'sm'}
                                                   upload={image}
                                               />
                                           </div>
                                           <label
                                               htmlFor={'upload'}
                                               className={styles.check}
                                           >
                                               <input
                                                   type={"file"}
                                                   onChange={uploadPhoto}
                                                   className={styles.file}
                                                   id={'upload'}
                                               />
                                               {translate('button-upload')}
                                           </label>
                                           <Button
                                               type={"submit"}
                                               placeholder={translate('profile_button_save_settings')}
                                           />
                                       </div>
                                   </div>
                               </form>
                            </div>
                            <div className={classes(styles.panel, tab === 2 && styles.active)}>
                                <div className="row">
                                    <div className={classes("col", "col-12", "col-padding-vertical")}>
                                        <div className={styles.list}>
                                            {
                                                dataSetting.driver.map((item, idx) =>
                                                    <button
                                                        key={idx}
                                                        type={"button"}
                                                        onClick={() => {
                                                            handleDriver(item)
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
                            </div>
                            <div className={classes(styles.panel, tab === 3 && styles.active)}>
                                <div className="row">
                                    <div className={classes("col", "col-12", "col-padding-vertical")}>
                                        <div className={styles.list}>
                                            {
                                                dataSetting.about.map((item, idx) =>
                                                    <button
                                                        key={idx}
                                                        type={"button"}
                                                        onClick={() => {
                                                            handleHobbies(item)
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Personal;
