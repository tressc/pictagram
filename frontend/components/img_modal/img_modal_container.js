import React from 'react';
import { connect } from 'react-redux';
import ImgModal from './img_modal';
import { closeModal } from '../../actions/modal_actions';
import { fetchImage } from '../../actions/image_actions';

const msp = (state, ownProps) => {
  return {
    image: Object.values(state.entities.images)[0]
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchImage: (id) => dispatch(fetchImage(id))
  };
};

export default connect(msp, mdp)(ImgModal);
