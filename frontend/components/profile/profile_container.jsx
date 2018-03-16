import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import { receiveImgId } from '../../actions/ui_actions';
import { fetchImages } from '../../actions/image_actions';

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const user = state.entities.users[ownProps.match.params.id];
  const images = user ? user.image_ids.map(imageId => state.entities.images[imageId]) : [];
  const isModal = state.ui.modal;
  return {
    user,
    images,
    currentUser,
    isModal
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    receiveImgId: (id) => dispatch(receiveImgId(id)),
    fetchImages: () => dispatch(fetchImages()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Profile);
