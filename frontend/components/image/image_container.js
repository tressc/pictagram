import React from 'react';
import { connect } from 'react-redux';
import Image from './image';
import { deleteImage, fetchImage } from '../../actions/image_actions';

const msp = (state, ownProps) => {
  return {
    image: state.entities.images[ownProps.imgId] || {},
    imgId: ownProps.imgId,
    currentUser: state.session.currentUser,
    errors: state.errors.image
  };
};

const mdp = (dispatch) => {
  return {
    deleteImage: id => dispatch(deleteImage(id)),
    fetchImage: id => dispatch(fetchImage(id))
  };
};

export default connect(msp, mdp)(Image);
