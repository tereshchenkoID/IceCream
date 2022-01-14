import React, {useState} from "react";

// import { translateString } from "../../../i18n/translate";

// import Link from "../../../Components/Link";
import Profile from "../Profile";

import styles from './index.module.scss';

const Login = () => {
    const [profile, setProfile] = useState(false);

    return (
        <div className={styles.block}>
            <div className={styles.avatar} onClick={() => setProfile(!profile)}/>
            {
                profile &&
                <div className={styles.dropdown} >
                    <Profile setProfile={setProfile} />
                </div>
            }
            {/*<div className={styles.link}>*/}
            {/*    <Link*/}
            {/*        url="/login"*/}
            {/*        text={translateString('menu_link_login')}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}

export default Login;
