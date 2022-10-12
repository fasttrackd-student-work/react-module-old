import React from 'react';
import { combineReducers } from 'redux'
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

const store = configureStore({
  reducer: rootReducer
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
