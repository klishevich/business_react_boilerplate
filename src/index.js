import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const initialState = { listsIndex: {isFetching: false, lists: [], didInvalidate: true} };
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

var rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  rootEl
);

// // Are we in development mode?
// if (module.hot) {
// 	console.log('module.hot');
//   // Whenever a new version of App.js is available
//   module.hot.accept('./App', function () {
//     // Require the new version and render it instead
//     var NextApp = require('./App');
//     ReactDOM.render(
//     	<Provider store={store}>
//   	  	<NextApp />
//   	  </Provider>,
//     	rootEl
//     );
//   })
// }
