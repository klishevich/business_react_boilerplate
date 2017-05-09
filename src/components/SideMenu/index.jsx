import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SideMenu() {
  return (
    <div className="side-menu">
      <h3>Side Menu</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lists">Lists Page</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
  );
}

export default SideMenu;
