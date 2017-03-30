// @flow

import {
  homePage,
  webDevPage,
  cartogPage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  WEB_DEV_ROUTE,
  CARTOG_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(WEB_DEV_ROUTE, (req, res) => {
    res.send(renderApp(req.url, webDevPage()))
  })

  app.get(CARTOG_ROUTE, (req, res) => {
    res.send(renderApp(req.url, cartogPage()))
  })

  app.get('/500', () => {
    throw Error('500 internal server error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('500 error, something went poorly :/')
  })
}
