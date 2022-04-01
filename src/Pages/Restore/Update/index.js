import React, {useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import { server } from '../../../redux/types/types';

import checkForm from "../../../helpers/checkForm";
import checkPassword from "../../../helpers/checkPassword";

import classes from "classnames";

import {translate, translateString} from "../../../i18n/translate";

import Button from "../../../Components/Button";
import Breadcrumbs from "../../../Components/Breadcrumbs";
import Password from "../../../Components/Password";
import Notification from "../../../Components/Notification";
import GeneratePassword from "../../../Modules/GeneratePassword";

import styles from './index.module.scss';

const Update = () => {
    let { id } = useParams();
    let { user } = useSelector(state => state.userReducer);

    const breadcrumbs = [
        {
            url: "/",
            text: translate("menu_link_1")
        },
        {
            text: translate("menu_link_17")
        }
    ]

    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([newPassword, repeatPassword])
        const c_Password = checkPassword(newPassword, repeatPassword)

        if (id && id.length === 42) {

            if (c_Form.code === 0) {

                if (c_Password.code === 0) {

                    if (localStorage.getItem('restore_email')) {

                        if (user !== 0) {

                            const formData = new FormData(e.target);

                            formData.set('hash', id)
                            formData.set('role', user)
                            formData.set('email', localStorage.getItem('restore_email'))
                            formData.set('new_password', newPassword)

                            fetch(`${server.PATH}recovery/update`, {
                                method: 'POST',
                                body: formData
                            })
                                .then(success => success.json())
                                .then(success => {
                                    if (success === 0) {
                                        setNotification({
                                            type: 'success',
                                            code: 2
                                        })

                                        localStorage.setItem('restore_email', '')
                                    }
                                    else if (success === 1) {
                                        setNotification({
                                            type: 'error',
                                            code: 8
                                        })
                                    }
                                    else if (success === 2) {
                                        setNotification({
                                            type: 'error',
                                            code: 6
                                        })
                                    }
                                    else if(success === 3) {
                                        setNotification({
                                            type: 'error',
                                            code: 16
                                        })
                                    }
                                })
                                .catch(error => console.log("Error", error))
                        }
                        else {
                            setNotification({
                                type: 'error',
                                code: 16
                            })
                        }
                    }
                    else {
                        setNotification({
                            type: 'error',
                            code: 8
                        })
                    }
                }
                else {
                    setNotification(c_Password)
                }
            }
            else {
                setNotification(c_Form)
            }
        }
        else {
            setNotification({
                type: 'error',
                code: 11
            })
        }
    }

    return (
        <main>
            <ReactTitle title={`Global Workers | ${translateString('menu_link_17')}`} />
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
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >
                            <Notification date={notification} />
                            {
                                notification.type !== 'success' &&
                                <>
                                    <div className={styles.wrap}>
                                        <Password
                                            data={newPassword}
                                            action={setNewPassword}
                                            placeholder={'profile_new_password'}
                                        />
                                    </div>
                                    <div className={styles.wrap}>
                                        <Password
                                            data={repeatPassword}
                                            action={setRepeatPassword}
                                            placeholder={'profile_repeat_password'}
                                        />
                                    </div>
                                    <div className={styles.wrap}>
                                        <GeneratePassword />
                                    </div>
                                    <Button
                                        type={"submit"}
                                        action={false}
                                        placeholder={translate('button-continue')}
                                    />
                                </>
                            }
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Update;
