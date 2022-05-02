import React, {Suspense} from "react";
import { routes } from './routing/mainRoutes';
import store from './redux/store'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import MetaTags from "react-meta-tags";

import Api from "./Components/Api"
import Routing from "./Components/Routing";
import Preloader from "./Components/Preloader"
import Meta from "./Components/Meta";
import Modal from "./Components/Modal";

import Nav from "./Layouts/Nav";
import Footer from "./Layouts/Footer";

import styles from './App.module.scss';

const App = () => {

    return (
        <div className={styles.content}>
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
                    <Footer />
                    <Modal />
                </BrowserRouter>
            </Provider>
        </div>
  )
}

export default App;
