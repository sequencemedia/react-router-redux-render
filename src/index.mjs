/**
 *  @typedef {import('redux').Store} Store
 *  @typedef {ReactRouterReduxRenderTypes.RouterPropsType} RouterPropsType
 *  @typedef {ReactRouterReduxRenderTypes.RoutesType} RoutesType
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
 *  @param {RouterPropsType} data
 *  @returns A boom object
 */
function notFound (data) {
  return (
    Boom.notFound('Routing exception', data)
  )
}

/**
 *  @param {Store} store
 *  @param {RouterPropsType & { context?: Record<PropertyKey, unknown> }} routerProps
 *  @param {RoutesType} routes
 *  @returns {string}
 */
export function renderToString (store, { location, context = {}, ...router }, routes) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 *  @param {Store} store
 *  @param {RouterPropsType & { context?: Record<PropertyKey, unknown> }} routerProps
 *  @param {RoutesType} routes
 *  @returns {string}
 */
export function renderToStaticMarkup (store, { location, context = {}, ...router }, routes) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToStaticMarkup(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}

/**
 *  @param {Store} store
 *  @param {RouterPropsType & { context?: Record<PropertyKey, unknown> }} routerProps
 *  @param {RoutesType} routes
 *  @returns {string}
 */
export function render (store, { location, context = {}, ...router }, routes) {
  const routerProps = { ...router, location, context }
  const string = getReactDOMServerRenderToString(store, routerProps, routes)
  if (string) return string
  throw notFound(routerProps)
}
