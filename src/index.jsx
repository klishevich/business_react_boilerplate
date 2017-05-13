import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';
import rootReducer from './reducers';

const initialState = { };
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const rootEl = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Component />
      </Provider>
    ),
    rootEl,
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./App').default;
    /* eslint-enable global-require */
    render(NextApp);
  });
}
