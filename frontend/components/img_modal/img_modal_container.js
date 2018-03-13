import React from 'react';
import { connect } from 'react-redux';
import ImgModal from './img_modal';
import { closeModal } from '../../actions/modal_actions';
import { fetchImage, deleteImage } from '../../actions/image_actions';

const msp = (state, ownProps) => {
  return {
    image: state.entities.images[state.ui.img_id]
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchImage: (id) => dispatch(fetchImage(id)),
    removeImage: () => dispatch(removeImage()),
    deleteImage: (id) => dispatch(deleteImage(id))
  };
};

export default connect(msp, mdp)(ImgModal);
