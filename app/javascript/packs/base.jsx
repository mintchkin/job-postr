import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from './navigation'
import Routes from './routes'

const Base = props => (
  <div>
    <Navigation />
    <Routes />
  </div>
)

export default Base;
