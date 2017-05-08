import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-3">
          <img src={logo} className="header__app-logo" alt="logo" />
        </div>
        <div className="col-md-9">
          <h2>Business Application Boilerplate (React, Redux)</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
