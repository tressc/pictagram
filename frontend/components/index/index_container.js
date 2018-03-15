import { connect } from 'react-redux';
import IndexPage from './index';
import { fetchImages } from '../../actions/image_actions';
import { createComment } from '../../actions/comment_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    images: Object.values(state.entities.images),
    users: state.entities.users,
    comments: state.entities.comments
  };
};

const mdp = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    createComment: (comment) => dispatch(createComment(comment))
  };
};


export default connect(msp, mdp)(IndexPage);
