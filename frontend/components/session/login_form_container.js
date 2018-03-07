import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(LoginForm);
