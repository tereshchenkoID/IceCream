import React from "react";
import {useSelector} from "react-redux";

import classes from "classnames";

import Logo from "./Logo";
import Menu from "./Menu";
import Login from "./Login";
import Lang from "./Lang";

import styles from './index.module.scss';


const Nav = ({lang, setLang}) => {
    let { dataUser } = useSelector(state => state.userReducer);

    return (
        <nav className={styles.block}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <Logo />
                    <Menu role={dataUser.role} />
                    <Lang
                        lang={lang}
                        setLang={setLang}
                    />
                    <Login role={dataUser.role} />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
