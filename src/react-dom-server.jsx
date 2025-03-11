/**
 *  @typedef {import('redux').Store} Store
 *  @typedef {ReactRouterReduxRenderTypes.RouterPropsType} RouterPropsType
 *  @typedef {ReactRouterReduxRenderTypes.RoutesType} RoutesType
 *
 *  @typedef {{
 *    props: RouterPropsType
 *  }} RouterPropsException
 *
 *  @typedef {{
 *    e: unknown
 *  }} Exception
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
 *  @param {Error} e
 *  @param {RouterPropsException | Exception} data
 *  @returns A boom object
 */
function badImplementation (e, data) {
  return (
    Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
  )
}

/**
 *  @param {Store} store
 *  @param {RouterPropsType} routerProps
 *  @param {RoutesType} routes
 *  @returns {string}
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
    if (e instanceof Error) throw badImplementation(e, { props: routerProps })
    throw badImplementation(new Error('Exception'), { e })
  }
}

/**
 *  @param {Store} store
 *  @param {RouterPropsType} routerProps
 *  @param {RoutesType} routes
 *  @returns {string}
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
    if (e instanceof Error) throw badImplementation(e, { props: routerProps })
    throw badImplementation(new Error('Exception'), { e })
  }
}
