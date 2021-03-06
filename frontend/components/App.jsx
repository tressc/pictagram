import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal/modal';
import IndexContainer from './index/index_container';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupFormContainer } />
        <AuthRoute exact path='/login' component={ LoginFormContainer } />
        <ProtectedRoute path='/' component={ NavContainer } className="nav_bar"/>
      </Switch>
      <ProtectedRoute path={`/users/:id`} component={ ProfileContainer } />
      <ProtectedRoute exact path={`/`} component={ IndexContainer } />
    </div>
  );
};

export default App;
