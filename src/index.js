import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import  * as InitialState from '../src/constants/InitialState';
const { customers, ordersArray, trafficArray } = InitialState;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({
  basename: baseUrl
});

// Get the application-wide store instance, prepopulating with state from the server where available.
let initialState = window.initialReduxState;
initialState = {
  ...initialState,
  customers: customers,
  orders: ordersArray,
  traffic: trafficArray
}
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      < App />
    </HashRouter>
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();