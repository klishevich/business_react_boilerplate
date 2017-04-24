import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import ListsContainer from './containers/ListsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideMenu />
        <ListsContainer />
      </div>
    );
  }
}

export default App;
