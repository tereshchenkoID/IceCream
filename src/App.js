import React, {useState, useEffect} from "react";
import { routes } from './routing/mainRoutes';
import store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import MetaTags from "react-meta-tags";

import { I18nProvider, LOCALES } from "./i18n";

import Api from "./Components/Api"
import Preloader from "./Components/Preloader"
import Routing from "./Components/Routing";
import Cookie from "./Components/Cookie";
import Nav from "./Layouts/Nav";
import Footer from "./Layouts/Footer";

const setLanguage = () => {
    return localStorage.language ? JSON.parse(localStorage.getItem('language')) : 'ENGLISH';
};

const App = () => {
  const [lang, setLang] = useState(LOCALES[setLanguage()]);
  const [loader, setLoader] = useState(true)
  const [cookie, setCookie] = useState(JSON.parse(localStorage.getItem('cookie')) || '0')

  useEffect(() => {
      setTimeout(() => setLoader(!loader), 1000)
  }, []);

  return (
      <>
          <MetaTags>
              <link rel="canonical" href="https://global-workers.eu" />

              <title>Global Workers</title>

              <meta name="title" content="Global Workers" />
              <meta name="description" content="Find jobs" />
              <meta name="keywords" content="Keywords" />

              <meta property="og:type" content="https://global-workers.eu" />
              <meta property="og:url" content="https://global-workers.eu" />
              <meta property="og:title" content="Title" />
              <meta property="og:description" content="Description" />
              <meta property="og:image" content="https://global-workers.eu/logo512.png" />

              <meta property="twitter:url" content="https://global-workers.eu" />
              <meta property="twitter:card" content="https://global-workers.eu/logo512.png" />
              <meta property="twitter:title" content="Title" />
              <meta property="twitter:description" content="Description" />
              <meta property="twitter:image" content="https://global-workers.eu/logo512.png" />
          </MetaTags>
          {
              loader
              ?
                  <Preloader/>
              :
                  <I18nProvider locale={lang}>
                      <Provider store={store}>
                          <BrowserRouter>
                              <Api/>
                              <Nav lang={lang} setLang={setLang}/>
                              <Routing {...{ routes }} />
                              <Footer />
                              {
                                  cookie === '0' &&
                                  <Cookie
                                      cookie={cookie}
                                      setCookie={setCookie}
                                  />
                              }
                          </BrowserRouter>
                      </Provider>
                  </I18nProvider>
          }
      </>
  );
}

export default App;
