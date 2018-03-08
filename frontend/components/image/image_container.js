import React from 'react';
import { connect } from 'react-redux';
import Image from './image';
import { deleteImage } from '../../actions/image_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.image
  };
};

const mdp = (dispatch) => {
  return {
    deleteImage: id => dispatch(deleteImage(id))
  };
};

export default connect(msp, mdp)(Image);
