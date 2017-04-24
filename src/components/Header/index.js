import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<div className="row">
      	  <div className="col-md-3">
      	    <img src={logo} className="App-logo" alt="logo" />
      	  </div>
      	  <div className="col-md-9">
      	    <h2>Business Application Boilerplate (React, Redux)</h2>
      	  </div>
      	</div>
      </div>
    );
  }
}

export default Header;
