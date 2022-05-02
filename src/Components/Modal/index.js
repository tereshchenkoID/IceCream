import React from "react";
import {useDispatch, useSelector} from "react-redux";

import classes from "classnames";

import {setModalData} from "../../redux/actions/modalActions";
import {setAccessData} from "../../redux/actions/accessActions";

import styles from './index.module.scss';

const Modal = () => {
    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modalReducer)

    const handleClick = (e) => {
        const action = e.target.getAttribute('data-close')

        if (action) {
            dispatch(setModalData(!modal))
        }
    }

    return (
        <div
            className={classes(styles.block, modal && styles.active)}
            data-close={true}
            onClick={(event) => {
                handleClick(event)
            }}
        >
            <div className={styles.content}>
                <h6 className={styles.title}>Connect Wallet</h6>
                <span
                    className={styles.close}
                    data-close={true}
                    onClick={(event) => {
                        handleClick(event)
                    }}
                />
                <button
                    type={'button'}
                    className={classes(styles.button, styles.metamask)}
                    onClick={() => {
                        dispatch(setAccessData(1))
                        dispatch(setModalData(!modal))
                    }}
                >
                   <span className={styles.icon}>
                        <img
                            src={"https://icecreamfinance.app/static/media/metamask-fox.c06f3a3e.svg"}
                            alt={"Metamask"}
                            loading={'lazy'}
                            className={styles.icon}
                        />
                    </span>
                    <span className={styles.label}>Metamask</span>
                </button>
                <button
                    type={'button'}
                    className={classes(styles.button, styles.wallet)}
                    onClick={() => {
                        dispatch(setAccessData(1))
                        dispatch(setModalData(!modal))
                    }}
                >
                    <span className={styles.icon}>
                        <img
                            src={"https://icecreamfinance.app/static/media/wallet-connect.37f2bc6e.svg"}
                            alt={"Metamask"}
                            loading={'lazy'}
                        />
                    </span>
                    <span className={styles.label}>Wallet</span>
                </button>
            </div>
        </div>
    );
}

export default Modal;
