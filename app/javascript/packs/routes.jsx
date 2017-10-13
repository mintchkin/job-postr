import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Jobs from './components/jobs'
import JobForm from './forms/jobform'
import UserForm from './forms/userform'
import LoginForm from './forms/loginform'
import Logout from './components/logout'
import UserProfile from './components/userprofile'
import { isLoggedIn } from './util/auth'

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Jobs} />
    <Route path="/users/new" component={UserForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/logout" component={Logout} />

    <ProtectedRoute path="/profile" component={UserProfile} />
    <ProtectedRoute path="/jobs/new" component={JobForm} />
  </Switch>
)

// Redirect to login for protected components
const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isLoggedIn() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: "/login",
            }} />
        )
    )} />
)

export default Routes;
