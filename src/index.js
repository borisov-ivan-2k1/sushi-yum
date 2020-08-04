import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './redux/configureStore'

import { Router, BrowserRouter } from "react-router-dom"
import {createBrowserHistory} from 'history'
// import "typeface-roboto";

const history = createBrowserHistory()

ReactDOM.render(
 <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
      <App />
    </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);

