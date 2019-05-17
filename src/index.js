import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const reduxMiddleware = [thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware));


render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);
