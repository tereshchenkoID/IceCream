import React, {useState} from "react";
import {ReactTitle} from "react-meta-tags";
import {useParams} from "react-router-dom";

import { server } from '../../../redux/types/types';

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

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword === repeatPassword) {

            if(id && id.length === 42) {
                const formData = new FormData(e.target);

                formData.set('hash', id)
                formData.set('email', localStorage.getItem('restore_email'))
                formData.set('new_password', newPassword)

                fetch(`${server.PATH}recovery/update`, {
                    method: 'POST',
                    body: formData
                })
                    .then(success => success.json())
                    .then(success => {
                        if (success === 0) {
                            setSuccess(translate('alert-restore-success'))

                            setError('')
                            setNewPassword('')
                            setRepeatPassword('')

                            localStorage.setItem('restore_email', '')
                        }
                        else if (success === 1) {
                            setError(translate('alert-restore-expired'))
                        }
                        else if (success === 2) {
                            setSuccess(translate('alert-restore-not-found'))
                        }
                    })
                    .catch(error => console.log("Error", error))
            }
        }
        else {
            setError(translate('alert-match-password'))
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
            <section className="section">
                <div className="container-fluid">
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form}>
                                {
                                    error &&
                                    <div className={styles.wrap}>
                                        <Notification
                                            text={error}
                                            type={'error'}
                                        />
                                    </div>
                                }
                                {
                                    success
                                        ?
                                        <div className={styles.wrap}>
                                            <Notification
                                                text={success}
                                                type={'success'}
                                            />
                                        </div>
                                        :
                                        <>
                                            <div className={styles.wrap}>
                                                <Password
                                                    data={newPassword}
                                                    action={setNewPassword}
                                                    placeholder={'profile_new_password'}
                                                    required={true}
                                                />
                                            </div>
                                            <div className={styles.wrap}>
                                                <Password
                                                    data={repeatPassword}
                                                    action={setRepeatPassword}
                                                    placeholder={'profile_repeat_password'}
                                                    required={true}
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
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Update;