import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import  * as InitialState from '../constants/InitialState';
const { customers, ordersArray, trafficArray, PRODUCTS } = InitialState;

function orderReducer(state = {orders: ordersArray}, action){
  return state;
}
function productsReducer(state={products: PRODUCTS}, action){
  return state;
}

export default function configureStore (history, initialState) {
  const reducers = {
    order: orderReducer,
    products: productsReducer
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