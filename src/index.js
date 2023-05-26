import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom/server'
import Boom from '@hapi/boom'
import debug from 'debug'

const log = debug('@sequencemedia/react-router-redux-render')

log('`react-router-redux-render` is awake')

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
const notFound = (data) => Boom.notFound('Routing exception', data)

function getReactDOMServerRenderToString (store, routerProps, routes) {
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

function getReactDOMServerRenderToStaticMarkup (store, routerProps, routes) {
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
 * @return {string}
 */
export function renderToString (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 * @return {string}
 */
export function renderToStaticMarkup (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToStaticMarkup(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 * @return {Promise<string>}
 */
export async function render (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound({ ...router, location, context })
}
