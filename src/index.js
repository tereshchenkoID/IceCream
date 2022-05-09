import React from 'react';
import ReactDOM from 'react-dom';

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

import './styles/app.scss';

import App from './App';

import reportWebVitals from './reportWebVitals';

function getLibrary(provider) {
    return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
