import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <header className=" App-header">
        <Switch>
          <Route exact path='/'
            component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
