import React from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
} from 'react-router-dom'
import { isLoggedIn } from './util/auth'

const Navigation = props => (
  <div>
    <NavLink exact to="/">Jobs List</NavLink>

    {/* links for logged in users */}
    { isLoggedIn() && <NavLink to="/jobs/new">New Job</NavLink> }
    { isLoggedIn() && <NavLink to="/profile">Profile</NavLink> }
    { isLoggedIn() && <NavLink to="/logout">Log Out</NavLink> }

    {/* links for logged out users */}
    { !isLoggedIn() && <NavLink to="/login">Log In</NavLink> }
    { !isLoggedIn() && <NavLink to="/users/new">Sign Up</NavLink> }
  </div>
)

export default Navigation;