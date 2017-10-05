import React from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
} from 'react-router-dom'

const isLoggedIn = function() {
  return !!sessionStorage.jwt;
}

const Navigation = props => (
  <div>
    <NavLink exact to="/">Jobs List</NavLink>

    {/* links for logged in users */}
    { isLoggedIn() && <NavLink to="/jobs/new">New Job</NavLink> }
    { isLoggedIn() && <NavLink to="/logout">Log Out</NavLink> }

    {/* links for logged out users */}
    { !isLoggedIn() && <NavLink to="/login">Log In</NavLink> }
    { !isLoggedIn() && <NavLink to="/users/new">Sign Up</NavLink> }
  </div>
)

export default Navigation;