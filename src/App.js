import React, {Suspense} from "react";
import { routes } from './routing/mainRoutes';
import store from './redux/store'

// import { Web3ReactProvider } from '@web3-react/core'
// import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from '@web3-react/core'

// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import MetaTags from "react-meta-tags";

import Api from "./Components/Api"
import Routing from "./Components/Routing";
import Preloader from "./Components/Preloader"
import Meta from "./Components/Meta";
import Modal from "./Components/Modal";

import Nav from "./Layouts/Nav";

import styles from './App.module.scss';

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

const App = () => {
    // const { library, active, chainId, account, activate, deactivate } = useWeb3React();

    return (
        <div className={styles.content}>
            {/*<button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>*/}
            {/*<button onClick={() => { activate(Injected) }}>Metamask</button>*/}
            {/*<button onClick={deactivate}>Disconnect</button>*/}

            {/*<div>Connection Status: {active}</div>*/}
            {/*<div>Account: {account}</div>*/}
            {/*<div>Network ID: {chainId}</div>*/}

            <MetaTags>
                <Meta />
            </MetaTags>

            <Provider store={store}>
                <Api/>
                <BrowserRouter>
                    <Nav/>
                    <Suspense
                        fallback={
                            <div className={styles.preloader}>
                                <Preloader/>
                            </div>
                        }
                    >
                        <Routing {...{ routes }} />
                    </Suspense>
                    <Modal />
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App;
