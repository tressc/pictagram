import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  return {
    user
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(Profile);
