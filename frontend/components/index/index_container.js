import { connect } from 'react-redux';
import IndexPage from './index';
import { fetchImages } from '../../actions/image_actions';
import { createComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    images: Object.values(state.entities.images),
    users: state.entities.users,
    comments: state.entities.comments,
    imageObjects: state.entities.images
  };
};

const mdp = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchUsers: () => dispatch(fetchUsers()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id))
  };
};


export default connect(msp, mdp)(IndexPage);
