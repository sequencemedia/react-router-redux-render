import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom'
import Boom from '@hapi/boom'
import debug from 'debug'

const log = debug('@sequencemedia/react-router-redux-render')

log('`react-router-redux-render` is awake')

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
const notFound = (data) => Boom.notFound('Routing exception', data)

const getReactDOMServerRenderToString = (store, routerProps, routes) => {
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

const getReactDOMServerRenderToStaticMarkup = (store, routerProps, routes) => {
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

/**
 * @return {String}
 */
export const renderToString = (store, { location, context = {}, ...router } = {}, routes = {}) => (
  getReactDOMServerRenderToString(store, { ...router, location, context }, routes) || throw notFound({ ...router, location, context })
)

/**
 * @return {String}
 */
export const renderToStaticMarkup = (store, { location, context = {}, ...router } = {}, routes = {}) => (
  getReactDOMServerRenderToStaticMarkup(store, { ...router, location, context }, routes) || throw notFound({ ...router, location, context })
)

/**
 * @return {Promise}
 */
export const render = async (store, { location, context = {}, ...router } = {}, routes = {}) => (
  getReactDOMServerRenderToString(store, { ...router, location, context }, routes) || throw notFound({ ...router, location, context })
)
