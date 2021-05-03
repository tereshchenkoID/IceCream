import React, {useState} from "react";
import classes from "classnames";

import { translateString } from "../../../i18n/translate";

import Link from "../../../Components/Link";
import Profile from "../Profile";
import Notification from "../Notification";

import styles from './index.module.scss';

const Login = ({ role }) => {
    const [profile, setProfile] = useState(false);
    const [notification, setNotification] = useState(false);

    return (
        <div className={styles.block}>
            {
                role === 2
                ?
                    <>
                        <div className={styles.cell}>
                            <div className={classes(styles.notification, notification && styles.active)} onClick={() => setNotification(!notification)}>
                                <div className={styles.count}>1</div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.7618 10.6906L25.9036 7.61289V3.24651C25.9036 2.86951 25.5593 2.58161 25.1577 2.58161H19.5425L17.2907 0.78571C15.964 -0.263043 14.042 -0.263043 12.7153 0.792565L10.4635 2.58161H4.77656C4.38213 2.58161 4.03073 2.86265 4.03073 3.24651V7.68143L0.244214 10.6906C0.0864429 10.8208 -0.00678559 11.0196 0.000385833 11.2184H0.0147287V26.5658C0.0147287 28.4577 1.60679 30 3.57893 30H26.4199C28.3992 30 29.9841 28.4509 29.9841 26.5658V11.2184H29.9985C30.0128 11.0128 29.9267 10.8208 29.7618 10.6906ZM25.9036 9.39508L28.1626 11.191L25.9036 12.795V9.39508ZM13.6333 1.84132C14.4293 1.2107 15.5839 1.21755 16.3799 1.84817L17.2907 2.58161H12.7082L13.6333 1.84132ZM5.46501 3.95253H24.4693V13.8163L16.301 19.629C15.5265 20.1705 14.4795 20.1705 13.7122 19.629L5.46501 13.7615V3.95253ZM4.03073 9.45677V12.7401L1.84344 11.1841L4.03073 9.45677ZM28.557 26.559C28.5642 27.6969 27.6104 28.6222 26.4271 28.6291H3.57893C2.39564 28.6222 1.44184 27.6969 1.44901 26.5658V12.5825L12.8659 20.7326C14.1353 21.6305 15.8708 21.6305 17.1401 20.7326L28.557 12.5825V26.559Z" fill="#000"/>
                                    <path d="M14.4293 9.43622H10.5567C10.1623 9.43622 9.8396 9.74468 9.8396 10.1217C9.8396 10.4987 10.1623 10.8071 10.5567 10.8071H14.4293C14.8237 10.8071 15.1465 10.4987 15.1465 10.1217C15.1465 9.74468 14.8237 9.43622 14.4293 9.43622Z" fill="#000"/>
                                    <path d="M19.4493 12.8635H10.5567C10.1623 12.8635 9.8396 13.172 9.8396 13.549C9.8396 13.926 10.1623 14.2344 10.5567 14.2344H19.4493C19.8437 14.2344 20.1665 13.926 20.1665 13.549C20.1665 13.172 19.8437 12.8635 19.4493 12.8635Z" fill="#000"/>
                                </svg>
                            </div>
                            {
                                notification &&
                                <div className={styles.dropdown} >
                                    <Notification setNotification={setNotification} />
                                </div>
                            }
                        </div>
                        <div className={styles.cell}>
                            <div className={styles.avatar} onClick={() => setProfile(!profile)}/>
                            {
                                profile &&
                                <div className={styles.dropdown} >
                                    <Profile setProfile={setProfile} />
                                </div>
                            }
                        </div>
                    </>
                :
                    <>
                        <div className={styles.link}>
                            <Link
                                url="/login"
                                text={translateString('menu_link_login')}
                            />
                        </div>
                        <div className={styles.link}>
                            <Link
                                url="/registration"
                                text={translateString('menu_link_registration')}
                            />
                        </div>
                    </>
            }
        </div>
    );
}

export default Login;
