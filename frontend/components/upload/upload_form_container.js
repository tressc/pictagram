import React from 'react';
import UploadForm from './upload_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

// const msp = (state) => {
//   return {
//
//   };
// };

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(UploadForm);
