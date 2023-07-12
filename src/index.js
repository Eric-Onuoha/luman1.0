import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { ReduxStore } from "./reduxStore/reduxStore";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./reduxStore/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
