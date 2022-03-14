import React, {useEffect, useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useSelector} from "react-redux";

import classes from "classnames";

import request from "../_helpers/request";

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

    // const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoader(true)

        const formData = new FormData(e.target);

        formData.set('type', '4')
        formData.set('password', newPassword)

        request(formData, setLoader, true)
    }

    const handleVisibility = () => {
        visibility === '1'
        ?
            setVisibility('0')
        :
            setVisibility('1')


        const formData = new FormData();

        formData.set('type', '5')
        formData.set('visibility', visibility === '1' ? '0' : '1')

        request(formData, setLoader, false)
    }

    useEffect(() => {
        dataProfile &&
        dataProfile.length > 0 &&
            setVisibility(dataProfile[0].visibility)
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
                                    <div className="row">
                                        {/*{*/}
                                        {/*    error &&*/}
                                        {/*    <div className={classes("col", "col-12", "col-padding-vertical")}>*/}
                                        {/*        <div className={styles.error}>*/}
                                        {/*            {error}*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*}*/}
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
                                        <div className={classes("col", "col-12", "col-padding-vertical")}>
                                            <Button
                                                type={"submit"}
                                                placeholder={translate('profile_button_save_settings')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Settings;