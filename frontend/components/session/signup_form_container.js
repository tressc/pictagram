import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';


const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SignUpForm);
