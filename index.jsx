import React from 'react';
import { render } from 'react-dom';
import App from "./App";
import "./App.css";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

let store = createStore(reducer);


import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
);
