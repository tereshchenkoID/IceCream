import React, {useState} from "react";
import classes from 'classnames';

import Menu from "./Menu";
import Lang from "./Lang";
import Logo from "../../Components/Logo";

import styles from './index.module.scss';

const Nav = ({lang, setLang}) => {

    const [active, setActive] = useState(false);

    return (
        <nav className={styles.block}>
            <div className="container-fluid">
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.cell}>
                            <Logo />
                        </div>
                        <div className={styles.cell}>
                            <Menu
                                active={active}
                                setActive={setActive}
                            />
                        </div>
                        <div className={styles.cell}>
                            <Lang
                                lang={lang}
                                setLang={setLang}
                            />
                        </div>
                        <div className={styles.cell}>
                            <div
                                className={classes(styles.toggle, active && styles.active)}
                                onClick={() => setActive(!active)}
                            >
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
