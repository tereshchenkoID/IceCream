import React, {useState, useEffect} from "react";
import { routes } from './routing/mainRoutes';
import store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import { I18nProvider, LOCALES } from "./i18n";

import Api from "./Components/Api"
import Preloader from "./Components/Preloader"
import Routing from "./Components/Routing";
import Nav from "./Layouts/Nav";
import Footer from "./Layouts/Footer";

const setLanguage = () => {
    return localStorage.language ? JSON.parse(localStorage.getItem('language')) : 'ENGLISH';
};

const App = () => {
  const [lang, setLang] = useState(LOCALES[setLanguage()]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      setTimeout(() => setLoader(!loader), 1000)
  }, []);

  return (
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
                  </BrowserRouter>
              </Provider>
          </I18nProvider>
  );
}

export default App;
