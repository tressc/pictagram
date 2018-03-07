import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default connect(msp, mdp)(Home);
