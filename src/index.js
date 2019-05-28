import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'

import App from './app'

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
const notFound = (data) => Boom.notFound('Routing exception', data)

const getReactDOMServerRenderToString = ({ store, location, context, routes }) => {
  try {
    return ReactDOMServer.renderToString(
      <App
        store={store}
        router={{ location, context }}
        routes={routes}
      />
    )
  } catch (e) {
    throw badImplementation(e, { location, context })
  }
}

const getReactDOMServerRenderToStaticMarkup = ({ store, location, context, routes }) => {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <App
        store={store}
        router={{ location, context }}
        routes={routes}
      />
    )
  } catch (e) {
    throw badImplementation(e, { location, context })
  }
}

/**
 * @return {String}
 */
export const renderToString = (store, routes, location, context = {}) => (
  getReactDOMServerRenderToString({ store, routes, location, context }) || throw notFound({ location, context })
)

/**
 * @return {String}
 */
export const renderToStaticMarkup = (store, routes, location, context = {}) => (
  getReactDOMServerRenderToStaticMarkup({ store, routes, location, context }) || throw notFound({ location, context })
)

/**
 * @return {Promise}
 */
export const render = async (store, routes, location, context = {}) => renderToString(store, routes, location, context)
