import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Jobs from './components/jobs'
import JobForm from './components/jobform'
import UserForm from './components/userform'
import LoginForm from './components/loginform'
import Logout from './components/logout'

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Jobs} />
    <Route path="/jobs/new" component={JobForm} />
    <Route path="/users/new" component={UserForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/logout" component={Logout} />
  </Switch>
)

export default Routes;
