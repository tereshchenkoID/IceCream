import React, {useState} from "react";

import classes from "classnames";

import { server } from '../../redux/types/types';

import checkForm from "../../helpers/checkForm";

import {translate, translateString} from "../../i18n/translate";

import Title from "../Title";
import Button from "../Button";
import Notification from "../Notification";

import styles from './index.module.scss';

const Form = () => {
    const [notification, setNotification] = useState({
        type: null,
        code: 0
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

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
                <div className={styles.item}>
                    <Notification date={notification} />
                </div>
                {
                    notification.type !== 'success' &&
                    <>
                        <div className={classes(styles.item, styles.inline)}>
                            <div className={styles.wrapper}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 50 50">
                                        <path d="M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149 c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968 c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008 c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443 c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017 C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262 c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021 c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908 c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264 c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869 C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11 v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195 c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769 c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031 c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47 s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225 c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073 c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862 c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38 c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17 c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076 C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z"/>
                                    </svg>
                                </div>
                                <input
                                    type={'text'}
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.field}
                                    placeholder={translateString('contact_name')}
                                    required
                                />
                            </div>
                            <div className={styles.wrapper}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 32 32">
                                        <path stroke="none" strokeWidth="1" fillRule="evenodd" fill="#000" d="M5.31500722,9.27391933 C5.12106043,9.45739405 5,9.71770487 5,10.0068455 L5,21.9931545 C5,22.2828882 5.11915965,22.5440384 5.31310687,22.7277332 L5.31310687,22.7277332 L13.05,16 L5.31500722,9.27391933 L5.31500722,9.27391933 L5.31500722,9.27391933 Z M27.6868931,9.27226685 C27.8808404,9.45596162 28,9.71711185 28,10.0068455 L28,21.9931545 C28,22.2822951 27.8789396,22.542606 27.6849928,22.7260807 L19.95,16 L27.6868931,9.27226685 L27.6868931,9.27226685 Z M19.2018297,16.6505829 L26.5,23 L6.5,23 L13.7981703,16.6505829 L16.5,19 L19.2018297,16.6505829 L19.2018297,16.6505829 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z M16.5,17.7000122 L26.5,9 L6.5,9 L16.5,17.7000122 L16.5,17.7000122 Z"/>
                                    </svg>
                                </div>
                                <input
                                    type={'email'}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.field}
                                    placeholder={translateString('contact_email')}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.wrapper}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 32 32">
                                        <path stroke="none" strokeWidth="1" fill="#000" fillRule="evenodd" d="M19.5,3 L9.00276013,3 C7.89666625,3 7,3.89833832 7,5.00732994 L7,27.9926701 C7,29.1012878 7.89092539,30 8.99742191,30 L24.0025781,30 C25.1057238,30 26,29.1017876 26,28.0092049 L26,10.5 L26,10 L20,3 L19.5,3 L19.5,3 L19.5,3 Z M19,4 L8.9955775,4 C8.44573523,4 8,4.45526288 8,4.99545703 L8,28.004543 C8,28.5543187 8.45470893,29 8.9999602,29 L24.0000398,29 C24.5523026,29 25,28.5550537 25,28.0066023 L25,11 L20.9979131,11 C19.8944962,11 19,10.1134452 19,8.99408095 L19,4 L19,4 Z M20,4.5 L20,8.99121523 C20,9.54835167 20.4506511,10 20.9967388,10 L24.6999512,10 L20,4.5 L20,4.5 Z M10,10 L10,11 L17,11 L17,10 L10,10 L10,10 Z M10,7 L10,8 L17,8 L17,7 L10,7 L10,7 Z M10,13 L10,14 L23,14 L23,13 L10,13 L10,13 Z M10,16 L10,17 L23,17 L23,16 L10,16 L10,16 Z M10,19 L10,20 L23,20 L23,19 L10,19 L10,19 Z M10,22 L10,23 L23,23 L23,22 L10,22 L10,22 Z M10,25 L10,26 L23,26 L23,25 L10,25 L10,25 Z"/>
                                    </svg>
                                </div>
                                <input
                                    type={'text'}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className={styles.field}
                                    placeholder={translateString('contact_subject')}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <textarea
                                className={styles.textarea}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={translateString('contact_message')}
                                required
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
