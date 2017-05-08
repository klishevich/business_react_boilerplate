import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import ListsContainer from './containers/ListsContainer';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <SideMenu />
        <div className="app-main">
          <Route exact path="/" component={Home} />
          <Route path="/lists" component={ListsContainer} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  );
}

export default App;
