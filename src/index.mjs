/**
 * @typedef {import('redux').Store} Store
 */

import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} from './react-dom-server.cjs'

const log = debug('@sequencemedia/react-router-redux-render')

log('`react-router-redux-render` is awake')

/**
 * @param {Object.<string, any>} data
 * @returns A boom object
 */
const notFound = (data) => Boom.notFound('Routing exception', data)

/**
 * @param {Store} store
 * @param {Object.<string, any>} routerProps
 * @param {Object.<string, any>} routes
 * @returns {string}
 */
export function renderToString (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 * @param {Store} store
 * @param {Object.<string, any>} routerProps
 * @param {Object.<string, any>} routes
 * @returns {string}
 */
export function renderToStaticMarkup (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToStaticMarkup(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 * @param {Store} store
 * @param {Object.<string, any>} routerProps
 * @param {Object.<string, any>} routes
 * @returns {Promise<string>}
 */
export async function render (store, { location, context = {}, ...router } = {}, routes = {}) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}
