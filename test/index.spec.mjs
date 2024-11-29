import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@sequencemedia/react-router-redux-render'

import Routes from './routes.cjs'

use(sinonChai)

describe('react-render', () => {
  describe('`renderToString`', () => {
    it('is a function', () => {
      return expect(renderToString)
        .to.be.a('function')
    })
  })

  describe('`renderToStaticMarkup`', () => {
    it('is a function', () => {
      return expect(renderToStaticMarkup)
        .to.be.a('function')
    })
  })

  describe('`render`', () => {
    it('is a function', () => {
      return expect(render)
        .to.be.a('function')
    })
  })

  const store = { getState () { return {} } }
  const routerProps = { location: '/' }

  describe('`renderToString()`', () => {
    it('returns a string', () => {
      return expect(renderToString(store, routerProps, Routes))
        .to.equal('<h1>Component</h1>')
    })
  })

  describe('`renderToStaticMarkup()`', () => {
    it('returns a string', () => {
      return expect(renderToStaticMarkup(store, routerProps, Routes))
        .to.equal('<h1>Component</h1>')
    })
  })

  describe('`render()`', () => {
    it('returns a Promise resolving to a string', async () => {
      return expect(await render(store, routerProps, Routes))
        .to.equal('<h1>Component</h1>')
    })
  })
})
