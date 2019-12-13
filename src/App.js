import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className=" App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch>
          <Route exact path='/'
            component={splashPage} />

          <Route exact path='/menu'
            render={() =>
              <AllKegsPatron
                kegs={this.state.kegs}
                onDecrementPint={this.handleDecrementPint} />} />

          <Route exact path='/kegs'
            render={() => {
              <AllKegsEmployee
                kegs={this.state.kegs}
                loginState={this.state.loginState}/>;
            }} />

          <Route exact path='/employee/login'
            render={() => (
              <EmployeeLoginControl
                loginState={this.state.loginState}
                currentUser={this.state.currentUser}
                onLoginClick={this.handleLoginClick} />
            )} />
          {/* <Route exact path='/employee/login' render={() => (<EmployeeLoginForm />)} /> */}

          <Route path='/keg/new'
            render={() => {
              <NewKegControl
                kegs={this.state.kegs}
                loginState={this.state.loginState}
                onAddNewKeg={this.handleAddNewKeg} />;
            }} />

          <Route path='/keg/edit/'
            render={() => {
              <EditKegControl
                kegs={this.state.kegs}
                loginState={this.state.loginState}
                onEditKeg={this.handleEditKeg} />;
            }} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
