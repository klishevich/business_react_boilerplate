import React from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import ListsContainer from './containers/ListsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <ListsContainer />
    </div>
  );
}

export default App;
