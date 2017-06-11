import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import ListsPageContainer from './containers/ListsPageContainer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TopicsPage from './components/TopicsPage';
import ListEditPageContainer from './containers/ListEditPageContainer';
import ListNewPageContainer from './containers/ListNewPageContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <SideMenu />
        <div className="app-main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lists" component={ListsPageContainer} />
          <Route path="/lists_new" component={ListNewPageContainer} />
          <Route path="/lists/:listId" component={ListEditPageContainer} />
          <Route path="/about" component={AboutPage} />
          <Route path="/topics" component={TopicsPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
