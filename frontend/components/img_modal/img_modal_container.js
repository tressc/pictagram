import React from 'react';
import { connect } from 'react-redux';
import ImgModal from './img_modal';
import { closeModal } from '../../actions/modal_actions';
import { fetchImage, deleteImage } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const currentImage = state.entities.images[state.ui.img_id];
  return {
    currentUser: state.session.currentUser,
    currentImage: currentImage,
    image_owner: state.entities.users[currentImage.author_id].user,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchImage: (id) => dispatch(fetchImage(id)),
    removeImage: () => dispatch(removeImage()),
    deleteImage: (id) => dispatch(deleteImage(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(ImgModal);
