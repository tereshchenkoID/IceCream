import React, {useState} from "react";

import classes from "classnames";

import { server } from '../../redux/types/types';

import checkForm from "../../helpers/checkForm";

import {translate, translateString} from "../../i18n/translate";

import Title from "../Title";
import Button from "../Button";
import Notification from "../Notification";
import Field from "../Field";

import styles from './index.module.scss';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const c_Form = checkForm([name, email, subject, message])

        if (c_Form.code === 0) {

            const formData = new FormData(e.target);

            formData.set('email', email)
            formData.set('name', name)
            formData.set('subject', subject)
            formData.set('message', message)

            fetch(`${server.PATH}feedback/send`, {
                method: 'POST',
                body: formData
            })
                .then(success => {
                   if(success.ok) {
                        setNotification({
                            type: 'success',
                            code: '4'
                        })

                        setTimeout(() => {
                            setNotification({
                                type: null,
                                code: 0
                            })
                        }, 3000);
                    }
                })
                .catch(error => console.log("Error", error));
        }
        else {
            setNotification(c_Form)
        }
    }

    return (
        <div className={styles.block}>
            <form onSubmit={handleSubmit}>
                <Title text={translateString('title-contact')} />
                <Notification date={notification} />
                {
                    notification.type !== 'success' &&
                    <>
                        <div className={classes(styles.item, styles.inline)}>
                            <div className={styles.wrapper}>
                                <Field
                                    type={"text"}
                                    placeholder={'contact_name'}
                                    data={name}
                                    action={setName}
                                    icon={1}
                                />
                            </div>

                            <div className={styles.wrapper}>
                                <Field
                                    type={"email"}
                                    placeholder={'contact_email'}
                                    data={email}
                                    action={setEmail}
                                    icon={2}
                                />
                            </div>
                        </div>

                        <div className={styles.item}>
                            <Field
                                type={"text"}
                                placeholder={'contact_subject'}
                                data={subject}
                                action={setSubject}
                                icon={3}
                            />
                        </div>

                        <div className={styles.item}>
                            <textarea
                                className={styles.textarea}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={translateString('contact_message')}
                            />
                        </div>

                        <div className={styles.item}>
                            <Button
                                type={"submit"}
                                action={false}
                                placeholder={translate('contact_button-1')}
                            />
                        </div>
                    </>
                }
            </form>
        </div>
    );
}

export default Form;
