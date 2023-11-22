import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from "./App.jsx"
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
)
