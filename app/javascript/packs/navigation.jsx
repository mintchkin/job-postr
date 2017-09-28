import React from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
} from 'react-router-dom'

const Navigation = props => (
  <div>
    <NavLink exact to="/">Jobs List</NavLink>
    <NavLink to="/jobs/new">New Job</NavLink>
    <NavLink to="/users/new">Sign Up</NavLink>
    <NavLink to="/login">Log In</NavLink>
  </div>
)

export default Navigation;