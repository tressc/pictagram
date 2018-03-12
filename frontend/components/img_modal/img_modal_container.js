import React from 'react';
import { connect } from 'react-redux';
import ImgModal from './img_modal';
import { closeModal } from '../../actions/modal_actions';


const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(ImgModal);
