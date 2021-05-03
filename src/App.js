import React, {useState} from "react";
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import { routes } from './routing/mainRoutes';
import store from './redux/store'

import { I18nProvider, LOCALES } from "./i18n";

import styles from './App.module.scss';

import Routing from "./Components/Routing";

import Nav from "./Layouts/Nav";
import Footer from "./Layouts/Footer";

const App = () => {
  const [lang, setLang] = useState(LOCALES.ENGLISH);

  return (
      <I18nProvider locale={lang}>
          <Provider store={store}>
              <BrowserRouter>
                  <div className={styles.block}>
                      <Nav lang={lang} setLang={setLang}/>
                      <div className={styles.main}>
                          <div className={styles.container}>
                              <Routing {...{ routes }} />
                          </div>
                      </div>
                      <Footer />
                  </div>
              </BrowserRouter>
          </Provider>
      </I18nProvider>
  );
}

export default App;
