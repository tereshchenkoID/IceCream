import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useSelector} from "react-redux";

import classes from "classnames";

import {translate, translateString} from "../../../i18n/translate";

import GeneratePassword from "../../../Modules/GeneratePassword";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Password from "../../../Components/Password";
import Button from "../../../Components/Button";
import Loader from "../../../Components/Loader";

import styles from './index.module.scss';

const Settings = () => {
    let { dataProfile } = useSelector(state => state.profileReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_13")
        }
    ]

    const [loader, setLoader] = useState(false);
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [visibility, setVisibility] = useState('1');

    const [error, setError] = useState('');

    const init = () => {
        setVisibility(dataProfile[0].visibility)
    }

    const request = (formData) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true)

        const formData = new FormData(e.target);

        formData.set('id', localStorage.getItem('user_id'))
        formData.set('type', '4')
        formData.set('password', newPassword)

        request(formData)
    }

    const handleVisibility = () => {
        setLoader(true)

        visibility === '1'
        ?
            setVisibility('0')
        :
            setVisibility('1')


        const formData = new FormData();

        formData.set('id', localStorage.getItem('user_id'))
        formData.set('type', '5')
        formData.set('visibility', visibility === '1' ? '0' : '1')

        request(formData)
    }

    useEffect(() => {
        dataProfile &&
        dataProfile.length > 0 && init()
    }, [dataProfile]);

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_13')}`} />
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
                        <div className={styles.wrapper}>
                            <div className={styles.body}>
                                <div className="row">
                                    <div className={classes("col", "col-12")}>
                                        <div
                                            onClick={() => {
                                                handleVisibility()
                                            }}
                                        >
                                            {
                                                visibility === '1'
                                                ?
                                                    <div className={classes(styles.visibility, styles.hide)}>{translate('profile_hide')}</div>
                                                :
                                                    <div className={classes(styles.visibility, styles.show)}>{translate('profile_show')}</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form
                            className={classes(
                                styles.form,
                                loader && styles.disabled
                            )}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.wrapper}>
                                <div className={styles.head}>
                                    <div className={styles.title}>{translate('section_description_password')}:</div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.wrap}>
                                        <div className="row">
                                            {
                                                error &&
                                                <div className={classes("col", "col-12", "col-padding-vertical")}>
                                                    <div className={styles.error}>
                                                        {error}
                                                    </div>
                                                </div>
                                            }
                                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_current_password')} <span>*</span></p>
                                                <Password
                                                    data={currentPassword}
                                                    action={setCurrentPassword}
                                                    placeholder={false}
                                                    required={false}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_new_password')} <span>*</span></p>
                                                <Password
                                                    data={newPassword}
                                                    action={setNewPassword}
                                                    placeholder={false}
                                                    required={false}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                                <p className={styles.label}>{translate('profile_repeat_password')} <span>*</span></p>
                                                <Password
                                                    data={repeatPassword}
                                                    action={setRepeatPassword}
                                                    placeholder={false}
                                                    required={false}
                                                />
                                            </div>
                                            <div className={classes("col", "col-12", "col-lg-4", "col-padding-vertical")}>
                                                <GeneratePassword />
                                            </div>
                                        </div>
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

export default Settings;
