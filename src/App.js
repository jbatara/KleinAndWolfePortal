import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import Login from './components/Login'
import NavBar from './components/NavBar';
import LiveDataView from './components/LiveDataView';
import Home from './components/Home';
import Traffic from './components/Traffic';
import Orders from './components/Orders';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'
          component={Home} />
        <Route exact path='/analytics'
          component={LiveDataView} />
        <Route exact path='/traffic'
          component={Traffic} />
          <Route exact path='/orders'
          component={Orders} />
      </Switch>
    </div>
  );

}

export default App;
