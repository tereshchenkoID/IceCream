import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReactTitle} from "react-meta-tags";

import classes from "classnames";

import {setModalData} from "../../redux/actions/modalActions";

import styles from './index.module.scss';

const Unlock = () => {
    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modalReducer)

    return (
        <main>
            <ReactTitle title={'IceCream | Unlock'}/>

            <section className={classes("section", styles.section)}>
                <div className={classes("container-fluid", styles.fluid)}>
                    <div className={classes("container", styles.container)}>
                        <button
                            onClick={() => {dispatch(setModalData(!modal))} }
                            className={styles.button}
                        >
                            <span className={styles.text}>Unlock</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Unlock;
