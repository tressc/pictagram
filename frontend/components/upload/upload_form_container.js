import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { createImage } from '../../actions/image_actions';
// const msp = (state) => {
//   return {
//
//   };
// };

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createImage: (image) => dispatch(createImage(image))
  };
};

export default connect(null, mdp)(UploadForm);
