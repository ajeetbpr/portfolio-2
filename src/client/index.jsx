// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>

ReactDOM.render(wrapApp(App), rootEl)
