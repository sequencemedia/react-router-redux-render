import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom'

const App = ({ store, router, routes }) => (
  <Provider store={store}>
    <Router {...router}>
      {routes}
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
  router: PropTypes.shape({
    location: PropTypes.string.isRequired,
    context: PropTypes.shape().isRequired
  }).isRequired,
  routes: PropTypes.shape().isRequired
}

export default App
