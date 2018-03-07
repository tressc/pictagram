import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

  //TODO figure out how to conditionally render login/signup
  // const user = (store.getState().session.currentUser);
  // if (user) {
  //   console.log(user);
  // }

  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupFormContainer } />
        <AuthRoute exact path='/login' component={ LoginFormContainer } />
        <ProtectedRoute exact path='/' component={ HomeContainer } />
      </Switch>
    </div>
  );
};

export default App;
