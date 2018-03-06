import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
  return (
    <div>
      <h1>aw yis</h1>
      <Route path="/signup" component={ SignupFormContainer } />
    </div>
  );
};

export default App;
