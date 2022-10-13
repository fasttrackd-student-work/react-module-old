import React from 'react';
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import cartItemReducer from './store/cartItemsReducer';
import productReducer from './store/productsReducer';
import loadingReducer from './store/loadingReducer';
import errorReducer from './store/errorReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartItemReducer,
  loading: loadingReducer,
  error: errorReducer
})

const logger = store => next => action => {
  console.log('Next action:')
  console.log(action)
  next(action)
  console.log('New state')
  console.log(store.getState())
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
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
