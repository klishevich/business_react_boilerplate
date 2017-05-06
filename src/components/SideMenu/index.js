import React, { Component } from 'react';
import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <h3>Side Menu</h3>
        <p><a href='#'>Lists Page</a></p>
        <p><a href='#'>New List</a></p>
      </div>
    );
  }
}

export default SideMenu;
