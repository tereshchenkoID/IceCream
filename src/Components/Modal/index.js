import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import {InjectedConnector} from "@web3-react/injected-connector";

import classes from "classnames";

import {setModalData} from "../../redux/actions/modalActions";
import {setAccessData} from "../../redux/actions/accessActions";

import styles from './index.module.scss';

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

const Modal = () => {
    const dispatch = useDispatch();
    const { activate } = useWeb3React();

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
            <div className={classes('gradient-background', styles.content)}>
                <h5 className={styles.title}>Connect Wallet</h5>
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
                        activate(Injected)
                        dispatch(setAccessData(1))
                        dispatch(setModalData(!modal))
                    }}
                >
                   <span className={styles.icon}>
                        <img
                            src={"/img/product/metamask.svg"}
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
                        activate(WalletConnect)
                        dispatch(setAccessData(1))
                        dispatch(setModalData(!modal))
                    }}
                >
                    <span className={styles.icon}>
                        <img
                            src={"/img/product/wallet.svg"}
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
