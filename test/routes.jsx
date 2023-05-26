import React from 'react'

import {
  Routes,
  Route
} from 'react-router-dom'

import Component from './component.jsx'

export default (
  <Routes>
    <Route exact path='/' element={<Component />} />
  </Routes>
)
