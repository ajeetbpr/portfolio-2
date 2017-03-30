// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery'
import Tether from 'tether'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>

ReactDOM.render(wrapApp(App), rootEl)
