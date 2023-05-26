import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom/server'
import Boom from '@hapi/boom'

/**
 * @param {Error} e
 * @param {{props: Object.<string, any>}} data
 * @returns A boom object
 */
const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

/**
 * @param {Object.<string, any>} store
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
 * @param {Object.<string, any>} store
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
