import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => {
  const user = (store.getState().session.currentUser);

  //TODO figure out how to conditionally render login/signup
  if (user) {
    console.log(user);
  }
  return (
    <div>
      <h1>aw yis</h1>
      <Route path="/signup" component={ SignupFormContainer } />
      <Route path="/login" component={ LoginFormContainer } />
    </div>
  );
};

export default App;
