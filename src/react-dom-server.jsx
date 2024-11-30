/**
 * @typedef {import('redux').Store} Store
 */

import debug from 'debug'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {
  Provider
} from 'react-redux'
import {
  StaticRouter as Router
} from 'react-router'
import Boom from '@hapi/boom'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

/**
 * @param {Error} e
 * @param {{props: Object.<string, any>}} data
 * @returns A boom object
 */
const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

/**
 * @param {Store} store
 * @param {Object.<string, any>} routerProps
 * @param {Object.<string, any>} routes
 * @returns {string}
 */
export function getReactDOMServerRenderToString (store, routerProps, routes) {
  try {
    return ReactDOMServer.renderToString(
      <Provider store={store}>
        <Router {...routerProps}>
          {routes}
        </Router>
      </Provider>
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, routerProps)
  }
}

/**
 * @param {Store} store
 * @param {Object.<string, any>} routerProps
 * @param {Object.<string, any>} routes
 * @returns {string}
 */
export function getReactDOMServerRenderToStaticMarkup (store, routerProps, routes) {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <Router {...routerProps}>
          {routes}
        </Router>
      </Provider>
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, routerProps)
  }
}
