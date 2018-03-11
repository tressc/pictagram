import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal/modal';


const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupFormContainer } />
        <AuthRoute exact path='/login' component={ LoginFormContainer } />
        <ProtectedRoute path='/' component={ NavContainer } />
      </Switch>
      <ProtectedRoute path={`/:id`} component={ ProfileContainer } />
    </div>
  );
};

export default App;
