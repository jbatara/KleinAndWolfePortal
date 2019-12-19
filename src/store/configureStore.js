import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import  * as InitialState from '../constants/InitialState';
const { customers, ordersArray, trafficArray, PRODUCTS } = InitialState;

function orderReducer(state =ordersArray, action){
  return state;
}
function productsReducer(state=PRODUCTS, action){
  return state;
}
function trafficReducer(state=trafficArray, action){
  return state;
}

function customerReducer(state=customers, action){
  return state;
}

function userReducer(state={userName: 'cmulaney', company: 'Bridge City Roasters'}, action){
  return state;
}

export default function configureStore (history, initialState) {
  const reducers = {
    orders: orderReducer,
    products: productsReducer,
    user: userReducer,
    customers: customerReducer,
    traffic: trafficReducer
  };

  const middleware = [
    // thunk,
    // routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
    // orders: ordersArray,
    // customers: customers,
    // traffic: trafficArray
  });
  return createStore(rootReducer);
}