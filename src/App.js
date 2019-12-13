import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import Login from './components/Login'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'
          component={Login} />
        <Route exact path='/database'
          component={Database} />
        <Route exact path='/charts'
          component={Charts} />
      </Switch>
    </div>
  );

}

export default App;
