import React, {useState, Suspense} from "react";
import { routes } from './routing/mainRoutes';
import store from './redux/store'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import MetaTags from "react-meta-tags";

import { I18nProvider, LOCALES } from "./i18n";

import Api from "./Components/Api"
import Routing from "./Components/Routing";
import Preloader from "./Components/Preloader"
import Meta from "./Components/Meta";
import Nav from "./Layouts/Nav";
import Footer from "./Layouts/Footer";
import SelectRole from "./Modules/SelectRole";

import styles from './App.module.scss';

const setLanguage = () => {
    return localStorage.language ? JSON.parse(localStorage.getItem('language')) : 'ENGLISH';
};

const App = () => {
  const [lang, setLang] = useState(LOCALES[setLanguage()])

  return (
      <>
          <MetaTags>
              <I18nProvider locale={lang}>
                <Meta />
              </I18nProvider>
          </MetaTags>

          <I18nProvider locale={lang}>
              <Provider store={store}>
                  <SelectRole/>
                  <Api/>
                  <BrowserRouter>
                      <Nav
                          lang={lang}
                          setLang={setLang}
                      />
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
                      <button
                          className={styles.scroll}
                          onClick={() => window.scrollTo(0, 0)}
                      >
                          <svg
                              width="32px"
                              height="32px"
                              viewBox="0 0 32 32"
                              fill="none"
                              stroke="currentcolor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                          >
                              <path d="M6 10 L16 2 26 10 M16 2 L16 30" />
                          </svg>
                      </button>
                  </BrowserRouter>
              </Provider>
          </I18nProvider>
      </>
  )
}

export default App;
