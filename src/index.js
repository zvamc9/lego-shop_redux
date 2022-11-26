import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './storage/reducer'
import './index.css'
import App from './App'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ 
              && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);