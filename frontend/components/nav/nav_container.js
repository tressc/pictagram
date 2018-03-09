import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(Nav);
