import type { Store } from 'redux'

declare module '#react-router-redux-render/react-dom-server' {
  type RouterPropsType = ReactRouterReduxRenderTypes.RouterPropsType
  type RoutesType = ReactRouterReduxRenderTypes.RoutesType

  export function getReactDOMServerRenderToString (store: Store, routerProps: RouterPropsType, routes: RoutesType): string

  export function getReactDOMServerRenderToStaticMarkup (store: Store, routerProps: RouterPropsType, routes: RoutesType): string
}
