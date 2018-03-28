import React from 'react';
import { connect } from 'react-redux';
import ImgModal from './img_modal';
import { closeModal } from '../../actions/modal_actions';
import { deleteImage, fetchImage } from '../../actions/image_actions';
import { createComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {

  const currentImage = state.entities.images[state.ui.img_id];
  return {
    currentUser: state.session.currentUser,
    currentImage: currentImage,
    image_owner: state.entities.users[currentImage.author_id],
    comments: state.entities.comments,
    users: state.entities.users,
    id: state.ui.img_id
  };
};

const mdp = (dispatch) => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id)),
    closeModal: () => dispatch(closeModal()),
    deleteImage: (id) => dispatch(deleteImage(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchUsers: () => dispatch(fetchUsers()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id))
  };
};

export default connect(msp, mdp)(ImgModal);
