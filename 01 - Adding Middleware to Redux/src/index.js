import React from 'react';
import { combineReducers, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import cartItemReducer from './store/cartItemsReducer';
import productReducer from './store/productsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartItemReducer
})

const logger = store => next => action => {
  console.log('Next action:')
  console.log(action)
  next(action)
  console.log('New state')
  console.log(store.getState())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
