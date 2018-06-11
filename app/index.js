import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import reducer from './store/reducers';

import App from './app';

// const store = createStore(reducer);
// const action = type => store.dispatch({type});


ReactDOM.render(
  <App />,
  document.getElementById('app')
)