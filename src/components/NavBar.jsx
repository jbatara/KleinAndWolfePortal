import React from 'react';
import {connect} from 'react-redux';

function NavBar(props) {
  return navBarType(props.client);
}

function navBarType(company){
  switch (company) {
    case 'Bridge City Roasters':
      return (<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="#/">Klein & Wolfe | Bridge City Roasters</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/analytics">Analytics<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/traffic">Traffic <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/orders">Orders <span className="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </nav>);
  
    default:
      return (<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="#/">Klein & Wolfe</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/analytics">Analytics<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/traffic">Traffic <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/orders">Orders <span className="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </nav>);
  }
}

const mapPropsToState = state =>{
  return{
    client: state.user.company
  }
}

export default connect(mapPropsToState)(NavBar);
